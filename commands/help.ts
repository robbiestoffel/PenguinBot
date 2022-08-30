import { MessageEmbed } from "discord.js";

module.exports = {
  name: "help",
  aliases: [],
  permissions: [],
  cooldown: 20,
  description: "Shows a list of commands",
  execute(client, interaction) {
    const commandEmbed = new MessageEmbed()
      .setColor("AQUA")
      .setTitle("Help - List of Slash Commands")
      .addFields(
        { name: "add", value: "Adds two numbers" },
        { name: "gakker", value: "Plays Penguin Sounds in VC" },
        { name: "leave", value: "Stops the Penguin Sounds in VC" },
        { name: "ping", value: "Replies with Pong" },
        { name: "play", value: "Plays a song or adds a song to the queue" },
        { name: "skip", value: "Skips to the next song in the queue" },
        { name: "stop", value: "Stops the song and ends the queue" },
        {
          name: "rockpaperscissors",
          value: "Starts a game of rock paper scissors",
        },
        { name: "rules", value: "Shows a list of half serious rules" }
      )
      .setFooter({ text: "If you are having any issues with me contact Wabi" });

    interaction.reply({
      embeds: [commandEmbed],
      ephemeral: true,
    });
  },
};
