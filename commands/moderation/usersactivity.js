const { MessageEmbed } = require("discord.js");
const { yellow_j4arvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "usersactivity",
    description: "Récupère le nombre de personnes par activités",
    usage: "",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["ua", "useractivity"]
  },
  
  run: async (bot, message, args) => {
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );
    
    try {
      
      const loupsGarous = message.guild.roles.cache.find(r => r.name == "Loups_garous");
      //const revision = message.guild.roles.cache.find(r => r.name == "Révision");
      const sport = message.guild.roles.cache.find(r => r.name == "Sport");
      const cinema = message.guild.roles.cache.find(r => r.name == "Cinéma");
      const cycle = message.guild.roles.cache.find(r => r.name == "Cycle");
      const jdr = message.guild.roles.cache.find(r => r.name == "JDR");
      const codingDojo = message.guild.roles.cache.find(r => r.name == "Coding_Dojo");
      const graphisme = message.guild.roles.cache.find(r => r.name == "Graphisme");
      
      const absent = message.guild.roles.cache.find(r => r.name == "Absent");
      
      let sEmbed = new MessageEmbed()
        .setColor(yellow_j4arvis)
        .setTitle("Infos Activités")
        .setThumbnail("https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
        .setAuthor(`${message.guild.name} Info activités`, "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
        .addField("**Loups-Garous :**", `${loupsGarous.members.size} personnes`, true)
        .addField("**Sport :**", `${sport.members.size} personnes`, true)
        .addField("**Cinéma :**", `${cinema.members.size} personnes`, true)
        .addField("**Cycle :**",`${cycle.members.size} personnes`,true)
        .addField("**JDR :**", `${jdr.members.size} personnes`, true)
        .addField("**Coding Dojo :**", `${codingDojo.members.size} personnes`, true)
        .addField("**Graphisme :**", `${graphisme.members.size} personnes`, true)
        .addField("**Absents :**", `${absent.members.size} personnes`, true)
        .setFooter("J4RVIS", "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2Flogo.png?v=1587550143347");

      message.channel.send({ embed: sEmbed });
      message.delete();
      
    } catch(e) {
      console.log(e);
    }
    
  }
};
