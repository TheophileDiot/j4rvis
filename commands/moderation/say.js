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
    
    const moderateur = message.guild.roles.cache.find(r => r.name === "Modérateur");
    
    if (!message.member.hasPermission(["ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    let argsresult;
    let mChannel = message.mentions.channels.first();

    message.delete();
    if (mChannel) {
      argsresult = args.slice(1).join(" ");
      await mChannel.send(argsresult);
    } else {
      argsresult = args.join(" ");
      message.channel.send(argsresult);
    }
  }
};
