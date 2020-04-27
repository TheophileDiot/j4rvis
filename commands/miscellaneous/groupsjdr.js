const { MessageEmbed } = require("discord.js");
const { yellow_j4rvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "groupsjdr",
    description: "Créé des groupes manuellement pour l'activité JDR",
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
      
      if(!member.roles.cache.has(jdr.id)) return message.channel.send("Vous ne faites pas partis de l'activité JDR !")
                                                  .then(msg => {
                                                    msg.delete({ timeout: 2500 });
                                                  });
      
      if(!member.roles.cache.has(modoJdr.id)) return message.channel.send("Vous devez être Modérateur_JDR pour exécuter cette commande !")
                                                      .then(msg => {
                                                        msg.delete({ timeout: 2500 });
                                                      });
      
      var groups = args.slice(0).join(" ");
      
      groups = groups.split("|");
      
      if(groups[2] == null || groups[3] != null) return message.channel.send("Vous devez créer 3 groupes !")
                                      .then(msg => {
                                        msg.delete({ timeout: 2500 });
                                      });
      
      var group1 = groups[0];
      var group2 = groups[1];
      var group3 = groups[2];
      
      group1 = group1.split(";");
      group2 = group2.split(";");
      group3 = group3.split(";");
      
      var group1_str = "";
      var group2_str = "";
      var group3_str = "";
      
      group1.forEach((membre, key) => {
        
        membre = membre.trim();
        membre = membre.substring(3, membre.length - 1);
        
        membre = message.guild.members.cache.get(`${membre}`);
        
        if(membre.roles.cache.has(jdr.id)){
          group1_str += "".concat((membre.nickname).substring((membre.nickname).indexOf("]")+1), "\n");
        
          membre.roles.add(groupjdr1);
        } else {
          message.channel.send(`Le membre ${membre} n'a pas le rôle JDR ! (passage sans attribution du rôle)`)
            .then(msg => {
              msg.delete({ timeout: 5000 });
            });
        }
        
      });
      
      group2.forEach((membre, key) => {
        
        membre = membre.trim();
        membre = membre.substring(3, membre.length - 1);
        
        membre = message.guild.members.cache.get(`${membre}`);
        
        if(membre.roles.cache.has(jdr.id)){
          group2_str += "".concat((membre.nickname).substring((membre.nickname).indexOf("]")+1), "\n");

          membre.roles.add(groupjdr2);
        } else {
          message.channel.send(`Le membre ${membre} n'a pas le rôle JDR ! (passage sans attribution du rôle)`)
            .then(msg => {
              msg.delete({ timeout: 5000 });
            });
        }
        
      });
      
      group3.forEach((membre, key) => {
        
        membre = membre.trim();
        membre = membre.substring(3, membre.length - 1);
        
        membre = message.guild.members.cache.get(`${membre}`);
        
        if(membre.roles.cache.has(jdr.id)){
          group3_str += "".concat((membre.nickname).substring((membre.nickname).indexOf("]")+1), "\n");

          membre.roles.add(groupjdr3);
        } else {
          message.channel.send(`Le membre ${membre} n'a pas le rôle JDR ! (passage sans attribution du rôle)`)
            .then(msg => {
              msg.delete({ timeout: 5000 });
            });
        }
        
      });
      
      let Embed = new MessageEmbed()
        .setColor(yellow_j4rvis)
        .setTitle(`Groupes JDR`)
        .setThumbnail("https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
        .setAuthor(`${member.nickname}`, "https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png")
        .addField(`**Groupe 1**`, `${group1_str}`, true)
        .addField(`**Groupe 2**`, `${group2_str}`, true)
        .addField(`**Groupe 3**`, `${group3_str}`, true)
        .setFooter("J4RVIS", "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2Flogo.png?v=1587550143347");

      message.channel.send({ embed: Embed });
      
    } catch(e) {
      console.log(e);
    } finally {
      message.delete();
    }
  }
};