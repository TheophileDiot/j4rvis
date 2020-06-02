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

    const channel_appel = message.guild.channels.cache.get("709662934908928081");
    const moderateur = message.guild.roles.cache.find(r => r.name == "Modérateur");
    
    if (!message.member.roles.cache.has(moderateur.id)){
      if(message.channel != channel_appel) return message.channel.send(`Vous ne lancer pas la commande dans le bon salon, le bon salon est ${channel_appel}.`);
    }
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    try {
      
      const presentEmoji = "✅";
      
      let presents_arr = [""];
      var away_arr = [""];
      var away_str1 = "";
      var away_str2 = "";
      
      let sEmbed = new MessageEmbed()
      .setColor(yellow_j4rvis)
      .setTitle("Appel !")
      .setThumbnail("https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
      .setAuthor(`${message.guild.name} Info`, "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2FLogo_INTECH_Activites_a_la_carte.png?v=1587550110481")
      .setDescription("Cliquez sur la réaction si présente pour montrer que vous êtes présent.\n\n"
                      + "**Si vous n'ajoutez pas une réaction à temps, vous serrez mis absent pour la moitié du créneau**")
      .setFooter("J4RVIS", "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2Flogo.png?v=1587550143347");
    
      // mise auto présent à retirer
      const auto_present = true;
      presents_arr.push("[AG - Admin] Théophile DIOT");
      
      message.channel.send("@everyone Appel !").then(msg => {
          msg.delete({ timeout: 900000 });
        });
      
      message.channel.send({ embed: sEmbed }).then(async msg => {
        
        await msg.react(presentEmoji);
        
        await bot.on('messageReactionAdd', (reaction, user) =>{
          if(!user.bot && reaction.emoji.name === "✅"){
            
            var membre = message.guild.members.cache.get(user.id);
            
            if(membre.nickname != "[AG - Admin] Théophile DIOT" && auto_present){
              if(membre.nickname == null || membre.nickname == undefined){
                presents_arr.push(membre.user.name);
              } else {
                presents_arr.push(membre.nickname);
              }
            }
            
          }
        });
        
        setTimeout(function(){
          
          /*for (var i in presents_arr) {
            presents_str += presents_arr[i].concat("\n");
          }*/
          
          var away_arr = [''];
          
          presents_arr = presents_arr.sort();
          
          message.guild.members.cache.forEach((membre, key) => {
            
            if(!presents_arr.includes(membre.nickname) && !membre.user.bot){
              if(membre.nickname == null || membre.nickname == undefined){
                away_arr.push(membre.user.tag);
              } else {
                away_arr.push(membre.nickname);
              }
            }
          });
          
          away_arr = away_arr.sort();
          
          away_arr.forEach((arr, key) =>{
            if(away_str1.length >= 1950){
              away_str2 += arr.concat("\n");
            } else {
              away_str1 += arr.concat("\n");
            }
          });
          
          msg.delete();
          message.channel.send("@everyone L'appel est fini !");
          message.channel.send(`Les personnes absentes sont : \n${away_str1}`);
          if(away_str2 != ""){
            message.channel.send(`${away_str2}`);
          }
        }, 900000);
      });
      
      // 900000
      
      message.delete();
      
    } catch(e) {
      console.log(e);
    }
    
  }
};
