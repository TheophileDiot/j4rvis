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
    aliases: ["si", "serverdesc"]
  },
  
  run: async (bot, message, args) => {
    
    let listRoles = "";
    let nbrRoles = 0;
    let nbrVoiceChannels = 0;
    let nbrTextChannels = 0;
    
    message.guild.roles.cache.forEach((role, key) => {
      if(!role.name.includes("@everyone") && !role.name.includes("Rythm") && !role.name.includes("Rythm 2") && !role.name.includes("MEE6") && !role.name.includes("Octave")){
        listRoles = listRoles.concat(role.name, ", ");
        nbrRoles += 1;
      }
    });
    
    message.guild.channels.cache.forEach((channel, key) => {
      if(channel.type.includes("voice")){
         nbrVoiceChannels += 1;
      } else {
        nbrTextChannels += 1;
      }
    });
    
    let sEmbed = new MessageEmbed()
      .setColor(red_light)
      .setTitle("Server Info")
      .setThumbnail("https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
      .setAuthor(`${message.guild.name} Info`, "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
      .addField("**Nom du serveur:**", `${message.guild.name}`, true)
      .addField("**Création du serveur:**", `${moment.utc(message.guild.createdAt).format("LL")}`, true)
      .addField("**Propriétaire du serveur:**", `${message.guild.owner}`, true)
      .addField("**Nombre d'utilisateurs:**",`${message.guild.memberCount}`,true)
      .addField("**Nombre de rôles:**", `${nbrRoles}`, true)
      .addField("**Liste des rôles:**", `${listRoles}`, true)
      .addField("**Nombre de salon vocaux:**", `${nbrVoiceChannels}`, true)
      .addField("**Nombre de salon textuels:**", `${nbrTextChannels}`, true)
      .setFooter("J4RVIS", "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2Flogo.png?v=1587550143347");
    
    message.channel.send({ embed: sEmbed });
    message.delete();
  }
};
