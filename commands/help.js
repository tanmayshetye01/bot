const Discord = require('discord.js');
module.exports.run = (bot,message,args)=>{
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Electra')
    .setDescription(`i'm a discord utility bot \nDo ?help for information on a command \n\n**Looking for support? [Click Here](https://dsc.gg/electra-support)** \n**Invite: [Click Here](https://dsc.gg/electra-gg)** \n\n\ **Commands** \n\n\`?av\` Get a users avatar. \n\`?whois\` Get user information. \n\`?ping\` Ping the bot. \n\`?roleinfo\` Get information about a role. \n\`?serverinfo\` Get server info/stats. \n\`?embed\` Create an embed. \n\`?addrole\` Add a user to a role or roles. \n\`?derole\` Remove a user to a role or roles.`)
    message.channel.send(embed);

}

module.exports.help ={
    name:"help"
}