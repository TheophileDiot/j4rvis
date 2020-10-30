const { MessageEmbed } = require("discord.js");
const { yellow_j4rvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "creategroup",
    description: "Créé des groupes pour le rôle de votre choix automatiquement",
    usage: "(@rôle) (nombre de groupes) (chefs de groupes séparé par un espace, il doit y avoir autant de chef que de groupes) (membres exclus séparés par un espace)",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["group", "groupe", "groupcreate", "creategroupe", "groupecreate"]
  },

  run: async (bot, message, args) => {
    
    const member = message.member;
    
    try {

      const role = message.mentions.roles.last();

      const nbrgroups = args.slice(1)[0];

      const group_masters = args.slice(2, 2 + nbrgroups);

      const excluded_members = args.slice(-nbrgroups + 1);

      let not_from_role = false
      let index_not_from_role = 0;

      if(group_masters.length > 1) {
        for (let i = 0; i < group_masters.length; i++) {
          group_masters[i] = message.guild.members.cache.get(group_masters[i].substring(3, group_masters[i].indexOf(">")))
          if (!group_masters[i].member.roles.cache.has(role.id)) {
            not_from_role = true
            index_not_from_role = i + 1;
          }
        }
      }

      if(role == null){
        message.channel.send("Veuillez préciser un rôle !")
          .then(msg => {
            msg.delete({ timeout: 2500 });
          });
      } else if(nbrgroups === ""){
        message.channel.send("Veuillez préciser le nombre de groupes que vous voulez créer !")
          .then(msg => {
            msg.delete({ timeout: 2500 });
          });
      } else if(isNaN(nbrgroups)){
        message.channel.send("Veuillez fournir un nombre !")
          .then(msg => {
            msg.delete({ timeout: 2500 });
          });
      } else if(nbrgroups > 25){
        message.channel.send("Vous ne pouvez créer plus de 25 groupes !")
          .then(msg => {
            msg.delete({ timeout: 2500 });
          });
      } else if (not_from_role){
        message.channel.send(`Le maître de groupe numéro ${index_not_from_role} ne possède pas le rôle ${role.name}`)
            .then(msg => {
              msg.delete({ timeout: 2500 });
            });
      } else {
        let members = message.guild.roles.cache.get(role.id).members.map(m=>m);

        if(members.size <= nbrgroups){
          message.channel.send(`Vous créez trop de groupes pour le nombre d'utilisateurs ayant le rôle ${role.name} !`)
            .then(msg => {
                msg.delete({ timeout: 2500 });
              });
        } else if (nbrgroups < 2){
          message.channel.send("Veuillez créer au moins 2 groupes !")
            .then(msg => {
                msg.delete({ timeout: 2500 });
              });
        } else {

          members = shuffle(members);

          var list = [""];
          let y = 0;

          members.forEach((membre) => {
            if(membre !== undefined && (!excluded_members.includes(membre) || !group_masters.includes(membre))){
              if(membre.nickname !== undefined){
                membre = membre.nickname
                list[y] += "".concat(membre.substring(membre.indexOf("]")+1), ", ");
              } else {
                list[y] += "".concat(membre.displayName);
              }
              if(y === nbrgroups - 1){
                y = 0;
              } else {
                y += 1;
              }
            }
          })

          if(group_masters.length > 1){
            if(group_masters[0].nickname !== undefined){
              group_masters[0] = group_masters[0].nickname
              list[0] = "".concat(group_masters[0].substring(group_masters[0].indexOf("]")+1), ", ") + list[0];
            } else {
              list[0] = "".concat(group_masters[0].displayName) + list[0];
            }
          }

          list[0] = list[0].substring(0, list[0].length - 2);

          for (let i = 1; i < nbrgroups; i++) {
            if(group_masters.length > 1){
              if(group_masters[i].nickname !== undefined){
                group_masters[i] = group_masters[i].nickname
                list[i] = "".concat(group_masters[i].substring(group_masters[i].indexOf("]")+1), ", ") + list[i].substring(9, list[i].length - 2);
              } else {
                list[i] = "".concat(group_masters[i].displayName) + list[i].substring(9, list[i].length - 2);
              }
            }

            if(group_masters.length < 1){
              list[i] = list[i].substring(9, list[i].length - 2);
            }
          }

          let Embed = new MessageEmbed()
            .setColor(yellow_j4rvis)
            .setTitle(`Groupes de l'activité ${role.name}`)
            .attachFiles(['./Photos/Logo_j4rvis.png'])
            .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
            .setThumbnail('attachment://Logo_INTECH_Activites_a_la_carte.png')
            .setAuthor(`${member.nickname}`, "https://cdn.discordapp.com/avatars/" + member.user.id + "/" + member.user.avatar + ".png");

            for (let i = 0; i < nbrgroups; i++) {
              Embed.addField(`**Groupe ${i + 1}**`, `${list[i]}`, true)
            }

            Embed.setFooter("J4RVIS", 'attachment://Logo_j4rvis.png');

          await message.channel.send({ embed: Embed });
        }
      }

    } catch(e) {
      console.log(e);
    } finally {
      message.delete();
    }
  }
};

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

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
