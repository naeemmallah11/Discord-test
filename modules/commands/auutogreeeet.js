module.exports.config = {
	name: "autogreet",
	version: "7.3.1",
	hasPermssion: 0,
	credits: "John Lester",
	description: "Automated Greetings",
	commandCategory: "noprefix",
	dependencies: {
		"node-cron-no-spam": ""
	},
	cooldowns: 2,
};

module.exports.handleEvent = async function({ api, event, handleReply, client, __GLOBAL }) {
   var cron = require('node-cron');
  cron.schedule('0 38 12 * * *', () => {
    api.getThreadList(50, null, ["INBOX"], (err, list) => {
      if (err) throw err;
      list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.sendMessage("Good Morning Everyone!!! \n\nAuto Greet by Kashif Raza", item.threadID) : '');
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });
  await new Promise(resolve => setTimeout(resolve, 450));
}
module.exports.run = function({ api, event, client, __GLOBAL }) {
  }
