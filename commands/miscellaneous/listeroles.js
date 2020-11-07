const { MessageEmbed } = require("discord.js");
const { green_j4rvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "listeroles",
    description: "Affiche tous les Activités du serveur avec des reactions",
    usage: "(change dans le salon #changement-activité)",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: [
      "lr",
      "listesroles",
      "listerôles",
      "listroles",
      "listrôles",
      "liste-rôles",
      "list-roles",
      "liste-roles",
      "list-rôles"
    ]
  },

  run: async (bot, message) => {
    try {
      const channel_change = message.guild.channels.cache.get("700683266373582878");

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
      const bde = message.guild.roles.cache.find(r => r.name === "BDE");

      const jdrEmoji = "🐉";
      const club_techEmoji = "🧑‍💻";
      const esportEmoji = "🎮";
      const final_club_proEmoji = "<:montage_video:760882711823908926>";
      const businessEmoji = "💼";
      const cafe_philoEmoji = "💭";
      const jeux_de_societe_en_ligneEmoji = "🎲";
      const diapo_expoEmoji = "<:Powerpoint:760883523212017707>";
      const world_buildingEmoji = "🌍";
      const veloEmoji = "🚴‍♂️";
      const magicEmoji = "🪄";
      const pokeremoji = "🃏";
      const lectureEmoji = "📖";
      const cine_clubEmoji = "🎦";
      const journal_intechEmoji = "📰";
      const batisseurEmoji = "🔨";
      const bdeEmoji = "<:intech:764417273771196436>"

      const embed = new MessageEmbed().setTitle("Activités");

      if (message.channel === channel_change.id) {
        embed.setDescription(
          "Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant.\n\n**Merci de n'ajouter qu'une seule réaction !**\n\n*Si vous vous êtes trompé lors de votre choix veuillez enlever votre réaction initiale puis en ajouter une autre.*"
        );
      } else {
        embed.setDescription("Liste des activités présents sur le serveur.");
      }

      embed
        .setColor(green_j4rvis)
        .attachFiles(['./Photos/Logo_j4rvis.png'])
        .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
        .setAuthor(`${message.guild.me.displayName}`, 'attachment://Logo_INTECH_Activites_a_la_carte.png')
        .setThumbnail('attachment://Logo_j4rvis.png')
        .addField(
          "Les activités disponibles:",
          `
             ${jdrEmoji} - ${jdr}
             ${club_techEmoji} - ${club_tech}
             ${esportEmoji} - ${esport}
             ${final_club_proEmoji} - ${final_club_pro}
             ${businessEmoji} - ${business}
             ${cafe_philoEmoji} - ${cafe_philo}
             ${jeux_de_societe_en_ligneEmoji} - ${jeux_de_societe_en_ligne}
             ${diapo_expoEmoji} - ${diapo_expo}
             ${world_buildingEmoji} - ${world_building}
             ${veloEmoji} - ${velo}
             ${magicEmoji} - ${magic}
             ${pokeremoji} - ${poker}
             ${lectureEmoji} - ${lecture}
             ${cine_clubEmoji} - ${cine_club}
             ${journal_intechEmoji} - ${journal_intech}
             ${batisseurEmoji} - ${batisseur}
             ${bdeEmoji} - ${bde}
          `
        )
        .setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

      message.channel.send(embed).then(async msg => {
        if (message.channel === channel_change.id) {
          await msg.react(jdrEmoji);
          await msg.react(club_techEmoji);
          await msg.react(esportEmoji);
          await msg.react(final_club_proEmoji.substring(16, final_club_proEmoji.length - 1));
          await msg.react(businessEmoji);
          await msg.react(cafe_philoEmoji);
          await msg.react(jeux_de_societe_en_ligneEmoji);
          await msg.react(diapo_expoEmoji.substring(13, diapo_expoEmoji.length - 1));
          await msg.react(world_buildingEmoji);
          await msg.react(veloEmoji);
          await msg.react(magicEmoji);
          await msg.react(pokeremoji);
          await msg.react(lectureEmoji);
          await msg.react(cine_clubEmoji);
          await msg.react(journal_intechEmoji);
          await msg.react(batisseurEmoji);
          await msg.react(bdeEmoji.substring(9, bdeEmoji.length - 1));
        }
      });
      
    } catch (e) {
      console.log(e);
    } finally {
      message.delete();
    }
  }
};
