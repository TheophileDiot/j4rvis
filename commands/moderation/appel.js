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

  run: async (bot, message) => {

    dev = message.guild.members.cache.get("559057271737548810");

    message.channel.send(`Cette commande n'est pas encore entièrement configurée veuillez contacter ${dev.nickname} pour plus d'informations`)

    // const channel_appel = message.guild.channels.cache.get("709662934908928081");
    // const moderateur = message.guild.roles.cache.find(r => r.name === "Modérateur");
    //
    // if (!message.member.roles.cache.has(moderateur.id)){
    //   if(message.channel !== channel_appel) return message.channel.send(`Vous ne lancer pas la commande dans le bon salon, le bon salon est ${channel_appel}.`);
    // }
    //
    // if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
    //   return message.channel.send(
    //     "Vous ne pouvez pas utiliser cette commande!"
    //   );
    //
    // const channel_lg = message.guild.channels.cache.get('697728705627291748');
    // const channel_sport = message.guild.channels.cache.get('702152013370359939');
    // const channel_cinema = message.guild.channels.cache.get('698099586576678993');
    // const channel_cycle = message.guild.channels.cache.get('702891558059376758');
    // const channel_jdr = message.guild.channels.cache.get('700324617016967248');
    // const channel_codingDojo = message.guild.channels.cache.get('700737711916711976');
    // const channel_graphisme = message.guild.channels.cache.get('710424992520601691');
    // const channel_chillCast = message.guild.channels.cache.get('707932837277466696');
    // const channel_analyseVideo = message.guild.channels.cache.get('706802350492221481');
    //
    // try {
    //
    //   const presentEmoji = "✅";
    //
    //   let presents_arr = [""];
    //   let away_str1 = "";
    //   let away_str2 = "";
    //
    //   let sEmbed = new MessageEmbed()
    //   .setColor(yellow_j4rvis)
    //   .setTitle("Appel !")
    //   .attachFiles(['./Photos/Logo_j4rvis.png'])
    //   .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
    //   .setThumbnail('attachment://Logo_INTECH_Activites_a_la_carte.png')
    //   .setAuthor(`${message.guild.name} Info`, 'attachment://Logo_INTECH_Activites_a_la_carte.png')
    //   .setDescription("Cliquez sur la réaction si présente pour montrer que vous êtes présent.\n\n"
    //                   + "**Si vous n'ajoutez pas une réaction à temps, vous serrez mis absent pour la moitié du créneau**")
    //   .setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');
    //
    //   // mise auto présent à retirer
    //   const auto_present = true;
    //   presents_arr.push("[AG - Admin] Théophile DIOT");
    //
    //   message.channel.send("@everyone Appel !").then(msg => {
    //       msg.delete({ timeout: 900000 });
    //     });
    //
    //   channel_lg.send("Appel lancé !");
    //   channel_sport.send("Appel lancé !");
    //   channel_cinema.send("Appel lancé !");
    //   channel_cycle.send("Appel lancé !");
    //   channel_jdr.send("Appel lancé !");
    //   channel_codingDojo.send("Appel lancé !");
    //   channel_graphisme.send("Appel lancé !");
    //   channel_chillCast.send("Appel lancé !");
    //   channel_analyseVideo.send("Appel lancé !");
    //
    //   message.channel.send({ embed: sEmbed }).then(async msg => {
    //
    //     await msg.react(presentEmoji);
    //
    //     await bot.on('messageReactionAdd', (reaction, user) =>{
    //       if(!user.bot && reaction.emoji.name === "✅"){
    //
    //         const membre = message.guild.members.cache.get(user.id);
    //
    //         if(membre.nickname !== "[AG - Admin] Théophile DIOT" && auto_present){
    //           if(membre.nickname === null || membre.nickname === undefined){
    //             presents_arr.push(membre.user.name);
    //           } else {
    //             presents_arr.push(membre.nickname);
    //           }
    //         }
    //
    //       }
    //     });
    //
    //     setTimeout(function(){
    //
    //       /*for (var i in presents_arr) {
    //         presents_str += presents_arr[i].concat("\n");
    //       }*/
    //
    //       let away_arr = [''];
    //
    //       presents_arr = presents_arr.sort();
    //
    //       message.guild.members.cache.forEach((membre) => {
    //
    //         if(!presents_arr.includes(membre.nickname) && !membre.user.bot){
    //           if(membre.nickname === null || membre.nickname === undefined){
    //             away_arr.push(membre.user.tag);
    //           } else {
    //             away_arr.push(membre.nickname);
    //           }
    //         }
    //       });
    //
    //       away_arr = away_arr.sort();
    //
    //       away_arr.forEach((arr) =>{
    //         if(away_str1.length >= 1950){
    //           away_str2 += arr.concat("\n");
    //         } else {
    //           away_str1 += arr.concat("\n");
    //         }
    //       });
    //
    //       msg.delete();
    //       message.channel.send("@everyone L'appel est fini !");
    //       message.channel.send(`Les personnes absentes sont : \n${away_str1}`);
    //       if(away_str2 !== ""){
    //         message.channel.send(`${away_str2}`);
    //       }
    //     }, 900000);
    //   });
    //
    //   // 900000
    //
    //   message.delete();
    //
    // } catch(e) {
    //   console.log(e);
    // }
    
  }
};
