var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "." //The text before commands, you can put anything that you prefer

    if(message.author.id != "598568697866485774" && message.channel.id === "595639586726740049"){
        if(msg.startsWith('.', 0)){
            if(msg === prefix + "1" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 1========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "2" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 2========') // Sends a message to the channel, with the content
                }
             if(msg === prefix + "3" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 3========') // Sends a message to the channel, with the content
             }
            if(msg === prefix + "4" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 4========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "5" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 5========') // Sends a message to the channel, with the content
            }
            if(msg === prefix + "6" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 6========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "7" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 7========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "8" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 8========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "9" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 9========') // Sends a message to the channel, with the content
            }
                if(msg === prefix + "c0" && message.channel.id === "595639586726740049"){
                message.channel.send('========QUESTION NO. 10========') // Sends a message to the channel, with the content
            }
        
           
        }
    }
});

bot.login(process.env.BOT_TOKEN)
