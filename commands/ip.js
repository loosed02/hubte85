const Discord = require("discord.js");


exports.run = (client, message, arsg) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("IP HavocPrison", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .setColor("#ff41c7")
    .addField("Our current IP it's", "───────────────────────────────────\n```Play.havocprison.net *OFFLINE*```\n───────────────────────────────────")
    message.channel.send({embed});


}