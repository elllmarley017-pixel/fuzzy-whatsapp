const fs = require("fs");

global.owner = "628xxxx";
global.namaOwner = "HanzTenzu";
global.prefix = ".";
global.botName = "hybrid-AI";
global.pairingNumber = "628xxx";

global.idSaluran = "1203634xxxx@newsletter";
global.namaSaluran = "Powered by TenzuRevols";
global.linkSaluran = "https://whatsapp.com/channel/xxxx";
global.thumbnailmenu = "https://img2.pixhost.to/images/8140/730305192_image.jpg";
global.paymentImage = "https://files.catbox.moe/z3pr3c.png";
global.dana = "08xxxx";
global.gopay = "08xxxx";
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
