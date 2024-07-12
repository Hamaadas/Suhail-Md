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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ moeed²r²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923175510555";




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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_56_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgxLFxuICAgICAgICA4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJ2bkhqTWt1SHJkTVh0dEU3anFsU2FScXRSRG9yU2Z5M0NmOVNiL2NBbEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTc1NTEwNTU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNUY5OEI4NDMzQ0Q2RTk4NzE0RjQ3NkQ0MEE5NTFEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3ODE3ODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic3gzUGFYd0lUTmFSY0REbUhyWWJXUVwiLFxuICBcInBob25lSWRcIjogXCIxZGViNjcyMC1kY2M4LTQ2NzYtYTdjNC1mYjUwYWU0OTg4ODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTE2LFxuICAgICAgMjI3LFxuICAgICAgMjE4LFxuICAgICAgMTE2LFxuICAgICAgMTI3LFxuICAgICAgMjIzLFxuICAgICAgMjI3LFxuICAgICAgMjIyLFxuICAgICAgMjQ3LFxuICAgICAgNyxcbiAgICAgIDIwNixcbiAgICAgIDM4LFxuICAgICAgODYsXG4gICAgICAyNyxcbiAgICAgIDIzLFxuICAgICAgNDcsXG4gICAgICAxNjIsXG4gICAgICAxNzksXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDMzLFxuICAgICAgNDAsXG4gICAgICAzMixcbiAgICAgIDEwMyxcbiAgICAgIDk3LFxuICAgICAgMTUwLFxuICAgICAgMTk0LFxuICAgICAgMTY4LFxuICAgICAgNjYsXG4gICAgICA0OSxcbiAgICAgIDE5NyxcbiAgICAgIDE3MixcbiAgICAgIDE2NixcbiAgICAgIDIyOCxcbiAgICAgIDEwNSxcbiAgICAgIDQ2LFxuICAgICAgMTEzLFxuICAgICAgNjgsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMSDVxWUFHRU5DWHhMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJVM1A5d1JnbW5tTkgvL2dTR1EweENDaEw4UTRIR2VlN3RERkc4S0NqSHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTm9nWjNqZWR0LzZPdWhjTkVFTURuVnFDNmVNNnpDWEpNTUFJUjI3bTRBVjYyeHNxZFRrRGRCT1R4SmE2eDN0eGU5Y2ZtQWJ5aXcwQTFtWFVwWGRPQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVWRaZThBVXhuYm5ab2hnTzFLUmNXVTBMUi9HTjMydElpQ0RTSXZ5YXlBTEROSnZvVCtRMjRBZjhFdkN4Zyt2WTBDOTgxTHlCeUlsTTFGRlgwdlVkaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzU1MTA1NTU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5OTEyMzcxMDAxMzYyNDoxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTYXJrYXIgMzAyXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNzU1MTA1NTU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc4MTc3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNUc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1RzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGtGZ2dSSUhZRUN2QnFDazF2WWNsTk16KzMyL0VmMnpaWUtQUkFjQ0NQcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjExMzAwMDE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3Nzk4ODc3OTlcIn0iCn0"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ moeed²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "moeed-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MOEED",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
