Definition: Die [Vermittlungsschicht](https://de.wikipedia.org/wiki/OSI-Modell#Schicht_2_%E2%80%93_Sicherungsschicht_(Data_Link_Layer)) ist die dritte Schicht des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodell]]. Aufgabe dieser Schicht ist, Daten in und durch andere Netzwerke zu bewegen mittels netzwerkübergreifender Adressen, sowie Routing. Auf dieser Schicht findet eine <u>physische</u> *Ende-zu-Ende Verbindung* statt.

### Hardware
Auf dieser Schicht befindet sich folgende Hardware:
- [Router](https://de.wikipedia.org/wiki/Router "Router")
- [Layer-3-Switch](https://de.wikipedia.org/wiki/Layer-3-Switch|Layer 3 Switch)
### Protokolle
- [ICMP](https://de.wikipedia.org/wiki/Internet_Control_Message_Protocol "Internet Control Message Protocol")  
- [IGMP](https://de.wikipedia.org/wiki/Internet_Group_Management_Protocol "Internet Group Management Protocol")  
- [[Internet Protocol|IP]]
- [IPsec](https://de.wikipedia.org/wiki/IPsec "IPsec")  
- [IPX](https://de.wikipedia.org/wiki/Internetwork_Packet_Exchange "Internetwork Packet Exchange")

### PDU
Das [[Protocol data unit (PDU)]] auf dieser Schicht nennt sich Paket. Bei einem IPv4-Paket wird dabei an den Datensatz ein Header mit einer Länge von minimal 20 Bytes angebaut. In diesem befinden sich unter anderem in Reihenfolge links nach rechts zuerst die Source (Quell-)IPv4-Adresse, die Destination (Ziel-)IPv4-Adresse und das Typenfeld, sowie weitere Verwaltungsinformationen.