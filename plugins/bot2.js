import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./media/song2.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.tags = ['songs']
handler.help = ['song2']
handler.command = /^(song2)$/i

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler