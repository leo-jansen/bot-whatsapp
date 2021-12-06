import { create, Message, Whatsapp } from 'venom-bot'
import { config } from 'dotenv'

config()

create('teste')
  .then(client => start(client))
  .catch(erro => console.error(erro))

async function start(client: Whatsapp) {
  client.onMessage(async (message: Message) => {
    let chatID = String(process.env.CHAT_ID);
    let autor = String(process.env.AUTOR)
    let alvo = String(process.env.ALVO);
    if (message.chat.isGroup == true && message.chat.id == chatID && message.author == autor) {
      await client.sendText(alvo, message.body)
        .then(result => console.log(result))
        .catch(erro => console.error(erro))
    }
  })
}