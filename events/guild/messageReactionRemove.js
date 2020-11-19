module.exports = async (bot, messageReaction, user) => {
  try {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);

    const channel_appel = message.guild.channels.cache.get(
      "770994425395806208"
    );
    const channel_log_appel = message.guild.channels.cache.get(
      "778630279135887361"
    );

    if (member.user.bot) return;

    if (message.channel.id === channel_appel.id) {
      if (message.reactions.resolve(messageReaction._emoji.id) === null) {
        if (messageReaction.emoji.name === "✅") {
          channel_log_appel.send(
            `❌ ${member.displayName} a enlevé sa réaction de l'appel!`
          );
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
};
