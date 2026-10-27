param(
    [string]$Path
)

$providedPath = -not [string]::IsNullOrWhiteSpace($Path)
if (-not $providedPath) {
    $Path = Read-Host "Enter the directory path"
}

$Path = $Path.Trim()
if ($Path.Length -ge 2 -and $Path[0] -eq $Path[$Path.Length - 1] -and
    ($Path[0] -eq '"' -or $Path[0] -eq "'")) {
    $Path = $Path.Substring(1, $Path.Length - 2)
}

try {
    $target = (Resolve-Path -LiteralPath $Path -ErrorAction Stop).Path
    if (-not (Test-Path -LiteralPath $target -PathType Container)) {
        throw "The path is not a directory: $target"
    }

    $transliteration = [System.Collections.Generic.Dictionary[string, string]]::new(
        [System.StringComparer]::Ordinal
    )
    $pairs = @(
        'а|a', 'А|A', 'б|b', 'Б|B', 'в|v', 'В|V', 'г|g', 'Г|G',
        'д|d', 'Д|D', 'е|e', 'Е|E', 'ё|e', 'Ё|E', 'ж|zh', 'Ж|Zh',
        'з|z', 'З|Z', 'и|i', 'И|I', 'й|i', 'Й|I', 'к|k', 'К|K',
        'л|l', 'Л|L', 'м|m', 'М|M', 'н|n', 'Н|N', 'о|o', 'О|O',
        'п|p', 'П|P', 'р|r', 'Р|R', 'с|s', 'С|S', 'т|t', 'Т|T',
        'у|u', 'У|U', 'ф|f', 'Ф|F', 'х|kh', 'Х|Kh', 'ц|ts', 'Ц|Ts',
        'ч|ch', 'Ч|Ch', 'ш|sh', 'Ш|Sh', 'щ|shch', 'Щ|Shch',
        'ъ|ie', 'Ъ|Ie', 'ы|y', 'Ы|Y', 'ь|', 'Ь|', 'э|e', 'Э|E',
        'ю|iu', 'Ю|Iu', 'я|ia', 'Я|Ia'
    )
    foreach ($pair in $pairs) {
        $parts = $pair.Split('|', 2)
        $transliteration.Add($parts[0], $parts[1])
    }

    function ConvertTo-RomanizedName {
        param([string]$Name)

        $result = [System.Text.StringBuilder]::new()
        foreach ($character in $Name.ToCharArray()) {
            $letter = $character.ToString()
            if ($transliteration.ContainsKey($letter)) {
                [void]$result.Append($transliteration[$letter])
            }
            else {
                [void]$result.Append($character)
            }
        }
        return $result.ToString()
    }

    $items = @(Get-ChildItem -LiteralPath $target -Force -Recurse -ErrorAction Stop)
    $files = @($items | Where-Object { -not $_.PSIsContainer })
    $directories = @($items | Where-Object { $_.PSIsContainer } |
        Sort-Object { $_.FullName.Length } -Descending)
    $renamedCount = 0
    $failedCount = 0

    foreach ($item in @($files) + @($directories)) {
        $newName = ConvertTo-RomanizedName -Name $item.Name
        if ($newName -eq $item.Name) {
            continue
        }

        $parentPath = if ($item.PSIsContainer) { $item.Parent.FullName } else { $item.DirectoryName }
        $newPath = Join-Path -Path $parentPath -ChildPath $newName
        if (Test-Path -LiteralPath $newPath) {
            Write-Error "Skipped '$($item.FullName)': destination already exists: '$newPath'"
            $failedCount++
            continue
        }

        try {
            Rename-Item -LiteralPath $item.FullName -NewName $newName -ErrorAction Stop
            Write-Host "Renamed: $($item.Name) -> $newName"
            $renamedCount++
        }
        catch {
            Write-Error "Could not rename '$($item.FullName)': $($_.Exception.Message)"
            $failedCount++
        }
    }

    $rootName = Split-Path -Path $target -Leaf
    $newRootName = ConvertTo-RomanizedName -Name $rootName
    if ($newRootName -ne $rootName) {
        $parentPath = [System.IO.Directory]::GetParent($target).FullName
        $newRootPath = Join-Path -Path $parentPath -ChildPath $newRootName
        if (Test-Path -LiteralPath $newRootPath) {
            Write-Error "Could not rename root directory: destination already exists: '$newRootPath'"
            $failedCount++
        }
        else {
            try {
                Rename-Item -LiteralPath $target -NewName $newRootName -ErrorAction Stop
                Write-Host "Renamed root: $rootName -> $newRootName"
                $renamedCount++
            }
            catch {
                Write-Error "Could not rename root directory '$target': $($_.Exception.Message)"
                $failedCount++
            }
        }
    }

    Write-Host "Total items renamed: $renamedCount"
    if ($failedCount -gt 0) {
        Write-Host "Items not renamed: $failedCount"
        exit 1
    }
}
catch {
    Write-Error $_
    exit 1
}
finally {
    if (-not $providedPath) {
        [void](Read-Host "Press Enter to close")
    }
}
