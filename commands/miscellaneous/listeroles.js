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

  run: async (bot, message, args) => {
    try {
      const channel_change = message.guild.channels.cache.get("700683266373582878");
      /*const channel_test = message.guild.channels.cache.get(
        "700751796808843336"
      );*/

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

      const embed = new MessageEmbed().setTitle("Activités");

      if (message.channel == channel_change.id /*|| message.channel == channel_test.id*/) {
        embed.setDescription(
          "Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant.\n\n**Merci de n'ajouter qu'une seule réaction !**\n\n*Si vous vous êtes trompé lors de votre choix veuillez enlever votre réaction initiale puis en ajouter une autre.*"
        );
      } else {
        embed.setDescription("Liste des activités présents sur le serveur.");
      }

      embed
        .setColor(yellow_j4rvis)
        .setAuthor(`${message.guild.me.displayName}`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField(
          "Les activités disponibles:",
          `
             ${loupsGarousEmoji} - ${loupsGarous}
             ${sportEmoji} - ${sport}
             ${cinemaEmoji} - ${cinema}
             ${cycleEmoji} - ${cycle}
             ${jdrEmoji} - ${jdr} **Limitée à 20 personnes**
             ${codingDojoEmoji} - ${codingDojo} **Limitée à 10 personnes**
             ${graphismeEmoji} - ${graphisme}
             ${chillCastEmoji} - ${chillCast} **Annulée cette semaine**
             ${analyseVideoEmoji} - ${analyseVideo} **Annulée cette semaine**
          `
        );

      // ${revisionEmoji} - ${revision}

      message.channel.send(embed).then(async msg => {
        if (message.channel == channel_change.id /*|| message.channel == channel_test.id*/) {
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
        }
      });
      
    } catch (e) {
      console.log(e);
    } finally {
      message.delete();
    }
  }
};
