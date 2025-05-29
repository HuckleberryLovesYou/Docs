#TODO
Definition: Das [MQTT](https://en.wikipedia.org/wiki/MQTT) (Message Queuing Telemetry Transport) IoT-Netzwerkprotokoll ist eine Funktechnologie zur Machine-to-Machine-Kommunikation und wird für IoT-Anwendungen verwendet.

### Standard
ISO/IEC 20922:2016

### Übertragungsmedium
Nutzt bestehende Protokolle, wie WLAN, Ethernet, Mobilfunk, [[Bluetooth LE]] und [[LoRa#Standard|LoRaWAN]] für die Kommunikation.

### Vorteile
- Geringer Bandbreitennutzung (Overhead)
- Lightweight
- Möglichkeit der Wahrnehmung von Dienstverlustes
- Flexibel und Skalierbar
- Einfach zu implementieren und zu verwenden
- geringer Integrationsaufwand

### Nachteile
- Nicht verschlüsselte Kommunikation
- Eingeschränkte Funktionen
- Benötigt Broker als zentralen Punkt

### Kommunikationsparadigma
![[mqtt_Kommunikationsparadigma.webp]]
#### Sensor
Das ist der Sensor, welcher einen Wert auslesen kann. Dabei kommuniziert dieser ausschließlich mit dem MQTT-Broker.
#### MQTT-Broker
Der MQTT-Broker ist der Publisher in diesem Prinzip. Er hält eine Verbindung mit dem Sensor und leitet den Subscribern den ausgelesenen Wert, unter einem bestimmten Topic, weiter.
#### Subscriber
Ein Subscriber kann jegliches empfangendes Endgerät sein. Dieses Endgerät kann unter Angabe des Topics den Wert in dem angegebenen Topic erhalten, indem es diesem Topic subscribed.

### Topic und Filterung​
- Topic ist eine UTF-8-Zeichenkette​
- Hierarchiestufen sind Level und sind optional und dienen der Strukturierung​.
- Durch diese Struktur ist Filterung möglich (z. B. Auswahl des Subscribers oder Umsetzung eines Berechtigungskonzepts auf dem Broker)​
- Level werden durch `/` getrennt​. Diese werden Topic Level Separator (TLS) genannt.
- Jedes Topic besteht mindestens aus einem Zeichen​
- Auch Leerzeichen sind möglich​
- Schreibweise ist case-sensitive
- `+` und `#` innerhalb eines Levels haben eine besondere Bedeutung​
#### Beispiel
Im Folgenden wird bei jedem Topic mindestens das im ersten Beispiel spezifisch genannte Topic abgefragt.
```MQTT-Topic
BS_FFB/Block_A/OG_1/146/Temp1​
```

```MQTT-Topic
BS_FFB/Block_A/+/+/Temp1​ # Ein + ist eine single-level-wildcard
```

```MQTT-Topic
BS_FFB/Block_A/#/Temp1​ # Ein # ist eine multi-level-wildcard
```