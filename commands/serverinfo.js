const Discord = require('discord.js');
module.exports.run = (bot,message,args)=>{   
let server = message.guild;
      let serverinfoembed = new Discord.MessageEmbed()

    .setTitle(`Serverinfo ${server.name}`)
    .setColor('RANDOM')
    .setThumbnail(server.iconURL({dynamic:true}))
    .addField(`Owner: `,`${server.owner}`,true)
    .addField(`OwnerID: `,`${server.ownerID}`,true)
    .addField(`REGION: `,`${server.region}`,true)
    .addField(`Channels`,`${server.channels.cache.size}`,true)
    .addField(`Members`,`${server.members.cache.size}`,true)
    .addField(`Roles`,`${server.roles.cache.size}`,true)
    .addField(`Created At`,`${server.createdAt}`,true)
    message.channel.send(serverinfoembed)
}

module.exports.help ={
    name:"serverinfo"
}
