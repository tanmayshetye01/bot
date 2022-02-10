const message = require("./message")

module.exports = async(bot,guild)=>{

    bot.channels.cache.get('941212945596182568').send(`Added to a new server ${guild.name} !`)
    
}