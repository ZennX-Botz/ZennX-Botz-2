import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/5113d28af5b1741836fd5.jpg')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*RULLES BERMAIN BOT WA*:

1. Dilarang telp/vc bot
2. Harap beri jeda saat menggunakan bot (jangan spam)
3. Dilarang mengeksploitasi bot
4. Dilarang mendownload file audio yang berdurasi di atas 50 menit
5. Bot tidak menyimpan data user
6. Kami tidak bertanggung jawab atas apa yg user lakukan kepada bot ataupun sebaliknya
7. Hindari konten pornografi (berupa gambar, dokumen, video, dan stiker)
8. Bot yang sudah dikick dari group berarti masa sewa habis

*Kebijakan Privasi:*
 1. bot tidak akan merekam data riwayat chat user. 
 2. bot tidak akan menyebarkan nomor users. 
 3. bot tidak akan menyimpan media yang dikirimkan oleh users. 
 4. bot tidak akan menyalah gunakan data data users. 
 5. Owner bot berhak melihat data riwayat chat users. 
 6. Owner bot berhak melihat status users. 
 7. Owner bot dapat melihat riwayat chat, dan media yang dikirimkan users.
 
 Syarat Ketentuan Bot 
 1. Bot akan keluar dari group apabila sudah waktunya keluar. 
 2. bot dapat membanned user secara sepihak terlepas dari users salah atau tidak. 
 3. bot *tidak akan bertanggungjawab atas apapun yang user lakukan terhadap fitur bot.* 
 4. bot akan memberikan hukuman berupa block atau ban terhadap users yang melanggar peraturan. 
 5. bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

Tahulah berterimakasih sebab anda tidak perlu membayar untuk menggunakan bot ini, gunakan secara bijak, jangan berlebihan.

Be a smart user and good luck!
*©Kebijakan By ZennX-Botz*
`
conn.sendButtonDoc(m.chat, tqto, wm,'Saya Paham','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/karfuanyogich",
    mediaType: "VIDEO",
    description: "https://Instagram.com/karfuanyogich", 
    title: 'Patuhi Rullesnya Ya!',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['rules']
handler.tags = ['main','info']
handler.command = /^(rules)$/i
export default handler
