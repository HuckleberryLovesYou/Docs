Definition: Ein [Datenaustauschformat](https://en.wikipedia.org/wiki/Data_exchange) beschreibt eine fest Struktur und Syntax zur Speicherung und Übertragung von Daten. Es ermöglicht unterschiedlichen Systemen (z. B. Server und Client), Informationen effizient und fehlerfrei durch Serialisierung auszutauschen. Weiter beschreibt eine Markup Language die Beziehungen zwischen Teilen des Inhalts. Während eine Markup Language wie [[XML]] oft auch Metadaten zur Darstellung oder Strukturierung von Dokumenten enthält, fokussieren sich reine Datenformate, wie [[JSON]] und [[YAML]] ausschließlich auf den effizienten Transport von Daten.
### Bekannte Datenaustauschformate
1. [[JSON]]
2. [TOML](https://en.wikipedia.org/wiki/TOML)
3. [INI](https://en.wikipedia.org/wiki/INI_file)
4. [[XML]]
5. [[YAML]]

### Vergleichsmatrix
Die wichtigsten Formate im Vergleich:

| Merkmal            | [[XML]]                    | [[JSON]]                      | [[YAML]]                   |
| :----------------- | :------------------------- | :---------------------------- | :------------------------- |
| **Name**           | Extensible Markup Language | JavaScript Object Notation    | YAML Ain't Markup Language |
| **Typ**            | Markup Language            | Datenaustauschformat          | Datenaustauschformat       |
| **Struktur durch** | Tags (`< >`)               | Klammern (`{ }`, `[ ]`)       | Einrückung (Leerzeichen)   |
| **Lesbarkeit**     | Mittel (maximalistisch)    | Gut (mittel)                  | Sehr gut (minimalistisch)  |
| **Kommentare**     | Ja (`<!--`und `-->`)       | Nein                          | Ja (`#`)                   |
| **Datentypen**     | Alles ist Text (String)    | String, Number, Boolean, Null | Automatische Erkennung     |
| **Haupteinsatz**   | Dokumente                  | Web-APIs                      | Konfigurationsdateien      |

