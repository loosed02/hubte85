const Discord = require("discord.js");


exports.run = (client, message, arsg) => {
    if(message.member.roles.some(r=>["DEV", "Mod", "HELPER", "Staff", "Helper", "Moderator"].includes(r.name)) ) {

    const embed = new Discord.RichEmbed()
    .setAuthor("Voice channels mute", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .setColor("#ff41c7")
    .setDescription("``User will be temporary muted from voicechats!``")
    .addField("**Example**",
            "``!voicemute {user} {duration} {reason}\n\n``", true)
    .addField("**Why you're being punished?**", "``The user will immediately be temporary muted!\nIf this command it's dare to be brought up by a`` **Moderator** ``you will be muted from voicechat!``\n``We here ask you to not play \n•Earape\n•Loud\n•Annoying sounds while you're in a call in our public voice channels.!``");
    message.channel.send({embed});


}
}