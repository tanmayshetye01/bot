const Discord = require('discord.js');
module.exports.run = (bot,message,args)=>{   
const embedname = new Discord.MessageEmbed()
.setDescription(`${message.content.substring(6)}`)
.setColor('0x#00ffff')
.setFooter(`Requested by ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic : true})}`)
.setTimestamp();
message.channel.send(embedname)
}

module.exports.help ={
    name:"embed"
}
