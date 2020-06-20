const config = require("./config.json");
const Discord = require("discord.js");
const mysql = require('mysql');
const request = require('request');

const bot = new Discord.Client({disableEveryone: true});
var tech = false
var players = "0";
let a = 0

const channelid = "kanal id"; // ID kanału na którym będzie status.
const adminstatus = "kanal id"; // kanal do admina status

bot.on('ready', async () => {
    console.log("Zalogowano jako " + bot.user.tag)
    setInterval(async () => {
        await request(`http://ip:30120/info.json`, async (error) => {
        if (tech == true) {
            bot.user.setActivity(`Przerwa techniczna`, {
                type: 'WATCHING',
            });
        }else if (error) {
            bot.user.setActivity(`Serwer Offline`, {
                type: 'WATCHING',
            });
        } else {
            await request(`http://ip:30120/players.json`, async (error, response, playerss) => {
                    players = JSON.parse(playerss);
                    bot.user.setActivity(`Sprawdz moj status na kanale #status`, {
                        type: 'WATCHING',
                    });
                    const channel = bot.channels.find('id', channelid);
                    if (channel) {
                        if (a === 0) {
                            const online = new Discord.RichEmbed()
                            .setAuthor("Nazwa serwera")
                                .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/4/45/Ok-logo.jpg")
                            .addField("Status", "Online")
                            .addField("Adres", "``ip``", true)
                            .addField("Graczy", `${players.length}/64`, true)
                            .setTimestamp()
                            .setColor("#35b471")
                            .setFooter("Odświeżono")
                            channel.send(online)
                            a = 1
                        }
                    } else {
                        console.log(`Nie znaleziono kanału ${channelid}`);
                    }
                });
            }
        });
    }, 10 * 1000);
});


bot.on("message", async message => {
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "przerwa") {
        if(!message.member.roles.some(r=>["developer"].includes(r.name)) )
        return message.reply("Błąd! Nie posiadasz uprawnień do tej komnendy!");
        tech = !tech
        if (tech) {
            message.reply("Przerwa techniczna została uruchomiona!")
        } else if (tech == false){
            message.reply("Przerwa techniczna została wyłączona!")
        }
    }
})


bot.on("message", async message => {
    setInterval(async () => {
        if (message.channel.id === 'kanal id') {
            await request(`http://ip:30120/info.json`, async (error) => {
                if(message.author.bot === true) {
                    if (tech === true ) {
                        var d = new Date, dformat = [d.getMonth()+1,d.getDate(),d.getFullYear()].join('/')+' '+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
                        const maintenance = new Discord.RichEmbed()
                        .setAuthor("Nazwa serwera") 
                        .setThumbnail("https://wingmantech.net/wp-content/uploads/2013/09/img1.jpg")
                        .addField("Status", "Przerwa techniczna")
                        .addField("Adres", "``ip``", true)
                        .addField("Graczy", `0/64`, true)
                        .setTimestamp(d)
                        .setColor("#fdbb4d")
                        .setFooter("Odświeżono")
                        message.edit(maintenance)
                    } else if (error){
                        var d = new Date, dformat = [d.getMonth()+1,d.getDate(),d.getFullYear()].join('/')+' '+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
                        const offline = new Discord.RichEmbed()
                        .setAuthor("Nazwa serwera") 
                        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/8/8d/No-Symbol.svg")
                        .addField("Status", "Offline")
                        .addField("Adres", "``ip``", true)
                        .addField("Graczy", `0/64`, true)
                        .setTimestamp(d)
                        .setColor("#ff634f")
                        .setFooter("Odświeżono")
                        message.edit(offline)
                    } else {
                        await request(`http://ip:30120/players.json`, async (error, response, playersembed) => {
                            playerse = JSON.parse(playersembed);
                            var d = new Date, dformat = [d.getMonth()+1,d.getDate(),d.getFullYear()].join('/')+' '+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
                            const online = new Discord.RichEmbed()
                            .setAuthor("Nazwa serwera")
                            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/4/45/Ok-logo.jpg")
                            .addField("Status", "Online")
                            .addField("Adres", "``ip``", true)
                            .addField("Graczy", `${playerse.length}/64`, true)
                            .setTimestamp(d)
                            .setColor("#35b471")
                            .setFooter("Odświeżono")
                            message.edit(online)
                        });
                    }
                }
            });
        }
    }, 10 * 1000);
})

// token id dodajesz je w configu
bot.login(config.token);