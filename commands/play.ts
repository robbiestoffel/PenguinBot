// import {
//   AudioPlayerStatus,
//   createAudioPlayer,
//   createAudioResource,
//   getVoiceConnection,
//   joinVoiceChannel,
//   NoSubscriberBehavior,
// } from "@discordjs/voice";
// import ytdl from "ytdl-core";
// import ytSearch from "yt-search";

// const queue = new Map();

// module.exports = {
//   name: "play",
//   aliases: ["p", "skip", "stop"],
//   permissions: [],
//   cooldown: 2,
//   description: "Plays Music",
//   async execute(client, interaction) {
//     const { member, commandName } = interaction;
//     const requestedSong: string =
//       interaction.options.getString("Youtube URL/Name");
//     const serverQueue = queue.get(interaction.guildId);

//     if (!member.voice.channel) {
//       return interaction.reply({
//         content: "Get in the vc before running /play or /p!",
//         ephemeral: true,
//       });
//     }

    

//     if (commandName === "play" || commandName === "p") {
//       let song = {};

//       if (ytdl.validateURL(requestedSong)) {
//         const songInfo = await ytdl.getInfo(requestedSong);
//         song = {
//           title: songInfo.videoDetails.title,
//           url: songInfo.videoDetails.video_url,
//         };
//       } else {
//         const videoFinder = async (query) => {
//           const videoResults = await ytSearch(query);
//           return videoResults.videos.length > 1 ? videoResults.videos[0] : null;
//         };

//         const video = await videoFinder(requestedSong);
//         if (video) {
//           song = { title: video.title, url: video.url };
//         } else {
//           return interaction.reply({
//             content: "I could not find that...",
//             ephemeral: true,
//           });
//         }
//       }

//       if (!serverQueue) {
//         const queueConstructor = {
//           voice_channel: interaction.member.voice_channel,
//           text_channel: interaction.channel,
//           connection: {},
//           songs: [],
//         };

//         queue.set(interaction.guildId, queueConstructor);
//         queueConstructor.songs.push(song);

//         try {
//           const connection = joinVoiceChannel({
//             channelId: member.voice.channelId,
//             guildId: member.voice.channel.guildId,
//             adapterCreator: member.voice.channel.guild.voiceAdapterCreator,
//           });

//           queueConstructor.connection = connection;
//         } catch (err) {
//           queue.delete(interaction.guildId);
//           interaction.reply({
//             content: "I couldn't connected... Something messed up!",
//             ephemeral: true,
//           });
//           throw err;
//         }
//       } else {
//       }
//     } else if (commandName === "skip") {
//       if (!interaction.member.voice.channel)
//         return interaction.reply({
//           content: "You need to be in a achannel to execute this command!",
//           ephemeral: true,
//         });
//       if (!serverQueue)
//         return interaction.reply({
//           content: "Well? There isn't any songs to skip!?",
//           ephemeral: true,
//         });
//       // Skip it!
//     } else if (commandName === "stop") {
//       if (!interaction.member.voice.channel)
//         return interaction.reply({
//           content: "You need to be in a achannel to execute this command!",
//           ephemeral: true,
//         });
//       const connection = getVoiceConnection(interaction.guildId);
//       if (!connection)
//         return interaction.reply({
//           content: "What music is there to stop?",
//           ephemeral: true,
//         });
//       player.stop();
//       connection.destroy();
//       serverQueue.songs = [];
//     } else return;
//   },
// };

// const soundPlayer = async (interaction, song) => {
//   const songQueue = queue.get(interaction.guildId);
//   const connection = getVoiceConnection(interaction.guildId);

//   if (!song) {
//     songQueue.voice_channel.leave();
//     queue.delete(interaction.guildId);
//     return;
//   }

//   const stream = ytdl(song.url, { filter: "audioonly" });

//   const player = createAudioPlayer({
//     behaviors: {
//       noSubscriber: NoSubscriberBehavior.Pause,
//     },
//   });
//   const reasource = createAudioResource(songQueue[0]);
//   reasource.volume?.setVolume(0.5);

//   player.play(reasource);
//   connection?.subscribe(player);

//   player.on(AudioPlayerStatus.Idle, () => {
//     songQueue.songs.shift();
//     soundPlayer(interaction, songQueue.songs[0]);
//   });

//   await interaction.reply({
//     content: `Now Playing **${song.title}**`,
//   });
// };
