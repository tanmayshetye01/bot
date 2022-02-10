module.exports.run = async(bot,message,args)=>{


    let channeltolock = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);

    if(!channeltolock) return message.channel.send(`No Channel Mentioned`);
    
    let everyone = message.guild.roles.cache.get(message.guild.id)

    channeltolock.updateOverwrite(everyone, {
        SEND_MESSAGES: true
        
      },[`REPONSIBLE MODERATOR | ${message.author.tag}`])
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setColor('#0bd013')
      .setDescription(`<:ElectraSuccess:940998679450488843> Unlocked Channel ${channeltolock}`)
      message.channel.send(embed);
    
    }



module.exports.help ={
    name:"unlock"
}