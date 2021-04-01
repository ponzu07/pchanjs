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
		const randagent = Math.floor(Math.random() * 16);

		switch (randagent) {
			case 0:
				const embed0 = new Discord.MessageEmbed()
					.setTitle('ジェット')
					.setURL('https://valorant.fandom.com/wiki/Jett')
					.setImage('https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed0);
				break
			case 1:
				const embed1 = new Discord.MessageEmbed()
					.setTitle('レイズ')
					.setURL('https://valorant.fandom.com/wiki/Raze')
					.setImage('https://static.wikia.nocookie.net/valorant/images/c/c4/Raze_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed1);
				break
			case 2:
				const embed2 = new Discord.MessageEmbed()
					.setTitle('ブリーチ')
					.setURL('https://valorant.fandom.com/wiki/Breach')
					.setImage('https://static.wikia.nocookie.net/valorant/images/5/5c/Breach_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed2);
				break
			case 3:
				const embed3 = new Discord.MessageEmbed()
					.setTitle('オーメン')
					.setURL('https://valorant.fandom.com/wiki/Omen')
					.setImage('https://static.wikia.nocookie.net/valorant/images/0/06/Omen_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed3);
				break
			case 4:
				const embed4 = new Discord.MessageEmbed()
					.setTitle('ブリムストーン')
					.setURL('https://valorant.fandom.com/wiki/Brimstone')
					.setImage('https://static.wikia.nocookie.net/valorant/images/3/37/Brimstone_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed4);
				break
			case 5:
				const embed5 = new Discord.MessageEmbed()
					.setTitle('フェニックス')
					.setURL('https://valorant.fandom.com/wiki/Phoenix')
					.setImage('https://static.wikia.nocookie.net/valorant/images/f/fa/Phoenix_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed5);
				break
			case 6:
				const embed6 = new Discord.MessageEmbed()
					.setTitle('ブリーチ')
					.setURL('https://valorant.fandom.com/wiki/Breach')
					.setImage('https://static.wikia.nocookie.net/valorant/images/5/5c/Breach_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed6);
				break
			case 7:
				const embed7 = new Discord.MessageEmbed()
					.setTitle('セージ')
					.setURL('https://valorant.fandom.com/wiki/Sage')
					.setImage('https://static.wikia.nocookie.net/valorant/images/1/1e/Sage_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed7);
				break
			case 8:
				const embed8 = new Discord.MessageEmbed()
					.setTitle('ソーヴァ')
					.setURL('https://valorant.fandom.com/wiki/Sova')
					.setImage('https://static.wikia.nocookie.net/valorant/images/6/61/Sova_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed8);
				break
			case 9:
				const embed9 = new Discord.MessageEmbed()
					.setTitle('ヴァイパー')
					.setURL('https://valorant.fandom.com/wiki/Viper')
					.setImage('https://static.wikia.nocookie.net/valorant/images/9/91/Viper_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed9);
				break
			case 10:
				const embed10 = new Discord.MessageEmbed()
					.setTitle('サイファー')
					.setURL('https://valorant.fandom.com/wiki/Cypher')
					.setImage('https://static.wikia.nocookie.net/valorant/images/b/bb/Cypher_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed10);
				break
			case 11:
				const embed11 = new Discord.MessageEmbed()
					.setTitle('レイナ')
					.setURL('https://valorant.fandom.com/wiki/Reyna')
					.setImage('https://static.wikia.nocookie.net/valorant/images/4/41/Reyna_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed11);
				break
			case 12:
				const embed12 = new Discord.MessageEmbed()
					.setTitle('スカイ')
					.setURL('https://valorant.fandom.com/wiki/Skye')
					.setImage('https://static.wikia.nocookie.net/valorant/images/b/b9/Skye_Keyart_final.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed12);
				break
			case 13:
				const embed13 = new Discord.MessageEmbed()
					.setTitle('キルジョイ')
					.setURL('https://valorant.fandom.com/wiki/Killjoy')
					.setImage('https://static.wikia.nocookie.net/valorant/images/8/8c/Killjoy.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed13);
				break
			case 14:
				const embed14 = new Discord.MessageEmbed()
					.setTitle('ヨル')
					.setURL('https://valorant.fandom.com/wiki/Yoru')
					.setImage('https://static.wikia.nocookie.net/valorant/images/a/a1/Yoru2.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed14);
				break
			case 15:
				const embed15 = new Discord.MessageEmbed()
					.setTitle('アストラ')
					.setURL('https://valorant.fandom.com/wiki/Astra')
					.setImage('https://static.wikia.nocookie.net/valorant/images/8/8a/Astra_artwork.png')
					.setColor('RANDOM')
					.setTimestamp();
				message.channel.send(`${message.author},`, embed15);
				break
			default:
				console.log(randagent);
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
