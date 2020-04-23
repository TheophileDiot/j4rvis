module.exports = {
  config: {
    name: "say",
    description: "Envoie un message sur un channel spécifié.",
    usage: "(#channel) (message)",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["acc", "announcement"]
  },

  run: async (bot, message, args) => {
    
    if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    let argsresult;
    let mChannel = message.mentions.channels.first();

    message.delete();
    if (mChannel) {
      argsresult = args.slice(1).join(" ");
      mChannel.send(argsresult);
    } else {
      argsresult = args.join(" ");
      message.channel.send(argsresult);
    }
  }
};
