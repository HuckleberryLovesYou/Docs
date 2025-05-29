#factscheck #TODO
### Global Unicast Address (GUA)
- Von IANA an [Regional Internet Registry (RIR)](https://de.wikipedia.org/wiki/Regional_Internet_Registry) vergebene Netze
- Adresse wird geroutet
- Adresse, die der Router vom ISP erhält
- Range: 2000:: bis 3FFF::
### Link Local Unicast Address (LLA)
- Wird nicht geroutet
- Jedes Gerät gibt sich diese Adresse eigenständig
- Jedes IPv6 fähige Gerät muss eine Link Local Unicast Address besitzen
- Typischerweise nutzen Hosts die Link-Local Unicast Adresse des Routers in Routing-Tabellen als Default Gateway.
- Range: fe80:: bis febf::
### Loopback-Address
- Vergleichbar mit Loopback (127.0.0.1) bei [[_IPv4|IPv4]]
- Wird zum Testen oder Diagnose auf lokalem Gerät verwendet
- Gerät sendet Traffic zurück an sich selbst
- Range: ::1/128
### Unspecified Address
- Zeigt an, dass keine gültigen IPv6 Adresse vergeben wurde
- Verwendet als Quell Adresse während der Erstkommunikation (z.B.: Adresskonfiguration)
- Range = ::/128
### Unique Local Unicast
- Verwendet für private lokale Kommunikation innerhalb des privaten Netzes
- Wird nicht geroutet
- Range: fc00:: bis fd00::