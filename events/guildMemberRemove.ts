import { GuildMember, TextChannel } from "discord.js";

module.exports = {
  name: "guildMemberRemove",
  description: "Logs when a member leaves.",
  once: false,
  execute(client, member: GuildMember) {
    (client.channels.cache.get("844886111292489728") as TextChannel).send(
      `${member} left the server...`
    );
  },
};
