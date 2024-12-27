const { Telegraf } = require('telegraf');

// Token va web linkni aniqlash
const TOKEN = '8085721750:AAH8ty8XTiBESg4Ui15VdqU0k70EqnTk8SM'; // Bot tokeningizni o'z tokeningiz bilan almashtiring
const web_link = 'https://celebrated-cendol-ed4d66.netlify.app/'; // Web ilova havolasi

// Telegraf botini ishga tushirish
const bot = new Telegraf(TOKEN);

// /start komandasi - xush kelibsiz xabari va web ilova tugmasi
bot.start((ctx) => {
  ctx.reply('Xush kelibsiz! 😊', {
    reply_markup: {
      keyboard: [
        [{ text: 'Web ilova', web_app: { url: web_link } }]
      ],
    },
  });
});

// Rasm yuborilganda javob qaytarish
bot.on('photo', (ctx) => {
  ctx.reply('So`rovingiz qabul qilindi✅. Operatorlarimiz tez orada ko`rib chiqib sizga sovg`ani yuborishadi‼️. E`tiboringiz uchun rahmat 😇');
});

// Botni ishga tushirish
bot.launch();

console.log('Bot ishga tushdi! ✅');

//8085721750:AAH8ty8XTiBESg4Ui15VdqU0k70EqnTk8SM