const Discord = require("discord.js");

module.exports.run = async(bot, msg, args) => {
    let user = msg.mentions.members.first();
    if(!message.guild) return message.reply("this command is only available in servers");

	if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("you do not have enough permissions to ban members. (`BAN_MEMBERS`)");

	

	if(message.args.length === 0) return message.reply("No member to unban. You either did not provide any GuildMember (User ID, User Tag (User#1234) or mention");

	

	msg.guild.unban(message.args[1]).then(u => {

	message.reply(`__${u.tag}__ has been unbanned.`).catch(console.log);


	let channel = user.guild.channels.find("name", "mod-logs");
    if (!channel) return; 
    await user.unban('${user.user.tag} has been unbanned!');
    let embed = new Discord.RichEmbed()
    .setAuthor("Ban have been terminated!", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("User: ", `${user.user.tag}`, true)
    .setColor("#d665d0")

    .addField("Staff member", `${msg.author.tag}`, true)
    .addField("Reason", `${reason}`)
    .setTimestamp()
    await channel.send( {embed});
	}).catch(e => {

		message.reply(`an error occured while trying to unban a GuildMember. \`${e.toString()}\``).catch(console.log);

	});

};