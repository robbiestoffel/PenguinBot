module.exports = {
  name: "ping",
  aliases: [],
  permissions: ["SEND_MESSAGES", "ADMINISTRATOR"],
  cooldown: 2,
  description: "Replies with Pong.",
  execute(client, interaction) {
    interaction.reply({ content: "Pong!" });
  },
};
