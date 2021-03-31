const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');


const appendChunkToFile = (fileName) => {
    const pathToFile = __dirname + `/recordings/${fileName}.pcm`;
    return fs.createWriteStream(pathToFile, { flags: 'a' });
};

client.on('message', msg => {
    if (msg.content.startsWith('---')) {
        const commandBody = msg.content.substring(3).split(' ');
        const channelName = commandBody[1];

        if (commandBody[0] === ('rec') && commandBody[1] && commandBody[2]) {
            const voiceChannel = msg.guild.channels.cache.find(channel => channel.name === channelName);

            if (!voiceChannel || voiceChannel.type !== 'voice')
                return msg.reply(`#${channelName} は使用できません。`);

            console.log(`Sliding into ${voiceChannel.name}...`);
            voiceChannel.join()
                .then(conn => {

                    const dispatcher = conn.play('./sounds/ding.mp3');
                    dispatcher.on('start', () => { console.log('ding.mp3 is playing..'); });
                    dispatcher.on('finish', () => { console.log('ding.mp3 has finished playing..'); });
                    console.log(`Joined ${voiceChannel.name}!\n\nREADY TO RECORD\n`);

                    const receiver = conn.receiver;
                    conn.on('speaking', (user, speaking) => {
                        if (speaking) {
                            console.log(`${user.username} started speaking`);
                            const audioStream = receiver.createStream(user, { mode: 'pcm' });
                            audioStream.pipe(appendChunkToFile(commandBody[2]));
                            audioStream.on('end', () => { console.log(`${user.username} stopped speaking`); });
                        }
                    });
                })
                .catch(err => { throw err; });
        }
        if (commandBody[0] === ('exit') && commandBody[1]) {
            const voiceChannel = msg.guild.channels.cache.find(channel => channel.name === channelName);
            console.log(`Slipping out of ${voiceChannel.name}...`);
            voiceChannel.leave();
            console.log(`\nSTOPPED RECORDING\n`);
        }
    }
})


 client.on('message', message => {
   if (message.content === '!embed') {
     const embed = new Discord.MessageEmbed()
       .setTitle('ジェット')
       .setURL('https://valorant.fandom.com/wiki/Jett')
       .setImage('https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png')
       .setColor('RANDOM')
       .setTimestamp()
 
     message.channel.send(embed)
   }
 })



client.on('voiceStateUpdate', (oldState, newState) => {
  const newUserChannel = newState.channelID
  const oldUserChannel = oldState.channelID
  if(!oldUserChannel){ //vc参加時
    client.channels.cache.get('754891923159777371').send("　Δ　" + newState.member.user.username + "　Δ　　が通話に参加しました。")
  }else if(!newUserChannel){ //vc退出時
    client.channels.cache.get('754891923159777371').send("　Δ　" + newState.member.user.username + "　Δ　　が通話を退出しました。")
  }
})


client.login(process.env.BOT_TOKEN);
