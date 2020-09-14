const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: 'VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
});


client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  let channelID = "754891923159777371";

  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    let channels = newMember.guild.channels;
    client.channels.cache.get(channelID).send(newMember.user.username + " がチャンネル 「" + newUserChannel.name + "」 に入室しました。");
  } else if(newUserChannel === undefined){
    let channels = oldMember.guild.channels;
    client.channels.cache.get(channelID).send(newMember.user.username + " がチャンネル 「" + oldUserChannel.name + "」 から退室しました。");
  }
})


client.login(process.env.BOT_TOKEN);