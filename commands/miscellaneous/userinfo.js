const { MessageEmbed } = require("discord.js");
const { yellow_j4rvis } = require("../../colours.json");
const moment = require("moment");

module.exports = {
  config: {
    name: "userinfo",
    description: "Récupère les informations d'un utilisateur ou de vous même!",
    usage: "(@mention)",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["ui"]
  },
  
  run: async (bot, message, args) => {
    const member = message.mentions.members.first() || message.member;
    
    let uEmbed = new MessageEmbed()
      .setColor(yellow_j4rvis)
      .setTitle(`Informations de l'utilisateur ${member.user.username}`)
      .setThumbnail("https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png")
      .setAuthor(`${member.user.username} Infos`, "https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png")
      .addField("**Nom d'utilisateur:**", `${member.user.username}`, true)
      .addField("**Discriminant:**", `${member.user.discriminator}`, true)
      .addField("**ID:**", `${member.id}`, true)
      .addField("**Status:**", `${member.user.presence.status}`, true)
      .addField("**Créé le:**",`${moment.utc(member.user.createdAt).format("LLL")}`,true)
      .setFooter("J4RVIS", "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2Flogo.png?v=1587550143347");

    message.channel.send({ embed: uEmbed });
    message.delete();
  }
};
