import { Client, Intents, Collection } from "discord.js";
import { test, penguin } from "./token.json";
import { readdirSync } from "fs";
// import emojiCreate from './events/emojiCreate'

const client: any = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.commands = new Collection();
const commandFiles = readdirSync("./commands/").filter((file) =>
  file.endsWith(".ts")
);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const eventFiles = readdirSync("./events/").filter((file) =>
  file.endsWith(".ts")
);

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(client, ...args));
  } else {
    client.on(event.name, (...args) => event.execute(client, ...args));
  }
}

// emojiCreate(client);
// import guildMemberAdd from "./events/emojiCreate"
// client.once(guildMemberAdd, (member: GuildMember) => guildMemberAdd.execute(client, member))
// import emojiCreate from "./events/emojiCreate"
// client.once(emojiCreate, (emoji: Emoji) => emojiCreate.execute(client, emoji))
// import emojiCreate from "./events/emojiCreate"
// client.once(emojiCreate, (emoji: Emoji) => emojiCreate.execute(client, emoji))
// import emojiCreate from "./events/emojiCreate"
// client.once(emojiCreate, (emoji: Emoji) => emojiCreate.execute(client, emoji))
// import emojiCreate from "./events/emojiCreate"
// client.once(emojiCreate, (emoji: Emoji) => emojiCreate.execute(client, emoji))
// import emojiCreate from "./events/emojiCreate"
// client.once(emojiCreate, (emoji: Emoji) => emojiCreate.execute(client, emoji))
// import emojiCreate from "./events/emojiCreate"
// client.once(emojiCreate, (emoji: Emoji) => emojiCreate.execute(client, emoji))
// import emojiCreate from "./events/emojiCreate"
// client.once(emojiCreate, (emoji: Emoji) => emojiCreate.execute(client, emoji))

client.login(penguin);
