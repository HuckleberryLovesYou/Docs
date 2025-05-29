Definition: Die [[_SQL|SQL]]-Anweisung [INNER JOIN](https://www.w3schools.com/sql/sql_join_inner.asp) ermöglich die Erweiterung einer Tabelle um eine andere Tabelle.

### Syntax
```SQL title:DB01
SELECT <colums>
FROM <table1>
INNER JOIN <table2> on <table1>.<table1_PK> = <table2>.<table2_PK>
WHERE <condition>
```

### Beispiel
```SQL title:DB01
SELECT l.vorname, l.nachname
FROM schueler
INNER JOIN klasse on 
WHERE <condition>
```