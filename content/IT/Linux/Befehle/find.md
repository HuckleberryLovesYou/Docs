[TL:DR Page](https://github.com/tldr-pages/tldr/blob/main/pages/common/find.md)
[MAN Page](https://man7.org/linux/man-pages/man1/find.1.html)
***search for files in a directory hierarchy***

Definition: Der `grep` Befehl gibt alles aus, was auf das eingegebene Pattern zutrifft. Im Pattern dürfen Jokerzeichen verwendet werden.

### Syntax
**find** OPTION FILE PATTERNS

### Häufige Exklusionen
-name
	Legt das zu verwendende Pattern fest.
-size
	Legt die grösse von passenden Dateien durch nachfolgende Angabe mit operand (+ = mehr als, - = weniger als) Zahl und Einheit (M = Mebibyte, G = Gibibyte) fest. (Beispiel: -size +10M)
-user
	Legt den User fest, dem passende Dateien gehören müssen. (Beispiel: -user tim)
	
### Beispiele:
```
root@pop-os:/home/tim# find /home -name *sef*
/home/pi/etc-pihole/list.116.blocklist.sefinek.net.domains
/home/pi/etc-pihole/list.135.blocklist.sefinek.net.domains
/home/pi/etc-pihole/list.61.blocklist.sefinek.net.domains.sha1
/home/pi/etc-pihole/list.84.blocklist.sefinek.net.domains.sha1
[...]
```

```
root@pop-os:/home/tim# find /home -user pi -name *sef*

```

```
root@pop-os:/home/tim# find /home -size +1k -name *sef*
/home/pi/etc-pihole/list.116.blocklist.sefinek.net.domains
/home/pi/etc-pihole/list.135.blocklist.sefinek.net.domains
/home/pi/etc-pihole/list.70.blocklist.sefinek.net.domains
/home/pi/etc-pihole/list.88.blocklist.sefinek.net.domains
[...]
```
### Alternativen für den `find` Befehl:
[[grep]] - print lines that match patterns