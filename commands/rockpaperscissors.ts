import { TextChannel, User, Permissions, GuildChannel, Message } from "discord.js";

module.exports = {
  name: "rockpaperscissors",
  aliases: ["rps"],
  permissions: [],
  cooldown: 10,
  description: "Starts a Rock Paper Scissors Shoot game.",
  async execute(client, interaction) {
    const player1: User = interaction.options.getUser("player1");
    const player2: User = interaction.options.getUser("player2");

    interaction.reply({
      content: `Starting a Rock Paper Scissors Shoot game started between ${player1} and ${player2}`,
      ephemeral: false,
    });

    const channel1Create: GuildChannel = interaction.guild.channels.create(
      `rps-${player1.username}`,
      { parent: "886569387203629106", type: 'GUILD_TEXT', permissionOverrwrites: [
        {
          id: interaction.user.id,
          deny: [Permissions.FLAGS.VIEW_CHANNEL],
        }
      ] }
    );

    const channel1: TextChannel = (await client.channels.fetch(
      channel1Create.id
    )) as TextChannel;
    if (!channel1) return console.log("It doesn't exist");
    if (!channel1.isText) return console.log("Its not text!");

    await channel1
      .send(
        "React with either a rock: :rock:, paper: :scroll:, or scissors: :scissors: to choose"
      )
      .catch(console.error);

    // const message1: Message = await channel1.messages.fetch({ limit: 1 })

    // message1.react(':rock:')
    // message1.react(':scroll:')
    // message1.react(':scissors:')

    console.log("should have sent message");

  },
};
