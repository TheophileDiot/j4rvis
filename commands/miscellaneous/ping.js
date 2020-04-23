module.exports = {
  config: {
    name: "ping",
    description: "Vérifie la latence du bot!",
    usage: "",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["pi"]
  },

  run: async (bot, message, args) => {
    message.channel.send("Pinging...").then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp;
      let choices = [
        "C'est vraiment mon ping ?!",
        "Il est bon ou pas ? Je peux pas voir",
        "J'espère que c'est bon !"
      ];
      let response = choices[Math.floor(Math.random() * choices.length)];

      m.edit(`${response}: Bot Latency: \`${ping}\``);
    });
  }
};
