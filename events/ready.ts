import { Constants } from "discord.js";

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`GAKKER GAKKER! Logged in as ${client.user.tag}`);
    client.user.setActivity("penguins gakker!", { type: "LISTENING" });

    setupInteractions(client);
  },
};

const setupInteractions = (client) => {
  // const guildId = '812664786311053322'
  const guild = client.guilds.cache.get("844294028459769897");
  let commands = guild.commands;

  commands?.create({
    name: "ping",
    description: "Replies with pong.",
  });

  commands?.create({
    name: "add",
    description: "Adds two numbers!",
    options: [
      {
        name: "num1",
        description: "The first number.",
        required: true,
        type: Constants.ApplicationCommandOptionTypes.NUMBER,
      },
      {
        name: "num2",
        description: "The first number.",
        required: true,
        type: Constants.ApplicationCommandOptionTypes.NUMBER,
      },
    ],
  });

  commands?.create({
    name: "clear",
    description: "(ADMIN) Clears Messages",
    options: [
      {
        name: "amount",
        description: "Amount of Messages you want to clear",
        required: true,
        type: Constants.ApplicationCommandOptionTypes.INTEGER,
      },
    ],
  });

  commands?.create({
    name: "gakker",
    description: "Plays the Gakkers :)",
  });

  commands?.create({
    name: "leave",
    description: "Stops the Gakkers :(",
  });

  // commands?.create({
  //   name: "play",
  //   description: "Plays a song, or adds a song to the queue",
  //   options: [
  //     {
  //       name: "Youtube URL/Name",
  //       description: "The song you want to play.",
  //       required: true,
  //       type: Constants.ApplicationCommandOptionTypes.STRING,
  //     },
  //   ],
  // });

  // commands?.create({
  //   name: "p",
  //   description: "Plays a song, or adds a song to the queue",
  //   options: [
  //     {
  //       name: "Youtube URL/Name",
  //       description: "The song you want to play.",
  //       required: true,
  //       type: Constants.ApplicationCommandOptionTypes.STRING,
  //     },
  //   ],
  // });

  // commands?.create({
  //   name: "skip",
  //   description: "Skips to the next song in the queue",
  // });

  // commands?.create({
  //   name: "stop",
  //   description: "Delete queue, stops song, leaves voice channel",
  // });

  commands?.create({
    name: "mute",
    description: "(ADMIN) Mutes a member",
    options: [
      {
        name: "member",
        description: "The member you want to mute.",
        required: true,
        type: Constants.ApplicationCommandOptionTypes.USER,
      },
      {
        name: "min",
        description: "Amount of minutes you want to leave the player muted.",
        required: true,
        type: Constants.ApplicationCommandOptionTypes.NUMBER,
      },
      {
        name: "reason",
        description: "Reason for muting the player.",
        required: false,
        type: Constants.ApplicationCommandOptionTypes.STRING,
      },
    ],
  });

  commands?.create({
    name: "rules",
    description: "Displays the Rules",
  });

  commands?.create({
    name: "help",
    description: "Displays a list of Commands",
  });

  // commands?.create({
  //   name: "rockpaperscissors",
  //   description: "Plays a game or Rock Paper Scissors Shoot!",
  //   options: [
  //     {
  //       name: "player1",
  //       description: "The first player.",
  //       required: true,
  //       type: Constants.ApplicationCommandOptionTypes.USER,
  //     },
  //     {
  //       name: "player2",
  //       description: "The second player.",
  //       required: true,
  //       type: Constants.ApplicationCommandOptionTypes.USER,
  //     },
  //   ],
  // });

  // commands?.create({
  //   name: "rps",
  //   description: "Plays a game or Rock Paper Scissors Shoot!",
  //   options: [
  //     {
  //       name: "player1",
  //       description: "The first player.",
  //       required: true,
  //       type: Constants.ApplicationCommandOptionTypes.USER,
  //     },
  //     {
  //       name: "player2",
  //       description: "The second player.",
  //       required: true,
  //       type: Constants.ApplicationCommandOptionTypes.USER,
  //     },
  //   ],
  // });
};
