const Discord = require("discord.js");

module.exports.run = async(bot, msg, args) => {
    let user = msg.mentions.members.first();

    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return await msg.channel.send("Bot does not have \`BAN_MEMBERS\` permission!");

    if (!msg.member.hasPermission("BAN_MEMBERS")) return await msg.channel.send("You do not have \`BAN_MEMBERS\` permission!");

    if (!user) user = msg.guild.members.get(args[0]);
    if(!user) return await msg.channel.send("Please mention a valid user!");
    if (!user.kickable) return await msg.channelse.dn("This user cannot be banneed!");
    const reason = args.slice(1).join(" ");
    if (!reason) return msg.channel.send("Please provide a reason for this user to be ban!");
    let channel = user.guild.channels.find("name", "havoc-mod-logs");
    if (!channel) return; 
    await user.ban('${user.user.tag} has been banned for `${reason}');
    let embed = new Discord.RichEmbed()
    .setAuthor("Ban Punishment", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("User: ", `${user.user.tag}`, true)
    .setColor("#d665d0")

    .addField("Staff member", `${msg.author.tag}`, true)
    .addField("Reason", `${reason}`)
    .setTimestamp()
    await channel.send( {embed});
}
