/**
* @author Zeeshan Altaf
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Zeeshan Altaf",
  description: "Bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [ "Mout ka farishta ya Mera rishta?🙂❤️🙊•", "Wife k sath date pe gya tha \nJis ki thi usne dhek lya", "_ Sab ko loyal bnda chahiye tw hum dhokebaz kidhar jayen? 🥺💔", "WhatsApp k last seen k elwa mera koi or scene nai hai🙂", "Hai Tamna TumhY ChaHt sy Girayn🙂",  "Finally es group kee do teen  larkiya mujH pasanD agai Hai🚶‍♂😪🌚", "میرا دل یہ پکارے آجا پیچھے والے مقام میں 🤝🙂🤞", "Suno👀\n\nKya tum mery leye surf kha kar muu sy bulbly nikal skti ho🙂🫴", "- GhUlabii آنــکھیں jh0 terii dekhii Harami Yevw Dill h0 Gya   3; 🙂 😆", "- مجھــــــے کیـــــا مــــیں تــــو سنــــگل ہــــوں 😒", "Dil ko krar Aya khud pa Pyr aya😒🙈😂", "Ehsaas kryn Bakwas nahi, Janam 🥺Shukria_😊🙆‍♂️", "Bs yar daily 3 4 crore ki zarorat mahsos Hoti hai 😂", "Begum walaw مــــــوســـــم ho rahaw haii aj to 🙂", "Shkl insani, soch ibleesi\n\nHnji apki hee ", "تـــــم میــــری بیگـــــم بنو گی کیا -🥺🖤", "LARKIO KAY BHI MAZAY HAY🥴 \nNO BRAIN NO TNSN⛑🔪⚡", "تمہارے حصے کی چُمیاں مچھر لے رہے ہیں.🙂💔", "Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA..🙂💔", "Wp pa add hona chahty ha apky sath ☺️💔", "- کھاؤ قسم تمہارے پاؤں کالے نہیں۔۔!!👣🙄", "Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔", "Or batao kb ayga tumahara dill mujhe py😌🥺", "bht bura hu na mai? bhiin dedo apnii🙂", "Pyari Pyari ladkiyan Hazir Ho jay😁", "Kisi k pss لاش wali dp h tw send krein janu replY nahi de rhy..!", "MerKo abhi tk pink clr ki gf nh meli 😒🥺🙂💔:⁠-⁠)", "میرے مولا ایک thrkii بچــی yess کروا دے..🙂", "ایک kiss ادهار دے دو 💋\nکل واپس کردوں گا پکّا 😝", "Ajeeb ghr wale hain yr, mera phone 28% pr nikal kr apne 90% ko charge karte 𝐡𝐚𝐢𝐧-🌚" , "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida Hai 😎😂"];
var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "bot 🥺") || (event.body.toLowerCase() == "lovely bot")) {
     return api.sendMessage("G MERY JAN HUKAM KREN NA AP 😘🥀", threadID);
   };

    if ((event.body.toLowerCase() == "botwa") || (event.body.toLowerCase() == "bot bahi")) {
     return api.sendMessage("G JANEMAN 💕 :)", threadID);
   };
   
    if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("LOVE YOU 2 🍼 🐥", threadID);
   };

   if ((event.body.toLowerCase() == "how are you bot ") || (event.body.toLowerCase() == "bot kesy ho")) {
     return api.sendMessage("I AM FINE BOSS WHAT ABOUT YOU ❤️", threadID);
   };
  
   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "kamena bot")) {
     return api.sendMessage("Ap na mujha gali dye mein totaly upset ho geya hon", threadID);
   };

   if ((event.body.toLowerCase() == "zeeshan") || (event.body.toLowerCase() == "zeeshan altaf")) {
     return api.sendMessage("zeeshan altaf is gr8 person , he was my owner", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("Hello dear, ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("ASSLAM O ALIKUM, good morning to ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gud ny8")) {
     return api.sendMessage("ok dear gudny8, have a sweet dreams  ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good afternoon") || (event.body.toLowerCase() == "afternoon")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "thanku") || (event.body.toLowerCase() == "thankx")) {
     return api.sendMessage("welcome janam, my pleasure ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("Hello dear, kesy ho ap ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "bot ❤️") || (event.body.toLowerCase() == "bot 😘")) {
     return api.sendMessage("yes janu kesy yad keya mujha ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot smile") || (event.body.toLowerCase() == "bot smile do na")) {
     return api.sendMessage("kyu tum na mujha apni baji dye hai ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot shetup") || (event.body.toLowerCase() == "dafa ho ja bot")) {
     return api.sendMessage("Aby oye dont again call me dafa ho ja bot tery ma ka gr sa khata hon randi ka bachy", threadID);
   };

   if ((event.body.toLowerCase() == "hi bot") || (event.body.toLowerCase() == "hi BOT")) {
     return api.sendMessage("yes sweetheart ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot owner have brand")) {
     return api.sendMessage("Yes my owner zeeshan altaf is brand", threadID);
   };
   mess = "{what is your name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
       
