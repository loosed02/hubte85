const Discord = require("discord.js");


exports.run = (client, message, arsg) => {

    if(message.member.roles.some(r=>["DEV", "Owner"].includes(r.name)) ) {

    const embed = new Discord.RichEmbed()
    .setAuthor("Demote", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .setColor("#d665d0")
    .setDescription("``Removes an user role!``")
    .addField("**Example**",
            "``!demote {user}\n\n``", true)
    .addField("**Why you're being punished?**", "``The user will immediately be demoted and will be punished!\nIf this command it's dare to be brought up by the `` **Founder** ``you will be ban or punished!``");
    message.delete().catch()
    message.channel.send({embed}) .then(msg => {
        msg.delete(10000)
    });
}
}