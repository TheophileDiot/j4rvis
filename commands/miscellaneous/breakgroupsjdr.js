module.exports = {
  config: {
    name: "breakgroupsjdr",
    description: "détruit les groupes manuellement créés pour l'activité JDR",
    usage: "",
    category: "miscellaneous",
    accessableby: "Modérateur_JDR",
    aliases: ["breakjdrgroups", "breakjdrgroupes", "breakgroupesjdr", "breakjdrgroup", "breakjdrgroupe", "breakgroupejdr", "breakgroupjdr"]
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
        
      message.guild.members.cache.forEach((membre, key) => {
        if(membre.roles.cache.has(jdr.id)){
          if(membre.roles.cache.has(groupjdr1.id)){
            membre.roles.remove(groupjdr1);
          }
          
          if(membre.roles.cache.has(groupjdr2.id)){
            membre.roles.remove(groupjdr2);
          }
          
          if(membre.roles.cache.has(groupjdr3.id)){
            membre.roles.remove(groupjdr3);
          }
        }
      });
      
      message.channel.send("Les groupes de JDR ont été cassés !")
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