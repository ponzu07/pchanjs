// スタートアップ
const discord = require('discord.js');
const client = new discord.Client();


//BOTステータス(Discord.js)
client.on('ready', message =>
{
  client.user.setPresence({ activity: { name: 'VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
  setInterval(() =>
    client.guilds.cache.forEach(guild => {
      const member = guild.member('752430156928385044')
      if (member) member.kick()
    }), 300000)



});

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


//ログイン関係
if(process.env.BOT_TOKEN == undefined)
{
	console.log('pls set ENV: BOT_TOKEN');
	process.exit(0);
}

// Discord に接続します。
bot.connect();
client.login( process.env.BOT_TOKEN );
