const Discord = require("discord.js");


exports.run = (client, message, arsg) => {
    if(message.member.roles.some(r=>["DEV", "Mod", "HELPER", "Staff", "Helper", "Moderator"].includes(r.name)) ) {

    const embed = new Discord.RichEmbed()
    .setAuthor("HavocPrison Updated", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("Changelog (07/18/2018)", "Version: 1.0")
    .addField("UPDATES", "➛``Fixed Anti Links``\n➛``Updated bot``\n➛``DM developer ticket being completed``\n➛``Kicks, bans, demotes, voicechannel message being updated``\n➛``Prefix have been changed to !``\n➛``Setting toggling modules``")
    .setColor("#d665d0")
    .setTimestamp()
    message.channel.send({embed}) .then(msg => {
        msg.delete(30000)
    });
}
}