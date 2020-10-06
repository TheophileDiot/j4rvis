const { Client, Collection } = require("discord.js");
const http = require('http');
const express = require('express');
const app = express();
const bot = new Client();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 240000);

["aliases", "commands"].forEach(x => (bot[x] = new Collection()));
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

// bot.login(process.env.BOT_TOKEN);

bot.login("Njk5OTY4NDUzMzA1NDM0MTgy.XpcGbA.JnOS0eR0hAM2RTe1LZml0eLc0Js");