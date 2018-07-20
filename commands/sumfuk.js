const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let fucker = message.mentions.members.first();

let sumfuk1 = new Discord.RichEmbed()
.setAuthor("Sumfuk.js", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
.setColor("#ff41c7")
.setDescription(`It seems like ${message.author} wants sum fuk. Lets all share the love!!`)
.addField("**EXAMPLE**", "``!sumfuk {user}``\n\n``Give all the sum fuk you want! But remember.. always ask for permission and use protection!``")

if(!fucker) return message.channel.send(sumfuk1)
else{

let sumfuk2 = new Discord.RichEmbed()
.setAuthor("Sumfuk.js", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
.setColor("#ff41c7")
.setDescription(`${fucker}! ${message.author} wanted to asks you if you want some sum fuk!`)
.setImage("https://cdn.discordapp.com/attachments/424889733043191810/428889609020112906/B1aXZ8wub.png");

message.channel.send(sumfuk2)};

message.delete();

}
module.exports.help = {
  name: "sumfuk"
}