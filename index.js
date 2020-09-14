const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: '@VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
});




client.on('voiceStateUpdate', (oldState, newState) => {
  const newUserChannel = newState.voice.channelID
  const oldUserChannel = oldState.voice.channelID
  const textChannel = message.guild.channels.cache.get('754891923159777371')

  if(!oldState.channelID && newState.channelID === '544882228677705742') {
    textChannel.send(`${newMember.user.username} (${newMember.id}) が通話に参加しました。`)
  } else if (oldUserChannel === '544882228677705742' && newUserChannel !== '544882228677705742') {
    textChannel.send(`${newMember.user.username} (${newMember.id}) が通話を退出しました。`)
  }
})

client.login(process.env.BOT_TOKEN);