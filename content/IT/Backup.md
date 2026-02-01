Definition: Ein [Backup](https://en.wikipedia.org/wiki/Backup) beschreibt eine Kopie von Daten, welche auf einer anderen Plattform gespeichert sind und im Falle eines Datenverlustes wiederherstellbar ist. Diese Plattformen können [[NAS]], [[SAN]], Cloud Storage oder externe Laufwerke verwendet werden.

---
### Backup-Varianten
Es gibt verschiedene Ansätze, welche alle jeweils unterschiedliche Ergebnisse erzielen.
#### Voll-Backup
Hierbei wird eine Kopie der gesamten Daten angefertigt. Hierdurch ist die Größe des Backups sehr hoch. Hierbei ist ein einziges Backup für eine vollständige Wiederherstellung ausreichend.
#### Differentielles Backup
Hierbei werden nur die geänderten Daten seit dem letzten Voll-Backup gespeichert. Hierdurch ist die Größe des Backups geringer als bei einem Voll-Backup. Jedoch wird zur vollständigen Wiederherstellung nur das neueste differentielle Backup zusammen mit dem neuesten Voll-Backup benötigt.
#### Inkrementelles Backup
Hierbei werden nur die geänderten Daten seit dem letzten inkrementellen Backup gespeichert. Hierdurch ist die Größe des Backups sehr viel geringer als bei einem Voll-Backup und geringer als bei einem differentiellen Backups. Jedoch wird zur vollständigen Wiederherstellung alle inkrementellen Backups zusammen mit dem neuesten Voll-Backup benötigt.

### 3-2-1 Regel
Die 3-2-1 Backup-Regel ist eine Backup-Strategie, um sich gegen Datenverlust durch den Ausfall von Backupsystemen abzusichern. Hierbei steht die 3 dafür, dass alle Daten in dreifacher Ausführung inklusive des Originals gespeichert werden müssen. Hierzu sollen mindestens 2 verschiedene Speichermedien verwendet werden. Von den 3 Datenspeicherungen sollte mindestens eine davon an einem anderen phyischen Standort (offsite) vorhanden sein.

### Snapshots
Ein Snapshot ist eine Abbild eines [[Datenbanksystem|Dateisystems]] zum Zeitpunkt der Erstellung. Dieser benötigt nahezu keinen Speicherplatz und ermöglicht das leichte Zurückspringen zu einem alten Stand. Diese können abhängig vom [[Dateisystem]] während des laufenden Betriebs erstellt werden. Hierbei werden keine Kopien von Daten erstellt, wodurch es sich nicht um ein Backup handelt.