const { MessageEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");
const moment = require("moment");

module.exports = {
  config: {
    name: "serverinfo",
    description: "Récupère les informations du serveur!",
    usage: "",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["si", "serverdesc"],
  },

  run: async (message) => {
    try {
      let nbrRoles = 0;
      let nbrVoiceChannels = 0;
      let nbrTextChannels = 0;

      message.guild.channels.cache.forEach((channel) => {
        if (channel.type.includes("voice")) {
          nbrVoiceChannels += 1;
        } else {
          nbrTextChannels += 1;
        }
      });

      let sEmbed = new MessageEmbed()
        .setColor(red_light)
        .setTitle("Server Info")
        .attachFiles(["./Photos/Logo_j4rvis.png"])
        .attachFiles(["./Photos/Logo_INTECH_Activites_a_la_carte.png"])
        .setThumbnail("attachment://Logo_INTECH_Activites_a_la_carte.png")
        .setAuthor(
          `${message.guild.name}`,
          "attachment://Logo_INTECH_Activites_a_la_carte.png"
        )
        .addField("**Nom du serveur:**", `${message.guild.name}`, true)
        .addField(
          "**Création du serveur:**",
          `${moment.utc(message.guild.createdAt).format("LL")}`,
          true
        )
        .addField(
          "**Propriétaire du serveur:**",
          `${message.guild.owner}`,
          true
        )
        .addField(
          "**Nombre d'utilisateurs:**",
          `${message.guild.memberCount}`,
          true
        )
        .addField("**Nombre de rôles:**", `${nbrRoles}`, true)
        .addField("**Nombre de salon vocaux:**", `${nbrVoiceChannels}`, true)
        .addField("**Nombre de salon textuels:**", `${nbrTextChannels}`, true)
        .setFooter("J4RVIS", "attachment://Logo_j4rvis.png");

      await message.channel.send({ embed: sEmbed });
      message.delete();
    } catch (e) {
      console.log(e);
    }
  },
};
