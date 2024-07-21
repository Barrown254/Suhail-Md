const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254798490844";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = "SUHAIL_21_27_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICA4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI3LFxuICAgICAgICA3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpmWXZFTG5GWlFiMXV2TDg3cnJiZmlVYTgxTXRDZG1CV2dIVzExNTYvbnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk4NDkwODQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGM0ZCRUNDRUMyMjhBRjRBNjJCRjlFNkUyOTZEOUNEN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1OTcyNzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmxGOE9pd25USXVPMmdzb29IRlZkZ1wiLFxuICBcInBob25lSWRcIjogXCIxZmFkMzAxNy02YjNmLTRiYTItYjI3OC02YzE5NmJkZjk1NTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgNzMsXG4gICAgICAxNixcbiAgICAgIDUyLFxuICAgICAgMTYwLFxuICAgICAgMTYxLFxuICAgICAgNzQsXG4gICAgICAyMDUsXG4gICAgICAxMTQsXG4gICAgICAzNCxcbiAgICAgIDIyMSxcbiAgICAgIDE3OSxcbiAgICAgIDYwLFxuICAgICAgMTQsXG4gICAgICAxMDMsXG4gICAgICAyNDQsXG4gICAgICAyMDIsXG4gICAgICAxMzMsXG4gICAgICAyMDEsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAxODAsXG4gICAgICAxMTYsXG4gICAgICAyNDQsXG4gICAgICAxMjksXG4gICAgICAxMTQsXG4gICAgICAxODIsXG4gICAgICAzMSxcbiAgICAgIDIwOSxcbiAgICAgIDE4NCxcbiAgICAgIDI3LFxuICAgICAgODUsXG4gICAgICAxOTMsXG4gICAgICA3OSxcbiAgICAgIDQ1LFxuICAgICAgMjUxLFxuICAgICAgMjIyLFxuICAgICAgMTU0LFxuICAgICAgMjM2LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRZV0xSUE0xXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTg0OTA4NDQ6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU1MTY0NjI3MTIwMjIyOjU0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05yNW9LOEhFTkw2OWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUd5UFVYSGtqOGlWamxkR1dtZ29Zd2NLbnhzVk45d242V3R6bkd1b29BZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMSktjWThOTncyeUtZQ2hHUXdic1Y3M2JMbk5SV3lpa2VObzVHeVRJK0lFYUFZcGZ0cUtpNTFFeFNsMSsza28wR3M0SEptWjF2enE5RGZSUlBRdS9DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxVzdjLzE5MGZROVJncDAreUJFemIzRmZIWWRTa0UxMEFETGRQS21uTnh5c21JNmpaczVvUkQxeDVkalRJVDJPd0JtbE9udHByaVlQSUJpNkVFRFVBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTg0OTA4NDQ6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1OTcyNjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFETDJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURMMi5qc29uIjogIntcImtleURhdGFcIjpcIjdsaEFDR0VPbkViR1E5bVYyd2pxRnJvV3VIaUszZUNwWWJlTXBUUDFReE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk3ODE1NDIwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU5NzEzMjkzM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
