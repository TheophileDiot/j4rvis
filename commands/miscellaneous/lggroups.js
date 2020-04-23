const { prefix } = require("../../botconfig.json");
const { MessageEmbed } = require("discord.js");
const { red_dark } = require("../../colours.json");

module.exports = {
  config: {
    name: "lggroups",
    description: "Créé des groupes pour le loups_garous automatiquement",
    usage: "(nombre de groupes)",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["lgg", "groupslg"]
  },

  run: async (bot, message, args) => {
    
    const member = message.member;
    const loupsGarous = message.guild.roles.cache.find(r => r.name == "Loups_garous");
    const channel_groups = message.guild.channels.cache.get("702769437098508291");
    
    if (!message.member.hasPermission(["ADMINISTRATOR"])){
      if (message.channel != channel_groups.id) return message.channel.send(`Vous ne pouvez pas utiliser cette commande dans ce salon, elle est utilisable uniquement dans le salon ${channel_groups} !`);
      if (!member.roles.cache.has(loupsGarous.id)) return message.channel.send(`Vous ne pouvez pas utiliser cette commande car vous n'avez pas le rôle ${loupsGarous.name} !`);
    }
    
    try {
      
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const nbrgroups = args.slice(1).join(" ");
      
      if(nbrgroups == ""){
        message.channel.send("Veuillez préciser le nombre de groupes que vous voulez créer !");
      } else {
        var memberLg = message.guild.roles.cache.get(loupsGarous.id).members.map(m=>m.nickname);
        
        if(memberLg.size <= nbrgroups){
          message.channel.send(`Vous créez trop de groupes pour le nombre d'utilisateurs ayant le rôle ${loupsGarous.name} !`);
        } else if (nbrgroups < 2){
          message.channel.send("Veuillez créer au moins 2 groupes !");
        } else {
          
          memberLg = shuffle(memberLg);
          
          const list = [nbrgroups];
          let y = 0;
          
          for (let i = 0; i < memberLg.length; i++) {
            list[y] += "".concat(memberLg[i].substring(memberLg[i].indexOf("]")+1), ", ");
            
            if(y == nbrgroups - 1){
              y = 0;
            } else {
              y += 1;
            }
          }
          
          list[0] = list[0].substring(1, list[0].length - 2);
          
          for (let i = 1; i < nbrgroups; i++) {
            list[i] = list[i].substring(9, list[i].length - 2);
          }
          
          let Embed = new MessageEmbed()
            .setColor(red_dark)
            .setTitle("Groupes Loups-garous")
            .setThumbnail("https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2Floups_garous.png?v=1587560460495")
            .setAuthor(`${message.guild.name} Info`, "https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png");
            
            for (let i = 0; i < nbrgroups; i++) {
              Embed.addField(`**Groupe ${i + 1}**`, `${list[i]}`, true)
            }
          
            Embed.setFooter("J4RVIS", "https://cdn.glitch.com/d5a6f7f9-efd6-4827-a131-366705644f3c%2Flogo.png?v=1587550143347");

          message.channel.send({ embed: Embed });
        }
      }
      
      message.delete();
    } catch (e) {
      console.log(e);
    }
  }
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
