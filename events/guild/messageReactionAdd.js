module.exports = async (bot, messageReaction, user) => {
  try {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const channel_change = message.guild.channels.cache.get("700683266373582878");
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

    const modoLoupsGarous = message.guild.roles.cache.find(r => r.name == "Modérateur_Loups_garous");
    const modoSport = message.guild.roles.cache.find(r => r.name == "Modérateur_Sport");
    const modoCinema = message.guild.roles.cache.find(r => r.name == "Modérateur_Cinéma");
    const modoCycle = message.guild.roles.cache.find(r => r.name == "Modérateur_Cycle");
    const modoJdr = message.guild.roles.cache.find(r => r.name == "Modérateur_JDR");
    const modoCodingDojo = message.guild.roles.cache.find(r => r.name == "Modérateur_Coding_Dojo");
    const modoGraphisme = message.guild.roles.cache.find(r => r.name == "Modérateur_Graphisme");
    const modoChillCast = message.guild.roles.cache.find(r => r.name == "Modérateur_ChillCast");
    const modoAnalyseVideo = message.guild.roles.cache.find(r => r.name == "Modérateur_Analyse_Vidéo");

    const moderateur = message.guild.roles.cache.find(r => r.name == "Modérateur");
    const administrateur = message.guild.roles.cache.find(r => r.name == "Administrateur");

    /*console.log("content loupsGarous : ", loupsGarous);
        console.log("content cinema : ", cinema);
        console.log("content jdr : ", jdr);*/
    
    if (
      ["🐺" /*, "📖"*/, "💪", "🎦", "🃏", "🐉", "👨‍💻", "✏️", "CHILLCAST", "📼"].includes(
        messageReaction.emoji.name
      ) &&
      message.channel.id ===
        channel_change.id /* ||
        message.channel.id === channel_test.id*/
    ) {
      switch (messageReaction.emoji.name) {
        case "🐺":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(loupsGarous.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(loupsGarous);

              message.channel
                .send(
                  `le rôle ${loupsGarous.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;

        /*case "📖":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(revision.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(revision);

              message.channel
                .send(
                  `le rôle ${revision.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;*/

        case "💪":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(sport.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(sport);

              message.channel
                .send(
                  `le rôle ${sport.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;

        case "🎦":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(cinema.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(cinema);

              message.channel
                .send(
                  `le rôle ${cinema.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;

        case "🃏":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(cycle.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(cycle);

              message.channel
                .send(
                  `le rôle ${cycle.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;

        case "🐉":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(jdr.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(jdr);

              message.channel
                .send(
                  `le rôle ${jdr.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;

        case "👨‍💻":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            var nbrmembres = message.guild.roles.cache.get(codingDojo.id).members.map(m=>m);
            
            if (member.roles.cache.has(codingDojo.id)) {
                message.channel
                  .send(`${member.user} vous avez déjà ce rôle`)
                  .then(msg => {
                    msg.delete({ timeout: 2500 });
                  });
              break;
            } 
            
            if(nbrmembres.length < 13){
              member.roles.add(codingDojo);

              message.channel
                .send(
                  `le rôle ${codingDojo.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              message.channel
                .send(`Vous ne pouvez pas rejoindre l'activité ${codingDojo.name} car la limite en nombre de membres a été atteinte !`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
            
          }

          break;

        case "✏️":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(graphisme.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(graphisme);

              message.channel
                .send(
                  `le rôle ${graphisme.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;
          
        case "CHILLCAST":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(chillCast.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(chillCast);

              message.channel
                .send(
                  `le rôle ${chillCast.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;
          
        case "📼":
          
          if(checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo)){
            if (member.roles.cache.has(analyseVideo.id)) {
              message.channel
                .send(`${member.user} vous avez déjà ce rôle`)
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            } else {
              member.roles.add(analyseVideo);

              message.channel
                .send(
                  `le rôle ${analyseVideo.name} a été ajouté à ${member.nickname} avec succès`
                )
                .then(msg => {
                  msg.delete({ timeout: 2500 });
                });
            }
          }

          break;
      }
    }
  } catch (e) {
    console.log(e);
  }
};

function checkRoles(member, message, administrateur, moderateur, enAttenteDeRole, modoLoupsGarous, loupsGarous, modoSport, sport, modoCinema, cinema, modoCycle, cycle, modoJdr, jdr, modoCodingDojo, codingDojo, modoGraphisme, graphisme, modoChillCast, chillCast, modoAnalyseVideo, analyseVideo){
  
  if (member.roles.cache.has(modoLoupsGarous.id) || member.roles.cache.has(modoSport.id) || member.roles.cache.has(modoCinema.id) || member.roles.cache.has(modoCycle.id) || member.roles.cache.has(modoJdr.id) || member.roles.cache.has(modoCodingDojo.id) || member.roles.cache.has(modoGraphisme.id) || member.roles.cache.has(modoChillCast.id) || member.roles.cache.has(modoAnalyseVideo.id)){
    message.channel.send(
      `${member.user} vous êtes modérateur d'une activité, vous ne pouvez changer d'activité, veuillez contacter un ${moderateur.name} ou un ${administrateur.name} si vous souhaitez que l'on vous destitue de ce rôle.`
    ) .then(msg => {
        msg.delete({ timeout: 5000 });
      });
    
    return false;
  }
  
  if (member.roles.cache.has(enAttenteDeRole.id)) {
    member.roles.remove(enAttenteDeRole);
  }

  /*if (member.roles.cache.has(revision.id)) {
    member.roles.remove(revision);
  }*/

  if (member.roles.cache.has(loupsGarous.id)) {
    member.roles.remove(loupsGarous);
  }
  
  if (member.roles.cache.has(sport.id)) {
    member.roles.remove(sport);
  }

  if (member.roles.cache.has(cinema.id)) {
    member.roles.remove(cinema);
  }

  if (member.roles.cache.has(cycle.id)) {
    member.roles.remove(cycle);
  }

  if (member.roles.cache.has(jdr.id)) {
    member.roles.remove(jdr);
  }

  if (member.roles.cache.has(codingDojo.id)) {
    member.roles.remove(codingDojo);
  }

  if (member.roles.cache.has(graphisme.id)) {
    member.roles.remove(graphisme);
  }
  
  if (member.roles.cache.has(chillCast.id)) {
    member.roles.remove(chillCast);
  }
          
  if (member.roles.cache.has(analyseVideo.id)) {
    member.roles.remove(analyseVideo);
  }
  
  return true;
}