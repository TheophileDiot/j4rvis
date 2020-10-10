module.exports = {
  config: {
    name: "flushroles",
    description:
      "Supprime tous les rôles d'activité de tous les utilisateurs - sauf pour les modérateurs des activités et les modérateurs du serveur",
    usage: "",
    category: "moderation",
    accessableby: "Modérateur",
    aliases: ["flush", "reset", "resetroles", "flushrôles", "resetrôles"]
  },

  run: async (bot, message) => {

    const moderateur = message.guild.roles.cache.find(r => r.name === "Modérateur");
    
    if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
      return message.channel.send(
        "Vous ne pouvez pas utiliser cette commande!"
      );

    const enAttenteDeRole = message.guild.roles.cache.find(r => r.name === "En_attente_de_rôle");
    
    const ressource = message.guild.roles.cache.find(r => r.name === "Ressource");
    const ancien = message.guild.roles.cache.find(r => r.name === "Ancien");

    const jdr = message.guild.roles.cache.find(r => r.name === "JDR");
    const club_tech = message.guild.roles.cache.find(r => r.name === "Club_Tech");
    const esport = message.guild.roles.cache.find(r => r.name === "Esport");
    const final_club_pro = message.guild.roles.cache.find(r => r.name === "Final_Club_Pro");
    const business = message.guild.roles.cache.find(r => r.name === "Business");
    const cafe_philo = message.guild.roles.cache.find(r => r.name === "Café_Philo");
    const jeux_de_societe_en_ligne = message.guild.roles.cache.find(r => r.name === "Jeux_de_société_en_ligne");
    const organisation_tournois_sportif = message.guild.roles.cache.find(r => r.name === "Organisation_tournois_sportif");
    const diapo_expo = message.guild.roles.cache.find(r => r.name === "Diapo_expo");
    const world_building = message.guild.roles.cache.find(r => r.name === "world_building");
    const velo = message.guild.roles.cache.find(r => r.name === "Vélo");
    const magic = message.guild.roles.cache.find(r => r.name === "Magic");
    const poker = message.guild.roles.cache.find(r => r.name === "Poker");
    const lecture = message.guild.roles.cache.find(r => r.name === "Lecture");
    const cine_club = message.guild.roles.cache.find(r => r.name === "Ciné_club");
    const journal_intech = message.guild.roles.cache.find(r => r.name === "Journal_d'intech");
    const batisseur = message.guild.roles.cache.find(r => r.name === "Batisseur");
    const bde = message.guild.roles.cache.find(r => r.name === "BDE");

    const modo_jdr = message.guild.roles.cache.find(r => r.name === "Modérateur_JDR");
    const modo_club_tech = message.guild.roles.cache.find(r => r.name === "Modérateur_Club_Tech");
    const modo_esport = message.guild.roles.cache.find(r => r.name === "Modérateur_Esport");
    const modo_final_club_pro = message.guild.roles.cache.find(r => r.name === "Modérateur_Final_Club_Pro");
    const modo_business = message.guild.roles.cache.find(r => r.name === "Modérateur_Business");
    const modo_cafe_philo = message.guild.roles.cache.find(r => r.name === "Modérateur_Café_Philo");
    const modo_jeux_de_societe_en_ligne = message.guild.roles.cache.find(r => r.name === "Modérateur_Jeux_de_société_en_ligne");
    const modo_organisation_tournois_sportif = message.guild.roles.cache.find(r => r.name === "Modérateur_Organisation_tournois_sportif");
    const modo_diapo_expo = message.guild.roles.cache.find(r => r.name === "Modérateur_Diapo_expo");
    const modo_world_building = message.guild.roles.cache.find(r => r.name === "Modérateur_world_building");
    const modo_velo = message.guild.roles.cache.find(r => r.name === "Modérateur_Vélo");
    const modo_magic = message.guild.roles.cache.find(r => r.name === "Modérateur_Magic");
    const modo_poker = message.guild.roles.cache.find(r => r.name === "Modérateur_Poker");
    const modo_lecture = message.guild.roles.cache.find(r => r.name === "Modérateur_Lecture");
    const modo_cine_club = message.guild.roles.cache.find(r => r.name === "Modérateur_Ciné_club");
    const modo_journal_intech = message.guild.roles.cache.find(r => r.name === "Modérateur_Journal_d'intech");
    const modo_batisseur = message.guild.roles.cache.find(r => r.name === "Modérateur_Batisseur");
    const modo_bde = message.guild.roles.cache.find(r => r.name === "Modérateur_BDE");

    const listRoles = [jdr.name, club_tech.name, esport.name, final_club_pro.name, business.name, cafe_philo.name, jeux_de_societe_en_ligne.name, organisation_tournois_sportif.name, diapo_expo.name, world_building.name, velo.name, magic, poker.name, lecture.name, cine_club.name, journal_intech.name, batisseur.name, bde.name];

    try {
      message.guild.members.cache.forEach((member) => {
        if (
          !member.user.bot &&
          !member.roles.cache.has(ressource.id) &&
          !member.roles.cache.has(ancien.id) &&
          !member.roles.cache.has(modo_jdr.id) &&
          !member.roles.cache.has(modo_club_tech.id) &&
          !member.roles.cache.has(modo_esport.id) &&
          !member.roles.cache.has(modo_final_club_pro.id) &&
          !member.roles.cache.has(modo_business.id) &&
          !member.roles.cache.has(modo_cafe_philo.id) &&
          !member.roles.cache.has(modo_jeux_de_societe_en_ligne.id) &&
          !member.roles.cache.has(modo_organisation_tournois_sportif.id) &&
          !member.roles.cache.has(modo_diapo_expo.id) &&
          !member.roles.cache.has(modo_world_building.id) &&
          !member.roles.cache.has(modo_velo.id) &&
          !member.roles.cache.has(modo_magic.id) &&
          !member.roles.cache.has(modo_poker.id) &&
          !member.roles.cache.has(modo_lecture.id) &&
          !member.roles.cache.has(modo_cine_club.id) &&
          !member.roles.cache.has(modo_journal_intech.id) &&
          !member.roles.cache.has(modo_batisseur.id) &&
          !member.roles.cache.has(modo_bde.id)
        ) {

          member.roles.cache.forEach((role) => {
            if (listRoles.includes(role.name)) {
              member.roles.remove(role);
            }
          });
          
          member.roles.add(enAttenteDeRole);
        }
      });

      message.delete();
      
    } catch (e) {
      console.log(e);
    }
  }
};
