module.exports = async (bot, messageReaction, user) => {
  try {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const channel_change = message.guild.channels.cache.get(
      "700683266373582878"
    );
    const channel_log = message.guild.channels.cache.get("761145607846101003");

    const channel_appel = message.guild.channels.cache.get(
      "770994425395806208"
    );
    const channel_log_appel = message.guild.channels.cache.get(
      "778630279135887361"
    );

    if (member.user.bot) return;

    if (message.channel.id === channel_appel.id) {
      console.log("oui");
      if (message.reactions.resolve(messageReaction._emoji.id) === null) {
        if (messageReaction.emoji.name === "✅") {
          channel_log_appel.send(
            `✅ ${member.displayName} a réagis à l'appel!`
          );
        } else {
          channel_log_appel.send(
            `❌ ${member.displayName} a mal réagis à l'appel! => réactions : ${messageReaction._emoji.name}`
          );
          await message.reactions
            .resolve(messageReaction._emoji.name)
            .users.remove(member.user);
        }
      } else {
        channel_log_appel.send(
          `❌ ${member.displayName} a mal réagis à l'appel! => réactions : ${messageReaction._emoji}`
        );
        await message.reactions
          .resolve(messageReaction._emoji.id)
          .users.remove(member.user);
      }
    }

    if (message.channel.id !== channel_change.id) return;

    const enAttenteDeRole = message.guild.roles.cache.find(
      (r) => r.name === "En_attente_de_rôle"
    );

    const ressource = message.guild.roles.cache.find(
      (r) => r.name === "Ressource"
    );
    const ancien = message.guild.roles.cache.find((r) => r.name === "Ancien");

    const jdr = message.guild.roles.cache.find((r) => r.name === "JDR");
    const club_tech = message.guild.roles.cache.find(
      (r) => r.name === "Club_Tech"
    );
    const esport = message.guild.roles.cache.find((r) => r.name === "Esport");
    const final_club_pro = message.guild.roles.cache.find(
      (r) => r.name === "Final_Club_Pro"
    );
    const business = message.guild.roles.cache.find(
      (r) => r.name === "Business"
    );
    const cafe_philo = message.guild.roles.cache.find(
      (r) => r.name === "Café_Philo"
    );
    const jeux_de_societe_en_ligne = message.guild.roles.cache.find(
      (r) => r.name === "Jeux_de_société_en_ligne"
    );
    const diapo_expo = message.guild.roles.cache.find(
      (r) => r.name === "Diapo_expo"
    );
    const world_building = message.guild.roles.cache.find(
      (r) => r.name === "world_building"
    );
    const velo = message.guild.roles.cache.find((r) => r.name === "Vélo");
    const magic = message.guild.roles.cache.find((r) => r.name === "Magic");
    const poker = message.guild.roles.cache.find((r) => r.name === "Poker");
    const lecture = message.guild.roles.cache.find((r) => r.name === "Lecture");
    const cine_club = message.guild.roles.cache.find(
      (r) => r.name === "Ciné_club"
    );
    const journal_intech = message.guild.roles.cache.find(
      (r) => r.name === "Journal_d'intech"
    );
    const batisseur = message.guild.roles.cache.find(
      (r) => r.name === "Batisseur"
    );
    const bde = message.guild.roles.cache.find((r) => r.name === "BDE");

    const modo_jdr = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_JDR"
    );
    const modo_club_tech = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Club_Tech"
    );
    const modo_esport = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Esport"
    );
    const modo_final_club_pro = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Final_Club_Pro"
    );
    const modo_business = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Business"
    );
    const modo_cafe_philo = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Café_Philo"
    );
    const modo_jeux_de_societe_en_ligne = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Jeux_de_société_en_ligne"
    );
    const modo_diapo_expo = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Diapo_expo"
    );
    const modo_world_building = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_world_building"
    );
    const modo_velo = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Vélo"
    );
    const modo_magic = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Magic"
    );
    const modo_poker = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Poker"
    );
    const modo_lecture = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Lecture"
    );
    const modo_cine_club = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Ciné_club"
    );
    const modo_journal_intech = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Journal_d'intech"
    );
    const modo_batisseur = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_Batisseur"
    );
    const modo_bde = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur_BDE"
    );

    const moderateur = message.guild.roles.cache.find(
      (r) => r.name === "Modérateur"
    );
    const administrateur = message.guild.roles.cache.find(
      (r) => r.name === "Administrateur"
    );

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

    if (member.roles.cache.has(ancien.id)) {
      message.channel
        .send(
          `${member.user} vous êtes un ancien, vous ne pouvez choisir une activité, veuillez contacter un ${moderateur.name} ou un ${administrateur.name} si vous souhaitez que l'on vous destitue de ce rôle.`
        )
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });

      if (message.reactions.resolve(messageReaction._emoji.id) === null) {
        await message.reactions
          .resolve(messageReaction._emoji.name)
          .users.remove(member.user);
      } else {
        await message.reactions
          .resolve(messageReaction._emoji.id)
          .users.remove(member.user);
      }
      channel_log.send(
        `${logTentative} Tentative d'ajout d'un rôle à l'utilisateur ${member.nickname} mais l'utilisateur est un ancien.`
      );
    }

    if (
      [
        "intech",
        "🐉",
        "🧑‍💻",
        "🎮",
        "montage_video",
        "💼",
        "💭",
        "🎲",
        "Powerpoint",
        "🌍",
        "🚴‍♂️",
        "🪄",
        "🃏",
        "📖",
        "🎦",
        "📰",
        "🔨",
      ].includes(messageReaction.emoji.name)
    ) {
      switch (messageReaction.emoji.name) {
        case "intech":
          globalCheck(
            bot,
            bde,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🐉":
          globalCheck(
            bot,
            jdr,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🧑‍💻":
          globalCheck(
            bot,
            club_tech,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🎮":
          globalCheck(
            bot,
            esport,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "montage_video":
          globalCheck(
            bot,
            final_club_pro,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "💼":
          globalCheck(
            bot,
            business,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "💭":
          globalCheck(
            bot,
            cafe_philo,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🎲":
          globalCheck(
            bot,
            jeux_de_societe_en_ligne,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "Powerpoint":
          globalCheck(
            bot,
            diapo_expo,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🌍":
          globalCheck(
            bot,
            world_building,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🖼":
          globalCheck(
            bot,
            orny_photo,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🚴‍♂️":
          globalCheck(
            bot,
            velo,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🪄":
          globalCheck(
            bot,
            magic,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🃏":
          globalCheck(
            bot,
            poker,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "📖":
          globalCheck(
            bot,
            lecture,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🎦":
          globalCheck(
            bot,
            cine_club,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "📰":
          globalCheck(
            bot,
            journal_intech,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;

        case "🔨":
          globalCheck(
            bot,
            batisseur,
            member,
            message,
            messageReaction,
            logTentative,
            logAdd,
            moderateur,
            administrateur,
            ressource,
            enAttenteDeRole,
            modo_jdr,
            jdr,
            modo_club_tech,
            club_tech,
            modo_esport,
            esport,
            modo_final_club_pro,
            final_club_pro,
            modo_business,
            business,
            modo_cafe_philo,
            cafe_philo,
            modo_jeux_de_societe_en_ligne,
            jeux_de_societe_en_ligne,
            modo_diapo_expo,
            diapo_expo,
            modo_world_building,
            world_building,
            modo_velo,
            velo,
            modo_magic,
            magic,
            modo_poker,
            poker,
            modo_lecture,
            lecture,
            modo_cine_club,
            cine_club,
            modo_journal_intech,
            journal_intech,
            modo_batisseur,
            batisseur,
            modo_bde,
            bde,
            channel_log
          );

          break;
      }
    } else {
      if (message.channel.id === channel_change.id) {
        if (message.reactions.resolve(messageReaction._emoji.id) === null) {
          await message.reactions
            .resolve(messageReaction._emoji.name)
            .users.remove(member.user);
        } else {
          await message.reactions
            .resolve(messageReaction._emoji.id)
            .users.remove(member.user);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
};

function checkRoles(
  member,
  message,
  administrateur,
  moderateur,
  enAttenteDeRole,
  modo_jdr,
  jdr,
  modo_club_tech,
  club_tech,
  modo_esport,
  esport,
  modo_final_club_pro,
  final_club_pro,
  modo_business,
  business,
  modo_cafe_philo,
  cafe_philo,
  modo_jeux_de_societe_en_ligne,
  jeux_de_societe_en_ligne,
  modo_diapo_expo,
  diapo_expo,
  modo_world_building,
  world_building,
  modo_velo,
  velo,
  modo_magic,
  magic,
  modo_poker,
  poker,
  modo_lecture,
  lecture,
  modo_cine_club,
  cine_club,
  modo_journal_intech,
  journal_intech,
  modo_batisseur,
  batisseur,
  modo_bde,
  bde,
  channel_log
) {
  const logTentative = "🟠";
  const logDel = "🔴";
  const listRoles = [
    enAttenteDeRole.name,
    jdr.name,
    club_tech.name,
    esport.name,
    final_club_pro.name,
    business.name,
    cafe_philo.name,
    jeux_de_societe_en_ligne.name,
    diapo_expo.name,
    world_building.name,
    velo.name,
    magic.name,
    poker.name,
    lecture.name,
    cine_club.name,
    journal_intech.name,
    batisseur.name,
    bde.name,
  ];
  const listRoles_modo = [
    modo_jdr.name,
    modo_club_tech.name,
    modo_esport.name,
    modo_final_club_pro.name,
    modo_business.name,
    modo_cafe_philo.name,
    modo_jeux_de_societe_en_ligne.name,
    modo_diapo_expo.name,
    modo_world_building.name,
    modo_velo.name,
    modo_magic.name,
    modo_poker.name,
    modo_lecture.name,
    modo_cine_club.name,
    modo_journal_intech.name,
    modo_batisseur.name,
    modo_bde.name,
  ];

  member.roles.cache.forEach((role) => {
    if (listRoles_modo.includes(role.name)) {
      message.channel
        .send(
          `${member.user} vous êtes modérateur d'une activité, vous ne pouvez changer d'activité, veuillez contacter un ${moderateur.name} ou un ${administrateur.name} si vous souhaitez que l'on vous destitue de ce rôle.`
        )
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });

      channel_log.send(
        `${logTentative} Tentative de suppression de rôles à l'utilisateur ${member.nickname} mais l'utilisateur est déjà modérateur d'une activité.`
      );

      return false;
    }
  });

  member.roles.cache.forEach((role) => {
    if (listRoles.includes(role.name)) {
      member.roles.remove(role);
      channel_log.send(
        `${logDel} Suppression du rôle ${role.name} à l'utilisateur ${member.nickname}.`
      );
    }
  });

  return true;
}

function checkNickname(member, moderateur, administrateur, ressource) {
  if (
    member.roles.cache.has(moderateur.id) &&
    member.roles.cache.has(administrateur.id) &&
    !member.roles.cache.has(ressource.id)
  )
    return true;

  const regex = new RegExp(
    "[[]((AG)|(BE)|(DA)|(MO)|(NI)|(PA)|(SO))]\\s[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$",
    "i"
  );

  if (member.nickname != null) {
    if (!regex.test(member.nickname)) {
      return false;
    }
  } else {
    if (!regex.test(member.displayName)) {
      return false;
    }
  }

  return true;
}

function globalCheck(
  bot,
  role,
  member,
  message,
  messageReaction,
  logTentative,
  logAdd,
  moderateur,
  administrateur,
  ressource,
  enAttenteDeRole,
  modo_jdr,
  jdr,
  modo_club_tech,
  club_tech,
  modo_esport,
  esport,
  modo_final_club_pro,
  final_club_pro,
  modo_business,
  business,
  modo_cafe_philo,
  cafe_philo,
  modo_jeux_de_societe_en_ligne,
  jeux_de_societe_en_ligne,
  modo_diapo_expo,
  diapo_expo,
  modo_world_building,
  world_building,
  modo_velo,
  velo,
  modo_magic,
  magic,
  modo_poker,
  poker,
  modo_lecture,
  lecture,
  modo_cine_club,
  cine_club,
  modo_journal_intech,
  journal_intech,
  modo_batisseur,
  batisseur,
  modo_bde,
  bde,
  channel_log
) {
  if (!member.roles.cache.has(role.id)) {
    if (checkNickname(member, moderateur, administrateur, ressource)) {
      if (
        checkRoles(
          member,
          message,
          administrateur,
          moderateur,
          enAttenteDeRole,
          modo_jdr,
          jdr,
          modo_club_tech,
          club_tech,
          modo_esport,
          esport,
          modo_final_club_pro,
          final_club_pro,
          modo_business,
          business,
          modo_cafe_philo,
          cafe_philo,
          modo_jeux_de_societe_en_ligne,
          jeux_de_societe_en_ligne,
          modo_diapo_expo,
          diapo_expo,
          modo_world_building,
          world_building,
          modo_velo,
          velo,
          modo_magic,
          magic,
          modo_poker,
          poker,
          modo_lecture,
          lecture,
          modo_cine_club,
          cine_club,
          modo_journal_intech,
          journal_intech,
          modo_batisseur,
          batisseur,
          modo_bde,
          bde,
          channel_log
        )
      ) {
        member.roles.add(role);

        message.channel
          .send(
            `le rôle ${role.name} a été ajouté à ${member.nickname} avec succès`
          )
          .then((msg) => {
            msg.delete({ timeout: 2500 });
          });

        const userReactions = message.reactions.cache.filter((reaction) =>
          reaction.users.cache.has(member.id)
        );

        if (userReactions.size > 1) {
          userReactions.forEach((reaction) => {
            if (reaction !== messageReaction) {
              if (message.reactions.resolve(reaction._emoji.id) === null) {
                message.reactions
                  .resolve(reaction._emoji.name)
                  .users.remove(member.user);
              } else {
                message.reactions
                  .resolve(reaction._emoji.id)
                  .users.remove(member.user);
              }
            }
          });
        }

        channel_log.send(
          `${logAdd} Ajout du rôle ${role.name} à l'utilisateur ${member.nickname}.`
        );
      }
    } else {
      message.channel
        .send(
          `${
            member.user
          } vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get(
            "698099907411836949"
          )}`
        )
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });

      if (message.reactions.resolve(messageReaction._emoji.id) === null) {
        message.reactions
          .resolve(messageReaction._emoji.name)
          .users.remove(member.user);
      } else {
        message.reactions
          .resolve(messageReaction._emoji.id)
          .users.remove(member.user);
      }

      channel_log.send(
        `${logTentative} Tentative d'ajout d'un rôle à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`
      );
    }
  } else {
    message.channel
      .send(`${member.user} vous avez déjà le rôle ${role.name}`)
      .then((msg) => {
        msg.delete({ timeout: 2500 });
      });

    if (message.reactions.resolve(messageReaction._emoji.id) === null) {
      message.reactions
        .resolve(messageReaction._emoji.name)
        .users.remove(member.user);
    } else {
      message.reactions
        .resolve(messageReaction._emoji.id)
        .users.remove(member.user);
    }

    channel_log.send(
      `${logTentative} Tentative d'ajout du rôle ${role.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`
    );
  }
}
