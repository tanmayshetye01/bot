const Discord = require('discord.js')
module.exports.run = (bot,message,args)=>{
let therole = message.mentions.roles.first();
if(!therole) return message.channel.send(`Invalid argument.`)

let theroleembed = new Discord.MessageEmbed()
.setTitle(`Roleinfo <a:wping:936149244983771186> __${therole.name}__ <a:wping:936149244983771186> `)
.setColor('RANDOM')
.addField(`Name`,`${therole.name}`)
.addField(`Role Id`,`${therole.id}`)
.addField(`Color`,`${therole.hexColor}`)
.addField(`Hoisted`,`${therole.hoist}`)
.setTimestamp()

message.channel.send(theroleembed);
}

module.exports.help ={
    name:"roleinfo"
}