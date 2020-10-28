module.exports = {
  config: {
    name: "away",
    description:"Tous les utilisateurs ayant le rôle En_attente_de_rôle obtiendront le rôle Absent",
    usage: "",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["awy"]
  },

  run: async (bot, message) => {

    dev = message.guild.members.cache.get("559057271737548810");

    message.channel.send(`Cette commande n'est pas encore entièrement configurée veuillez contacter ${dev.nickname} pour plus d'informations`)

    // const moderateur = message.guild.roles.cache.find(r => r.name === "Modérateur");
    //
    // if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
    //   return message.channel.send(
    //     "Vous ne pouvez pas utiliser cette commande!"
    //   );
    //
    // const absent = message.guild.roles.cache.find(r => r.name === "Absent");
    // const enAttenteDeRole = message.guild.roles.cache.find(r => r.name === "En_attente_de_rôle");
    //
    // try {
    //
    //   try {
    //     const channel_change = bot.channels.cache.get("700683266373582878");
    //
    //     let lastMessage = null;
    //
    //     channel_change.messages.fetch({ limit: 1 }).then(messages => {
    //       lastMessage = messages.first();
    //     });
    //
    //     await channel_change.bulkDelete(lastMessage, true);
    //   } catch (e) {
    //     console.log(e);
    //   }
    //
    //   let nbr = 1;
    //
    //   const channel_away = message.guild.channels.cache.get("702963106090975337");
    //
    //   let content = "**LISTE DES ABSENTS : ** \n\n";
    //
    //   message.guild.members.cache.forEach((member) => {
    //     if (!member.user.bot && member.roles.cache.has(enAttenteDeRole.id)) {
    //
    //       member.roles.remove(enAttenteDeRole)
    //
    //       member.roles.add(absent);
    //
    //       if(member.nickname != null){
    //         content = content.concat(member.nickname, "\n");
    //       } else {
    //         content = content.concat("**Non respect des règles de nommage** : ".concat(member.user.username), "\n");
    //       }
    //
    //       nbr++;
    //
    //     }
    //   });
    //
    //   channel_away.send(content);
    //   message.delete();
    //
    // } catch (e) {
    //   console.log(e);
    // }
  }
};
