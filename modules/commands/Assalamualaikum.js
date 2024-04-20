const fs = require("fs");
module.exports.config = {
	name: "Assalamualaikum",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "chocolate",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Assalamualaikum")==0 || event.body.indexOf("assalam o alaikum")==0 || event.body.indexOf("salam")==0 || event.body.indexOf("Assalam o alaikum")==0) {
		var msg = {
				body: "
وَعَلَيْكُمُ ٱلسَّلَامُ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ",
				attachment: fs.createReadStream(__dirname + ``)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }