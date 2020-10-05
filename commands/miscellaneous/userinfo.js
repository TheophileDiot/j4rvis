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
  
  run: async (bot, message) => {
    const member = message.mentions.members.first() || message.member;
    
    let uEmbed = new MessageEmbed()
      .setColor(yellow_j4rvis)
      .setTitle(`Informations de l'utilisateur ${member.user.username}`)
      .attachFiles(['./Photos/Logo_j4rvis.png'])
      .setThumbnail("https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png")
      .setAuthor(`${member.user.username} Infos`, "https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png")
      .addField("**Nom d'utilisateur:**", `${member.user.username}`, true)
      .addField("**Discriminant:**", `${member.user.discriminator}`, true)
      .addField("**ID:**", `${member.id}`, true)
      .addField("**Status:**", `${member.user.presence.status}`, true)
      .addField("**Créé le:**",`${moment.utc(member.user.createdAt).format("LLL")}`,true)
      .setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

    await message.channel.send({embed: uEmbed});
    message.delete();
  }
};
