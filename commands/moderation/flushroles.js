module.exports = {
  config: {
    name: "flushroles",
    description:
      "Supprime tous les rôles d'activité de tous les utilisateurs - sauf pour les modérateurs des activités et les modérateurs du serveur",
    usage: "",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["flush", "reset", "resetroles", "flushrôles", "resetrôles"]
  },

  run: async (bot, message, args) => {

    const moderateur = message.guild.roles.cache.find(r => r.name == "Modérateur");
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    const enAttenteDeRole = message.guild.roles.cache.find(r => r.name == "En_attente_de_rôle");
    const absent = message.guild.roles.cache.find(r => r.name == "Absent");
    
    const ressource = message.guild.roles.cache.find(r => r.name == "Ressource");
    
    const loupsGarous = message.guild.roles.cache.find(r => r.name == "Loups_garous");
    //const revision = message.guild.roles.cache.find(r => r.name == "Révision");
    const sport = message.guild.roles.cache.find(r => r.name == "Sport");
    const cinema = message.guild.roles.cache.find(r => r.name == "Cinéma");
    const cycle = message.guild.roles.cache.find(r => r.name == "Cycle");
    const jdr = message.guild.roles.cache.find(r => r.name == "JDR");
    const codingDojo = message.guild.roles.cache.find(r => r.name == "Coding_Dojo");
    const graphisme = message.guild.roles.cache.find(r => r.name == "Graphisme");
    const chillCast = message.guild.roles.cache.find(r => r.name == "ChillCast");
    const analyseVideo = message.guild.roles.cache.find(r => r.name == "Analyse_Vidéo");

    const modoLoupsGarous = message.guild.roles.cache.find(r => r.name == "Modérateur_Loups_garous");
    const modoSport = message.guild.roles.cache.find(r => r.name == "Modérateur_Sport");
    const modoCinema = message.guild.roles.cache.find(r => r.name == "Modérateur_Cinéma");
    const modoCycle = message.guild.roles.cache.find(r => r.name == "Modérateur_Cycle");
    const modoJdr = message.guild.roles.cache.find(r => r.name == "Modérateur_JDR");
    const modoCodingDojo = message.guild.roles.cache.find(r => r.name == "Modérateur_Coding_Dojo");
    const modoGraphisme = message.guild.roles.cache.find(r => r.name == "Modérateur_Graphisme");
    const modoChillCast = message.guild.roles.cache.find(r => r.name == "Modérateur_ChillCast");
    const modoAnalyseVideo = message.guild.roles.cache.find(r => r.name == "Modérateur_Analyse_Vidéo");

    const administrateur = message.guild.roles.cache.find(r => r.name == "Administrateur");

    try {
      message.guild.members.cache.forEach((member, key) => {
        if (
          !member.user.bot &&
          !member.roles.cache.has(moderateur.id) &&
          !member.roles.cache.has(administrateur.id) &&
          !member.roles.cache.has(ressource.id) &&
          !member.roles.cache.has(modoLoupsGarous.id) &&
          !member.roles.cache.has(modoSport.id) &&
          !member.roles.cache.has(modoCinema.id) &&
          !member.roles.cache.has(modoCycle.id) &&
          !member.roles.cache.has(modoJdr.id) &&
          !member.roles.cache.has(modoCodingDojo.id) &&
          !member.roles.cache.has(modoGraphisme.id) &&
          !member.roles.cache.has(modoChillCast.id) &&
          !member.roles.cache.has(modoAnalyseVideo.id)
        ) {
          if (member.roles.cache.has(loupsGarous.id)) {
            member.roles.remove(loupsGarous);
          }
          
          /*if (member.roles.cache.has(revision.id)) {
            member.roles.remove(revision);
          }*/
          
          if (member.roles.cache.has(sport.id)) {
            member.roles.remove(sport);
          }

          if (member.roles.cache.has(cinema.id)) {
            member.roles.remove(cinema);
          }

          if (member.roles.cache.has(cycle.id)) {
            member.roles.remove(cycle);
          }

          if (member.roles.cache.has(jdr.id)) {
            member.roles.remove(jdr);
          }

          if (member.roles.cache.has(codingDojo.id)) {
            member.roles.remove(codingDojo);
          }

          if (member.roles.cache.has(graphisme.id)) {
            member.roles.remove(graphisme);
          }
          
          if (member.roles.cache.has(chillCast.id)) {
            member.roles.remove(chillCast);
          }
          
          if (member.roles.cache.has(analyseVideo.id)) {
            member.roles.remove(analyseVideo);
          }

          if (member.roles.cache.has(absent.id)) {
            member.roles.remove(absent);
          }
          
          member.roles.add(enAttenteDeRole);
        }
      });

      message.delete();
      
    } catch (e) {
      console.log(e);
    }
  }
};
