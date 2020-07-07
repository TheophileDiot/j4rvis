const { MessageEmbed } = require("discord.js");
const { green_codingDojo } = require("../../colours.json");

module.exports = {
  config: {
    name: "groupscodingdojo",
    description: "Créé de 1 à 2 groupes manuellement pour l'activité Coding Dojo",
    usage: "[tag des membres du groupe Révision séparés par des \";\"] | [tag des membres du groupe Classique séparés par des \";\"]",
    category: "miscellaneous",
    accessableby: "Modérateur_Coding_Dojo",
    aliases: ["groupCD", "groupsCD", "codingdojogroups", "codingdojogroupes", "groupescodingdojo", "codingdojogroup", "codingdojogroupe", "groupecodingdojo", "groupcodingdojo"]
  },

  run: async (bot, message, args) => {
    
    const member = message.member;
    
    const modoCodingDojo = message.guild.roles.cache.find(r => r.name == "Modérateur_Coding_Dojo");
    const codingDojo = message.guild.roles.cache.find(r => r.name == "Coding_Dojo");
    
    const groupRevision = message.guild.roles.cache.find(r => r.name == "Coding_Dojo_Revision");
    const groupClassique = message.guild.roles.cache.find(r => r.name == "Coding_Dojo_CLassique");
    
    try {
      
      if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])){
        
        if(!member.roles.cache.has(codingDojo.id)) return message.channel.send("Vous ne faites pas partis de l'activité Coding Dojo !")
                                                    .then(msg => {
                                                      msg.delete({ timeout: 2500 });
                                                    });
      
        if(!member.roles.cache.has(modoCodingDojo.id)) return message.channel.send("Vous devez être Modérateur_Coding_Dojo pour exécuter cette commande !")
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
        var group1_str = generateGroups(codingDojo, groupRevision, groups[0].split(";"), group1_str, message);
      }
      
      if(groups[0] != undefined && groups[1] != undefined){
        var group2_str = generateGroups(codingDojo, groupClassique, groups[1].split(";"), group2_str, message);
      }
      
      let Embed = new MessageEmbed()
        .setColor(green_codingDojo)
        .setTitle(`Groupes Coding Dojo`)
        .attachFiles(['./Photos/Logo_j4rvis.png'])
        .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
        .setThumbnail('attachment://Logo_INTECH_Activites_a_la_carte.png')
        .setAuthor(`${member.nickname}`, "https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png");
      
      Embed.addField(`**Groupe 1**`, `${group1_str}`, true);
      
      if(group2_str != undefined){
        Embed.addField(`**Groupe 2**`, `${group2_str}`, true);
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

function generateGroups(codingDojo, groupCodingDojo, group, group_str, message){
  
  group_str = "";
  
  group.forEach((membre, key) => {
        
        membre = membre.trim();
        membre = membre.substring(3, membre.length - 1);
        
        membre = message.guild.members.cache.get(`${membre}`);
        
        if(membre.roles.cache.has(codingDojo.id)){
          group_str += "".concat((membre.nickname).substring((membre.nickname).indexOf("]")+1), "\n");
        
          membre.roles.add(groupCodingDojo);
        } else {
          message.channel.send(`Le membre ${membre} n'a pas le rôle JDR ! (passage sans attribution du rôle)`)
            .then(msg => {
              msg.delete({ timeout: 5000 });
            });
        }
        
    });
  
  return group_str;
}