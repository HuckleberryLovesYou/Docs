Definition: [JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) ist ein kompaktes, von Menschen lesbares [[_Datenaustauschformate|Datenaustauschformat]], welches zur Speicherung, Übertragung und Strukturierung von Daten dient. Diese Sprache kann String, Number, Boolean, Null, Array und Object darstellen. Es wird häufig für die Kommunikation zwischen API und App verwendet. Es wird als Codierung nur UTF-8 unterstützt. Eine Einrückung ist nicht nötig, wird jedoch häufig zur Erhöhung der Lesbarkeit meist angewendet.


### Aufbau
#### Hierarchie
Die Hierarchie wird bei JSON durch *geschweifte Klammern*, *Kommas* und *eckigen Klammern* geregelt. Hierbei handelt es sich bei Informationen in geschweiften Klammern um Objekte und bei Informationen in eckigen Klammern um einen Array. Ein Array wird mit `[` begonnen und mit `]` beendet. Ein Objekt wird mit `{` begonnen und mit `}` beendet. Einzelne Elemente werden voneinander durch ein `,` getrennt.

#### Schlüssel/Wert-Paare
Zur Angabe von Informationen in Objekten und Arrays, wird ein eindeutiger Schlüssel (Key) verwendet über welchen, die durch einen `:` getrennte Informationen (Value), identifizierbar sind. Keys beginnen immer mit `"` und enden auch mit `"`. Hierbei werden Values, bei welchen es sich um einen String handelt mit einem `"` begonnen und mit ein `"` beendet. Bei Values, bei welchen es sich um einen Zahlenwert oder Boolean handelt, werden ohne `"` angegeben.

#### Datentypen
JSON unterstützt standardmässig feste Datentypen. Diese Datentypen werden durch `"` für Strings, ` ` für Zahlen und die Wörter "true", "false" und "null" festgelegt.

### Arrays
Ein Array ist eine geordnete Liste von Werten. Ein Array hat keine Schlüssel/Wert-Paare. Es wird mit `[` begonnen und mit `]` beendet. Die Werte stehen direkt nacheinander, getrennt durch Kommas.

#### Objekte
Objekte bestehen aus Schlüssel/Wert-Paaren, wobei die Schlüssel Strings sein müssen. Zur Angabe eines Objekts wird dieses durch `{` geöffnet. Danach wird das Objekt durch `}` geschlossen.

### Beispiel
```JSON unwrap title=JSON-Beispiel
{
	"breakfast_menu": {
		"food": [
			{
				"name": "Belgian Waffles",
				"price": "$5.95",
				"description": "Two of our famous Belgian Waffles with plenty of real maple syrup",
				"calories": 650
			},
			{
				"name": "Strawberry Belgian Waffles",
				"price": "$7.95",
				"description": "Light Belgian waffles covered with strawberries and whipped cream",
				"calories": 900
			}
		]
	}
}
```