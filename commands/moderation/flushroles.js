module.exports = {

    config: {
        name: "flushroles",
        description: "Supprime tous les rôles d'activité de tous les utilisateurs - sauf pour les modérateurs des activités et les modérateurs du serveur",
        usage: "",
        category: "moderation",
        accessableby: "Modérateur",
        aliases: ["flush", "reset", "resetroles", "flushrôles", "resetrôles"]
    },

    run: async (bot, message, args) => {

        message.delete();

        if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Vous ne pouvez pas utiliser cette commande!")

        const loupsGarous = message.guild.roles.cache.find(r => r.name == "Loups_garous");
        const revision = message.guild.roles.cache.find(r => r.name == "Révision");
        const sport = message.guild.roles.cache.find(r => r.name == "Sport");
        const cinema = message.guild.roles.cache.find(r => r.name == "Cinéma");
        const cycle = message.guild.roles.cache.find(r => r.name == "Cycle");
        const jdr = message.guild.roles.cache.find(r => r.name == "JDR");
        const codingDojo = message.guild.roles.cache.find(r => r.name == "Coding_Dojo");
        const graphisme = message.guild.roles.cache.find(r => r.name == "Graphisme");

        const modoJdr = message.guild.roles.cache.find(r => r.name == "Modérateur_JDR");
        const modoCodingDojo = message.guild.roles.cache.find(r => r.name == "Modérateur_Coding_Dojo");

        const moderateur = message.guild.roles.cache.find(r => r.name == "Modérateur");
        const administrateur = message.guild.roles.cache.find(r => r.name == "Administrateur");

        try {
          message.guild.members.cache.forEach((member, key) => {
              if (!member.user.bot && !member.roles.cache.has(moderateur.id) && !member.roles.cache.has(administrateur.id) && !member.roles.cache.has(modoJdr.id) && !member.roles.cache.has(modoCodingDojo.id)) {
                  member.roles.remove(loupsGarous);
                  member.roles.remove(revision);
                  member.roles.remove(sport);
                  member.roles.remove(cinema);
                  member.roles.remove(cycle);
                  member.roles.remove(jdr);
                  member.roles.remove(codingDojo);
                  member.roles.remove(graphisme);
                  console.log("flushed user : ", member.user.username);
              }
          });

          console.log("flush terminé\n");

        } catch (e) {
          console.log(e);
        }

    }
}
