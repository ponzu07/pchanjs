const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: 'VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
});




client.on('voiceStateUpdate', (oldState, newState) => {
  let newUserChannel = newState.guildMember.voice.channel
  let oldUserChannel = oldState.guildMember.voice.channel

  if(oldUserChannel === null && newUserChannel !== null) {
     // User Joins a voice channel
    console.log('join');

  } else if(newUserChannel === null){
    // User leaves a voice channel
    console.log('leave');

  }
})

client.login(process.env.BOT_TOKEN);