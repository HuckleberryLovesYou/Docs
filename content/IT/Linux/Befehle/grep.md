[TL:DR Page](https://github.com/tldr-pages/tldr/blob/main/pages/common/grep.md)
[MAN Page](https://man7.org/linux/man-pages/man1/grep.1.html)
***print lines that match patterns***

Definition: Der `grep` Befehl gibt alles aus, was auf das eingegebene Pattern zutrifft. Im Pattern dürfen Jokerzeichen verwendet werden.

### Syntax
**grep** OPTION PATTERNS FILE

### Häufige Optionen
**-R, ****--dereference-recursive***
	Liest alle Dateien in allen Unterverzeichnissen. Folgt allen symlinks.
**-r, --recursive**
	Liest alle Dateien in allen Unterverzeichnissen.
	
### Beispiele:
```
root@pop-os:/home/tim# grep -R tim /etc
/etc/passwd:tim:x:1001:1001:Tim User,,,:/home/tim:/bin/bash
/etc/group:tim:1001:
/etc/shadow:tim:$6$xxxxxxxxxxxxxxxx$yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy:18965:0:99999:7:::
/etc/sudoers:#includedir /etc/sudoers.d
/etc/security/access.conf:# Uncomment and edit the following lines to set up login access control based on time ranges.
/etc/fonts/conf.d/65-khmer-fonts.conf:    <!-- KhmerOS content tim 1.0 - Regular -->
/etc/systemd/system/mytimer.service:[Timer]
/etc/systemd/system/mytimer.timer:[Timer]
```
### Alternativen für den `grep` Befehl:
[[find]] - search for files in a directory hierarchy