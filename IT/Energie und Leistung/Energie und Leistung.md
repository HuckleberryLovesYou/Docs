Definition: [Energie](https://de.wikipedia.org/wiki/Energie) und [Leistung](https://de.wikipedia.org/wiki/Leistung_\(Physik\)) beschreibt das Leisten von Arbeit und die in einer Zeitspanne umgesetzte Energie.

## Table of Contents

- [[#Grundgrößen|Grundgrößen]]
    - [[Energie und Leistung#Spannung|Spannung]]
    - [[Energie und Leistung#Stromstärke|Stromstärke]]
    - [[Energie und Leistung#Leistung|Leistung]]
    - [[Energie und Leistung#Widerstand|Widerstand]]
    - [[Energie und Leistung#Ladung|Ladung]]
    - [[Energie und Leistung#Wirkungsgrad|Wirkungsgrad]]
    - [[Energie und Leistung#Arbeit/Energie|Arbeit/Energie]]
- [[#Beispielsaufgaben|Beispielsaufgaben]]
    - [[#Beispielsaufgaben#Aufgabe 1|Aufgabe 1]]
    - [[#Beispielsaufgaben#Aufgabe 2|Aufgabe 2]]
    - [[#Beispielsaufgaben#Aufgabe 6|Aufgabe 6]]

---

### Grundgrößen

#### Spannung

Definition: Potentialunterschied zwischen zwei Punkten
- Einheit: V (Volt)
- Netzspannung in Deutschland: 230V (220-240V) 
- Formelzeichen: U
- Berechnungsformel: U = R * I

#### Stromstärke

Definition: Elektronen, die durch einen Leiter fließen
- Einheit: A (Ampere)
- Formelzeichen: I
- Berechnungsformel: I = U / R

#### Leistung

Definition: Die in einer Zeitspanne umgesetzte Energie
- Einheit: W (Watt)
- Formelzeichen: P
- Berechnungsformel: P = U * I

#### Widerstand

Definition: Die Hemmung des Stromes in einem Leiter
- Einheit: Ω (Ohm)
- Formelzeichen: R (Resistance)
- Berechnungsformel: R = U * I

#### Ladung

- Einheit: As (Ampere Sekunde)
- Formelzeichen: Q
- Berechnungsformel: Q = I * t

#### Wirkungsgrad

Definition: Das Verhältnis von abgeführter Leistung zu zugeführter Leistung
- Einheit: % (Prozent)
- Formelzeichen: η
- Berechnungsformel: η (eta) = P$ab$ / P$zu$

#### Arbeit/Energie

Definition:
- Einheit: J (1 Joule = 1 Watt/Sekunde)
- Formelzeichen: W (Work)
- Berechnungsformel: W = P * t

---

### Beispielaufgaben

#### Aufgabe 1

Auf einem Drucker sind folgende Werte abgebildet: `Betriebsspannung (AC): 110V bis 240V` `Druckmodus: / = 1,45 A` `Sleep-Modus: / = 2,5 mA`

a) Berechnen Sie die Leistungsaufnahme während eines Druckvorgangs.


*Geg.: U = 230V, I = 1,45A*
*Ges.: P*
*benötigte Formel(n): U * I = P*

*230 * 1,45 = 333,50W*
*A: Während des Druckvorgangs entsteht eine Leistungsaufnahme von 333,5 Watt.*


b) Berechnen Sie den Jahresenergiebedarf im Sleep-Modus (eines Druckers).

*Geg.: U = 230V, I = 0,0025*
*Ges.: Wh/Jahr*
*benötigte Formel(n): U * I = P, P * t = W*

*230V * 0,0025A = 0.575W*
*0,575W * (365 * 24) = 5.037Wh = 5,04kWh/Jahr*
*A: Der Drucker benötigt innerhalb eines Jahres im Sleep-Modus 5,04kWh Energie*

#### Aufgabe 2

Berechnen Sie den Energiebedarf der Monitore (14 * 2) für ein Jahr mit 249 Arbeitstagen (alle anderen Tage werden nicht berücksichtigt): `Stromversorgung Eingangsspannung 100 bis 240 VAC` `Stromverbrauch (im Betrieb) 19 W` `Stromverbrauch (jährlich) 28 kWh` `Stromverbrauch (in Standby) 0,23 W` `Hinweise zum Stromverbrauch Energieverbrauch von 28 kWh basierend auf dem Stromverbrauch der Einheit bei einem Betrieb von 4 Stunden/Tag an 365 Tagen. Der tatsächliche Energieverbrauch hängt von der Verwendung der Einheit ab. Stromverbrauch (ausgeschaltet) 0,17 W`

a) für einen Monitor im Standby-Betrieb (16h pro Arbeitstag).

*Geg.: P$standby$ = 0,23 W, tArbeitstag = 16h, tArbeitstage = 249d*
*Ges.: W/Jahr*
*benötigte Formel(n): P$standby$ * tArbeitstag * tArbeitstage = W/Jahr*

*0,23W * 16h * 249d = 916,32Wh/Jahr = 0,92kWh/Jahr*
*A: Der Monitor benötigt innerhalb eines Jahres mit 249 Arbeitstagen mit je 16 Stunden standby-Verbrauch 0,92kWh.*

b) für einen Monitor bei betrieblicher Nutzung (8h pro Arbeitstag).

*Geg.: P$Betrieb$ = 0,23 W, tArbeitstag = 8h, tArbeitstage = 249d*
*Ges.: W/Jahr*
*benötigte Formel(n): P$Betrieb$ * tArbeitstag * tArbeitstage = W/Jahr*
*19W * 8h * 249d = 37.848Wh/Jahr = 37,85kWh/Jahr*
*A: Der Monitor benötigt innerhalb eines Jahres mit 249 Arbeitstagen mit je 8 Stunden Betrieb-Verbrauch 37,85kWh.*

c) für alle (28) Monitore bei kombinierter Nutzung (a+b) (Gesamtenergiebedarf)

*Geg.: Anzahl Montiore = 28, WStandby = 0,92kWh/Jahr, WBetrieb = 37,85kWh/Jahr*
*Ges.: Wgesamt/Jahr*
*benötigte Formel(n): Anzahl Monitore * WStandby * WBetrieb = Whgesamt/Jahr*

*28 * (916,32Wh + 37.848Wh) = 1,085,400Wh/Jahr = 1.085,4kWh/Jahr*
#### Aufgabe 3

Die zehn Netzwerkserver sollen mittels USV abgesichert werden. Die Leistung eines Servernetzteils beträgt dabei im Volllastbetrieb 750 W. Die USV beinhaltet 8 Akkus mit einer Ladungsmenge pro Akku von 200 Ah bei einer Spannung von 12 V.
- Bei Netzausfall sind die acht Akkus der USV zu 100% geladen.
- Die Akkus werden vollständig entladen. 
- Verluste sind nicht zu berücksichtigen.
- Die Berechnung basiert auf Volllastbetrieb.

a) Ermitteln Sie die an die USV angeschlossene Leistung.

*Geg.: Anzahl Server = 10, PNetzteil = 750W*
*Ges.: Pgesamt*
*benötigte Formel(n): Pgesamt = PNetzteil * Anzahl Server*

*Pgesamt = 750W * 10 = 7.500W*
*A: Die gesamte Leistung, welche an die USV angeschlossen ist, sind 7.500W.*

b) Ermitteln Sie die gesamte Ladungsmenge (Kapazität) der acht Akkus.

*Geg.: Qakku = 200Ah, Anzahl Akkus = 8 Stk.*
*Ges.: Qgesamt*
*benötigte Formel(n): Qgesamt = Qakku * Anzahl Akkus*

*Qgesamt = 200Ah * 8Stk. = 1600Ah*
*A: Die gesamte Kapazität der USV mit 8 Akkus beträgt bei 200Ah je Akku, 1.000Ah.*

c) Ermitteln Sie die elektrische Energie, welche die acht Akkus bei einer Spannung von 12 V insgesamt abgeben können.

*Geg.: Qgesamt = 1.600Ah, Uakku = 12V*
*Ges.: Wgesamt*
*benötigte Formel(n): W = P * t*

*Wgesamt = 1.600Ah * 12V = 19.200Wh = 19,2kWh*

d) Ermitteln Sie die theoretische Überbrückungszeit der USV in Stunden und Minuten.

*Geg.: Pgesamt = 7.500W, Wgesamt = 19.200Wh*
*Ges.: tüberbrückungszeit*
*benötigte Formel(n): tüberbrückungszeit = Wgesamt / Pgesamt*

*19.200Wh / 7.500W = 2,56h = 2h 34m*

[Refferenz]((https://bsffbde-my.sharepoint.com/:b:/g/personal/timmatheis_schueler_bs-ffb_de/Eb7n5ISphIRCnb74v2yuq4QBXKgAydghoFUEo_QtPNo1fg?e=VPFOSj)

---

1. elektrische [↩](https://bsffbde-my.sharepoint.com/my?id=%2Fpersonal%2Ftimmatheis%5Fschueler%5Fbs%2Dffb%5Fde%2FDocuments%2FObsidian%2DVault%2FIT%2DT%2FEnergie%20und%20Leistung%2Emd&parent=%2Fpersonal%2Ftimmatheis%5Fschueler%5Fbs%2Dffb%5Fde%2FDocuments%2FObsidian%2DVault%2FIT%2DT#fnref:1)