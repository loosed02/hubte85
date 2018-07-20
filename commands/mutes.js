const Discord = require("discord.js");


exports.run = (client, message, arsg) => {

    if(message.member.roles.some(r=>["DEV", "Mod", "HELPER", "Staff", "Helper", "Moderator"].includes(r.name)) ) {

    const embed = new Discord.RichEmbed()
    .setAuthor("Mutes", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .setColor("#ff41c7")
    .setDescription("``Mute an user for their bad behaviour!``")
    .addField("**Example**",
            "``!tempmute {user} {time}\n\n``", true)
    .addField("**Why you're being punished?**", "``The user will immediately be muted for breaking rules!\nIf this command it's dare to be brought up by a`` **Moderator** ``you will be mute!``\n``You're here by now go back to #rules and read the rules to avoid being mute!``");
    message.channel.send({embed});
    client.config.setFilter(message.guild.id, filters)


}
}