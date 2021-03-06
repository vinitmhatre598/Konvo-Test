const http = require("http");

module.exports = {
  name: "groupinfo",
  usage: "groupinfo",
  desc: "Provides all the information about setting of the group.",
  eg: ["groupinfo"],
  group: true,
  owner: false,
  async handle(Xxxbot) {
    const grpdata =
      "\n๐ฎ *Title* : " +
      "*" +
      Xxxbot.groupMetadata.subject +
      "*" +
      "\n\n๐ *Member* : " +
      "```" +
      Xxxbot.groupMetadata.participants.length +
      "```" +
      "\n๐ *Admins*  : " +
      "```" +
      Xxxbot.groupAdmins.length +
      "```" +
      "\n๐ *Prefix*      : " +
      "```" +
      Xxxbot.groupdata.prefix +
      "```" +
      "\n๐ก *Useprefix*        : " +
      "```" +
      Xxxbot.groupdata.useprefix +
      "```" +
      "\n๐ถ *Autosticker*    : " +
      "```" +
      Xxxbot.groupdata.autosticker +
      "```" +
      "\n๐ค *Botaccess*      : " +
      "```" +
      Xxxbot.groupdata.membercanusebot +
      "```" +
      "\n๐ *Filterabuse*     : " +
      "```" +
      Xxxbot.groupdata.allowabuse +
      "```" +
      "\nโ ๏ธ *NSFW detect*  : " +
      "```" +
      Xxxbot.groupdata.nsfw +
      "```" +
      "\n๐ซ *Credits used*  : " +
      "```" +
      Xxxbot.groupdata.totalmsgtoday +
      "```" +
      "\n๐งถ *Total credits*  : " +
      "```" +
      Xxxbot.botdata.dailygrouplimit +
      "```" +
      "\n๐จ *Banned users* : " +
      "```" +
      (Number(Xxxbot.groupdata.banned_users.length) - 1) +
      "```\n";

    try {
      const ppUrl = await Xxxbot.client.getProfilePicture(from);
      ran = getRandom(".jpeg");
      const file = fs.createWriteStream(ran);
      http.get(ppUrl, function (response) {
        response.pipe(file);
        file.on("finish", function () {
          file.close(async () => {
            await Xxxbot.replyimage(ran, grpdata);
            fs.unlinkSync(ran);
          });
        });
      });
    } catch (error) {
      Xxxbot.replytext(grpdata);
    }
  },
};
