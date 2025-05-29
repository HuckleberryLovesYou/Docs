Definition: Ein [VLAN](https://en.wikipedia.org/wiki/VLAN) bietet die Möglichkeit, auf [[Schicht 2 - Sicherungsschicht (Data link layer)|Layer 2]] des [[_ISO-OSI Referenzmodell|ISO OSI Referenzmodells]] eine logische Trennung von Datenverkehr durch die Verwendung von Tags - eine bestimmte Nummer. Dabei kann diese Trennung nicht nur innerhalb des Gerätes vorgenommen werden, sondern über Netzwerke verbreitet werden. Dabei wird ein VLAN-Aware-Layer-2-Switch benötigt. Durch die Verwendung von Layer 3 Switchen, ist es möglich, Datenverkehr auch innerhalb von VLANs zu routen.
### Vorteile
- Ortsunabhängige Segmentation (bei dynamische VLANs)
- Verwaltung von Endgeräten und Subnetzen (bei dynamische VLANs)
- Reduzierung der Netzwerklast aufgrund von Broadcasts durch Segmentierung
- Erhöhte Sicherheit durch Trennung in verschiedene Infrastrukturbereiche
### Arten von VLANs
##### Statisches VLAN
Ein statisches VLAN wird direkt in der Konfiguration des Switches fest basierend auf den Ports vergeben. Dabei ist das VLAN, in welchem sich ein mögliches Gerät befindet vom physikalischen Port am Switch abhängig. Eine Änderung des VLANs benötigt entweder die Änderung einer Konfiguration auf einem Switch oder das physikalische Umstecken eines Gerätes am Switch.
##### Dynamisches VLAN
Ein dynamisches VLAN wird über eine Netzmanagement-Software basierend auf der MAC-Adresse einem vorher definierten VLAN zugewiesen. Dabei ist der physikalische Port als auch der physikalische Switch, an welchem sich das Gerät befindet irrelevant.

### Frame-Tagging [(802.1Q)](https://de.wikipedia.org/wiki/IEEE_802.1Q)
Ein Header, der von den Endgeräten an den Switch gesendeten Frame hinzugefügt wird, beinhaltet eine eindeutige Tag-ID, welche ein VLAN eindeutig spezifiziert. Dieser Tag mit einer Länge von 12 Bit in Form einer Ganzzahl kann einen Wert zwischen 0 und 4095 haben, wobei nur Werte zwischen 1 und 4094 akzeptiert werden. Der hinzugefügte Header erweitert den Frame um 4 Bytes, in welchem neben dem VLAN-Tag auch weitere Verwaltungsinformationen stehen. Das ToS-Feld mit 3 Bit, welches teil des Header ist, kann Priorisierung des Transportes des Frames festlegen.

### VLAN Trunk
Ein VLAN Trunk ermöglich das Zusammenfassen - oder auch Bündeln genannt - von mehreren logischen Verbindungen (mehreren VLANs) auf eine physikalische Verbindung (Kabel). Ein Layer 2 Switch besitzt hierfür entweder durch die verbaute Hardware fest definierte Trunk-Ports (Ports, über welche ein VLAN-Trunk laufen kann) oder lassen sich frei konfigurieren. Dabei sind alle nicht als Trunk konfigurierten Ports grundsätzlich Access-Ports.