#TODO #Diagramm
Definition: Das [UML Aktivitätsdiagramm](https://de.wikipedia.org/wiki/Aktivit%C3%A4tsdiagramm) ist ein Modellelement in der [[UML]] und beschreibt Abläufe von Operationen und Prozessen darzustellen. Im Gegensatz zu den klassischen [Programmablaufplänen](https://de.wikipedia.org/wiki/Programmablaufplan) (PAP) bzw. [Struktogrammen](https://de.wikipedia.org/wiki/Nassi-Shneiderman-Diagramm) gibt es zusätzlich einen parallelen Kontrollfluss.

## Table of Contents

- [[#Schema|Schema]]
- [[#Paralleler Kontrollfluss|Paralleler Kontrollfluss]]
- [[#Alternativer Kontrollfluss|Alternativer Kontrollfluss]]
- [[#Beispiel|Beispiel]]


---
### Schema
![[UML-Aktivitätsdiagramm-Schema.png]]

### Paralleler Kontrollfluss
Zu einem Parallelen Kontrollfluss führt ein dicker schwarzer Balken. Dieser spaltet den Kontrollfluss in mehrere Programmfäden auf. Dieses Symbol nennt sich 'Parallelisierung'. In allen davon ausgehenden Kontrollflüssen laufen die 
Aktionen unabhängig von einander ab. Durch eine erneute Verwendung des schwarzen Balkens können diese wieder synchronisiert werden. Dieses Symbol nennt sich 'Synchronisation'. Wenn alle Aktionen aller eingehenden Programmstränge ausgeführt wurden, wird der Kontrollfluss fortgesetzt.

### Alternativer Kontrollfluss
Durch das Symbol einer Raute wird der Kontrollfluss alternativ durch eine Entscheidung verzweigt. Die Verzweigungsbedingung wird neben den ausgehenden Linien in eckigen Klammern (auch guards genannt) geschrieben. Eine Zusammenführung alternativer Programmabläufe muss ebenfalls über eine Raute erfolgen.

### Beispiel
**Aufgabenstellung Weißwurstfrühstück:**
*Am Schuljahresende ist in Ihrer Klasse ein Weißwurstfrühstück angesagt:
Zunächst werden in Ihrer Klasse die Aufgaben verteilt. Um noch vor 11 Uhr die Weißwürste vertilgen zu können, werden 4 Gruppen gebildet, die gleichzeitig loslegen. Gruppe 1 kümmert sich in der Küche um das Erhitzen des Wassers. Gruppe 2 besorgt beim Metzger Weißwürste, während Gruppe 3 sich um die Brezen kümmert. Wenn das Wasser erhitzt ist und die Weißwürste besorgt wurden, kann mit dem Kochen der Weißwürste begonnen werden. Gruppe 4 ist für alle weiteren Besorgungen zuständig. (Senf, Weißbier, Servietten, etc.). Sie geht dabei folgendermaßen vor: Zunächst sucht sie einen Supermarkt und kauft schließlich dort ein. Hat sie alle Zutaten bekommen, kehrt sie zur Schule zurück, ansonsten sucht sie solange einen weiteren Supermarkt und kauft dort ein bis alle Besorgungen erledigt sind. Nachdem alle Gruppen mit Ihren Aufgaben fertig sind, beginnt das Weißwurstfrühstück. 
Modelliere den obigen Prozess mittels eines UML-Aktivitätsdiagramms ohne Schwimmbahnen!*
![[UML-Aktivitätsdiagramm-Beispiel.png]]