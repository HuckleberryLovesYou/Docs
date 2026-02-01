Definition: Das [Hypertext Transfer Protocol](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (HTTP) oder [Hypertext Transfer Protocol Secure](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol_Secure) (HTTPS) ermöglicht die Übertragung von Daten. Diese beiden Protokolle befinden sich auf [[Schicht 5 - 7 (Layer 5 - 7)|Layer 7]] des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodells]]. Der Hauptanwendungsfall ist die Übertragung von Webseiten aus Internet durch einen Browser. Der Standard-Port für HTTP ist TCP/80 und TCP/443 für HTTPS. Alternativ kann statt TCP auch QUIC mit HTTP/3 verwendet werden. Im Gegensatz zu HTTP ist HTTPS durch SSL/TLS verschlüsselt.

### HTTP-Methoden
Es gibt verschiedene Methoden, welche sich im HTTP-Header finden, welche für unterschiedliche Anwendungsbereiche Klarheit über den Zweck eines Pakets bringen können. Die Verwendung ist daher empfohlen. Diese Methoden sind jedoch nicht verpflichtend und nahezu alles lässt sich über die am häufigsten verwendete Methode, die **GET-Methode**, realisieren. Andere Methoden sind noch *POST, PUT, HEAD, DELETE, PATCH, OPTIONS, CONNECT* und *TRACE*.

### HTTP-Statuscodes
Es gibt bestimmte Zahlenbereiche, welche gesendet werden können, um dem Gegenüber einen bestimmten Status mitzuteilen. Die sogenannten Statuscodes bestehen aus 3 Ziffern zwischen 0 und 5.
- **1**xx: informational; Die Anfrage wurde erhalten.
- **2**xx: successful; Die Anfrage wurde erhalten, verstanden und akzeptiert.
- **3**xx: redirection; Es sind weitere Schritte für die Anfrage nötig.
- **4**xx: client error; Die Anfrage konnte nicht bearbeitet werden aufgrund von einem Client-Fehler
- **5**xx: server error; Die Anfrage konnte nicht bearbeitet werden aufgrund von einem Server-Fehler
Eine vollständige Tabelle für alle Statuscodes ist [hier](https://de.wikipedia.org/wiki/HTTP-Statuscode#Liste_der_HTTP-Statuscodes) zu finden. Die wichtigsten Codes sind 200 und 404, wobei 200 für "OK" steht und 404 für "Not Found".