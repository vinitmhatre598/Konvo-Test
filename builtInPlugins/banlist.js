module.exports = {
  name: "banlist",
  usage: "banlist",
  desc: "Displays the list of members banned from using the bot in this group.",
  eg: ["banlist"],
  group: true,
  owner: false,
  async handle(Xxxbot) {
    const bannedlist = Xxxbot.groupdata.banned_users;
    if (bannedlist.length == 1) {
      Xxxbot.replytext("š¤ *No users banned*");
    } else {
      let msg = "š¤ *Users banned:*\n";
      bannedlist.shift();
      bannedlist.forEach((currentItem) => {
        msg += "\nšØ " + currentItem;
      });
      Xxxbot.replytext(msg);
    }
  },
};
