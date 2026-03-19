Definition: In der [[_PowerShell|PowerShell]] gibt es viele verschieden Datentypen, welche alle unterschiedliche Mengen an Speicherplatz benötigen. Die häufigsten Datentypen sind Boolean, String und Int32.

Alle Datentypen der PowerShell:

| Datentyp     | Speicherbedarf | Wertebereich                                                         |
| :----------- | :------------- | :------------------------------------------------------------------- |
| `[Boolean]`  | 1 Byte         | `$True` oder `$False`                                                |
| `[Byte]`     | 1 Byte         | 0 bis 255 (unsigned)                                                 |
| `[Char]`     | 2 Bytes        | 0 bis 65535 (unsigned)                                               |
| `[DateTime]` | 8 Bytes        | 00:00:00 am 1. Januar 0001 bis 23:59:59 am 31. Dezember 9999         |
| `[Decimal]`  | 16 Bytes       | ±79.228.162.514.264.337.593.543.950.335 (28-29 signifikante Stellen) |
| `[Double]`   | 8 Bytes        | ±5,0 × 10⁻³²⁴ bis ±1,7 × 10³⁰⁸                                       |
| `[Int32]`    | 4 Bytes        | -2.147.483.648 bis 2.147.483.647                                     |
| `[Long]`     | 8 Bytes        | -9.223.372.036.854.775.808 bis 9.223.372.036.854.775.807             |
| `[Int16]`    | 2 Bytes        | -32.768 bis 32.767                                                   |
| `[Single]`   | 4 Bytes        | ±1,5 × 10⁻⁴⁵ bis ±3,4 × 10³⁸                                         |
| `[String]`   | Dynamisch      | 0 bis ca. 1 Milliarde Zeichen (Speicherlimit abhängig)               |
