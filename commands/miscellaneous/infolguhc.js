module.exports = {
  config: {
    name: "infolguhc",
    description: "Fournie des informations sur l'activité loups_garous UHC",
    usage: "",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["lginfouhc","infouhc","uhcinfo"]
  },

  run: async (bot, message, args) => {
    
    const channel_groups = message.guild.channels.cache.get("698067740468051979");
    
    try {
      
      message.author.send("**Pour le LG UHC**\n\n"

                           + "Quelques liens utiles qui vont te servir pour l'installation : \n"
                           + "  - Forge : https://files.minecraftforge.net/\n"
                           + "  - MumbleLink : https://tinyurl.com/y8d8fjq4\n"
                           + "  - Mumble : https://www.mumble.com/\n"
                           + "Et le Tutoriel : https://youtu.be/j2ZEM7RxYK4\n\n"
                           
                          + "**Règles de base du LG UHC 1.8.9**\n"

                           + "Le LG UHC se présente un peu comme une partie de loups-garous classique, à la différence que cela se passe dans Minecraft et que, pour "
                           + "tuer des joueurs, il faut les combattre. Tous les joueurs ont accès, à chaque début de journée, à un vote "
                           + "(similaire aux phases de jour des LG classiques). Le joueur qui prendra le plus de votes aura la moitié de sa vie inaccessible pendant"
                           + "5 minutes. La composition, si elle n'est pas cachée, est indiquée à droite de l'écran. \n"
                           + "Le nombre de personnes ayant un rôle affiché dans les documents ne correspond pas à ce qu'il y aura dans la partie. "
                           + "Il peut aussi ne pas y avoir certains rôles.\n\n"

                           + "Le village : https://pastebin.com/ZqpMgDa7\n"
                           + "Rôles neutres : https://pastebin.com/pchs4qYe\n"
                           + "Les loups-garous : https://pastebin.com/ABiyJcGp (le LG amnésique n'est pas présent dans le plugin)\n\n"
                          
                           + "**Infos complémentaires : **\n"
                           + "IP du serveur Mumble : \`endertech.fr\` (le modificateur de voix est fortement déconseillé)\n"
                           + "IP du serveur Minecraft (LG UHC) : \`endertech.fr:15501\`\n"
                           + "Mods autorisés : OptiFine, ToggleSneak, Armon Status, n'importe quel mod de minimap sans grottes. Pour plus de questions mentionnez ***Mathias Hamrol*** dans #chat-lg\n"
                           + "L'idéal serait que vous respectiez cette règle de nommage comme pseudo sur le serveur Mumble => prenom_NOM (vous pouvez aussi le mettre en commentaire)"
      );
      
    } catch(e){
      console.log(e);
    } finally{
      message.delete();
    }
    
  }
};