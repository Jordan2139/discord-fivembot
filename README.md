# statusbot
Fivem Status Bot

Stwórz config.json
I dodaj:

{
    "token": "twoj token",
    "prefix": "prefix np. !"
}

Stwórz start.bat
I dodaj:

node .





Konfiguracja

index.example.js zmien na index.js

w index.js
const channelid = "kanal id"; // ID kanału na którym będzie status.
const adminstatus = "kanal id"; // kanal do admina status

await request(`http://ip:30120/info.json` dodajesz twoje ip, zostawiasz http:// i /info.json

wait request(`http://ip:30120/players.json` dodajesz twoje ip, sostawiasz http:// i players.json

if (message.channel.id === 'kanal id') id kanału z statusem -- linijka: 78 w index.js


Aby odpalić przerwę techniczną wpisz: Twój prefix np. !przerwa
Wymagana ranga na serwerze dc @developer można to zmienić!

if(!message.member.roles.some(r=>["developer"].includes(r.name)) ) -- linijka 64 ["developer"] w braketach zmieniasz rangę bez oznaczenia @ (raczej nie zadziala gdy masz rangę na dc z emotką XD)

.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/4/45/Ok-logo.jpg") -- możesz to zmienić to jest logo gdy serwer jest on

.setThumbnail("https://wingmantech.net/wp-content/uploads/2013/09/img1.jpg") -- możesz to zmienić to jest logo gdy serwer ma przerwę techniczną

.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/8/8d/No-Symbol.svg") -- możesz to zmienić to jest logo gdy serwer jest off
