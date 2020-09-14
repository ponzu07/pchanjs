// スタートアップ
const discord = require('discord.js');
const client = new discord.Client();


//BOTステータス(Discord.js)
client.on('ready', message =>
{
  client.user.setPresence({ activity: { name: '@VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
  setInterval(() =>
    client.guilds.cache.forEach(guild => {
      const member = guild.member('752430156928385044')
      if (member) member.kick()
    }), 300000)



});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    let channelID;
    let channels = newMember.guild.channels;
    channelLoop:
    for (let c of channels) {
      let channelType = c[1].type;
      if (channelType === "text") {
        channelID = c[0];
        break channelLoop;
      }
    }
    client.channels.get(channelID).send(newMember.user.username + " がチャンネル 「" + newUserChannel.name + "」 に入室したよ。");
  } else if(newUserChannel === undefined){
    let channelID;
    let channels = oldMember.guild.channels;
    channelLoop:
    for (let c of channels) {
      let channelType = c[1].type;
      if (channelType === "text") {
        channelID = c[0];
        break channelLoop;
      }
    }
    client.channels.get(channelID).send(newMember.user.username + " がチャンネル 「" + oldUserChannel.name + "」 から退室したよ。");
  }
})


//ボイスチャンネル入退室をテキストチャンネルに通知
bot.on("voiceChannelJoin", (member, newChannel) => {
bot.createMessage('709227262251106344', member.username + "が [" + newChannel.name + "] に入室したよ( *´艸｀)");
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
bot.createMessage('709227262251106344', member.username + "が [" + oldChannel.name + "] からいなくなっちゃった('ω')ノ。");
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
bot.createMessage('709227262251106344', member.username + "が [" + oldChannel.name + "] から [" + newChannel.name + "] に移動しました。");
});


//確率アクション
client.on('message', message=>{
  /* bot自身の発言を無視 */
  if(message.author.bot) return;
const prob = Math.floor(Math.random() * 100);
  if (message.content && prob < 30)
    {
       message.react('😄');
      }  
});


// Discord に接続します。
client.login(process.env.BOT_TOKEN);
