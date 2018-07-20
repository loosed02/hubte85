const Discord = require("discord.js");


exports.run = (client, message, arsg) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("GAMEMASTER", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .setColor("#d665d0")
    .setDescription("``GameMaster set! Level 10000 ( ATTACK 10000 & DEF 100000)``")
    message.channel.send({embed})
    .then(msg => {
        msg.delete(50000)
    });

}