const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: '@VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
});




client.on('voiceStateUpdate', (oldMember, newMember) => {
  const newUserChannel = newMember.voice.channelID
  const oldUserChannel = oldMember.voice.channelID
  const textChannel = message.guild.channels.cache.get('754891923159777371')

  if(newUserChannel === '544882228677705742') {
    textChannel.send(`${newMember.user.username} (${newMember.id}) has joined the channel`)
  } else if (oldUserChannel === '544882228677705742' && newUserChannel !== '544882228677705742') {
    textChannel.send(`${newMember.user.username} (${newMember.id}) has left the channel`)
  }
})

client.login(process.env.BOT_TOKEN);