const fs = require("fs");
module.exports.config = {
	name: "loveu",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "FOYSAL HOSEN", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("love you") ||
     react.includes("love u") || 
react.includes("i love you") || 
react.includes("lv u") || 
react.includes("i love u") || 
react.includes("lav u") ||
react.includes("love")) {
		var msg = {
				body: "𝐈 𝐋𝐨𝐯𝐞 𝐘𝐨𝐮 𝟐🏃‍♂️",
				attachment: fs.createReadStream(__dirname + `/cache/iloveu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
