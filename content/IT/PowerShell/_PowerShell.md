Definition: Die [Windows PowerShell](https://de.wikipedia.org/wiki/PowerShell) ist eine Shell, welche seit Windows 7 standardmäßig unter Windows installiert ist und auf dem .NET Framework basiert. Die PowerShell ist eine neuere open-source, objektorientierte und plattformübergreifende Shell, die dediziert installiert werden muss. Im nachfolgenden geht es nur um die Windows PowerShell.

### Vor- und Nachteile

| Vorteile                                                                  | Nachteile                                       |
| ------------------------------------------------------------------------- | ----------------------------------------------- |
| Befehle aus Eingabeaufforderung verfügbar                                 | Komplex und hohe Lernkurve                      |
| Zugriff auf WMI und Registry                                              | Zielgruppe: IT-Profis und Systemadministratoren |
| Effiziente Bedienung durch gleichmäßige Befehlssyntax und Befehlsstruktur | Umgewöhnung nötig                               |

### CmdLets
Die Befehle in der PowerShell nennen sich CmdLet(s) (kurz für Commandlets). Diese bestehen immer aus `<Verb>-<Nomen>`. Diese Struktur zieht sich durch alle Befehle.
Beispiele:
- `Get-Help`
- `Set-ExecutionPolicy`
- `Get-ChildItem`

CmdLets können Parameter unterstützen. Parameter werden über ein `-` angekündigt, wie beispielsweise `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`.

### Variablen
Eine Variable in der PowerShell wird durch das `$` angegeben. Hierbei gibt es bestimmte automatische Variablen, wie `$PSHOME`, welche das Installationsverzeichnis der PowerShell beinhaltet, und `$PSVersionTable`, welche die Version und Systeminformationen der PowerShell beinhaltet. Auf Attribute von einer Variable kann mit einem `.`, wie beispielsweise mit `$PSVersionTable.PSVersion`, zugegriffen werden. Echte Umgebungsvariablen des Betriebssystems werden hingegen über `$env:` angesprochen, z.B. `$env:USERNAME`.

Um Daten in Variablen zu speichern, wird der Zuweisungsoperator `=` verwendet. Hierbei wird zuerst die Variable eingegeben, gefolgt vom Zuweisungsoperator und dem Befehl, dessen Ausgabe gespeichert werden soll. So gesetzte Variablen bleiben nur innerhalb der PowerShell-Sitzung gespeichert.

### Hilfe
Um sich Hilfe bei den CmdLets anzeigen zu lassen, bietet das CmdLet `Get-Help` die entsprechende Möglichkeit. Um sich die Hilfe für ein spezifisches CmdLet anzeigen zu lassen, wird `Get-Help -Name <CmdLet>` verwendet. Durch das Anhängen der Parameter `-Online` oder `-ShowWindow` öffnet sich die Hilfe für jenes CmdLet im Browser oder in einem grafischen Fenster.

Weiter kann das CmdLet `Show-Command` verwendet werden, um alle verfügbaren Befehle in einem grafischen Fenster zu durchsuchen, Parameter auszufüllen und den Befehl visuell zu konfigurieren.

### Aliase
In der PowerShell sind standardmäßig bereits Aliase für übliche coreutils unter Linux eingerichtet. Somit funktionieren ebenfalls die Befehle `ls`, `clear` und `cd`. Diese verweisen respektive auf die CmdLets `Get-ChildItem`, `Clear-Host` und `Set-Location`.

### Pipes
Auch in der PowerShell gibt es eine Pipe (`|`). Diese ermöglicht die Weiterleitung der Ausgabe in das auf die Pipe folgende CmdLet. Dies ermöglicht die schnelle Umleitung und spart Zeit und Tastenanschläge. Die große Besonderheit der PowerShell ist hierbei, dass nicht wie in anderen Shells reiner Text weitergegeben wird, sondern **komplette Objekte** inklusive ihrer Eigenschaften und Methoden.

### Umleitungen
In PowerShell können Ausgaben durch die Verwendung von `>` und `>>` in Dateien umgeleitet werden. Das ermöglicht beispielsweise die Speicherung von Ergebnissen. Hierfür kann beispielsweise `ping 127.0.0.1 >> temp.txt` verwendet werden. Hierbei hängt `>>` die umgeleiteten Daten an die Datei an. Das einzelne `>` überschreibt und ersetzt den gesamten Inhalt der Datei mit den umgeleiteten Daten. Beide Varianten erstellen die Datei automatisch, sofern diese noch nicht existiert.