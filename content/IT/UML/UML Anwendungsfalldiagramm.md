#Diagramm
Definition: Das [UML Anwendungsfalldiagramm](https://de.wikipedia.org/wiki/Anwendungsfall_(UML)) (auch Use Case Diagramm genannt) ist ein Modellelement in der [[UML]] und beschreibt die Zusammenhänge zwischen einer Menge von Anwendungsfällen und den daran beteiligten Akteuren. Dabei stellt dieses das externe Verhalten des Systems in einer bestimmten Situation dar. Ein Anwendungsfall beschreibt, <u>was</u> das System leisten muss, aber <u>nicht wie</u> es das leisten soll.
## Table of Contents

- [[#Schema|Schema]]
	- [[#Schema#Akteur|Akteur]]
	- [[#Schema#System|System]]
	- [[#Schema#Assoziation|Assoziation]]
- [[#Beziehungen|Beziehungen]]
	- [[#Beziehungen#Include|Include]]
	- [[#Beziehungen#Extend|Extend]]
	- [[#Beziehungen#Generalisierung|Generalisierung]]
- [[#Beispiel|Beispiel]]


---
### Schema
![[UML-Anwendungsfalldiagramm-Schema.png]]
#### Akteur
menschliche Akteure
#### System
nicht menschliche Akteure / Systeme
#### Assoziation
Akteure besitzen Assoziationen zu Anwendungsfällen, wenn sie an den dort beschriebenen 
Abläufen aktiv oder passiv beteiligt sind.

### Beziehungen
Zwischen den Anwendungsfällen kann es folgende 3 verschiedene Arten von Beziehungen geben, die durch die Beschriftung und die verschiedene Pfeilarten unterschieden werden.
#### Include
Durch die include-Beziehung wird dargestellt, dass innerhalb eines Anwendungsfalls 1 ein 
anderer Anwendungsfall 2 vorkommt. Der Anwendungsfall 2 wird <u>immer</u> ausgeführt, wenn der erste Anwendungsfall eintritt. Eine include-Beziehung wird mit `<<include>>` angegeben. Bei include-Beziehung <u>zeigt</u> die Pfeilspitze immer <u>auf den Anwendungsfall, um welchen der eigentliche Anwendungsfall erweitert wird.</u>
#### Extend
Durch die extend-Beziehung wird dargestellt, dass innerhalb eines Anwendungsfalls 1 ein 
anderer Anwendungsfall 2 vorkommt. Der Anwendungsfall 2 wird <u>unter bestimmten Umständen</u> ausgeführt, wenn der erste Anwendungsfall eintritt. Dieser Umstand (Bedingung) wird als Notiz an die extend-Beziehung angehängt. Diese Beziehung eignet sich, zur Darstellung von optionalem Verhalten. Eine exclude-Beziehung wird mit `<<exclude>>` angegeben, sowie mit der Bedingung. Die Pfeilspitze von extend-Beziehung <u>zeigt</u> immer <u>auf den Anwendungsfall, um welchen beim Eintreten der Bedingung erweitert werden kann.</u>
#### Generalisierung
Durch die Generalisierung werden Spezialfälle A und B Verhalten und Bedeutung vom 
Anwendungsfall 1 erben. Damit ist Anwendungsfall 1 eine Verallgemeinerung der Spezialfälle. Die Generalisierung ist die einzige Beziehung, welche zwischen Akteuren auftritt.

### Beispiel
**Aufgabestellung Terminvergabe:**
*Sie arbeiten im Projekt zur Entwicklung einer Software zur Terminvergabe in Arztpraxen mit.* 
*Bei der Analyse ergeben sich folgende Anforderungen:*
- *Mit dem Buchungssystem können Patienten und Angestellte der Ärzte arbeiten.*
- *Für das Buchungssystem ist ein vorheriger Login erforderlich.*
- *Patienten können Termine anfragen.*
- *Patienten können bei Bedarf aus einer Liste eine spezielle Terminart auswählen.*
- *Ein Angestellter muss eine Terminanfrage abschließen (bestätigen oder absagen).*
- *Hierzu muss dieser sich zuerst eine Liste aller Terminanfragen anzeigen lassen.* 
- *Bei dem Abschließen der Terminanfrage muss der Angestellte, wenn eine spezielle* 
*Terminart ausgewählt wurde, die Ressourcen planen.*
*Erstellen Sie ein Anwendungsfalldiagramm anhand der beschriebenen Anforderungen.* 

![[UML-Anwendungsfalldiagramm-Beispiel.png]]