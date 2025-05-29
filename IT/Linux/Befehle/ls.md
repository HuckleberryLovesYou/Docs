[TL:DR Page](https://github.com/tldr-pages/tldr/blob/main/pages/common/ls.md)
[MAN Page](https://man7.org/linux/man-pages/man1/ls.1.html)
***list directory contents***

Definition: Der `ls` Befehl listet alle nicht-versteckten Dateien und Ordner in dem Verzeichnis auf, in welchem dieser ausgeführt worden ist.

Steht für: list short

### Häufige Optionen
**-a**, **--all**
	 Zeigt auch Dateien an, welche mit ., .. oder als Attribut hidden haben
**-l, --long**
	listet mehr Informationen zu den jeweiligen Dateien auf
	
### Beispiele:
```
root@pop-os:/home/tim# ls
file1.txt  directory1  image.png  script.sh
```

```
root@pop-os:/home/tim# ls -l
-rw-r--r--  1 user  group  1024 Jan 1 10:00 file1.txt
drwxr-xr-x  2 user  group  4096 Jan 1 10:00 directory1
-rw-r--r--  1 user  group  2048 Jan 1 10:00 image.png
-rwxr-xr-x  1 user  group  3072 Jan 1 10:00 script.sh
```

```
root@pop-os:/home/tim# ls -la
drwxr-xr-x   5 user  group   4096 Oct 26 10:30 .
drwxr-xr-x  23 user  group   4096 Oct 26 09:55 ..
-rw-------   1 user  group   1024 Oct 25 16:00 .hidden_file
-rw-r--r--   1 user  group    256 Oct 24 14:20 file1.txt
drwxr-xr-x   2 user  group   4096 Oct 23 11:15 directory1
-rw-r--r--   1 user  group   2048 Oct 22 08:00 image.png
-rwxr-xr-x   1 user  group   3072 Oct 21 17:45 script.sh

```

### Alternativen für den `ls` Befehl:
[lsd](https://github.com/lsd-rs/lsd) - The next gen ls command.
[exa](https://github.com/ogham/exa) - A modern replacement for ‘ls’.