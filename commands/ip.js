const Discord = require('discord.js');
module.exports.run = (bot,message,args)=>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`              <a:ElectraSpin:941155734853406792> **KHATARNAK WORLD** <a:ElectraSpin:941155734853406792> `)
    .addField(`Server Owner:`, `KhatarnakIshan`)
    .addField('Developers', `PRO0PxD`)
    .addField('Helpers', `tanmayshetye54`)
    .addField(`Server IP:`, `play.khatarnakworld.net`)
    .addField(`Server Port:`, `25565`)
    .addField(`Version:`, `Version Requires MC 1.8.8-1.18.1`)
    .addField(`Server Jar:`, `PaperMC 1.17.1`)
    .addField(`PlayerSlot:`, `52`)
    .addField(`Server Description:`, `KHATARNAK WORLD | OP BEDWARS [1.8-1.18] \nKW PLAY NOW KW`)
    .addField(`Khatarnak World Discord Server:`, `[Click Here](https://discord.gg/khatarnak)`)
    .setImage('https://cdn.discordapp.com/attachments/932856319747162192/941157834920431636/logo.png')
    .setFooter(`Requested by ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`)
    .setTimestamp();
    message.channel.send(embed);

}

module.exports.help ={
    name:"ip"
}