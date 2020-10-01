const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../botconfig.json");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");
const { yellow_j4rvis } = require("../../colours.json");

module.exports = {
  config: {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "(commande)",
    category: "miscellaneous",
    description: "Affiche toutes les commandes que le bot a.",
    accessableby: "Membres"
  },

  run: async (bot, message, args) => {
    message.delete();

    const embed = new MessageEmbed()
      .setColor(yellow_j4rvis)
      .attachFiles(['./Photos/Logo_INTECH_Activites_a_la_carte.png'])
      .setThumbnail('attachment://Logo_INTECH_Activites_a_la_carte.png')
      .setAuthor(`${message.guild.name}`, 'attachment://Logo_INTECH_Activites_a_la_carte.png');

    if (!args[0]) {
      const categories = readdirSync("./commands/");

      embed.setDescription(
        `Voici les commandes disponibles pour ${message.guild.me.displayName}\nLe préfix du bot est: **${prefix}**`
      );
      
      // embed.setFooter(
        // 'attachment://Logo_INTECH_Activites_a_la_carte.png', `Nombre de commandes: ${bot.commands.size}`, 'attachment://Logo_j4rvis.png'
      // );

      categories.forEach(category => {
        const dir = bot.commands.filter(c => c.config.category === category);
        const capitalise =
          category.slice(0, 1).toUpperCase() + category.slice(1);
        try {
          embed.addField(
            `❯ ${capitalise} [${dir.size}]:`,
            dir.map(c => `\`${c.config.name}\``).join(" ")
          );
        } catch (e) {
          if (e instanceof RangeError) {
          } else {
            console.log(e);
          }
        }
      });

      return message.channel.send(embed);
    } else {
      let command = bot.commands.get(
        bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase()
      );
      if (!command)
        return message.channel.send(
          embed
            .setTitle("Commande invalide.")
            .setDescription(
              `Ecrivez \`${prefix}help\` pour avoir la liste des commandes.`
            )
        );
      command = command.config;

      embed.setDescription(stripIndents`Le préfix du bot est: \`${prefix}\`\n
            **Commande:** ${command.name.slice(0, 1).toUpperCase() +
              command.name.slice(1)}
            **Description:** ${command.description || "Pas de description."}
            **Usage:** ${
              command.usage
                ? `\`${prefix}${command.name} ${command.usage}\``
                : "Pas d'usage"
            }
            **Accessible par:** ${command.accessableby || "Membres"}
            **Aliases:** ${
              command.aliases ? command.aliases.join(", ") : "Aucun."
            }`);

      return message.channel.send(embed);
    }
  }
};
