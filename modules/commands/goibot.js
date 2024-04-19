const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "Bandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯", "Ary Yahin Hon Jan😗", "jiee Shona 😍", "Love you", "Miss YoU NaW Inna sara👌🏻👌🏻", "To mera putar chutti kr", "OkkaY Babbu", "😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "😙Me sabko block karne jarha hon Tumhri waja sy", "Main ap ki ami ko btaou ga ap Facebook use kerty ho 😂", "#__LaLa__LaLa__Lori #__Koi___Chori__Set__Ni__HoRRI" ,"Aj MaiNy DuniYa HiLa DeNy WaLi Research Ki Hai 🙋‍♂️👉 😁😍🥰😋😝😜😎😂 👈In Sb Ki T0o NaK He Nhi Hai 😹😹😹" ,"Bhai Wese Ldki Patane Ka Trick Btao Na Bada Din Ho Gya Single Hu ;🙂" ,"Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)" ,"Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈","𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒" ,"Hye ye Cute Cute DpiYa  Unke peeche'w Chhupii MoTii Kalii AnTiiYa 🙂🍁" ,"Ya Allah MuJ PaR KiSi MaaLL DaR ANti Ka DiL A JaYe 🤌😞♥️" ,"Awj hum hai - kal HumhaRy بچـــــــــے  hOngy agAr Tum maaN jaO 🙂🌼" ,"Lips  kissing is not Romance It's sharing Bacteria>>>🙂" ,"Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂" ,"𝗜𝘁𝗡𝗮 𝗦𝗶𝗻𝗴𝗟𝗲 𝗛𝘂 𝗞 𝗝𝗮𝗻 𝗕𝗵𝗶 𝗹𝗶𝗸𝗛o to 𝗔𝘂𝘁𝗼 𝗖𝗼𝗿𝗿𝗲𝗰𝘁 𝐣𝐚𝐩𝐚𝐧 𝐤𝐫 𝐝𝐞𝐭𝐚 𝐡𝐚" ,"kxh LoGon Ki TyPing.. Ase LiKha Aa Rha HoTa Hai Jse WasiHat LiKh Rhy H0on 😒0or RePly ATa Hai Hmmmm 😂" ,"Baz DaFa JaWab DeNy Ke LiYe alFaz Nhi 👉😒 Ase SaQal He KaFi H0oTi Hai 😹" ,"YaKeen KRren Kxh L0og Bread Ke 1 Slice Ke TarHan H0oTy Hain j0o Kisi K0o Axhy Nhi LagTy Tum W0o Slice H0o 🫢🫣😂" ,"JeSe Aap Ki ZuBan ChalTi Hai Wse KhuD ChLo T0o MoTaPay Ka RoNa Na DalNa Pre 😂" ,"MeRi PosT PRr aYa KRro Main Kbhi Kbhi MehB0ob K0o MuThi Me kRrNy Ke Tawiz Be BTaTa Hun 😜" ,"KTny WaHaYaT H0o 🥺 Phr Be HaYaT H0o 🤭😹😹😹" ,"SaNnu ilam aa Tu BaRi VaDDi Film aa 😅" ,"ApNy DiMag Ka PaSsWord DeNa 😝 Aqal Install kRrNi Hai 😂" ,"Phr Aaj KaL KiSs Ke SaTh ChaKar Hai Uh Ka 😂😂😂" ,"➝𝗚𝗶𝗿𝗹𝘀 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝘁: ➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗸𝗗𝗿𝗲𝘀𝐬𝗗𝗲𝗸𝗵𝗮𝗡𝗮➝𝗕𝐨𝐲 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝗧:➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗞 𝗗𝗿𝗲𝘀𝘀 𝗪𝗮𝗹𝗶 𝗗𝗲𝗸𝗛🙂🤝" ,"➝𝗧𝘂𝗺 𝗪𝗼𝗛𝗶 𝗵𝗢 𝗡𝗮➝𝗝𝗶𝘀 𝗞𝗶 𝗩𝗼𝗶𝗰𝗲 𝗕𝗲𝗲𝗵𝗸𝗮𝗥𝗶𝗼 𝗝𝗮𝘀𝗶 𝗛𝗮𝗶-^☘️🙂" ,"Ek pyare s Bandi ko Mention karo 🙂🤝Set may khudh karlonga🌚🙈🌸" ,"➝𝗞𝘂𝗰𝗛 𝗱𝗶𝗻 𝗕𝗮𝗱 𝗠𝗲𝗿𝗮 𝗡𝗶𝗸𝗸𝗮𝗛 𝗛𝗮𝗶➝𝗝𝗶𝘀 𝗻𝗬 𝗞𝗿𝗻𝗮 𝗛𝗮𝗶 𝗔 𝗷𝗮𝗬🙂🤝" ,"تـیـری بیـوفـائـی نـے مجھـے ٹھـرکـی بنـا دیـا😞" ,"تم تو شکـل سے ہی میـری لگتـی ہو🥺" ,"➝𝗗𝘂𝗻𝗶𝗬𝗮 𝗸 𝗦𝗮𝗥𝘆 𝗠𝘇𝗮𝗞 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳 𝗢𝗿➝𝗜𝗗 𝗖𝗮𝗿𝗱 𝗽𝗬 𝗔𝗽𝗻𝗶 𝗣𝗵𝗼𝘁𝗼 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳🥹💔" ,"Dil De Diya Hen Gurda Nahi Dengy, Jo Karna Hai Karlo Sanam 👀😌" ,"Main chAhta hun ky Woh jab B Dhoka kHae nOtificationS mujhe Ayee🙂💔" ,"اپنے پتیلے جیسے منہ سے میرا نام مت لیا کرو🙂" ,"Tum wahi ho naww jessy apna blood group bhi nahi pata ^^..🙂" ,"All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍" ,"Boys Sana, Laiba, Aliza, Sadia, Maham Zoya ishu ayzal or Ayesha py Mar ky bhi Trust na krna🌚" ,"➝𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗛𝗶𝗽 𝗔𝗿𝗲 𝗟𝗶𝗸𝗲 𝗖𝗮𝗸𝗲➝𝗝𝗶𝘁𝗻𝗮 𝗕𝗵𝗶 𝗖𝘂𝘁𝗲 𝗛𝗼 𝗞𝗮𝘁𝗬 𝗚𝗮 𝗭𝗿𝗼𝗿🙂🤝" ,"Koi Ladki Mera Name hath pw likh dy🤝🙂 Me phr uski dp lga k Cool lgo ga" ,"️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan" ,"kbi sun to zra jo me keh na ska meri dunya tmi o tmi ashraa" ,"kahni sno zubani suno mjy payar howa tha iqrar howa tha" ,"kash ap humry hoty ye lafz tumry hoty" ,"𝐚𝐠𝐫 𝐛𝐧𝐝 𝐡𝐨 𝐣𝐚𝐲𝐞 𝐠𝐢 𝐦𝐞𝐫𝐢 𝐬𝐚𝐧𝐬𝐲 𝐭𝐦𝐲 𝐭𝐞𝐫𝐢 𝐤𝐮𝐬𝐡𝐛𝐨 𝐬𝐚 𝐩𝐞𝐜𝐡𝐚𝐧 𝐥𝐨 𝐠𝐚" ,"lahor da pawa akhter lawa" ,"AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐" , "میرے بابو نے سوئیٹر پہنی🥺❤", "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "ہسیا کر تے ہسایا کر ، چوسنی ورگا منہ نا بنایا کر", "-Kitna  مــــــــنہوس ha YaAr online ate he Nazar a jata ha 😒⚠️†", "+92 _____________HasEen LrkiyA KhaLi JGa Pur kArEin🌚🙂",  "Main ap ki ami ko btaou ga ap Facebook use kerty ho 😂", "Aeh, Bi, Chi, Di, Ee, Ef, Ji, Eich, Ai, Lub, You, So, Much 🙂🥺", "𝙎𝙝𝙖𝙙𝙞 𝙠𝙖 𝙨𝙝𝙤𝙦 𝙣𝙝𝙞 𝙝𝙖 𝙢𝙪𝙟𝙮 𝙗𝙖𝙨 𝙙𝙪𝙡𝙝𝙖 𝙗𝙖𝙣'𝙣𝙮 𝙠𝙖 𝙨𝙝𝙤𝙦 𝙝𝙖*(🥺", " love my admin", "Logo ki bestie hoti he Meri bezzati hoti he 🙂💔", "People who daily react to my posts I'll invite you to my marriage! 🤍🫶", "-Block Your ‘’ gf ‘’ And Purpose me.❤️🙂🖤🥀🔪", "- 𝘼𝙪𝙧 𝙗𝙖𝙩𝙖𝙤 𝙩𝙬𝙢 𝙬𝙤𝙝𝙞 𝙝𝙬 𝙣𝙖𝙬 𝙟𝙞𝙨𝙚𝙮 𝙠𝙤𝙞 𝙢𝙪𝙣 𝙣𝙤𝙞 𝙡𝙖𝙜𝙖𝙩𝙖𝙬 🥹;", "𝘗𝘩𝘢𝘴 𝘨𝘢𝘺𝘢 𝘮𝘯 𝘣𝘩𝘪 𝘵𝘦𝘳𝘺 𝘉𝘦𝘢𝘶𝘵𝘺 𝘛𝘳𝘢𝘱 𝘮𝘯 🥺💝", "Kash siNGLe HONY k paisy MILTY to mn sab sY ameer HOTA😓", "غلامــــی صـٓــــرف بیگـــَــم دی  🚶-", "Jawn❤️I'm waiting for your text..🙂🙉", "Ek bestie to ma b deserve karta Hun ❤😁🙉",  "بات عزت کی تھی ورنہ آج سڑک پہ پڑا دس کا نوٹ بلکل اصلی تھا🥺🌿", "فاصلہ رکھیں👀\n\nپیار تو ہونا نہیں خوامخواہ لڑائی ہو جائے گی😒😬", "محبت کرو تو انباکس میں اکیلے اکیلے🙄\n\nاور رونا دھونا  پورے Facebook میں۔۔۔واہ رے پلاسٹک کے عاشقو🙁", "‎سنو لڑکیو🙋\n\nسفید ڈریس پر لال لپ اسٹک لگاتی ہو💄 قسم سے ایمبولینس لگتی ہو😂", "اگر یہ❤️   ہے\n\nتو پھر یہ 🫀 کیا ہے.", "وہ روز کہتی تھی ہم بھاگ جائیں گے🙈\n\nاور پھر وہ بھاگ گئ مجھے لے جانا بھول گئ😥", " غیر کی دِل میں اگر اُترنا تھا  تو میرے دِل سے اُتر گئے ہوتے ۔ 💔🙂", "makeup kya hai mard hi k paiso se mard hi ko bewakoof banane ki sazish🤝🙂", "𝘚𝘜𝘕𝘖 𝘒𝘕 𝘚𝘈 𝘔𝘖𝘋𝘌𝘓 𝘏𝘖 \n𝘔𝘌 :2002🦋🥴🖤", "عورت بڑا سا بڑا دُکھ بھول سکتی ہے\n\nلیکِن پڑوس میں گیا برتن نہیں 💯😁", "قابل نہیں ہیں آپ ابھی, میرے قرب کے خود کو ابھی کچھ اور گناہگار کیجئے🖤🔥"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "mano") || (event.body.toLowerCase() == "mano")) {
     return api.sendMessage("️mano srif meri ha humry bech jo aya smjo mar gea lashye becha do ga lashye 🥰", threadID, messageID);
   };
  
  if ((event.body.toLowerCase() == "dua") || (event.body.toLowerCase() == "dua")) {
     return api.sendMessage("️dua srif meri ha dua or mery bech jo aya smjo mar gea lashye becha do ga lashye🥲", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bot love u") || (event.body.toLowerCase() == "i bot i love u")) {
     return api.sendMessage("i love u to meri jan", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `💋${name}💋, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }