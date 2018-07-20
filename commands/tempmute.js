
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
  let user = message.mentions.members.first();

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES"));
  let muterole = message.guild.roles.find(`name`, "muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          CONNECT: false,
          SPEAK: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
  let channel = user.guild.channels.find("name", "mod-logs");
    if (!channel) return; 
    let embed = new Discord.RichEmbed()
    .setAuthor("mute Punishment", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("User: ", `${user.user.tag}`, true)
    .setColor("#d665d0")
    .addField("Staff member", `${message.author.tag}`, true)
    .addField("Time", `${mutetime}`)
    .setTimestamp()
    await channel.send( {embed});

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}