module.exports = {
  name: "add",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: "Adds two numbers",
  execute(client, interaction) {
    const { options } = interaction;

    const num1 = options.getNumber("num1")!;
    const num2 = options.getNumber("num2")!;

    interaction.reply({ content: `The sum is ${num1 + num2}` });
  },
};
