module.exports = {
  name: "clear",
  aliases: [],
  permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
  cooldown: 10,
  description: "Clears lots of messages",
  async execute(client, interaction) {
    const amount = interaction.options.getInteger("amount");
    if (amount > 100)
      return interaction.reply({
        content:
          "My penguin powers arn't unlimited, I cannot delete more than 100 messages!",
        ephemeral: true,
      });
    if (amount < 1)
      return interaction.reply({
        content: "You need to delete at least 1 message silly!",
        ephemeral: true,
      });
    await interaction.channel.messages
      .fetch({ limit: amount })
      .then((messages) => {
        interaction.channel.bulkDelete(messages, true);
      });
  },
};
