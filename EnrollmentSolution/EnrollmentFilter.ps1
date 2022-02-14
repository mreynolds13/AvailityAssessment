$content = Get-Content -Path "Enrollments.csv" | ConvertFrom-Csv
$insuraceCompanies = @()



$content | ForEach-Object {
    $row = $_
    if ($insuraceCompanies -notcontains $row.('Insurance Company')) {
        $insuraceCompanies += $row.('Insurance Company')
    }
}

$insuraceCompanies | ForEach-Object {
    [System.Collections.ArrayList]$newcsv = @()
    $insuraceCompany = $_
    $content | ForEach-Object {
        $row = $_
        $rowCompany = $_.("Insurance Company")
        if ($insuraceCompany -eq $rowCompany) {
            $newCsv += $row
        }
    }
    $newcsv | Sort-Object -Property ("Last Name")
    $newcsv | Sort-Object -Property ("First Name")
    if ($newCsv.Count -gt 1 ) {
        for ($i = 0; $i -lt $newCsv.Count; $i++) {
            $rowOne = $newCsv[$i]
            $firstId = $newCsv[$i].('User Id')
            $firstVersion = $newCsv[$i].Version
            for ($j = 1; $j -lt $newCsv.Count; $j++) {
                $rowTwo = $newCsv[$j]
                $secondId = $newCsv[$j].('User Id')
                $secondVersion = $newCsv[$j].Version
                if ($firstId -eq $secondId) {
                    if ($firstVersion -lt $secondVersion) {
                        $newCsv.Remove($rowOne)
                    } elseif ($secondVersion -lt $firstVersion) {
                        $newCsv.Remove($rowTwo)
                    }
                }
            }
        }
    }
    $newCsv | Export-Csv -Path "$insuraceCompany.csv" -NoTypeInformation
}