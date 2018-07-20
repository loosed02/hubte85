const Discord = require(`discord.js`);
const fs = require("fs")
const client = new Discord.Client();
let xp = require("./settings/xp.json");
const auth = require(`./settings/config.json`)
const serverStats = {
    guildID: '453288595684589578',
    totalUsersID: '469674542516666369',
    memberCountID: '469674645075918869'
  };
client.on("message", message =>{
    if(message.author.bot) return;

    if(message.content.indexOf(auth.prefix) !== 0) return;

    //
    const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);

    } catch (err) {
        //NULLED
    }
});

client.on("guildMemberAdd", async member  => {
    let guildMemberAdd = client.channels.get("453289765890949131");

    let JoinMemberAdd = new Discord.RichEmbed()
    .setAuthor("Member Joined", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField(`Member joined!`, `Welcome ${member.user} to HavocPrison ($500 In Prizes) discord.\nPlease follow all the rules. We're strict with this.\n\nGet huge rewards in #invite-rewards\n\n**Website -** havocprison.net\n**Store -** store.havocprison.net\n**Server IP -** play.havocprison.net`)
    .setTimestamp()
    .setColor("#d665d0")
    guildMemberAdd.send(JoinMemberAdd);

})

client.on("guildMemberRemove", async member => {
  let guildMemberRemove = client.channels.get("453289765890949131");

  let JoinMemberLeave = new Discord.RichEmbed()
  .setAuthor("Member Left!", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
  .addField(`\nMember left! `, `───────────────────────────────────\nGoodbye ${member.user}.\n\n**User ID**: ${member.user.id}\n**Username**: ${member.user.tag}\n───────────────────────────────────`)
  .setTimestamp()
  .setColor("#d665d0")

  guildMemberRemove.send(JoinMemberLeave);

})

client.on("ready", async () => {
  client.user.setActivity("HavocPrison.net | !", { type: "WATCHING"});
  client.user.setStatus("dnd");

})
client.on('guildMemberAdd', member => {

    if (member.guild.id !== serverStats.guildID) return;
  
      client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
      client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  });
  
  client.on('guildMemberRemove', member => {
    if (member.guild.id !== serverStats.guildID) return;
  
    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  });
  
  client.on('ready', () => {
    console.log("ACTIVATED (!)");

    let botOnline = client.channels.get("469674817445167124");

    let botOnlinee = new Discord.RichEmbed()
    .setAuthor("Bot Online", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("Stats", "───────────────────────────────────\nBot have been activated!\n\n**STATS**: ONLINE\n**DEVELOPER:** Zeke#8277\n**SERVER**: HavocPrison Bot-Testing ```I'm Currently Online!```───────────────────────────────────")
    .setColor("#d665d0")
    .setTimestamp()
    botOnline.send(botOnlinee);
  })

  client.on(`message`, message => {
    
    if (!message.channel.nsfw && message.content.includes("https://") || message.content.includes("http://") || message.content.includes("www") || message.content.includes(".com") || message.content.includes(".net") || message.content.includes(".org") || message.content.includes(". com") || message.content.includes(". net") || message.content.includes(". org") || message.content.includes("discord.gg")){
    if (message.author.id != 392419670915022848, 171003593036529665) {
      message.delete();
      

    let linkk = new Discord.RichEmbed()
    
    .setAuthor("Anti Link (ENABLED)", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
    .addField("Warning (NO LINKS)", `───────────────────────────────────\n${message.author} Please do not post links without permission!\n───────────────────────────────────`)
    .setColor("#d665d0")
    .setTimestamp()
    message.channel.send(linkk);
    }  
  }
  let xpAmt = Math.floor(Math.random() * 10) + 5;
    if(!xp[message.author.id])
    {
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = (xp[message.author.id].level * 200) * 2.2; 
    xp[message.author.id].xp = curxp + xpAmt; 
    if(nxtLvl <= xp[message.author.id].xp) 
    {
        xp[message.author.id].level = curlvl + 1; 
        let embed = new Discord.RichEmbed()
        .setAuthor("Level Up!", "https://cdn.discordapp.com/avatars/469212170131865600/7ecfefebdef462d44b3684780ccae5ac.png")
        .setColor("#d665d0")
            .addField("Congratulations", `${message.author} you have mined yourself to level ${curlvl} `)
        message.channel.send(embed).then(msg =>{
            msg.delete(100000);
        });
    }
    fs.writeFile("./settings/xp.json", JSON.stringify(xp), (err) =>{
        if(err)
        {
            console.log(err);
        }
    });
  })

  const bot = new Discord.Client({
      disabledEveryone: true,
      autoReconnect: true
  });
  
client.login(process.env.BOT_TOKEN);
