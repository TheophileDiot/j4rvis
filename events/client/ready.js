const { MessageEmbed } = require("discord.js");
const { yellow_j4rvis } = require("../../colours.json");

module.exports = async bot => {
  bot.channels.cache.get("761145607846101003").send(":gear: le bot a redémarré !");
  
  console.log(`${bot.user.username} is online`);
  await bot.user.setActivity("Sniping trollers", {type: "WATCHING"});
    
  try {
    
      const channel_change = bot.channels.cache.get("700683266373582878");

      channel_change.messages.fetch({ limit: 10 }).then(messages => {
          if(messages !== null){
              channel_change.bulkDelete(messages, true);
          }
      });
      
      const guild = bot.guilds.cache.get("697723523472424970");
    
      const jdr = guild.roles.cache.find(r => r.name === "JDR");
      const club_tech = guild.roles.cache.find(r => r.name === "Club_Tech");
      const esport = guild.roles.cache.find(r => r.name === "Esport");
      const final_club_pro = guild.roles.cache.find(r => r.name === "Final_Club_Pro");
      const business = guild.roles.cache.find(r => r.name === "Business");
      const cafe_philo = guild.roles.cache.find(r => r.name === "Café_Philo");
      const jeux_de_societe_en_ligne = guild.roles.cache.find(r => r.name === "Jeux_de_société_en_ligne");
      const organisation_tournois_sportif = guild.roles.cache.find(r => r.name === "Organisation_tournois_sportif");
      const diapo_expo = guild.roles.cache.find(r => r.name === "Diapo_expo");
      const world_building = guild.roles.cache.find(r => r.name === "world_building");
      const velo = guild.roles.cache.find(r => r.name === "Vélo");
      const magic = guild.roles.cache.find(r => r.name === "Magic");
      const poker = guild.roles.cache.find(r => r.name === "Poker");
      const lecture = guild.roles.cache.find(r => r.name === "Lecture");
      const cine_club = guild.roles.cache.find(r => r.name === "Ciné_club");
      const journal_intech = guild.roles.cache.find(r => r.name === "Journal_d'intech");

      const jdrEmoji = "🐉";
      const club_techEmoji = "🧑‍💻";
      const esportEmoji = "🎮";
      const final_club_proEmoji = "<:montage_video:760882711823908926>";
      const businessEmoji = "💼";
      const cafe_philoEmoji = "💭";
      const jeux_de_societe_en_ligneEmoji = "🎲";
      const organisation_tournois_sportifEmoji = "🏐";
      const diapo_expoEmoji = "<:Powerpoint:760883523212017707>";
      const world_buildingEmoji = "🌍";
      const veloEmoji = "🚴‍♂️";
      const magicEmoji = "🪄";
      const pokeremoji = "🃏";
      const lectureEmoji = "📖";
      const cine_clubEmoji = "🎦";
      const journal_intechEmoji = "📰";

      const embed = new MessageEmbed().setTitle("Rôles");

      embed.setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant.")
        .setColor(yellow_j4rvis)
        .attachFiles(['./Photos/Logo_j4rvis.png'])
        .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
        .setAuthor(`${channel_change.guild.name}`, 'attachment://Logo_INTECH_Activites_a_la_carte.png')
        .setThumbnail('attachment://Logo_j4rvis.png')
        .addField(
          "Les rôles disponibles:",
          `
             ${jdrEmoji} - ${jdr}
             ${club_techEmoji} - ${club_tech}
             ${esportEmoji} - ${esport}
             ${final_club_proEmoji} - ${final_club_pro}
             ${businessEmoji} - ${business}
             ${cafe_philoEmoji} - ${cafe_philo}
             ${jeux_de_societe_en_ligneEmoji} - ${jeux_de_societe_en_ligne}
             ${organisation_tournois_sportifEmoji} - ${organisation_tournois_sportif}
             ${diapo_expoEmoji} - ${diapo_expo}
             ${world_buildingEmoji} - ${world_building}
             ${veloEmoji} - ${velo}
             ${magicEmoji} - ${magic} **Nouvelle activité**
             ${pokeremoji} - ${poker} **Nouvelle activité**
             ${lectureEmoji} - ${lecture} **Nouvelle activité**
             ${cine_clubEmoji} - ${cine_club} **Nouvelle activité**
             ${journal_intechEmoji} - ${journal_intech} **Nouvelle activité**
          `
        )
        .setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

      channel_change.send(embed).then(async msg => {
        await msg.react(jdrEmoji);
        await msg.react(club_techEmoji);
        await msg.react(esportEmoji);
        await msg.react(final_club_proEmoji.substring(16, final_club_proEmoji.length - 1));
        await msg.react(businessEmoji);
        await msg.react(cafe_philoEmoji);
        await msg.react(jeux_de_societe_en_ligneEmoji);
        await msg.react(organisation_tournois_sportifEmoji);
        await msg.react(diapo_expoEmoji.substring(13, diapo_expoEmoji.length - 1));
        await msg.react(world_buildingEmoji);
        await msg.react(veloEmoji);
        await msg.react(magicEmoji);
        await msg.react(pokeremoji);
        await msg.react(lectureEmoji);
        await msg.react(cine_clubEmoji);
        await msg.react(journal_intechEmoji);
      });
    
      // channel_change.send(`**MESSAGE DE LA SEMAINE CONCERNANT L'ACTIVITE JDR :** \n En cours : \n- 1 campagne (7 joueurs, dernière séance, pas de nouveaux acceptés)`);
    } catch (e) {
      console.log(e);
    }
};
