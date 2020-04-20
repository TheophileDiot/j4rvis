const { MessageEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");

module.exports = {

    config: {
        name: "serverinfo",
        description: "Récupère les informations du serveur!",
        usage: "",
        category: "miscellaneous",
        accessableby: "Membres",
        aliases: ["si", "serverdesc"]
    },

    run: async (bot, message, args) => {
        let sEmbed = new MessageEmbed()
        .setColor(red_light)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Nom du serveur:**", `${message.guild.name}`, true)
        .addField("**Propriétaire du serveur:**", `${message.guild.owner}`, true)
        .addField("**Nombre d'utilisateurs:**", `${message.guild.memberCount}`, true)
        .addField("**Nombre de rôles:**", `${message.guild.roles.cache.size}`, true)
        .setFooter("J4RVIS", bot.user.displayAvatarURL)

        message.channel.send({embed: sEmbed});
    }
}
