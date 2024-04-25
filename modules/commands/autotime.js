module.exports.config = {
    name: 'autotime',
    version: '10.02',
    hasPermssion: 0,
    credits: 'MrTomXxX',
    description: 'সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3,
     envConfig: {
        autoUnsend: false,
        sendNoti: true,
        timeToUnsend: 10
    }
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['~ এখন রাত ১১টা বাজে সবাই ফোন রেখে ঘুমিয়ে পরো ']
},
             {
    timer: '1:00:00 AM',
    message: ['~ এখন রাত ১২টা বেজে গেলো এখনও ঘুমাও না কেন তমরা ']
},
						{
    timer: '2:00:00 AM',
    message: ['~এখন রাত ১টা বাজে সবাই আশা করি ঘুমিয়ে গেছেন']
},
						 {
    timer: '3:00:00 AM',
    message: ['~এখন রাত ২টা বাজে শুভ রাত্রি ']
},
			
						 {
    timer: '4:00:00 AM',
    message: ['~উঠো উঠো আল্লাহর বান্দা ঘুমাইও না আর রহমতের এই মাগফিরাতে ঘুমাইও না আর\n\n\nএখন রাত ৩টা বাজে তাহাজ্জুদ এর সময় হয়ে গেছে  প্লিজ উঠো সবাই   ']
},
						 {
    timer: '5:00:00 AM',
    message: ['~এখন রাত ৪টা বাজে একটু পর ফজরের আযান দিলে নামাজ পড়ে নিও সবাই ']
},
             
						 {
    timer: '6:00:00 AM',
    message: ['~এখন ভোর ৫টা বাজে সবাই নামাজ পড়ছো তো?❤️']
},
						 {
    timer: '7:00:00 AM',
    message: ['~এখন সকাল ৬টা বাজে']
},
             {
    timer: '8:00:00 AM',
    message: ['~এখন সকাল ৭টা বাজে  সবাই ঘুম থেকে উঠো  ']
},
						 {
    timer: '9:00:00 AM',
    message: ['~এখন সকাল ৮ টা বাজে সবাই মনে হয় কাজে ব্যস্ত হয়ে গেছো']
},
             {
    timer: '10:00:00 AM',
    message: ['~এখন সকাল ৯ টা বাজে মন দিয়ে কাজ করো সবাই❤️' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['~এখন সকাল ১০টা বাজে মিস করছি তোমাদের  ']
},
						 {
    timer: '12:00:00 PM',
    message: ['~এখন সকাল ১১টা বাজে']
},					
						 {
    timer: '1:00:00 PM',
    message: ['~এখন দুপুর ১২টা বাজে ❤️ ']
},
						 {
    timer: '2:00:00 PM',
    message: ['~এখন দুপুর ১টা বাজে সবাই কাজ বন্ধ করে জোহরের নামাজ পড়ে নাও ']
},
						 {
    timer: '3:00:00 PM',
    message: ['~এখন দুপুর ২টা বাজে']
},
						 {
    timer: '4:00:00 PM',
    message: ['~এখন দুপুর ৩টা বাজে সবাই ফ্রেস হয়ে কুরআন তেলাওয়াত করো বা তেলাওয়াত মন দিয়ে শুনো ']
},
						{
    timer: '5:00:00 PM',
    message: ['~ এখন বিকাল ৪টা বাজে সবাই আসরের নামায পরার প্রস্তুতি নাও এবং নামাজ পরো সবাই  ']
},
						 {
    timer: '6:00:00 PM',
    message: ['~এখন বিকাল ৫টা বাজে সবাই আসরের নামাজ পরেছ তো ']
},
						 {
    timer: '7:00:00 PM',
    message: ['~এখন সন্ধ্যা ৬টা বাজে সবাই অযু করে নামাজের প্রস্ততি নাও\n\nসাথে নামাজ পরারও ']
},
          {
    timer: '8:00:00 PM',
    message: ['এখন সন্ধ্যা ৭ টা বাজে কি করছো সবাই এখন এশার আযান দিবে সবাই নামাজ পড়ে নাও❤️']
},
             {
    timer: '9:00:00 PM',
    message: ['~এখন রাত ৮টা বাজে']
},
             {
    timer: '10:00:00 PM',
    message: ['এখন রাত ৯টা বাজে সবাই খেতে যাও']
},
            {
    timer: '11:00:00 PM',
    message: ['~এখন রাত ১০টা বাজে সবাই শুয়ে পরো']
}]; 
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};