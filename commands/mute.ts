import { User, GuildMember } from "discord.js";

module.exports = {
  name: "mute",
  aliases: [],
  permissions: ["KICK_MEMBERS", "MUTE_MEMBERS"],
  cooldown: 0,
  description: "Mutes a member",
  execute(client, interaction) {
    const user: User = interaction.options.getUser("member")!;
    const time: number = interaction.options.getNumber("min")!;
    const reason: string =
      interaction.options.getString("reason") ||
      " -I wasnt told why to mute you, just that I was to mute you.";
    const member: GuildMember = interaction.guild.members.cache.get(user.id);

    member.timeout(time * 60 * 1000, reason);

    interaction.reply({
      content: `Okie Dokie! ${member} has been muted for ${time} because of ${reason}`,
      ephemeral: true,
    });
  },
};
