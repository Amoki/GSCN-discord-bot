const config = require('../config');
const Discord = require('discord.js');
const client = new Discord.Client();

const handlers = require('./handlers');

client.login(config.token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    handlers.messageHandler(msg);
});
