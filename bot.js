const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'מי נגר?') {
    	message.reply('אתה נגר');
  	}
});

client.on('message', message => {
    if (message.content === 'מי עוד נגר?') {
    	message.reply('גם חבר שלך נגר');
  	}
});

client.on('message', message => {
    if (message.content === 'ואם חבר שלי לא נגר?') {
    	message.reply('אתה אקסטרה נגר');
  	}
});

client.on('message', message => {
    if (message.content === 'אז מי נגר?') {
    	message.reply('כולם נגרים בדרך שונה');
  	}
});

client.on('message', message => {
    if (message.content === 'w.fortnite pc Tripaluski') {
    	message.reply('לדעתי נגר');
  	}
});

client.on('message', message => {
    if (message.content === 'w.fortnite pc ofir26') {
    	message.reply('לדעתי פרו יואווו');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
