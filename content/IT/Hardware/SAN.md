Definition: Ein [SAN (Storage Area Network)](https://de.wikipedia.org/wiki/Storage_Area_Network) dient zur blockbasierten Speicherung von Daten. Hierbei handelt es sich im Gegensatz zum [[NAS]] um ein dediziertes Netzwerk, welches aus einem Storage Controller und an diesem angeschlossenen Speichermedien besteht. Hierbei kann zur Übertragung sowohl TCP/IP als auch [FibreChannel](https://de.wikipedia.org/wiki/Fibre_Channel) verwendet werden. Weiter bietet ein SAN eine bessere Skalierbarkeit.

### Protokolle
Bei SANs, welche mittels TCP/IP betrieben werden, wird das Protokoll iSCSI verwendet. Bei SANs, welche auf FibreChannel setzen, verwenden das Protokoll FCP.

### Hardware
Bei einem SAN mittels TCP/IP können herkömmliche Switche, NICs, SFPs und weiteres verwendet werden. Bei SANs mittles FibreChannel sind explizite FibreChannel-Switche, SFPs und weiteres notwendig.

### Vor- und Nachteile SAN über TCP/IP
Vorteile:
- Herkömmliche Hardware
- Einfacher Einbindung
- Geringe Netzwerkauslastung
Nachteile:
- Höhere Anschaffungskosten als ein [[NAS]]
- Geringere Datenraten als mit FibreChannel

### Vor- und Nachteile SAN über FibreChannel
Vorteile:
- Höhere Datenraten als über TCP/IP
Nachteile:
- Höhere Anschaffungskosten
- Höhere Komplexität