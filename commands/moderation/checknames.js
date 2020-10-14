module.exports = {
    config: {
      name: "checknames",
      description: "Vérifie que chacun respecte les règles de nommage du serveur",
      usage: "",
      category: "moderation",
      accessableby: "Moderateurs",
      aliases: ["cn", "namescheck", "checkname"]
    },
  
    run: async (bot, message) => {
      
        const moderateur = message.guild.roles.cache.find(r => r.name === "Modérateur");
        const administrateur = message.guild.roles.cache.find(r => r.name === "Administrateur");
        const ressource = message.guild.roles.cache.find(r => r.name === "Ressource");
    
        if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]) && !message.member.roles.cache.has(moderateur.id))
            return message.channel.send(
                "Vous ne pouvez pas utiliser cette commande!"
            );

        try {

            const regex = new RegExp("[[]((AG)|(BE)|(DA)|(MO)|(NI)|(PA)|(SO))]\\s[A-Z ,.'-]+([^\\s]+)\\s[A-Z ,.'-]+", "g")

            let arr_non_res = [];

            message.guild.members.cache.forEach((member) => {
                if(!member.user.bot){
                    if(!member.roles.cache.has(moderateur.id) && !member.roles.cache.has(administrateur.id) && !member.roles.cache.has(ressource.id)){
                        if(member.nickname != null){

                            const member_splited = (member.nickname).split(" ");

                            if(member_splited[2] !== undefined && member_splited[4] === undefined){
                                if(!regex.test(member.nickname)){
                                    arr_non_res.push(member);
                                }
                            } else {
                                arr_non_res.push(member);
                            }
        
                        } else {
                            arr_non_res.push(member);
                        }
                    }
                    
                }
            });

            arr_non_res = arr_non_res.sort();

            arr_non_res.forEach((arr) => {
                message.channel.send(`${arr} merci de respecter les règles de nommage => ${bot.channels.cache.get('698099907411836949')}`);
            })

        } catch (e) {
            console.log(e);
        } finally {
            message.delete();
        }
      
    }
  };