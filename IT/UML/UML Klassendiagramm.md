#Diagramm
Definition: Das [UML Klassendiagramm](https://de.wikipedia.org/wiki/Klassendiagramm) ist ein Strukturdiagramm der [[UML]] und dient zur grafischen Darstellung von von [Klassen](https://de.wikipedia.org/wiki/Klasse_(Objektorientierung)) sowie deren Beziehungen.

## Table of Contents

- [[#Schema|Schema]]
	- [[#Schema#Klassenname|Klassenname]]
	- [[#Schema#Variablenname|Variablenname]]
	- [[#Schema#Variablentyp|Variablentyp]]
	- [[#Schema#Sichtbarkeit|Sichtbarkeit]]
	- [[#Schema#Konstruktor|Konstruktor]]
	- [[#Schema#Attribute|Attribute]]
	- [[#Schema#Methoden|Methoden]]
- [[#Vererbung|Vererbung]]
	- [[#Vererbung#protected ( )|protected (#)]]


---
### Schema
![[UML-Klassendiagramm-Schema.png]]
#### Klassenname
Der Klassenname ist der Name, welchen diese Klasse im Programm erhalten soll. In Java sollten Klassen immer mit einem Großbuchstaben beginnen.

Beispiel zu obigem Schema:
```Java title:main.java
public class Auto
```
#### Variablenname
Der Variablenname ist der Name, welchen diese Variable im Programm erhalten soll. In Java sollten Variablen immer mit einem Kleinbuchstaben beginnen.
#### Variablentyp
Der Variablenname ist der Typ, von welchem diese Variable ist. 
#### Sichtbarkeit
Die Sichtbarkeit beschreibt die Sichtbarkeit von Variablen und Methoden. Dabei steht ein `+`, `-` oder `#` für die Sichtbarkeiten *public, private und protected*.

| UML Sichtbarkeit | Java Sichtbarkeit                                |
| :--------------: | ------------------------------------------------ |
|        +         | public                                           |
|        -         | private                                          |
|        #         | [[UML Klassendiagramm#protected ( )\|protected]] |
#### Konstruktor
Der Konstruktor ist eine spezielle Methode, welche zur Bildung der Klasse dient. Dieser muss immer genau <u>den Namen der Klasse</u> haben. Ein Konstruktor ist immer `public` und hat keinen Rückgabewert (auch nicht void). Mehrere Konstruktoren sind ebenfalls möglich.

Beispiel zu obigem Schema:
```Java title:main.java
public Auto() {
	kmStand = 0.0;
	System.out.println("Ein neues Auto")
}
```
#### Attribute
Die Attribute sind alle Variablen, welche im oberen Teil des UML Klassendiagramms genannt werden. Diese Attribute haben meist die [[UML Klassendiagramm#Sichtbarkeit|Sichtbarkeit]] `private`

Beispiel zu obigem Schema:
```Java title:main.java
private String marke:
private double kmStand;
```
#### Methoden
Die Methoden sind alle Einträge, welche im unteren Teil des UML Klassendiagramms genannt werden, sowie der [[UML Klassendiagramm#Konstruktor|Konstruktor]].

### Vererbung
Durch das Konzept der Vererbung ist es möglich, Attribute und Methoden einer Oberklasse (auch Superklasse oder Basisklasse genannt), an mehrere, speziellere Unterklassen zu vererben. Die Unterklassen (auch Subklassen genannt) besitzen dann automatisch alle Attribute und Methoden der Oberklasse, die nicht auf `private` gesetzt sind. Im UML-Klassendiagramm wird die Vererbungsbeziehung (auch is-a-Beziehung genannt) durch einen Pfeil mit nicht ausgefüllter Spitze dargestellt, der von der Unter- zur Oberklasse zeigt.

#### protected (#)
Die [[UML Klassendiagramm#Sichtbarkeit|Sichtbarkeit]] protected (gekennzeichnet durch `#`) bewirkt, dass Attribute oder Methoden sowohl in der definierenden Klasse selbst als auch in all ihren Unterklassen sichtbar sind. Alle anderen Klassen können nicht auf sie zugreifen. Bei `public` könnten stattdessen alle Klassen auf diese zugreifen und bei `private` nur die definierende Klasse.
