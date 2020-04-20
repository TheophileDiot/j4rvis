const { MessageEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");

module.exports = {

    config: {
        name: "removerole",
        description: "Enlève un rôle à un membre du serveur!",
        usage: "(@Mention) (@role) (raison)",
        category: "moderation",
        accessableby: "Moderateur",
        aliases: ["rr", "roleremove"]
    },

    run: async (bot, message, args) => {

        if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Vous ne pouvez pas utiliser cette commande!")

        let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.tag === args[0]) || message.guild.members.cache.get(args[0])
        if(!rMember) return message.channel.send("Veuillez fournir un utilisateur auquel ajouter le rôle.")
        let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
        if(!role) return message.channel.send("Veuillez fournir un rôle à ajouter à l'utilisateur.")
        let reason = args.slice(2).join(" ")
        if(!reason) return message.channel.send("Veuillez fournir une raison")

        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Je n'ai pas l'autorisation d'utiliser cette commande.")

        if(!rMember.roles.cache.has(role.id)) {
            return message.channel.send(`${rMember.displayName}, n'a pas ce rôle!`)
        } else {
            await rMember.roles.remove(role.id).catch(e => console.log(e.message))
            message.channel.send(`Le rôle, ${role.name}, a été retiré de ${rMember.displayName}.`)
            .then(msg => {
              msg.delete({ timeout: 10000 })
            });
        }
    }
}
