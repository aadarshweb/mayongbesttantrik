# ==========================================================================
#  compress_gallery.ps1 - build the site's gallery images
#
#  Why this file exists: the six source images arrived with .jpg extensions
#  but one of them was a lossless PNG, so it shipped at 2 MB per tile. The
#  script re-encodes every source to a genuine, progressively-sized JPEG and
#  renames it to a descriptive slug, because the filename is a ranking signal
#  in Google Images and "watermark-removed-pexels-manishjangid-36470479" is
#  not a description of anything.
#
#  Two rules make the output visually identical to the input:
#    1. no resizing - the widest source is 1200 px, already smaller than any
#       breakpoint here, so resampling would only lose detail
#    2. quality 90 with 4:2:0 chroma - the same subsampling the sources
#       already used, so no colour detail is discarded that was not
#       already gone
#
#  Run:  .\compress_gallery.ps1 -Src "C:\path\to\the\original\downloads"
#  Add a new image by dropping it in that folder and adding one entry to $Map.
#
#  Re-runnable: sources are only ever read from -Src, so the published files
#  in images/gallery are never used as input and running it twice is safe.
#  -Src has no default on purpose. A default would have to point somewhere
#  outside the repo, and that location is exactly what gets cleaned up later,
#  turning a re-run into a confusing "missing source" failure.
# ==========================================================================
param(
  [Parameter(Mandatory = $true)]
  [string]$Src,

  [string]$OutDir = "C:\Users\admin\Desktop\alom mayong best tantrik\images\gallery",
  [int]$Quality   = 90
)

Add-Type -AssemblyName System.Drawing

# ---------------------------------------------------------------------------
#  source name -> published slug. Keyed on the original download name so the
#  mapping is explicit rather than guessed from the contents of the folder.
# ---------------------------------------------------------------------------
$Map = [ordered]@{
  'clean_Glowing_ethereal_lights_and_mist_20260929182059.jpg'                                          = 'kamakhya-temple-complex-night-mist'
  'watermark-removed-pexels-anil-das-65590354-31726787.jpg_20260929181657.jpg'                         = 'kamakhya-shikhara-golden-finial-mist'
  'watermark-removed-pexels-manishjangid-36470479.jpg_20260929181707.jpg'                              = 'stone-buddha-statue-ritual-mist'
  'watermark-removed-pexels-manishratnabuddha-34485083.jpg_20260929181700.jpg'                         = 'shiva-lingam-kumkum-dark-shrine'
  'watermark-removed-pexels-mgblr-3287165.jpg_20260929181703.jpg'                                     = 'ancient-stone-temple-corridor-lingam'
  'watermark-removed-pexels-plato-terentev-3804555-5910385.jpg_20260929181652.jpg'                     = 'shiva-lingam-hibiscus-offering-mist'
}

if (-not (Test-Path -LiteralPath $Src)) { throw "source folder not found: $Src" }
New-Item -ItemType Directory -Path $OutDir -Force | Out-Null

$Encoder = ([System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' })[0]

function Save-Jpeg {
  param($Bitmap, [string]$Path, [int]$Q)
  $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, [Int64]$Q)
  $Bitmap.Save($Path, $Encoder, $ep)
  $ep.Dispose()
}

# A file is only a JPEG if it starts with FFD8. The PNG-in-a-.jpg source would
# otherwise be re-encoded as "JPEG" and stay 2 MB.
function Test-RealJpeg([string]$Path) {
  $b = [System.IO.File]::ReadAllBytes($Path)
  return ($b.Length -gt 3 -and $b[0] -eq 0xFF -and $b[1] -eq 0xD8 -and $b[2] -eq 0xFF)
}

$before = 0
$after  = 0
$rows   = @()

foreach ($name in $Map.Keys) {
  $srcFile = Join-Path $Src $name
  if (-not (Test-Path -LiteralPath $srcFile)) { throw "missing source: $name" }
  $slug = $Map[$name]
  $dest = Join-Path $OutDir ($slug + '.jpg')

  $bmp = New-Object System.Drawing.Bitmap($srcFile)
  try {
    # Nothing is scaled. Highest source edge is 1200 px.
    Save-Jpeg $bmp $dest $Quality
  } finally {
    $bmp.Dispose()
  }

  if (-not (Test-RealJpeg $dest)) { throw "$slug did not encode as a real JPEG" }

  $o = (Get-Item -LiteralPath $srcFile).Length
  $n = (Get-Item -LiteralPath $dest).Length
  $before += $o
  $after  += $n
  $rows += [pscustomobject]@{
    file  = $slug
    w     = [System.Drawing.Image]::FromFile($dest).Width
    h     = [System.Drawing.Image]::FromFile($dest).Height
    from  = [math]::Round($o / 1KB, 1)
    to    = [math]::Round($n / 1KB, 1)
    saved = [math]::Round(100 - ($n * 100 / $o), 1)
  }
}

# Clear the unslugged downloads so only the published set ships.
foreach ($name in $Map.Keys) {
  $stale = Join-Path $OutDir $name
  if (Test-Path -LiteralPath $stale) { Remove-Item -LiteralPath $stale -Force }
}

$rows | Format-Table -AutoSize
Write-Host ("{0} files: {1:N0} KB -> {2:N0} KB  ({3:N0}% smaller)" -f `
  $rows.Count, ($before / 1KB), ($after / 1KB), (100 - ($after * 100 / $before)))
