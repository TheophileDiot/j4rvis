module.exports = async (bot, messageReaction, user) => {
  try {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const channel_change = message.guild.channels.cache.get("700683266373582878");
    const channel_log = message.guild.channels.cache.get("715825298704302080");
    //const channel_test = message.guild.channels.cache.get("700751796808843336");

    if (member.user.bot) return;

    const enAttenteDeRole = message.guild.roles.cache.find(r => r.name == "En_attente_de_rôle");

    const loupsGarous = message.guild.roles.cache.find(r => r.name == "Loups_garous");
    //const revision = message.guild.roles.cache.find(r => r.name == "Révision");
    const sport = message.guild.roles.cache.find(r => r.name == "Sport");
    const cinema = message.guild.roles.cache.find(r => r.name == "Cinéma");
    const cycle = message.guild.roles.cache.find(r => r.name == "Cycle");
    const jdr = message.guild.roles.cache.find(r => r.name == "JDR");
    const codingDojo = message.guild.roles.cache.find(r => r.name == "Coding_Dojo");
    const graphisme = message.guild.roles.cache.find(r => r.name == "Graphisme");
    const chillCast = message.guild.roles.cache.find(r => r.name == "ChillCast");
    const analyseVideo = message.guild.roles.cache.find(r => r.name == "Analyse_Vidéo");
    const risk = message.guild.roles.cache.find(r => r.name == "Risk");

    const modoLoupsGarous = message.guild.roles.cache.find(r => r.name == "Modérateur_Loups_garous");
    const modoSport = message.guild.roles.cache.find(r => r.name == "Modérateur_Sport");
    const modoCinema = message.guild.roles.cache.find(r => r.name == "Modérateur_Cinéma");
    const modoCycle = message.guild.roles.cache.find(r => r.name == "Modérateur_Cycle");
    const modoJdr = message.guild.roles.cache.find(r => r.name == "Modérateur_JDR");
    const modoCodingDojo = message.guild.roles.cache.find(r => r.name == "Modérateur_Coding_Dojo");
    const modoGraphisme = message.guild.roles.cache.find(r => r.name == "Modérateur_Graphisme");
    const modoChillCast = message.guild.roles.cache.find(r => r.name == "Modérateur_ChillCast");
    const modoAnalyseVideo = message.guild.roles.cache.find(r => r.name == "Modérateur_Analyse_Vidéo");
    const modoRisk = message.guild.roles.cache.find(r => r.name == "Modérateur_Risk");

    const moderateur = message.guild.roles.cache.find(r => r.name == "Modérateur");
    const administrateur = message.guild.roles.cache.find(r => r.name == "Administrateur");
    
    const logAdd = "🟢";
    const logTentative = "🟠";

    /*console.log("content loupsGarous : ", loupsGarous);
        console.log("content cinema : ", cinema);
        console.log("content jdr : ", jdr);*/
    
    if (
      ["🐺" /*, "📖"*/, "💪", "🎦", "🃏", "🐉", "👨‍💻", "✏️", "CHILLCAST", "📼", "⚔️"].includes(
        messageReaction.emoji.name
      ) &&
      message.channel.id ===
        channel_change.id /* ||
        message.channel.id === channel_test.id*/
    ) {
      switch (messageReaction.emoji.name) {
        case "🐺":
          
          if (!member.roles.cache.has(loupsGarous.id)) {
            if(checkNickname(member, moderateur, administrateur)){
              if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
                member.roles.add(loupsGarous);
  
                message.channel
                  .send(
                    `le rôle ${loupsGarous.name} a été ajouté à ${member.nickname} avec succès`
                  )
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                
                channel_log.send(`${logAdd} Ajout du rôle ${loupsGarous.name} à l'utilisateur ${member.nickname}.`);
              }
            } else {
              message.channel
                .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                  .then(msg => {
                    msg.delete({ timeout: 5000 });
                  });
              
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${sport.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
            }
          } else {
            message.channel
                .send(`${member.user} vous avez déjà le rôle ${loupsGarous.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${loupsGarous.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }
          

          break;

        /*case "📖":
          if (!member.roles.cache.has(revision.id)) {
            if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
              member.roles.add(revision);

              message.channel
                .send(
                  `le rôle ${revision.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${revision.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
                
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
          }

          break;*/

        case "💪":
          
          if (!member.roles.cache.has(sport.id)) {
            if(checkNickname(member, moderateur, administrateur)){
              if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
                member.roles.add(sport);
  
                message.channel
                  .send(
                    `le rôle ${sport.name} a été ajouté à ${member.nickname} avec succès`
                  )
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                
                channel_log.send(`${logAdd} Ajout du rôle ${sport.name} à l'utilisateur ${member.nickname}.`);
              }
            } else {
              message.channel
                .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                  .then(msg => {
                    msg.delete({ timeout: 5000 });
                  });
              
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${sport.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
            }
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${sport.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${sport.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }

          break;

        case "🎦":
          
          if (!member.roles.cache.has(cinema.id)) {
            if(checkNickname(member, moderateur, administrateur)){
              if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
                member.roles.add(cinema);
  
                message.channel
                  .send(
                    `le rôle ${cinema.name} a été ajouté à ${member.nickname} avec succès`
                  )
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                
                channel_log.send(`${logAdd} Ajout du rôle ${cinema.name} à l'utilisateur ${member.nickname}.`);
              }
            } else {
              message.channel
                .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                  .then(msg => {
                    msg.delete({ timeout: 5000 });
                  });
              
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${cinema.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
            }
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${cinema.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${cinema.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }

          break;

        case "🃏":
          
          if (!member.roles.cache.has(cycle.id)) {
            if(checkNickname(member, moderateur, administrateur)){
              if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
                member.roles.add(cycle);
  
                message.channel
                  .send(
                    `le rôle ${cycle.name} a été ajouté à ${member.nickname} avec succès`
                  )
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                
                channel_log.send(`${logAdd} Ajout du rôle ${cycle.name} à l'utilisateur ${member.nickname}.`);
              }
            } else {
              message.channel
                .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                  .then(msg => {
                    msg.delete({ timeout: 5000 });
                  });
              
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${cycle.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
            }
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${cycle.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${cycle.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }

          break;

        case "🐉":
          
          if (!member.roles.cache.has(jdr.id)) {
            
            var nbrmembres = message.guild.roles.cache.get(jdr.id).members.map(m=>m);
            
            if(nbrmembres.length > 8){
              message.channel
                  .send(`Vous ne pouvez pas rejoindre l'activité ${jdr.name} car la limite en nombre de membres a été atteinte !`)
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${jdr.name} à l'utilisateur ${member.nickname} mais la limite en nombre de membres a été atteinte.`);
            } else {
              if(checkNickname(member, moderateur, administrateur)){
                if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){

                  member.roles.add(jdr);
  
                  message.channel
                    .send(
                      `le rôle ${jdr.name} a été ajouté à ${member.nickname} avec succès`
                    )
                    .then(msg => {
                      msg.delete({ timeout: 2500 });
                    });
                  
                  channel_log.send(`${logAdd} Ajout du rôle ${jdr.name} à l'utilisateur ${member.nickname}.`);
                
                }
              } else {
                message.channel
                  .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                    .then(msg => {
                      msg.delete({ timeout: 5000 });
                    });
                
                message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
                
                channel_log.send(`${logTentative} Tentative d'ajout du rôle ${jdr.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
              }
            } 
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${jdr.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${jdr.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }

          break;

        case "👨‍💻":

          /*message.channel
                .send(
                  `${member} L'activité ${codingDojo.name} est annulée cette semaine.`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });*/
          
          if (!member.roles.cache.has(codingDojo.id)) {
            
            var nbrmembres = message.guild.roles.cache.get(codingDojo.id).members.map(m=>m);
            
            if(nbrmembres.length > 13){
              message.channel
                .send(`Vous ne pouvez pas rejoindre l'activité ${codingDojo.name} car la limite en nombre de membres a été atteinte !`)
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });

              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${codingDojo.name} à l'utilisateur ${member.nickname} mais la limite en nombre de membres a été atteinte.`);
            } else {
              if(checkNickname(member, moderateur, administrateur)){
                if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
              
                  member.roles.add(codingDojo);
  
                  message.channel
                    .send(
                      `le rôle ${codingDojo.name} a été ajouté à ${member.nickname} avec succès`
                    )
                    .then(msg => {
                      msg.delete({ timeout: 2500 });
                    });
                  
                  channel_log.send(`${logAdd} Ajout du rôle ${codingDojo.name} à l'utilisateur ${member.nickname}.`);
                }
              } else {
                message.channel
                  .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                    .then(msg => {
                      msg.delete({ timeout: 5000 });
                    });
                
                message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
                
                channel_log.send(`${logTentative} Tentative d'ajout du rôle ${codingDojo.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
              }
            }
          } else {
              message.channel
                .send(`${member.user} vous avez déjà le rôle ${codingDojo.name}`)
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });

              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${codingDojo.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }
          
        break;

        case "✏️":
          
          if (!member.roles.cache.has(graphisme.id)) {
            if(checkNickname(member, moderateur, administrateur)){
              if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
                member.roles.add(graphisme);
  
                message.channel
                  .send(
                    `le rôle ${graphisme.name} a été ajouté à ${member.nickname} avec succès`
                  )
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                
                channel_log.send(`${logAdd} Ajout du rôle ${graphisme.name} à l'utilisateur ${member.nickname}.`);
              }
            } else {
              message.channel
                .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                  .then(msg => {
                    msg.delete({ timeout: 5000 });
                  });
              
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${graphisme.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
            }
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${graphisme.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${graphisme.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }

          break;
          
        case "CHILLCAST":
          
          /*message.channel
                .send(
                  `${member} L'activité ${chillCast.name} est annulée cette semaine.`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });*/
          
          if (!member.roles.cache.has(chillCast.id)) {
            if(checkNickname(member, moderateur, administrateur)){
              if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
                member.roles.add(chillCast);
  
                message.channel
                  .send(
                    `le rôle ${chillCast.name} a été ajouté à ${member.nickname} avec succès`
                  )
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                  
                channel_log.send(`${logAdd} Ajout du rôle ${chillCast.name} à l'utilisateur ${member.nickname}.`);
              }
            } else {
              message.channel
                .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                  .then(msg => {
                    msg.delete({ timeout: 5000 });
                  });
              
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${chillCast.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
            }
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${chillCast.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${chillCast.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }

          break;
          
        case "📼":
          
          message.channel
                .send(
                  `${member} L'activité ${analyseVideo.name} est annulée cette semaine.`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
          
          /*if (!member.roles.cache.has(analyseVideo.id)) {
            if(checkNickname(member, moderateur, administrateur)){
              if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
                member.roles.add(analyseVideo);
  
                message.channel
                  .send(
                    `le rôle ${analyseVideo.name} a été ajouté à ${member.nickname} avec succès`
                  )
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                
                channel_log.send(`${logAdd} Ajout du rôle ${analyseVideo.name} à l'utilisateur ${member.nickname}.`);
              }
            } else {
              message.channel
                .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                  .then(msg => {
                    msg.delete({ timeout: 5000 });
                  });
              
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${analyseVideo.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
            }
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${analyseVideo.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
            
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${analyseVideo.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }*/

          break;

        case "⚔️":
          
          if (!member.roles.cache.has(risk.id)) {
            if(checkNickname(member, moderateur, administrateur)){
              if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log)){
                member.roles.add(risk);
    
                message.channel
                  .send(
                    `le rôle ${risk.name} a été ajouté à ${member.nickname} avec succès`
                  )
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
                  
                channel_log.send(`${logAdd} Ajout du rôle ${risk.name} à l'utilisateur ${member.nickname}.`);
              }
            } else {
              message.channel
                .send(`${member.user} vous ne respectez pas les règles de nommage du serveur, veuillez consulter les règles du serveur => ${bot.channels.cache.get('698099907411836949')}`)
                  .then(msg => {
                    msg.delete({ timeout: 5000 });
                  });
              
              message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
              channel_log.send(`${logTentative} Tentative d'ajout du rôle ${risk.name} à l'utilisateur ${member} mais l'utilisateur ne respecte pas les règles de nommage du serveur`);
            }
          } else {
            message.channel
              .send(`${member.user} vous avez déjà le rôle ${risk.name}`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
              
            message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
              
            channel_log.send(`${logTentative} Tentative d'ajout du rôle ${risk.name} à l'utilisateur ${member.nickname} mais l'utilisateur a déjà le rôle.`);
          }
  
          break;
      }
    } else {
      if (message.channel.id === channel_change.id){
        message.reactions.resolve(messageReaction.emoji.name).users.remove(member.user);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

function checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo, modoRisk, risk, channel_log){
  
  const logTentative = "🟠";
  const logDel = "🔴";
  var listRoles = [enAttenteDeRole.name, loupsGarous.name, sport.name, cinema.name, cycle.name, jdr.name, codingDojo.name, graphisme.name, chillCast.name, analyseVideo.name, risk.name];
  
  if (member.roles.cache.has(modoLoupsGarous.id) || member.roles.cache.has(modoSport.id) || member.roles.cache.has(modoCinema.id) || member.roles.cache.has(modoCycle.id) || member.roles.cache.has(modoJdr.id) || member.roles.cache.has(modoCodingDojo.id) || member.roles.cache.has(modoGraphisme.id) || member.roles.cache.has(modoChillCast.id) || member.roles.cache.has(modoAnalyseVideo.id) || member.roles.cache.has(modoRisk.id)){
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

function checkNickname(member, moderateur, administrateur){

  if(member.roles.cache.has(moderateur.id) && member.roles.cache.has(administrateur.id) && !member.roles.cache.has(ressource.id)) return true;

  const regex = RegExp("[[]((AG)|(BE)|(DA)|(MO)|(NI)|(PA))]\\s[A-Z]([^\\s]+)\\s[A-Z]+");

  if(member.nickname != null){
    var member_splited = (member.nickname).split(" ");

    if(member_splited[2] != undefined && member_splited[4] == undefined){
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
