import { Collection } from "discord.js";
import { validPermissions } from "../config.json";
const cooldowns = new Map();

module.exports = {
  name: "interactionCreate",
  once: false,
  async execute(client, interaction) {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const command =
      client.commands.get(commandName) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(commandName));

    if (command.permissions.length > 0) {
      for (const perm of command.permissions) {
        if (!validPermissions.includes(perm)) {
          interaction.reply({
            content:
              "Hmm, looks like Wabi made a typo because something didn't work...",
            ephemeral: true,
          });
          return console.log(`Invalid Permissions ${perm}`);
        }
        if (!interaction.member.permissions.has(perm)) {
          return interaction.reply({
            content:
              "I'm afraid I am not suppost to let you execute this command...",
            ephemeral: true,
          });
        }
      }
    }

    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = command.cooldown * 1000;

    if (time_stamps.has(interaction.user.id)) {
      const expiration_time =
        time_stamps.get(interaction.user.id) + cooldown_amount;

      if (current_time < expiration_time) {
        const time_left = (expiration_time - current_time) / 1000;

        return interaction.reply({
          content: `Whoa, slow down there, in ${time_left.toFixed(
            2
          )} seconds you can use ${command.name}`,
          ephemeral: true,
        });
      }
    }

    time_stamps.set(interaction.user.id, current_time);
    setTimeout(() => time_stamps.delete(interaction.user.id), cooldown_amount);

    try {
      command.execute(client, interaction);
    } catch (err) {
      interaction.reply({
        content:
          "Hmm, something weird is happening, the command didn't work... Hey, blame Wabi not me!",
        ephemeral: true,
      });
      console.log(err);
    }
  },
};
