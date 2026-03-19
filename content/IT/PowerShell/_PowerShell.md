Definition: Die Windows PowerShell ist eine Shell, welche seit Windows 7 standardmäßig unter Windows installiert ist und auf dem .NET Framework basiert. Die PowerShell ist eine neuere open-source, objektorientierte und plattformübergreifende Shell, die dediziert installiert werden muss. Im nachfolgenden geht es nur um die Windows Powershell.

### Vor- und Nachteile

| Vorteile                                                                   | Nachteile                                       |
| ------------------------------------------------------------------------- | ----------------------------------------------- |
| Befehle aus Eingabeaufforderung verfügb                                    | Komplex und hohe Lernkurve                      |
| Zugriff auf WMI und Regis                                                  | Zielgruppe: IT-Profis und Systemadministratoren Effiziente Bedienung durch gleichmäßige Befehlssyntax und Befhelsstruktur tax  | Umgewöhnung nötig                               |

### CmdLets
Die Befehle in der PowerShell nennen sich CmdLet(s). Diese bestehen immer aus
`<Verb>-<Nomen>`. Diese Struktur zieht sich durch alle Befehle.
Beispiele:
- `Get-Help`
- `Set-ExecutionPolicy`
- `Get-ChildItem`
CmdLets können Parameter unterstützen. Parameter werden über ein `-` angekündigt, wie beispielsweise `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`.
### Variablen
Eine Variable in der PowerShell wird durch das `$` angegeben. Hierbei gibt es bestimmte Umgebungsvariablen, wie `$PSHOME`, welcher das Installationsverzeichnis der PowerShell beinhaltet und `$PSVersion`, welcher die Version der PowerShell beinhaltet. Auf Attribute von einer Variable kann mit einem `.`, wie beispielsweise mit `$PSVersionTable.PSVersion`, zugegriffen werden. 