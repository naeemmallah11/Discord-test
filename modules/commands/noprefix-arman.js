const fs = require("fs");
module.exports.config = {
	name: "arman",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Kashif Raza Mallah")==0 || event.body.indexOf("Kashif")==0 || event.body.indexOf("kashif")==0 || event.body.indexOf("kashii")==0) {
		var msg = {
				body: "Han Bolo meri jan tya hua 😘",
				
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍿", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
