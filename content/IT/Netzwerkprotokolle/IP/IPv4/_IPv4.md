Definition: Die [Version 4](https://de.wikipedia.org/wiki/IPv4) des [[Internet Protocol|Internet Protocols]] beschreibt die erste Version des Internet Protocols, welche weltweit stark verbreitet ist. Diese Version bildet unteranderem eine wichtige Grundlage des Internets.

## Table of Contents

- [[#Adressformat|Adressformat]]
- [[#Netz- und Hostanteil|Netz- und Hostanteil]]
- [[#Adressknappheit|Adressknappheit]]
- [[#Öffentliche IP-Adressen|Öffentliche IP-Adressen]]
- [[#Private IP-Adressen|Private IP-Adressen]]

---

#### Adressformat
IPv4 verwendet eine Adresslänge von 32bit (4 Bytes). Diese wird meist in der [Dezimalpunktschreibweise](https://de.wikipedia.org/wiki/Dotted_decimal_notation)[^1] angegeben. Dabei wird nach allen 8 Binären (3 Dezimalen) Ziffern ein Punkt zur Verbesserung der Lesbarkeit gesetzt. Jedes Oktett (Zusammenfassung 8 binärer Ziffern) kann 256 Zustände, somit dezimale Werte von 0 (0b0000000) bis 255 (0b11111111), annehmen. Daraus ergibt sich die maximale Anzahl an verschiedenen IP-Adressen (256^4) von 4.294.967.296 IPv4-Adressen.
#### Netz- und Hostanteil
Dies beschreibt die Position der Trennung der IPv4-Adresse in die beiden Teile des Netzbereichs und Host[^2]anteil. Der Netzbereich beschreibt den Teil der IPv4-Adresse, welcher zur Identifizierung des Adressbereichs des Netzwerks dient. Der Hostanteil beschreibt den Teil der IPv4-Adresse, welcher zur Identifizierung des Adressbereichs der Hosts dient. 

Die Position dieser Trennung der Adresse wird durch die [[IPv4 Subnetzmaske|Subnetzmaske]] definiert. 

#### Adressknappheit
Es gibt eine Anzahl an verschiedenen IP-Adressen (256^4) von 4.294.967.296 IPv4-Adressen.
Dies scheint auf den ersten Blick eine große Menge zu sein, jedoch würde dadurch nur jeder zweite Mensch dieser Welt eine IP-Adresse bekommen. Bereits seit 2011 sind alle [[IPv4 Netzklassen]] durch die [IANA](https://de.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority) vergeben worden.

Lösungsansätze:
Zur Vermeidung eines Entwicklungsstopps durch die schwindende Menge an IP-Adressen, wurde bereits früh angefangen an Lösungsansätzen zu arbeiten. Folgende Lösungen gibt es:
- NAT (Network Address Translation)
- IPv6 (Internet Protocol Version 6)

#### Öffentliche IP-Adressen
Eine öffentliche IP-Adresse, die meist vom ISP an den Endnutzer vergeben werden und sich entweder regelmäßig ändern oder statisch festgelegt sind, sind im ganzen Internet einzigartig. Weiter ist der besitz einer öffentlichen IP im Gegensatz mit Kosten verbunden.
Der Pool an öffentlichen IP-Adressen ist bereits seit 2011 ausgeschöpft. Die öffentlichen IP-Adressen sind in [[IPv4 Netzklassen|Netzklassen]] mit unterschiedlichen Nutzen unterteilt

#### Private IP-Adressen
Gegenüber zu öffentlichen können private IP-Adressen durch den Endnutzer vergeben werden. Hier kann der Endnutzer entscheiden, ob diese Adressen automatisch vergeben werden sollen, oder ob dieser diese statisch selber konfiguriert. Diese Adressen gibt es mehrfach auf der Welt, wodurch diese auch nicht im Internet geroutet werden. Diese Adressen sind dadurch kostenlos.
Folgende Adressräume sind reserviert für den Privatgebrauch:
		- 10.0.0.0/8
		- 172.16.0.0/12
		- 192.168.0.0/16


[^1]: eng. Dotted decimal notation

[^2]: Gerät z.B.: ein Client oder Drucker
