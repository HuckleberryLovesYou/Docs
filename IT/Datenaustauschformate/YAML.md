Definition: [YAML](https://en.wikipedia.org/wiki/YAML )(zuerst für Yet Another Markup Language; jetzt für YAML Ain't Markup Language) ist ein sehr leicht lesbares [[_Datenaustauschformate|Datenaustauschformat]], welches zur Speicherung, Übertragung und Strukturierung von Daten dient. Diese wird häufig für Konfiguration von Systemen verwendet. Es werden die Codierungen UTF-8, UTF-16 und UTF-32 unterstützt. Die Einrückungen definieren die gesamte Datenstruktur. Dies erzwingt die Erstellung von visuell sauberen und strukturierten Dateien.

### Aufbau
#### Hierarchie
Die Hierarchie wird bei YAML wird ausschließlich durch die Einrückungen der Zeilen gesetzt. Hierbei werden ` ` (Leerzeichen), meist 2 Stück pro Einrückung, verwendet (keine Tabs), um die Zusammenhänge von Informationen zu beschreiben.

#### Datentypen
YAML erkennt Zahlen, Booleans und null automatisch ohne das eine spezielle Markierung durch `"` o. ä. notwendig ist. Eine Setzung von `"` ist nur bei Sonderzeichen notwendig.

#### Schlüssel/Wert-Paare
Daten werden meist als Schlüssel/Wert-Paar gespeichert, welches durch einen `:` ist. Hierbei müssen weder Key noch Value in `"` gesetzt werden, außer eine Information enthält Zeichen Sonderzeichen, wie zum Beispiel ":".

#### Objekte
Objekte bestehen in YAML aus Schlüssel/Wert-Paaren. Hierbei muss nach dem `:` ein ` ` (Leerzeichen) folgen.

#### Arrays
Listen werden durch einen `-` gefolgt von einem Leerzeichen am Zeilenanfang gekennzeichnet. Jedes Listenelement steht in einer neuen Zeile auf der gleichen Einrückungsebene. Das darauf folgende Element beginnt wieder mit einem `-`.

#### Kommentare
Im Gegensatz zu [[JSON]] erlaubt YAML die Verwendung von Kommentaren. Einzeilige Kommentare werden durch ein `#` am Zeilenanfang gekennzeichnet.

### Beispiel
```YAML unwrap title=YAML-Beispiel
breakfast_menu:
	food:
		- name: Belgian Waffles
		  price: $5.95
		  description: Two of our famous Belgian Waffles with plenty of real maple syrup
		  calories: 650 # Zahl wird automatisch erkannt
		- name: Strawberry Belgian Waffles
		  price: $7.95
		  description: Light Belgian waffles covered with strawberries and whipped cream
		  calories: 900
```