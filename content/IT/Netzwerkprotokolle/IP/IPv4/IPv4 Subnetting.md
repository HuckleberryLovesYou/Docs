#TODO
Definition: [IPv4 Subnetting](https://de.wikipedia.org/wiki/Netzmaske#IPv4) beschreibt den Vorgang der Verkleinerung eines größeren [[_IPv4|IPv4-]]Netzwerkes in mehrere kleinere Netzwerke mittels einer Änderung der [[IPv4 Subnetzmaske|Subnetzmaske]].
### Gründe für Subnetting
- [Netzwerksegmentierung](https://de.wikipedia.org/wiki/Segment_(Netzwerk))
- [Broadcast-Storm](https://de.wikipedia.org/wiki/Broadcast-Sturm) Protection

### Subnetting
Zur Berechnung der benötigten Anzahl an Bits für die Bildung der benötigten Anzahl an Netzen:
$$
2^n \geq \ Anzahl\ der \ Netze
$$
Um die oben errechnete Anzahl an Bits muss nun die [[Subnetzmaske]] erweitert werden. Somit wird aus einer /24-Subnetzmaske eine /26-Subnetzmaske, wenn beispielsweise 4 Netze benötigt werden.

Anschließend müssen die neuen, durch die erweiterte Subnetzmaske entstandenen, Bits des Netzwerkanteils für die Anzahl an benötigten Netze binär hochgezählt werden, wobei jede Erhöhung um eine binäre 1 der Beginn eines neuen Netzes ist. 
Die [[Internet Protocol#Netzwerkadresse und Broadcastadresse|Broadcastadresse]] und [[Internet Protocol#Netzwerkadresse und Broadcastadresse|Netzwerkadresse]] wird nun mit einem um 2 Bit verkleinerten [[Internet Protocol#Netzwerk- und Hostanteil|Hostanteil]] berechnet.

### VLSM
Des Weiteren gibt es noch [VLSM](https://de.wikipedia.org/wiki/Variable_Length_Subnet_Mask) (Variable Length Subnet Mask), welche eine Aufteilung eines bestehenden Netzwerks in unterschiedlich große Netze ermöglicht.