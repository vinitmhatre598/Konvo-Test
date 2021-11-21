const path = require("path");
const sql = require(path.join(__dirname, "../utils/ps"));

module.exports = {
  name: "stp",
  usage: "stp",
  desc: "Stops the bot, To restart it you have to login to the bot website.",
  eg: ["stp"],
  group: false,
  owner: true,
  async handle(Xxxbot) {
    await sql.query("update botdata set isconnected = false;");
    setTimeout(() => {
      process.exit(1);
    }, 3000);
    Xxxbot.replytext(Xxxbot.success);
  },
};
