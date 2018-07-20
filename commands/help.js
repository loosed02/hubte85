const Discord = require("discord.js");


exports.run = (client, message, arsg) => {
         
    const embed = new Discord.RichEmbed()
    .setAuthor("HavocPrison Help Menu", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("Prefix for HavocPrison Bot:", "!")
    .addField("Commands", "Moderator - ``kicks, bans, mutes, unbans, voicemutes, update, rules, tempmute, kick, ban, warn``\nOwner - ``Demotes, prefix, sban, smute, sunmute, sunban, promote, updates, gamemaster``\nMember - ``ip, website, store, suggestion, level``", true)
    .setColor("#d665d0")
    message.channel.send({embed}) .then(msg => {
        msg.delete(40000)
    
    });
}
