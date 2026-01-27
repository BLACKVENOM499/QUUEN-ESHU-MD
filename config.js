const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxPSFFYWFpWckF5eGxwSGJIRm1WQlljR3AvQ2ZPeW5mcmRiM3FYYnNGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEh6emY1Z1lYaTMzWU1aYW1MS3cwV0xDRXhsYk15dURtdkxnS0x2K1VHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSk5aRnFQNlRQUWtWVEFXd3Fmeno5d2ZNNEEyOUQrMWN0SVlkMzV1dDNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTHdMa1VlbUx1TzMra0NlWm5KN3ozNWRoZGVnUitCV1Vyc096OHdKUlhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBVk1IZmhHQ0wyenhQZmVXYnd0RGxoYlJRSDdnVVNvZFhYMHo5UkQ3VjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRieUNaNXlMUlJsclc3UkNaV25YVkJBOU1ZSTRCUHZyQWVsU2VBNWtha3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FJMkxqQ21NL1RlcUdaU1ZWVW9uYXlDUzZLTjNyUzA5N3VKS1BvcmQxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmdPL3Z1QnpyZDJTNGtVWDczNUxlbkticDR6eFdWMTNFUWtQRHdaaUJYND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ0b2plV1ZzY3BhbTJKdE1WZ0ZoRHBONVpPN051UkgwWWpNcGM0ZzkxaHBNNUpseit4L0UzK1VWSGxEUHVxVzRwKzE3Q1RGK2ZsUXFTYldzTW82SERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJRdUtlVkZ6MGlqSDgzYk1pWTQyTDBVR1VZL2h6RXBmZHphN2NPVGM3VlZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzMjU4Mzc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QTM5MDBFRTI2MDVGRUVBRUMzN0EyMjkxQ0Q1OUNBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njk1MzcwODh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzMjU4Mzc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RDkwMDg4OUZCRTYzMDUxRERFODVDNkJCQkUzOEY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njk1MzcwODh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzMjU4Mzc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RkIxQzMwNzAzMjE4N0ExRUY5M0QwMzY2Njg2MzFBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njk1MzcwODh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIzMjU4Mzc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MjRBNTcyQ0RGRjdFQjJCMDNCQ0UzRjI3RTg2NjM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njk1MzcwODh9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU0lMRU5UWDQiLCJtZSI6eyJpZCI6Ijk0NzIzMjU4Mzc3OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWtpbmR1IiwibGlkIjoiMjYzMjE3NzI1MTA0MTc3OjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORFAwL0lGRUxuODQ4c0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZckppT0I4UHdqYlpSWHBCU1IrV0tJRkdtRGJoYjBrTmFMSmI5aTlXYzFJPSIsImFjY291bnRTaWduYXR1cmUiOiJHL3BKU1lVbWJqSUZkTVBxcnFFcytEcHg5dFhSTDhKOWlDam94VTZKQ2xPbFlhMkdmWElySGpxRS9neUkzSHg0VlpxRHRJVmE5MU04a0FBTlkwODdDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYnNhSFJiU2szbjNOZHNxeEpoK3BTSmFBdkVwS1VHc21JQmpRaU1uU05jdW1YQWl6RVFXeVlzQlJSS3RSZFBjMzJjcHpralozdVVjNnd4dmJsbWdOQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMzI1ODM3NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldLeVlqZ2ZEOEkyMlVWNlFVa2ZsaWlCUnBnMjRXOUpEV2l5Vy9ZdlZuTlMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUWdTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2OTUzNzA4NiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURuTCJ9",
MONGODB: process.env.MONGODB || "mongodb+srv://dinukabro12345_db_user:cFODovyrPu1yHa08@akindu-md.mgyvfgo.mongodb.net/", //add your mongodb url        
MODE: process.env.MODE || "private",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", // true or false
BOT_NAME: process.env.BOT_NAME || "AKINDU-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true", // true or false
AUTO_STICKER: process.env.AUTO_STICKER || "true", // true or false
AUTO_REPLY: process.env.AUTO_REPLY || "true", // true or false
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // true or false
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true", // true or false
ANTI_LINK: process.env.ANTI_LINK || "true", // true or false
ANTI_BAD: process.env.ANTI_BAD || "true",// true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", // true or false
AUTO_REACT: process.env.AUTO_REACT || "true", // true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true or false
FILENAME: process.env.FILENAME || "QUEEN-ESHU-MD-V1",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/xmhW7DJ/6252.png", 
CHANNEL_NAME: process.env.CHANNEL_NAME || "AKINDU-MD",
NEWSLETTER_ID: process.env.NEWSLETTER_ID || "120363303242803015@newsletter",
TITLE: process.env.TITLE || "AKINDU-MD",
BODY: process.env.BODY || "CREATED BY ESHAN TECH SL🛡️",
WEBURL: process.env.WEBURL|| "https://github.com/CYBER-ESHU/ESHU-MD",
BOT_IMG: process.env.BOT_IMG || "https://i.ibb.co/xmhW7DJ/6252.png" 
};
