Definition: Das [Domain Name System](https://de.wikipedia.org/wiki/Domain_Name_System)-Protokoll, auch DNS genannt, ist ein Protokoll, welches sich auf [[Schicht 5 - 7 (Layer 5 - 7)|Layer 7]] des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodells]] befindet, welches zur Auflösung von Domain-Namen in [[_IPv4|IPv4-Adressen]] und/oder [[_IPv6|IPv6-Adressen]] dient. Die DNS-Infrastruktur ist ein dezentrales Netzwerk an DNS-Resolvern, welche Einträge untereinander verbreiten. Dabei kann auch die Namensauflösung umgedreht werden und somit IPv4- und IPv6-Adressen in Domain-Namen umgewandelt werden. Dies erleichtert die Umstellung von IP-Adressen des eigentlichen Ziels, sowie dass sich der Nutzer nicht die IP, sondern nur einen Namen merken muss.

### Fully Qualified Domain Name (FQDN)
Ein Domain-Name besteht aus mehreren Abschnitten - auch Labels genannt -, wobei jeder mindestens 1 Byte und maximale 63 Bytes lang sein darf. Einzelne Labels werden durch `.` getrennt. Dabei wird - formell -  jeder Domain-Name mit einem `.` abgeschlossen. Die gesamte Zeichenkette, mit einer maximalen Länge von 255 Bytes, wird Fully Qualified Domain Name, auch FQDN, genannt. Ein Beispiel für einen FQDN ist folgendes: `docs.timmatheis.com.`. Wichtig ist, dass ein FQDN immer mit einem `.` endet.

### DNS-Zonen
Da DNS auf einem dezentralen Netzwerk basiert, gibt es tausende DNS-Server, welche jeweils nur für die Auflösung von Domain-Namen innerhalb der definierten Zone zuständig sind und gegebenenfalls an einen weiteren DNS-Server weiterleiten. Die oberste Zone ist die DNS-Root (`.`), darunter folgt die Top Level Domain, wie beispielsweise `com`, `org`, `net`. Danach folgt die Second Level Domain, wie zum Beispiel `timmatheis` oder `youtube`. Danach folgt als letztes noch die Subdomain, wie beispielsweise `docs` oder `mail`.

### Namensauflösung
Bei der Namensauflösung wird die DNS-Anfrage durch einen Client an einen DNS-Resolver geschickt. Dieser DNS-Resolver verarbeitet die Anfrage wie folgt, sofern die dazugehörige IP bereits durch eine vorangegangene Anfrage gecached worden ist.
1. Der DNS-Resolver leitet die Domain an den DNS-Rootserver weiter.
2. Der DNS-Rootserver leitet anhand der Top Level Domain an den passenden TLD-Nameserver weiter.
3. Der TLD-Nameserver leitet an den Authoritative Nameserver weiter.
4. Der Authoritative Nameserver leitet die IP zur angefragten Domain an den DNS-Resolver weiter
5. Der DNS-Resolver leitet die IP an den anfragenden Client weiter.
Der Authoritative Nameserver ist hierbei die letzte Instanz. Dieser ist von beispielsweise dem Inhaber der Domain und enthält die eigens konfigurierten Informationen.

### DNS-Records
Ein DNS-Record beinhaltet Daten, wie beispielsweise die IPv4-Adresse des Servers. Die Daten werden anhand der in ihnen gespeicherten Informationen in einzelne DNS-Record-Typen geordnet. Die wichtigsten Records sind:

| Record-Typ | Dateninhalt                                                               |
| ---------- | ------------------------------------------------------------------------- |
| A          | Zuweisung einer IPv4-Adresse zu einem Domain-Namen                        |
| AAAA       | Zuweisung einer IPv6-Adresse zu einem Domain-Namen                        |
| CNAME      | Zuweisung einer Weiterleitung oder Alias zu einem Namen                   |
| NS         | Definition des zuständigen Nameservers für die angefragte Zone            |
| MX         | Zuweisung eines Mailservers zu einem Namen                                |
| TXT        | Zuweisung eines frei definierbaren Textes zu einem Namen                  |
| PTR        | Zuweisung eines Domain-Namen zu einer IP-Adresse                          |
| SOA        | Ansprechpartner und weitere Verwaltungsinformationen der abgefragten Zone |

### DynDNS
[Dynamic DNS (DynDNS)](https://de.wikipedia.org/wiki/Dynamisches_DNS) beschreibt eine Technik, um die für einen A- oder AAAA-Record zugewiesene IPv4- oder IPv6-Adresse anzupassen, sobald sich die öffentliche IP-Adresse ändert. Dadurch kann ein Provider beispielsweise auf einen auf seinem Server gehosteten Service zugreifen, ohne die aktuelle öffentliche IP zu wissen. Diese Technik ist nur von Nöten, wenn der Provider keine statische öffentliche IP-Adresse hat.