const { MessageEmbed } = require("discord.js");
const { yellow_j4rvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "usersactivity",
    description: "Récupère le nombre de personnes par activités",
    usage: "",
    category: "miscellaneous",
    accessableby: "Modérateurs d'activité",
    aliases: ["ua", "useractivity"]
  },
  
  run: async (bot, message, args) => {
    
    const modoLoupsGarous = message.guild.roles.cache.find(r => r.name == "Modérateur_Loups_garous");
    const modoSport = message.guild.roles.cache.find(r => r.name == "Modérateur_Sport");
    const modoCinema = message.guild.roles.cache.find(r => r.name == "Modérateur_Cinéma");
    const modoCycle = message.guild.roles.cache.find(r => r.name == "Modérateur_Cycle");
    const modoJdr = message.guild.roles.cache.find(r => r.name == "Modérateur_JDR");
    const modoCodingDojo = message.guild.roles.cache.find(r => r.name == "Modérateur_Coding_Dojo");
    const modoGraphisme = message.guild.roles.cache.find(r => r.name == "Modérateur_Graphisme");
    const modoChillCast = message.guild.roles.cache.find(r => r.name == "Modérateur_ChillCast");
    const modoAnalyseVideo = message.guild.roles.cache.find(r => r.name == "Modérateur_Analyse_Vidéo");

    const moderateur = message.guild.roles.cache.find(r => r.name == "Modérateur");
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id)){
      
      if(!message.member.roles.cache.has(modoLoupsGarous.id) && 
      !message.member.roles.cache.has(modoSport.id) && 
      !message.member.roles.cache.has(modoCinema.id) &&
      !message.member.roles.cache.has(modoCycle.id) &&
      !message.member.roles.cache.has(modoJdr.id) &&
      !message.member.roles.cache.has(modoCodingDojo.id) &&
      !message.member.roles.cache.has(modoGraphisme.id) &&
      !message.member.roles.cache.has(modoChillCast.id) &&
      !message.member.roles.cache.has(modoAnalyseVideo.id)){
        return message.channel.send("Vous ne pouvez pas utiliser cette commande car vous n'êtes pas modérateur d'une activité!");
      }
    }
    
    try {
      
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
      const risk = message.guild.roles.cache.find(r => r.name == "Risk");
      
      const enAttenteDeRole = message.guild.roles.cache.find(r => r.name == "En_attente_de_rôle");
      const absent = message.guild.roles.cache.find(r => r.name == "Absent");
      
      let sEmbed = new MessageEmbed()
        .setColor(yellow_j4rvis)
        .setTitle("Infos Activités")
        .attachFiles(['./Photos/Logo_j4rvis.png'])
        .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
        .setThumbnail('attachment://Logo_INTECH_Activites_a_la_carte.png')
        .setAuthor(`${message.guild.name} Info activités`, 'attachment://Logo_INTECH_Activites_a_la_carte.png')
        .addField("**Loups-Garous :**", `${loupsGarous.members.size} personnes`, true)
        .addField("**Sport :**", `${sport.members.size} personnes`, true)
        .addField("**Cinéma :**", `${cinema.members.size} personnes`, true)
        .addField("**Cycle :**",`${cycle.members.size} personnes`,true)
        .addField("**JDR :**", `${jdr.members.size} personnes`, true)
        .addField("**Coding Dojo :**", `${codingDojo.members.size} personnes`, true)
        .addField("**Graphisme :**", `${graphisme.members.size} personnes`, true)
        .addField("**ChillCast :**", `${chillCast.members.size} personnes`, true)
        .addField("**Analyse_Vidéo :**", `${analyseVideo.members.size} personnes`, true)
        .addField("**Risk :**", `${risk.members.size} personnes`, true)
        .addField("**En attente de rôle**", `${enAttenteDeRole.members.size} personnes`, true)
        .addField("**Absents :**", `${absent.members.size} personnes`, true)
        .setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

      message.channel.send({ embed: sEmbed });
      message.delete();
      
    } catch(e) {
      console.log(e);
    }
    
  }
};
