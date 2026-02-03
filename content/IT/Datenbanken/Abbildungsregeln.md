Definition: Die Abbildungsregeln ermöglichen die Umwandlung des ER-Modells zum relationalen Modell. Aus jedem Entitätstyp wird zunächst eine eigenständige Tabelle mit einem eindeutigen Primärschlüssel gebildet.
### 1. Abbildungsregel (1:1)
Zur Abbildung einer 1:1 (eins-zu-eins) Beziehung im ER-Modell im relationalen Modell, wird der Primärschlüssel (PK) einer **beliebigen** Entität und fügt diesen der anderen Entität als Fremdschlüssel (FK) der anderen Entität hinzu.
### 2. Abbildungsregel (1:n)
Zur Abbildung einer 1:n (eins-zu-n) Beziehung im ER-Modell im relationalen Modell nimmt man den Primärschlüssel (PK) der Seite mit Kardinalität 1 und fügt ihn als Fremdschlüssel (FK) auf der Seite mit Kardinalität n ein.
### 3. Abbildungsregel (n:m)
Zur Abbildung einer n:m (n-zu-m) Beziehung im ER-Modell im relationalen Modell, wird eine zusätzliche Zuordnungstabelle erzeugt. Die Primärschlüssel (PK) der beiden zugehörigen Entitätstypen werden dort als Fremdschlüssel (FK) eingefügt und bilden mit eventuell weiteren Attributen den zusammengesetzten Primärschlüssel der neuen Tabelle.