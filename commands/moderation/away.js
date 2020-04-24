const { MessageEmbed } = require("discord.js");
const { yellow_j4arvis } = require("../../colours.json");

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

    const absent = message.guild.roles.cache.find(r => r.name == "Absent");
    const enAttenteDeRole = message.guild.roles.cache.find(r => r.name == "En_attente_de_rôle");

    try {
      
      var nbr = 1;
      
      const channel = message.guild.channels.cache.get("702963106090975337");
      
      var content = "**LISTE DES ABSENTS : ** \n\n";
      
      message.guild.members.cache.forEach((member, key) => {
        if (!member.user.bot && member.roles.cache.has(enAttenteDeRole.id)) {
          
          member.roles.remove(enAttenteDeRole)

          member.roles.add(absent);
          
          if(member.nickname != null){
            content = content.concat(member.nickname, "\n");
          } else {
            content = content.concat("**Non respect des règles de nommage** : ".concat(member.user.username), "\n");
          }
          
          nbr++;
          
        }
      });

      channel.send(content);
      message.delete();
      
    } catch (e) {
      console.log(e);
    }
  }
};
