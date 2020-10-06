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
    const carista_stream = message.guild.roles.cache.find(r => r.name === "CaritaStream");
    const business = message.guild.roles.cache.find(r => r.name === "Business");
    const cafe_philo = message.guild.roles.cache.find(r => r.name === "Café_Philo");
    const jeux_de_societe_en_ligne = message.guild.roles.cache.find(r => r.name === "Jeux_de_société_en_ligne");
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
    const modo_jeux_de_societe_en_ligne = message.guild.roles.cache.find(r => r.name === "Modérateur_Jeux_de_société_en_ligne");
    const modo_petanque = message.guild.roles.cache.find(r => r.name === "Modérateur_Pétanque");
    const modo_diapo_expo = message.guild.roles.cache.find(r => r.name === "Modérateur_Diapo_expo");
    const modo_shutdown = message.guild.roles.cache.find(r => r.name === "Modérateur_Shutdown");
    const modo_world_building = message.guild.roles.cache.find(r => r.name === "Modérateur_world_building");
    const modo_orny_photo = message.guild.roles.cache.find(r => r.name === "Modérateur_OrnyPhoto");
    const modo_velo = message.guild.roles.cache.find(r => r.name === "Modérateur_Vélo");
    const modo_sauvons_nos_toilettes = message.guild.roles.cache.find(r => r.name === "Modérateur_Sauvons_nos_toilettes");
    const modo_art_school = message.guild.roles.cache.find(r => r.name === "Modérateur_ArtSchool");

    const listRoles = [jdr.name, club_tech.name, esport.name, final_club_pro.name, carista_stream.name, business.name, cafe_philo.name, jeux_de_societe_en_ligne.name, petanque.name, diapo_expo.name, shutdown.name, world_building.name, orny_photo.name, velo.name, sauvons_nos_toilettes.name, art_school.name];

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
          !member.roles.cache.has(modo_carista_stream.id) &&
          !member.roles.cache.has(modo_business.id) &&
          !member.roles.cache.has(modo_cafe_philo.id) &&
          !member.roles.cache.has(modo_jeux_de_societe_en_ligne.id) &&
          !member.roles.cache.has(modo_petanque.id) &&
          !member.roles.cache.has(modo_diapo_expo.id) &&
          !member.roles.cache.has(modo_shutdown.id) &&
          !member.roles.cache.has(modo_world_building.id) &&
          !member.roles.cache.has(modo_orny_photo.id) &&
          !member.roles.cache.has(modo_velo.id) &&
          !member.roles.cache.has(modo_diapo_expo.id) &&
          !member.roles.cache.has(modo_sauvons_nos_toilettes.id)  &&
          !member.roles.cache.has(modo_art_school.id)
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
