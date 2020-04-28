const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk1NzIzNzg5NzI3ODI2MDEx.XoeVpQ._n-qX66-nftse16oT5UyN7Y0rrQ';

const PREFIX = '*';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.sendMessage('pong!');
            break;
        case 'ding':
            msg.channel.sendMessage('dong!');
            break;
        case 'help':
            msg.reply('Why should I help you?');
            break;
    }
})

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ding':
            msg.channel.sendMessage('dong!');
        break;
    }
})

bot.on('message', msg=>{
    if(msg.content === "Technoblade"){
        msg.channel.sendMessage('TECHNO BAD!');
    }
})
bot.on('message', msg=>{
    if(msg.content === "techno"){
        msg.channel.sendMessage('techNO');
    }
})
bot.on('message', msg=>{
    if(msg.content === "Bell"){
        msg.reply('You guys always treat me like a god, but you are also always throwing crap at me!');
    }
})
bot.on('message', msg=>{
    if(msg.content === "Charlie"){
        msg.reply('we do not speak of that name');
    }
})
bot.on('message', msg=>{
    if(msg.content === "Aaron is gay"){
        msg.reply('fuck you');
    }
})
bot.on('message', msg=>{
    if(msg.content === "its bean too long, i haven't the sun"){
        msg.reply('https://cdn.discordapp.com/attachments/695756467457884180/695757671890157698/How_to_make_1000_dolar.mp4');
    }
})
bot.on('message', msg=>{
    if(msg.content === "Aaron more like Bobby McFerrin"){
        msg.reply('Did you really just spend your time figuring out how to spell Bobby McFerrin?');
    }
})
bot.on('message', msg=>{
    if(msg.content === "fuck"){
        msg.reply('https://tenor.com/view/heavenly-floop-heavenly-floop-soap-he-gif-15669148');
    }
})
bot.on('message', msg=>{
    if(msg.content === "shit"){
        msg.reply('https://tenor.com/view/heavenly-floop-heavenly-floop-soap-he-gif-15669148');
    }
})
bot.on('message', msg=>{
    if(msg.content === "ass"){
        msg.reply('https://tenor.com/view/heavenly-floop-heavenly-floop-soap-he-gif-15669148');
    }
})
bot.on('message', msg=>{
    if(msg.content === "bitch"){
        msg.reply('https://tenor.com/view/heavenly-floop-heavenly-floop-soap-he-gif-15669148');
    }
})
client.login(process.env.BOT_TOKEN);
