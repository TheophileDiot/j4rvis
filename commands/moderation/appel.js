const { MessageEmbed } = require("discord.js");
const { green_j4rvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "appel",
    description:
      "Permet de faire l'appel, l'appel se termine au bout de 20 minutes et affiche le pseudo des personnes n'ayant pas réagit ✅ au message",
    usage: "",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["call", "app"],
  },

  run: async (bot, message) => {
    // dev = message.guild.members.cache.get("559057271737548810");

    // message.channel.send(`Cette commande n'est pas encore entièrement configurée veuillez contacter ${dev.nickname} pour plus d'informations`)

    const ressource = message.guild.roles.cache.find(
      (r) => r.name === "Ressource"
    );
    const ancien = message.guild.roles.cache.find((r) => r.name === "Ancien");
    const admin = message.guild.roles.cache.find(
      (r) => r.name === "Administrateur"
    );
    const moderateur = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur"
    );
    const absent = message.guild.roles.cache.find((r) => r.name === "Absent");

    const channel_appel = message.guild.channels.cache.get(
      "770994425395806208"
    );

    if (!message.member.roles.cache.has(moderateur.id)) {
      if (message.channel !== channel_appel)
        return message.channel.send(
          `Vous ne lancer pas la commande dans le bon salon, le bon salon est ${channel_appel}.`
        );
    }

    if (
      !message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) &&
      !message.member.roles.cache.has(moderateur.id)
    )
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    const channel_jdr = message.guild.channels.cache.get("700324617016967248");
    const channel_tech = message.guild.channels.cache.get("760823031789780993");
    const channel_esport = message.guild.channels.cache.get(
      "760822841847054357"
    );
    const channel_final_club_pro = message.guild.channels.cache.get(
      "760825189839011861"
    );
    const channel_business = message.guild.channels.cache.get(
      "760823976988639242"
    );
    const channel_philo = message.guild.channels.cache.get(
      "760824999618674718"
    );
    const channel_jeux_societe = message.guild.channels.cache.get(
      "760824400349495306"
    );
    const channel_diapo_expo = message.guild.channels.cache.get(
      "760822606483161167"
    );
    const channel_world_building = message.guild.channels.cache.get(
      "760824261467570216"
    );
    const channel_velo = message.guild.channels.cache.get("760825324174311424");
    const channel_magic = message.guild.channels.cache.get(
      "762648055534714891"
    );
    const channel_poker = message.guild.channels.cache.get(
      "762650154116579358"
    );
    const channel_lecture = message.guild.channels.cache.get(
      "762649202005770251"
    );
    const channel_cine_club = message.guild.channels.cache.get(
      "763000551582859286"
    );
    const channel_journal_intech = message.guild.channels.cache.get(
      "763000652167118868"
    );
    const channel_batisseur = message.guild.channels.cache.get(
      "763000785981538324"
    );
    const channel_bde = message.guild.channels.cache.get("763408049741496340");

    list_channels = [
      channel_jdr,
      channel_tech,
      channel_esport,
      channel_final_club_pro,
      channel_business,
      channel_philo,
      channel_jeux_societe,
      channel_diapo_expo,
      channel_world_building,
      channel_velo,
      channel_magic,
      channel_poker,
      channel_lecture,
      channel_cine_club,
      channel_journal_intech,
      channel_batisseur,
      channel_bde,
    ];

    try {
      const presentEmoji = "✅";

      let presents_arr = [""];
      let away_str1 = "";
      let away_str2 = "";

      let sEmbed = new MessageEmbed()
        .setColor(green_j4rvis)
        .setTitle("Appel !")
        .attachFiles(["./Photos/Logo_j4rvis.png"])
        .attachFiles(["./Photos/Logo_INTECH_Activites_a_la_carte.png"])
        .setThumbnail("attachment://Logo_INTECH_Activites_a_la_carte.png")
        .setAuthor(
          `${message.guild.name} Info`,
          "attachment://Logo_INTECH_Activites_a_la_carte.png"
        )
        .setDescription(
          "Cliquez sur la réaction si présente pour montrer que vous êtes présent.\n\n"
        )
        //+ "**Si vous n'ajoutez pas une réaction à temps, vous serrez mis absent pour la moitié du créneau**")
        .setFooter("J4RVIS", "attachment://Logo_j4rvis.png");

      channel_appel.send("@everyone Appel !").then((msg) => {
        msg.delete({ timeout: 600000 });
      });

      list_channels.forEach((channel) => {
        channel.send(`Appel lancé ! => ${channel_appel}`);
      });

      channel_appel.send({ embed: sEmbed }).then(async (msg) => {
        await msg.react(presentEmoji);

        await bot.on("messageReactionAdd", (reaction, user) => {
          if (!user.bot && reaction.emoji.name === "✅") {
            const membre = message.guild.members.cache.get(user.id);

            if (membre.nickname === null || membre.nickname === undefined) {
              presents_arr.push(membre.user.name);
            } else {
              presents_arr.push(membre.nickname);
            }
          }
        });

        setTimeout(function () {
          /*for (var i in presents_arr) {
            presents_str += presents_arr[i].concat("\n");
          }*/

          let away_arr = [""];

          presents_arr = presents_arr.sort();

          message.guild.members.cache.forEach((membre) => {
            if (
              !presents_arr.includes(membre.nickname) &&
              !membre.user.bot &&
              !membre.roles.cache.has(ancien.id) &&
              !membre.roles.cache.has(ressource.id) &&
              !membre.roles.cache.has(moderateur.id) &&
              !membre.roles.cache.has(admin.id)
            ) {
              if (membre.nickname === null || membre.nickname === undefined) {
                away_arr.push(membre.user.tag);
              } else {
                away_arr.push(membre.nickname);
              }
              // membre.roles.cache.forEach((role) => {
              //   membre.roles.remove(role);
              // });
              // membre.roles.add(absent)
            }
          });

          away_arr = away_arr.sort();

          away_arr.forEach((arr) => {
            if (away_str1.length >= 1950) {
              away_str2 += arr.concat("\n");
            } else {
              away_str1 += arr.concat("\n");
            }
          });

          msg.delete();
          channel_appel.send("@everyone L'appel est fini !");
          channel_appel.send(`Les personnes absentes sont : \n${away_str1}`);
          if (away_str2 !== "") {
            channel_appel.send(`${away_str2}`);
          }
        }, 600000);
      });

      // 600000 / 10 minutes

      message.delete();
    } catch (e) {
      console.log(e);
    }
  },
};
