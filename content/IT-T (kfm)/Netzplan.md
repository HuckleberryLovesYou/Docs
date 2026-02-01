#Diagramm #TODO
Definition: Der [Netzplan](https://de.wikipedia.org/wiki/Netzplantechnik) ist die grafische Abbildung von Vorgangsketten. Jede Aktivität kann mehrere Vorgänger und mehrere Nachfolger haben. Es ist dadurch ebenfalls der [[Kritischer Pfad|kritische Pfad]] erkennbar. Meist ist sind die Zeiten in ganzen Tagen angegeben.

## Table of Contents

- [[#Schema|Schema]]
- [[#Vorgang|Vorgang]]
- [[#Gesamtpuffer|Gesamtpuffer]]
- [[#Dauer|Dauer]]
	- [[#Dauer#Zeitpunkte|Zeitpunkte]]
- [[#Bearbeitung|Bearbeitung]]


---

### Schema
![[Netzplan-Schema.png]]

### Vorgang
Der Vorgang ist eine definierte Aktivität, welche meist mit der [[Netzplan#Dauer|Dauer]] jenes Vorgangs angegeben ist.
### Gesamtpuffer
Das ist der gesamte Puffer, ist die Zeitspanne, um die ein Vorgang gegenüber seiner geplanten Dauer verschoben werden kann, unter Einhaltung des geplanten Projektendes.
### Dauer
Die Dauer ist die Länge der Zeit, welche ein [[Netzplan#Vorgang|Vorgang]] beansprucht.
#### Zeitpunkte
In einem Netzplan gibt es folgende Zeitpunkte:
- Frühester Anfangszeitpunkt
- Spätester Anfangszeitpunkt
- Frühester Endzeitpunkt
- Spätester Endzeitpunkt

### Bearbeitung
1. Aufzeichnung der logischen Abfolge der Vorgänge nach Angabe
2. Vorwärtskalkulation (bei einer Zusammenführung immer mit der höchsten Anzahl an Tagen weiter rechnen)
3. Rückwärtskalkulation (bei einer Zusammenführung immer mit der niedrigsten Anzahl an Tagen weiter rechnen)
4. Gesamtpuffer auswerten (Differenz aus SEZ und SAZ oder SAZ und FAZ)