const Discord = require('discord.js');
const canvas = require("discord-canvas"),
welcomeCanvas = new canvas.Welcome();

module.exports = async(bot,member)=>{

    if(member.guild.id != '929635358579249152') return;
   
    const WELCOMECHAN = member.guild.channels.cache.get('932856319747162192');
     
    if(!WELCOMECHAN) return console.log(`WELCOME CHANNEL NOT FOUND!`);
    
    
    let image = await welcomeCanvas
      .setUsername(member.user.username)
      .setDiscriminator(member.user.discriminator)
      .setMemberCount(member.guild.memberCount)
      .setGuildName(member.guild.name)
      .setAvatar(member.user.displayAvatarURL({dynamic:false , format: 'jpg',size: 512}))
      .setColor("border", "#8015EA")
      .setColor("username-box", "#8015EA")
      .setColor("discriminator-box", "#8015EA")
      .setColor("message-box", "#8015EA")
      .setColor("title", "#8015EA")
      .setColor("avatar", "#8015EA")
      .setBackground("https://markcannondotcom.files.wordpress.com/2012/12/bethlehem-village-1024x450.jpg")
      .toAttachment();
       
    let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");
     
    WELCOMECHAN.send(`Welcome to the server, ${member.user}!`,attachment);

}