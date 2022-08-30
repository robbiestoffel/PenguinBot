import { MessageEmbed } from "discord.js";

module.exports = {
  name: "rules",
  aliases: [],
  permissions: [],
  cooldown: 10,
  description: "Displays a list of rules.",
  execute(client, interaction) {
    const ruleEmbed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle("Guidelines")
      .setDescription("(use common sense)")
      .addFields(
        { name: "Be", value: "Kind" },
        { name: "Be", value: "Respectful" },
        { name: "Be", value: "Penguin" },
        { name: "Don't", value: "Cuss" },
        { name: "Don't", value: "Spam" },
        { name: "Don't", value: "Chicken" }
      )
      .setFooter({ text: "Enjoy!" });

    interaction.reply({
      embeds: [ruleEmbed],
      ephemeral: true,
    });
  },
};
