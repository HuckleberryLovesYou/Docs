Definition:  Die [[_SQL|SQL]]-Anweisung LIKE ermöglicht die suche nach einem Muster mit den Jokerzeichen _ (Unterstrich) und % (Prozentzeichen), wobei der Unterstrich für genau ein beliebiges Zeichen steht und das Prozentzeichen für eine beliebige Anzahl von beliebigen Zeichen steht. Dieses Muster muss immer in Anführungszeichen geschrieben werden.

### Syntax
```SQL title:DB01
SELECT <colums>
FROM <table_name>
WHERE <condition> LIKE <pattern>
```

### Beispiel
```SQL title:DB01
SELECT *
FROM klasse
WHERE name like "it_ _a"
```
Diese Abfrage gibt alle Zeilen der Tabelle `klasse` aus, in welchen das Attribut mit dem Muster `"it_ a"` übereinstimmt. Dies wären zum Beispiel folgende Klassen: it10a, it11a, it12a.

```SQL title:DB01
SELECT *
FROM klasse
WHERE beruf LIKE "Fachinformatiker%"
```
Diese Abfrage gibt alle Zeilen der Tabelle `klasse` aus, in welchen das Attribut mit dem Muster `"Fachinformatiker%"` übereinstimmt. Dies wären zum Beispiel folgende Berufe: Fachinformatiker, Fachinformatikerin, Fachinformatiker-Systemintegration