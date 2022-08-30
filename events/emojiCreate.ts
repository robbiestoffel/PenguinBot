import { Client, Emoji, TextChannel } from "discord.js";

// const emojiCreate = (client: Client) => {
//   const name = 'emojiCreate'
//   const description = 'Sends message to #penguin-emoji when emoji is created.'
//   const once = false
//   const execute = (emoji: Emoji) => {
//     (client.channels.cache.get('844886111292489728') as TextChannel ).send(`New Emoji! ${emoji}`);
//   }

//   client.on(name, (emoji: Emoji) => execute(emoji))
// }

// export default emojiCreate

module.exports = {
  name: "emojiCreate",
  once: false,
  execute(client, emoji) {
    (client.channels.cache.get("844886111292489728") as TextChannel).send(
      `${emoji}`
    );
  },
};
