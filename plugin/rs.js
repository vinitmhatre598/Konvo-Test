const path = require("path");

module.exports = {
  name: "rs",
  usage: "rs",
  desc: "The bot will send a random sticker.",
  eg: ["rs"],
  group: false,
  owner: false,
  handle(Xxxbot) {
    const random = Math.floor(Math.random() * 500);
    const ran =
      path.join(__dirname, "../assets/stickers/allsticker/s (") +
      random +
      ").webp";
    Xxxbot.replysticker(ran);
  },
};
