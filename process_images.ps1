Add-Type -AssemblyName System.Drawing
$root = "C:\Users\admin\Desktop\alom mayong best tantrik"
$img  = Join-Path $root "images"
$rootLogo = Join-Path $img "original-logo.png"
$logo     = Join-Path $img "logo.png"
$ritual   = Join-Path $img "ritual.jpg"

function Get-JpegEncoder {
  $codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
  return ($codecs | Where-Object { $_.MimeType -eq 'image/jpeg' })[0]
}

# ---------- 1. white -> alpha transparent logo, trimmed + downsized ----------
$src = New-Object System.Drawing.Bitmap($rootLogo)
$w = $src.Width; $h = $src.Height
$tmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($tmp)
$g.DrawImage($src, 0, 0, $w, $h)
$g.Dispose(); $src.Dispose()

$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$sd = $tmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$n = $sd.Stride * $h
$buf = New-Object byte[] $n
[System.Runtime.InteropServices.Marshal]::Copy($sd.Scan0, $buf, 0, $n)
$tmp.UnlockBits($sd)

# find non-transparent bounding box
$minX = $w; $minY = $h; $maxX = -1; $maxY = -1
for ($y = 0; $y -lt $h; $y++) {
  $row = $y * $sd.Stride
  for ($x = 0; $x -lt $w; $x++) {
    $i = $row + $x * 4
    $b = $buf[$i]; $gg = $buf[$i+1]; $r = $buf[$i+2]
    if ($r -gt 250 -and $gg -gt 250 -and $b -gt 250) { $buf[$i+3] = 0; continue }
    $mn = [Math]::Min($r, [Math]::Min($gg, $b))
    $a = 255 - $mn
    if ($a -le 3) { $buf[$i+3] = 0; continue }
    $buf[$i]   = [byte][Math]::Max(0, [Math]::Min(255, ($b - (255 - $a)) * 255 / $a))
    $buf[$i+1] = [byte][Math]::Max(0, [Math]::Min(255, ($gg - (255 - $a)) * 255 / $a))
    $buf[$i+2] = [byte][Math]::Max(0, [Math]::Min(255, ($r - (255 - $a)) * 255 / $a))
    $buf[$i+3] = [byte][Math]::Min(255, $a)
    if ($x -lt $minX) { $minX = $x }
    if ($x -gt $maxX) { $maxX = $x }
    if ($y -lt $minY) { $minY = $y }
    if ($y -gt $maxY) { $maxY = $y }
  }
}
# write the keyed buffer back
$tmp2 = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$sd2 = $tmp2.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
[System.Runtime.InteropServices.Marshal]::Copy($buf, 0, $sd2.Scan0, $n)
$tmp2.UnlockBits($sd2)

if ($maxX -lt 0) { throw "logo keyed to fully transparent" }
$pad = 6
$minX = [Math]::Max(0, $minX - $pad); $minY = [Math]::Max(0, $minY - $pad)
$maxX = [Math]::Min($w-1, $maxX + $pad); $maxY = [Math]::Min($h-1, $maxY + $pad)
$cw = $maxX - $minX + 1; $ch = $maxY - $minY + 1

$crop = New-Object System.Drawing.Bitmap($cw, $ch, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($crop)
$g.DrawImage($tmp2, (New-Object System.Drawing.Rectangle(0,0,$cw,$ch)), (New-Object System.Drawing.Rectangle($minX,$minY,$cw,$ch)), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose(); $tmp.Dispose(); $tmp2.Dispose()

# downscale to 420px wide, keeping it well under 100KB
$targetW = 420
$targetH = [int]($ch * $targetW / $cw)
$final = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($final)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)
$g.DrawImage($crop, 0, 0, $targetW, $targetH)
$g.Dispose(); $crop.Dispose()
$final.Save($logo, [System.Drawing.Imaging.ImageFormat]::Png)
$final.Dispose()

# ---------- 2. favicons (48 + 192) from the transparent logo ----------
$lg = New-Object System.Drawing.Bitmap($logo)
foreach ($size in @(48, 192)) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.Clear([System.Drawing.Color]::Transparent)
  $s = [int]($size * 0.96)
  $o = [int](($size - $s) / 2)
  $g.DrawImage($lg, $o, $o, $s, $s)
  $g.Dispose()
  $bmp.Save((Join-Path $root "favicon-$size.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}
$lg.Dispose()

# ---------- 3. hand-rolled .ico (PNG payload, Vista+ compatible) ----------
$p192 = Join-Path $root "favicon-192.png"
$icoBytes = [System.IO.File]::ReadAllBytes($p192)
$fs = [System.IO.File]::Create((Join-Path $root "favicon.ico"))
$bw = New-Object System.IO.BinaryWriter($fs)
$bw.Write([UInt16]0)              # reserved
$bw.Write([UInt16]1)              # type = icon
$bw.Write([UInt16]1)              # count
$bw.Write([Byte]192)              # width
$bw.Write([Byte]192)              # height
$bw.Write([Byte]0)                # palette
$bw.Write([Byte]0)                # reserved
$bw.Write([UInt16]1)              # planes
$bw.Write([UInt16]32)             # bpp
$bw.Write([UInt32]$icoBytes.Length)
$bw.Write([UInt32]22)             # offset
$bw.Write($icoBytes)
$bw.Flush(); $fs.Close()

# ---------- 4. recompress the ritual image to jpg ----------
$r = New-Object System.Drawing.Bitmap((Join-Path $img "religious.png"))
$tw = 1400
$th = [int]($r.Height * $tw / $r.Width)
$out = New-Object System.Drawing.Bitmap($tw, $th)
$g = [System.Drawing.Graphics]::FromImage($out)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($r, 0, 0, $tw, $th)
$g.Dispose(); $r.Dispose()
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [Int64]82)
$out.Save($ritual, (Get-JpegEncoder), $ep)
$out.Dispose()

Write-Host "--- results ---"
foreach ($p in @($logo, (Join-Path $root "favicon-48.png"), (Join-Path $root "favicon-192.png"), (Join-Path $root "favicon.ico"), $ritual)) {
  if (Test-Path $p) { "{0,-24} {1,8:N1} KB" -f (Split-Path $p -Leaf), ((Get-Item $p).Length/1KB) }
}
