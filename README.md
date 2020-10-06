<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Szymczakovv" src="https://i.imgur.com/42AnCgD.jpg">  

# Szymczakovv Status bot
[![Paypal Doante](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.me/oplatyprimerp)
[![Discord](https://discordapp.com/api/guilds/252317073814978561/embed.png)](https://discord.gg/wrSqK6k)

Fivem Status Bot

Jak wygląda: https://i.imgur.com/Gyoh1DM.png

Stwórz config.json
I dodaj:

{
    "token": "twoj token",
    "prefix": "prefix np. !"
}

Stwórz start.bat
I dodaj:

node .


Wypakuj node_modules.rar
i dodaj do folderu z statusem



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

if(!message.member.roles.some(r=>["developer"].includes(r.name)) ) -- linijka 64 ["developer"] w braketach zmieniasz rangę bez oznaczenia @ (raczej nie zadziala gdy masz rangę na dc z emotką)

.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/4/45/Ok-logo.jpg") -- możesz to zmienić to jest logo gdy serwer jest on

.setThumbnail("https://wingmantech.net/wp-content/uploads/2013/09/img1.jpg") -- możesz to zmienić to jest logo gdy serwer ma przerwę techniczną

.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/8/8d/No-Symbol.svg") -- możesz to zmienić to jest logo gdy serwer jest off

Gotowe :)

https://szymczakovv.pl/
