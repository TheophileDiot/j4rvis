module.exports = async (bot, messageReaction, user) => {
  try {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const channel_change = message.guild.channels.cache.get("700683266373582878");
    const channel_log = message.guild.channels.cache.get("761145607846101003");

    if (member.user.bot) return;

    const enAttenteDeRole = message.guild.roles.cache.find(r => r.name === "En_attente_de_rôle");

    const ressource = message.guild.roles.cache.find(r => r.name === "Ressource");

    const jdr = message.guild.roles.cache.find(r => r.name === "JDR");
    const club_tech = message.guild.roles.cache.find(r => r.name === "Club_Tech");
    const esport = message.guild.roles.cache.find(r => r.name === "Esport");
    const final_club_pro = message.guild.roles.cache.find(r => r.name === "Final_Club_Pro");
    const carista_stream = message.guild.roles.cache.find(r => r.name === "CaritaStream");
    const business = message.guild.roles.cache.find(r => r.name === "Business");
    const cafe_philo = message.guild.roles.cache.find(r => r.name === "Café_Philo");
    const jeux_en_ligne = message.guild.roles.cache.find(r => r.name === "Jeux_en_ligne");
    const petanque = message.guild.roles.cache.find(r => r.name === "Pétanque");
    const diapo_expo = message.guild.roles.cache.find(r => r.name === "Diapo_expo");
    const shutdown = message.guild.roles.cache.find(r => r.name === "Shutdown");
    const world_building = message.guild.roles.cache.find(r => r.name === "world_building");
    const orny_photo = message.guild.roles.cache.find(r => r.name === "OrnyPhoto");
    const velo = message.guild.roles.cache.find(r => r.name === "Vélo");
    const sauvons_nos_toilettes = message.guild.roles.cache.find(r => r.name === "Sauvons_nos_toilettes");
    const art_school = message.guild.roles.cache.find(r => r.name === "ArtSchool");

    const modo_jdr = message.guild.roles.cache.find(r => r.name === "Modérateur_JDR");
    const modo_club_tech = message.guild.roles.cache.find(r => r.name === "Modérateur_Club_Tech");
    const modo_esport = message.guild.roles.cache.find(r => r.name === "Modérateur_Esport");
    const modo_final_club_pro = message.guild.roles.cache.find(r => r.name === "Modérateur_Final_Club_Pro");
    const modo_carista_stream = message.guild.roles.cache.find(r => r.name === "Modérateur_CaritaStream");
    const modo_business = message.guild.roles.cache.find(r => r.name === "Modérateur_Business");
    const modo_cafe_philo = message.guild.roles.cache.find(r => r.name === "Modérateur_Café_Philo");
    const modo_jeux_en_ligne = message.guild.roles.cache.find(r => r.name === "Modérateur_Jeux_en_ligne");
    const modo_petanque = message.guild.roles.cache.find(r => r.name === "Modérateur_Pétanque");
    const modo_diapo_expo = message.guild.roles.cache.find(r => r.name === "Modérateur_Diapo_expo");
    const modo_shutdown = message.guild.roles.cache.find(r => r.name === "Modérateur_Shutdown");
    const modo_world_building = message.guild.roles.cache.find(r => r.name === "Modérateur_world_building");
    const modo_orny_photo = message.guild.roles.cache.find(r => r.name === "Modérateur_OrnyPhoto");
    const modo_velo = message.guild.roles.cache.find(r => r.name === "Modérateur_Vélo");
    const modo_sauvons_nos_toilettes = message.guild.roles.cache.find(r => r.name === "Modérateur_Sauvons_nos_toilettes");
    const modo_art_school = message.guild.roles.cache.find(r => r.name === "Modérateur_ArtSchool");

    const moderateur = message.guild.roles.cache.find(r => r.name === "Modérateur");
    const administrateur = message.guild.roles.cache.find(r => r.name === "Administrateur");
    
    const logAdd = "🟢";
    const logTentative = "🟠";

    /*if (!member.roles.cache.has(codingDojo.id)) {

            let nbrmembres = message.guild.roles.cache.get(codingDojo.id).members.map(m=>m);

            if(nbrmembres.length > 13){
              message.channel
                .send(`Vous ne pouvez pas rejoindre l'activité ${codingDojo.name} car la limite en nombre de membres a été atteinte !`)
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });

              await message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);

              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${codingDojo.name} à l'utilisateur ${member.nickname} mais la limite en nombre de membres a été atteinte.`);
            } else {
              globalCheck(bot, codingDojo, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log);
            }
          } else {
              message.channel
                .send(`${member.user} vous avez déjà le rôle ${codingDojo.name}`)
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });

              await message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);

            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${codingDojo.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }
  */

    /*message.channel
                .send(
                  `${member} L'activité ${chillCast.name} est annulée cette semaine.`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });*/

    if (
      ["🐉", "🧑‍💻", "🎮", "montage_video", "📹", "💼", "💭", "🎲", "🏐", "Powerpoint", "👾", "🌍", "🖼", "🚴‍♂️", "🚽", "🎨"].includes(
        messageReaction.emoji.name) && message.channel.id === channel_change.id
    ) {
      switch (messageReaction.emoji.name) {
        case "🐉":
          globalCheck(bot, jdr, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "🧑‍💻":
          globalCheck(bot, club_tech, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "🎮":
          globalCheck(bot, esport, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "montage_video":
          globalCheck(bot, final_club_pro, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "📹":
          globalCheck(bot, carista_stream, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "💼":
          globalCheck(bot, business, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "💭":
          globalCheck(bot, cafe_philo, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;
          
        case "🎲":
          globalCheck(bot, jeux_en_ligne, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "🏐":
          globalCheck(bot, petanque, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "Powerpoint":
          globalCheck(bot, diapo_expo, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "👾":
          globalCheck(bot, shutdown, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "🌍":
          globalCheck(bot, world_building, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "🖼":
          globalCheck(bot, orny_photo, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "🚴‍♂️":
          globalCheck(bot, velo, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "🚽":
          globalCheck(bot, sauvons_nos_toilettes, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;

        case "🎨":
          globalCheck(bot, art_school, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log);

          break;
      }
    } else {
      if (message.channel.id === channel_change.id){
        await message.reactions.resolve(messageReaction.emoji.id).users.remove(member.user);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

function checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log){
  
  const logTentative = "🟠";
  const logDel = "🔴";
  const listRoles = [enAttenteDeRole.name, jdr.name, club_tech.name, esport.name, final_club_pro.name, carista_stream.name, business.name, cafe_philo.name, jeux_en_ligne.name, petanque.name, diapo_expo.name, shutdown.name, world_building.name, orny_photo.name, velo.name, sauvons_nos_toilettes.name, art_school.name];

  if (member.roles.cache.has(modo_jdr.id) || member.roles.cache.has(modo_club_tech.id) || member.roles.cache.has(modo_esport.id) || member.roles.cache.has(modo_final_club_pro.id) || member.roles.cache.has(modo_carista_stream.id) || member.roles.cache.has(modo_business.id) || member.roles.cache.has(modo_cafe_philo.id) || member.roles.cache.has(modo_jeux_en_ligne.id) || member.roles.cache.has(modo_petanque.id) || member.roles.cache.has(modo_diapo_expo.id) || member.roles.cache.has(modo_shutdown.id) || member.roles.cache.has(modo_world_building.id) || member.roles.cache.has(modo_orny_photo.id) || member.roles.cache.has(modo_velo.id) || member.roles.cache.has(modo_sauvons_nos_toilettes.id) || member.roles.cache.has(modo_art_school.id)){
    message.channel.send(
      `${member.user} vous êtes modérateur d'une activité, vous ne pouvez changer d'activité, veuillez contacter un ${moderateur.name} ou un ${administrateur.name} si vous souhaitez que l'on vous destitue de ce rôle.`
    ) .then(msg => {
        msg.delete({ timeout: 5000 });
      });
    
    channel_log.send(`${logTentative} Tentative de suppression de rôles à l'utilisateur ${member.nickname} mais l'utilisateur est déjà modérateur d'une activité.`);
    
    return false;
  }

  member.roles.cache.forEach((role) => {
    if (listRoles.includes(role.name)) {
      member.roles.remove(role);
      channel_log.send(`${logDel} Suppression du rôle ${role.name} à l'utilisateur ${member.nickname}.`);
    }
  });
  
  return true;
}

function checkNickname(member, moderateur, administrateur, ressource){

  if(member.roles.cache.has(moderateur.id) && member.roles.cache.has(administrateur.id) && !member.roles.cache.has(ressource.id)) return true;

  const regex = RegExp("[[]((AG)|(BE)|(DA)|(MO)|(NI)|(PA))]\\s[A-Z]([^\\s]+)\\s[A-Z]+");

  if(member.nickname != null){
    const member_splited = (member.nickname).split(" ");

    if(member_splited[2] !== undefined && member_splited[4] === undefined){
      if(!regex.test(member.nickname)){
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }

  return true;
}

function globalCheck(bot, role, member, message, messageReaction, logTentative, logAdd, moderateur, administrateur, ressource, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log) {
  if (!member.roles.cache.has(role.id)) {
    if (checkNickname(member, moderateur, administrateur, ressource)) {
      if (checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modo_jdr, jdr, modo_club_tech, club_tech, modo_esport, esport, modo_final_club_pro, final_club_pro, modo_carista_stream, carista_stream, modo_business, business, modo_cafe_philo, cafe_philo, modo_jeux_en_ligne, jeux_en_ligne, modo_petanque, petanque, modo_diapo_expo, diapo_expo, modo_shutdown, shutdown, modo_world_building, world_building, modo_orny_photo, orny_photo, modo_velo, velo, modo_sauvons_nos_toilettes, sauvons_nos_toilettes, modo_art_school, art_school, channel_log)){
        member.roles.add(role);

        message.channel
            .send(
                `le rôle ${role.name} a été ajouté à ${member.nickname} avec succès`
            )
            .then(msg => {
              msg.delete({timeout: 2500});
            });

        const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(member.id));

        if (userReactions.size > 1){
          userReactions.forEach((reaction) => {
            if (reaction !== messageReaction) {
              if(message.reactions.resolve(reaction._emoji.id) === null){
                message.reactions.resolve(reaction._emoji.name).users.remove(member.user);
              } else {
                message.reactions.resolve(reaction._emoji.id).users.remove(member.user);
              }
            }
          });
        }

        channel_log.send(`${logAdd} Ajout du rôle ${role.name} à l'utilisateur ${member.nickname}.`);
      }
    } else {
      message.channel
          .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
          .then(msg => {
            msg.delete({timeout: 5000});
          });

      message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);

      channel_log.send(`${logTentative} Tentative d'ajout du rôle ${sport.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
    }
  } else {
    message.channel
        .send(`${member.user} vous avez déjà le rôle ${role.name}`)
        .then(msg => {
          msg.delete({timeout: 2500});
        });

    message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);

    channel_log.send(`${logTentative} Tentative d'ajout du rôle ${role.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
  }
}