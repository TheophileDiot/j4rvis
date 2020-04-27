module.exports = {
  config: {
    name: "infolgwolfy",
    description: "Fournie des informations sur l'activité loups_garous WOLFY",
    usage: "",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["lginfowolfy","wolfyinfo","infowolfy"]
  },

  run: async (bot, message, args) => {
    
    const channel_groups = message.guild.channels.cache.get("698067740468051979");
    
    try {
      
      message.author.send("Salut ! Tu ne sais pas ce qu'est le jeux du loup-garou ? Laisse moi te passer quelques liens qui pourrait t'aider.\n\n"
                           
                          + "**Pour WOLFY :\n**"

                           + "Tout d'abord voici le site web sur lequel nous allons faire les parties : https://wolfy.fr\n" 
                           + "Ensuite voici le lien du règlement du jeu : https://wolfy.fr/reglement\n"
                           + "Et enfin quelques informations sur le jeu : https://tinyurl.com/wikipedialg\n"
                           + `Pour finir si tu souhaites savoir comment créer une partie je t'invite a aller sur le salon textuel ${channel_groups}.`
      );
      
    } catch(e){
      console.log(e);
    } finally{
      message.delete();
    }
    
  }
};