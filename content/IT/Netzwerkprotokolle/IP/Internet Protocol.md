Definition: Das [Internet Protocol](https://de.wikipedia.org/wiki/Internet_Protocol) beschreibt stellt die Grundlage des Internets dar. Dieses Protokoll arbeitet auf Schicht 3 (Übertragungsschicht) des ISO-OSI Schichtenmodells.
#### Versionen
Es gibt mehrere Versionen des Internet Protokolls. Dies wird beispielsweise durch den Anhang 'v4' beschrieben. Folgende Versionen gibt es:
- [[_IPv4|IPv4]] (32bit)
	- vorherige Versionen fanden keinen Anklang
	- seit 1983
	- Beispiel: 10.206.128.1
- IPv5
	- Ergänzung zu IPv4
	- bereits aufgegeben
- IPv6 (128bit)
	- seit 1998
	- mehr IP-Adressen
	- Beispiel: fe80::201
- IPv7-9
	- Vorschläge für einen IPv4-Nachfolger
	- bereits aufgegeben

#### Vergabe
Öffentliche IP-Adressen werden durch die [Internet Assigned Numbers Authority (IANA)](https://de.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority) vergeben. Ein [ISP](https://de.wikipedia.org/wiki/Internetdienstanbieter) bietet meist im Geschäftskundenbereich die Einrichtung einer öffentlichen IP an. Dieser hat einen Adressraum bei einer übergeordneten Institution erworben und kann diesen nun verwalten. Eine öffentliche IP-Adresse kann große Vorteile bieten, bringt jedoch auch eine Aufpreis mit sich. Bei normalen Privatkundentarifen wird meist eine öffentliche IP-Adresse (meist IPv6) von mehreren Haushalten verwendet. Diese Technologie nennt sich [CGNAT](https://de.wikipedia.org/wiki/Carrier-grade_NAT) (Carrier-grade Network Address Translation). 

### Netzwerk- und Hostanteil
Die Bits einer IP-Adresse werden in zwei Kategorien unterteilt. Der Netzwerkanteil beschreibt alle Bits in der IP-Adresse, welche sich aufgrund einer 1 in der Subnetzmaske an selbiger Stelle nicht ändern können.
Der Netzwerkanteil beschreibt alle Bits, welche sich ändern können. Dies Bits können IP-Adressen für Client, Server und Netzwerkadressen bilden.

### Netzwerkadresse und Broadcastadresse
Die Netzwerkadresse ist die IP-Adresse, bei welcher alle Bits des Hostanteils auf 0 gesetzt sind.
Die Broadcastadresse ist die IP-Adresse, bei welcher alle Bits des Hostanteils auf 1 gesetzt sind.
Somit ist die Netzwerkadresse immer die niedrigste IP-Adresse und die Broadcastadresse immer die höchste IP-Adresse in einem Subnetz.
Die Broadcastadresse gibt es nur bei [[_IPv4|IPv4]].