[TL:DR Page](https://github.com/tldr-pages/tldr/blob/main/pages/common/whereis.md)
[MAN Page](https://man7.org/linux/man-pages/man1/whereis.1.html)
***Locate the binary, source, and manual page files for a command.***

Definition: Der `whereis` Befehl durchsucht <u>alle Standardpfade</u> (ausführbare Dateien,
Dokumentationen, Konfigurationsdateien) nach Dateien welche irgendwo den Namen der Eingabe haben.

### Häufige Optionen
**-m**
	Sucht nach MAN pages zu dem angeforderten Befehl
**-b**
	Sucht nach den Binärdateien zu dem angeforderten Befehl
	
### Beispiele:
```
root@pop-os:/home/tim# whereis firefox
firefox: /usr/bin/firefox /etc/firefox /usr/lib/firefox /usr/share/firefox /usr/share/man/man1/firefox.1.gz
```

```
root@pop-os:/home/tim# whereis firefox -m
firefox: /usr/bin/firefox /usr/share/man/man1/firefox.1.gz
```
### Ähnliche Befehle für den `whereis` Befehl:
[[locate]] - Find filenames quickly.