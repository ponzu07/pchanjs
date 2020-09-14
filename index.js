const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: '@VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
});




client.on('voiceStateUpdate', (oldState, newState) => {
  let newUserChannel = newState.voice.channel
  let oldUserChannel = oldState.voice.channel

  if(oldUserChannel === null && newUserChannel !== null) {
    client.channels.cache.get('754891923159777371').send(newState.member.user.username + " が参加しました。")
  } else if(newUserChannel === null){
    client.channels.cache.get('754891923159777371').send(newState.member.user.username + " が退出しました。")
  }
})

client.login(process.env.BOT_TOKEN);