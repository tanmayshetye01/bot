const ms = require('ms');

module.exports.run = (bot,message,args)=>{
    const Discord = require('discord.js');
    module.exports.run = (bot,message,args)=>{
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField(`Version`, `Electrav.5-fw1.5gW6`)
        .addField(`Owner`, `Tanmay#0007`)
        .addField(`Uptime:`, `${ms(bot.uptime)}`)
        .addField(`Support: `, `[Click Here](https://dsc.gg/electra-support)`)
        .addField(`Invite:`, `[Click Here](https://dsc.gg/electra-gg)`)
        message.channel.send(embed);
    
    }
    
}

module.exports.help ={
    name:"stats"
}