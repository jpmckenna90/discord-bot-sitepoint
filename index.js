require("dotenv").config();
const Discord = require("discord.js");
const express = require("express");
const app = express();
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT || 3030;
// const cron = require("cron");
// const fetch = require("node-fetch");

// const url = "https://young-peak-21891.herokuapp.com/";

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  if (msg.mentions.users.size) {
    if (msg.mentions.users.first().username === "lieDetector") {
      msg.reply(messages[Math.floor(Math.random() * messages.length)]);
    }
  }

  // if(msg.)
});

bot.on("");

const messages = [
  "lol yea",
  "Are you kidding? Of course he is.",
  "idk he might not be...",
  "look at that nose grow damn",
  "call my dude Jim Carrey cause he's a liar liar",
  "does Renly shit in the grass?",
  "If lying is cool, consider him Miles Davis",
  "liar.com/bigfatliar/omgwhataliar",
  "Yeah, and Matt's an asshole",
  "natch",
];

// (() => {
//   const cronJob = cron.CronJob("0 */25 * * * *", () => {
//     fetch(url)
//       .then((res) =>
//         console.log(`response-ok: ${res.ok}, status: ${res.status}`)
//       )
//       .catch((err) => console.log(err));
//   });

//   cronJob.start();
// })();
