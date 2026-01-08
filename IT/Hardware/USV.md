Definition: Eine [USV (unterbrechungsfreie Stromversorgung)](https://de.wikipedia.org/wiki/Unterbrechungsfreie_Stromversorgung) stellt die Versorgung von kritischen Systemen, wie beispielsweise Core-Switches, Firewall-Cluster und Hypervisor, bei Störungen im Stromnetz sicher. Es gibt es drei verschiedene Arten von USV: VFD, VI, VFI.

### Stromnetzstörungen
- Kurzunterbrechungen
- Spannungsschwankungen
- verzerrte Spannungskurvenform
- Frequenzschwankungen
- überlagerte Störspannungen

### USV-Aufgaben
- Spannungsschwankungen im Stromnetz ausgleichen
- Versorgung von wichtigen Komponenten mit Strom bei Stromausfall
### USV-Arten
Es gibt es drei verschiedene Arten von USV, welche je unterschiedlichen Schutz bieten.
#### Offline (VFD)
- Versorgung der Verbraucher im Normalbetrieb über Netzstrom
- Umschaltung auf Batterie bei Netzstromausfall mit 10ms Stromausfall
#### Line-Interactive (VI)
- Versorgung der Verbraucher im Normalbetrieb über Netzstrom
- Umschaltung auf Batterie bei Netzstromausfall mit 4ms Stromausfall
- Schutz vor Spannungsspitzen durch Spannungswandler
#### Online (VFI)
- Versorgung der Verbraucher im Normalbetrieb über Strom aus der Batterie, welche gleichzeitig geladen wird.
- Keine Umschaltung auf Batterie notwendig
- Schutz vor Spannungsspitzen und Frequenzschwankungen