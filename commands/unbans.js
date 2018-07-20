const Discord = require("discord.js");


exports.run = (client, message, arsg) => {

    if(message.member.roles.some(r=>["DEV", "Mod", "HELPER", "Staff", "Helper", "Moderator"].includes(r.name)) ) {

    const embed = new Discord.RichEmbed()
    .setAuthor("Unbans", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .setColor("#ff41c7")
    .setDescription("``Unban an user!``")
    .addField("**Example**",
            "``!Unban {user}\n\n``", true)
    .addField("**Why you're being unbanned?**", "``The user have showed great sportmanship through appealing to come back!\nIf this command it's brought up by a`` **Moderator** `` the user will be unban!``\n``There's only one more chance left after appealing to come back!``");
    message.channel.send({embed});


}
}