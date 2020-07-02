const Discord = require('discord.js');

const Client = new Discord.Client();

const token = '';  // Insert your token here

const prefix = ''; // Insert anything on your keyboard here.

Client.on('ready', message => {
    console.log('The bot has been activated!') // This tells you when the bot is online!
})

Client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case '': // This is what the command will be called.
            message.channel.send(" ") // Put what you want the bot to respond with in here
        break;
    }
})










Client.login(token)