Definition: Die [Transportschicht](https://en.wikipedia.org/wiki/OSI_model#Layer_4:_Transport_layer) ist die vierte Schicht des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodell]]. Auf dieser Schicht findet eine <u>logische</u> *Ende-zu-Ende Verbindung* statt. Aufgabe dieser Schicht ist die qualitätssichernde Übertragung von Datensätzen variabler Länge zwischen zwei Geräten über Netzwerke hinaus. Die Protokolle dieser Schicht sind entweder Verbindungsorientiert oder Verbindungslos.

### Hardware
Auf dieser Schicht befindet sich folgende Hardware:
- [NGFW](https://en.wikipedia.org/wiki/Next-generation_firewall)
- [Hardware Load Balancer](https://de.wikipedia.org/wiki/Lastverteilung_(Informatik))
### Protokolle
- [TCP (Transmission Control Protocol)](https://de.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol")  
- [UDP (User Datagram Protocol)](https://de.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol")
- [SCTP](https://de.wikipedia.org/wiki/Stream_Control_Transmission_Protocol "Stream Control Transmission Protocol")  
- [SPX](https://de.wikipedia.org/wiki/Sequenced_Packet_Exchange "Sequenced Packet Exchange")

### PDU
Das [[Protocol data unit (PDU)]] auf dieser Schicht nennt sich UDP-Datagram oder TCP-Segment basierend auf dem verwendeten Protokoll. Bei einem 1 wird dabei an den Datensatz ein Header mit einer Länge von minimal 20 Bytes und maximal 60 Bytes angebaut. In diesem Header befinden sich [Verwaltungsinformationen](https://www.pynetlabs.com/transmission-control-protocol-tcp-header/#Components_of_TCP_header), wie unteranderem die Source- und Destination Portnummer.