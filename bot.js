const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = '!';

client.on('ready', () => {
  console.log(`Hazir ${client.user.tag}!`);
});
client.on("message", message => {

    const kufur = ["amk", "aq", "ananı", "pıc", "orosbu", "çocugu", "oc", "cocugu", "annesiz", "sikerim", "beyinsiz", "göt", "amcık", "piç", "sik", "yarrak", "anan"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Küfür Etti!**-- By Omer -Küfür Engel")
        message.delete()

    }
    client.on("message", message => {

        const ipreklam = ["server", "ip", "dns"];
        if (ipreklam.some(word => message.content.includes(word)) ) {
        message.reply("**Server IP: 213.238.173.111** -- By Omer")
        message.reply("**Zombie Escape Server** -- By Omer")
        message.delete()
        }
    });

});
 
                                                            client.on('message', msg => {
                                                                if (msg.content === 'discord.gg') {
                                                                    msg.delete(30);
                                                               msg.reply('**İsimli Şahıs Reklam Yaptı** ---- By Omer');
                                                       msg.reply('**Reklam Engellendi** ---- By Omer');
                                                }
                                                         });
                                                         client.on('message', msg => {
                                                            if (msg.content === 'discord ip') {
                                                                msg.reply('**Discord:https://discord.gg/dTf4T5c** -- By Omer');
                                            }
                                                     });
                                                        
 client.login('NDg0NjY0Mzc1NTU1MjYwNDM4.DmlSuQ.HRS9d5fQK33uyYnkTWjXEw1jJzI');