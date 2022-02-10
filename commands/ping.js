const Discord = require('discord.js');
module.exports.run = (bot,message,args)=>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`<a:ElectraPing:941180315785900032> WS Ping: ${bot.ws.ping}ms`)
    message.channel.send(embed);

}

module.exports.help ={
    name:"ping"
}