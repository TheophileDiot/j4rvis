module.exports = {
  config: {
    name: "infolg",
    description: "Fournie des informations sur l'activité loups_garous",
    usage: "",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["lginfo"]
  },

  run: async (bot, message, args) => {
    
    const channel_groups = message.guild.channels.cache.get("698067740468051979");
    
    message.author.send("Salut ! Tu ne sais pas ce qu'est le jeux du loup-garou ? Laisse moi te passer quelques liens qui pourrait t'aider.\n"
                         + "**Pour WOLFY :\n**"
                        
                         + "Tout d'abord voici le site web sur lequel nous allons faire les parties : https://wolfy.fr\n" 
                         + "Ensuite voici le lien du règlement du jeu : https://wolfy.fr/reglement\n"
                         + "Et enfin quelques informations sur le jeu : https://tinyurl.com/wikipedialg\n"
                         + `Pour finir si tu souhaites savoir comment créer une partie je t'invite a aller sur le salon textuel ${channel_groups} .\n\n`
                        
                        
                         + "**Pour le LG UHC**\n"
                        
                         + "Quelques liens utiles qui vont te servir pour l'installation : \n"
                         + "  - Forge : https://files.minecraftforge.net/\n"
                         + "  - MumbleLink : https://tinyurl.com/y8d8fjq4\n"
                         + "  - Mumble : https://www.mumble.com/\n"
                         + "Et le Tutoriel : https://youtu.be/j2ZEM7RxYK4\n\n"
                        
                        
                         + "**Règles de base du LG UHC**\n"
                        
                         + "Le LG UHC se présente un peu comme une partie de loups-garous classique, à la différence que cela se passe dans Minecraft et que, pour "
                         + "tuer des joueurs, il faut les combattre. Tous les joueurs ont accès, à chaque début de journée, à un vote "
                         + "(similaire aux phases de jour des LG classiques). Le joueur qui prendra le plus de votes aura la moitié de sa vie inaccessible pendant"
                         + "5 minutes. La composition, si elle n'est pas cachée, est indiquée à droite de l'écran. \n"
                         + "Le nombre de personnes ayant un rôle affiché dans les documents ne correspond pas à ce qu'il y aura dans la partie. "
                         + "Il peut aussi ne pas y avoir certains rôles.\n\n"
                        
                         + "Le village : https://pastebin.com/ZqpMgDa7\n"
                         + "Rôles neutres : https://pastebin.com/pchs4qYe\n"
                         + "Les loups-garous : https://pastebin.com/ABiyJcGp (le LG amnésique n'est pas présent dans le plugin)"
                       );
  }
};