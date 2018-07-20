const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  if(!args[2]) return message.reply("You have forgotten our important message!");

  if(!message.member.hasPermission("ADMINISTRATOR"));
  let announcement = args.slice(1).join(" ");

  let annembed = new Discord.RichEmbed()

    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor("#ff41c7")
    .setThumbnail("https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("Havoc Prison Announcement", announcement)
    .setFooter("Check out our website havocprison.net for more News and Announcements!");
  

    let announceChannel = message.guild.channels.find(`name`, "announcement");

    if (!announceChannel) return message.channel.send("this channel doesn't exist.");



    message.delete().catch(O_o = {});

    announceChannel.send(annembed);  

  

} 