const { MessageEmbed, Client } = require("discord.js");
const { yellow_j4arvis } = require("../../colours.json");

module.exports = async bot => {
  const channel_test = bot.channels.cache.get("700751796808843336")
    .send(":gear: le bot a redémarré !");
  
  console.log(`${bot.user.username} is online`);
  bot.user.setActivity("Sniping trollers", { type: "WATCHING" });
    
  try {
    
      const channel_change = bot.channels.cache.get("700683266373582878");
      
      let lastMessage = null;
    
      channel_change.messages.fetch({ limit: 1 }).then(messages => {
        lastMessage = messages.first();
      });

      channel_change.bulkDelete(lastMessage, true);
    
      channel_change.messages.fetch({ limit: 1 }).then(messages => {
        lastMessage = messages.first();
      });

      channel_change.bulkDelete(lastMessage, true);
      
      const guild = bot.guilds.cache.get("697723523472424970");
    
      const loupsGarous = guild.roles.cache.find(r => r.name == "Loups_garous");
      //const revision = guild.roles.cache.find(r => r.name == "Révision");
      const sport = guild.roles.cache.find(r => r.name == "Sport");
      const cinema = guild.roles.cache.find(r => r.name == "Cinéma");
      const cycle = guild.roles.cache.find(r => r.name == "Cycle");
      const jdr = guild.roles.cache.find(r => r.name == "JDR");
      const codingDojo = guild.roles.cache.find(r => r.name == "Coding_Dojo");
      const graphisme = guild.roles.cache.find(r => r.name == "Graphisme");
      const chillCast = guild.roles.cache.find(r => r.name == "ChillCast");
      const analyseVideo = guild.roles.cache.find(r => r.name == "Analyse_Vidéo");

      const loupsGarousEmoji = "🐺";
      //const revisionEmoji = "📖";
      const sportEmoji = "💪";
      const cinemaEmoji = "🎦";
      const cycleEmoji = "🃏";
      const jdrEmoji = "🐉";
      const codingDojoEmoji = "👨‍💻";
      const graphismeEmoji = "✏️";
      const chillCastEmoji = "<:CHILLCAST:707929193559883777>";
      const analyseVideoEmoji = "📼";

      const embed = new MessageEmbed().setTitle("Rôles");

      embed.setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant.\n\n**Merci de n'ajouter qu'une seule réaction !**\n\n*Si vous vous êtes trompé lors de votre choix veuillez enlever votre réaction initiale puis en ajouter une autre.*")
        .setColor(yellow_j4arvis)
        .setAuthor(`${guild.me.displayName}`, guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField(
          "Les rôles disponibles:",
          `
             ${loupsGarousEmoji} - ${loupsGarous}
             ${sportEmoji} - ${sport}
             ${cinemaEmoji} - ${cinema}
             ${cycleEmoji} - ${cycle}
             ${jdrEmoji} - ${jdr} **Limitée à 15 personnes**
             ${codingDojoEmoji} - ${codingDojo} **Limitée à 10 personnes**
             ${graphismeEmoji} - ${graphisme}
             ${chillCastEmoji} - ${chillCast}
             ${analyseVideoEmoji} - ${analyseVideo}
          `
        );

      // ${revisionEmoji} - ${revision}

      channel_change.send(embed).then(async msg => {
        await msg.react(loupsGarousEmoji);
        // await msg.react(revisionEmoji);
        await msg.react(sportEmoji);
        await msg.react(cinemaEmoji);
        await msg.react(cycleEmoji);
        await msg.react(jdrEmoji);
        await msg.react(codingDojoEmoji);
        await msg.react(graphismeEmoji);
        await msg.react(chillCastEmoji.substring(12, chillCastEmoji.length - 1));
        await msg.react(analyseVideoEmoji);
      });
    
      // channel_change.send("**MESSAGE DE LA SEMAINE CONCERNANT L'ACTIVITE JDR :** Nouveaux joueurs acceptés dès le 29 mai, à venir 1 campagne, 2 one shot !");
    } catch (e) {
      console.log(e);
    }
};
