module.exports = {
  config: {
    name: "timer",
    description: "lance un timer",
    usage: "[minutes]'[secondes]",
    category: "miscellaneous",
    accessableby: "Membres",
    aliases: ["time"]
  },

  run: async (bot, message, args) => {
    
    try {

      var tempstt = args.slice(0).join(" ");
      
      if(tempstt.split("'")[1] == null) return message.channel.send("Vous avez mal utilisé la commande ! (faites `?help timer` pour vous aider)")
                                                .then(msg => {
                                                  msg.delete({ timeout: 5000 });
                                                });
      
      if(isNaN(tempstt.split("'")[0])) return message.channel.send("Vous n'avez pas entré un nombre pour les minutes !")
                                                .then(msg => {
                                                  msg.delete({ timeout: 2500 });
                                                });
      
      if(isNaN(tempstt.split("'")[1])) return message.channel.send("Vous n'avez pas entré un nombre pour les secondes !")
                                                .then(msg => {
                                                  msg.delete({ timeout: 2500 });
                                                });
      
      var tempsM = tempstt.split("'")[0];
      
      var tempsS = tempstt.split("'")[1];
      
      if(tempsS > 60) return message.channel.send("Vous avez mis une trop grande valeur pour les millisecondes !")
                              .then(msg => {
                                msg.delete({ timeout: 2500 });
                              });
      
      tempsM = tempsM * 60000;
      tempsS = tempsS * 1000;
      
      if(tempsM == 0){
        message.channel.send(`Lancement d'un timer de ${tempsS / 1000} seconde(s) !`)
        .then(msg => {
          msg.delete({ timeout: (tempsM + tempsS) });
        });
      } else if(tempsS == 0){
        message.channel.send(`Lancement d'un timer de ${tempsM / 60000} minute(s) !`)
        .then(msg => {
          msg.delete({ timeout: (tempsM + tempsS) });
        });
      } else {
        message.channel.send(`Lancement d'un timer de ${tempsM / 60000} minute(s) et ${tempsS / 1000} seconde(s) !`)
        .then(msg => {
          msg.delete({ timeout: (tempsM + tempsS) });
        });
      }
      
      setTimeout(function(){
          
        message.channel.send("@here Le timer est terminé !");
          
      }, (tempsM + tempsS));
      
    } catch(e){
      console.log(e)
    } finally {
      message.delete();
    }
    
  }
};
