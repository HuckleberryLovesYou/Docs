Definition: Die [[_SQL|SQL]]-Anweisung SELECT können einfache Abfragen (auf eine Tabelle) und komplexe Abfragen (zwei und mehr Tabellen) formuliert werden. Die Zeilenauswahl ist dabei optional. Diese Anweisung muss immer in Verbindung mit der FROM-Anweisung stehen.
### Syntax
```SQL title:DB01
SELECT <colums>
FROM <table_name>
```

### Beispiel
```SQL title:DB01
SELECT *
FROM stundenplan;
```
Diese Abfrage gibt alle Attribute der Tabelle `stundenplan` aus.

```SQL title:DB01
SELECT vorname, nachname
FROM lehrer
WHERE l_id = 'FRD';
```
Diese Abfrage gibt alle Werte der Attribute `vorname` und `nachname` in der Tabelle `lehrer` aus, wo der Wert des Attributes `l_id` in der selben Zeile `'FRD'` ist.

```SQL
SELECT vorname AS `Vorname`, gebdat AS `Geburtsdatum` 
FROM lehrer
WHERE l_id = 'FRD';
```
Diese Abfrage gibt alle Werte der Attribute `vorname` mit dem Alias 'Vorname' und `gebdat` mit dem Alias 'Geburtsdatum' in der Tabelle `lehrer` aus, wo der Wert des Attributes `l_id` in der selben Zeile `'FRD'` ist.

