const Discord = require('discord.js');
const client = new Discord.Client();

const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', function() {
    bot.user.setUsername("Forknut");
}
bot.login("token");

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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
