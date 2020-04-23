module.exports = {
  config: {
    name: "away",
    description:"Tous les utilisateurs ayant le rôle En_attente_de_rôle obtiendront le rôle Absent",
    usage: "",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["awy"]
  },

  run: async (bot, message, args) => {
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    const absent = message.guild.roles.cache.find(r => r.name == "Absents");
    const enAttenteDeRole = message.guild.roles.cache.find(r => r.name == "En_attente_de_rôle");

    try {
      message.guild.members.cache.forEach((member, key) => {
        if (!member.user.bot && !member.roles.cache.has(enAttenteDeRole.id)) {
          
          member.roles.remove(enAttenteDeRole)

          member.roles.add(absent);
        }
      });

      message.delete();
      
    } catch (e) {
      console.log(e);
    }
  }
};
