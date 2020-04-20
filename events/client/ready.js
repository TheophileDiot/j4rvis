module.exports = async bot => {

    const channel = bot.channels.cache.get("700751796808843336").send(":gear: le bot a redémarré !");

    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Sniping trollers", {type: "WATCHING"});

    let statuses = [
        `${bot.guilds.size} servers!`,
        "?help",
        `over ${bot.users.size} users!`
    ]

}
