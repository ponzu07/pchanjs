const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ activity: { name: 'VALORANT' } }); //アクティビティ表示
	console.log('準備ok!');
});


// ログを吐き出すチャンネルのID
let setchannelID

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    let channelID;
    if(setchannelID === undefined){
      let channels = newMember.guild.channels;
      channelLoop:
      for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
          channelID = c[0];
          break channelLoop;
        }
      }
    } else {
      channelID = setchannelID;
    }
    channelID = "754891923159777371";
    client.channels.get(channelID).send(newMember.user.username + " がチャンネル 「" + newUserChannel.name + "」 に入室したよ。");
  } else if(newUserChannel === undefined){
    let channelID;
    if(setchannelID === undefined){
      let channels = oldMember.guild.channels;
      channelLoop:
      for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
          channelID = c[0];
          break channelLoop;
        }
      }
    } else {
      channelID = setchannelID;
    }
    channelID = "754891923159777371";
    client.channels.get(channelID).send(newMember.user.username + " がチャンネル 「" + oldUserChannel.name + "」 から退室したよ。");
  }
})


client.login(process.env.BOT_TOKEN);