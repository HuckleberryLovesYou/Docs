Definition: Die Schichten 5 bis 7 sind Schichten des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodell]]. Diese Schichten sind im Gegensatz zu den darunterliegenden Schichten schwierig passend aufzuteilen. Auf diesen Schichten werden Sitzungen verwaltet, Daten verschlüsselt, Daten komprimiert und Funktionen für die Anwendungen.

## Table of Contents

- [[#Gemeinsamkeiten|Gemeinsamkeiten]]
	- [[#Gemeinsamkeiten#Hardware|Hardware]]
	- [[#Gemeinsamkeiten#PDU|PDU]]
	- [[#Gemeinsamkeiten#Protokolle|Protokolle]]
- [[#Schicht 5 - Sitzungsschicht (Session layer)|Schicht 5 - Sitzungsschicht (Session layer)]]
- [[#Schicht 6 - Darstellungsschicht (Presentation layer)|Schicht 6 - Darstellungsschicht (Presentation layer)]]
- [[#Schicht 7 - Anwendungsschicht (Application layer)|Schicht 7 - Anwendungsschicht (Application layer)]]


---
### Gemeinsamkeiten
#### Hardware
Auf dieser Schicht befindet sich folgende Hardware:
- [NGFW](https://en.wikipedia.org/wiki/Next-generation_firewall)
- [Web Application Firewall (WAF)](https://en.wikipedia.org/wiki/Web_application_firewall)
- [Application Delivery Controller (ADC)](https://en.wikipedia.org/wiki/Application_delivery_controller)

#### PDU
Auf den Schichten gibt es noch kein spezielles [[Protocol data unit (PDU)]]. Auf den Schichten 5 - 7 werden Datensätze Nutzdaten genannt. Diese werden von diesen Schichten produziert und werden von unteren Schichten gekapselt.

#### Protokolle
Auf diesen Schichten arbeiten folgende Protokolle:
- [DHCP](https://de.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol "Dynamic Host Configuration Protocol")
- [DNS](https://de.wikipedia.org/wiki/Domain_Name_System "Domain Name System")
- [FTP](https://de.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol")
- [HTTP](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol")
- [HTTPS](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol_Secure "Hypertext Transfer Protocol Secure")
- [LDAP](https://de.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol "Lightweight Directory Access Protocol")
- [[MQTT]]
- [NCP](https://de.wikipedia.org/wiki/NetWare_Core_Protocol "NetWare Core Protocol")
- [RTP](https://de.wikipedia.org/wiki/Real-Time_Transport_Protocol "Real-Time Transport Protocol")
- [SMTP](https://de.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol "Simple Mail Transfer Protocol")
- [XMPP](https://de.wikipedia.org/wiki/Extensible_Messaging_and_Presence_Protocol "Extensible Messaging and Presence Protocol")

### Schicht 5 - Sitzungsschicht (Session layer)
Die [Sitzungsschicht](https://en.wikipedia.org/wiki/OSI_model#Layer_5:_Session_layer) ist die fünfte Schicht des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodell]]. Die Aufgaben dieser Schicht sind der Aufbau von Verbindungen, die Verwaltung laufender Verbindungen und der Abbau von Verbindungen zwischen zwei oder mehr Clients.
### Schicht 6 - Darstellungsschicht (Presentation layer)
Die [Darstellungsschicht](https://en.wikipedia.org/wiki/OSI_model#Layer_6:_Presentation_layer) ist die sechste Schicht des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodell]]. Die Aufgabe dieser Schicht ist die Formatierung von Daten und Übersetzung in ein durch die [[Schicht 5 - 7 (Layer 5 - 7)#Schicht 7 - Anwendungsschicht (Application layer)|Anwendungsschicht]] vorgegebenes Format.
### Schicht 7 - Anwendungsschicht (Application layer)
Die [Anwendungsschicht](https://en.wikipedia.org/wiki/OSI_model#Layer_7:_Application_layer) ist die siebte Schicht des [[_ISO-OSI Referenzmodell|ISO-OSI Referenzmodell]]. Diese ist die Schicht, welche am nächsten am Nutzer ist. Die Aufgabe dieser Schicht ist die Bereitstellung von Netzwerkzugriff für Anwendungen und die Benutzerauthentifizierung und Autorisierung.

> [!NOTE]
> Anwendungen, wie [File Explorer](https://en.wikipedia.org/wiki/File_Explorer "File Explorer") und [Microsoft Word](https://en.wikipedia.org/wiki/Microsoft_Word) gehören nicht zur [[Schicht 5 - 7 (Layer 5 - 7)#Schicht 7 - Anwendungsschicht (Application layer)|Anwendungsschicht]], jedoch [Browser](https://en.wikipedia.org/wiki/Web_browser "Web browser") und [E-Mail-Programme](https://en.wikipedia.org/wiki/Email_program "Email program") schon.