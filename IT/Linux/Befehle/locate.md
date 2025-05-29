[TL:DR Page](https://github.com/tldr-pages/tldr/blob/main/pages/linux/locate.md)
[MAN Page](https://www.man7.org/linux/man-pages/man1/locate.1.html)
***Find filenames quickly.***

Definition: Der `locate` Befehl listet alle Dateien oder Verzeichnisse <u>des gesamten Systems</u> auf, die irgendwo die Eingabe nach diesem Befehl im Namen haben.

Die hierfür verwendete Datenbank /var/lib/mlocate kann mit dem Befehl `updatedb` aktualisiert/aktualisiert werden.

### Häufige Optionen
**-c, --count**
	Ausgabe der Anzahl der gefunden Treffer
### Beispiele:
```
root@pop-os:/home/tim# locate firefox
/etc/firefox
/etc/firefox/pref
/etc/firefox/syspref.js
/usr/lib/firefox-addons/searchplugins/amazondotorg.xml
/usr/lib/firefox-addons/searchplugins/bing.xml
/usr/lib/firefox-addons/searchplugins/duckduckgo.xml
/usr/lib/firefox-addons/searchplugins/ecosia.xml
/usr/lib/firefox-addons/searchplugins/googledotcom.xml
/usr/lib/firefox-addons/searchplugins/startpage.xml
/usr/lib/firefox-addons/searchplugins/wikipedia.xml
/usr/lib/firefox/firefox
/usr/lib/firefox/firefox.real
/usr/share/applications/firefox.desktop
/usr/share/doc/firefox
/usr/share/icons/hicolor/16x16/apps/firefox.png
/usr/share/icons/hicolor/24x24/apps/firefox.png
/usr/share/icons/hicolor/256x256/apps/firefox.png
/usr/share/icons/hicolor/32x32/apps/firefox.png
/usr/share/icons/hicolor/48x48/apps/firefox.png
/usr/share/icons/hicolor/512x512/apps/firefox.png
/usr/share/icons/hicolor/scalable/apps/firefox.svg
/usr/share/man/man1/firefox.1.gz
/usr/share/pixmaps/firefox.png
/var/lib/snapd/desktop/applications/firefox_firefox.desktop
/var/lib/snapd/icons/160_firefox.png
/var/lib/snapd/icons/48_firefox.png
/var/lib/snapd/icons/64_firefox.png
/var/snap/firefox
/var/snap/firefox/common/.mozilla/firefox
/opt/firefox
```

```
root@pop-os:/home/tim# locate firefox -c
30
```

### Ähnliche Befehle für den `locate` Befehl:
[[whereis]] - Locate the binary, source, and manual page files for a command.