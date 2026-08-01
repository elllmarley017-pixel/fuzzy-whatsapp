const fs = require("fs");

global.owner = "6281214774902";
global.namaOwner = "HanzTenzu";
global.prefix = ".";
global.botName = "hybrid-AI";
global.pairingNumber = "6285167570216";

global.idSaluran = "120363402625644245@newsletter";
global.namaSaluran = "Powered by TenzuRevols";
global.linkSaluran = "https://whatsapp.com/channel/0029VbBouHp0rGiGXagM0f2e";
global.thumbnailmenu = "https://img2.pixhost.to/images/8140/730305192_image.jpg";
global.paymentImage = "https://files.catbox.moe/z3pr3c.png";
global.dana = "089691596048";
global.gopay = "0895393210176";
global.ovo = "-";

global.mess = {
  owner: "Fitur ini hanya bisa digunakan oleh *Owner Bot*.",
  premium: "Fitur ini hanya bisa digunakan oleh *User Premium*.",
  group: "Fitur ini hanya dapat digunakan di dalam grup.",
  private: "Fitur ini hanya dapat digunakan di private chat.",
  admin: "Fitur ini hanya bisa digunakan oleh admin grup.",
  botadmin: "Fitur ini hanya dapat digunakan jika bot adalah admin grup.",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  delete require.cache[file];
  require(file);
});