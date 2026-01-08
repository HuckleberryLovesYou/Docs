Definition: Ein [RAID (Redundant Array of Independent Disks)](https://de.wikipedia.org/wiki/RAID) dient der Zusammenfassung von mehreren physischen Speichermedien (meist HDDs oder SSDs) zu einem logischen Speichermedium. Dies dient einer höheren Ausfallsicherheit gegenüber eines einzelnen Speichermediums. Die Speichermedien sollten immer gleich viel Speicherplatz bieten, da ein RAID-Array nur den Speicherplatz aller Laufwerke bis zum Limit des Speicherplatzes des kleinsten Laufwerks berücksichtigt. Ein RAID ist kein [[Backup]].

### Vorteile
- Kostengünstige, hochkapazitive Speicherung
- Höhere Ausfallsicherheit[^1]
- RAID-Verbund als ein einzelnes logisches „Laufwerk“ sichtbar[^2]
- Parallelisierung der Plattenzugriffe ermöglicht ein Geschwindigkeitsvorteil[^2]
### Nachteile
- Höhere Komplexität
- Höhere Anschaffungskosten bei Hardware-RAID
- Höhere CPU-Auslastung bei Software-RAID
- Geringe Speichermedienwahl

### Hardware-RAID vs. Software-RAID

|                        | Hardware-RAID | Software-RAID |
| ---------------------- | :-----------: | :-----------: |
| Kosten                 |     Hoch      |    Niedrig    |
| Leistung               |     Hoch      |    Niedrig    |
| Zuverlässigkeit        |     Hoch      |    Niedrig    |
| CPU-Auslastung         |    Niedrig    |     Hoch      |
| Betriebssystemabhängig |     Nein      |      Ja       |
Software-RAID Lösungen: Intel VRoC Driver
Hardware-RAID Lösungen: RAID-Controller

### RAID-Level
#### RAID 0 (Striping)
- Paralleles Schreiben von **einzigartigen** Daten auf allen Laufwerken
- Paralleles Lesen
- Hilfreich bei hohen Datengroßen
#### RAID 1 (Mirroring)
- Paralleles Schreiben von **gleichen** Daten auf allen Laufwerken
- Paralleles Lesen
- Hilfreich bei Operationen mit hohem Leseaufwand
#### RAID 10 (Striping und Mirroring)
- Kombination aus RAID 1 und RAID 0
- Hoher Overhead -> hohe Kosten
#### RAID 5
- Blockweise Verteilung der Daten
- Verteilung der Parity über alle Laufwerke
#### RAID 6
- Blockweise Verteilung der Daten
- Verteilung der Parity über alle Laufwerke
- Doppelte Paritätsinformationen

### RAID-Vergleichsmatrix

|                                                                 | RAID 0 | RAID 1 | RAID 5 | RAID 6 | RAID 10 |
| --------------------------------------------------------------- | ------ | ------ | ------ | ------ | ------- |
| Mindestanzahl an Laufwerken                                     | 2      | 2      | 3      | 4      | 4       |
| Minimale Anzahl an ausfallbaren<br>Laufwerken ohne Datenverlust | 0      | 1      | 1      | 2      | 1       |
| Maximale Anzahl an ausfallbaren<br>Laufwerken ohne Datenverlust | 0      | 1      | 1      | 2      | 2       |
| Speichereffizienz                                               | 100%   | 50%    | 66,67% | 50%    | 50%     |

Die Anzahl der Laufwerke, sowie die Geschwindigkeiten in obiger Tabelle beziehen sich nur auf RAID-Konfigurationen bei der Mindestanzahl an Laufwerken für das jeweilige RAID-Level.
Speichereffizienz anhand der Mindestanzahl an Laufwerken.

### JBOD
Ein [JBOD (just a bunch of disks)](https://en.wikipedia.org/wiki/Non-RAID_drive_architectures#JBOD) beschreibt eine Architektur, bei welcher Laufwerke einzeln oder zusammengeführt zu einem logischen Verbund behandelt werden. Ein JBOD bietet keine Ausfallsicherheit. Im Unterschied zu RAID 0 ist die höchste Datenmenge pro Laufwerke nicht am kleinsten Laufwerk bemessen.


[^1]: als bei einem einzelnen Speichermedium

[^2]: Abhängig von der RAID-Konfiguration. Siehe nachfolgende Texte.