#TODO add every PDU with description
Definition: Das [Protocol data unit](https://en.wikipedia.org/wiki/Protocol_data_unit) (PDU) ist ein Konzept. Dabei fügt jede Schicht von Schicht 4 beginnend, zu den auf Schicht 7 - 5 generierten sogenannten Nutzdaten, eigene Verwaltungsinformationen hinzu. Dieser Prozess wird auch Kapselung genannt. Der Datensatz erhält nach jeder Kapselung mit den Verwaltungsinformationen der entsprechenden Schicht den Namen (also das PDU), welcher in diesem spezifiziert ist.

### Mögliche PDUs
- <u>UDP-Datagram/TCP-Segment</u> nach Kapselung des Datensatzes auf Schicht 4
- <u>Paket</u> nach Kapselung des Datensatzes auf Schicht 3
- <u>Frame</u> nach Kapselung des Datensatzes auf Schicht 2

### Verwendung von PDUs
Durch die Verwendung der korrekten PDUs kann sofort auf die Schicht Rückschlüsse gezogen werden, auf welcher sich dieser Datensatz befindet. Somit ist sofort klar, dass ein Datensatz auf Schicht 3 gemeint ist, wenn als PDU Paket genannt worden ist.

### PDU Visualisierung
Dies visualisiert ein vereinfachtes PDU. Dieses enthält nur die wichtigsten Verwaltungsinformationen in der Kapselung jeder Schicht.
![[PDU.svg]]