module.exports = {
  config: {
    name: "reverseaway",
    description:"Tous les utilisateurs ayant le rôle Absent obtiendront le rôle En_attente_de_rôle",
    usage: "",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["rawy"]
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
        if (!member.user.bot && !member.roles.cache.has(absent.id)) {
          
          member.roles.remove(absent)

          member.roles.add(enAttenteDeRole);
        }
      });

      message.delete();
      
    } catch (e) {
      console.log(e);
    }
  }
};
