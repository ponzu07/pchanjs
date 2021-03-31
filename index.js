const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');


const appendChunkToFile = (fileName) => {
	const pathToFile = __dirname + `/recordings/${fileName}.pcm`;
	return fs.createWriteStream(pathToFile, {
		flags: 'a'
	});
};


client.on('message', message => {
	if (message.content === 'ヴァロランド') {
		var randarray = 1

		switch (randarray) {
			case "1"：
			const embed = new Discord.MessageEmbed()
				.setTitle('ジェット')
				.setURL('https://valorant.fandom.com/wiki/Jett')
				.setImage(
					'https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png'
				)
				.setColor('RANDOM')
				.setTimestamp()
			message.channel.send(embed)
			break;
			case "2":
				const embed = new Discord.MessageEmbed()
					.setTitle('2')
					.setURL('https://valorant.fandom.com/wiki/Jett')
					.setImage(
						'https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png'
					)
					.setColor('RANDOM')
					.setTimestamp()
				message.channel.send(embed)
				break;
			case "3":
				const embed = new Discord.MessageEmbed()
					.setTitle('3')
					.setURL('https://valorant.fandom.com/wiki/Jett')
					.setImage(
						'https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png'
					)
					.setColor('RANDOM')
					.setTimestamp()
				message.channel.send(embed)
				break;
			default:
				console.log('no-hitto');
		}

	}
})


client.on('voiceStateUpdate', (oldState, newState) => {
	const newUserChannel = newState.channelID
	const oldUserChannel = oldState.channelID
	if (!oldUserChannel) { //vc参加時
		client.channels.cache.get('754891923159777371').send("　Δ　" + newState.member
			.user.username + "　Δ　　が通話に参加しました。")
	} else if (!newUserChannel) { //vc退出時
		client.channels.cache.get('754891923159777371').send("　Δ　" + newState.member
			.user.username + "　Δ　　が通話を退出しました。")
	}
})

client.on('ready', () => {
	client.user.setActivity('VALORANT', {
		type: 'STREAMING'
	}); //アクティビティ表示
	console.log('準備ok!');
});

client.login(process.env.BOT_TOKEN);
