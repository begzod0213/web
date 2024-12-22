const { Telegraf } = require('telegraf')
const TOKEN='7901653823:AAGohxo1z6N5rv1qUexyRQ43qd-XsBCuzjE'

const bot = new Telegraf(TOKEN)
const web_link="https://peppy-kulfi-c6f118.netlify.app/"

bot.start((ctx) => ctx.reply('Welcome',{
    reply_markup: {keyboard:[[{text:"web app", web_app: {url:web_link}}]] }
}

)),
bot.launch()