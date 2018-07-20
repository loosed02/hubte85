const Discord = require("discord.js");

module.exports.run = async(bot, msg, args) => {
    let user = msg.mentions.members.first();

    if (!msg.guild.me.hasPermission("KICK_MEMBERS")) return await msg.channel.send("Bot does not have \`KICK_MEMBERS\` permission!");

    if (!msg.member.hasPermission("KICK_MEMBERS")) return await msg.channel.send("You do not have \`KICK_MEMBERS\` permission!");

    if (!user) user = msg.guild.members.get(args[0]);
    if(!user) return await msg.channel.send("Please mention a valid user!");
    if (!user.kickable) return await msg.channelse.dn("This user cannot be kicked!");
    const reason = args.slice(1).join(" ");
    if (!reason) return msg.channel.send("Please provide a reason for this user to be !");
    let channel = user.guild.channels.find("name", "mod-logs");
    if (!channel) return; 
    await user.kick('${user.user.tag} has been kick for `${reason}');
    let embed = new Discord.RichEmbed()
    .setAuthor("Kick Punishment", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("User: ", `${user.user.tag}`, true)
    .setColor("#d665d0")
    .addField("Staff member", `${msg.author.tag}`, true)
    .addField("Reason", `${reason}`)
    .setTimestamp()
    await channel.send( {embed});
}