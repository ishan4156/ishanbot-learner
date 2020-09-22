var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "i!" //The text before commands, you can put anything that you preferi
    if(message.author.id != "757789582111670342" && message.channel.id === "747410663822983205"){
        if(msg.startsWith('i!', 0)){
            if(msg === prefix + "bang" && message.channel.id === "747410663822983205"){
                message.channel.send('BOOM!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand i!bang right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with 'i!' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
