const { MessageEmbed } = require("discord.js");
const { orange_jdr } = require("../../colours.json");

module.exports = {
  config: {
    name: "groupsjdr",
    description: "Créé de 1 à 3 groupes manuellement pour l'activité JDR",
    usage: "[tag des membres du groupe 1 séparés par des \";\"] | [tag des membres du groupe 2 séparés par des \";\"] | [tag des membres du groupe 3 séparés par des \";\"]",
    category: "miscellaneous",
    accessableby: "Modérateur_JDR",
    aliases: ["jdrgroups", "jdrgroupes", "groupesjdr", "jdrgroup", "jdrgroupe", "groupejdr", "groupjdr"]
  },

  run: async (bot, message, args) => {
    
    const member = message.member;
    
    const modoJdr = message.guild.roles.cache.find(r => r.name == "Modérateur_JDR");
    const jdr = message.guild.roles.cache.find(r => r.name == "JDR");
    
    const groupjdr1 = message.guild.roles.cache.find(r => r.name == "group1_jdr");
    const groupjdr2 = message.guild.roles.cache.find(r => r.name == "group2_jdr");
    const groupjdr3 = message.guild.roles.cache.find(r => r.name == "group3_jdr");
    
    try {
      
      if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])){
        
        if(!member.roles.cache.has(jdr.id)) return message.channel.send("Vous ne faites pas partis de l'activité JDR !")
                                                    .then(msg => {
                                                      msg.delete({ timeout: 2500 });
                                                    });
      
        if(!member.roles.cache.has(modoJdr.id)) return message.channel.send("Vous devez être Modérateur_JDR pour exécuter cette commande !")
                                                        .then(msg => {
                                                          msg.delete({ timeout: 2500 });
                                                        });
      }
      
      
      var groups = args.slice(0).join(" ");
      
      groups = groups.split("|");
      
      if(groups[0] == undefined) return message.channel.send("Vous ne créez aucun groupe !")
                                      .then(msg => {
                                        msg.delete({ timeout: 2500 });
                                      });
      
      if(groups[3] != undefined) return message.channel.send("Vous dépassez la limite des 3 groupes !")
                                      .then(msg => {
                                        msg.delete({ timeout: 2500 });
                                      });
      
      if(groups[0] != undefined){
        var group1_str = generateGroups(jdr, groupjdr1, groups[0].split(";"), group1_str, message);
      }
      
      if(groups[0] != undefined && groups[1] != undefined){
        var group2_str = generateGroups(jdr, groupjdr2, groups[1].split(";"), group2_str, message);
      }
      
      if(groups[0] != undefined && groups[1] != undefined && groups[2] != undefined){
        var group3_str = generateGroups(jdr, groupjdr3, groups[2].split(";"), group3_str, message);
      }
      
      let Embed = new MessageEmbed()
        .setColor(orange_jdr)
        .setTitle(`Groupes JDR`)
        .attachFiles(['./Photos/Logo_j4rvis.png'])
        .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
        .setThumbnail('attachment://Logo_INTECH_Activites_a_la_carte.png')
        .setAuthor(`${member.nickname}`, "https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png");
      
      Embed.addField(`**Groupe 1**`, `${group1_str}`, true);
      
      if(group2_str != undefined){
        Embed.addField(`**Groupe 2**`, `${group2_str}`, true);
      }
      
      if(group3_str != undefined){
        Embed.addField(`**Groupe 3**`, `${group3_str}`, true);
      }
      
      Embed.setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

      message.channel.send({ embed: Embed });
      
    } catch(e) {
      console.log(e);
    } finally {
      message.delete();
    }
  }
};

function generateGroups(jdr, groupjdr, group, group_str, message){
  
  group_str = "";
  
  group.forEach((membre, key) => {
        
        membre = membre.trim();
        membre = membre.substring(3, membre.length - 1);
        
        membre = message.guild.members.cache.get(`${membre}`);
        
        if(membre.roles.cache.has(jdr.id)){
          group_str += "".concat((membre.nickname).substring((membre.nickname).indexOf("]")+1), "\n");
        
          membre.roles.add(groupjdr);
        } else {
          message.channel.send(`Le membre ${membre} n'a pas le rôle JDR ! (passage sans attribution du rôle)`)
            .then(msg => {
              msg.delete({ timeout: 5000 });
            });
        }
        
    });
  
  return group_str;
}