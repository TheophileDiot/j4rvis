const { Client, Collection } = require("discord.js");
const http = require('http');
const express = require('express');
const app = express();
const bot = new Client();
require('dotenv').config();

["aliases", "commands"].forEach(x => (bot[x] = new Collection()));
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(process.env.BOT_TOKEN);