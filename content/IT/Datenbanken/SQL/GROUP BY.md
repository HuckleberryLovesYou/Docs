Definition: Die [[_SQL|SQL]]-Anweisung GROUP BY ermöglicht die Zusammenfassung der Auswahl. Es werden alle Datensätze mit dem selben Wert des in der GROUP BY-Anweisung angegebenen Attributs zusammengefasst. Im Gegensatz zur DISTINCT-Anweisung ermöglich diese Anweisung die weitere Verarbeitung des gruppierten Inhaltes und enthält in der Ausgabe keine Duplikate.
### Syntax
```SQL title:DB01
SELECT <colums>
FROM <table_name>
WHERE <condition>
GROUP BY <group colum>
```

### Beispiel
```SQL title:DB01
SELECT abt, SUM(gehalt) AS 'Gehaltssumme pro Abteilung'
FROM mitarbeiter 
GROUP BY abt;
```
Diese Abfrage gibt alle Abteilung der Spalte `abt` der Tabelle `mitarbeiter` zurück, gruppiert diese nach dem Wert des Attributes in der Spalte `abt` und erstellt je Gruppe die Summe des Werts des Attributes `gehalt`.