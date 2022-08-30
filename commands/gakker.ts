import {
  joinVoiceChannel,
  VoiceConnectionStatus,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
  getVoiceConnection,
} from "@discordjs/voice";
import pathToFfmpeg = require("ffmpeg-static");
import { join } from "path";

module.exports = {
  name: "gakker",
  aliases: ["leave"],
  permissions: ["CONNECT", "SPEAK"],
  cooldown: 5,
  description: "Plays the Gakkers!",
  execute(client, interaction) {
    const { member, commandName } = interaction;

    if (!member.voice.channel)
      return interaction.reply({
        content: "Get in the vc before running /gakker!",
        ephemeral: true,
      });

    const player = createAudioPlayer();

    if (commandName === "gakker") {
      interaction.reply({
        content: "Woohoo!",
      });

      let resource: any = createAudioResource(
        join(__dirname, "../assets/snd/penguin.mp3")
      );
      resource.volume?.setVolume(0.4);

      const connection = joinVoiceChannel({
        channelId: member.voice.channelId,
        guildId: member.voice.channel.guildId,
        adapterCreator: member.voice.channel.guild.voiceAdapterCreator,
      });

      connection.on(VoiceConnectionStatus.Ready, () => {
        connection.subscribe(player);
        player.play(resource);
      });

      player.on(AudioPlayerStatus.Idle, () => {
        resource = null;
        resource = createAudioResource(
          join(__dirname, "../assets/snd/penguin.mp3")
        );
        resource.volume?.setVolume(0.5);
        player.play(resource);
      });
    }

    if (commandName === "leave") {
      const connection = getVoiceConnection(member.voice.channel.guildId);
      if (connection) {
        player.stop();
        connection.destroy();
        return interaction.reply({ content: "Done!" });
      } else {
        return interaction.reply({
          content:
            "Are you sure there is a voice channel to leave in the first place? (This command only works for the penguin gakkers, if you are using music please use /stop.",
          ephemeral: true,
        });
      }
    }
  },
};
