## Redundanz
Redundanzen sind doppelte Informationen in einer Datenbank. Weiter zählen hierzu auch Werte, welche sich aus bereits vorhandenen Werten errechnen lassen. Ein Beispiel hierfür wäre zum Beispiel die Information des Alters eines Users, von welchem bereits das Geburtsdatum vorhanden ist, da sich das Alter anhand des aktuellen Datums und des Geburtsdatums errechnen lässt. Dabei belegen redundante Daten nicht nur mehr Speicherplatz, sondern können bei falscher Handhabung zu Inkonsistenzen und Anomalien führen.
### Inkonsistenz
Inkonsistenz ist der Zustand, in dem zwei Dinge, die beide als gültig angesehen
werden sollen, nicht miteinander vereinbar sind, wodurch ein Widerspruch vorliegt.

Beispiel: Die Straße einer Schülerin ist in einer Tabelle als Maxweg 14, in einer anderen
als Maxweg 41 abgespeichert.
-> Dadurch ist nun nicht erkennbar, welche der Adressen die richtige Adresse ist.

### Anomaliearten
Definition: Anomalien weisen auf ein Fehlverhalten einer DB hin.
#### Änderungsanomalie
Es werden nicht alle redundanten Vorkommnisse eines Wertes automatisch geändert
#### Einfügeanomalie
Die Speicherung von Informationen gelingt nur schwierig/nicht, wenn Informationen fehlen
#### Löschanomalie
Durch die Löschung von Daten kann es zur Löschung anderer zusammenhängender Informationen kommen.

## Normalisierung
Definition: Bei der Normalisierung wird das relationale Modell auf Redundanzen geprüft und gegebenenfalls weiter verfeinert, sodass Anomalien und Inkonsistenzen vermieden werden. Die Normalisierung erfolgt in mehreren Teilschritten anhand sogenannter Normalformen (abgekürzt NF). Diese geben an, zu welchem Grad ein Datenbankschema frei von Anomalien ist. Bei relationalen Datenbanken spricht man in der Regel von einem normalisierten Modell, wenn es in dritter Normalform vorliegt.
### 1. Normalform
Eine Tabelle ist in dieser Normalform, wenn die Werte der Attribute unteilbar und einzigartig sind.
### 2. Normalform
Eine Tabelle ist in dieser Normalform, wenn alle Nichtschlüssel-Attribute vom gesamten Primärschlüssel - nicht nur einen Teil des Primärschlüssels - abhängig sind, sowie dass diese sich bereits in der 1. Normalform befindet.
### 3. Normalform
Eine Tabelle ist in dieser Normalform, wenn alle Nichtschlüssel-Attribute voneinander unabhängig sind, sowie dass diese sich bereits in der 2. Normalform befindet.