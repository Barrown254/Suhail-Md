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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_35_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0LFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWDFSQm13Y0dRcjVoU1Y1aVdwdFFUYUVHYlVsSkxzajhCOURBRERUa2Njaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2lkVVlmaVJUYWVOSTJiV0EyRUlVQVwiLFxuICBcInBob25lSWRcIjogXCJhODlmMzBlNS01NzRiLTQzMDMtYjEwZC0wZjk0MjdiMGEyNzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAxODAsXG4gICAgICA5NCxcbiAgICAgIDI4LFxuICAgICAgMTAzLFxuICAgICAgMTc4LFxuICAgICAgMjIzLFxuICAgICAgMTkzLFxuICAgICAgMTk0LFxuICAgICAgNjMsXG4gICAgICAyMSxcbiAgICAgIDI0OCxcbiAgICAgIDIyMyxcbiAgICAgIDIyNyxcbiAgICAgIDI0MyxcbiAgICAgIDE0NSxcbiAgICAgIDE0LFxuICAgICAgMjIwLFxuICAgICAgMTM0LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDIyNSxcbiAgICAgIDMwLFxuICAgICAgMTQyLFxuICAgICAgMjE4LFxuICAgICAgOCxcbiAgICAgIDg1LFxuICAgICAgNTgsXG4gICAgICAxNTAsXG4gICAgICA2LFxuICAgICAgMzksXG4gICAgICAxMDQsXG4gICAgICAxMTUsXG4gICAgICAxNTcsXG4gICAgICAxODcsXG4gICAgICAyMDgsXG4gICAgICAxNixcbiAgICAgIDgzLFxuICAgICAgMTM5LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdSU0U1VjlNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTg0OTA4NDQ6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU1MTY0NjI3MTIwMjIyOjUyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095ZjZMY0hFSkRPb2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ1YybDlDMk5TMGZFeHU3RFhCYklZMlVwb2prZmkvTnZXbVM0bkxLT1BBVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsSEFYemZ6MUo2MnVyUzlERmo5U0N6RjRwUnZxN1ZoOW8yTFJ4MTE2dVlrU2d3dVRaYjBrVXNNMWV2dTBzT1cwQk9Ua0dpSE5ZcHI5YlM2MFo3SFNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkY0U1eEsybWo1RWxGRnYxSnF2NFFReDh3cGhwSnVsd0ZDdnBhanN6WGREUFZNbHFuV0J1RmVHdFJDd2dyMDBpL1lUeU5kd1g1V2tDWlpyb1dXNHdEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTg0OTA4NDQ6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIxNTMxNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
