const { MessageEmbed } = require("discord.js");
const { yellow_j4rvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "appel",
    description:
      "Permet de faire l'appel, l'appel se termine au bout de 20 minutes et affiche le pseudo des personnes ayant ✅ réagit au message",
    usage: "",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["call", "app"]
  },

  run: async (bot, message, args) => {

    const moderateur = message.guild.roles.cache.find(r => r.name == "Modérateur");
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    try {
      
      const presentEmoji = "✅";
      
      var presents_arr = [""];
      var presents_str = "";
      
      let sEmbed = new MessageEmbed()
      .setColor(yellow_j4rvis)
      .setTitle("Appel !")
      .setThumbnail("https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
      .setAuthor(`${message.guild.name} Info`, "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
      .setDescription("Cliquez sur la réaction si présente pour montrer que vous êtes présent.\n\n"
                      + "**Si vous n'ajoutez pas une réaction à temps, vous serrez mis absent pour la moitié du créneau**")
      .setFooter("J4RVIS", "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2Flogo.png?v=1587550143347");
    
      message.channel.send({ embed: sEmbed }).then(async msg => {
        await msg.react(presentEmoji);
        
        await bot.on('messageReactionAdd', (reaction, user) =>{
          if(!user.bot && reaction.emoji.name === "✅"){
            
            const member = message.guild.members.cache.get(user.id);
            
            presents_arr.push(member.nickname);
          }
        });
        
        setTimeout(function(){
          
          presents_arr = presents_arr.sort();
          
          for (var i in presents_arr) {
            presents_str += presents_arr[i].concat("\n");
          } 
          
          msg.delete();
          message.channel.send("L'appel est fini !");
          message.channel.send(`Les personnes présentes sont : \n ${presents_str}`);
        }, 1200000);
      });
      
      message.delete();
      
    } catch(e) {
      console.log(e);
    }
    
  }
};
