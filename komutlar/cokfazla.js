const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = '!';

client.on('ready', () => {
  console.log(`Hazir ${client.user.tag}!`);
});
client.on("message", message => {

    const kufur = ["amk", "aq", "ananı", "orosbu", "çocugu", "cocugu", "annesiz", "sikerim", "beyinsiz", "göt", "amcık", "piç", "sik", "yarrak", "anan"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Küfür Etti!**-- By Omer -Küfür Engel")
        message.delete()

    }
    client.on("message", message => {

        const yetki = ["yetki", "slotluk", "slot"];
        if (yetki.some(word => message.content.includes(word)) ) {
        message.reply("**Yetki İçin Yetki Yazım Odasına Mesaj Atınız** -- By Omer")
        message.reply("**Nick: Slotluk İsmi  Şifre: Şifreniz Olarak Mesaj Atınız** -- By Omer")
        }
    });
    client.on("message", message => {

        const ipreklam = ["server", "ip", "dns"];
        if (ipreklam.some(word => message.content.includes(word)) ) {
        message.reply("**Server IP: 213.238.173.111** -- By Omer")
        message.reply("**Zombie Escape Server** -- By Omer")
        }
    });
    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

});
 
                                                            client.on('message', msg => {
                                                                if (msg.content === 'discord.gg') {
                                                                    msg.delete(30);
                                                               msg.reply('**İsimli Şahıs Reklam Yaptı** ---- By Omer');
                                                       msg.reply('**Reklam Engellendi** ---- By Omer');
                                                }
                                                         });