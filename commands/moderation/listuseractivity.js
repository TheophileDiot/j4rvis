module.exports = {
  config: {
    name: "listuseractivity",
    description:
      "Liste les membres du rôle fourni par ordre alphabétique",
    usage: "(@rôle)",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["listusersactivity", "lua"]
  },

  run: async (bot, message) => {

    const moderateur = message.guild.roles.cache.find(r => r.name === "Modérateur");
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    const role = message.mentions.roles.first();
    
    try{
      
      if(role == null){
        message.channel.send("Veuillez mentionner un rôle !")
          .then(msg => {
            msg.delete({ timeout: 2500 });
          });
      } else {
        let content_arr = [""];
        let content_str = "";

        message.guild.members.cache.forEach((member) => {
        if (!member.user.bot && member.roles.cache.has(role.id)) {
          
          if(member.nickname != null){
            content_arr.push(`*${member.nickname}* => **${member.user.presence.status}**`);
          }
          
        }
        });
        
        content_arr = content_arr.sort();
        
        for (var i in content_arr) {
          content_str += content_arr[i].concat("\n");
        } 
        
        message.channel.send(`**Liste des membres de l'activité ${role.name} : ** \n\n ${content_str}`);
        
      }
      
    } catch(e){
      console.log(e);
    } finally {
      message.delete();
    }
    
  }
};
