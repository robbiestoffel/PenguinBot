module.exports = {
  name: "guildMemberAdd",
  once: false,
  execute(client, member) {
    member.roles.add(
      //member.guild.roles.cache.find((role) => role.name === "*"),
      //member.guild.roles.cache.find((role) => role.name === "i am penguin"),
      //member.guild.roles.cache.find((role) => role.name === "🐧")
      member.guild.roles.cache.find((role) => role.name === "test"),
      member.guild.roles.cache.find((role) => role.name === "Code Contributer")
    );
  },
};
