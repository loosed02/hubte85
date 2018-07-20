const Discord = require("discord.js");


exports.run = (client, message, arsg) => {
    if(message.member.roles.some(r=>["DEV", "Mod", "HELPER", "Staff", "Helper", "Moderator"].includes(r.name)) ) {


    const embed = new Discord.RichEmbed()
    .setAuthor("Kick", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .setColor("#d665d0")
    .setDescription("``Kick an user for bad behaviour!``")
    .addField("**Example**",
            "``!Kick {user}\n\n``", true)
    .addField("**Why you're being punished?**", "``The user will immediately be kick for breaking rules!\nIf this command it's dare to be brought up by a`` **Moderator** ``you will be kicked!``\n``You're here by now go back to #rules and read the rules to avoid being kicked!``");
    message.delete().catch()
    message.channel.send({embed})
    .then(msg => {
        msg.delete(10000)
    });

}
}