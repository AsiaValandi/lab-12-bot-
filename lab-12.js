// 1093068055:AAFQuUMH2BflprrJq2RAiUCuJ9i6fP6kmOg

const TelegramBot = require('node-telegram-bot-api');
const Token = '1093068055:AAFQuUMH2BflprrJq2RAiUCuJ9i6fP6kmOg';

const bot = new TelegramBot(Token, {
    polling: true
});
bot.on('message', msg =>{
    var userId = msg.from.id;
    bot.sendMessage(userId, `Привет, ${msg.from.first_name}!`)
});

bot.onText(/\/deletemessage/,  msg => {
    var userId = msg.from.id;
    bot.deleteMessage(userId, msg.message_id-1);
});
bot.onText(/addsmile/,  msg => {
    var userId = msg.from.id;
    bot.sendMessage(userId, '☻');
});

// bot.on('message', (msg) =>{
bot.onText(/image/,  msg => {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, `${msg.from.first_name}, выберите картинку.`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Море',
                        url: 'https://avatars.mds.yandex.net/get-pdb/231404/09b417bb-4182-4d02-aee0-79d5d006ade6/s1200?webp=false',
                    },
                    {
                        text: 'Ночное небо над городом',
                        url: 'https://i.pinimg.com/originals/f4/77/ee/f477eee0c926dfd54d1401ce3882de5a.jpg',
                    }
                ],
                [
                    {
                        text: 'Дорога',
                        url: 'http://terraoko.com/wp-content/uploads/2015/01/terraoko-2015011202-3.jpg',
                    },
                    {
                        text: 'Cat',
                        url: 'https://avatars.mds.yandex.net/get-pdb/1946308/288ec4d8-1954-422f-a265-694e9bf24c4a/s1200?webp=false',
                    }
                ]
            ]
        }
    })
    console.log(msg)
});



