[TL:DR Page](https://github.com/tldr-pages/tldr/blob/main/pages/common/chmod.md)
[MAN Page](https://man7.org/linux/man-pages/man1/chmod.1.html)
**change file mode bits**

Definition: Der `chmod` Befehl ermöglich die Bearbeitung der [[Dateiberechtigungen]] einer Datei oder eines Verzeichnisses, welche beispielsweise durch den [[ls#Häufige Optionen|ls -l]] oder `stat` Befehl sichtbar sind. Hierfür kann die Buchstabennotation oder die Oktalnotation verwendet werden.

Steht für: change mode

### Buchstabennotation
Hierbei kann für die jeweiligen Entitäten durch die Auflistung der Abkürzungen `u` für `User`, `g` für `Group`, `o` für `Others` und `a` für `All` die Berechtigungen für diese bearbeitet werden. Für diese Bearbeitung ist neben den Entitäten auch der nach den Entitäten folgende Modifikator entscheiden. Dabei wird zwischen den Entitäten mit einem `,` getrennt. Dabei fügt der `+` Modifikator das nach diesem folgende Recht hinzu. Der `-` Modifikator entfernt das nach diesem folgende Recht und der `=` Modifikator setzt das nach diesem folgende Recht und verwirft alle anderen Rechte. Das nach dem Modifikator folgende Recht kann ein einzelnes Recht sein oder auch eine Auflistung ohne Trennzeichen von mehreren Rechten. Dabei werden die Berechtigungen, wie ebenfalls im [[ls|ls-Befehl]], `read` mit `r`, `write` mit `w` und `execute` mit `x` abgekürzt. 
### Oktalnotation
Hierbei kann durch die Angabe eines numerischen Wertes die Berechtigungen für eine Entität gesetzt werden. Die Berechtigungen erhalten hierbei den aus der folgenden Tabelle zu entnehmenden [[chmod#Oktalwert|Wert]].

| Berechtigung | Numerischer Wert |
| ------------ | ---------------- |
| read (r)     | 4                |
| write (w)    | 2                |
| execute (x)  | 1                |
Die Summe der Werte der Berechtigungen ist die Zahl zur Definition der Berechtigungen. Durch die Auflistung von drei Zahlen ohne Trennzeichen beschreibt die Zahl links die Berechtigungen für die Entität `user`, die Zahl in der Mitte die Berechtigungen für die Entität `group` und die Zahl recht die Berechtigungen für die Entität `others`. Alle bestehenden Berechtigungen werden hier verworfen und durch die angegebenen Berechtigungen ersetzt.

### Syntax
**chmod** PERMISSIONS FILE

### Beispiele:
```Bash title:Terminal hl:3
root@pop-os:/home/tim/Downloads# ls -l
-rw-r--r--  1 user  group  1024 Jan 1 10:00 file1.txt
root@pop-os:/home/tim# chmod u=rwx,g=rw file1.txt
root@pop-os:/home/tim/Downloads# ls -l
-rwxrw-r--  1 user  group  1024 Jan 1 10:00 file1.txt
```

```Bash title:Terminal hl:3
root@pop-os:/home/tim/Downloads# ls -l
-rwxrw-r--  1 user  group  1024 Jan 1 10:00 file1.txt
root@pop-os:/home/tim# chmod a+x file1.txt
root@pop-os:/home/tim/Downloads# ls -l
-rwxrwxr-x  1 user  group  1024 Jan 1 10:00 file1.txt
```

```Bash title:Terminal hl:3
root@pop-os:/home/tim/Downloads# ls -l
-rwxrwxr-x  1 user  group  1024 Jan 1 10:00 file1.txt
root@pop-os:/home/tim# chmod u-rw,g=,o+w file1.txt
root@pop-os:/home/tim/Downloads# ls -l
---x---rwx  1 user  group  1024 Jan 1 10:00 file1.txt
```

```Bash title:Terminal hl:3
root@pop-os:/home/tim/Downloads# ls -l
-rwxrwxr-x  1 user  group  1024 Jan 1 10:00 file1.txt
root@pop-os:/home/tim# chmod 777 file1.txt
root@pop-os:/home/tim/Downloads# ls -l
---x---rwx  1 user  group  1024 Jan 1 10:00 file1.txt
```

```Bash title:Terminal hl:3
root@pop-os:/home/tim/Downloads# ls -l
-rwxrwxr-x  1 user  group  1024 Jan 1 10:00 file1.txt
root@pop-os:/home/tim# chmod 041 file1.txt
root@pop-os:/home/tim/Downloads# ls -l
----r----x  1 user  group  1024 Jan 1 10:00 file1.txt
```

#### Oktalwert
Dieser Oktalwert resultiert dabei aus der Position der jeweiligen Berechtigungen im Binärsystem. Dabei hat die Position ganz rechts einer binären Zahl den Wert 1, die zweite Zahl den Wert 2 und die dritte Zahl den Wert 4.

| r   | w   | x   |
| --- | --- | --- |
| 4   | 2   | 1   |
Zur Errechnung des Wertes der benötigten Rechten wird die Summe aller gesetzten Berechtigungen erfasst.