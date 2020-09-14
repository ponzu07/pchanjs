const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: 'VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel

  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    let channelID;
    channelID = "709227262251106344";
    client.channels.get(channelID).send(newMember.user.username + " がチャンネル 「" + newUserChannel.name + "」 に入室したよ。");
  } else if(newUserChannel === undefined){
    let channelID;
    channelID = "709227262251106344";
    client.channels.get(channelID).send(newMember.user.username + " がチャンネル 「" + oldUserChannel.name + "」 から退室したよ。");
  }
})

client.login(process.env.BOT_TOKEN);