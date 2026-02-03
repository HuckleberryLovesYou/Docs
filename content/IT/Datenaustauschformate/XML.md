Definition: [XML](https://en.wikipedia.org/wiki/XML) (Extensible Markup Language) ist eine lesbare [Markup Language](https://en.wikipedia.org/wiki/Markup_language), [[_Datenaustauschformate|Datenaustauschformat]] und Dateiformat, welches zur Speicherung, Übertragung und Austausch von Daten dient. Es bietet einen einfachen und hierarchischen Aufbau und findet große Verwendung im Internet. Es gibt mehrere Version der Spezifikation von XML. Eine Einrückung ist nicht nötig, wird jedoch häufig zur Erhöhung der Lesbarkeit meist angewendet.

### Aufbau
#### Hierarchie
Die Hierarchie wird bei XML ausschließlich durch das Öffnen und Schließen der Tags geregelt. Hierbei können Tags auch andere Tags beinhalten.

#### Tags
Ein Tag ist ein Konstrukt, welches mit `<` beginnt und mit `>` endet und dazwischen ein eindeutigen Namen hat. Diese Namen sind *case-sensitive*. Jeder geöffnete Tag muss am Ende der Struktur geschlossen worden sein. Zum Schließen eines Tags, wird der eindeutige Name wiederholt, welcher vorne ein `</` und hinten ein `>` angehängt bekommt.

#### Root-Tag
Jede Struktur beginnt mit einem Root-Tag. Dieser kann jeglichen Namen besitzen und folgt direkt nach der XML-Deklaration und wird ganz am Ende der Struktur geschlossen.

#### XML-Deklaration
Die Deklaration von XML wird durch den Prolog zum Beginn der Struktur erledigt. Dieser Metatag beinhaltet die *verwendete Version* der XML-Spezifikation (1.0, 1.1), sowie die Zeichencodierung der Struktur (UTF-8, UTF-16, UTF-32). Dieser Tag muss nicht geschlossen werden.
Beispiel: `<?xml version="1.0" encoding="UTF-8"?>`

#### Arrays
Zur Darstellung eines Arrays wird der Tag mit dem Arraynamen, direkt nach dem Schließen des Array-Tags, mit gleichem Namen erneut geöffnet und nach Ende des Inhalts des Arrays geschlossen.

```XML title=XML-Array-Beispiel
<?xml version="1.0" encoding="UTF-8"?>
<...>
	<tier>
		<alter>6</alter>
		<name>Anton</name>
	</tier>
	<tier>
		<alter>8</alter>
		<name>Tim</name>
	</tier>
</...>
```

#### Objekte
Objekte werden bei XML durch die Verschachtelung, also das Öffnen von Tags innerhalb eines anderen Tags, gebildet.

### Beispiel
```XML title=XML-Beispiel
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
  <food>
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>
		Two of our famous Belgian Waffles with plenty of real maple syrup
	</description>
    <calories>650</calories>
  </food>
  <food>
    <name>Strawberry Belgian Waffles</name>
    <price>$7.95</price>
    <description>
	    Light Belgian waffles covered with strawberries and whipped cream
	</description>
    <calories>900</calories>
  </food>
</breakfast_menu>
```