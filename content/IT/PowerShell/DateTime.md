Definition: In [[_PowerShell|PowerShell]] basieren Datum und Uhrzeit auf dem .NET-Objekt `System.DateTime`. Dieses Objekt speichert die Zeit intern als numerischen Wert und bietet umfangreiche Methoden zur Darstellung und Manipulation von Daten und Uhrzeiten.

### Heutiges Datum
Um das heutige Datum in PowerShell zu erhalten, kann das [[_PowerShell#CmdLets|CmdLet]] `Get-Date` verwendet werden. Wenn dieses von keinem Parameter oder Eingabe gefolgt ist, wird das aktuelle System-Datum und die System-Uhrzeit ausgegeben.

### Der ISO 8601 Standard
Da Datumsformate international stark abweichen (z. B. `MM/DD/YYYY` in den USA vs. `DD.MM.YYYY` in Europa), kommt es bei der Verarbeitung als reiner Text oft zu Fehlern. Hier hilft der [ISO 8601 Standard](https://de.wikipedia.org/wiki/ISO_8601). Dieser definiert ein international einheitliches Datumsformat von der größten zur kleinsten Einheit: `YYYY-MM-DDThh:mm:ss` (z. B. `2026-03-19T14:30:00`). Das `T` trennt hierbei Datum und Uhrzeit.

### Umwandlung von Strings in DateTime Objects
Um einen einfachen Text (String) in ein DateTime-Objekt zu konvertieren, bietet PowerShell mehrere Möglichkeiten. Um eine konsistente Konvertierung über verschiedene Sprach- und Ländereinstellungen (Cultures) hinweg sicherzustellen, empfiehlt sich dringend die Eingabe im ISO 8601 Format. Die Umwandlung (das sogenannte "Casting") kann unter anderem wie folgt erfolgen:

```powershell
# Mittels CmdLet
$date = Get-Date '2026-03-19T00:00:00'
Write-Host $date

# Durch direktes Casting (Typzuweisung)
[datetime]'2026-12-01T00:00:00'

# Durch den -as Operator
'2026-12-01T00:00:00' -as [datetime]
``` 

### Eigenschaften von DateTime Objects
Ein DateTime-Objekt besitzt viele **Eigenschaften (Properties)**. Unter anderem lässt sich direkt auslesen, der wievielte Tag der Woche (`DayOfWeek`) oder des Jahres (`DayOfYear`) es ist. 

Wenn es nur um die optische Darstellung geht (z. B. um Wochentage in Kurz- oder Langform auszugeben), kann der `-Format` Parameter des `Get-Date` CmdLets genutzt werden. Sobald `-Format` verwendet wird, wandelt PowerShell das DateTime-Objekt in einen reinen String (Text) um. Es kann danach nicht mehr für Zeitberechnungen verwendet werden.

### Manipulation von DateTime
Solange das Objekt als `[datetime]` vorliegt, lässt es sich durch seine integrierten **Methoden** sehr leicht manipulieren. So kann man beispielsweise mittels der Methode `.AddHours()` oder `.AddDays()` Zeiten berechnen:

```powershell
# 3 Stunden von der aktuellen Zeit abziehen
(Get-Date).AddHours(-3)

# 14 Tage zum aktuellen Datum addieren
(Get-Date).AddDays(14)
```