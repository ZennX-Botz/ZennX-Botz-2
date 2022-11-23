let handler = async m => m.reply(`
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Tree : 6289510598381
⫹⫺ Via Dana & Gopay : 6289510598381
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/yogzkyz

*Note:* Hasil Donasi Nantinya Akan Digunakan Untuk Membayar Web Host Agar Bot Dapat Online 24 Jam Nonstop.

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.rowner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 
