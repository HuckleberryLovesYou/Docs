Junos OS - meist nur Junos genannt - von Juniper Networks ist ein modulares Betriebssystem, welches alle Router und Switche, welche zu Juniper gehören betriebsfähig macht. Das OS ist auf allen Geräte nahezu identisch, welches es leicht macht dieses zu lernen. Im Gegensatz zu anderen Betriebssysteme bietet Junos OS die Möglichkeit, seine Änderungen zuerst zu verifizieren, bevor diese vom System übernommen werden. Es separiert ebenfalls auch Traffic, welches weitergeleitet werden soll und Traffic, welcher der Verwaltung des Geräts dient-
## Aufgaben von Junos OS
- Verwaltung der Stromversorgung und der Kühlung des Systems
- Verarbeitung der Netzwerkprotokolle
- Bereitstellung von verschiedenen Verwaltungsmethoden des Gerätes
## Junos OS Konfiguration
Die Konfiguration für das Junos OS wird in einem Textformat dargestellt. wobei alle Informationen in einer Hierarchie aufgelistet werden. Die vier höchsten Konfigurationsebenen sind ``system``, ``chassis``, ``interfaces`` und ``protocols``
### Änderungen zurückrollen
Junos OS ermöglicht es Änderungen zurückzurollen und auf vorangegangene Konfigurationen zurückzugreifen. Diese können auch mit Kommentaren versehen werden. Weiter können Konfigurationen auch automatisch zurückgerollt werden, wenn ein `confirm` nach einer gewissen Zeit nicht eintritt.
### Verwaltungsmethoden
Jedes Gerät bietet eine CLI, ein grundlegendes Webinterface (J-Web), Automationen oder externe *Controller*.
#### Automationen
Jedes Gerät besitzt eine API, welcher durch jegliche Programmiersprachen angesprochen werden kann. Weiter gibt es zusätzlich eine Python library namens `PyEZ`.
Dabei wird unterschieden zwischen On-Box- und Off-Box-Skripte:
On-Box-Skripte:
- läuft auf dem Gerät selbst
- festlegen von Regeln
Off-Box-Skripte:
- läuft auf einem *Controller* oder dem eigenen Computer
- erfassen von Informationen über die Gerätes
- durchführen von Änderungen auf bis zu mehreren tausend Geräten
#### Externe Verwaltungsplattformen
**Verwaltungsplattformen von Juniper Networks:**
- bietet verschiedene Controller für verschiedene Arten von Netzwerken
- Mögliche Plattformen sind Mist AI, Apstra, Paragon Pathfinder usw.
**Verwaltungsplattformen von Third-Parties:**
- Viele verschiedene Plattformen (u.a. Open-Source)
- Mögliche Plattformen sind Ansible, Puppet und Chef
