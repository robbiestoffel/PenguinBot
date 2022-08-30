import { GuildScheduledEvent, TextChannel } from "discord.js";

module.exports = {
  name: "guildScheduledEventCreate",
  description: "Notifys when an event has been created!",
  once: false,
  execute(client, guildScheduledEvent: GuildScheduledEvent) {
    (client.channels.cache.get("844886111292489728") as TextChannel).send(
      `Check out: ${guildScheduledEvent.url}`
    );
  },
};
