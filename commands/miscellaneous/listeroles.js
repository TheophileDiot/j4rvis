const { MessageEmbed } = require("discord.js");
const { yellow_j4rvis } = require("../../colours.json");

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
      const carista_stream = message.guild.roles.cache.find(r => r.name === "CaritaStream");
      const business = message.guild.roles.cache.find(r => r.name === "Business");
      const cafe_philo = message.guild.roles.cache.find(r => r.name === "Café_Philo");
      const jeux_en_ligne = message.guild.roles.cache.find(r => r.name === "Jeux_en_ligne");
      const petanque = message.guild.roles.cache.find(r => r.name === "Pétanque");
      const diapo_expo = message.guild.roles.cache.find(r => r.name === "Diapo_expo");
      const shutdown = message.guild.roles.cache.find(r => r.name === "Shutdown");
      const world_building = message.guild.roles.cache.find(r => r.name === "world_building");
      const orny_photo = message.guild.roles.cache.find(r => r.name === "OrnyPhoto");
      const velo = message.guild.roles.cache.find(r => r.name === "Vélo");
      const sauvons_nos_toilettes = message.guild.roles.cache.find(r => r.name === "Sauvons_nos_toilettes");
      const art_school = message.guild.roles.cache.find(r => r.name === "ArtSchool");
      const magic = message.guild.roles.cache.find(r => r.name === "Magic");
      const poker = message.guild.roles.cache.find(r => r.name === "Poker");
      const lecture = message.guild.roles.cache.find(r => r.name === "Lecture");

      const jdrEmoji = "🐉";
      const club_techEmoji = "🧑‍💻";
      const esportEmoji = "🎮";
      const final_club_proEmoji = "<:montage_video:760882711823908926>";
      const carista_streamEmoji = "📹";
      const businessEmoji = "💼";
      const cafe_philoEmoji = "💭";
      const jeux_en_ligneEmoji = "🎲";
      const petanqueEmoji = "🏐";
      const diapo_expoEmoji = "<:Powerpoint:760883523212017707>";
      const shutdownEmoji = "👾";
      const world_buildingEmoji = "🌍";
      const orny_photoEmoji = "🖼";
      const veloEmoji = "🚴‍♂️";
      const sauvons_nos_toilettesEmoji = "🚽";
      const art_schoolEmoji = "🎨";
      const magicEmoji = "🪄";
      const pokeremoji = "🃏";
      const lectureEmoji = "📖";

      const embed = new MessageEmbed().setTitle("Activités");

      if (message.channel === channel_change.id) {
        embed.setDescription(
          "Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant.\n\n**Merci de n'ajouter qu'une seule réaction !**\n\n*Si vous vous êtes trompé lors de votre choix veuillez enlever votre réaction initiale puis en ajouter une autre.*"
        );
      } else {
        embed.setDescription("Liste des activités présents sur le serveur.");
      }

      embed
        .setColor(yellow_j4rvis)
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
             ${carista_streamEmoji} - ${carista_stream}
             ${businessEmoji} - ${business}
             ${cafe_philoEmoji} - ${cafe_philo}
             ${jeux_en_ligneEmoji} - ${jeux_en_ligne}
             ${petanqueEmoji} - ${petanque}
             ${diapo_expoEmoji} - ${diapo_expo}
             ${shutdownEmoji} - ${shutdown} **Activité supprimée**
             ${world_buildingEmoji} - ${world_building}
             ${orny_photoEmoji} - ${orny_photo}
             ${veloEmoji} - ${velo}
             ${sauvons_nos_toilettesEmoji} - ${sauvons_nos_toilettes}
             ${art_schoolEmoji} - ${art_school}
             ${magicEmoji} - ${magic} **Nouvelle activité**
             ${pokeremoji} - ${poker} **Nouvelle activité**
             ${lectureEmoji} - ${lecture} **Nouvelle activité**
          `
        )
        .setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

      message.channel.send(embed).then(async msg => {
        if (message.channel === channel_change.id) {
          await msg.react(jdrEmoji);
          await msg.react(club_techEmoji);
          await msg.react(esportEmoji);
          await msg.react(final_club_proEmoji.substring(16, final_club_proEmoji.length - 1));
          await msg.react(carista_streamEmoji);
          await msg.react(businessEmoji);
          await msg.react(cafe_philoEmoji);
          await msg.react(jeux_en_ligneEmoji);
          await msg.react(petanqueEmoji);
          await msg.react(diapo_expoEmoji.substring(13, diapo_expoEmoji.length - 1));
          await msg.react(world_buildingEmoji);
          await msg.react(orny_photoEmoji);
          await msg.react(veloEmoji);
          await msg.react(sauvons_nos_toilettesEmoji);
          await msg.react(art_schoolEmoji);
          await msg.react(magicEmoji);
          await msg.react(pokeremoji);
          await msg.react(lectureEmoji);
        }
      });
      
    } catch (e) {
      console.log(e);
    } finally {
      message.delete();
    }
  }
};
