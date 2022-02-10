const Discord = require('discord.js');
module.exports.run = (bot,message,args)=>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField(`Members`, `${message.guild.memberCount}`)
    .setTimestamp();
    message.channel.send(embed);

}

module.exports.help ={
    name:"membercount"
}