const { MessageEmbed } = require("discord.js");
const { green_j4rvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "usersactivity",
    description: "Récupère le nombre de personnes par activités",
    usage: "(@rôle)",
    category: "miscellaneous",
    accessableby: "Modérateurs d'activité",
    aliases: ["ua", "useractivity"]
  },
  
  run: async (bot, message, args) => {
    
    try {
      
      const role = message.mentions.roles.last();

      const bde = message.guild.roles.cache.find(r => r.name === "BDE");
      const jdr = message.guild.roles.cache.find(r => r.name === "JDR");
      const club_tech = message.guild.roles.cache.find(r => r.name === "Club_Tech");
      const esport = message.guild.roles.cache.find(r => r.name === "Esport");
      const final_club_pro = message.guild.roles.cache.find(r => r.name === "Final_Club_Pro");
      const business = message.guild.roles.cache.find(r => r.name === "Business");
      const cafe_philo = message.guild.roles.cache.find(r => r.name === "Café_Philo");
      const jeux_de_societe_en_ligne = message.guild.roles.cache.find(r => r.name === "Jeux_de_société_en_ligne");
      const diapo_expo = message.guild.roles.cache.find(r => r.name === "Diapo_expo");
      const world_building = message.guild.roles.cache.find(r => r.name === "world_building");
      const velo = message.guild.roles.cache.find(r => r.name === "Vélo");
      const magic = message.guild.roles.cache.find(r => r.name === "Magic");
      const poker = message.guild.roles.cache.find(r => r.name === "Poker");
      const lecture = message.guild.roles.cache.find(r => r.name === "Lecture");
      const cine_club = message.guild.roles.cache.find(r => r.name === "Ciné_club");
      const journal_intech = message.guild.roles.cache.find(r => r.name === "Journal_d'intech");
      const batisseur = message.guild.roles.cache.find(r => r.name === "Batisseur");
      
      const enAttenteDeRole = message.guild.roles.cache.find(r => r.name === "En_attente_de_rôle");
      
      if(role == null){
        let sEmbed = new MessageEmbed()
          .setColor(green_j4rvis)
          .setTitle("Infos Activités")
          .attachFiles(['./Photos/Logo_j4rvis.png'])
          .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
          .setThumbnail('attachment://Logo_INTECH_Activites_a_la_carte.png')
          .setAuthor(`${message.guild.name} Info activités`, 'attachment://Logo_INTECH_Activites_a_la_carte.png')
          .addField("**BDE**", `${bde.members.size} personnes`, true)
          .addField("**JDR**", `${jdr.members.size} personnes`, true)
          .addField("**CLUB TECH**", `${club_tech.members.size} personnes`, true)
          .addField("**ESPORT**", `${esport.members.size} personnes`, true)
          .addField("**FINAL CLUB PRO**", `${final_club_pro.members.size} personnes`, true)
          .addField("**BUSINESS**", `${business.members.size} personnes`, true)
          .addField("**CAFE PHILO**", `${cafe_philo.members.size} personnes`, true)
          .addField("**JEUX DE SOCIETE EN LIGNE**", `${jeux_de_societe_en_ligne.members.size} personnes`, true)
          .addField("**DIAPO EXPO**", `${diapo_expo.members.size} personnes`, true)
          .addField("**WORLD BUILDING**", `${world_building.members.size} personnes`, true)
          .addField("**VELO**", `${velo.members.size} personnes`, true)
          .addField("**MAGIC**", `${magic.members.size} personnes`, true)
          .addField("**POKER**", `${poker.members.size} personnes`, true)
          .addField("**LECTURE**", `${lecture.members.size} personnes`, true)
          .addField("**CINÉ CLUB**", `${cine_club.members.size} personnes`, true)
          .addField("**JOURNAL INTECH**", `${journal_intech.members.size} personnes`, true)
          .addField("**BATISSEUR**", `${batisseur.members.size} personnes`, true)
          .addField("**En attente de rôle**", `${enAttenteDeRole.members.size} personnes`, true)
          .setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

        await message.channel.send({embed: sEmbed});
      } else {
        let sEmbed = new MessageEmbed()
          .setColor(role.color)
          .setTitle(`Infos Activité ${role.name.toUpperCase()}`)
          .attachFiles(['./Photos/Logo_j4rvis.png'])
          .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
          .setThumbnail('attachment://Logo_INTECH_Activites_a_la_carte.png')
          .setAuthor(`${message.guild.name} Info activités`, 'attachment://Logo_INTECH_Activites_a_la_carte.png')
          .addField(`**NOM**`, role.name, true)
          .addField(`**NOMBRE DE MEMBRE**`, `${role.members.size} personnes`, true)
          .addField(`**COULEUR**`, `#${role.color}`, true)
          .addField(`**LISTE DES MEMBRES**`, message.guild.roles.cache.get(role.id).members.map(m=>m.displayName.substring(5)).join(', '), true)
          .setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

        await message.channel.send({embed: sEmbed});
      }

      message.delete();
      
    } catch(e) {
      console.log(e);
    }
    
  }
};
