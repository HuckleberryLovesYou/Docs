Definition: Das [Dynamic Host Configuration Protocol](https://de.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) ist ein Protokoll, welches die Konfiguration der Netzwerkkarte von Clients über das Netzwerk mithilfe von MAC-Address- und [[_IPv4|IPv4]]-Broadcasts ermöglicht. Es ist eine Erweiterung für das [Bootstrap Protocol (BOOTP)](https://de.wikipedia.org/wiki/Bootstrap_Protocol). Hierbei verwendet es die beiden UDP-Ports 67 und 68. Dabei wird 67 für den DHCP-Client (bei Anfragen) verwendet und 68 (bei Antworten) für den DHCP-Server. Hierbei können Informationen wie [[Internet Protocol|IP-Adresse]], [[Subnetzmaske]] und [[DNS]]-Server übertragen werden.

### Ablauf
Der Ablauf der Kommunikation zum Erhalt eines DHCP-Leases (Zuweisung) entspricht dem DORA-Prinzip.
#### DORA-Prinzip
- DHCP-Discover: DHCP-Anfrage durch Client
- DHCP-Offer: DHCP-Lease Angebot durch Server
- DHCP-Request: DHCP-Lease Annahme durch Client
- DHCP-Acknowledgement: Bestätigung durch Server

![[DHCP-DORA.excalidraw.png|697]]

#### Paketadressierung

| DHCP Paket    | Quell-IP  | Ziel-IP         | Quell-MAC  | Ziel-MAC                          |
| ------------- | --------- | --------------- | ---------- | --------------------------------- |
| DHCP-Discover | 0.0.0.0   | 255.255.255.255 | Client-MAC | ff:ff:ff:ff:ff:ff                 |
| DHCP-Offer    | Server-IP | 255.255.255.255 | Server-MAC | ff:ff:ff:ff:ff:ff oder Client-MAC |
| DHCP-Request  | 0.0.0.0   | 255.255.255.255 | Client-MAC | ff:ff:ff:ff:ff:ff                 |
| DHCP-Ack      | Server-IP | 255.255.255.255 | Server-MAC | ff:ff:ff:ff:ff:ff oder Client-MAC |
| DHCP-Release  | Client-IP | Server-IP       | Client-MAC | Server-MAC                        |

### DHCP-Konfigurationsparameter
Über DHCP lassen sich eine vielzahl an Daten übermitteln. Hierzu zählen unter anderem die folgenden Parameter:
- IPv4-Adresse
- Subnetzmaske
- Standardgateway
- DNS-Server
- Lease-Time
- PXE-Server
- NTP-Server
### Manuelles, automatisches und dynamisches DHCP