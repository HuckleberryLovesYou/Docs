Definition: Ein [Uniform Resource Locator](https://de.wikipedia.org/wiki/Uniform_Resource_Locator), auch URL genannt, identifiziert und lokalisiert eine Ressource, wie beispielsweise eine Website, in Computernetzwerken. Dieser gibt hierbei auch das zu verwendende Protokoll an. Dabei handelt es sich bei einer URL um eine Art von [[Uniform Resource Identifier (URI)]].

### Aufbau
Der Aufbau einer URL besteht aus einem Schema und dem schema-spezifischen nachfolgenden Teil. Diese beiden Teile werden immer mit einem `:` voneinander getrennt. Die Trennzeichenzeichenfolge kann abhängig von dem Schema variieren. 

```URL
<Schema>:<Schema spezifischer Teil>
```
Im folgenden beziehen sich alle Beispiele auf das HTTP.

#### Schema: HTTP
Beim HTTP sieht der Aufbau einer URL folgendermaßen aus:
```URL
https://www.example.com:81/index.html?p1=A&p2=B#ressource
```
In vorherigem Beispiel wird sich nur auf die häufigsten Komponenten begrenzt. Außer obigen Komponenten können auch Benutzername und Kennwort angegeben werden. 
1. Als erstes kommt das Schema. Dieses kann in folgendem Beispiel HTTP oder HTTPS sein.
2. Danach kommt das Trennzeichen zwischen dem Schema und dem Schema-spezifischen Teil. Dieses ist bei HTTP ein `://`.
3. Darauf folgt der Host. Dies kann entweder eine Domain oder eine IPv4-Adresse sein.
4. Zur Angabe eines Ports kann dieser optional nach dem `:` angegeben werden. 
5. Danach folgt optional der Pfad auf dem Server. Hierbei kann für einen leeren Pfad auch ein einzelnes `/` folgen.
6. Darauf folgt die Abfrage - auch Query genannt -, welche den Transport von weiteren Informationen ermöglicht. Beispielsweise könnte so die Größe eines Kleidungsstücks transportiert werden.
7. Als letztes kommt das Fragment, welches durch ein `#` optional nach der Query angegeben werden kann. Hierbei handelt es sich meist um einen HTML-Anker, welche beispielsweise ermöglicht auf einer Website direkt an die passende Stelle herunterzuscrollen.
