const Discord = require("discord.js");
const xp = require("../settings/xp.json");

module.exports.run = async(bot,message,args) =>{
    if(!xp[message.author.id])
    {
        xp[message.author.id] = {
            xp: 0,
            level: 0
        };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp = (curlvl * 200) * 2.2
    let difference = nxtLvlXp - curxp;

    let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}'s Level:`)
        .setColor("#ff00ff")
        .addField("Level", curlvl, true)
        .addField("Experience", curxp, true)
        .setImage("https://cdn.discordapp.com/attachments/464791231994789898/469000096256884741/user-426126605946191892-level-card-9d74b0-14-5.png")
        .setFooter(`${difference} XP until level up`);

    message.channel.send(embed).then(msg => {
        message.delete(0);
        msg.delete(100000);


        
    });
}

module.exports.help = {
    name: "level"
}