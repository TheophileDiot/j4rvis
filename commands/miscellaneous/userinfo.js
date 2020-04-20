const { MessageEmbed } = require("discord.js")
const { yellow_j4arvis } = require("../../colours.json");
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
        .setColor(yellow_j4arvis)
        .setTitle("Informations du serveur")
        .setThumbnail(member.user.iconURL)
        .setAuthor(`${member.user.username} Infos`, member.user.displayAvatarURL)
        .addField("**Nom d'utilisateur:**", `${member.user.username}`, true)
        .addField("**Discriminant:**", `${member.user.discriminator}`, true)
        .addField("**ID:**", `${member.id}`, true)
        .addField("**Status:**", `${member.user.presence.status}`, true)
        .addField("**Créé le:**", `${moment.utc(member.user.createdAt).format("LLL")}`, true)
        .setFooter("J4RVIS", bot.user.displayAvatarURL)
    
        message.channel.send({embed: uEmbed});
    }
}