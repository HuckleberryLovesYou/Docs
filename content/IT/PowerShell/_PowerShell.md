Definition: Die [Windows PowerShell](https://de.wikipedia.org/wiki/PowerShell) ist eine Shell, welche seit Windows 7 standardmäßig unter Windows installiert ist und auf dem .NET Framework basiert. Die PowerShell ist eine neuere open-source, objektorientierte und plattformübergreifende Shell, die dediziert installiert werden muss. Im nachfolgenden geht es nur um die Windows PowerShell.

### Vor- und Nachteile

| Vorteile                                                                  | Nachteile                                       |
| ------------------------------------------------------------------------- | ----------------------------------------------- |
| Befehle aus Eingabeaufforderung verfügb                                   | Komplex und hohe Lernkurve                      |
| Zugriff auf WMI und Regis                                                 | Zielgruppe: IT-Profis und Systemadministratoren |
| Effiziente Bedienung durch gleichmäßige Befehlssyntax und Befehlsstruktur | Umgewöhnung nötig                               |

### CmdLets
Die Befehle in der PowerShell nennen sich CmdLet(s) (kurz für Commandlets). Diese bestehen immer aus `<Verb>-<Nomen>`. Diese Struktur zieht sich durch alle Befehle.
Beispiele:
- `Get-Help`
- `Set-ExecutionPolicy`
- `Get-ChildItem`
CmdLets können Parameter unterstützen. Parameter werden über ein `-` angekündigt, wie beispielsweise `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`.
### Variablen
Eine Variable in der PowerShell wird durch das `$` angegeben. Hierbei gibt es bestimmte Umgebungsvariablen, wie `$PSHOME`, welcher das Installationsverzeichnis der PowerShell beinhaltet und `$PSVersion`, welcher die Version der PowerShell beinhaltet. Auf Attribute von einer Variable kann mit einem `.`, wie beispielsweise mit `$PSVersionTable.PSVersion`, zugegriffen werden.

Um Daten in Variablen zu speichern wird der Zuweisungsoperator `=` verwendet. Hierbei wird zuerst die Variable eingegeben, gefolgt vom Zuweisungsoperator und dem Befehl, dessen Ausgabe gespeichert werden soll. So gesetzte Variablen bleiben nur innerhalb der PowerShell-Sitzung gespeichert.

### Hilfe
Um sich Hilfe bei den CmdLets anzuzeigen bietet das CmdLet `Get-Help` die Möglichkeit die Hilfe in der PowerShell oder (auf Windows) im Browser (online) anzuzeigen. Um sich die Hilfe für ein CmdLet anzuzeigen wird `Get-Help -Name <CmdLet>` verwendet. Durch das Anhängen der Parameter `-Online` oder `-ShowWindow` öffnet sich die Hilfe für jenes CmdLet im Browser oder in einem grafischen Fenster.

Weiter kann das `Get-Command` CmdLet verwendet werden, um alle CmdLets in einem grafischen Fenster zu durchsuchen oder zu konfigurieren.

### Aliase
In der PowerShell ist standardmäßig bereits Aliase für übliche coreutils unter Linux eingerichtet. Somit funktionieren ebenfalls die Befehle `ls`, `clear` und `cd`. Diese verweisen respektive auf die CmdLets `Get-ChildItem`, `Clear-Host` und `Set-Location`.

### Pipes
Auch in der PowerShell gibt es eine Pipe. Diese ermöglicht die Weiterleitung der Ausgabe in das auf die Pipe folgenden CmdLets. Dies ermöglicht die schnelle Umleitung und spart Zeit und Tastenanschläge.

### Umleitungen
In PowerShell können Ausgaben durch die Verwendung von `>` und `>>` umgeleitet werden. Das ermöglich beispielsweise die Umleitung in eine Datei. Hierfür kann beispielsweise `ping 127.0.0.1 >> temp.txt` verwendet werden. Hierbei hängt `>>` die umgeleiteten Daten an die Datei an. Das einzelne `>` ersetzt den gesamten Inhalt der Datei mit den umgeleiteten Daten. Beide erstellen die Datei, sofern diese nicht bereits existiert.