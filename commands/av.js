const {Client , MessageEmbed} = require('discord.js');
module.exports.run = (bot,message,args)=>{
    let target = message.mentions.members.first() || message.member
    if(!target) return message.reply(`No User Mentioned !`)
   const Discord = require('discord.js');
   const avembed = new MessageEmbed()
   .setTitle(`${target.user.tag}`)
   .setColor('RANDOM')
   .setImage(target.user.displayAvatarURL({dynamic : true , size: 4096 ,format:"png"}))
   .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic : true})}`)
   .setTimestamp()
   
    message.channel.send(avembed)
}

module.exports.help ={
    name:"av"
}