Definition: Die [[_SQL|SQL]]-Anweisung WHERE (Selektion/Restriktion) gibt an, welche Datensätze (Zeilen) ausgewählt werden sollen. Dies geschieht durch eine oder mehrere Bedingungen, welche mit AND und OR verknüpft werden können.
### Syntax
```SQL title:DB01
SELECT <colums>
FROM <table_name>
WHERE <condition>
```

### Beispiel
```SQL title:DB01
SELECT * 
FROM stundenplan 
WHERE l_id = 'FRD' AND fach = 'AuP';
```
Diese Abfrage wählt alle Attribute in der Tabelle `stundenplan` aus, wo in der gleichen Zeile die `l_id` den Wert 'FRD' hat **und** das `fach` den Wert 'AEuP' hat.

```SQL title:DB01
SELECT l_id AS `Lehrkraft`, fach, zeit 
FROM stundenplan 
WHERE k_id = 4 
AND (tag = 'Donnerstag' OR tag = 'Freitag'); 
```
Diese Abfrage wählt das Attribut `l_id` mit dem Alias 'Lehrkraft', `fach` und `zeit` in der Tabelle `stundenplan` aus, wo in der selben Zeile das Attributes `k_id` den Wert 4 hat **und** das Attribute `tag` den Wert 'Donnerstag' **oder** 'Freitag' hat.