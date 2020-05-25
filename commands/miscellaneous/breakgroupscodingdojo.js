module.exports = {
  config: {
    name: "breakgroupscodingdojo",
    description: "détruit les groupes manuellement créés pour l'activité Coding Dojo",
    usage: "",
    category: "miscellaneous",
    accessableby: "Modérateur_Coding_Dojo",
    aliases: ["breakgroupsCD", "breakCDgroups", "breakcodingdojogroups", "breakcodingdojogroupes", "breakgroupescodingdojo", "breakcodingdojogroup", "breakcodingdojogroupe", "breakgroupecodingdojo", "breakgroupcodingdojo"]
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
        
      message.guild.members.cache.forEach((membre, key) => {
        if(membre.roles.cache.has(codingDojo.id)){
          if(membre.roles.cache.has(groupRevision.id)){
            membre.roles.remove(groupRevision);
          }
          
          if(membre.roles.cache.has(groupClassique.id)){
            membre.roles.remove(groupClassique);
          }
        }
      });
      
      message.channel.send("Les groupes de Coding Dojo ont été cassés !")
        .then(msg => {
          msg.delete({ timeout: 2500 });
        });
      
    } catch(e) {
      console.log(e);
    } finally {
      message.delete();
    }
  }
};