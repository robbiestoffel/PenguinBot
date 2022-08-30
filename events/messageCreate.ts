module.exports = {
  name: "messageCreate",
  once: false,
  execute(client, message) {
    let ran = Math.floor(Math.random() * 80);
    if (ran === 0 || ran === 1) {
      message.channel.send("GAKKER");
    } else if (ran === 5 || ran === 6) {
      message.channel.send("penguins are power");
    } else if (ran === 7 || ran === 8) {
      message.channel.send("Don't let your iceburg melt!");
    } else if (ran === 9) {
      message.channel.send("NOOT NOOT");
    }

    if (message.content.includes("bot")) {
      console.log("it worked");
    }
  },
};
