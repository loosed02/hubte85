const Discord = require("discord.js");



module.exports.run = async (client, msg, args) => {

    if(!args[0]) return msg.channel.send("You have to suggest something!");
    let channel = client.channels.get("453290640684482570");
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setAuthor("Suggestion Channel", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .setColor("#d665d0")
    .setDescription(args.join(" "))
    .setFooter(`User: ${msg.author.id}`);
    client.channels.get("453290640684482570").createWebhook(msg.author.username, msg.author.AvatarURL)
    .then (wh => {
        wh.send(embed)
        .then(msg => {

        
        msg.react(client.guilds.get("469210240039256085").emojis.get("469601668758110248"))
        msg.react(client.guilds.get("469210240039256085").emojis.get("469601434405437461"))

    })
    .then(() => {
        msg.channel.send(`Your suggestion has been set to ${channel}!`)
        wh.delete();
    })
})
}

