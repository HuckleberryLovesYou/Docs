Definition: Die [Sicherungsschicht](https://de.wikipedia.org/wiki/OSI-Modell#Schicht_2_%E2%80%93_Sicherungsschicht_(Data_Link_Layer)) ist die zweite Schicht des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodell]]. Aufgabe dieser Schicht ist, eine möglichst fehlerfreie Übertragung von Daten in einem Netzwerk zu ermöglichen und Zugriff auf das Übertragungsmedium zu regeln. Auf dieser Schicht findet eine Punkt-zu-Punkt Verbindung statt.

### Hardware
Auf dieser Schicht befindet sich folgende Hardware:
- [Bridge](https://de.wikipedia.org/wiki/Bridge_\(Netzwerk\) "Bridge (Netzwerk)")
- [Switch](https://de.wikipedia.org/wiki/Switch_\(Netzwerktechnik\) "Switch (Netzwerktechnik)")
- [Access Point](https://de.wikipedia.org/wiki/Wireless_Access_Point "Wireless Access Point")

### Übertragungsart
Bei der Übertragung werden Bitdatenströme, welche auf den oberen Schichten generiert wurden,
in einzelne Blöcke (sogenannte Frames) aufgeteilt. Um mögliche Übertragungsfehler zu erkennen, werden zusätzlich an Prüfsummen zu den Frames angehängt, welche der Empfänger prüfen und im Fehlerfall den Frame verwerfen oder korrigieren kann.

### Protokolle
- [IEEE 802.3 Ethernet](https://de.wikipedia.org/wiki/Ethernet "Ethernet")
- [IEEE 802.11 WLAN](https://de.wikipedia.org/wiki/IEEE_802.11 "IEEE 802.11")
- [TLAP](https://de.wikipedia.org/wiki/TokenTalk_Link_Access_Protocol "TokenTalk Link Access Protocol")
- [FDDI](https://de.wikipedia.org/wiki/Fiber_Distributed_Data_Interface "Fiber Distributed Data Interface")
- [MAC](https://de.wikipedia.org/wiki/Media_Access_Control "Media Access Control")

### PDU
Das [[Protocol data unit (PDU)]] auf dieser Schicht nennt sich Frames. Bei einem untagged Ethernet 2 Frame wird dabei an den Datensatz ein Header vorne angebaut und einen Trailer mit der Frame Check Sum (FCS) anhängt. Im Header befinden sich unter anderem in Reihenfolge links nach rechts zuerst die Destination (Ziel-)MAC-Adresse, die Source (Quell-)MAC-Adresse und das Typenfeld, sowie weitere Verwaltungsinformationen.