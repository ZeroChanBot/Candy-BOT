require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')
const color = require('./lib/color')
const fetch = require('node-fetch')
const { /*spawn,*/ exec } = require('child_process')
const urlShortener = require('./lib/shortener')
const canvas = require('canvacord')
const google = require('google-it')
const translatte = require('translatte')
//const { stdout, setgid } = require('process')
//const quotedd = require('./lib/quote')
//const translate = require('translatte')
const Math_js = require('mathjs');
//const imageToBase64 = require('image-to-base64')
const os = require('os')
const { sizeFormatter } = require('human-readable')
const bent = require('bent')
const ms = require('parse-ms')
const toMs = require('ms')
const https = require('https');
//const { addFilter, isFiltered } = require('./lib/msgFilter')

const { 
    liriklagu,
    quotemaker,
    sleep,
    processTime,
    } = require('./lib/functions')

const { 
    help,
    creatormenu,
    admingroupmenu,
    shopmenu,
    commandd,
    premu,
    nopremu,
    premcmd,
    //admincmd,
    ownercmd,
    nsfwcmd,
    mediacmd,
    animecmd,
    praycmd,
    groupcmd,
    levelmenu,
    bahasalist,
    snk, 
    info, 
    sumbang, 
    readme, 
    listChannel,
    setuser
    } = require('./lib/help')

const {
    instagram,
    tiktok,
    facebook,
    smule,
    starmaker,
    twitter
    } = require('./lib/downloader')

const {
    stickerburn,
    stickerlight
    } = require('./lib/sticker')

const { 
    uploadImages, 
    custom,
    fetchJson
    } = require('./lib/fetcher')
//const claim = require('./lib/claim')
//const roleplay = require('./lib/roleplay')
const kerjajob = require('./lib/job')
//const rpg = require('./lib/rpg')
const nsfw = require('./lib/nsfw')
const { i } = require('mathjs')
//const levelExports = require('./lib/levelexport')
//const { null } = require('mathjs')
// LOAD FILE
let banned = JSON.parse(fs.readFileSync('./lib/database/bot/banned.json'))
let bannedTemp = JSON.parse(fs.readFileSync('./lib/database/bot/tempban.json'))
//let antispamFeature = JSON.parse(fs.readFileSync('./lib/database/bot/antispam.json'))
let hitsCount = JSON.parse(fs.readFileSync('./lib/database/bot/hits.json'))
let nsfw_ = JSON.parse(fs.readFileSync('./lib/database/group/nsfwz.json'))
let simi_ = JSON.parse(fs.readFileSync('./lib/database/group/Simsimi.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/user/limit.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/group/muted.json'))
let setting = JSON.parse(fs.readFileSync('./lib/database/bot/setting.json'))
//let msgLimit = JSON.parse(fs.readFileSync('./lib/database/bot/msgLimit.json'))
let adminNumber = JSON.parse(fs.readFileSync('./lib/database/bot/admin.json'))
let premium = JSON.parse(fs.readFileSync('./lib/database/user/premium.json'))
let antilink = JSON.parse(fs.readFileSync('./lib/database/group/antilink.json'))
let _Backup = JSON.parse(fs.readFileSync('./lib/database/bot/backup.json'))
//let claimed = JSON.parse(fs.readFileSync('./lib/database/user/claim.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/database/group/antibadword.json'))
let _welcome = JSON.parse(fs.readFileSync('./lib/database/group/welcome.json'))
let _leave = JSON.parse(fs.readFileSync('./lib/database/group/leave.json'))
//let _nuklir = JSON.parse(fs.readFileSync('./hentong/nuklir.json'))
let _joincode = JSON.parse(fs.readFileSync('./lib/database/group/joincode.json'))
let _joinclaimed = JSON.parse(fs.readFileSync('./lib/database/user/joinclaimed.json'))
let _userRegister = JSON.parse(fs.readFileSync('./lib/database/user/userreg.json'))
const _job = JSON.parse(fs.readFileSync('./lib/database/user/job.json'))
const _worklimit = JSON.parse(fs.readFileSync('./lib/database/user/worklimit.json'))
const _afk = JSON.parse(fs.readFileSync('./lib/database/user/afk.json'))
const _cmd = JSON.parse(fs.readFileSync('./lib/database/user/cmd.json'))
const _level = JSON.parse(fs.readFileSync('./lib/database/user/level.json'))
const _levelAntiSpam = JSON.parse(fs.readFileSync('./lib/database/user/antispam.json'))
//const _levelAntiSpamTime = JSON.parse(fs.readFileSync('./lib/database/bot/antispamTime.json'))
const _bg = JSON.parse(fs.readFileSync('./lib/database/user/background.json'))
const _pref = JSON.parse(fs.readFileSync('./lib/database/group/prefix.json'))
const _rules = JSON.parse(fs.readFileSync('./lib/database/group/rules.json'))
const redeemedUser = JSON.parse(fs.readFileSync('./lib/database/user/redeem.json'))
const _remind = JSON.parse(fs.readFileSync('./lib/database/user/remind.json'))
const _nama = JSON.parse(fs.readFileSync('./lib/database/user/nama.json'))
const _gender = JSON.parse(fs.readFileSync('./lib/database/user/gender.json'))
const _setig = JSON.parse(fs.readFileSync('./lib/database/user/ig.json'))
const _hidepp = JSON.parse(fs.readFileSync('./lib/database/user/hidepp.json'))
const _reminder = JSON.parse(fs.readFileSync('./lib/database/user/reminder.json'))
const _join = JSON.parse(fs.readFileSync('./lib/database/group/join.json'))
const _sider = JSON.parse(fs.readFileSync('./lib/database/group/antisider/sider.json'))
//BOT
const _setBotCMD = JSON.parse(fs.readFileSync('./lib/database/bot/setbot/cmd.json'))
//CLAIM
//const _kid = JSON.parse(fs.readFileSync('./lib/database/claim/id.json'))
//const _timeclaim = JSON.parse(fs.readFileSync('./lib/database/claim/time.json'))
//const _hero = JSON.parse(fs.readFileSync('./lib/database/claim/hero.json'))
//const _karakter = JSON.parse(fs.readFileSync('./lib/database/claim/karakter.json'))
//RPG-FIGHT
// const statchar = JSON.parse(fs.readFileSync('./lib/database/claim/stat.json'))
/*const _rpgstat = JSON.parse(fs.readFileSync('./lib/database/rpg/user/userstat.json'))
const _rpgid = JSON.parse(fs.readFileSync('./lib/database/rpg/database/id.json'))
    //HERO
const _rpgsao = JSON.parse(fs.readFileSync('./lib/database/rpg/herostat/SAO/stat.json'))*/
//ROLEPLAY
const _money = JSON.parse(fs.readFileSync('./lib/database/user/money.json'))
//const _SIMC = JSON.parse(fs.readFileSync('./lib/database/roleplay/simc.json'))
//const _SIMA = JSON.parse(fs.readFileSync('./lib/database/roleplay/sima.json'))
//const _Lpilot = JSON.parse(fs.readFileSync('./lib/database/roleplay/Lpilot.json'))
//ITEM
const _itemLevel = JSON.parse(fs.readFileSync('./lib/database/user/item/itemLevel.json'))
const _itemNameTag = JSON.parse(fs.readFileSync('./lib/database/user/item/nametag.json'))
//MINING
const _mining = JSON.parse(fs.readFileSync('./lib/database/user/mining.json'))

let { 
    limitCount,
    banChats,
    vhtearkey,
    tobzkey,
    //restartState: isRestart,
    //mtc: mtcState
    } = setting

/*let state = {
    status: () => {
        if(banChats){
            return 'Nonaktif'
        }else if(mtcState){
            return 'Nonaktif'
        }else if(!mtcState){
            return 'Aktif'
        }else{
            return 'Aktif'
        }
    }
}*/

moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = nao = async (nao, message) => {
    try {
        const { 
            type, 
            id, 
            from, 
            t, 
            sender, 
            isGroupMsg, 
            chat, 
            chatId, 
            caption, 
            isMedia, 
            mimetype,
            quotedMsg, 
            quotedMsgObj, 
            author, 
            mentionedJidList 
            } = message

        let { body } = message
        const { name, formattedTitle } = chat
        let { verifiedName } = sender
        const getNama = (userId) => {
            let position = false
            Object.keys(_nama).forEach((i) => {
                if (_nama[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _nama[position].nama
            }
        }
        if (getNama(sender.id) === undefined) {
            var pushname = sender.pushname || verifiedName
        } else {
            var pushname = getNama(sender.id)
        }
        //pushname = pushname || verifiedName
        const commands = caption || body || ''
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const setPref = (GrupId) => {
            const obj = { id: GrupId, prefix: '!' }
            _pref.push(obj)
            fs.writeFileSync('./lib/database/group/prefix.json', JSON.stringify(_pref))
        }
        const getPref = (GrupId) => {
            let position = false
            Object.keys(_pref).forEach((i) => {
                if (_pref[i].id === GrupId) {
                    position = i
                }
            })
            if (position !== false) {
                return _pref[position].prefix
            }
        }
        if(isGroupMsg) {
            if (getPref(groupId) === undefined) await setPref(groupId)
            var prefnyb = getPref(groupId)
        } else {
            var prefnyb = '!'
        }
        const prefix = prefnyb
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')
        //const argx = commands.toLowerCase()
        //const ar = args.map((v) => v.toLowerCase())
        const isCmd = command.startsWith(prefix)
        const isImage = type === 'image'
        const q = args.join(' ')
        
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        //const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        //const isQuotedFile = quotedMsg && quotedMsg.type === 'document'
        
        /*function restartAwal(nao){
            setting.restartState = false
            isRestart = false
            nao.sendText(setting.restartId, 'Restart Succesfull!')
            setting.restartId = 'undefined'
            fs.writeFileSync('./lib/database/bot/setting.json', JSON.stringify(setting, null,2));
        }*/
 
        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }

        if (typeof Array.prototype.splice === 'undefined') {
            Array.prototype.splice = function (index, howmany, elemes) {
                howmany = typeof howmany === 'undefined' || this.length;
                var elems = Array.prototype.slice.call(arguments, 2), newArr = this.slice(0, index), last = this.slice(index + howmany);
                newArr = newArr.concat.apply(newArr, elems);
                newArr = newArr.concat.apply(newArr, last);
                return newArr;
            }
        }

        const apakah = [
            'Ya',
            'Tidak',
            'Kayaknya Iya',
            'Kayaknya Tidak',
            'Coba Ulangi',
            'Ha?',
            'Apa?',
            'Gapaham...',
            'Mungkin?',
            'Maybe??'
            ]

        const bisakah = [
            'Bisa',
            'Tidak Bisa',
            'Coba Ulangi',
            'Mungkin?',
            'Maybe??'
            ]
        const randomhari = Math.floor(Math.random() * 100)
        const randomming = Math.floor(Math.random() * 7)
        const randombulan = Math.floor(Math.random() * 12)
        const kapankah = [
            `${randomhari} Hari lagi`,
            `${randomming} Minggu lagi`,
            `${randombulan} Bulan lagi`,
            '1 Tahun lagi',
            '1 Abad lagi',
            'Impossible'
            ]

        const mess = {
            wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
            magernulissatu: 'Harap Tunggu, BOT Sedang Menulis Di Buku 1!',
            error: {
                St: '[❗] Kirim gambar dengan caption *'+prefix+'sticker* atau tag gambar yang sudah dikirim',
                Ti: '[❗] Replay sticker dengan caption *'+prefix+'stickertoimg* atau tag sticker yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
                Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
                Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
                Bk: '[❗] Bot tidak bisa memblockir Owner',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }

        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await nao.getHostNumber()
        const blockNumber = await nao.getBlockedIds()
        const groupAdmins = isGroupMsg ? await nao.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const serial = sender.id

        const isAdmin = adminNumber.includes(sender.id)
        const isPrem = premium.includes(sender.id)
        //const isPrem = isGroupMsg
        const ownerNumber = '6281358181668@c.us, 6281341827661@c.us'
        const isOwner = ownerNumber.includes(sender.id)

        /*if(sender.id == '6281358181668@c.us') {
            //var roleid = '👨‍👩‍👧Dwi Rizqi👨‍👩‍👧'
            var roleid = '👑Premium👑'
        } else if(sender.id == '62895603517616@c.us') {
            var roleid = '🤝Partner🤝'
        } else if(sender.id == '628998016099@c.us') {
            var roleid = '🤝Partner🤝'
        } else if(sender.id == '6281341827661@c.us') {
            var roleid = '🤵Administrator🤵'
        } else if(sender.id == '6285348000200@c.us') {
            var roleid = '⚜️LORD⚜️'
        } else if(sender.id == '6289684286953@c.us') {
            var roleid = '☠️GHOST☠️'
        } else if(sender.id == '6283150156494@c.us') {
            var roleid = '🔥LORT🔥'
        } else if(sender.id == '6281336820099@c.us') {
            var roleid = '👥Owner Best Friend👥'
        } else if(isPrem) {
            var roleid = '👑Premium👑'
        } else if(!isPrem) {
            var roleid = 'Free'
        }*/

        // Function NameTag
        const setNameTag = (userId) => {
            const obj = { id: userId, select: "", tag: "Free" }
            _itemNameTag.push(obj)
            fs.writeFileSync('./lib/database/user/item/nametag.json', JSON.stringify(_itemNameTag))
        }
        const getNameTag = (userId) => {
            let position = false
            Object.keys(_itemNameTag).forEach((i) => {
                if (_itemNameTag[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _itemNameTag[position]//.tag
            }
        }
        const replaceNameTag = (userId, tag) => {
            let position = false
            Object.keys(_itemNameTag).forEach((i) => {
                if (_itemNameTag[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _itemNameTag[position].select = tag
                fs.writeFileSync('./lib/database/user/item/nametag.json', JSON.stringify(_itemNameTag))
            }
        }
        const addNameTag_tag = (userId, name) => {
            let position = false
                Object.keys(_itemNameTag).forEach((i) => {
                if (_itemNameTag[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _itemNameTag[position].tag += ','+name
                fs.writeFileSync('./lib/database/user/item/nametag.json', JSON.stringify(_itemNameTag))
            }
        }
        if(getNameTag(sender.id) == undefined) await setNameTag(sender.id)

        const nameTag_help = getNameTag(sender.id).select
        var roleid = nameTag_help
        if (nameTag_help == '') var roleid = `Ketik ${prefix}nametag`

        /*const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false
        const isWhiteList = (chatId) => {
            if(adminNumber.includes(sender.id)){
                if(muted.includes(chatId)) return false
                return true
            }else{
                return false
            }
        }*/
        //FUNCTION MONEY
        const setMoney = (userId) => {
            const obj = { id: userId, money: 500 }
            _money.push(obj)
            fs.writeFileSync('./lib/database/user/money.json', JSON.stringify(_money))
        }

        const getMoney = (userId) => {
            let position = false
            Object.keys(_money).forEach((i) => {
                if (_money[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _money[position].money
            }
        }

        const MinMoney = (userId, amount) => {
            let position = false
            Object.keys(_money).forEach((i) => {
                if (_money[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _money[position].money -= amount
                fs.writeFileSync('./lib/database/user/money.json', JSON.stringify(_money))
            }
        }

        const addMoney = (userId, amount) => {
            let position = false
            Object.keys(_money).forEach((i) => {
                if (_money[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _money[position].money += amount
                fs.writeFileSync('./lib/database/user/money.json', JSON.stringify(_money))
            }
        }
        //
        //Function XP
        const isLevelingOn = isGroupMsg
        function getLevelingXp(userId) {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const getItemLevel = (userId, _dir) => {
            let position = null
            Object.keys(_dir).forEach((i) => {
                if (_dir[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return _dir[position].level
            }
        }
        
        const replaceLevelingXp = (userId, xp) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp = xp
                fs.writeFileSync('./lib/database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./lib/database/user/level.json', JSON.stringify(_level))
            }
        }

        const MinLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp -= amount
                fs.writeFileSync('./lib/database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./lib/database/user/level.json', JSON.stringify(_level))
            }
        }

        const MinLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level -= amount
                fs.writeFileSync('./lib/database/user/level.json', JSON.stringify(_level))
            }
        }

        const getLevelPosition = (userId) => {
            let position = null
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return position
            }
        }

        const addLevelingId = (userId) => {
            const obj = {id: userId, xp: 0, level: 1}
            _level.push(obj)
            fs.writeFileSync('./lib/database/user/level.json', JSON.stringify(_level))
        }
        
        const getMiningJum = (userId, _dir) => {
            let position = null
            Object.keys(_dir).forEach((i) => {
                if (_dir[i].id === userId) {
                    position = i
                }
            })
            if (position !== null) {
                return _dir[position].jum
            }
        }

        const addMining = (userId, time, _dir) => {
            const obj = { id: userId, jum: 0, time: Date.now() + toMs(time) }
            _dir.push(obj)
            fs.writeFileSync('./lib/database/user/mining.json', JSON.stringify(_dir))
        }

        function addJumMining (userId, _dir) {
            var found = false;
            Object.keys(_dir).forEach((i) => {
                if(_dir[i].id == userId){
                    found = i
                }
            })
            if (found !== false) {
                _dir[found].jum += 1;
                fs.writeFileSync('./lib/database/user/mining.json',JSON.stringify(_dir));
            }
        }

        const addBg = (userId) => {
            const obj = { id: userId, link: './media/img/bg.png' }
            _bg.push(obj)
            fs.writeFileSync('./lib/database/user/background.json', JSON.stringify(_bg))
        }

        const getBg = (userId) => {
            let position = false
            Object.keys(_bg).forEach((i) => {
                if (_bg[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _bg[position].link
            }
        }

        const replaceBg = (userId, link) => {
            let position = false
            Object.keys(_bg).forEach((i) => {
                if (_bg[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _bg[position].link = link
                fs.writeFileSync('./lib/database/user/background.json', JSON.stringify(_bg))
            }
        }

        const addAfk = (userId, time, reason) => {
            let obj = {id: `${userId}`, time: `${time}`, reason: `${reason}`}
            _afk.push(obj)
            fs.writeFileSync('./lib/database/user/afk.json', JSON.stringify(_afk))
        }

        const getAfk = (userId) => {
            let isAfk = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    isAfk = true
                }
            })
            return isAfk
        }

        const getAfkReason = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].reason
            }
        }

        const getAfkTime = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].time
            }
        }

        const getAfkId = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].id
            }
        }
        const addReminder = (userId, message, time) => {
            const obj = { id: userId, msg: message, time: Date.now() + toMs(time) }
            _reminder.push(obj)
            fs.writeFileSync('./lib/database/user/reminder.json', JSON.stringify(_reminder))
        }

        const getReminderTime = (userId) => {
            let position = false
            Object.keys(_reminder).forEach((i) => {
                if(_reminder[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _reminder[position].time
            }
        }

        const getReminderMsg = (userId) => {
            let position = false
            Object.keys(_reminder).forEach((i) => {
                if (_reminder[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _reminder[position].msg
            }
        }

        const getReminderPosition = (userId) => {
            let position = false
            Object.keys(_reminder).forEach((i) => {
                if (_reminder[i].id === userId) {
                    position = i
                }
            })
            return position
        }
        //End AFK FUNCTION
        // AFK
        if (isGroupMsg) {
            const _pesanafk = JSON.parse(fs.readFileSync('./lib/database/user/pesanafk.json'))
            const checking = getAfk(sender.id)
            const pesanafk = body
            for (let ment of mentionedJidList) {
                if (getAfk(ment)) {
                    const getId = getAfkId(ment)
                    const getReason = getAfkReason(getId)
                    const getTime = getAfkTime(getId)
                    const pesanafk = {id: `${getId}|${sender.id}`, msg: pesanafk}
                    await _pesanafk.push(pesanafk)
                    await fs.writeFileSync('./lib/database/user/pesanafk.json', JSON.stringify(_pesanafk))
                    const getAfkPesanMsg = (userId) => {
                        let position = false
                        Object.keys(_pesanafk).forEach((i) => {
                            if(_pesanafk[i].id === userId) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            return _pesanafk[position].msg
                        }
                    }
                    const getAfkPosition = (userId) => {
                        let position = false
                        Object.keys(_pesanafk).forEach((i) => {
                            if (_pesanafk[i].id === userId) {
                                position = i
                            }
                        })
                        return position
                    }
                    await nao.reply(from, `*「 AFK 」*\n\nOrangnya lagi afk!, Pesan kamu telah tersampaikan\n➤ *Alasan*: ${getReason}\n➤ *Sejak*: ${getTime}`, id)
                    await nao.sendText(getId, `*「 AFK MESSAGE 」*\n\nKetika kamu AFK kamu mendapat pesan dari\n➤ *Pesan:* ${getAfkPesanMsg(`${getId}|${sender.id}`)}\n➤ *Waktu:* ${time}\n➤ *Dari:* wa.me/${sender.id.replace('@c.us', '')}`, id)
                    _pesanafk.splice(getAfkPosition(`${getId}|${sender.id}`), 1)
                    fs.writeFileSync('./lib/database/user/pesanafk.json', JSON.stringify(_pesanafk))
                }
            }
            if (checking && !isCmd) {
                await _afk.splice(sender.id, 1)
                await fs.writeFileSync('./lib/database/user/afk.json', JSON.stringify(_afk))
                nao.sendText(from, `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`)
            }
        }
        // PROTECT
        const isDetectorLink = antilink.includes(groupId)
        const isDetectorBadword = antibadword.includes(chatId)
        
        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isAfkOn = getAfk(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isSimi = isGroupMsg ? simi_.includes(groupId) : false
        const isWelcomeOn = isGroupMsg ? _welcome.includes(groupId) : false
        const isLeaveOn = isGroupMsg ? _leave.includes(groupId) : false
        const isHideppOn = _hidepp.includes(sender.id)
        const isRegisteredUser = _userRegister.includes(sender.id)
        const errorImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~!=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~!?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''

        if(!isRegisteredUser && isCmd) {
            await _userRegister.push(sender.id)
            await fs.writeFileSync('./lib/database/user/userreg.json', JSON.stringify(_userRegister))
        }

        const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        //Level
            //Function
            const setLevelAntiSpam = (userId) => {
                const obj = { id: userId, count: 0 }
                _levelAntiSpam.push(obj)
                fs.writeFileSync('./lib/database/user/antispam.json', JSON.stringify(_levelAntiSpam))
            }
            const getLevelAntiSpamId = (userId) => {
                let position = false
                Object.keys(_levelAntiSpam).forEach((i) => {
                    if (_levelAntiSpam[i].id === userId) {
                        position = i
                    }
                })
                if (position !== false) {
                    return _levelAntiSpam[position].id
                }
            }
            const getLevelAntiSpamCount = (userId) => {
                let position = false
                Object.keys(_levelAntiSpam).forEach((i) => {
                    if (_levelAntiSpam[i].id === userId) {
                        position = i
                    }
                })
                if (position !== false) {
                    return _levelAntiSpam[position].count
                }
            }
            const addLevelAntiSpamCount = (userId) => {
                let position = false
                Object.keys(_levelAntiSpam).forEach((i) => {
                    if (_levelAntiSpam[i].id === userId) {
                        position = i
                    }
                })
                if (position !== false) {
                    _levelAntiSpam[position].count += 1
                    fs.writeFileSync('./lib/database/user/antispam.json', JSON.stringify(_levelAntiSpam))
                }
            }
        if(isRegisteredUser && getLevelAntiSpamId(sender.id) == undefined) await setLevelAntiSpam(sender.id)
        const isSpamLevel = getLevelAntiSpamCount(sender.id) > 50
        if(isSpamLevel) {
            console.log('Spam Leveling: '+sender.id)
        }
        if (isRegisteredUser && isGroupMsg && !isBlocked && !isBanned && !isSpamLevel) {
            const currentLevel = getLevelingLevel(sender.id)
            const checkId = getLevelingId(sender.id)
            const checkBg = getBg(sender.id)
            addLevelAntiSpamCount(sender.id)
            try {
                if (currentLevel === undefined && checkId === undefined) await addLevelingId(sender.id)
                if (checkBg === undefined) addBg(sender.id)
                if(currentLevel < 5) {
                    var amountXpNambah = 1000
                } else if(currentLevel > 10) {
                    var amountXpNambah = 3250
                } else if(currentLevel > 7) {
                    var amountXpNambah = 2500
                } else if(currentLevel > 4) {
                    var amountXpNambah = 1750
                }
                if (getItemLevel(sender.id, _itemLevel) == undefined) {
                    var amountXpss = Math.floor(amountXpNambah)
                } else {
                    var amountXpss = Math.floor(amountXpNambah * getItemLevel(sender.id, _itemLevel))
                }
                const requiredXp = 4000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender.id)
                addLevelingXp(sender.id, amountXpss)
                if (requiredXp <= getLevelingXp(sender.id)) {
                    addLevelingLevel(sender.id, 1)
                    await nao.reply(from, `*「 LEVEL UP 」*\n\n➤ *Name*: ${pushname}\n➤ *XP*: ${numberWithCommas(getLevelingXp(sender.id))}\n➤ *Level*: ${getLevel} -> ${getLevelingLevel(sender.id)}\n\nOmedatou!! 🎉🎉`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }
        
        /*if(isGroupMsg && !isBlocked && !isBanned) {
            const currentRpgLvl = rpg.getLevel(sender.id, _rpgstat)
            const requiredRpgXp = 200 * (Math.pow(2, currentRpgLvl) - 1)
            try {
                if (requiredRpgXp <= rpg.getXp(sender.id, _rpgstat)) {
                    const getLevelRpg = rpg.getLevel(sender.id, _rpgstat)
                    await rpg.addLevel(sender.id, _rpgstat)
                    nao.reply(from, `*「 RPG LEVEL UP 」*\n\n➤ *Name*: ${pushname}\n➤ *XP*: ${rpg.getXp(sender.id, _rpgstat)}\n➤ *Level*: ${getLevelRpg} -> ${rpg.getLevel(sender.id, _rpgstat)}\n\nOmedatou!! 🎉🎉`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }*/
        if(isGroupMsg && !isBlocked && !isBanned) {
            if(kerjajob.getUserJobId(sender.id, _job) == undefined) await kerjajob.setUserJob(sender.id, _job)
            const currentJobLvl = kerjajob.getLvlJob(sender.id, _job)
            const requiredJobXp = 2000 * (Math.pow(2, currentJobLvl) - 1)
            try {
                if (requiredJobXp <= kerjajob.getXpJob(sender.id, _job)) {
                    const getLevelJob = kerjajob.getLvlJob(sender.id, _job)
                    await kerjajob.addJobLvl(sender.id, _job)
                    await kerjajob.addJobMulti(sender.id, _job)
                    if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                        var kerja = 'Miner/Penambang'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                        var kerja = 'Lumberjack/Penebang Pohon'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                        var kerja = 'Gojek'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                        var kerja = 'Tukang Sampah'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                        var kerja = 'Polisi'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                        var kerja = 'Prostitusi Online :V'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                        var kerja = 'Kantoran'
                    }
                    nao.reply(from, `*「 JOB LVL UP 」*\n\n➤ *Name*: ${pushname}\n➤ *XP*: ${kerjajob.getXpJob(sender.id, _job)}\n➤ *Level*: ${getLevelJob} -> ${kerjajob.getLvlJob(sender.id, _job)}\n➤ *JOB*: ${kerja}\n\nOmedatou!! 🎉🎉`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }

        // Countdown Function
        function getTimeRemaining(endtime){ //Format '12/31/2007' (Day/Month/Year)
            const total = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours = Math.floor( (total/(1000*60*60)) % 24 );
            const days = Math.floor( total/(1000*60*60*24) );
          
            return {
              total,
              days,
              hours,
              minutes,
              seconds
            };
          }
        
        // FUNCTION
                function isLimit(id){
                    if (isPrem) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                nao.reply(from, 'Limit anda sudah mencapai batas, coba esok hari :)', id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
                function limitAdd (id) {
                    if (isPrem) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }

                function limitMin (id, min) {
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += min;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }

                const getLimit = (userId) => {
                    let position = false
                    Object.keys(limit).forEach((i) => {
                        if (limit[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        return limit[position].limit
                    }
                }

                function limitGive (id, give) {
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= give;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }

                const getLimitPosition = (userId) => {
                    let position = null
                    Object.keys(limit).forEach((i) => {
                        if (limit[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== null) {
                        return position
                    }
                }
        
                function monospace(string) {
                    let _3 = '`'.repeat(3)
                    return _3 + string + _3
                }
                //FUNCTION SHOP BY DWIR
                    //Limit
                function limitMin5 (id) { //Buat ngurangin limit 5
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 5;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin10 (id) { //Buat ngurangin limit 10
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 10;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin15 (id) { //Buat ngurangin limit 15
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 15;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin20 (id) { //Buat ngurangin limit 20
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 20;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin25 (id) { //Buat ngurangin limit 25
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 25;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin30 (id) { //Buat ngurangin limit 30
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 30;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin35 (id) { //Buat ngurangin limit 35
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 35;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin40 (id) { //Buat ngurangin limit 40
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 40;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin45 (id) { //Buat ngurangin limit 45
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 45;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                function limitMin50 (id) { //Buat ngurangin limit 50
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= 50;
                        fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit));
                    }
                }
                    //
                    //ITEM
                    const getUserItemId = (userId, _dir) => {
                        let position = null
                        Object.keys(_dir).forEach((i) => {
                            if (_dir[i].id === userId) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            return _dir[position].id
                        }
                    }
                        //LEVEL
                    /*const getItemLevelPosition = (userId, _dir) => {
                        let position = null
                        Object.keys(_dir).forEach((i) => {
                            if (_dir[i].id === userId) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            return position
                        }
                    }*/

                    const addItemLevel = (userId, level, time, _dir) => {
                        const obj = { id: userId, level: level, time: Date.now() + toMs(time) }
                        _dir.push(obj)
                        fs.writeFileSync('./lib/database/user/item/itemLevel.json', JSON.stringify(_dir))
                    }

                    function addJumItemLevel (userId, amount, _dir) {
                        var found = false;
                        Object.keys(_dir).forEach((i) => {
                            if(_dir[i].id == userId){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _dir[found].level += amount;
                            fs.writeFileSync('./lib/database/user/item/itemLevel.json',JSON.stringify(_dir));
                        }
                    }
                    
                    /*const itemLevelCheck = (_dir) => {
                        setInterval(() => {
                            let position = null
                            Object.keys(_dir).forEach((i) => {
                                if (Date.now() >= _dir[i].time) {
                                    position = i
                                }
                            })
                            if (position !== null) {
                                console.log(`RESET XP MULTI: ${_dir[position].id}`)
                                _dir.splice(position, 1)
                                fs.writeFileSync('./lib/database/user/item/itemLevel.json', JSON.stringify(_dir))
                            }
                        }, 1000)
                    }*/
                    const MiningCheck = (_dir) => {
                        setInterval(() => {
                            let position = null
                            Object.keys(_dir).forEach((i) => {
                                if (Date.now() >= _dir[i].time) {
                                    position = i
                                }
                            })
                            if (position !== null) {
                                console.log(`RESET MINING: ${_dir[position].id}`)
                                _dir.splice(position, 1)
                                fs.writeFileSync('./lib/database/user/mining.json', JSON.stringify(_dir))
                            }
                        }, 1000)
                    }
                    //itemLevelCheck(_itemLevel)
                    MiningCheck(_mining)
                        //
                //End
                //FUNCTION PROFILE BY DWIR
                const getCmd = (userId) => {
                    let isCmd = false
                    Object.keys(_cmd).forEach((i) => {
                        if (_cmd[i].id === userId) {
                            isCmd = true
                        }
                    })
                    return isCmd
                }
                const iscmdadd = getCmd(sender.id)
                const addCmd = (userId, time, cmdan) => {
                    if (isPrem) {return;}
                    if (iscmdadd) {
                    let position = false
                        Object.keys(_cmd).forEach((i) => {
                        if (_cmd[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        _cmd[position].cmd += ', '+cmdan
                        fs.writeFileSync('./lib/database/user/cmd.json', JSON.stringify(_cmd))
                    }
                } else {
                    let obj = {id: `${userId}`, time: `${time}`, cmd: `${cmdan}`, jumlah: 1}
                    _cmd.push(obj)
                    fs.writeFileSync('./lib/database/user/cmd.json', JSON.stringify(_cmd))
                }
            }
                function CmdAddJum (id) {
                    if (isPrem) {return;}
                    var found = false;
                    Object.keys(_cmd).forEach((i) => {
                        if(_cmd[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        _cmd[found].jumlah += 1;
                        fs.writeFileSync('./lib/database/user/cmd.json',JSON.stringify(_cmd));
                    }
                }
                const getCmdmsg = (userId) => {
                    let position = false
                    Object.keys(_cmd).forEach((i) => {
                        if (_cmd[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        return _cmd[position].cmd
                    }
                }
                const getCmdjum = (userId) => {
                    let position = false
                    Object.keys(_cmd).forEach((i) => {
                        if (_cmd[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        return _cmd[position].jumlah
                    }
                }
                const getCmdPosition = (userId) => {
                    let position = null
                    Object.keys(_cmd).forEach((i) => {
                        if (_cmd[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== null) {
                        return position
                    }
                }
                const iscmdabai = getCmd(sender.id)
                const limidcmd = getCmdjum(sender.id) > 10

                //End
                //FUNCTION SET PREFIX BY DWIR
                const replacePref = (GrupId, prefix) => {
                    let position = false
                    Object.keys(_pref).forEach((i) => {
                        if (_pref[i].id === GrupId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        _pref[position].prefix = prefix
                        fs.writeFileSync('./lib/database/group/prefix.json', JSON.stringify(_pref))
                    }
                }
                //END
                //FUNCTION SET RULES BY DWIR
                const addrules = (GrupId) => {
                    const obj = { id: GrupId, rules: 'Rules: Invalid, untuk setrules ketik '+prefix+'setrules rulesnya' }
                    _rules.push(obj)
                    fs.writeFileSync('./lib/database/group/rules.json', JSON.stringify(_rules))
                }
                const getrules = (GrupId) => {
                    let position = false
                    Object.keys(_rules).forEach((i) => {
                        if (_rules[i].id === GrupId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        return _rules[position].rules
                    }
                }
                const replaceRules = (GrupId, rules) => {
                    let position = false
                    Object.keys(_rules).forEach((i) => {
                        if (_rules[i].id === GrupId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        _rules[position].rules = rules
                        fs.writeFileSync('./lib/database/group/rules.json', JSON.stringify(_rules))
                    }
                }
                //END
                //FUNCTION SETUSER PROFILE BY DWIR
                    //REMIND
                const addRemind = (userId, time, remind) => {
                    let obj = {id: `${userId}`, time: `${time}`, remind: `${remind}`}
                    _remind.push(obj)
                    fs.writeFileSync('./lib/database/user/remind.json', JSON.stringify(_remind))
                }
                const replaceRemind = (userId, remind) => {
                    let position = false
                    Object.keys(_remind).forEach((i) => {
                        if (_remind[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        _remind[position].remind = remind
                        fs.writeFileSync('./lib/database/user/remind.json', JSON.stringify(_remind))
                    }
                }
                const replaceRemindTime = (userId, time) => {
                    let position = false
                    Object.keys(_remind).forEach((i) => {
                        if (_remind[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        _remind[position].time = time
                        fs.writeFileSync('./lib/database/user/remind.json', JSON.stringify(_remind))
                    }
                }
                const getRemind = (userId) => {
                    let position = false
                    Object.keys(_remind).forEach((i) => {
                        if (_remind[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        return _remind[position].remind
                    }
                }
                const getRemindTime = (userId) => {
                    let position = false
                    Object.keys(_remind).forEach((i) => {
                        if (_remind[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        return _remind[position].time
                    }
                }
                    //END
                    //NAMA
                const addNama = (userId, nama) => {
                    let obj = {id: `${userId}`, nama: `${nama}`}
                    _nama.push(obj)
                    fs.writeFileSync('./lib/database/user/nama.json', JSON.stringify(_nama))
                }
                const replaceNama = (userId, nama) => {
                    let position = false
                    Object.keys(_nama).forEach((i) => {
                        if (_nama[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== false) {
                        _nama[position].nama = nama
                        fs.writeFileSync('./lib/database/user/nama.json', JSON.stringify(_nama))
                    }
                }
                    //END
                    //GENDER
                    const addGen = (userId, gender) => {
                        let obj = {id: `${userId}`, gender: `${gender}`}
                        _gender.push(obj)
                        fs.writeFileSync('./lib/database/user/gender.json', JSON.stringify(_gender))
                    }
                    const replaceGen = (userId, gender) => {
                        let position = false
                        Object.keys(_gender).forEach((i) => {
                            if (_gender[i].id === userId) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            _gender[position].gender = gender
                            fs.writeFileSync('./lib/database/user/gender.json', JSON.stringify(_gender))
                        }
                    }
                    const getGen = (userId) => {
                        let position = false
                        Object.keys(_gender).forEach((i) => {
                            if (_gender[i].id === userId) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            return _gender[position].gender
                        }
                    }
                    //END
                    //IG
                    const addIg = (userId, Ig) => {
                        let obj = {id: `${userId}`, ig: `${Ig}`}
                        _setig.push(obj)
                        fs.writeFileSync('./lib/database/user/ig.json', JSON.stringify(_setig))
                    }
                    const replaceIg = (userId, Ig) => {
                        let position = false
                        Object.keys(_setig).forEach((i) => {
                            if (_setig[i].id === userId) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            _setig[position].ig = Ig
                            fs.writeFileSync('./lib/database/user/ig.json', JSON.stringify(_setig))
                        }
                    }
                    const getIg = (userId) => {
                        let position = false
                        Object.keys(_setig).forEach((i) => {
                            if (_setig[i].id === userId) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            return _setig[position].ig
                        }
                    }
                    //END
                //END
            //FUNCTION ANTISUIDER
            const setMcount = (groupId, time, _dir) => {
                const obj = { id: groupId, time: Date.now() + toMs(time), set: '-' }
                _dir.push(obj)
                fs.writeFileSync('./lib/database/group/antisider/sider.json', JSON.stringify(_dir))
            }
            
            const setMcountData = (userId, _dir) => {
                const obj = { id: userId, msg: 0, last: '-'}
                _dir.push(obj)
                fs.writeFileSync(`./lib/database/group/antisider/database/${groupId}.json`, JSON.stringify(_dir))
            }
            
            const addMcountData = (userId, _dir) => {
                let position = false
                    Object.keys(_dir).forEach((i) => {
                    if (_dir[i].id === userId) {
                        position = i
                    }
                })
                if (position !== false) {
                    _dir[position].msg += 1
                    fs.writeFileSync(`./lib/database/group/antisider/database/${groupId}.json`, JSON.stringify(_dir))
                }
            }

            const replaceLastMsg = (userId, last, _dir) => {
                let position = false
                Object.keys(_dir).forEach((i) => {
                    if (_dir[i].id === userId) {
                        position = i
                    }
                })
                if (position !== false) {
                    _dir[position].last = last
                    fs.writeFileSync(`./lib/database/group/antisider/database/${groupId}.json`, JSON.stringify(_dir))
                }
            }

            const replaceSiderSet = (groupId, setting, _dir) => {
                let position = false
                Object.keys(_dir).forEach((i) => {
                    if (_dir[i].id === groupId) {
                        position = i
                    }
                })
                if (position !== false) {
                    _dir[position].set = setting
                    fs.writeFileSync('./lib/database/group/antisider/sider.json', JSON.stringify(_dir))
                }
            }

            const getMcountDataGroupSet = (groupId, _dir) => {
                let position = null
                Object.keys(_dir).forEach((i) => {
                    if (_dir[i].id === groupId) {
                        position = i
                    }
                })
                if (position !== null) {
                    return _dir[position].set
                }
            }

            const getMcountData = (userId, _dir) => {
                let position = null
                Object.keys(_dir).forEach((i) => {
                    if (_dir[i].id === userId) {
                        position = i
                    }
                })
                if (position !== null) {
                    return _dir[position].msg
                }
            }

            const getMcountDataId = (sider, _dir) => {
                let position = null
                Object.keys(_dir).forEach((i) => {
                    if (_dir[i].msg < sider) {
                        position = i
                    }
                })
                if (position !== null) {
                    var i;
                    for(i=0;i<_dir.length;i++){
                        if(_dir[i].msg < sider){
                            //console.log(_dir[i].id)
                            return(_dir[i].id);
                        }
                    }
                    //return Object.keys(_dir[position].id);
                   // return _dir[position].id
                }
            }

            /*const getMcountLastData = (userId, _dir) => {
                let position = null
                Object.keys(_dir).forEach((i) => {
                    if (_dir[i].id === userId) {
                        position = i
                    }
                })
                if (position !== null) {
                    return _dir[position].last
                }
            }*/

            const getMCountPosition = (groupId, _dir) => {
                let position = null
                Object.keys(_dir).forEach((i) => {
                    if (_dir[i].id === groupId) {
                        position = i
                    }
                })
                if (position !== null) {
                    return position
                }
            }

            const McountCheck = (_dir) => {
                setInterval(() => {
                    let position = null
                    Object.keys(_dir).forEach((i) => {
                        if (Date.now() >= _dir[i].time) {
                            position = i
                        }
                    })
                    if (position !== null) {
                const idgroup = _dir[position].id
                console.log(`Reset Sider: ${idgroup}`)
                if (getMcountDataGroupSet(idgroup, _sider) == '-') {
                    nao.sendText(idgroup, 'Reset Anti Sider Function')
                    nao.sendText(idgroup, 'Untuk Kick Para Sider sesuai jumlah pesan, *'+prefix+'setsider <nomer>')
                } else {
                    if(!isBotGroupAdmins) {
                        nao.sendText(idgroup, 'Untuk mengaktifkan fitur anti sider, Mohon Promote Bot Menjadi Admin Group')
                        _sider.splice(position, 1)
                        fs.writeFileSync('./lib/database/group/antisider/sider.json', JSON.stringify(_sider))
                        fs.unlinkSync(`./lib/database/group/antisider/database/${idgroup}.json`)
                        console.log('succes')
                    } else {
                        nao.sendText(idgroup, `*Saya akan kick orang2 yang jumlah pesannya di bawah ${getMcountDataGroupSet(idgroup, _sider)}*`)
                        const countMdataId = JSON.parse(fs.readFileSync(`./lib/database/group/antisider/database/${idgroup}.json`))
                        try {
                            var filtered = countMdataId.filter(function(val,i,arr){
                                return val.msg < getMcountDataGroupSet(idgroup, _sider);
                            });
                          
                            for(i=0;i<filtered.length;i++){
                                nao.removeParticipant(idgroup, filtered[i].id)
                                console.log(filtered[i].id);
                                }
                            nao.sendText(idgroup, 'Succes')
                        } catch (err) {
                            console.error(err)
                            nao.sendText(idgroup, 'Error')
                        }
                    }
                }
                _sider.splice(position, 1)
                fs.writeFileSync('./lib/database/group/antisider/sider.json', JSON.stringify(_sider))
                fs.unlinkSync(`./lib/database/group/antisider/database/${idgroup}.json`)
                console.log('succes')
                    }
                }, 1000)
            }

            McountCheck(_sider)

            if(isGroupMsg && fs.existsSync(`./lib/database/group/antisider/database/${groupId}.json`)) {
                const countMdata = JSON.parse(fs.readFileSync(`./lib/database/group/antisider/database/${groupId}.json`))
                if(getMcountData(sender.id, countMdata) == undefined) await setMcountData(sender.id, countMdata)
                addMcountData(sender.id, countMdata)
                replaceLastMsg(sender.id, body, countMdata)
            } else if(isGroupMsg && !fs.existsSync(`./lib/database/group/antisider/database/${groupId}.json`)) {
                await nao.sendText(from, '```Activating Anti Sider Function...```')
                try {
                    const siderTimeCount = Math.floor(6)
                    const siderTime = siderTimeCount+'d'
                    const groupMemCheck = await nao.getGroupMembers(groupId)
                    await fs.writeFileSync(`./lib/database/group/antisider/database/${groupId}.json`, JSON.stringify([]))
                    const countMdataa = JSON.parse(fs.readFileSync(`./lib/database/group/antisider/database/${groupId}.json`))
                    await setMcount(groupId, siderTime, _sider)
                    for (let i = 0; i < chat.groupMetadata.participants.length; i++) {
                        await setMcountData(groupMemCheck[i].id, countMdataa)
                    }
                    nao.sendText(from, 'Succes\n\nUntuk melakukan kick sider(otomatis): *'+prefix+'setsider <nomer>\nUntuk Reset Manual: '+prefix+'resetsider')
                    addMcountData(sender.id, countMdataa)
                } catch (err) {
                    console.error(err)
                    await nao.sendText(from, 'ERROR!')
                }
            }
            //END
            //FUNCTION JOIN
            const addJoinTime = (groupId, time, key) => {
                const obj = { id: groupId, time: Date.now() + toMs(time), key: key}
                _join.push(obj)
                fs.writeFileSync('./lib/database/group/join.json', JSON.stringify(_join))
            }
            /*const getJoinKey = (groupId) => {
                let position = null
                Object.keys(_join).forEach((i) => {
                    if (_join[i].id === groupId) {
                        position = i
                    }
                })
                if (position !== null) {
                    return _join[position].key
                }
            }
            const getJoinTime = (groupId) => {
                let position = null
                Object.keys(_join).forEach((i) => {
                    if (_join[i].id === groupId) {
                        position = i
                    }
                })
                if (position !== null) {
                    return _join[position].time
                }
            }
            const getJoinId = (groupId) => {
                let position = null
                Object.keys(_join).forEach((i) => {
                    if (_join[i].id === groupId) {
                        position = i
                    }
                })
                if (position !== null) {
                    return _join[position].id
                }
            }*/
            const joinTimeCheck = (_dir) => {
                setInterval(() => {
                    let position = null
                    Object.keys(_dir).forEach((i) => {
                        if (Date.now() >= _dir[i].time) {
                            position = i
                        }
                    })
                    if (position !== null) {
                        console.log(`KELUAR DARI GROUP: ${_dir[position].id}`)
                        nao.leaveGroup(_dir[position].id).then(() => nao.deleteChat(_dir[position].id))
                        console.log('succes')
                        _dir.splice(position, 1)
                        fs.writeFileSync('./lib/database/group/join.json', JSON.stringify(_dir))
                    }
                }, 1000)
            }
            const adduserKeyTime = (userId, time) => {
                const obj = { id: userId, time: Date.now() + toMs(time)}
                _joinclaimed.push(obj)
                fs.writeFileSync('./lib/database/user/joinclaimed.json', JSON.stringify(_joinclaimed))
            }
            const getuserKeyId = (userId) => {
                let position = null
                Object.keys(_joinclaimed).forEach((i) => {
                    if (_joinclaimed[i].id === userId) {
                        position = i
                    }
                })
                if (position !== null) {
                    return _joinclaimed[position].id
                }
            }
            const userKeyTimeCheck = (_dir) => {
                setInterval(() => {
                    let position = null
                    Object.keys(_dir).forEach((i) => {
                        if (Date.now() >= _dir[i].time) {
                            position = i
                        }
                    })
                    if (position !== null) {
                        console.log(`Reset Key Time: ${_dir[position].id}`)
                        console.log('succes')
                        _dir.splice(position, 1)
                        fs.writeFileSync('./lib/database/user/joinclaimed.json', JSON.stringify(_dir))
                    }
                }, 1000)
            }
            joinTimeCheck(_join)
            userKeyTimeCheck(_joinclaimed)
            //END
            //TEST
                function GenerateRandomNumber(min,max){
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                // Generates a random alphanumberic character
                function GenerateRandomChar() {
                    var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
                    var randomNumber = GenerateRandomNumber(0,chars.length - 1);
                    return chars[randomNumber];
                }
                function GenerateSerialNumber(mask){
                    var serialNumber = "";
                    if(mask != null){
                        for(var i=0; i < mask.length; i++){
                            var maskChar = mask[i];
                            serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                        }
                    }
                    return serialNumber;
                }
            //END
                //CLAIMER
                /*function HeroAddJum (userId) {
                    var found = false;
                    Object.keys(_hero).forEach((i) => {
                        if(_hero[i].id == userId){
                            found = i
                        }
                    })
                    if (found !== false) {
                        _hero[found].jumlah += 1;
                        fs.writeFileSync('./lib/database/claim/hero.json',JSON.stringify(_hero));
                    }
                }*/
                //AUTOMATOR
                /*const waktunya = Math.floor(Math.random() * 2) + 5
                const waktubrohei = waktunya+'m'
                const bangcode = GenerateSerialNumber("0000")
                if (claim.getTimeGroup(groupId, _timeclaim) == undefined) {
                    const karakternya = _kid[Math.floor(Math.random() * _kid.length)]
                    await claim.addTimeGroup(groupId, karakternya, bangcode, waktubrohei, _timeclaim)
                    nao.sendFileFromUrl(from, claim.getKarakter(karakternya, _karakter), karakternya+'.png', `Nama: ${claim.getKarakterNama(karakternya, _karakter)}\n\nID: ${claim.getTimeSerial(groupId, _timeclaim)}\nUntuk claim karakter ketik _!claim IdKarakter_`)
                }
                    await claim.claimCheck(_timeclaim)
                    //const karakternya = _kid[Math.floor(Math.random() * _kid.length)]
                    //nao.sendFileFromUrl(from, claim.getKarakter(karakternya, _kid), '648426.png', `Nama: ${claim.getKarakterNama(karakternya, _karakter)}\n\nID: ${claim.getKarakterId(karakternya, _karakter)}`)
                //END*/
                //BACKUP
                const BackupTime = Math.floor(6)
                const TimeNyaBackup = BackupTime+'h'
                const isi_Backup = Math.floor(_Backup)
                const addTimeBackup = (time, _dir) => {
                    const obj = { time: Date.now() + toMs(time) }
                    _dir.push(obj)
                    fs.writeFileSync('./lib/database/bot/backup.json', JSON.stringify(_dir))
                }
                const BackupCheck = (_dir) => {
                    setInterval(() => {
                        let position = null
                        Object.keys(_dir).forEach((i) => {
                            if (Date.now() >= _dir[i].time) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            console.log('BACKUP TIME!')
                            _dir.splice(position, 1)
                            fs.writeFileSync('./lib/database/bot/backup.json', JSON.stringify(_dir))
                        }
                    }, 1000)
                }
                if(_Backup == isi_Backup) {
                    await addTimeBackup(TimeNyaBackup, _Backup)
                    await nao.sendText('6281358181668@c.us', `Time: ${time}`)
                    await nao.sendText('6281358181668@c.us', `~ *USERDATA* ~`)
                    await nao.sendFile('6281358181668@c.us', './lib/database/user/level.json', 'level.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/user/money.json', 'money.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/user/job.json', 'job.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/user/cmd.json', 'cmd.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/user/limit.json', 'limit.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/user/userreg.json', 'userreg.json', '', id)
                    await nao.sendText('6281358181668@c.us', `~ *GROUPDATA* ~`)
                    await nao.sendFile('6281358181668@c.us', './lib/database/group/prefix.json', 'prefix.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/group/rules.json', 'rules.json', '', id)
                    await nao.sendText('6281358181668@c.us', `~ *CLAIMDATA* ~`)
                    await nao.sendFile('6281358181668@c.us', './lib/database/claim/hero.json', 'hero.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/claim/id.json', 'id.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/claim/karakter.json', 'karakter.json', '', id)
                    await nao.sendFile('6281358181668@c.us', './lib/database/claim/hero.json', 'hero.json', '', id)
                    await nao.sendText('6281358181668@c.us', `~ *BOTDATA* ~`)
                    await nao.sendFile('6281358181668@c.us', './naon.js', 'naon.js', '', id)
                    await nao.sendFile('6281358181668@c.us', './index.js', 'index.js', '', id)
                    await nao.sendText('6281358181668@c.us', `*_SUCCES_*`)
                    console.log('SUCCES')
                }
                BackupCheck(_Backup)
                kerjajob.WorkCheck(_worklimit)

                // Anti Spam Function (errror)
                /*const levelAntiSpam_time = Math.floor(1)
                const LevelAntiSpam_timeFilter = levelAntiSpam_time+'m'
                const levelAntiSpam_Filter = Math.floor(_levelAntiSpamTime)
                const addAntiSpamTime = (time, _dir) => {
                    const obj = { time: Date.now() + toMs(time) }
                    _dir.push(obj)
                    fs.writeFileSync('./lib/database/bot/antispamTime.json', JSON.stringify(_dir))
                }
                const antiSpamCheck = (_dir) => {
                    setInterval(() => {
                        let position = null
                        Object.keys(_dir).forEach((i) => {
                            if (Date.now() >= _dir[i].time) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            console.log('[INFO] RESET ANTISPAM!')
                            _dir.splice(position, 1)
                            fs.writeFileSync('./lib/database/bot/antispamTime.json', JSON.stringify(_dir))
                        }
                    }, 1000)
                }
                if(_levelAntiSpamTime == levelAntiSpam_Filter) {
                    await addAntiSpamTime(LevelAntiSpam_timeFilter, _levelAntiSpamTime)
                    fs.writeFileSync('./lib/database/user/antispam.json', JSON.stringify([]));
                }
                antiSpamCheck(_levelAntiSpamTime)*/

                // BanTemp By DWIR
                const setTempBan = (userId, time) => {
                    const obj = { id: userId, time: Date.now() + toMs(time) }
                    bannedTemp.push(obj)
                    fs.writeFileSync('./lib/database/bot/tempban.json', JSON.stringify(bannedTemp))
                }
                const cekBanTemp = (_dir) => {
                    setInterval(() => {
                        let position = null
                        Object.keys(_dir).forEach((i) => {
                            if (Date.now() >= _dir[i].time) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            console.log(`Unban: ${_dir[position].id}`)
                            _dir.splice(position, 1)
                            fs.writeFileSync('./lib/database/bot/tempban.json', JSON.stringify(_dir))
                            banned.splice(position, 1)
                            fs.writeFileSync('./lib/database/bot/banned.json', JSON.stringify(banned))
                            //nao.sendText(`${_dir[position].id}`, 'Kamu telah di unban')
                        }
                    }, 1000)
                }
                cekBanTemp(bannedTemp)
                // AntiSpam By DWIR [ERROR]
                /*const setAntiSpamMessage = (userId) => {
                    const obj = { id: userId, msg: 0, cmd: 0 }
                    antispamFeature.push(obj)
                    fs.writeFileSync('./lib/database/bot/antispam.json', JSON.stringify(antispamFeature))
                }
                const addAntiSpamMessage = (userId, _dir) => {
                    if(isPrem) return
                    var found = false;
                    Object.keys(_dir).forEach((i) => {
                        if(_dir[i].id == userId){
                            found = i
                        }
                    })
                    if (found !== false) {
                        _dir[found].msg += 1
                        fs.writeFileSync('./lib/database/bot/antispam.json',JSON.stringify(_dir))
                    }
                }
                const addAntiSpamCommand = (userId, _dir) => {
                    if(isPrem) return
                    var found = false;
                    Object.keys(_dir).forEach((i) => {
                        if(_dir[i].id == userId){
                            found = i
                        }
                    })
                    if (found !== false) {
                        _dir[found].cmd += 1
                        fs.writeFileSync('./lib/database/bot/antispam.json',JSON.stringify(_dir))
                    }
                }
                const getAntiSpamID = (userId, _dir) => {
                    let position = null
                    Object.keys(_dir).forEach((i) => {
                        if (_dir[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== null) {
                        return _dir[position].id
                    }
                }
                const getAntiSpamCmd = (userId, _dir) => {
                    let position = null
                    Object.keys(_dir).forEach((i) => {
                        if (_dir[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== null) {
                        return _dir[position].cmd
                    }
                }
                const getAntiSpamMessage = (userId, _dir) => {
                    let position = null
                    Object.keys(_dir).forEach((i) => {
                        if (_dir[i].id === userId) {
                            position = i
                        }
                    })
                    if (position !== null) {
                        return _dir[position].msg
                    }
                }
                const SpamCheckMessage = (_dir) => {
                        let position = null
                        Object.keys(_dir).forEach((i) => {
                            if (70 < _dir[i].msg) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            console.log(`Spam: ${_dir[position].id}`)
                            const obj = { id: _dir[position].id, time: Date.now() + toMs('1d') }
                            bannedTemp.push(obj)
                            fs.writeFileSync('./lib/database/bot/tempban.json', JSON.stringify(bannedTemp))
                            banned.push(_dir[position].id)
                            fs.writeFileSync('./lib/database/bot/banned.json', JSON.stringify(banned))
                            _dir.splice(position, 1)
                            fs.writeFileSync('./lib/database/bot/antispam.json', JSON.stringify(_dir))
                            const parsedBanTimeSpamMsg = '1Hari'
                            nao.sendTextWithMentions('6281341827661-1615547129@g.us', `@${_dir[position].id.replace('@c.us', '')} Telah diban\n\nAlasan: Spam Pesan\nDurasi: ${parsedBanTimeSpamMsg}`)
                        }
                }
                const SpamCheckCommand = (_dir) => {
                        let position = null
                        Object.keys(_dir).forEach((i) => {
                            if (40 < _dir[i].cmd) {
                                position = i
                            }
                        })
                        if (position !== null) {
                            console.log(`Spam: ${_dir[position].id}`)
                            const obj = { id: _dir[position].id, time: Date.now() + toMs('1d') }
                            bannedTemp.push(obj)
                            fs.writeFileSync('./lib/database/bot/tempban.json', JSON.stringify(bannedTemp))
                            banned.push(_dir[position].id)
                            fs.writeFileSync('./lib/database/bot/banned.json', JSON.stringify(banned))
                            _dir.splice(position, 1)
                            fs.writeFileSync('./lib/database/bot/antispam.json', JSON.stringify(_dir))
                            const parsedBanTimeSpamCmd = '1Hari'
                            nao.sendTextWithMentions('6281341827661-1615547129@g.us', `@${_dir[position].id.replace('@c.us', '')} Telah diban\n\nAlasan: Spam Command\nDurasi: ${parsedBanTimeSpamCmd}`)
                        }
                }
                SpamCheckCommand(antispamFeature)
                SpamCheckMessage(antispamFeature)
                if(getAntiSpamID(sender.id, antispamFeature) == undefined && !isBanned) {
                    await setAntiSpamMessage(sender.id)
                    if(isCmd) {
                        addAntiSpamCommand(sender.id, antispamFeature)
                    } else {
                        addAntiSpamMessage(sender.id, antispamFeature)
                    }
                } else if(getAntiSpamID(sender.id, antispamFeature) == sender.id && !isBanned) {
                    if(isCmd) {
                        addAntiSpamCommand(sender.id, antispamFeature)
                    } else {
                        addAntiSpamMessage(sender.id, antispamFeature)
                    }
                }*/
                
                // 
                function numberWithCommas(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                // Hits By DWIR
                const addHitsCount = (parameter, _dir) => {
                    var found = false;
                    Object.keys(_dir).forEach((i) => {
                        if(_dir[i].id == parameter){
                            found = i
                        }
                    })
                    if (found !== false) {
                        _dir[found].hits += 1;
                        fs.writeFileSync('./lib/database/bot/hits.json',JSON.stringify(_dir));
                    }
                }
                const getHitsCount = (parameter, _dir) => {
                    let position = null
                    Object.keys(_dir).forEach((i) => {
                        if (_dir[i].id === parameter) {
                            position = i
                        }
                    })
                    if (position !== null) {
                        return _dir[position].hits
                    }
                }
                if(isCmd) {
                    addHitsCount('total', hitsCount)
                    addHitsCount('today', hitsCount)
                }
                //END
                // END HELPER FUNCTION
                if (isGroupMsg && isDetectorLink && !isGroupAdmins && !isPrem && !isOwner){
                    if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                    //if (body.includes('chat.whatsapp.com')) {
                        const check = await nao.inviteInfo(chats)
                        if (!check) {
                            return
                        } else {
                            nao.reply(from, `*「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`, id).then(() => {
                                nao.removeParticipant(groupId, sender.id)
                            })
                        }
                    }
                }
                // MRHRTZ
                if (isGroupMsg && isDetectorBadword && !isGroupAdmins && !isAdmin && !isOwner){
                    if (chats.match("anjing") || chats.match("gblk") || chats.match("tolol") || chats.match("kntl")) {
                        if (!isGroupAdmins) {
                            return nao.reply(from, "JAGA UCAPAN DONG!! 😠", id)
                            .then(() => nao.removeParticipant(groupId, sender.id))
                            .then(() => {
                                nao.sendText(from, `*「 ANTI BADWORD 」*\nKamu berkata kasar, maaf kamu di kick dari grup 🙁`)
                            }).catch(() => nao.sendText(from, `Untung bukan admin group, kalo iya udah ku kick kamu -_-`))
                        } else {
                            return nao.reply(from, "Tolong jaga ucapan, banyak anak kecil", id)
                        }
                    }
                }
                
                if(body === prefix+'mute' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isGroupAdmins) return nao.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Admin Bot!', id)
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/group/muted.json', JSON.stringify(muted, null, 2))
                        nao.reply(from, 'Bot telah di mute pada chat ini! '+prefix+'unmute untuk unmute!', id)
                    }else{
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/group/muted.json', JSON.stringify(muted, null, 2))
                        reply(from, 'Bot telah di mute pada chat ini! '+prefix+'unmute untuk unmute!', id)
                    }
                }
                if(body === prefix+'unmute' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isGroupAdmins) return nao.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Admin Bot!', id)
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/group/muted.json', JSON.stringify(muted, null, 2))
                        nao.reply(from, 'Bot telah di unmute!', id)         
                    }else{
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/group/muted.json', JSON.stringify(muted, null, 2))
                        nao.reply(from, 'Bot telah di unmute!', id)                   
                    }
                }
                if (body === prefix+'unbanchat') {
                    if (!isOwner) return nao.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Owner Dwi!', id)
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    nao.reply('Global chat has been disable!')
                }
                // JS EVALUATE
            const util = require('util')
            const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor
            let rawText = type === 'chat' ?
            message.body :
            (type === 'image' || type === 'video') && caption ?
                message.caption : ''
        if ((rawText||'').startsWith('> ')  && isOwner) {
            console.log(sender.id, 'is trying to use the execute command')
            let type = Function
            if (/await/.test(rawText)) type = AsyncFunction
            let func = new type('print', 'nao', 'message', 'fetch', 'axios', 'addNameTag_tag','limitGive', 'getLevelingXp', 'getLevelingLevel', 'getPref', 'replaceLevelingXp', 'replacePref', 'getMcountDataId', 'getMcountDataGroupSet', 'toMs', /*'McountCheckId', 'McountCheckPos',I*/ 'fs', 'https', 'cmd', 'ti', 'cmd2case', !/^return /.test(rawText.slice(2)) && rawText.slice(2).split('\n').length === 1 ? 'return ' + rawText.slice(2) : rawText.slice(2))
            let output
            try {
                output = func((...args) => {
                    console.log(...args)
                    nao.reply(from, util.format(...args), id)
                }, nao, message, fetch, axios, addNameTag_tag, limitGive, getPref, replaceLevelingXp, getLevelingXp, getLevelingLevel, replacePref, getMcountDataId, getMcountDataGroupSet, toMs, /*McountCheckId, McountCheckPos,*/ fs, https, require, text => text.replace(/^(async function|function|async).+\(.+?\).+{/, `case 'command':`).replace(/this\.(text|url|args)/g, (_, text) => {
                  switch (text) {
                    case 'text': 
                        return "args.join(' ')"
                        break
                    case 'args': 
                        return "args"
                        break
                    case 'url': 
                        return "args[0]"
                        break
                    case 'prefix': 
                        return "prefix"
                        break
                    default: return _
                  }
                }).replace(/}$/, '    break'))
                console.log(output)
                nao.reply(from, '*Console Output*\n\n' + util.format(output), id)
            } catch (e) {
                nao.reply(from, '*Console Error*\n\n' + util.format(e), id)
            }
        }
        // [BETA] Avoid Spam Message
        //if (isCmd && isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        //if (isCmd && isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        if (isCmd && !isGroupMsg) {console.log(color('CMD ~>', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'white'), color(`${command} [${args.length}]`, 'cyan'), 'from', color(pushname, 'blue'))}
        if (isCmd && isGroupMsg) {console.log(color('CMD ~>', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'white'), color(`${command} [${args.length}]`, 'cyan'), 'from', color(pushname, 'blue'), 'in', color(name || formattedTitle, 'blue'))}
        // [BETA] Avoid Spam Message
        //addFilter(from)
        if (chats.match("cekprefix") || chats.match("Cekprefix") || chats.match("cekPrefix") || chats.match("CekPrefix")) {
            if(isGroupMsg) {
                nao.reply(from, `Prefix Group Ini: *${prefix}*`, id)
            } else {
                nao.reply(from, `Prefix: *${prefix}*`, id)
            }
        }
        //LONET FILTER
        /*if(type == 'chat' && !isBlocked && !isBanned) {
        const kata2Sayu = ['nao', 's a y u', 'sa yu', 'say u', 's ayu', 'naor', 'sa yu r', 's ayur', 'sa yur', 'say ur', 'nao r', 's a y u r']
        const kata2SayuLonet = ['lonte', 'l o n t e', 'lonthe', 'l o n t h e', 'l onthe', 'lo nthe', 'lon the', 'lont he', 'lonth e', 'l onte', 'lo nte', 'lon te', 'lont e', 'lont', 'lonet', 'l o n e t', 'l onet', 'lo net', 'lon et', 'lone t', 'lonthey', 'l o n t h e y', 'l onthey', 'lo nthey', 'lon they', 'lont hey', 'lonth ey', 'lonthe y', 'lo n they', 'bolong', 'b o l o n g', 'b olong', 'bo long', 'bol ong', 'bolo ng', 'bolon g', 'lontong', 'l ontong', 'lo ntong', 'lon tong', 'lont ong', 'lonto ng', 'lonton g', 'l o n t o n g', 'entot', 'entod', 'longgar', 'longar']
        const NoCek = sender.id
        const BodyToLowercase = body.toLowerCase()
        if (BodyToLowercase.includes('nao') || BodyToLowercase.includes('s a y u') || BodyToLowercase.includes('sa yu') || BodyToLowercase.includes('say u') || BodyToLowercase.includes('s ayu') || BodyToLowercase.includes('naor') || BodyToLowercase.includes('s ayur') || BodyToLowercase.includes('sa yur') || BodyToLowercase.includes('say ur') || BodyToLowercase.includes('nao r') || BodyToLowercase.includes('s a y u r')) {
        //if(!isCmd && kata2Sayu.includes(chats.toLowerCase())) {
        if (BodyToLowercase.includes('lonte') || BodyToLowercase.includes('l onte') || BodyToLowercase.includes('lo nte') || BodyToLowercase.includes('lon te') || BodyToLowercase.includes('lont e') || BodyToLowercase.includes('l o n t e') || BodyToLowercase.includes('lonthe') || BodyToLowercase.includes('l onthe') || BodyToLowercase.includes('lo nthe') || BodyToLowercase.includes('lon the') || BodyToLowercase.includes('lont he') || BodyToLowercase.includes('lonth e') || BodyToLowercase.includes('lont') || BodyToLowercase.includes('lonet') || BodyToLowercase.includes('l onet') || BodyToLowercase.includes('lo net') || BodyToLowercase.includes('lon et') || BodyToLowercase.includes('lone t') || BodyToLowercase.includes('lonthey') || BodyToLowercase.includes('l onthey') || BodyToLowercase.includes('lo nthey') || BodyToLowercase.includes('lon they') || BodyToLowercase.includes('lont hey') || BodyToLowercase.includes('lonth ey') || BodyToLowercase.includes('lonthe y') || BodyToLowercase.includes('bolong') || BodyToLowercase.includes('b olong') || BodyToLowercase.includes('bo long') || BodyToLowercase.includes('bol ong') || BodyToLowercase.includes('bolo ng') || BodyToLowercase.includes('bolon g') || BodyToLowercase.includes('lontong') || BodyToLowercase.includes('l ontong') || BodyToLowercase.includes('lo ntong') || BodyToLowercase.includes('lon tong') || BodyToLowercase.includes('lont ong') || BodyToLowercase.includes('lonto ng') || BodyToLowercase.includes('lonton g') || BodyToLowercase.includes('entot') || BodyToLowercase.includes('e ntot') || BodyToLowercase.includes('en tot') || BodyToLowercase.includes('ent ot') || BodyToLowercase.includes('ento t') || BodyToLowercase.includes('entod') || BodyToLowercase.includes('e ntod') || BodyToLowercase.includes('en tod') || BodyToLowercase.includes('ent od') || BodyToLowercase.includes('ento d') || BodyToLowercase.includes('ento') || BodyToLowercase.includes('longar') || BodyToLowercase.includes('longgar')) {
            //if(kata2SayuLonet.includes(chats.toLowerCase())) {
            await nao.contactBlock(NoCek)
            await banned.push(NoCek)
            fs.writeFileSync('./lib/database/bot/banned.json', JSON.stringify(banned))
            await nao.sendFile(from,  './media/img/menangis.png', 'menangis.png', '', id)
            await nao.sendText(from, 'Kamu telah diban')
            if (groupId == '6281341827661-1618123109@g.us') {
                nao.removeParticipant('6281341827661-1618123109@g.us', NoCek)
            }
            console.log('Mengejek '+NoCek)
        } else {
            console.log('MengManggil1 '+NoCek)
        }
    }
}*/
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) {
        //if (isCmd && !isOwner) return nao.reply(from, 'Offline', id)
        const setbotCMDDis = args[0].replace(prefix, '')
        if(isCmd && iscmdabai && limidcmd) return nao.reply(from, 'Anda telah _dibanned_\n*Karena menggunakan command yang tidak terdaftar*\nUntuk unban Join group dan minta unban ke owner\nhttps://chat.whatsapp.com/JGnhYUnQ92yEJ36azskqyY', id)
        if(isCmd && _setBotCMD.includes(setbotCMDDis)) return nao.reply(from, 'Command ini dinonaktifkan untuk sementara\n\nMungkin sedang ada Error/Spam/Bug', id)
        switch(command) {
        // Level [ALPHA]
        case prefix+'level':
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            var ngirimid = sender.id
            var namalevel = pushname
            if (mentionedJidList[0]) {
                var ngirimid = mentionedJidList[0]
                var namalevel = mentionedJidList[0]
            }
            const rankxpny = _level
            rankxpny.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            const userLevel = getLevelingLevel(ngirimid)
            const userXp = getLevelingXp(ngirimid)
            const rankUser = Math.floor(getLevelPosition(ngirimid)) + 1
            if (userLevel === undefined && userXp === undefined) return await nao.reply(from, 'Kamu belum memiliki level!', id)
            if(!isHideppOn) {
                var ppLink = await nao.getProfilePicFromServer(ngirimid)
            } else {
                var ppLink = errorImg
            }
            if (ppLink === undefined) {
                var pepe = errorImg
            } else {
                var pepe = ppLink
            }
            const bege = getBg(ngirimid)
            const iduser = ngirimid.substring(5, 9)
            const requiredXp = 4000 * (Math.pow(2, userLevel) - 1)
            const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
            const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
            const rank = new canvas.Rank()
                .setAvatar(pepe)
                .setLevel(userLevel)
                .setRank(1, '', false)
                .setCurrentXP(userXp)
                .setRequiredXP(requiredXp)
                .setRank(rankUser)
                .setProgressBar([randomHexs, randomHex], 'GRADIENT')
                .setBackground('IMAGE', bege)
                .setUsername(namalevel)
                .setDiscriminator(iduser)
            rank.build()
                .then(async (buffer) => {
                    canvas.write(buffer, `./lib/cache/level/${iduser}.png`)
                    await nao.sendFile(from, `./lib/cache/level/${iduser}.png`, `${iduser}.png`, `Rank: ${numberWithCommas(rankUser)}\nLevel: ${numberWithCommas(userLevel)}\nXp: ${numberWithCommas(userXp)}\nNextLevel: ${numberWithCommas(requiredXp)}`, id)
                    fs.unlinkSync(`./lib/cache/level/${iduser}.png`)
                })
                .catch(async (err) => {
                    console.error(err)
                    await nao.reply(from, `Error!\n${err}`, id)
                })
            break
        case prefix+'getpref':
            const prefny = getPref(groupId)
            nao.reply(from, prefny, id)
            break
        /*case prefix+'claim':
            var cekclaim = claimed.includes(sender.id)
            if(cekclaim) {
                return nao.reply(from, `Kamu sudah claim hari ini, Coba esok hari`, id)
            } else {
                await claimed.push(sender.id)
                fs.writeFileSync('./lib/database/user/claim.json', JSON.stringify(claimed))
                const amountXppp = Math.floor(Math.random() * 10) + 10000
                await addLevelingXp(sender.id, amountXppp)
                const sesudahxp = getLevelingXp(sender.id)
                nao.reply(from, `*「 CLAIM 」*\n\n➤ *Name*: ${pushname}\n➤ *XP+*: ${amountXppp}\n➤ *XP*: ${sesudahxp}`, id)
            }
            break*/
        case prefix+'redeem':
            if (args.length === 1) return nao.reply(from, 'Mohon masukkan kode Redeem', id)
            const reedem_Filter = args[1].toLowerCase()
            // Function 
            const getRedeemed = (kode) => {
                let position = false
                Object.keys(redeemedUser).forEach((i) => {
                    if (redeemedUser[i].code === kode) {
                        position = i
                    }
                })
                if (position !== false) {
                    return redeemedUser[position].userRedeemed
                }
            }
            const addUserRedeemed = (kode, userId) => {
                let position = false
                    Object.keys(redeemedUser).forEach((i) => {
                    if (redeemedUser[i].code === kode) {
                        position = i
                    }
                })
                if (position !== false) {
                    redeemedUser[position].userRedeemed += ','+userId
                    fs.writeFileSync('./lib/database/user/redeem.json', JSON.stringify(redeemedUser))
                }
            }
            if(reedem_Filter == 'hbd14owner') {
                const redeem_user_Filter = getRedeemed('HBD14OWNER').trim().split(',')
                var cekRedeem = redeem_user_Filter.includes(sender.id)
                if(cekRedeem) return nao.reply(from, 'Kode redeem sudah terpakai', id)
                nao.reply(from, 'Kode Redeem Expired', id)
                /*const redeem_reward_money_1 = Math.floor(50000)
                await addMoney(sender.id, redeem_reward_money_1)
                await addNameTag_tag(sender.id, '🎉ANNIVERSARY 14👑')
                await limitMin50(serial)
                await nao.reply(from, '*Succes Redeem*\n\nReward:\nx10 XP\nLimited NameTag\nMoney +50.000\nLimit +50', id)
                if(getUserItemId(sender.id, _itemLevel) == undefined) {
                    const waktunyaa = Math.floor(1)
                    const waktubroheii = waktunyaa+'d'
                    await addItemLevel(sender.id, 10, waktubroheii, _itemLevel)
                    nao.sendText(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`)
                } else {
                    await addJumItemLevel(sender.id, 10, _itemLevel)
                    nao.sendText(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`)
                }
                await addUserRedeemed('HBD14OWNER', sender.id)*/
            } else if(reedem_Filter == 'idulfitri1442h') {
                const redeem_user_Filter1 = getRedeemed('IDULFITRI1442H').trim().split(',')
                var cekRedeem1 = redeem_user_Filter1.includes(sender.id)
                if(cekRedeem1) return nao.reply(from, 'Kode redeem sudah terpakai', id)
                //nao.reply(from, 'Kode Redeem Expired', id)
                const redeem_reward_money_1 = Math.floor(75000)
                await addMoney(sender.id, redeem_reward_money_1)
                await addNameTag_tag(sender.id, '🙏 Berbahagia 😄')
                await limitMin50(serial)
                await nao.reply(from, '*Succes Redeem*\n\nReward:\nx20 XP\nLimited NameTag\nMoney +75.000\nLimit +50', id)
                if(getUserItemId(sender.id, _itemLevel) == undefined) {
                    const waktunyaa = Math.floor(1)
                    const waktubroheii = waktunyaa+'d'
                    await addItemLevel(sender.id, 20, waktubroheii, _itemLevel)
                    nao.sendText(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`)
                } else {
                    await addJumItemLevel(sender.id, 20, _itemLevel)
                    nao.sendText(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`)
                }
                await addUserRedeemed('IDULFITRI1442H', sender.id)
            } else {
                return nao.reply(from, 'Kode Redeem Tidak Valid', id)
            }
            break
        /*case prefix+'test123':
            const karakternya = _kid[Math.floor(Math.random() * _kid.length)]
            nao.sendFileFromUrl(from, claim.getKarakter(karakternya, _karakter), '648426.png', `Nama: ${claim.getKarakterNama(karakternya, _karakter)}\n\nID: ${claim.getKarakterId(karakternya, _karakter)}`)
            break*/
        case prefix+'buyall':
            const userXpBuyAllf = getLevelingXp(sender.id)
            console.log(userXpBuyAllf)
            const onelimitfresh = 10000
            const pajakBuyAllfresh = Math.floor(20000)
            var hasilLimitBuyAll = `${userXpBuyAllf / onelimitfresh - 2}`
            console.log(hasilLimitBuyAll)
            if (hasilLimitBuyAll == '0') return nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+userXpBuyAllf+'\nXp yang diperlukan: '+onelimit+' + 20000', id)
            const onelimit = -10000
            const pajakBuyAll = -20000
            if (hasilLimitBuyAll.includes(`.`)) {
                var filterBuyall = hasilLimitBuyAll.trim().split('.')
            } else {
                const filterBuyAll2 = hasilLimitBuyAll + '.'
                var filterBuyall = filterBuyAll2.trim().split('.')
            }
            const bayarLimitBuyAll = `${filterBuyall[0] * onelimit + pajakBuyAll}`
            const bayarLimitBuyAll2 = Math.floor(bayarLimitBuyAll)
            console.log(bayarLimitBuyAll)
            const filterBayarLimitBuyAll2 = bayarLimitBuyAll.replace('-', '')
            const filterBayarLimitBuyAll = Math.floor(filterBayarLimitBuyAll2)
            console.log(filterBayarLimitBuyAll)
            if (userXpBuyAllf > filterBayarLimitBuyAll) {
                await addLevelingXp(sender.id, bayarLimitBuyAll2)
                await addLevelingXp('6281358181668@c.us', pajakBuyAllfresh)
                await limitGive(sender.id, filterBuyall[0])
                nao.reply(from, 'Succes\nLimit: +'+filterBuyall[0]+'\nXp: '+bayarLimitBuyAll+'\n\nTerimakasih telah mampir', id)
            } else {
                nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+userXpBuyAllf+'\nXp yang diperlukan: '+filterBayarLimitBuyAll, id)
            }
            break
        case prefix+'buy':
            const userXpp = getLevelingXp(sender.id)
            if(args[1] == '1') {
                const amountXpp = Math.floor(Math.random() * 10) + 50000
                const amountXppmin = Math.floor(Math.random() * 10) - 50010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +5\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin5(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '2') {
                const amountXpp = Math.floor(Math.random() * 10) + 100000
                const amountXppmin = Math.floor(Math.random() * 10) - 100010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +10\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin10(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '3') {
                const amountXpp = Math.floor(Math.random() * 10) + 150000
                const amountXppmin = Math.floor(Math.random() * 10) - 150010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +15\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin15(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '4') {
                const amountXpp = Math.floor(Math.random() * 10) + 200000
                const amountXppmin = Math.floor(Math.random() * 10) - 200010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +20\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin20(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '5') {
                const amountXpp = Math.floor(Math.random() * 10) + 250000
                const amountXppmin = Math.floor(Math.random() * 10) - 250010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +25\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin25(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '6') {
                const amountXpp = Math.floor(Math.random() * 10) + 300000
                const amountXppmin = Math.floor(Math.random() * 10) - 300010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +30\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin30(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '7') {
                const amountXpp = Math.floor(Math.random() * 10) + 350000
                const amountXppmin = Math.floor(Math.random() * 10) - 350010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +35\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin35(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '8') {
                const amountXpp = Math.floor(Math.random() * 10) + 400000
                const amountXppmin = Math.floor(Math.random() * 10) - 400010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +40\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin40(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '9') {
                const amountXpp = Math.floor(Math.random() * 10) + 450000
                const amountXppmin = Math.floor(Math.random() * 10) - 450010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +45\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin45(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else if(args[1] == '10') {
                const amountXpp = Math.floor(Math.random() * 10) + 500000
                const amountXppmin = Math.floor(Math.random() * 10) - 500010
                if(userXpp > amountXpp) {
                    nao.reply(from, 'Succes\nLimit: +50\nXp: '+numberWithCommas(amountXppmin)+'\n\nTerimakasih telah mampir', id)
                    await addLevelingXp(sender.id, amountXppmin)
                    limitMin50(serial)
                } else {
                    nao.reply(from, '*GAGAL!*\nXp kamu tidak mencukupi\nXp kamu: '+numberWithCommas(userXpp)+'\nXp yang diperlukan: '+numberWithCommas(amountXpp), id)
                }
            } else {
                nao.reply(from, 'Ketik _'+prefix+'shop_ untuk melihat menu', id)
            }
            break
        case prefix+'test7765':
		    const currentLevel2 = getLevelingLevel(sender.id)
		    if(currentLevel2 < 5) {
                var amountXpNambah2 = 1000
            } else if(currentLevel2 > 10) {
                var amountXpNambah2 = 3250
            } else if(currentLevel2 > 7) {
                var amountXpNambah2 = 2500
            } else if(currentLevel2 > 4) {
                var amountXpNambah2 = 1750
            }
            if (getItemLevel(sender.id, _itemLevel) == undefined) {
                var amountXptest = Math.floor(amountXpNambah2)
            } else {
                var amountXptest = Math.floor(amountXpNambah2 * getItemLevel(sender.id, _itemLevel))
            }
            nao.reply(from, `${numberWithCommas(amountXptest)}`, id)
            break
        case prefix+'buyxp':
            if(args[1] == '1') {
                if(getUserItemId(sender.id, _itemLevel) == undefined) {
                    const uangnya = Math.floor(50000)
                    const waktunya = Math.floor(1)
                    const waktubrohei = waktunya+'d'
                    if(getMoney(sender.id) > uangnya) {
                        await addItemLevel(sender.id, 2, waktubrohei, _itemLevel)
                        await MinMoney(sender.id, 50000)
                        nao.reply(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`, id)
                    } else {
                        nao.reply(from, '*GAGAL!*\nUang kamu tidak mencukupi\nUang kamu: '+numberWithCommas(getMoney(sender.id))+'\nUang yang diperlukan 50000', id)
                    }
                } else {
                    const uangnya = Math.floor(50000)
                    if(getMoney(sender.id) > uangnya) {
                        await addJumItemLevel(sender.id, 1, _itemLevel)
                        await MinMoney(sender.id, 50000)
                        nao.reply(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`, id)
                    } else {
                        nao.reply(from, '*GAGAL!*\nUang kamu tidak mencukupi\nUang kamu: '+numberWithCommas(getMoney(sender.id))+'\nUang yang diperlukan 50000', id)
                    }
                }
            } else if(args[1] == '2') {
                if(getUserItemId(sender.id, _itemLevel) == undefined) {
                    const uangnya = Math.floor(75000)
                    const waktunya = Math.floor(1)
                    const waktubrohei = waktunya+'d'
                    if(getMoney(sender.id) > uangnya) {
                        await addItemLevel(sender.id, 3, waktubrohei, _itemLevel)
                        await MinMoney(sender.id, 75000)
                        nao.reply(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`, id)
                    } else {
                        nao.reply(from, '*GAGAL!*\nUang kamu tidak mencukupi\nUang kamu: '+numberWithCommas(getMoney(sender.id))+'\nUang yang diperlukan 75000', id)
                    }
                } else {
                    const uangnya = Math.floor(75000)
                    if(getMoney(sender.id) > uangnya) {
                        await addJumItemLevel(sender.id, 2, _itemLevel)
                        await MinMoney(sender.id, 75000)
                        nao.reply(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`, id)
                    } else {
                        nao.reply(from, '*GAGAL!*\nUang kamu tidak mencukupi\nUang kamu: '+numberWithCommas(getMoney(sender.id))+'\nUang yang diperlukan 75000', id)
                    }
                }
            } else if(args[1] == '3') {
                if(getUserItemId(sender.id, _itemLevel) == undefined) {
                    const uangnya = Math.floor(100000)
                    const waktunya = Math.floor(1)
                    const waktubrohei = waktunya+'d'
                    if(getMoney(sender.id) > uangnya) {
                        await addItemLevel(sender.id, 4, waktubrohei, _itemLevel)
                        await MinMoney(sender.id, 100000)
                        nao.reply(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`, id)
                    } else {
                        nao.reply(from, '*GAGAL!*\nUang kamu tidak mencukupi\nUang kamu: '+numberWithCommas(getMoney(sender.id))+'\nUang yang diperlukan 100000', id)
                    }
                } else {
                    const uangnya = Math.floor(100000)
                    if(getMoney(sender.id) > uangnya) {
                        await addJumItemLevel(sender.id, 3, _itemLevel)
                        await MinMoney(sender.id, 100000)
                        nao.reply(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`, id)
                    } else {
                        nao.reply(from, '*GAGAL!*\nUang kamu tidak mencukupi\nUang kamu: '+numberWithCommas(getMoney(sender.id))+'\nUang yang diperlukan 100000', id)
                    }
                }
            } else if(args[1] == '4') {
                if(getUserItemId(sender.id, _itemLevel) == undefined) {
                    const uangnya = Math.floor(125000)
                    const waktunya = Math.floor(1)
                    const waktubrohei = waktunya+'d'
                    if(getMoney(sender.id) > uangnya) {
                        await addItemLevel(sender.id, 5, waktubrohei, _itemLevel)
                        await MinMoney(sender.id, 150000)
                        nao.reply(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`, id)
                    } else {
                        nao.reply(from, '*GAGAL!*\nUang kamu tidak mencukupi\nUang kamu: '+numberWithCommas(getMoney(sender.id))+'\nUang yang diperlukan 125000', id)
                    }
                } else {
                    const uangnya = Math.floor(125000)
                    if(getMoney(sender.id) > uangnya) {
                        await addJumItemLevel(sender.id, 4, _itemLevel)
                        await MinMoney(sender.id, 125000)
                        nao.reply(from, `SUCCES!\nLevel x${getItemLevel(sender.id, _itemLevel)}`, id)
                    } else {
                        nao.reply(from, '*GAGAL!*\nUang kamu tidak mencukupi\nUang kamu: '+numberWithCommas(getMoney(sender.id))+'\nUang yang diperlukan 125000', id)
                    }
                }
            }
            break
        case prefix+'mining':
            const waktumining = Math.floor(1)
            const wakturesetmining = waktumining+'d'
            const randommoney = Math.floor(Math.random() * 500) + 500
            if(getMiningJum(sender.id, _mining) > 5) return nao.reply(from, 'Kamu sudah menambang berkali2, tunggu 1 hari untuk menambang kembali', id)
            if (getMoney(sender.id) === undefined) await setMoney(sender.id)
            if(getMiningJum(sender.id, _mining) == undefined) await addMining(sender.id, wakturesetmining, _mining)
                await addJumMining(sender.id, _mining)
                nao.reply(from, `Kamu Menambang dan Mendapat $${randommoney}`, id)
            break
        case prefix+'setbg':
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            if (isMedia && isImage || isQuotedImage) {
                const levels = getLevelingLevel(sender.id)
                const xps = getLevelingXp(sender.id)
                if (levels === undefined && xps === undefined) return await nao.reply(from, 'Kamu belum memiliki level!', id)
                if (fs.existsSync(`./media/user/level/${sender.id}.png` || `./media/user/level/${sender.id}.jpg`)) await fs.unlinkSync(`./media/user/level/${sender.id}.png` || `./media/user/level/${sender.id}.jpg`)
                const encryptMediaa = isQuotedImage ? quotedMsg : message
                const mediaDataa = await decryptMedia(encryptMediaa, uaOverride)
                await fs.writeFileSync(`./media/user/level/${sender.id}.png`, mediaDataa)
                await replaceBg(sender.id, `./media/user/level/${sender.id}.png`)
                nao.reply(from, 'Success set new background!', id)
            } else {
                await nao.reply(from, 'Format salah\nSilahkan reply pesan dengan gambar', id)
            }
            break
        case prefix+'setbg2':
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            if (args.length === 1) return nao.reply(from, '. _  .', id)
                const levelsa = getLevelingLevel(sender.id)
                const xpsa = getLevelingXp(sender.id)
                if (levelsa === undefined && xpsa === undefined) return await nao.reply(from, 'Kamu belum memiliki level!', id)
                if (fs.existsSync(`./media/user/level/${sender.id}.png`)) await fs.unlinkSync(`./media/user/level/${sender.id}.png`)
                await replaceBg(sender.id, args[1])
                nao.reply(from, 'Success set new background!', id)
            break
        case prefix+'imagetourl':
        case prefix+'tourl':
            if (isMedia && isImage || isQuotedImage) {
                await nao.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu!', id)
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                await nao.reply(from, linkImg, id)
            } else {
                await nao.reply(from, 'Format salah\nSilahkan reply pesan dengan gambar', id)
            }
            break
        case prefix+'leaderboard':
            if (!isLevelingOn) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            const resp = _level
            resp.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
            let nom = 0
            try {
                for (let i = 0; i < 10; i++) {
                    nom++
                    leaderboard += `${nom}. @${resp[i].id.replace('@c.us', '')}\n➤ XP: *${resp[i].xp}* Level: *${resp[i].level}*\n\n`
                }
                await nao.sendTextWithMentions(from, leaderboard)
            } catch (err) {
                console.error(err)
                await nao.reply(from, 'Perlu setidaknya *10* user yang memiliki level di database!', id)
            }
            break
        /*case prefix+'grlead':
            if(!isGroupMsg) return
            const groupXpMem = await nao.getGroupMembers(groupId)
            const groupxpid = groupId//.trim().split('-')
            const bukaturung = []
            var jadibukatu = JSON.stringify(bukaturung)
            await fs.writeFile("./lib/database/group/"+groupxpid.replace('@g.us', '')+".json", jadibukatu)
            const _grlevel = JSON.parse(fs.readFileSync(`./lib/database/group/${groupxpid.replace('@g.us', '')}.json`))
            let groupleader = '-----[ *GROUP LEADERBOARD* ]----\n\n'
            let nomglup = 0
            for (let i = 0; i < groupXpMem.length; i++) {
                const grouplead = {id: groupXpMem[i].id, xp: getLevelingXp(groupXpMem[i].id), level: getLevelingLevel(groupXpMem[i].id)}
                //grouplead += `${nomglup}. Nama: @${groupXpMem[i].id.replace('@c.us', '')}\n     XP: *${getLevelingXp(groupXpMem[i].id)}*\n     Level: *${getLevelingLevel(groupXpMem[i].id)}*\n\n`
                await _grlevel.push(grouplead)
                await fs.writeFileSync(`./lib/database/group/${groupxpid.replace('@g.us', '')}.json`, JSON.stringify(_grlevel))
            }
            const grlevel = JSON.parse(fs.readFileSync(`./lib/database/group/${groupxpid.replace('@g.us', '')}.json`))
            const respg = grlevel
            await respg.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            for (let i = 0; i < 10; i++) {
                nomglup++
                groupleader += `${nomglup}. @${respg[i].id.replace('@c.us', '')}\n➤ XP: *${respg[i].xp}* Level: *${respg[i].level}*\n\n`
            }
            await sleep(2000)
            await nao.reply(from, groupleader, id)
            await sleep(10000)
            fs.unlinkSync(`./lib/database/group/${groupxpid.replace('@g.us', '')}.json`)
            break*/
        case prefix+'alllvl':
        case prefix+'allvl':
            if (!isLevelingOn) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            const respp = _level
            const nolvl = _level.length
            respp.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            let allleaderboard = `-----[ *TOP 100* ]----\n\n
            ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
            `
            let nomm = 0
            try {
                for (let i = 0; i < 100; i++) {
                    nomm++
                    allleaderboard += `${nomm}. @${respp[i].id.replace('@c.us', '')}\n➤ XP: *${respp[i].xp}* Level: *${respp[i].level}*\n\n`
                }
                await nao.sendTextWithMentions(from, allleaderboard)
                nao.sendText(from, 'Hati2 Ngelag')
            } catch (err) {
                console.error(err)
                await nao.reply(from, 'Perlu setidaknya *10* user yang memiliki level di database!', id)
            }
            break
        /*case prefix+'test77945':
            if(!isOwner) return
            try {
                for (let i = 0; i < _kid.length; i++) {
                    const banggiiin = '"'+_kid[i]+'"'
                    const giniinbangsat = '{"id":'+banggiiin+',"hp": ,"attack":},'
                    fs.writeFile(`./lib/database/rpg/herostat/test.json`, giniinbangsat)
                }
                await nao.reply(from, 'SUCCES', id)
            } catch (err) {
                console.error(err)
                //await nao.reply(from, 'Perlu setidaknya *10* user yang memiliki level di database!', id)
            }
            break*/
        /*case prefix+'test66698':
            if(!isOwner) return
            try {
                for (let i = 0; i < _kid.length; i++) {
                    const banggiiin = '"'+_kid[i]+'"'
                    const giniinbangsat = '[{"id":'+banggiiin+',"hp": ,"attack": ,"xp": ,"level": }]'
                    fs.writeFile(`./lib/database/rpg/herostat/${_kid[i]}.json`, giniinbangsat)
                }
                await nao.reply(from, 'SUCCES', id)
            } catch (err) {
                console.error(err)
                //await nao.reply(from, 'Perlu setidaknya *10* user yang memiliki level di database!', id)
            }
            break*/
        case prefix+'hoki':
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik !limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isGroupMsg) return nao.reply(from, 'Maaf, perintah ini hanya dapat dilakukan didalam group!', id)
            //nao.reply(from, 'Gw offin banyak yang nyepam\n. _   .')
            const perhok = Math.floor(Math.random() * 100)
            console.log(perhok)
            var hokimen = 'Keberuntungan anda: '+perhok+'%\n'+pushname
            nao.reply(from, hokimen, id)
            if (perhok > 90) {
                const amountXp = Math.floor(Math.random() * 10) + 1000
                addLevelingXp(sender.id, amountXp) 
                await nao.sendText(from, 'Selamat anda mendapatkan tambahan xp '+amountXp)
            } else {
                nao.sendText(from, 'Yah kamu gak dapet tambahan xp')
            }
            limitAdd(serial)
            break
        //AFK
        case prefix+'afk':
            if (!isGroupMsg) return await nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isAfkOn) return await nao.reply(from, 'Fitur AFK telah diaktifkan sebelumnya.', id)
            const reason = q ? q : 'Nothing.'
            addAfk(sender.id, time, reason)
            await nao.reply(from, `Fitur AFK berhasil *diaktifkan*!\n\n➤ *Username*: ${pushname}\n➤ *Alasan*: ${reason}`, id)
            break
        //Reminder
        case prefix+'reminder': // by Slavyan
            const timeRemind = args[1]
            const messRemind = body.slice(14)
            console.log(timeRemind)
            const parsedTime = ms(toMs(timeRemind))
            addReminder(sender.id, messRemind, timeRemind)
            await nao.sendTextWithMentions(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n➤ *Pesan*: ${messRemind}\n➤ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik\n➤ *Untuk*: @${sender.id.replace('@c.us', '')}`, id)
            const intervRemind = setInterval(async () => {
                if (Date.now() > getReminderTime(sender.id)) {
                    await nao.sendTextWithMentions(from, `⏰ *「 REMINDER 」* ⏰\n\nKring~ @${sender.id.replace('@c.us', '')}\n\n➤ *Pesan*: ${getReminderMsg(sender.id)}`)
                    _reminder.splice(getReminderPosition(sender.id), 1)
                    fs.writeFileSync('./lib/database/user/reminder.json', JSON.stringify(_reminder))
                    clearInterval(intervRemind)
                }
            }, 1000)
            break
        //Claim
        case prefix+'claim':
            break
        /*case prefix+'claim': // by DWIR
            if (!isGroupMsg) return await nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return nao.reply(from, 'Mohon isi ID nya!', id)
            const idauth = claim.getTimeSerial(groupId, _timeclaim)
            const idkarakter = claim.getTimeId(groupId, _timeclaim)
            if(args[1] == idauth) {
                if(claim.getTimeJum(groupId, _timeclaim) > 0) return nao.reply(from, 'Karakter ini sudah diclaim\nTunggu 5 menit untuk karakter berikutnya', id)
                if (claim.getHero(sender.id, _hero) === undefined) {
                    await claim.addHero(sender.id, '9172', 'Diana', _hero)
                }
                if (claim.getHero(sender.id, _hero).includes(idkarakter)) return nao.reply(from, 'Anda sudah memiliki karakter ini!', id)
                const namahero = await claim.getKarakterNama(idkarakter, _karakter)
                await claim.addKid(sender.id, idkarakter, _hero)
                claim.addNama(sender.id, namahero, _hero)
                HeroAddJum(sender.id)
                nao.reply(from, 'Karakter sukses diclaim\nKetik _'+prefix+'hero_ untuk melihat hero anda', id)
                claim.addTimeJum(groupId, _timeclaim)
                await sleep(300000) //5 menit
	            _timeclaim.splice(claim.getTimePosition(groupId, _timeclaim), 1)
                fs.writeFileSync('./lib/database/claim/time.json', JSON.stringify(_timeclaim))
            } else {
                nao.reply(from, 'ID tidak ditemukan\nMohon isi dengan benar!', id)
            }
            break
        case prefix+'setchara':
            if(!isOwner) return nao.reply(from, 'Restricted command', id)
            if(_kid.includes(args[1])) return nao.reply(from, 'ID sudah ada\nMohon pilih ID yang lain', id)
            if(args[1].length > 4) return nao.reply(from, 'ID harus 4 angka!\nTidak boleh lebih dari 4 angka!', id)
            if(args[1].length < 4) return nao.reply(from, 'ID harus 4 angka!\nTidak boleh kurang dari 4 angka!', id)
            if (isMedia && isImage || isQuotedImage) {
                await nao.reply(from, mess.wait, id)
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const linkImg = await uploadImages(mediaData, `${args[1]}_img`)
                await claim.addKarakter(args[1], linkImg, body.slice(15), _karakter)
                _kid.push(args[1])
                fs.writeFileSync('./lib/database/claim/id.json', JSON.stringify(_kid))
                nao.reply(from, `Character set!\nID: ${args[1]}\nName: ${body.slice(15)}`, id)
            } else {
                await nao.reply(from, 'Format salah\nSilahkan reply pesan dengan gambar', id)
            }
            break*/
        //RPG
        /*case prefix+'test7765':
            if(!isOwner) return
            if(args[1].includes(',')) {
                var bangitung = args[1].trim().split(',')
                var itungan = bangitung[0]
            } else {
                var itungan = args[1]
            }
            nao.reply(from, `${itungan}`, id)
            break 
        case prefix+'sethero_sao':
            if(!isOwner) return nao.reply(from, 'Restricted command', id)
            if(_rpgid.includes(args[1])) return nao.reply(from, 'ID sudah ada\nMohon pilih ID yang lain', id)
            if(args[1].length > 5) return nao.reply(from, 'ID harus 4 angka!\nTidak boleh lebih dari 5 angka!', id)
            if(args[1].length < 5) return nao.reply(from, 'ID harus 4 angka!\nTidak boleh kurang dari 5 angka!', id)
                await nao.reply(from, mess.wait, id)
                await rpg.addHeroSAO(args[1], args[2], args[3], args[4], args[5], _rpgsao)
                _rpgid.push(args[1])
                fs.writeFileSync('./lib/database/rpg/database/id.json', JSON.stringify(_rpgid))
                nao.reply(from, `Character set!\nID: ${args[1]}\nName: ${args[2]}\nHP: ${args[3]}\nATK: ${args[4]}\nLangka: ${args[5]}`, id)
            break
        case prefix+'hero':
            if(!isOwner) return
            if (args.length === 1) {
                const getHeroRpg = rpg.getHero(sender.id, _rpgstat)
                const getHeroHaveRpg = rpg.getHeroHave(sender.id, _rpgstat)
                nao.reply(from, `Hero Yang Dipakai: ${getHeroRpg}\n\nHero yang dimiliki: ${getHeroHaveRpg}`, id)
            } else if(args[1] == 'set') {
                if(!args[2].includes(rpg.getHeroHave(sender.id, _rpgstat))) return nao.reply(from, 'Anda tidak memiliki hero tersebut', id)
                if(!args[2].includes(_rpgid)) return nao.reply(from, 'ID hero tersebut tidak ada', id)
                const heronypisah = rpg.getHero
            }
            break
        case prefix+'test8858':
            var pisahhero = rpg.getHero(sender.id, _rpgstat).trim().split(',').length
            if(getHero(sender.id, _rpgstat) == undefined) {
                var pisahhero = 'Anda tidak mempunyai hero apapun'
            }
            nao.reply(from, `${pisahhero}`, id)
            break
        case prefix+'rprofile':
            if(!isOwner) return
            var filtered = countMdataId.filter(function(val,i,arr){
                return val.msg //< getMcountDataGroupSet(idgroup, _sider);
            });
          
            for(i=0;i<filtered.length;i++){
                //nao.removeParticipant(idgroup, filtered[i].id)
                console.log(filtered[i].id);
                }
            const getUserStatLevel = rpg.getLevel(sender.id, _rpgstat)
            const getUserStatXp = rpg.getXp(sender.id, _rpgstat)
            const getUserStatCoin = rpg.getCoin(sender.id, _rpgstat)
            const getUserStatHero = rpg.getHero(sender.id, _rpgstat)
            const getUserStatHeroHave = rpg.getHeroHave(sender.id, _rpgstat)
            const getUserStatStamina = rpg.getStamina(sender.id, _rpgstat)
            const ppwa = await nao.getProfilePicFromServer(sender.id)
            if (getUserStatLevel === undefined) await rpg.setRpgUserStat(sender.id, _rpgstat)
            nao.sendFileFromUrl(from, ppwa, '', `Level: ${getUserStatLevel}\nXP: ${getUserStatXp}\n\nCoin: ${getUserStatCoin}\nStamina: ${getUserStatStamina}\n\nHero: ${getUserStatHero}\nHero Have: ${getUserStatHeroHave}`, id)
            break
        case prefix+'fight':
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *'+prefix+'fight* @tagmember', id)
            if (mentionedJidList.length !== 1) return nao.reply(from, 'Maaf, hanya bisa Tarunq ke 1 user', id)
            break
        case prefix+'hero':
            nao.reply(from, `Hero yang anda miliki: ${claim.getHero(sender.id, _hero)}\nTotal: ${claim.getHeroJum(sender.id, _hero)}`, id)
            break*/
            //
        case prefix+'crem':
            nao.reply(from, '*s* - detik\n*m* - menit\n*h* - jam\n*d* - hari', id)
            break
        case prefix+'banchat':
            if (setting.banChats === true) return
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Dwi!', id)
            setting.banChats = true
            banChats = true
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
            nao.reply('Global chat has been enable!')
            break
        case prefix+'unmute':
            console.log(`Unmuted ${name}!`)
            await nao.sendSeen(from)
            break
        case prefix+'mute':
            console.log(`Muted ${name}!`)
            await nao.sendSeen(from)
            break
        case prefix+'unbanchat':
            console.log(`Banchat ${name}!`)
            await nao.sendSeen(from)
            break
        case prefix+'sticker':
        case prefix+'stiker':
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await nao.sendImageAsSticker(from, imageBase64)
                limitAdd(serial)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await nao.sendImageAsSticker(from, imageBase64)
                limitAdd(serial)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await nao.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    nao.reply(from, mess.error.Iv, id)
                }
            } else {
                    nao.reply(from, mess.error.St, id)
            }
            break
        case prefix+'ttp':
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const { getStickerMaker } = require('./lib/ttp')
                if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
                limitAdd(serial)
                try
                {
                    const string = body.toLowerCase().includes(prefix+'ttp') ? body.slice(5) : body.slice(5)
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await nao.sendImageAsSticker(from, gasMake.base64)
                                }catch(err) {
                                    await nao.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await nao.reply(from, gasMake.reason, id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await nao.sendImageAsSticker(from, gasMake.base64)
                                }catch(err) {
                                    await nao.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await nao.reply(from, gasMake.reason, id)
                            }
                        }
                       
                    }else{
                        await nao.reply(from, 'Tidak boleh kosong.', id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
            break
        case prefix+'ttg':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}ttg [ Teks ]*, contoh *${prefix}ttg aku bukan boneka*`, id)
                        const stikerbang = axios.get(`https://tobz-api.herokuapp.com/api/ttp?text=${body.slice(5)}&apikey=${tobzkey}`)
                        await nao.sendImageAsSticker(from, stikerbang.data.base64)
                        limitAdd(serial)
                } else {
                    const stikernya = axios.get(`https://tobz-api.herokuapp.com/api/ttp?text=${quotedMsgObj}&apikey=${tobzkey}`)
                    await nao.sendImageAsSticker(from, stikernya.data.base64)
                    limitAdd(serial)
                }
            } catch(e) {
                console.log(e)
                nao.reply(from, 'Maaf, Server sedang Error')
            }
            break
        case prefix+'toimg':
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                nao.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu!`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await nao.sendFile(from, imageBase64, 'imagesticker.jpg', 'Success Convert Sticker to Image!', id)
                limitAdd(serial)
            } else if (!quotedMsg) return nao.reply(from, `Mohon tag sticker yang ingin dijadikan gambar!`, id)
            break
        case prefix+'stickergif': // INSTALL FFMPEG, IF YOU WANT THIS COMMAND WORK!
        case prefix+'stikergif': // TUTORIAL IN README, PLEASE READ!
        case prefix+'sgif': // MRHRTZ
        if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (isMedia || isQuotedVideo) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    var mediaData = await decryptMedia(message, uaOverride)
                    nao.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    limitAdd(serial)
                    var filename = `./media/stickergif.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/stickergf.gif --fps=20 --scale=240:240`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./media/stickergf.gif', { encoding: "base64" })
                        await nao.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            nao.reply(from, 'Maaf filenya terlalu besar!', id)
                        })
                    })
                  } else {
                    nao.reply(from, `[❗] Kirim gif dengan caption *${prefix}stickergif* max 10 sec!`, id)
                   }
                } else {
		    nao.reply(from, `[❗] Kirim gif dengan caption *${prefix}stickergif*`, id)
	        }
            break
        case prefix+'stickerlightning':
        case prefix+'slightning':
        case prefix+'slight':
             nao.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await nao.sendStickerfromUrl(from, Slight)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await nao.sendStickerfromUrl(from, Slight)
            } else {
                await nao.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan !slight`, id)
            }
            break
        case prefix+'stickerfire':
        case prefix+'sfire':
            nao.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await nao.sendStickerfromUrl(from, Sfire)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await nao.sendStickerfromUrl(from, Sfire)
            } else {
                await nao.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan !sfire`, id)
            }
            break
        case prefix+'groupinfo' :
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var antlink = antilink.includes(chat.id)
            var simu = simi_.includes(chat.id)
            var antbad = antibadword.includes(chat.id)
            var grouppic = await nao.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await nao.sendFileFromUrl(from, pfp, 'group.png', `*「 GROUP INFO 」*
*➤ *Nama : ${groupname}* 
*➤ Member : ${totalMem}*
*➤ Welcome : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
*➤ Left : ${leftgrp ? 'Aktif' : 'Tidak Aktif'}*
*➤ NSFW : ${ngrp ? 'Aktif' : 'Tidak Aktif'}*
*➤ Simsimi : ${simu ? 'Aktif' : 'Tidak Aktif'}*
*➤ Anti Link : ${antlink ? 'Aktif' : 'Tidak Aktif'}*
*➤ Anti Badword : ${antbad ? 'Aktif' : 'Tidak Aktif'}*
*➤ Deskripsi Group* 
${desc}`)
            break
        case prefix+'tts':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            //nao.reply(from, 'Fitur di nonaktifkan, dikarenakan ERROR')
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
                if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'tts [ Bahasa ] [ Teks ]*, contoh *'+prefix+'tts id halo semua*')
                var dataBhs = args[1]      
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return nao.reply(from, 'Masukkan teksnya', id)
                if (dataText.length > 500) return nao.reply(from, 'Teks terlalu panjang! Maks 500', id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                nao.sendPtt(from, './media/tts.mp3', id)
                })
            } catch (err){
                console.log(err)
                nao.reply(from, bahasa_list, id)
            }
            break
        case prefix+'koin':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              nao.sendStickerfromUrl(from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
            } else {
              nao.sendStickerfromUrl(from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
            }
            break
        case prefix+'dadu':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const dice = Math.floor(Math.random() * 6) + 1
            await nao.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
            break
        case prefix+'kapankah':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const when = args.join(' ')
            const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when) nao.reply(from, '⚠️ Format salah! Ketik *'+prefix+'menu* untuk penggunaan.')
            await nao.sendText(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`)
            break
        case prefix+'nilai':
        case prefix+'rate':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const rating = args.join(' ')
            const awr = Math.floor(Math.random() * 100)
            if (!rating) nao.reply(from, '⚠️ Format salah! Ketik *'+prefix+'menu* untuk penggunaan.')
            await nao.sendText(from, `Pertanyaan: *${rating}* \n\nJawaban: ${awr}`)
            break
        case prefix+'apakah':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const nanya = args.join(' ')
            const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya) nao.reply(from, '⚠️ Format salah! Ketik *'+prefix+'menu* untuk penggunaan.')
            await nao.sendText(from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`)
            break
         case prefix+'bisakah':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const bsk = args.join(' ')
            const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk) nao.reply(from, '⚠️ Format salah! Ketik *'+prefix+'menu* untuk penggunaan.')
            await nao.sendText(from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`)
            break
        case prefix+'owner':
        case prefix+'Owner':
            if(nao.isChatOnline('6281358181668@c.us')) {
                var isOwnerOnline = 'Online'
            } else {
                var isOwnerOnline = 'Offline'
            }
            await nao.sendImage(from, './media/img/owner.jpg', 'owner.jpg', '《📍》 *Nama:* Dwi Rizqi\n《⌛》 *Umur:* 13\n《📆》 *Ulang Tahun:* Mei 07\n《❤》 *Status*: JOMBLO :v\n\nNo.Status: '+isOwnerOnline)
            nao.sendText(from, 'No wa: wa.me/6281358181668\nTelegram: -\nTwitter: @ADwiRizqi\nFacebook: -\nIg: instagram.com/dwirizqi.h')
            nao.sendContact(chatId, `6281358181668@c.us`)
            break
        // ON OFF
        case prefix+'antibadword':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return nao.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return nao.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antibadword.includes(chatId);
                if(cek){
                    return nao.reply(from, `*「 ANTI BADWORD 」*\nSudah diaktifkan di grup ini`, id)
                } else {
                    antibadword.push(chatId)
                    fs.writeFileSync('./lib/database/group/antibadword.json', JSON.stringify(antibadword))
                    nao.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name}\nHarap Jangan Toxic Di Sini Atau Saya Akan Kick!`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antibadword.includes(chatId);
                if(!cek){
                    return nao.reply(from, `*「 ANTI BADWORD 」*\nSudah dinonaktifkan di grup ini`, id)
                } else {
                    let nixx = antibadword.indexOf(chatId)
                    antibadword.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/group/antibadword.json', JSON.stringify(antibadword))
                    nao.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name}\nHarap Jangan Toxic Di Sini Atau Saya Akan Kick!`, id)
                }
            } else {
                nao.reply(from, `Pilih enable atau disable udin!`, id)
            } 
            break   
        case prefix+'antilink':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return nao.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return nao.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antilink.includes(chatId);
                if(cek){
                    return nao.reply(from, `*「 ANTI GROUP LINK 」*\nSudah diaktifkan di grup ini`, id)
                } else {
                    antilink.push(chatId)
                    fs.writeFileSync('./lib/database/group/antilink.json', JSON.stringify(antilink))
                    nao.reply(from, `*「 ANTI GROUP LINK 」*\nPerhatian Untuk Member Grup ${name}\nJika Ingin Kirim Link Harap Izin Ke Admin Group`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antilink.includes(chatId);
                if(!cek){
                    return nao.reply(from, `*「 ANTI GROUP LINK 」*\nSudah dinonaktifkan di grup ini`, id)
                } else {
                    let nixx = antilink.indexOf(chatId)
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/group/antilink.json', JSON.stringify(antilink))
                    nao.reply(from, `*「 ANTI GROUP LINK 」*\nBerhasil menonaktifkan antilink!`, id)
                }
            } else {
                nao.reply(from, `Pilih enable atau disable!`, id)
            } 
            break
        case prefix+'welcome':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return nao.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (args[1] == 'enable') {
                if (isWelcomeOn) return nao.reply(from, '*「 WELCOME 」*\nSudah diaktifkan di grup ini', id)
                _welcome.push(groupId)
                fs.writeFileSync('./lib/database/group/welcome.json', JSON.stringify(_welcome))
                await nao.reply(from, 'Fitur welcome berhasil diaktifkan', id)
            } else if (args[1] == 'disable') {
                await _welcome.splice(groupId, 1)
                await fs.writeFileSync('./lib/database/group/welcome.json', JSON.stringify(_welcome))
                nao.reply(from, 'Fitur welcome berhasil di nonaktifkan', id)
            } else {
                await nao.reply(from, 'Pilih enable atau disable!', id)
            }
            break
        case prefix+'leave':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return nao.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (args[1] == 'enable') {
                if (isLeaveOn) return await nao.reply(from, '*「 LEAVE 」*\nSudah diaktifkan di grup ini', id)
                _leave.push(groupId)
                fs.writeFileSync('./lib/database/group/leave.json', JSON.stringify(_leave))
                await nao.reply(from, 'Fitur leave berhasil diaktifkan', id)
            } else if (args[1] == 'disable') {
                _leave.splice(groupId, 1)
                fs.writeFileSync('./lib/database/group/leave.json', JSON.stringify(_leave))
                await nao.reply(from, 'Fitur leave berhasil di nonaktifkan', id)
            } else {
                await nao.reply(from, 'Pilih enable atau disable!', id)
            }
            break
        case prefix+'nsfw':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return nao.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                var cek = nsfw_.includes(chatId);
                if(cek){
                    return nao.reply(from, `NSFW Sudah diaktifkan di grup ini`, id)
                } else {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/database/group/nsfwz.json', JSON.stringify(nsfw_))
                nao.reply(from, 'NSFW berhasil di aktifkan di group ini! kirim perintah *'+prefix+'nsfwMenu* untuk menu', id)
                }
            } else if (args[1].toLowerCase() === 'disable') {
                var cek = nsfw_.includes(chatId);
                /*if(!cek){
                    return nao.reply(from, `NSFW Sudah dinonaktifkan di grup ini`, id)
                } else {*/
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/group/nsfwz.json', JSON.stringify(nsfw_))
                nao.reply(from, 'NSFW berhasil di nonaktifkan di group ini!', id)
                //}
            } else {
                nao.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case prefix+'simi':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isPrem) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh User Premium!', id)
            if (args.length === 1) return nao.reply(from, 'Pilih enable atau disable!', id)
            if (args[1] == 'enable') {
                var cek = simi_.includes(groupId);
                if (cek) return nao.reply(from, '*「 SIMI 」*\nSudah diaktifkan di grup ini', id)
                simi_.push(groupId)
                fs.writeFileSync('./lib/database/group/Simsimi.json', JSON.stringify(simi_))
                await nao.reply(from, 'Fitur simi berhasil diaktifkan', id)
            } else if (args[1] == 'disable') {
                simi_.splice(groupId, 1)
                fs.writeFileSync('./lib/database/group/Simsimi.json', JSON.stringify(simi_))
                await nao.reply(from, 'Fitur simi berhasil di nonaktifkan', id)
            } else {
                await nao.reply(from, 'Pilih enable atau disable!', id)
            }
            break
        case prefix+'group':
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (args.length === 1) return nao.reply(from, 'Pilih open atau close!', id)
            if (args[1].toLowerCase() === 'open') {
                nao.setGroupToAdminsOnly(groupId, false)
                nao.sendTextWithMentions(from, `Group telah dibuka oleh admin @${sender.id.replace('@c.us','')}\nSekarang *semua member* dapat mengirim pesan`)
            } else if (args[1].toLowerCase() === 'close') {
                nao.setGroupToAdminsOnly(groupId, true)
                nao.sendTextWithMentions(from, `Group telah ditutup oleh admin @${sender.id.replace('@c.us','')}\nSekarang *hanya admin* yang dapat mengirim pesan`)
            } else {
                nao.reply(from, 'Pilih open atau close!', id)
            }
            break
        // ANIME //
        case prefix+'images':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'images [text]*\nContoh : *'+prefix+'images Nao*', id)
            const ptrsq = body.slice(8)
            const ptrst = await fetch(`https://api.vhtear.com/pinterest?query=${ptrsq}&apikey=${vhtearkey}`)
            if (!ptrst.ok) throw new Error(`Error Images : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await nao.sendImage(from, base64, 'ptrs.jpg', `*${ptrsq}*`)
            await limitAdd(serial)
            break
        case prefix+'loli':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const loli = await axios.get(`https://api.vhtear.com/randomloli&apikey=${vhtearkey}`)
            const loly = loli.data.result
            nao.sendFileFromUrl(from, loly.result, 'loli.jpeg', '*LOLI*', id)
            break
        case prefix+'shota':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const imageToBase64 = require('image-to-base64')
            var shouta = ['shota anime','anime shota'];
            var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
            var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;
            
            axios.get(urlshot)
            .then((result) => {
            var sht = JSON.parse(JSON.stringify(result.data));
            var shotaak =  sht[Math.floor(Math.random() * sht.length)];
            imageToBase64(shotaak)
            .then(
                (response) => {
            let img = 'data:image/jpeg;base64,'+response
            nao.sendFile(from, img, "shota.jpg", `*SHOTA*`, id)
                    }) 
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break
        case prefix+'waifu':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const waifu = await axios.get(`https://api.vhtear.com/randomwibu&apikey=${vhtearkey}`)
            nao.sendFileFromUrl(from, waifu.data.result.foto, 'Waifu.jpg', `➤ Name : ${waifu.data.result.nama}\n➤ Description : ${waifu.data.result.deskripsi}\n\n➤ Source : ${waifu.data.result.sumber}`, id)
            break
        case prefix+'husbu':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const diti = fs.readFileSync('./lib/database/command/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            nao.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
        case prefix+'randomnekonime':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const nekonime = await axios.get(`https://api.vhtear.com/randomnekonime&apikey=${vhtearkey}`)
            const nekon = nekonime.data.result
            nao.sendFileFromUrl(from, nekon.result, '', 'Nekonime!', id)
            break
        // MFARELS
        case prefix+'bokep': // MFARELS
        case prefix+'randombokep': // MFARELS
        case prefix+'bkp': // MFARELS
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id) // MFARELS
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id) // MFARELS
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id) // MFARELS
            
            await limitAdd(serial) // MFARELS
            const ange = fs.readFileSync('./lib/database/command/18+.json')
            const angean = JSON.parse(ange)
            const sangean = Math.floor(Math.random() * angean.length)
            const noco = angean[sangean]
            nao.sendFileFromUrl(from, noco.image, '18+.jpg', noco.teks, id)
            break
        case prefix+'lewds':
        case prefix+'lewd':
                if (isGroupMsg) {
                    if (!isNsfw) return await nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
                    await nao.reply(from, mess.wait, id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await nao.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await nao.reply(from, 'Error!', id)
                        })
                } else {
                    await nao.reply(from, mess.wait, id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await nao.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await nao.reply(from, 'Error!', id)
                        })
                }
            break
            case prefix+'fetish':
                if (args.length == 1) return await nao.reply(from, 'Format salah', id)
                if (isGroupMsg) {
                    if (!isNsfw) return await nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
                    await nao.reply(from, mess.wait, id)
                    try {
                        if (args[1] === 'armpits') {
                            nsfw.armpits()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (args[1] === 'feets') {
                            nsfw.feets()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (args[1] === 'thighs') {
                            nsfw.thighs()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (args[1] === 'ass') {
                            nsfw.ass()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (args[1] === 'boobs') {
                            nsfw.boobs()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (args[1] === 'belly') {
                            nsfw.belly()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (args[1] === 'sideboobs') {
                            nsfw.sideboobs()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (args[1] === 'ahegao') {
                            nsfw.ahegao()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                        } else {
                            await nao.reply(from, 'Tag not found.\nTag List: \n1. armpits\n2. feets\n3. thighs\n4. ass\n5. boobs\n6. belly\n7. sideboobs\n8. ahegao', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await nao.reply(from, err, id)
                    }
                } else {
                    await nao.reply(from, mess.wait, id)
                    try {
                        if (args[1] === 'armpits') {
                            nsfw.armpits()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'armpits.jpg', '', id)
                                        .then(() => console.log('Success sending armpits pic!'))
                                })
                        } else if (args[1] === 'feets') {
                            nsfw.feets()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'feets.jpg', '', id)
                                        .then(() => console.log('Success sending feets pic!'))
                                })
                        } else if (args[1] === 'thighs') {
                            nsfw.thighs()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'thighs.jpg', '', id)
                                        .then(() => console.log('Success sending thighs pic!'))
                                })
                        } else if (args[1] === 'ass') {
                            nsfw.ass()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'ass.jpg', '', id)
                                        .then(() => console.log('Success sending ass pic!'))
                                })
                        } else if (args[1] === 'boobs') {
                            nsfw.boobs()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'boobs.jpg', '', id)
                                        .then(() => console.log('Success sending boobs pic!'))
                                })
                        } else if (args[1] === 'belly') {
                            nsfw.belly()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'belly.jpg', '', id)
                                        .then(() => console.log('Success sending belly pic!'))
                                })
                        } else if (args[1] === 'sideboobs') {
                            nsfw.sideboobs()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'sideboobs.jpg', '', id)
                                        .then(() => console.log('Success sending sideboobs pic!'))
                                })
                        } else if (args[1] === 'ahegao') {
                            nsfw.ahegao()
                                .then(async ({ url }) => {
                                    await nao.sendFileFromUrl(from, url, 'ahegao.jpg', '', id)
                                        .then(() => console.log('Success sending ahegao pic!'))
                                })
                        } else {
                            await nao.reply(from, 'Tag not found.\nTag List: \n1. armpits\n2. feets\n3. thighs\n4. ass\n5. boobs\n6. belly\n7. sideboobs\n8. ahegao', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await nao.reply(from, 'Error!', id)
                    }
                }
            break
            case prefix+'nekopoi': // Thanks to ArugaZ
                if (isGroupMsg) {
                    if (!isNsfw) return await nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
                    await nao.reply(from, mess.wait, id)
                    nsfw.getLatest()
                        .then((result) => {
                            nsfw.getVideo(result.link)
                                .then(async (res) => {
                                    let heheq = '\n'
                                    for (let i of res.links) {
                                        heheq += `${i}\n`
                                    }
                                    await nao.sendText(from, `Title: ${res.title}\n\nLink:${heheq}`)
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await nao.reply(from, 'Error!', id)
                        })
                } else {
                    await nao.reply(from, mess.wait, id)
                    nsfw.getLatest()
                        .then((result) => {
                            nsfw.getVideo(result.link)
                                .then(async (res) => {
                                    let heheq = '\n'
                                    for (let i of res.links) {
                                        heheq += `${i}\n`
                                    }
                                    await nao.sendText(from, `Title: ${res.title}\n\nLink:${heheq}`)
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await nao.reply(from, 'Error!', id)
                        })
                }
            break
        // MFARELS
        case prefix+'randomtrapnime':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const trapnime = await axios.get('https://tobz-api.herokuapp.com/api/nsfwtrap')
            const trapn = trapnime.data.result
            nao.sendImage(from, trapn, '', 'Trapnime!', id)
            break
        case prefix+'randomhentai':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const hentai = await axios.get(`https://api.vhtear.com/randomhentai?apikey=${vhtearkey}`)
            const henta = hentai.data.result
            nao.sendFileFromUrl(from, henta.url, '', 'Random Hentai!', id)
            break
        case prefix+'randomnsfwneko':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const nsfwneko = await axios.get('https://tobz-api.herokuapp.com/api/nsfwneko')
            const nsfwn = nsfwneko.data
            if (nsfwn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            nao.sendImage(from, nsfwn.result, `NsfwNeko${ext}`, 'NsfwNeko!', id)
            break
        case prefix+'randomanime':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const ranime = await axios.get('https://tobz-api.herokuapp.com/api/randomanime')
            const ranimen = ranime.data
            if (ranimen.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            nao.sendFileFromUrl(from, ranimen.result, `RandomAnime${ext}`, 'Random Anime!', id)
            break
        case prefix+'blowjob':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            await limitAdd(serial)
            const sblow = await axios.get('https://tobz-api.herokuapp.com/api/nsfwblowjob')
            const rblow = sblow.data
            nao.sendFileFromUrl(from, rblow.result, `RandoBlow${ext}`, 'Random Blowjob!', id)
            break
        case prefix+'cersex':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            await limitAdd(serial)
            const cersexurl = await axios.get(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
            const cersexha = cersexurl.data.result
            nao.sendFileFromUrl(from, cersexha.image, 'Cersex.jpg', `*Judul:* ${cersexha.judul}\n\n*Cerita:* ${cersexha.cerita}`, id)
            break
        // ROLEPLAY
        case prefix+'hug':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *'+prefix+'hug* @tagmember', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const shug = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=SjVOI6T3LzRgEkDqePCtnfYQoZb9egdH&q=anime%20hug&limit=100&offset=0')
            const randomgi = shug.data.data[Math.floor(Math.random() * shug.data.data.length)]
            //if(!isOwner && mentionedJidList[0] == '12348880375@c.us') return nao.reply(from, `Kata Owner 'Hati2 dengan orang asing' Gitu, Jadi jangan deket2`, id)
            const mentionhug = mentionedJidList[0]
            await nao.sendStickerfromUrl(from, randomgi.images.original.url)
            nao.sendTextWithMentions(from, `@${sender.id.replace('@c.us', '')} Memeluk @${mentionhug.replace('@c.us', '')}`)
            break
        case prefix+'cry':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const scry = await axios.get('https://tobz-api.herokuapp.com/api/cry')
            const rcry = scry.data
            nao.sendStickerfromUrl(from, rcry.result, '')
            break
        case prefix+'kiss':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const skiss = await axios.get('https://tobz-api.herokuapp.com/api/kiss')
            const rkiss = skiss.data.result
            nao.sendStickerfromUrl(from, rkiss, id)
            break
        // ROLEPLAY ASLI :V
            //PEMERINTAH
        /*case prefix+'dokumen':
            if(!isOwner) return
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const usermoney = getMoney(sender.id)
            if (args.length === 1) {
                nao.reply(from, `List2 Dokumen\n\n1. SIM C\nHarga: Yk.100.000\n\n2. SIM A\nHarga: Yk.300.000\n\n3. Licensi Pilot\nHarga: Yk.1.000.000`, id)
            } else if(args[1] == 'daftar') {
                if (args[2] == '1') {
                    if (usermoney > 100000) return nao.reply(from, 'Duitmu kurang, kerja dulu sana')
                    await MinMoney(sender.id, 100000)
                    if (_SIMC.includes(sender.id)) return nao.reply(from, 'Anda sudah memiliki Dokumen ini', id)
                    _SIMC.push(sender.id)
                    fs.writeFileSync('./lib/database/roleplay/simc.json', JSON.stringify(_SIMC))
                    await nao.reply(from, 'Sukses mendaftar', id)
                } else if(args[2] == '2') {
                    if (usermoney > 200000) return nao.reply(from, 'Duitmu kurang, kerja dulu sana')
                    await MinMoney(sender.id, 200000)
                    if (_SIMA.includes(sender.id)) return nao.reply(from, 'Anda sudah memiliki Dokumen ini', id)
                    _SIMA.push(sender.id)
                    fs.writeFileSync('./lib/database/roleplay/sima.json', JSON.stringify(_SIMA))
                    await nao.reply(from, 'Sukses mendaftar', id)
                } else if(args[2] == '3') {
                    if (usermoney > 1000000) return nao.reply(from, 'Duitmu kurang, kerja dulu sana', id)
                    await MinMoney(sender.id, 1000000)
                    if (_Lpilot.includes(sender.id)) return nao.reply(from, 'Anda sudah memiliki Dokumen ini', id)
                    _Lpilot.push(sender.id)
                    fs.writeFileSync('./lib/database/roleplay/Lpilot.json', JSON.stringify(_Lpilot))
                }
            }
            break*/
            //MONEY
        case prefix+'money':
            if (args.length === 1) {
            if (getMoney(sender.id) === undefined) await setMoney(sender.id)
                const moneylu = numberWithCommas(getMoney(sender.id))
                nao.reply(from, `Money: ${moneylu}`, id)
            } else if(args[1] == 'add') {
                if(!isOwner) return nao.reply(from, 'APasi, udh dibilangin masih bandel', id)
                if (!quotedMsg) return nao.reply(from, 'Untuk menggunakan command ini, reply pesannya', id)
                let qmidlm = quotedMsgObj.sender.id
                if (getMoney(qmidlm) === undefined) await setMoney(qmidlm)
                const amountMoneyadd = Math.floor(args[2])
                await addMoney(qmidlm, amountMoneyadd)
                nao.sendTextWithMentions(from, `Success Add Money @${qmidlm.replace('@c.us','')}!\n\nUpdated!\nMoney: ${numberWithCommas(getMoney(qmidlm))}`)
            } else if(args[1] == 'min') {
                if(!isOwner) return nao.reply(from, 'APasi, udh dibilangin masih bandel', id)
                if (!quotedMsg) return nao.reply(from, 'Untuk menggunakan command ini, reply pesannya', id)
                let qmidlm2 = quotedMsgObj.sender.id
                if (getMoney(qmidlm2) === undefined) await setMoney(qmidlm2)
                const amountMoneyMin = Math.floor(args[2])
                await MinMoney(qmidlm2, amountMoneyMin)
                nao.sendTextWithMentions(from, `Success Min Money @${qmidlm2.replace('@c.us','')}!\n\nUpdated!\nMoney: ${numberWithCommas(getMoney(qmidlm2))}`)
            }
            break
        case prefix+'sultan':
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            const uangnyabang = _money
            uangnyabang.sort((a, b) => (a.money < b.money) ? 1 : -1)
            let urutanmoney = '-----[ *SULTAN* ]----\n\n'
            let nomnya = 0
            try {
                for (let i = 0; i < 10; i++) {
                    nomnya++
                    urutanmoney += `${nomnya}. @${uangnyabang[i].id.replace('@c.us', '')}\n➤ UANG: *${numberWithCommas(uangnyabang[i].money)}*\n\n`
                }
                await nao.sendTextWithMentions(from, urutanmoney)
            } catch (err) {
                console.error(err)
                await nao.reply(from, 'Perlu setidaknya *10* user yang memiliki level di database!', id)
            }
            break
            //JOB
        case prefix+'job':
            if(kerjajob.getUserJobId(sender.id, _job) == undefined) await kerjajob.setUserJob(sender.id, _job)
            if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                var jobBefore = 'Miner/Penambang'
            } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                var jobBefore = 'Lumberjack/Penebang Pohon'
            } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                var jobBefore = 'Gojek'
            } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                var jobBefore = 'Tukang Sampah'
            } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                var jobBefore = 'Polisi'
            } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                var jobBefore = 'Prostitusi Online :V'
            } else if(kerjajob.getUserJob(sender.id, _job) == 'Pengangguran') {
                var jobBefore = 'Pengangguran'
            }/*Bamru*/ else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                var jobBefore = 'Kantoran'
            }
            const currentJobLvlJob = kerjajob.getLvlJob(sender.id, _job)
            const requiredJobXpJob = 2000 * (Math.pow(2, currentJobLvlJob) - 1)
            if (args.length === 1) return nao.reply(from, `Pekerjaan: ${jobBefore}\nJob Lvl: ${kerjajob.getLvlJob(sender.id, _job)}\nJob XP: ${kerjajob.getXpJob(sender.id, _job)} / ${requiredJobXpJob}\n\n1. Miner | Perlu Lvl 5\n2. Lumberjack | Perlu Lvl 5\n3. Gojek | Perlu Lvl 5\n4. Tukang sampah | Perlu Lvl 1\n5. Polisi | Perlu Lvl 10\n6. Prostitusi Online :v | Perlu Lvl 10 | Harga Diri ↓\n7. Kantoran | Perlu Lvl 15 | Harga Diri ↑\n\nUntuk melamar perkerjaan ketik, ${prefix}job <kerjaan>\nContoh: ${prefix}job 5\n\nUntuk Mengecek Level Untuk Melamar Ketik *${prefix}*level\n\nGaji berbeda2 sesuai pekerjaan\n*MENGUBAH JOB=RESET _LVLJOB_*`, id)
            if(args[1] == '1') {
                if(getLevelingLevel(sender.id) < 5) return nao.reply(from, `Level Kamu tidak cukup\n\nLevel kamu: ${getLevelingLevel(sender.id)}\nUntuk Bekerja disini kamu perlu naik ke level 5`, id)
                if(kerjajob.getUserJob(sender.id, _job) == 'miner') return nao.reply(from, 'Kamu sudah melamar Pekerjaan ini', id)
                if(kerjajob.getUserJob(sender.id, _job) == 'lj' || kerjajob.getUserJob(sender.id, _job) == 'gojek' || kerjajob.getUserJob(sender.id, _job) == 'tsampah' || kerjajob.getUserJob(sender.id, _job) == 'polisi' || kerjajob.getUserJob(sender.id, _job) == 'bo') {
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'miner', _job)
                    if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                        var kerja = 'Miner/Penambang'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                        var kerja = 'Lumberjack/Penebang Pohon'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                        var kerja = 'Gojek'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                        var kerja = 'Tukang Sampah'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                        var kerja = 'Polisi'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                        var kerja = 'Prostitusi Online :V'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                        var kerja = 'Kantoran'
                    }
                    nao.reply(from, `*Succes* mengganti job\nDari: ${jobBefore}\nKe: ${kerja}\n\nJOB LVL RESET!`, id)
                } else if (kerjajob.getUserJob(sender.id, _job) === 'Pengangguran') {
                    const JobHoki = Math.floor(Math.random() * 100)
                    if(JobHoki < 19) {
                        nao.reply(from, 'Maaf, Lamaran kerjamu ditolak di perusahaan PT.XXXXX\n\nUntuk melamar kembali *'+prefix+'job 1\nSEMANGAT!!', id)
                    } else {
                        await kerjajob.addUserJob(sender.id, 'miner', _job)
                        if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                            var kerja = 'Miner/Penambang'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                            var kerja = 'Lumberjack/Penebang Pohon'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                            var kerja = 'Gojek'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                            var kerja = 'Tukang Sampah'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                            var kerja = 'Polisi'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                            var kerja = 'Prostitusi Online :V'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                            var kerja = 'Kantoran'
                        }
                        nao.reply(from, `*Succes*\n\nLamaranmu di terima di perusahaan PT DWIR\nPekerjaan: ${kerja}`, id) 
                    }
                }
            } else if(args[1] == '2') {
                if(getLevelingLevel(sender.id) < 5) return nao.reply(from, `Level Kamu tidak cukup\n\nLevel kamu: ${getLevelingLevel(sender.id)}\nUntuk Bekerja disini kamu perlu naik ke level 5`, id)
                if(kerjajob.getUserJob(sender.id, _job) == 'lj') return nao.reply(from, 'Kamu sudah melamar Pekerjaan ini', id)
                if(kerjajob.getUserJob(sender.id, _job) == 'miner' || kerjajob.getUserJob(sender.id, _job) == 'gojek' || kerjajob.getUserJob(sender.id, _job) == 'tsampah' || kerjajob.getUserJob(sender.id, _job) == 'polisi' || kerjajob.getUserJob(sender.id, _job) == 'bo') {
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'lj', _job)
                    if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                        var kerja = 'Miner/Penambang'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                        var kerja = 'Lumberjack/Penebang Pohon'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                        var kerja = 'Gojek'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                        var kerja = 'Tukang Sampah'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                        var kerja = 'Polisi'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                        var kerja = 'Prostitusi Online :V'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                        var kerja = 'Kantoran'
                    }
                    nao.reply(from, `*Succes* mengganti job\nDari: ${jobBefore}\nKe: ${kerja}\n\nJOB LVL RESET!`, id)
                } else if (kerjajob.getUserJob(sender.id, _job) === 'Pengangguran') {
                    const JobHoki = Math.floor(Math.random() * 100)
                    if(JobHoki < 19) {
                        nao.reply(from, 'Maaf, Lamaran kerjamu ditolak di perusahaan PT.XXXXX\n\nUntuk melamar kembali *'+prefix+'job 2\nSEMANGAT!!', id)
                    } else {
                        await kerjajob.addUserJob(sender.id, 'lj', _job)
                        if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                            var kerja = 'Miner/Penambang'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                            var kerja = 'Lumberjack/Penebang Pohon'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                            var kerja = 'Gojek'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                            var kerja = 'Tukang Sampah'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                            var kerja = 'Polisi'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                            var kerja = 'Prostitusi Online :V'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                            var kerja = 'Kantoran'
                        }
                        nao.reply(from, `*Succes*\n\nLamaranmu di terima di perusahaan PT DWIR\nPekerjaan: ${kerja}`, id) 
                    }
                }
            } else if(args[1] == '3') {
                if(getLevelingLevel(sender.id) < 5) return nao.reply(from, `Level Kamu tidak cukup\n\nLevel kamu: ${getLevelingLevel(sender.id)}\nUntuk Bekerja disini kamu perlu naik ke level 5`, id)
                if(kerjajob.getUserJob(sender.id, _job) == 'gojek') return nao.reply(from, 'Kamu sudah melamar Pekerjaan ini', id)
                if(kerjajob.getUserJob(sender.id, _job) == 'miner' || kerjajob.getUserJob(sender.id, _job) == 'lj' || kerjajob.getUserJob(sender.id, _job) == 'tsampah' || kerjajob.getUserJob(sender.id, _job) == 'polisi' || kerjajob.getUserJob(sender.id, _job) == 'bo') {
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'gojek', _job)
                    if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                        var kerja = 'Miner/Penambang'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                        var kerja = 'Lumberjack/Penebang Pohon'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                        var kerja = 'Gojek'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                        var kerja = 'Tukang Sampah'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                        var kerja = 'Polisi'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                        var kerja = 'Prostitusi Online :V'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                        var kerja = 'Kantoran'
                    }
                    nao.reply(from, `*Succes* mengganti job\nDari: ${jobBefore}\nKe: ${kerja}\n\nJOB LVL RESET!`, id)
                } else if (kerjajob.getUserJob(sender.id, _job) === 'Pengangguran') {
                    const JobHoki = Math.floor(Math.random() * 100)
                    if(JobHoki < 19) {
                        nao.reply(from, 'Maaf, Lamaran kerjamu ditolak di perusahaan PT.XXXXX\n\nUntuk melamar kembali *'+prefix+'job 3\nSEMANGAT!!', id)
                    } else {
                        await kerjajob.addUserJob(sender.id, 'gojek', _job)
                        if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                            var kerja = 'Miner/Penambang'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                            var kerja = 'Lumberjack/Penebang Pohon'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                            var kerja = 'Gojek'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                            var kerja = 'Tukang Sampah'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                            var kerja = 'Polisi'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                            var kerja = 'Prostitusi Online :V'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                            var kerja = 'Kantoran'
                        }
                        nao.reply(from, `*Succes*\n\nLamaranmu di terima di perusahaan PT DWIR\nPekerjaan: ${kerja}`, id) 
                    }
                }
            } else if(args[1] == '4') {
                if(getLevelingLevel(sender.id) < 1) return nao.reply(from, `Level Kamu tidak cukup\n\nLevel kamu: ${getLevelingLevel(sender.id)}\nUntuk Bekerja disini kamu perlu naik ke level 1`, id)
                if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') return nao.reply(from, 'Kamu sudah melamar Pekerjaan ini', id)
                if(kerjajob.getUserJob(sender.id, _job) == 'miner' || kerjajob.getUserJob(sender.id, _job) == 'lj' || kerjajob.getUserJob(sender.id, _job) == 'gojek' || kerjajob.getUserJob(sender.id, _job) == 'polisi' || kerjajob.getUserJob(sender.id, _job) == 'bo') {
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'tsampah', _job)
                    if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                        var kerja = 'Miner/Penambang'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                        var kerja = 'Lumberjack/Penebang Pohon'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                        var kerja = 'Gojek'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                        var kerja = 'Tukang Sampah'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                        var kerja = 'Polisi'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                        var kerja = 'Prostitusi Online :V'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                        var kerja = 'Kantoran'
                    }
                    nao.reply(from, `*Succes* mengganti job\nDari: ${jobBefore}\nKe: ${kerja}\n\nJOB LVL RESET!`, id)
                } else if (kerjajob.getUserJob(sender.id, _job) === 'Pengangguran') {
                    const JobHoki = Math.floor(Math.random() * 100)
                    if(JobHoki < 19) {
                        nao.reply(from, 'Maaf, Lamaran kerjamu ditolak di perusahaan PT.XXXXX\n\nUntuk melamar kembali *'+prefix+'job 4\nSEMANGAT!!', id)
                    } else {
                        await kerjajob.addUserJob(sender.id, 'tsampah', _job)
                        if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                            var kerja = 'Miner/Penambang'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                            var kerja = 'Lumberjack/Penebang Pohon'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                            var kerja = 'Gojek'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                            var kerja = 'Tukang Sampah'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                            var kerja = 'Polisi'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                            var kerja = 'Prostitusi Online :V'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                            var kerja = 'Kantoran'
                        }
                        nao.reply(from, `*Succes*\n\nLamaranmu di terima di perusahaan PT DWIR\nPekerjaan: ${kerja}`, id) 
                    }
                } 
            } else if(args[1] == '5') {
                if(getLevelingLevel(sender.id) < 10) return nao.reply(from, `Level Kamu tidak cukup\n\nLevel kamu: ${getLevelingLevel(sender.id)}\nUntuk Bekerja disini kamu perlu naik ke level 10`, id)
                if(kerjajob.getUserJob(sender.id, _job) == 'polisi') return nao.reply(from, 'Kamu sudah melamar Pekerjaan ini', id)
                if(kerjajob.getUserJob(sender.id, _job) == 'miner' || kerjajob.getUserJob(sender.id, _job) == 'lj' || kerjajob.getUserJob(sender.id, _job) == 'gojek' || kerjajob.getUserJob(sender.id, _job) == 'tsampah' || kerjajob.getUserJob(sender.id, _job) == 'bo') {
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'polisi', _job)
                    if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                        var kerja = 'Miner/Penambang'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                        var kerja = 'Lumberjack/Penebang Pohon'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                        var kerja = 'Gojek'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                        var kerja = 'Tukang Sampah'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                        var kerja = 'Polisi'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                        var kerja = 'Prostitusi Online :V'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                        var kerja = 'Kantoran'
                    }
                    nao.reply(from, `*Succes* mengganti job\nDari: ${jobBefore}\nKe: ${kerja}\n\nJOB LVL RESET!`, id)
                } else if (kerjajob.getUserJob(sender.id, _job) === 'Pengangguran') {
                    const JobHoki = Math.floor(Math.random() * 100)
                    if(JobHoki < 19) {
                        nao.reply(from, 'Maaf, Lamaran kerjamu ditolak di perusahaan PT.XXXXX\n\nUntuk melamar kembali *'+prefix+'job 5\nSEMANGAT!!', id)
                    } else {
                        await kerjajob.addUserJob(sender.id, 'polisi', _job)
                        if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                            var kerja = 'Miner/Penambang'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                            var kerja = 'Lumberjack/Penebang Pohon'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                            var kerja = 'Gojek'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                            var kerja = 'Tukang Sampah'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                            var kerja = 'Polisi'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                            var kerja = 'Prostitusi Online :V'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                            var kerja = 'Kantoran'
                        }
                        nao.reply(from, `*Succes*\n\nLamaranmu di terima di perusahaan PT DWIR\nPekerjaan: ${kerja}`, id) 
                    }
                } 
            } else if(args[1] == '6') {
                if(getLevelingLevel(sender.id) < 10) return nao.reply(from, `Level Kamu tidak cukup\n\nLevel kamu: ${getLevelingLevel(sender.id)}\nUntuk Bekerja disini kamu perlu naik ke level 10`, id)
                if(kerjajob.getUserJob(sender.id, _job) == 'bo') return nao.reply(from, 'Kamu sudah melamar Pekerjaan ini', id)
                if(kerjajob.getUserJob(sender.id, _job) == 'miner' || kerjajob.getUserJob(sender.id, _job) == 'lj' || kerjajob.getUserJob(sender.id, _job) == 'gojek' || kerjajob.getUserJob(sender.id, _job) == 'tsampah' || kerjajob.getUserJob(sender.id, _job) == 'polisi') {
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'bo', _job)
                    if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                        var kerja = 'Miner/Penambang'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                        var kerja = 'Lumberjack/Penebang Pohon'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                        var kerja = 'Gojek'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                        var kerja = 'Tukang Sampah'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                        var kerja = 'Polisi'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                        var kerja = 'Prostitusi Online :V'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                        var kerja = 'Kantoran'
                    }
                    nao.reply(from, `*Succes* mengganti job\nDari: ${jobBefore}\nKe: ${kerja}\n\nJOB LVL RESET!`, id)
                } else if (kerjajob.getUserJob(sender.id, _job) == 'Pengangguran') {
                    const JobHoki = Math.floor(Math.random() * 100)
                    if(JobHoki < 25) {
                        nao.reply(from, 'Maaf, Lamaran kerjamu ditolak di perusahaan PT.XXXXX\n\nUntuk melamar kembali *'+prefix+'job 6\nSEMANGAT!!', id)
                    } else {
                        await kerjajob.addUserJob(sender.id, 'bo', _job)
                        if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                            var kerja = 'Miner/Penambang'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                            var kerja = 'Lumberjack/Penebang Pohon'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                            var kerja = 'Gojek'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                            var kerja = 'Tukang Sampah'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                            var kerja = 'Polisi'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                            var kerja = 'Prostitusi Online :V'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                            var kerja = 'Kantoran'
                        }
                        nao.reply(from, `*Succes*\n\nLamaranmu di terima di perusahaan PT ANGGA\nPekerjaan: ${kerja}`, id) 
                    }
                } 
            } else if(args[1] == '7') {
                if(getLevelingLevel(sender.id) < 15) return nao.reply(from, `Level Kamu tidak cukup\n\nLevel kamu: ${getLevelingLevel(sender.id)}\nUntuk Bekerja disini kamu perlu naik ke level 15`, id)
                if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') return nao.reply(from, 'Kamu sudah melamar Pekerjaan ini', id)
                if(kerjajob.getUserJob(sender.id, _job) == 'miner' || kerjajob.getUserJob(sender.id, _job) == 'lj' || kerjajob.getUserJob(sender.id, _job) == 'gojek' || kerjajob.getUserJob(sender.id, _job) == 'tsampah' || kerjajob.getUserJob(sender.id, _job) == 'polisi' || kerjajob.getUserJob(sender.id, _job) == 'bo') {
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'Kantoran', _job)
                    if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                        var kerja = 'Miner/Penambang'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                        var kerja = 'Lumberjack/Penebang Pohon'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                        var kerja = 'Gojek'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                        var kerja = 'Tukang Sampah'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                        var kerja = 'Polisi'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                        var kerja = 'Prostitusi Online :V'
                    } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                        var kerja = 'Kantoran'
                    }
                    nao.reply(from, `*Succes* mengganti job\nDari: ${jobBefore}\nKe: ${kerja}\n\nJOB LVL RESET!`, id)
                } else if (kerjajob.getUserJob(sender.id, _job) == 'Pengangguran') {
                    const JobHoki = Math.floor(Math.random() * 100)
                    if(JobHoki < 35) {
                        nao.reply(from, 'Maaf, Lamaran kerjamu ditolak di perusahaan PT.XXXXX\n\nUntuk melamar kembali *'+prefix+'job 7\nSEMANGAT!!', id)
                    } else {
                        await kerjajob.addUserJob(sender.id, 'Kantoran', _job)
                        if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                            var kerja = 'Miner/Penambang'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                            var kerja = 'Lumberjack/Penebang Pohon'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                            var kerja = 'Gojek'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                            var kerja = 'Tukang Sampah'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi')  {
                            var kerja = 'Polisi'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                            var kerja = 'Prostitusi Online :V'
                        } else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                            var kerja = 'Kantoran'
                        }
                        nao.reply(from, `*Succes*\n\nLamaranmu di terima di perusahaan PT DWIR\nPekerjaan: ${kerja}`, id) 
                    }
                } 
            }
            break
        case prefix+'work':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if(kerjajob.getUserJob(sender.id, _job) == 'Pengangguran') return nao.reply(from, 'Kamu belum memiliki pekerjaan, Ketik *'+prefix+'job* untuk melamar pekerjaan', id)
            if(kerjajob.getWorkId(sender.id, _worklimit)) return nao.reply(from, 'Kamu sudah berkerja, tunggu 120 detik untuk berkerja lagi!', id)
            const waktunyaa = Math.floor(2)
            const waktubroheii = waktunyaa+'m'
            const randomUangHilang = Math.floor(Math.random() * 500) + 1000
            const HasilUangHilang = randomUangHilang
            const randomGagalJob = Math.floor(Math.random() * 100)
            if(kerjajob.getUserJob(sender.id, _job) == 'tsampah') {
                const moneyadd = Math.floor(200 * kerjajob.getMulti(sender.id, _job))
                await kerjajob.addWork(sender.id, waktubroheii, _worklimit)
                if(getMoney(sender.id) === undefined) await setMoney(sender.id)
                if (randomGagalJob < 5) {
                    await addMoney(sender.id, HasilUangHilang)
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'Pengangguran', _job)
                    nao.reply(from, 'Kamu salah mengambil dan membuang sampah, dan menyebabkan kamu terluka karena sampah itu meledak, dan kamu pun di PECAT karena tidak melapor ke boss', id)
                } else {
                    var amountXpJob = Math.floor(300)
                    await kerjajob.addJobXp(sender.id, amountXpJob, _job)
                    await addMoney(sender.id, moneyadd)
                    nao.reply(from, `Kamu berkerja Sebagai Tukang Sampah, Dan mendapat ${'$'+numberWithCommas(moneyadd)}`, id)
                }
            } else if(kerjajob.getUserJob(sender.id, _job) == 'miner') {
                const moneyadd = Math.floor(700 * kerjajob.getMulti(sender.id, _job))
                await kerjajob.addWork(sender.id, waktubroheii, _worklimit)
                if(getMoney(sender.id) === undefined) await setMoney(sender.id)
                if (randomGagalJob < 5) {
                    await addMoney(sender.id, HasilUangHilang)
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'Pengangguran', _job)
                    nao.reply(from, 'Kamu salah memilih tempat menambang, dan menyebabkan 20% goa longsor, dan kamu pun di PECAT', id)
                } else {
                    var amountXpJob = Math.floor(500)
                    await kerjajob.addJobXp(sender.id, amountXpJob, _job)
                    await addMoney(sender.id, moneyadd)
                    nao.reply(from, `Kamu berkerja sebagai Miner / Penambang, Dan mendapat ${'$'+numberWithCommas(moneyadd)}`, id)
                }
            } else if(kerjajob.getUserJob(sender.id, _job) == 'lj') {
                const moneyadd = Math.floor(750 * kerjajob.getMulti(sender.id, _job))
                await kerjajob.addWork(sender.id, waktubroheii, _worklimit)
                if(getMoney(sender.id) === undefined) await setMoney(sender.id)
                if (randomGagalJob < 5) {
                    await addMoney(sender.id, HasilUangHilang)
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'Pengangguran', _job)
                    nao.reply(from, 'Kamu salah menebang pohon , dan kamu menyebabkan gudang tertimpa pohon, dan kamu pun di PECAT', id)
                } else {
                    var amountXpJob = Math.floor(500)
                    await kerjajob.addJobXp(sender.id, amountXpJob, _job)
                    await addMoney(sender.id, moneyadd)
                    nao.reply(from, `Kamu berkerja Sebagai Penebang Pohon, Dan mendapat ${'$'+numberWithCommas(moneyadd)}`, id)
                }
            } else if(kerjajob.getUserJob(sender.id, _job) == 'gojek') {
                const moneyadd = Math.floor(650 * kerjajob.getMulti(sender.id, _job))
                await kerjajob.addWork(sender.id, waktubroheii, _worklimit)
                if(getMoney(sender.id) === undefined) await setMoney(sender.id)
                if (randomGagalJob < 5) {
                    await addMoney(sender.id, HasilUangHilang)
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'Pengangguran', _job)
                    nao.reply(from, 'Kamu badmood dan memarahi penumpang, dan kamu menyebabkan rating 1 kamu banyak, dan kamu pun di PECAT', id)
                } else {
                    var amountXpJob = Math.floor(500)
                    await kerjajob.addJobXp(sender.id, amountXpJob, _job)
                    await addMoney(sender.id, moneyadd)
                    nao.reply(from, `Kamu mengantar penumpang, Dan mendapat ${'$'+numberWithCommas(moneyadd)}`, id)
                }
            } else if(kerjajob.getUserJob(sender.id, _job) == 'polisi') {
                const moneyadd = Math.floor(970 * kerjajob.getMulti(sender.id, _job))
                await kerjajob.addWork(sender.id, waktubroheii, _worklimit)
                if(getMoney(sender.id) === undefined) await setMoney(sender.id)
                if (randomGagalJob < 5) {
                    await addMoney(sender.id, HasilUangHilang)
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'Pengangguran', _job)
                    nao.reply(from, 'Kamu terbukti salah menembak sasaran, dan menyebabkan korban meninggal dan pelaku melarikan diri, dan kamu pun DIPECAT', id)
                } else {
                    var amountXpJob = Math.floor(500)
                    await kerjajob.addJobXp(sender.id, amountXpJob, _job)
                    await addMoney(sender.id, moneyadd)
                    nao.reply(from, `Kamu berkerja sebagai Polisi, Dan mendapat ${'$'+numberWithCommas(moneyadd)}`, id)
                }
            } else if(kerjajob.getUserJob(sender.id, _job) == 'bo') {
                const moneyadd = Math.floor(1450 * kerjajob.getMulti(sender.id, _job))
                await kerjajob.addWork(sender.id, waktubroheii, _worklimit)
                if(getMoney(sender.id) === undefined) await setMoney(sender.id)
                if (randomGagalJob < 5) { 
                    const randomeuwegagal = [`Kamu di palak, dan di GangBang 9 orang sekaligus\n\nKamu Kehilangan\nUang: $${numberWithCommas(HasilUangHilang)}`, `Kamu ditangkep polisi dan membayar denda sebesar\nUang: $${numberWithCommas(HasilUangHilang)}`, `Kamu diculik dan diganbang oleh 5 Om2 di depan pacar kamu\nUang Hilang: $${numberWithCommas(HasilUangHilang)}`, `Lu: Bang aku dieuwe trus duit ku hilang\nKK lu: Y udh sabar y, ntar KK kasih hadiah\n\nMEANWHILE. tengah malem\nTau lah ( ͡° ͜ʖ ͡°)`]
                    const persenRandomEuweGagal = randomeuwegagal[Math.floor(Math.random() * randomeuwegagal.length)]
                    await addMoney(sender.id, HasilUangHilang)
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'Pengangguran', _job)
                    nao.reply(from, persenRandomEuweGagal, id)
                } else {
                    var amountXpJob = Math.floor(500)
                    await kerjajob.addJobXp(sender.id, amountXpJob, _job)
                    await addMoney(sender.id, moneyadd)
                    const randomeuwean = [`Setelah kamu OPEN BO dan dieuwe om-om, Kamu mendapat ${'$'+numberWithCommas(moneyadd)}`, `Saat kamu c*li di kamar, KK Perempuan kamu datang dan meng euwe kamu, Setelah itu Kamu dibayar oleh KK perempuan mu\nUang: ${'$'+numberWithCommas(moneyadd)}`, `Pacar kamu menyewa jasa Open Bo mu, Dan mendapat\nUang: ${'$'+numberWithCommas(moneyadd)}`, `Adek kamu meng euwe kamu saat tidur, Dan mendapat ${'$'+numberWithCommas(moneyadd)} Sebagai uang tutup mulut`]
                    const persenRandomEuwe = randomeuwean[Math.floor(Math.random() * randomeuwean.length)]
                    nao.reply(from, persenRandomEuwe, id)
                }
            }  else if(kerjajob.getUserJob(sender.id, _job) == 'Kantoran') {
                const moneyadd = Math.floor(2000 * kerjajob.getMulti(sender.id, _job))
                await kerjajob.addWork(sender.id, waktubroheii, _worklimit)
                if(getMoney(sender.id) === undefined) await setMoney(sender.id)
                if (randomGagalJob < 5) {
                    await addMoney(sender.id, HasilUangHilang)
                    await _job.splice(kerjajob.getUserPosition(sender.id, _job), 1)
                    await fs.writeFileSync('./lib/database/user/job.json', JSON.stringify(_job))
                    await kerjajob.setUserJob(sender.id, _job)
                    await kerjajob.addUserJob(sender.id, 'Pengangguran', _job)
                    nao.reply(from, 'Kamu salah menghitung data, dan menyebabkan kerugian besar, dan kamu pun di PECAT', id)
                } else {
                    var amountXpJob = Math.floor(500)
                    await kerjajob.addJobXp(sender.id, amountXpJob, _job)
                    await addMoney(sender.id, moneyadd)
                    nao.reply(from, `Kamu selesai mengkomding, Dan mendapat ${'$'+numberWithCommas(moneyadd)}`, id)
                }
            }
            break
        case prefix+'slots':
        case prefix+'slot':
            if (args.length == 1) return nao.reply(from, 'Mohon masukkan jumlah uang\n\nContoh: '+prefix+'slot 20000', id)
            if(args[1] < 10000) return nao.reply(from, 'Minimal uang untuk judi adalah 10000', id)
            if(args[1].includes('K')) return nao.reply(from, `Mohon ganti 'K' menjadi 000`, id)
            try {
                const CheckMoneyBefore = getMoney(sender.id)
                if (args[1] > CheckMoneyBefore) return nao.reply(from, 'Uang kamu Tidak cukup', id)
                let slots = ['🍎','🍊','🍋','🍏','🫐','🍇']
                const nyeh1 = `${slots[Math.floor(Math.random() * slots.length)]} | ${slots[Math.floor(Math.random() * slots.length)]} | ${slots[Math.floor(Math.random() * slots.length)]}`
                const nyeh2 = `${slots[Math.floor(Math.random() * slots.length)]} | ${slots[Math.floor(Math.random() * slots.length)]} | ${slots[Math.floor(Math.random() * slots.length)]}`
                const nyeh3 = `${slots[Math.floor(Math.random() * slots.length)]} | ${slots[Math.floor(Math.random() * slots.length)]} | ${slots[Math.floor(Math.random() * slots.length)]}`
                await nao.reply(from, `${nyeh1}\n${nyeh2}\n${nyeh3}`, id)
                const UangHasilJudiFresh = Math.floor(args[1])
                const UangHasilJudiFreshMin = Math.floor(Math.random() * 10) - args[1]
                const UangHasilJudi = Math.floor(args[1] * 5)
                const UangHasilJudiMin = Math.floor(args[1] * -5)
                if(nyeh1 == '🍎 | 🍎 | 🍎' || nyeh1 == '🍊 | 🍊 | 🍊' || nyeh1 == '🍋 | 🍋 | 🍋' ||  nyeh1 == '🍏 | 🍏 | 🍏' || nyeh1 == '🫐 | 🫐 | 🫐' || nyeh1 == '🍇 | 🍇 | 🍇' || nyeh2 == '🍎 | 🍎 | 🍎' || nyeh2 == '🍊 | 🍊 | 🍊' || nyeh2 == '🍋 | 🍋 | 🍋' ||  nyeh2 == '🍏 | 🍏 | 🍏' || nyeh2 == '🫐 | 🫐 | 🫐' || nyeh2 == '🍇 | 🍇 | 🍇' || nyeh3 == '🍎 | 🍎 | 🍎' || nyeh3 == '🍊 | 🍊 | 🍊' || nyeh3 == '🍋 | 🍋 | 🍋' ||  nyeh3 == '🍏 | 🍏 | 🍏' || nyeh3 == '🫐 | 🫐 | 🫐' || nyeh3 == '🍇 | 🍇 | 🍇') {
                    await addMoney('6281358181668@c.us', UangHasilJudiMin)
                    await addMoney(sender.id, UangHasilJudi)
                    nao.reply(from, 'Selamat, kamu mendapat hadiah sebesar $'+numberWithCommas(UangHasilJudi)+' 🎉🎊\n\nUang:\nBefore: $'+numberWithCommas(CheckMoneyBefore)+'\nAfter: $'+numberWithCommas(getMoney(sender.id)), id)
                } else {
                    await addMoney('6281358181668@c.us', UangHasilJudiFresh)
                    await addMoney(sender.id, UangHasilJudiFreshMin)
                    nao.reply(from, 'Maaf kamu tidak mendapatkan hadiah\nJumlah Uang Hilang: $'+numberWithCommas(UangHasilJudiFreshMin), id)
                }
               } catch (err) {
                   console.error(err)
                   await nao.reply(from, err, id)
                   await nao.sendText('6281358181668@c.us', err)
               }
               break
        //
        case prefix+'sr':
            arg = body.trim().split(' ')
            const sr = arg[1]
            try {
            const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
            const { postLink, title, subreddit, url, nsfw, spoiler } = response1.data
                if (nsfw == true) {
                    if ((isGroupMsg) && (isNsfw)) {
                        await nao.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                    } else if ((isGroupMsg) && (!isNsfw)) {
                        await nao.reply(from, `Nsfw belum diaktifkan di Grup *${name}*`, id)
                    }
                } else { 
                    await nao.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                }
            } catch(err) {
                await nao.sendFileFromUrl(from, errorurl, id) 
            }
            break
        case prefix+'nhder':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length >=2){
                const code = args[1]
                const url = 'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
                const short = []
                const shortener = await urlShortener(url)
                url['short'] = shortener
                short.push(url)
                const caption = `*DOUJIN DOWNLOADER*\n\nLink: ${shortener}`
                nao.sendText(from, caption)
            } else {
                nao.sendText(from, 'Maaf tolong masukan code nuclear')
            }
            break
        case prefix+'wallpaper' :
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            //nao.reply(from, 'Disabled, Error', id)
            const walnime = await axios.get(`https://api.vhtear.com/walpaper?query=${body.slice(11)}&apikey=${vhtearkey}`)
            const bangwall = walnime.data.result
            let walnimek = bangwall[Math.floor(Math.random() * bangwall.length)]
            nao.sendFileFromUrl(from, walnimek.LinkImg, '', body.slice(11), id)
            break
        case prefix+'quotesnime':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const skya = await axios.get('https://tobz-api.herokuapp.com/api/quotesnime/random')
            skya_ = skya.data
            nao.reply(from, `➤ *Quotes* : ${skya_.quote}\n➤ *Character* : ${skya_.character}\n➤ *Anime* : ${skya_.anime}`, id)
            break
        case prefix+'meme':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes')
            const { postlink, title, subreddit, url, spoiler } = response.data
            nao.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`)
            break
        case prefix+'quoteanime':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    nao.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    nao.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    nao.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    nao.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(({ data }) => {
                                let penyanyi = data.result[0].penyanyi 
                                let judul = data.result[0].judul
                                let linkimg = data.result[0].linkImg
                                let lagu = data.result[0].linkMp3 
                                let size = data.result[0].filesize
                                let durasi = data.result[0].duration
                                nao.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)                               
                            }).catch(err => {
                                console.log(err)
                            })
                        }
            break
        case prefix+'anime':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const keyword = message.body.replace(prefix+'anime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            nao.sendImage(from, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        case prefix+'character':
            //if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const keywords = message.body.replace(prefix+'character', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywords}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Character tidak ditemukan', id)
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[0]
            const contentt = `*Character Ditemukan!*

✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            nao.sendImage(from, base64, name, contentt)
           } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Character tidak ditemukan')
           }
          break
        // ISLAM //
        case prefix+'jadwalshalat':
        case prefix+'jadwalsholat':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `[❗] Kirim perintah *${prefix}jadwalShalat [ Daerah ]*\ncontoh : *${prefix}jadwalShalat Tangerang*\nUntuk list daerah kirim perintah *${prefix}listDaerah*`)
            const daerah = body.slice(14)
            const jadwalShalat = await axios.get(`https://api.vhtear.com/jadwalsholat?query=${daerah}&apiKey=${vhtearkey}`)
            if (jadwalShalat.data.error) return nao.reply(from, jadwalShalat.data.error, id)
            const { Shubuh, Zduhur, Ashr, Magrib, Isya, kota } = await jadwalShalat.data
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `「 JADWAL SHALAT 」\n\nJadwal shalat di ${kota}, ${tgl}-${arrbulan[bln]}-${thn}\n\nSubuh : ${Shubuh}\nDzuhur : ${Zduhur}\nAshar : ${Ashr}\nMaghrib : ${Magrib}\nIsya : ${Isya}`
            await limitAdd(serial)
            break
        case prefix+'quran':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*${prefix}quran* [ Urutan Surat ]\nContoh :\n*${prefix}quran 1*`, id)
            const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
            const quraan = await axios.get(qura)
            const quraann = quraan.data
            let hasqu = `*「 AL-QURAN 」*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
            await nao.reply(from, `${hasqu}`, id).catch((e) => nao.reply(from, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, id))
            await limitAdd(serial)
            break
        case prefix+'listsurah':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '*「 DAFTAR SURAH 」*\n\n___________________________\n'
                    let nmr = 1
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += nmr + '. ' +  monospace(response.data.data[i].name.transliteration.id.toLowerCase()) + '\n'
                        nmr++
                            }
                        hehex += '___________________________'
                    nao.reply(from, hehex, id)
                })
            } catch(err) {
                nao.reply(from, err, id)
            }
            break
        case prefix+'infosurah':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return nao.reply(from, `Kirim perintah *!infosurah [ Nama Surah ]*\nContoh : *${prefix}infosurah al-fatihah*`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
                try {
                    var pesan = "*「 INFORMASI SURAH 」*\n\n___________________________\n\n"
                    pesan = pesan + "➤ *Nama* : "+ data[idx].name.transliteration.id + "\n" + "➤ *Asma* : " +data[idx].name.short+"\n"+"➤ *Arti* : "+data[idx].name.translation.id+"\n"+"➤ *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"➤ *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"➤ *Keterangan* : "+data[idx].tafsir.id
                    pesan += '\n\n___________________________'
                    nao.reply(from, pesan, message.id)
                    limitAdd(serial)
                }catch{
                    nao.reply(from, 'Data tidak ditemukan, atau nama surah salah', id)
                }
            break
        case prefix+'tafsir':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return nao.reply(from, `Kirim perintah *!tafsir [ Nama Surah ] [ Ayat ]*\nContoh : *${prefix}tafsir al-fatihah 2*`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
            try{
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
                    var {data} = responsih.data
                    pesan = ""
                    pesan = pesan + "*「 TAFSIR 」*\n\nTafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
                    pesan = pesan + data.text.arab + "\n\n"
                    pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                    pesan += '\n\n___________________________'
                    nao.reply(from, pesan, message.id)
                    limitAdd(serial)
                }
            }catch{
                nao.reply(from, 'Data tidak ditemukan, mungkin nama surah/ayat salah', id)
            }
            break
        // MEDIA //
        case prefix+'infogempa':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const bmkg = await axios.get(`https://arugaz.herokuapp.com/api/infogempa`)
            const { potensi, lokasi,  kedalaman, magnitude, map } = bmkg.data.result
            const hasil = `*${bmkg.data.result.waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*`
            nao.sendFileFromUrl(from, map, 'gempa.jpg', hasil, id)
            break
        case prefix+'ss':
            //if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'ss [linkWeb] [pc/hp]*\nContoh : *'+prefix+'ss otakudesu.tv pc*', id)
            if (args[2] == 'hp') {
                var typeweb = 'phone'
            } else if (args[2] == 'pc') {
                var typeweb = 'desktop'
            } else {
                return nao.reply(from, 'Kirim perintah *'+prefix+'ss [linkWeb] [pc/hp]*\nContoh : *'+prefix+'ss otakudesu.tv pc*', id)
            }
            const ssw = `https://api.vhtear.com/ssweb?link=${args[1]}&type=${typeweb}&apikey=${vhtearkey}`
            nao.sendFileFromUrl(from, ssw, 'ssweb.jpg', '', id)
            break
        case prefix+'shorturl':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'shorturl [linkWeb]*\nContoh : *'+prefix+'shorturl https://otakudesu.tv*', id)
            const sorturl = body.slice(10)
            const surl = await axios.get(`https://api.vhtear.com/shortener?link=${sorturl}&apikey=${vhtearkey}`)
            const surll = surl.data.result
            if (surll.error) return nao.reply(from, ssww.error, id)
            const surl2 = `Link : ${sorturl}\nShort URL : ${surll.short}`
            nao.sendText(from, surl2, id)
            break
        case prefix+'covid':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const country = await slicedArgs.join(' ')
            console.log(country)
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await nao.sendText(from, '🌎️ Covid Info - ' + country + ' 🌍️\n\n✨️ Total Cases: ' + `${cases}` + '\n📆️ Today\'s Cases: ' + `${todayCases}` + '\n☣️ Total Deaths: ' + `${deaths}` + '\n☢️ Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️ Active Cases: ' + `${active}` + '.')
            break
        case prefix+'spamcall':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            const call2 = await axios.get('https://arugaz.herokuapp.com/api/spamcall?no=' + args[1])
            console.log(args[1])
            const { logs } = call2.data
                await nao.sendText(from, `${logs}` + '.')
            break
        case prefix+'moddroid': // Chikaa Chantekkzz
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}moddroid <judul>*`)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            await limitAdd(serial)
            const modroid = (query) => new Promise((resolve, reject) => {
                console.log(`Searching for ${query}...`)
                fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${query}&apikey=BotWeA`)
                    .then((result) => resolve(result))
                    .catch((err) => reject(err))
            })
            await nao.reply(from, mess.wait, id)
            modroid(body.slice(10))
                .then(async ({ status, result }) => {
                    if (status !== 200) {
                        await nao.reply(from, 'Not found.', id)
                    } else {
                        await nao.sendFileFromUrl(from, result[0].image, 'ksk.jpg', `*「 MOD FOUND 」*\n\n• *APK*: ${result[0].title}\n\n• *Size*: ${result[0].size}\n• *Publisher*: ${result[0].publisher}\n• *Version*: ${result[0].latest_version}\n• *Genre*: ${result[0].genre}\n\n*Download link*\n${result[0].download}`, id)
                        console.log('Success sending APK mod!')
                    }
                })
                .catch(async (err) => {
                    console.error(err)
                    await nao.reply(from, 'Error!', id)
                })
        break
        case prefix+'happymod': // chikaa chantexxzz
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}moddroid <judul>*`)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            await limitAdd(serial)
            const happymod = (query) => new Promise((resolve, reject) => {
                console.log(`Searching for ${query}...`)
                fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${query}&apikey=BotWeA`)
                    .then((result) => resolve(result))
                    .catch((err) => reject(err))
            })
            await nao.reply(from, mess.wait, id)
            happymod(body.slice(10))
                .then(async ({ status, result }) => {
                    if (status !== 200) {
                        await nao.reply(from, 'Not found.', id)
                    } else {
                        await nao.sendFileFromUrl(from, result[0].image, 'ksk.jpg', `*「 MOD FOUND 」*\n\n➸ *APK*: ${result[0].title}\n\n➸ *Size*: ${result[0].size}\n➸ *Root*: ${result[0].root}\n➸ *Version*: ${result[0].version}\n➸ *Price*: ${result[0].price}\n\n*Download link*\n${result[0].download}`, id)
                        console.log('Success sending APK mod!')
                    }
                })
                .catch(async (err) => {
                    console.error(err)
                    await nao.reply(from, 'Error!', id)
                })
            break
        case prefix+'ytmp4':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}ytmp4 [ Link Yt ]*, untuk contoh silahkan kirim perintah *${prefix}readme*`)
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return nao.reply(from, mess.error.Iv, id)
            try {
                nao.reply(from, mess.wait, id)
                const ytvh = await fetch(`http://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!ytvh.ok) throw new Error(`Error Get Video : ${ytvh.statusText}`)
                const ytvh2 = await ytvh.json()
                 if (ytvh2.status == false) {
                    nao.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(ytvh2.result.size.split(' MB')[0]) > 40.00) return nao.reply(from, `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${ytvh2.result.title}\n• *Filesize* : ${ytvh2.result.size}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${ytvh2.result.UrlVideo}`, id)
                    const ytan = await ytvh2.result
                    nao.sendFileFromUrl(from, ytan.imgUrl, 'thumb.jpg', `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${ytan.title}\n• *Filesize* : ${ytan.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`, id)
                    //await nao.sendFileFromUrl(from, ytan.imgUrl, 'thumb.jpg',`*「 YOUTUBE MP4 」*\n\n• *Judul* : ${ytan.title}\n• *Filesize* : ${ytan.size}\n\n_Maaf, Internet lagi down. Silahkan download video melalui link dibawah_.\n${ytan.UrlVideo}`, id)
                    //await nao.sendFileFromUrl(from, ytan.UrlVideo, `${ytan.title}.mp4`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                    const responses = await fetch(ytan.UrlVideo);
                    const buffer = await responses.buffer(); 
                    await fs.writeFile(`./lib/cache/yt/${sender.id}.mp4`, buffer)
                    await nao.sendFile(from, `./lib/cache/yt/${sender.id}.mp4`, `${ytan.title}.mp4`, `*${ytan.title}*`, id).catch(() => nao.reply(from, mess.error.Yt4, id))
                    console.log('Success sending YT MP4!')
                    fs.unlinkSync(`./lib/cache/yt/${sender.id}.mp4`)
                    await limitAdd(serial)
                }
            } catch (err) {
                nao.sendText(ownerNumber, 'Error ytmp4 : '+ err)
                nao.reply(from, mess.error.Yt4, id)
                console.log(err)
            }
            break
        case prefix+'play':
            if (!isPrem) return nao.reply(from, `Perintah ini hanya bisa di gunakan User Premium`, id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return nao.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
            try {
                nao.reply(from, mess.wait, id)
                const serplay = body.slice(6)
                const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                if (!webplay.ok) throw new Error(`Error Get Music : ${webplay.statusText}`)
                const webplay2 = await webplay.json()
                 if (webplay2.status == false) {
                    nao.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(webplay2.result.size.split(' MB')[0]) >= 20.00) return nao.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 20 MB!', id)
                    const { image, mp3, size, ext, title, duration } = await webplay2.result
                    const captplay = `*「 PLAY 」*\n\n➤ *Judul* : ${title}\n➤ *Durasi* : ${duration}\n➤ *Filesize* : ${size}\n➤ *Format* : ${ext}\n\n_*Music Sedang Dikirim*_`
                    nao.sendFileFromUrl(from, image, `thumb.jpg`, captplay, id)
                    if (fs.existsSync(`./lib/cache/play/${args[1]}.${ext}`)) await fs.unlinkSync(`./lib/cache/play/${args[1]}.${ext}`)
                    /*const fileplaystream = fs.createWriteStream(`./lib/cache/play/${args[1]}.${ext}`);
                    https.get(mp3, function(response) {
                        response.pipe(fileplaystream);
                    })
                    await sleep(10000)
                    nao.sendFile(from, `./lib/cache/play/${args[1]}.${ext}`, `${args[1]}.${ext}`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))*/
                    const responses = await fetch(mp3);
                    const buffer = await responses.buffer();
                    await fs.writeFile(`./lib/cache/play/${sender.id}.${ext}`, buffer)
                    await nao.sendFile(from, `./lib/cache/play/${sender.id}.${ext}`, `${title}.${ext}`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                    //await nao.sendFileFromUrl(from, mp3, `${title}.mp3`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                    console.log('Success sending Play MP3!')
                    fs.unlinkSync(`./lib/cache/play/${sender.id}.${ext}`)
                    await limitAdd(serial)
                }
            } catch (err) {
                nao.sendText(ownerNumber, 'Error Play : '+ err)
                nao.reply(from, mess.error.Yt3, id)
            }
            break
        case prefix+'ytmp3':
            if (!isPrem) return nao.reply(from, `Perintah ini hanya bisa di gunakan User Premium`, id)
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}ytmp3 [ Link Yt ]*, untuk contoh silahkan kirim perintah *${prefix}readme*`, id)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return nao.reply(from, mess.error.Iv, id)
            try {
                nao.reply(from, mess.wait, id)
                const vhtearyt3 = await fetch(`https://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!vhtearyt3.ok) throw new Error(`Error ytmp3 3 : ${vhtearyt3.statusText}`)
                const vhtearyt33 = await vhtearyt3.json()
                 if (vhtearyt33.status == false) {
                    nao.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if(Number(vhtearyt33.result.size.split(' MB')[0]) >= 10.00) return nao.sendFileFromUrl(from, vhtearyt33.result.imgUrl, `thumb.jpg`, `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${vhtearyt33.result.title}\n• *Filesize* : ${vhtearyt33.result.size}\n\n_Maaf, Durasi audio melebihi 10 MB. Silahkan download audio melalui link dibawah_.\n${vhtearyt33.result.UrlMp3}`, id)
                    const { title, ext, size, UrlMp3, status, imgUrl } = await vhtearyt33.result
                    console.log(`VhTear Giliran ${ext}\n${size}\n${status}`)
                    const captions = `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                    nao.sendFileFromUrl(from, imgUrl, `thumb.jpg`, captions, id)
                    //await nao.sendFile(from, UrlMp3, `${title}.mp3`, '', id)
                    //await nao.sendFileFromUrl(from, UrlMp3, `${title}.mp3`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                    const responses = await fetch(UrlMp3);
                    const buffer = await responses.buffer(); 
                    await fs.writeFile(`./lib/cache/yt/${sender.id}.mp3`, buffer)
                    await nao.sendFile(from, `./lib/cache/yt/${sender.id}.mp3`, `${title}.mp3`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                    console.log('Success sending YT MP3!')
                    fs.unlinkSync(`./lib/cache/yt/${sender.id}.mp3`)
                    await limitAdd(serial)
                }
            } catch (err) {
                nao.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                nao.reply(from, mess.error.Yt3, id)
            }
            break
        case prefix+'ytcari':
            //if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM')
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}ytcari judul*, untuk contoh silahkan kirim perintah *${prefix}readme*`, id)
            try {
                nao.reply(from, mess.wait, id)
                const nyeh = body.slice(8)
                const vhtearyt3 = await fetch(`https://api.vhtear.com/youtube?query=${nyeh}&apikey=${vhtearkey}`)
                if (!vhtearyt3.ok) throw new Error(`Error ytcari : ${vhtearyt3.statusText}`)
                const vhtearyt33 = await vhtearyt3.json()
                if (vhtearyt33.status == false) {
                    nao.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    const cariyt = vhtearyt33.result
                    const saye = cariyt[Math.floor(0)]
                    nao.sendFileFromUrl(from, saye.image, 'thumb.jpg', `━━━━━━━━━━━━━━━━━\n➤ *Judul:* ${saye.title}\n➤ *Channel:* ${saye.channel}\n➤ *Dilihat:* ${saye.views}x\n➤ *Durasi:* ${saye.duration}\n━━━━━━━━━━━━━━━━━\n\nUntuk mendownload video gunakan *${prefix}ytmp4 https://youtu.be/${saye.id}\nUntuk mendownload audio gunakan ${prefix}ytmp3 https://youtu.be/${saye.id}`).catch(() => nao.reply(from, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                nao.sendText(ownerNumber, 'Error ytcari : '+ err)
                nao.reply(from, mess.error.Yt3, id)
            }
            break  
        case prefix+'film':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const jufilm = body.slice(6)
            const lk21 = await axios.get(`https://api.vhtear.com/downloadfilm?judul=${jufilm}&apikey=${vhtearkey}`)
            const hafilm = lk21.data.result.data
            const urufilm3 = hafilm[Math.floor(0)]
            const urufilm10 = hafilm[Math.floor(1)]
            nao.sendLinkWithAutoPreview(from, `Resolusi: ${urufilm3.resolusi}\nLink: ${urufilm3.urlDownload}`)
            nao.sendLinkWithAutoPreview(from, `Resolusi: ${urufilm10.resolusi}\nLink: ${urufilm10.urlDownload}`)
            break
        case prefix+'ongoing':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const ongoingd = await axios.get(`https://api.vhtear.com/ongoinganoboy&apikey=${vhtearkey}`)
            const ongoingb = ongoingd.data.result
            const haon = ongoingb[Math.floor(Math.random() * ongoingb.length)]
            nao.sendFileFromUrl(from, haon.image, '', `Judul: ${haon.title}\n\nLink Anime: ${haon.url}`)
            break
        case prefix+'nhcari':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return nao.reply(from, `Untuk mencari doujin dari nhentai.net\n\nPenggunaan: ${prefix}nhcari misha necron`, id)
            try {
                nao.reply(from, mess.wait, id)
                const doujinn = body.slice(8)
                const sodou = await fetch(`https://api.vhtear.com/nhentaisearch?query=${doujinn}&apikey=${vhtearkey}`)
                if (!sodou.ok) throw new Error(`Error Get Doujin : ${webplay.statusText}`)
                const sodou2 = await sodou.json()
                 if (sodou2.status == false) {
                    nao.reply(from, `*Maaf Terdapat kesalahan saat mengambil data*`, id)
                } else {
                    const sodou3 = sodou2.result.doujins
                    const douran = sodou3[Math.floor(Math.random() * sodou3.length)]
                    const { id, title, lang, cover } = await douran
                    const doucot = `*「 NHCARI 」*\n\n➤ *Judul* : ${title}\n➤ *Bahasa* : ${lang}\n➤ *Sort* : ${sodou2.result.sort}\n➤ *Link* : nhentai.net/g/${id}\n\nDownload menggunakan _${prefix}nhder ${id}_`
                    await nao.sendFileFromUrl(from, cover, 'doujin.jpg', doucot).catch(() => nao.reply(from, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                nao.sendText(ownerNumber, 'Error Nhcari : '+ err)
                nao.reply(from, '*Maaf Terdapat kesalahan saat mengambil data*', id)
            }
            break
        case prefix+'osu':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length == 1) return nao.reply(from, `Untuk melihat osu Profile\n\Contoh: ${prefix}osu InfiniteLight`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const fetchOsuApi = await fetch(`https://osu.ppy.sh/api/get_user?k=9ba963940e4f648b5dcaec84e4ecd35cfa94635c&u=${args[1]}`)
            const fetchOsuApi1 = await fetchOsuApi.json()
            const fetchOsuApi2 = fetchOsuApi1[Math.floor(Math.random() * fetchOsuApi1.length)]
            if(fetchOsuApi2.user_id == undefined) return nao.reply(from, 'User Tidak Ditemukan', id)
            console.log(fetchOsuApi2.user_id)
                //General
                const userOsuId = fetchOsuApi2.user_id
                const usernameOsu = fetchOsuApi2.username
                const joindateOsu = fetchOsuApi2.join_date
                const countryOsu = fetchOsuApi2.country
                const PlayCountOsu = fetchOsuApi2.playcount
                //Score
                const RankedScoreOsu = fetchOsuApi2.ranked_score
                const TotalScoreOsu = fetchOsuApi2.total_score
                const Score300Osu = fetchOsuApi2.count300
                const Score100Osu = fetchOsuApi2.count100
                const Score50Osu = fetchOsuApi2.count50
                //Perfomance
                const levelOsu = fetchOsuApi2.level
                const leaderboardOsu = fetchOsuApi2.pp_rank
                const PPOsu = fetchOsuApi2.pp_raw
                const akurasiOsu = fetchOsuApi2.accuracy
                const AOsu = fetchOsuApi2.count_rank_a
                const SOsu = fetchOsuApi2.count_rank_s
                const SHOsu = fetchOsuApi2.count_rank_sh
                const SSOsu = fetchOsuApi2.count_rank_ss
                const SSHOsu = fetchOsuApi2.count_rank_ssh 
                nao.sendFileFromUrl(from, `https://a.ppy.sh/${userOsuId}`, '', `<------------------------------------------>

*OsuId* : ${userOsuId}
*Username* : _${usernameOsu}_
*Negara* : ${countryOsu}
*Level* : ${levelOsu}
*Akurasi* : ${akurasiOsu}%
*PP* : ${PPOsu}
*Leaderboard* : ${numberWithCommas(leaderboardOsu)}
*JoinDate* : ${joindateOsu}

<Score> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​


*PlayCount* : ${numberWithCommas(PlayCountOsu)}
*Ranked Score* : ${numberWithCommas(RankedScoreOsu)}
*Total Score* : ${numberWithCommas(TotalScoreOsu)}
*SSH Score* : ${SSHOsu}
*SS Score* : ${SSOsu}
*SH Score* : ${SHOsu}
*S Score* : ${SOsu}
*A Score* : ${AOsu}

*300* : ${numberWithCommas(Score300Osu)}
*100* : ${numberWithCommas(Score100Osu)}
*50* : ${numberWithCommas(Score50Osu)}
`)
            break
        case prefix+'google':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            nao.reply(from, mess.wait, id)
            const googleQuery = body.slice(8)
            if(googleQuery == undefined || googleQuery == ' ') return nao.reply(from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, id)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n━━━━━━━━━━━━━━━━━\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
            }
                nao.reply(from, vars, id);
            }).catch(e => {
                console.log(e)
                nao.sendText(ownerNumber, 'Google Error : ' + e);
            })
            break
        case prefix+'translate':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var text = body.slice(11+codelang.length);
                translatte(text, {to: codelang}).then(res => {
                    nao.sendText(from,res.text);
                    limitAdd(serial)
                }).catch(err => {
                     nao.sendText(from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`);
                });
            }
            break
        case prefix+'otaku':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'otaku [optional]*\nContoh: '+prefix+'otaku Nao')
            try {
                nao.reply(from, mess.wait, id)
                const gambaro = body.slice(7)
                const gamotaku = await axios.get(`https://api.vhtear.com/otakusearch?query=${gambaro}&apikey=${vhtearkey}`)
                const otakugam = gamotaku.data.result.data
                 if (otakugam.error) {
                    nao.reply(from, ytvv.error, id)
                } else {
                    const apotaku = otakugam[Math.floor(Math.random() * otakugam.length)]
                    await nao.sendFileFromUrl(from, apotaku.image, `${apotaku.title}.jpg`, `*Title* : ${apotaku.title}\n*Waktu* : ${apotaku.datetime}`)}
            } catch (err) {
                console.log(err)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Gambar tidak ditemukan')
                nao.sendText(ownerNumber, 'otaku Error : ' + err)
            }
            break
        case prefix+'otakulatest':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
                const laotaku = await axios.get(`https://api.vhtear.com/otakulatest&apikey=${vhtearkey}`)
                const otakula = laotaku.data.result.data
                 if (otakula.error) {
                    nao.reply(from, ytvv.error, id)
                } else {
                    const otakulat = otakula[Math.floor(Math.random() * otakula.length)]
                    await nao.sendFileFromUrl(from, otakulat.image, `${otakulat.title}.jpg`, `*Title* : ${otakulat.title}\n*Waktu* : ${otakulat.datetime}`)}
            } catch (err) {
                console.log(err)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Gambar tidak ditemukan')
                nao.sendText(ownerNumber, 'otakulatest Error : ' + err)
            }
            break
        case prefix+'shopee':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'shopee [optional]*\nContoh: '+prefix+'shopee xiaomi')
            try {
                nao.reply(from, mess.wait, id)
                const produk = body.slice(8)
                const jualan = await axios.get(`https://api.vhtear.com/shopee?query=${produk}&count=1&apikey=${vhtearkey}`)
                const jualanyaa = jualan.data.result.items
                 if (jualanyaa.error) {
                    nao.reply(from, ytvv.error, id)
                } else {
                    const jualanya = jualanyaa[Math.floor(0)]
                    await nao.sendFileFromUrl(from, jualanya.image_cover, `${jualanya.nama}.jpg`, `➤ *Produk* : ${jualanya.nama}\n➤ *Harga* : ${jualanya.harga}\n➤ *Terjual* : ${jualanya.terjual}\n➤ *Lokasi Toko* : ${jualanya.shop_location}\n➤ *Link* : ${jualanya.link_product}\n➤ *Deskripsi* : ${jualanya.description}`)}
            } catch (err) {
                console.log(err)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Produk tidak ditemukan')
                nao.sendText(ownerNumber, 'Shopee Error : ' + err)
            }
            break
        case prefix+'playstore':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'playstore [optional]*\nContoh: '+prefix+'playstore genshin impact')
            try {
                nao.reply(from, mess.wait, id)
                const app = body.slice(11)
                const appk = await axios.get(`https://api.vhtear.com/playstore?query=${app}&apikey=${vhtearkey}`)
                const apkk = appk.data.result
                 if (apkk.error) {
                    nao.reply(from, ytvv.error, id)
                } else {
                    const apk = apkk[Math.floor(0)]
                    await nao.sendFileFromUrl(from, apk.icon, `${apk.title}.jpg`, `➤ *APP* : ${apk.title}\n➤ *Developer* : ${apk.developer}\n➤ *Harga* : ${apk.price}\n➤ *Score* : ${apk.score}\n➤ *Link* : https://play.google.com${apk.url}\n➤ *Deskripsi* : ${apk.description}`)}
            } catch (err) {
                console.log(err)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Aplikasi tidak ditemukan')
                nao.sendText(ownerNumber, 'playstore Error : ' + err)
            }
            break
        case prefix+'xsearch':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'xsearch [query]*, untuk contoh silahkan kirim perintah *'+prefix+'readme*')
            try {
                nao.reply(from, mess.wait, id)
                const samngeanlu = body.slice(9)
                const reqx = await axios.get(`https://api.vhtear.com/xxxsearch?query=${samngeanlu}&apikey=${vhtearkey}`)
                const reqxs = reqx.data.result.data
                 if (reqxs.error) {
                    nao.reply(from, ytvv.error, id)
                } else {
                    const reqsangean = reqxs[Math.floor(Math.random() * reqxs.length)]
                    await nao.sendFileFromUrl(from, reqsangean.image, `${reqsangean.title}.jpg`, `*Judul* : ${reqsangean.title}\n*Durasi* : ${reqsangean.duration}\n*Url* : ${reqsangean.url}\n\nDownload videonya pakai ${prefix}xdown ${reqsangean.url}`)}
            } catch (err) {
                console.log(err)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                nao.sendText(ownerNumber, 'Xnxx Error : ' + err)
            }
            break
        case prefix+'xdown':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'xdown [linkXnxx]*, untuk contoh silahkan kirim perintah *'+prefix+'readme*')
            if (!args[1].match(isUrl) && !args[1].includes('xtube.com')) return nao.reply(from, mess.error.Iv, id)
            try {
                nao.reply(from, mess.wait, id)
                const resq = await axios.get(`https://api.vhtear.com/xxxdownload?link=${args[1]}&apikey=${vhtearkey}`)
                const resp = resq.data.result
                const respq = resq.data.result.urlVideo
                 if (resp.error) {
                    nao.reply(from, ytvv.error, id)
                } else {
                    const reqxn = respq[Math.floor(3)]
                    await nao.sendFileFromUrl(from, reqxn.videoUrl, `${resp.title}.${reqxn.format}`, `${resp.title}`, id)}
            } catch (err) {
                console.log(err)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                nao.sendText(ownerNumber, 'Xdown Error : ' + err)
            }
            break
        case prefix+'ramalpasangan':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'ramalpasangan [kamu|pasangan]*\nContoh : *'+prefix+'ramalpasangan Owner|Mama*', id)
            arg = body.trim().split('|')
            if (arg.length >= 2) {
            nao.reply(from, mess.wait, id)
            const randomnomer = Math.floor(Math.random() * 100) 
            const kamu = arg[0]
            const pacar = arg[1]
            const rpmn = randomnomer
            const rpmn2 = randomnomer
            const rpmn3 = randomnomer
            const rpmn4 = randomnomer
            const rpmn5 = randomnomer
            const rpmn6 = randomnomer
            const rjh2 = `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan ${pacar}\n\n➤ Cinta : ${rpmn}\n➤ Jodoh : ${rpmn2}\n➤ Kemiripan : ${rpmn3}\n➤ Kesukaan : ${rpmn4}\n➤ Kesamaan : ${rpmn5}\n➤ Kebucinan ${rpmn6}`
            nao.reply(from, rjh2, id)
            } else {
            await nao.reply(from, 'Wrong Format!', id)
            }
            break
        case prefix+'artinama':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'artinama [query]*\nContoh : *'+prefix+'artinama Rizqi*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artinama?nama=' + body.slice(10) + '&apikey=' + vhtearkey)
            if (resp.data.error) return nao.reply(from, resp.data.error, id)
            const anm2 = `➤ Artinama : ${resp.data.result.hasil}`
            nao.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                nao.sendText(ownerNumber, 'Artinama Error : ' + err)
           }
            break
        case prefix+'zodiak':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'zodiak [zodiak kamu]*\nContoh : *'+prefix+'zodiak scorpio*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/zodiak?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return nao.reply(from, resp.data.error, id)
            const anm2 = `➤ Zodiak : ${resp.data.result.zodiak}\n➤ Ramalan : ${resp.data.result.ramalan}\n➤ Nomor Keberuntungan : ${resp.data.result.nomorKeberuntungan}\n➤ Motivasi : ${resp.data.result.motivasi}\n➤ Inspirasi : ${resp.data.result.inspirasi}`
            nao.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Zodiak tidak ditemukan')
                nao.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
        case prefix+'caklontong':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return nao.reply(from, resp.data.error, id)
            const anm2 = `➤ Soal : ${resp.data.result.soal}\n➤ Deskripsi :-\n➤ Poin : ${resp.data.result.poin}`
            const jwban = `➤ Jawaban : ${resp.data.result.jawaban}`
            nao.reply(from, anm2, id)
            nao.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            nao.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            nao.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            nao.reply(from, jwban, id)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                nao.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
         case prefix+'tebakgambar':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return nao.reply(from, resp.data.error, id)
            const jwban = `➤ Jawaban : ${resp.data.result.jawaban}`
            nao.sendFileFromUrl(from, resp.data.result.soalImg, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', id)
            nao.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            nao.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            nao.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            nao.reply(from, jwban, id)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                nao.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
           }
           break
         case prefix+'family100':
            //if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM')
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
            if (resp.data.error) return nao.reply(from, resp.data.error, id)
            const anm2 = `➤ Soal : ${resp.data.result.soal}\n_Silahkan DiJawab_`
            const jwban = `➤ Jawaban : ${resp.data.result.jawaban}`
            nao.reply(from, anm2, id)
            nao.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            nao.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            nao.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            nao.reply(from, jwban, id)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                nao.sendText(ownerNumber, 'Family100 Error : ' + err)
           }
           break
        case prefix+'heroml':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'heroml [nama hero]*\nContoh : *'+prefix+'heroml akai*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/herodetail?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return nao.reply(from, resp.data.error, id)
            const anm2 = `➤ Title : ${resp.data.result.title}\n➤ Quotes : ${resp.data.result.quotes}\n➤ Info : ${resp.data.result.info}\n➤ Atribut : ${resp.data.result.attributes}`
            nao.sendFileFromUrl(from, resp.data.result.pictHero, 'hero.jpg', anm2, id)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Hero tidak ditemukan')
                nao.sendText(ownerNumber, 'Heroml Error : ' + err)
           }
            break
        case prefix+'nomorhoki':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'nomorhoki [no hp kamu]*\nContoh : *'+prefix+'nomorhoki 0895384009405*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/nomerhoki?no=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return nao.reply(from, resp.data.error, id)
            const anm2 = `➤ Hasil :\n ${resp.data.result.hasil}`
            nao.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Nomor Hoki tidak ditemukan')
                nao.sendText(ownerNumber, 'Nomorhoki Error : ' + err)
           }
            break
        case prefix+'artimimpi':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'artimimpi [mimpi]*\nContoh : *'+prefix+'artimimpi makan*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artimimpi?query=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return nao.reply(from, resp.data.error, id)
            const anm2 = `➤ Artimimpi : ${resp.data.result.hasil}`
            nao.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Mimpi tidak ditemukan')
                nao.sendText(ownerNumber, 'Artimimpi Error : ' + err)
           }
            break
        case prefix+'wiki':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}wiki [ Query ]*\nContoh : *${prefix}wiki lagu*`, id)
            const queryz_ = body.slice(6)
            const wiki = await axios.get(`https://api.vhtear.com/wikipedia?query=${queryz_}&apikey=${vhtearkey}`)
            if (wiki.data.error) {
                nao.reply(from, wiki.data.error, id)
            } else {
                nao.sendFileFromUrl(from, wiki.data.result.ImgResult, '', `*「 WIKI 」*\n\n➤ *Query* : ${queryz_}\n\n➤ *Result* : ${wiki.data.result.Info}`, id)
                await limitAdd(serial)
            }
        case prefix+'kbbi':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}kbbi [ Query ]*\nContoh : *${prefix}kbbi lagu*`, id)
            const kbbl = body.slice(6)
            const kbbl2 = await axios.get(`https://api.vhtear.com/kbbi?query=${kbbl}&apikey=${vhtearkey}`)

            if (kbbl2.data.error) {
                nao.reply(from, kbbl2.data.error, id)
            } else {
                nao.sendText(from, `*「 KBBI 」*\n\n➤ *Query* : ${kbbl}\n\n➤ *Result* : ${kbbl2.data.result.hasil}`, id)
                await limitAdd(serial)
            }
            break
        case prefix+'googleimage':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
            const qwery = argz[1]
            const jum = argz[2]
            if(!qwery) return await nao.reply(from, `Kirim perintah *${prefix}googleimage [ |Query|Jumlah ]*, contoh = ${prefix}googleimage |loli|3`, id)
            if(!jum) return await nao.reply(from, `Jumlah gambar diperlukan, contoh = ${prefix}googleimage |loli|3`, id)
            if(jum >= 5) return await nao.reply(from, 'Jumlah terlalu banyak! Max 4', id)
            var gis = require('g-i-s');
            var opts = {
                searchTerm: qwery
                };
                gis(opts, logResults);
                    
                function logResults(error, results) {
                    if (error) {
                        nao.reply(from, 'Maaf, Fitur Sedang Error', id)
                    } else {
                        const item = results.slice(0, jum)
                        item.forEach(async(res) => {
                        console.log(res)
                        const yurl = await urlShortener(res.url)
                        nao.sendImage(from, res.url, null, `➤ Link : ${yurl}\n➤ Image size : ${res.height} x ${res.width}`)  
                        limitAdd(serial) 
                        })
                    }
                }
            }
        case prefix+'sand': 
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return nao.reply(from, 'Kirim perintah *'+prefix+'sand [ Teks ]*\nContoh *'+prefix+'sand Owner*', id)
            const swrt = body.slice(6)
            try {
            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt + '&apikey=' + vhtearkey)
            const { imgUrl } = swrt2.data.result
            const swrt3 = `*「 SAND WRITING 」*

*Text : ${swrt}*`
            const pictk = await bent("buffer")(imgUrl)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            nao.sendImage(from, base64, swrt3)
            } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             nao.sendText(ownerNumber, 'Sand Writing Error : ' + err)
           }
          break
        case prefix+'tahta':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
             if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
    
             await limitAdd(serial)
             const jreng = body.slice(7)
             if (!jreng) return nao.reply(from, 'Kirim perintah *'+prefix+'tahta [teks]*\n\nContoh *'+prefix+'tahta Nao*', id)
             if (jreng.length > 7) return nao.reply(from, 'Maksimal 7 Huruf!', id)
             nao.sendText(from, '_Sedang diproses, mohon tunggu sebentar!..._', id)
             await nao.sendFileFromUrl(from, `https://api.vhtear.com/hartatahta?text=${jreng}&apikey=${vhtearkey}`,`${jreng}.jpg`,`Harta Tahta ${jreng}`, id)        
             break
        case prefix+'resep':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return nao.reply(from, 'Kirim perintah *'+prefix+'resep [optional]*\nContoh *'+prefix+'resep tahu*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const rmk = await slicedArgs.join(' ')
            console.log(rmk)
            try {
            const resp = await axios.get('https://api.vhtear.com/resepmasakan?query=' + rmk + '&apikey=' + vhtearkey)
            const { bahan, cara, image, title  } = resp.data.result
            const rmk3 = `*Resep Ditemukan!*
➤ *Judul:* ${title}
➤ *Bahan:* ${bahan}
➤ *Cara:* ${cara}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            nao.sendImage(from, base64, title, rmk3)
            } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Resep tidak ditemukan')
             nao.sendText(ownerNumber, 'Resepmasakan Error : ' + err)
           }
           break
        case prefix+'igstalk':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return nao.reply(from, 'Kirim perintah *'+prefix+'igstalk @username*\nContoh *'+prefix+'igstalk duar_amjay*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
                const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
                const { biography, follower, follow, picture, post_count, full_name, username, is_private } = istalk2.data.result
                const istalk3 = `*User Ditemukan!*
    
➤ *Username:* ${username}
➤ *Nama:* ${full_name}
➤ *Bio:* ${biography}
➤ *Mengikuti:* ${follow}
➤ *Pengikut:* ${follower}
➤ *Jumlah Postingan:* ${post_count}
➤ *Private:* ${is_private}`
                
                const pictk = await bent("buffer")(picture)
                const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
                nao.sendImage(from, base64, username, istalk3)
                } catch (err) {
                 console.error(err.message)
                 await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                 nao.sendText(ownerNumber, 'Igstalk Error : ' + err)
               }
              break
        case prefix+'tiktokstalk':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return nao.reply(from, 'Kirim perintah *'+prefix+'tiktokstalk username*\nContoh *'+prefix+'tiktokstalk riaricis*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
➤ *Username:* ${username}
➤ *Judul:* ${title}
➤ *Bio:* ${bio}
➤ *Mengikuti:* ${follow}
➤ *Pengikut:* ${follower}
➤ *Jumlah Like*: ${like_count}
➤ *Jumlah Postingan:* ${video_post}
➤ *Deskripsi:* ${description}
➤ *Link:* ${url_account}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            nao.sendImage(from, base64, title, tiktod)
            } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             nao.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
           }
          break
        case prefix+'smulestalk':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'smulestalk username*\nContoh : *'+prefix+'smulestalk loli*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sstalk = await slicedArgs.join(' ')
            console.log(sstalk)
            try {
            const sstalk2 = await axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk + '&apikey=' + vhtearkey)
            const { username, full_name, follower, follow, biography, is_vip, picture, recording } = sstalk2.data.result
            const smule = `*User Ditemukan!*
➤ *Username:* ${username}
➤ *Full Name:* ${title}
➤ *Biografi:* ${biography}
➤ *Mengikuti:* ${follow}
➤ *Pengikut:* ${follower}
➤ *VIP*: ${is_vip}
➤ *Total Rekaman:* ${recording}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            nao.sendImage(from, base64, title, smule)
            } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             nao.sendText(ownerNumber, 'Error Smulestalk : '+ err)
            }
          break
        case prefix+'ai':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isSimi) return nao.reply(from, 'command/Perintah Simi belum di aktifkan di group ini!', id)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+' [teks]*\nContoh : *'+prefix+' halo*')
            const que = body.slice(4)
            const sigo = await axios.get(`http://simsumi.herokuapp.com/api?text=${que}&lang=id`)
            const sigot = `${sigo.data.success}`
            if(sigot.includes('simi')) {
                var sigotfilter = sigot.replace(/simi/gi,'Nao')
                console.log('Ada kata `simi`')
            } else if(sigot.includes('Simi')) {
                var sigotfilter = sigot.replace(/Simi/gi,'Nao')
                console.log('Ada kata `Simi`')
            } else {
                var sigotfilter = sigot
            }
            nao.reply(from, sigotfilter, id)
            console.log(sigotfilter)
            break
        case prefix+'ig': 
        case prefix+'instagram':
            //if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM')
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}ig [ Link Instagram ]* untuk contoh silahkan kirim perintah *${prefix}readme*`)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return nao.reply(from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, id)
            await nao.reply(from, mess.wait, id);
            instagram(args[1]).then(async(res) => {
                let username = res.owner_username;
                for (let i = 0; i < res.post.length; i++) {
                if (res.post[i].type == "image") {
                        await nao.sendFileFromUrl(from, res.post[i].urlDownload, "ig.jpg", `*「 INSTAGRAM 」*\n\n➤ *Username* : ${username}\n➤ *Tipe* : Image/Jpg`, id);
                        limitAdd(serial)
                    } else if (res.post[i].type == "video") {
                        await nao.sendFileFromUrl(from, res.post[i].urlDownload, "ig.mp4", `*「 INSTAGRAM 」*\n\n➤ *Username* : ${username}\n➤ *Tipe* : Video/MP4`);
                        limitAdd(serial)
                    }
                }
            }).catch((err) => {
                console.log(err);
                nao.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'igstory':
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            const igan = await axios.get(`https://api.vhtear.com/igstory?query=${args[1]}&apikey=${vhtearkey}`)
            if (args.length === 1) return nao.reply(from, 'Format salah/nSilahkan masukkan username', id)
            await nao.reply(from, mess.wait, id)
                for (let i = 0; i < igan.data.result.story.itemlist.length; i++) {
                    const { urlDownload } = igan.data.result.story.itemlist[i]
                    await nao.sendFileFromUrl(from, urlDownload, '', '', id)
                    console.log('Success sending IG Story!')
                }
            break
        case prefix+'fb':
            //if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM')
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)

            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}fb [ Link Fb ]*\nContoh : *${prefix}fb https://www.facebook.com/24609282673/posts/10158628585367674/*`, id)

            nao.reply(from, mess.wait, id)
            facebook(args[1]).then(async(res) => {
                let { VideoUrl } = await res
                const epbe2 = `*「 FACEBOOK DOWNLOADER 」*\n➤ *Aplikasi*: Facebook\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                nao.sendFileFromUrl(from, VideoUrl, `Facebook.mp4`, epbe2, id)
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                nao.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'tiktok':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'tiktok [linkTiktok]*\nContoh : *'+prefix+'tiktok https://vt.tiktok.com/yqyjPX/*', id)
            nao.reply(from, mess.wait, id)
            tiktok(args[1]).then(async(res) => {
                let { video/*, title, image, desk, dibuat, duration*/ } = await res
                //let ttiktok = `*「 TIKTOK DOWNLOADER 」*\n\n➤ *Judul* : ${title}\n➤ Deskripsi : ${desk}\n➤ Durasi : ${duration}\n➤ Dibuat : ${dibuat}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                //nao.sendFileFromUrl(from, image, 'thumb.jpg', '', id)
                await nao.sendFileFromUrl(from, video, `tiktok.mp4`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                nao.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'smule':
            //if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM')
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'smule [linkSmule]*\nContoh : *'+prefix+'smule https://www.smule.com/p/767512225_3062360163*', id)
            nao.reply(from, mess.wait, id)
            smule(args[1]).then(async(res) => {
                let { Type, title, url, image } = await res
                let tsmule = `*「 SMULE DOWNLOADER 」*\n\n➤ *Judul* : ${title}\n➤ *Type:* ${Type}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                nao.sendFileFromUrl(from, image, 'thumb.jpg', tsmule, id)
                await nao.sendFileFromUrl(from, url, `${title}.mp3`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                nao.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'starmaker':
            //if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM')
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'starmaker [linkStarmaker]* untuk contoh silahkan kirim perintah *'+prefix+'readme*')
            nao.reply(from, mess.wait, id)
            starmaker(args[1]).then(async(res) => {
                let { image, desc, url, title } = await res
                let tstarmaker = `*「 STARMAKER DOWNLOADER 」*\n\n➤ *Judul* : ${title}\n➤ *Deskripsi:* ${desc}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                nao.sendFileFromUrl(from, image, 'thumb.jpg', tstarmaker, id)
                await nao.sendFileFromUrl(from, url, `${title}.mp3`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                nao.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'twitter':
            //if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM')
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}twitter [ Link Twitter ]* untuk contoh silahkan kirim perintah *${prefix}readme*`)
            nao.reply(from, mess.wait, id)
            twitter(args[1]).then(async(res) => {
                let { desk, urlVideo } = await res
                let ttwitter = `*「 TWITTER DOWNLOADER 」*\n\n➤ *Aplikasi:* Twitter\n➤ *Deskripsi:* ${desk}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                await nao.sendFileFromUrl(from, urlVideo, `twit.mp3`, ttwitter, id).catch(() => nao.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                nao.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'maps':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'maps [optional]*, Contoh : *'+prefix+'maps Jakarta*')
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const mapz = await slicedArgs.join(' ')
            console.log(mapz)
            try {
            const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
            const { gambar } = mapz2.data
            const pictk = await bent("buffer")(gambar)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            nao.sendImage(from, base64, 'maps.jpg', `*Hasil Maps : ${mapz}*`)
            } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             nao.sendText(ownerNumber, 'Error Maps : '+ err)
           }
          break
        case prefix+'joox':
            //if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM')
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)

            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return nao.reply(from, `Kirim perintah *${prefix}joox [ Optional ]*\nContoh : *${prefix}joox Alan Walker*`, id)
            try {
                const musiq = body.slice(6)
                const nyeh = await axios.get(`https://api.vhtear.com/music?query=${musiq}&apikey=${vhtearkey}`)
                const nhyehnyeh = nyeh.data.result
                const nheynyeh = nhyehnyeh[Math.floor(0)]
                let tjoox = `*「 JOOX DOWNLOADER 」*\n\n➤ *Penyanyi:* ${nheynyeh.penyanyi}\n➤ *Judul:* ${nheynyeh.judul}\n➤ *Album:* ${nheynyeh.album}\n➤ *Ext:* ${nheynyeh.ext}\n➤ *Size:* ${nheynyeh.filesize}\n➤ *Durasi:* ${nheynyeh.duration}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                nao.sendFileFromUrl(from, nheynyeh.linkImg, '', tjoox)
                nao.sendFileFromUrl(from, nheynyeh.linkMp3, `${nheynyeh.judul}.${nheynyeh.ext}`, '', id).catch(() => nao.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                nao.sendText(ownerNumber, 'Error Joox : '+ err)
            }
            break
        case prefix+'checkip':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'checkip [ipaddress]*\nContoh : *'+prefix+'checkip 182.0.144.145*', id)
            nao.reply(from, mess.wait, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const cekip = await slicedArgs.join(' ')
            console.log(cekip)
            try {
            const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
            const { city, continent_name, country_name, ip, latitude, location, longitude, region_name } = cekip2.data
            const cekip3 = `*IP Ditemukan!*

➤ *Kota:* ${city}
➤ *Benua:* ${continent_name}
➤ *Negara:* ${country_name}
➤ *Ip Address:* ${ip}
➤ *Garis Lintang:* ${latitude}
➤ *Kode Telepon:* +${location.calling_code}
➤ *Ibu Kota:* ${location.capital}
➤ *Bahasa:* ${location.languages[0].name}
➤ *Garis Bujur:* ${longitude}
➤ *Wilayah:* ${region_name}`
            nao.sendFileFromUrl(from, location.country_flag, '', cekip3)
            } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, IP tidak ditemukan')
             nao.sendText(ownerNumber, 'Error Check IP : '+ err)
           }
          break
        case prefix+'nhentai':
            //if(!isOwner) return nao.reply(from, 'Maintenance')
            //if (isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan di private chat!', id)
            if (!isPrem) return nao.reply(from, 'Perintah ini bersifat PREMIUM', id)
            if (args.length === 1) return nao.reply(from, 'Format salah/nSilahkan masukkan Kode Nuklir\n\nContoh: _'+prefix+'nhentai 325735_', id)
            await nao.reply(from, mess.wait+'\nSekitar 20 Detik', id)
            try {
                if (fs.existsSync(`./lib/cache/doujin/${args[1]}.pdf`)) await fs.unlinkSync(`./lib/cache/doujin/${args[1]}.pdf`)
                const hentongan = await axios.get(`https://api.vhtear.com/nhentaipdfdownload?query=${args[1]}&apikey=${vhtearkey}`)
                const filedoujin = fs.createWriteStream(`./lib/cache/doujin/${args[1]}.pdf`);
                https.get(hentongan.data.result.pdf_file, function(response) {
                    response.pipe(filedoujin);
                })
                await sleep(20000)
                nao.sendFile(from, `./lib/cache/doujin/${args[1]}.pdf`, `${args[1]}.pdf`, '', id)
                //await fs.writeFile(`./lib/cache/doujin/${args[1]}.pdf`, doujinhasil)
                //await fs.readFileSync(`./lib/cache/doujin/${args[1]}.pdf`)
                console.log('Success sending Nhentai Doujin!')
                fs.unlinkSync(`./lib/cache/doujin/${args[1]}.pdf`)
            } catch (err) {
                console.error(err.message)
                await nao.reply(from, `ERROR!: ${err}`, id)
                nao.sendText(ownerNumber, 'Nhentai Error : ' + err)
            }
            break
        case prefix+'brainly':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return nao.reply(from, 'Kirim perintah *'+prefix+'brainly [optional]*\nContoh *'+prefix+'brainly biologi*', id)
            try {
            console.log(body.slice(9))
            const resp = await axios.get(`https://api.vhtear.com/branly?query=${body.slice(9)}&apikey=${vhtearkey}`)
            nao.reply(from, `*Pertanyaan Ditemukan!*\n➤ *Jawaban:* ${resp.data.result.data}`, id)
            } catch (err) {
             console.error(err.message)
             await nao.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Pertanyaan tidak ditemukan')
             nao.sendText(ownerNumber, 'Brainly Error : ' + err)
           }
           break
        case prefix+'math':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return nao.reply(from, '[❗] Kirim perintah *'+prefix+'math [ Angka ]*\nContoh : '+prefix+'math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
            const mtk = body.slice(6)
            if (mtk.includes('÷')) {
                var mtkFilter = mtk.replace(/÷/gi, '/')
            }
            if (mtk.includes('x')) {
                var mtkFilter = mtk.replace(/x/gi, '*')
            }
            if (mtk.includes('×')) {
                var mtkFilter = mtk.replace(/×/gi, '*')
            }
            if (mtk.includes('.')) {
                var mtkFilter = mtk.replace(/./gi, '*')
            }
            if (typeof Math_js.evaluate(mtkFilter) !== "number") {
            nao.reply(from, `"${mtkFilter}", bukan angka!\n[❗] Kirim perintah *${prefix}math [ Angka ]*\nContoh : ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
        } else {
            nao.reply(from, `*「 MATH 」*\n\n*Kalkulator*\n${mtkFilter} = ${Math_js.evaluate(mtkFilter)}`, id)
        }
        break
        case prefix+'sauce':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                nao.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                    if (resolt.docs && resolt.docs.length <= 0) {
                        nao.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                    }
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                        teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += '╭───────────•◈•───────────╮\n\n'
                    teks += `⠀⠀⠀⠀ 🏮 *Japanese:* ${title}\n            🐉 *Romaji:* ${title_romaji}\n            🎬 *English:* ${title_english}\n`
                    teks += `⠀⠀⠀⠀🔥 *Ecchi:* ${is_adult}\n`
                    teks += `⠀⠀⠀⠀🍃 *Episodes:* ${episode.toString()}\n`
                    teks += `⠀⠀      🌿 *Kesamaan:* ${(similarity * 100).toFixed(1)}%\n`
                    teks += '\n╰───────────•◈•───────────╯'
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    nao.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        nao.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    nao.reply(from, 'Error !', id)
                })
            } else {
                nao.sendImage(from, './media/img/contoh.jpeg', 'Tutor.jpeg', 'nih contoh!', id)
            }
            break
        case prefix+'textmaker':
                if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
                await limitAdd(serial)
                arg = body.trim().split('|')
                nao.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                if ((isMedia || isQuotedImage) && arg.length >= 2) {
                const top = arg[0]
                const bott = arg[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await custom(getUrl, top, bott)
                await nao.sendFile(from, ImageBase64, 'image.png','Kore, Matte Gomennasai...')
                } else {
                await nao.reply(from, 'Wrong Format!\nContoh: *!textmaker Nao|Tomori', id)
                }
                break
        case prefix+'quotemaker':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            arg = body.trim().split('|')
            if (arg.length >= 4) {
                nao.reply(from, mess.wait, id)
                const quotes = arg[0]
                const author = arg[1]
                const theme = arg[2]
                await quotemaker(quotes, author, theme).then(amsu => {
                    nao.sendFile(from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       nao.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                nao.reply(from, 'Usage: \n'+prefix+'quotemaker teks|watermark|theme\n\nEx :\n'+prefix+'quotemaker ini contoh|bicit|random', id)
            }
            break
        case prefix+'listchannel':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            nao.reply(from, listChannel, id)
            break
        case prefix+'nulis':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'nulis [teks]*, contoh *'+prefix+'nulis Nao Kawai*', id)
            const ngettik = body.slice(7)
            const ngetikk = `https://api.vhtear.com/write?text=${ngettik}&apikey=${vhtearkey}`
            nao.sendFileFromUrl(from, ngetikk, 'nulis.jpg', '', id)
            break
        case prefix+'inu':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            nao.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Inu')
            break
        case prefix+'qrcode':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if(!args.lenght >= 2) return
            let qrcodes = body.slice(8)
            await nao.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', 'Process sukses!')
            break
        case prefix+'ptl':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
            let pep = pptl[Math.floor(Math.random() * pptl.length)]
            nao.sendFileFromUrl(from, pep, 'pptl.jpg', '', message.id)
            break
        case prefix+'neko':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            nao.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
        case prefix+'pokemon':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            q7 = Math.floor(Math.random() * 890) + 1;
            nao.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            break
        case prefix+'quote':
        case prefix+'quotes':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const quotez2 = await axios.get('https://api.vhtear.com/quoteid&apikey='+vhtearkey)
            nao.reply(from, `➤ *Quotes* : ${quotez2.data.result.kata}`, id)
            break
        case prefix+'quotes2':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const quotez3 = await axios.get('https://arugaz.herokuapp.com/api/randomquotes')
            nao.reply(from, `➤ *Quotes* : ${quotez3.data.quotes}\n➤ *Author* : ${quotez3.data.author}`, id)
            break
        case prefix+'lirik':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length == 1) return nao.reply(from, 'Kirim perintah *'+prefix+'lirik [optional]*, contoh *'+prefix+'lirik in the rain*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            nao.reply(from, lirik, id)
            break
        case prefix+'chord':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return nao.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'chord [query]*, contoh *'+prefix+'chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await axios.get(`https://api.vhtear.com/chordguitar?query=${query__}&apikey=${vhtearkey}`)
            nao.reply(from, chord.data.result, id)
            break
        case prefix+'listdaerah':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const listDaerah = await axios.get('https://tobz-api.herokuapp.com/api/daerah')
            nao.reply(from, listDaerah.data.result, id)
            break
        // ADMIN & OWNER
        case prefix+'bc': // KASIH CREDIT DONG KALO COPAS
            if (!isOwner) return nao.reply(from, `Perintah ini hanya untuk Dwi!`, id)
                bctxt = body.slice(4)
                txtbc = `*「 BROADCAST 」*\n\n${bctxt}`
                const semuagrup = await nao.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await nao.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) nao.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    nao.reply(from, 'Broadcast sukses!', id)
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await nao.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) nao.sendText(grupnya, txtbc)
                    }
                        nao.reply(from, 'Broadcast Success!', id)
                }
                break
        case prefix+'adminlist':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➤ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await nao.sendTextWithMentions(from, mimin)
            break
        case prefix+'ownergroup':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await nao.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case prefix+'otagall': // FOR OWNER & Admin Bot
        case prefix+'omentionall':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya untuk Dwi!', id)
            const groupMek = await nao.getGroupMembers(groupId)
            let heho = '╭┈─「 Mention All 」\n'
            for (let i = 0; i < groupMek.length; i++) {
                heho += '╰─➤'
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += '╰┈────────────'
            await sleep(2000)
            await nao.sendTextWithMentions(from, heho)
            break
        case prefix+'tagall': // FOR GROUP ADMINS
        case prefix+'mentionall':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await nao.getGroupMembers(groupId)
            let hehe = '╭┈─「 Mention All 」\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╰─➤'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '╰┈────────────'
            await sleep(2000)
            await nao.sendTextWithMentions(from, hehe)
            break
        case prefix+'sider':
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const countMdataCheck = JSON.parse(fs.readFileSync(`./lib/database/group/antisider/database/${groupId}.json`))
            const siderCheck = countMdataCheck
            siderCheck.sort((a, b) => (a.msg < b.msg) ? 1 : -1)
            let emmSider = '!![ *SIDER* ]!!\nReset Every 1 Week\n\n'
            let nomSider = 0
            try {
                for (let i = 0; i < chat.groupMetadata.participants.length; i++) {
                    nomSider++
                    emmSider += `${nomSider}. @${siderCheck[i].id.replace('@c.us', '')}\n➤ *Jum Msg:* ${siderCheck[i].msg}\n➤ Last Msg: *${siderCheck[i].last}*\n\n`
                }
                await nao.sendTextWithMentions(from, emmSider)
            } catch (err) {
                console.error(err)
                //await nao.reply(from, 'Perlu setidaknya *10* user di Group!', id)
            }
            break
        case prefix+'resetsider':
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            _sider.splice(getMCountPosition(groupId, _sider), 1)
            fs.writeFileSync('./lib/database/group/antisider/sider.json', JSON.stringify(_sider))
            fs.unlinkSync(`./lib/database/group/antisider/database/${groupId}.json`)
            nao.reply(from, 'Succes!\n\nReset Anti Sider Function', id)
            break
        case prefix+'setsider': //BY DWIR
            if (!isGroupMsg) return nao.reply(from, 'Command ini hanya bisa digunakan di dalam group!', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id) 
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'setsider <nomer>', id)
            //if (args[1].includes('A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, !, @, #, $, %, ^, &, *, (, ), -, _, +, =, [, ], {, }, |, ;, :, <, >, /, ?, `, ~')) return nao.reply(from, 'Mohon masukkan angka nya saja', id)
            //if (!args[1].includes('1, 2, 3, 4, 5, 6, 7, 8, 9, 0')) return nao.reply(from, 'Mohon masukkan angkanya', id)
            await replaceSiderSet(groupId, args[1], _sider)
            await nao.reply(from, 'Succes!', id)
            nao.sendImage(from, './media/img/warning.png', 'warning.png', '*!!WARNING!!*\n\nSetiap 1 Minggu sekali akan terjadi kick massal\nJika ingin menonaktifkan, Ketik *'+prefix+'resetsider*')
            break
        case prefix+'setrules':
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'setrules rules groupnya', id)
                const rulesg = body.slice(10)
                if (getrules(groupId) === undefined) await addrules(groupId)
                replaceRules(groupId, rulesg)
                nao.reply(from, 'Success set new rules!\nBiar work\nAktifin welcomenya, *'+prefix+'welcome enable*', id)
            break
        case prefix+'setprefix':
            if (!isGroupMsg) return await nao.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (args.length === 1) return nao.reply(from, 'Kirim perintah *'+prefix+'setprefix prefixnya', id)
                const prefset = args[1]
                if(prefset.length > 5) return nao.reply(from, 'Prefix tidak boleh melebihi 4 huruf', id)
                if (getPref(groupId) === undefined) await setPref(groupId)
                replacePref(groupId, prefset)
                nao.reply(from, 'Success set new Prefix!\n*Prefix saat ini: '+prefset+'*', id)
            break
        case prefix+'okickall':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya untuk Dwi!', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMeq = await nao.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMeq[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await nao.removeParticipant(groupId, allMeq[i].id)
                }
            }
            nao.reply(from, 'Succes kick all member', id)
            break
        case prefix+'kickall':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMek = await nao.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await nao.removeParticipant(groupId, allMek[i].id)
                }
            }
            nao.reply(from, 'Success kick all member', id)
            break
        case prefix+'leaveall':
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya untuk Dwi!', id)
            const allChats = await nao.getAllChatIds()
            const allGroups = await nao.getAllGroups()
            for (let gclist of allGroups) {
                await nao.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await nao.leaveGroup(gclist.contact.id)
            }
            nao.reply(from, 'Succes leave all group!', id)
            break
        case prefix+'clearall':
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya untuk Dwi!', id)
            const allChatz = await nao.getAllChats()
            for (let dchat of allChatz) {
                await nao.deleteChat(dchat.id)
            }
            nao.reply(from, 'Succes clear all chat!', id)
            break
        case prefix+'oadd':
            const orang = args[1]
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return nao.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *'+prefix+'oadd* 628xxxxx', id)
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya untuk Admin Bot', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await nao.addParticipant(from,`${orang}@c.us`)
            } catch {
                nao.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'add':
            const orgh = body.slice(5)
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return nao.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *'+prefix+'add* 628xxxxx', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await nao.addParticipant(from,`${orgh}@c.us`)
            } catch {
                nao.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'okick':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya untuk Dwi!', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *'+prefix+'okick* @tagmember', id)
            await nao.sendText(from, `Perintah Owner diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return nao.reply(from, mess.error.Sp, id)
                await nao.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'kick':
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *'+prefix+'kick* @tagmember', id)
            await nao.sendText(from, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, groupAdmins).includes(mentionedJidList[i])) return nao.reply(from, mess.error.Sp, id)
                await nao.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'oout':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya untuk Admin Bot', id)
            await nao.sendText(from,'Sayonara').then(() => nao.leaveGroup(groupId))
            break
        case prefix+'out':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            await nao.sendText(from,'Sayonara').then(() => nao.leaveGroup(groupId))
            break
        case prefix+'opromote':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya untuk Admin Bot', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *'+prefix+'opromote* @tagmember', id)
            if (mentionedJidList.length >= 2) return nao.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return nao.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await nao.promoteParticipant(groupId, mentionedJidList[0])
            await nao.sendTextWithMentions(from, `Perintah Admin diterima, menambahkan @${mentionedJidList[0]} sebagai admin group.`)
            break
        case prefix+'promote':
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *'+prefix+'promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return nao.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return nao.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await nao.promoteParticipant(groupId, mentionedJidList[0])
            await nao.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case prefix+'adminme':
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya untuk Dwi!', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (groupAdmins.includes(sender.id)) return nao.reply(from, 'Maaf, Owner sudah menjadi admin.', id)
            await nao.promoteParticipant(groupId, sender.id)
            await nao.reply(from, `Perintah diterima, menambahkan sebagai admin.`, id)
            break
        case prefix+'demoteme':
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya untuk Dwi!', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (!groupAdmins.includes(sender.id)) return nao.reply(from, 'Maaf, Owner Tidak menjadi admin.', id)
            await nao.demoteParticipant(groupId, sender.id)
            await nao.reply(from, `Perintah diterima, menghapus sebagai admin.`, id)
            break
        case prefix+'odemote':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya untuk Admin Bot', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *'+prefix+'odemote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return nao.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return nao.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await nao.demoteParticipant(groupId, mentionedJidList[0])
            await nao.sendTextWithMentions(from, `Perintah Admin diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case prefix+'demote':
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *'+prefix+'demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return nao.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return nao.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await nao.demoteParticipant(groupId, mentionedJidList[0])
            await nao.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case prefix+'getkey':
            const isjoinkey = sender.id.includes(getuserKeyId(sender.id))
            if (isGroupMsg) return nao.reply(from, 'Hanya dapat digunakan di private chat', id)
            if (isjoinkey) return nao.reply(from, 'Kamu sudah mendapat kunci, Tunggu 12 hari untuk mendapatkan kunci lagi', id)
            const waktukey = Math.floor(12)
            const waktukeynya = waktukey+'d' 
            const codejoin = GenerateSerialNumber("0000000")
            await adduserKeyTime(sender.id, waktukeynya)
            _joincode.push(codejoin)
            fs.writeFileSync('./lib/database/group/joincode.json', JSON.stringify(_joincode))
            nao.reply(from, `Ini kunci groupnya: ${codejoin}\n\n*Cara penggunaan: !join ${codejoin} <link group>*\n_Note: Abaikan tanda < dan >_`, id)
            break
        case prefix+'join':
            if (args.length < 3) return nao.reply(from, 'Format salah!\nCara penggunaan: *'+prefix+'join <kunci> <link group>*\n_Note: Abaikan tanda < dan >_\n\n*_Untuk mendapatkan kunci '+prefix+'getkey_*', id)
            //if (!isOwner) return nao.reply(from, 'Perintah ini hanya untuk Dwi!\n\nJika ingin mengundang bot join group '+prefix+'naogroup\nDan minta masukin botnya', id)
            const link = args[2]
            const tGr = await nao.getAllGroups()
            if(tGr.length > 10) return nao.reply(from, 'Maaf, Batas group yang dapat ditampung sudah penuh', id)
            const minMem = 30
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await nao.inviteInfo(link)
            if (!isLink) return nao.reply(from, 'Format salah!\nCara penggunaan: *'+prefix+'join <kunci> <link group>*\n_Note: Abaikan tanda < dan >_\n\n*_Untuk mendapatkan kunci'+prefix+'getkey_*', id)
            //if (tGr.length > 256) return nao.reply(from, 'Maaf jumlah member group sudah maksimal!', id)
            if (check.size < minMem) return nao.reply(from, 'Member group tidak melebihi 30, bot tidak bisa masuk', id)
            if (check.status === 200) {
                //if(isOwner) {
                    //await nao.joinGroupViaLink(link).then(() => nao.reply(from, 'Bot akan segera masuk!', id))
                //} else {
                    if (!_joincode.includes(args[1])) return nao.reply(from, 'Kunci group tidak valid\n\nKetik: _'+prefix+'getkey_\nUntuk mendapatkan kunci group', id)
                    await nao.joinGroupViaLink(link).then(() => nao.reply(from, 'Bot akan segera masuk!', id))
                    const waktujoin = Math.floor(7)
                    const expiredtime = waktujoin+'d'
                    await addJoinTime(check.id, expiredtime, args[1])
                    _joincode.splice(args[1], 1)
                    fs.writeFileSync('./lib/database/group/joincode.json', JSON.stringify(_joincode))
                //}
            } else {
                nao.reply(from, 'Link group tidak valid!', id)
            }
            break
        case prefix+'odelete':
        case prefix+'odel':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya untuk Admin Bot', id)
            if (!quotedMsg) return nao.reply(from, 'Salah!!, kirim perintah *'+prefix+'odelete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return nao.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            nao.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'delete':
        case prefix+'del':
            if (!isGroupMsg) return nao.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return nao.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return nao.reply(from, 'Salah!!, kirim perintah *'+prefix+'delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return nao.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            nao.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'read':
            if (!isGroupMsg) return nao.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)                
            if (!quotedMsg) return nao.reply(from, `Tolong Reply Pesan Saya`, id)
            if (!quotedMsgObj.fromMe) return nao.reply(from, `Tolong Reply Pesan Saya`, id)
            try {
                const reader = await nao.getMessageReaders(quotedMsgObj.id)
                let list = ''
                for (let pembaca of reader) {
                list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                nao.sendTextWithMentions(from, `Hayolo, yang ngeread doank...\n${list}`)
            } catch(err) {
                console.log(err)
                nao.reply(from, `Maaf, Belum Ada Yang Membaca Pesannya`, id)    
            }
            break
        case prefix+'linkgroup':
            if (!isGroupMsg) return nao.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return nao.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return nao.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagcnye = chat.formattedTitle
            var gclink = await nao.getGroupInviteLink(groupId)
            var linkgc  = `Link group : *${namagcnye}*\n\n ${gclink}`
            nao.reply(from, linkgc, id)
            break
        case prefix+'resetlinkgroup':
            if (!isGroupMsg) return nao.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return nao.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return nao.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isGroupMsg) {
                await nao.revokeGroupInviteLink(groupId);
                nao.sendTextWithMentions(from, `Link group telah direset oleh admin @${sender.id.replace('@c.us', '')}`)
            }
            break
        case prefix+'getses':
            //if (!isOwner) return nao.reply(from, 'Perintah ini hanya untuk Dwi!', id)            
            const sesPic = await nao.getSnapshot()
            nao.sendFile(from, sesPic, 'session.png', '', id)
            break
        case prefix+'botadmin':
            let admn = `This is list of Bot Admin\nTotal : ${adminNumber.length}\n`
            for (let i of adminNumber) {
                admn += `➤ @${i.replace(/@c.us/g,'')}\n`
            }
            await nao.sendTextWithMentions(from, admn, id)
            break
        case prefix+'limit':
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/user/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return nao.reply(from, `Limit request anda sudah habis\n\n_Note :_ Untuk membeli limit ketik *_${prefix}shop_*`, id)
                    nao.reply(from, `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note :_ Untuk membeli limit ketik *_${prefix}shop_*`, id)
                    found = true
                }
            }
            //console.log(limit)
            //console.log(limidat)
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./lib/database/user/limit.json',JSON.stringify(limit, 1));
                nao.reply(from, `Sisa limit request anda tersisa : *${limitCount}*\n\n_Note :_ Untuk membeli limit ketik *_${prefix}shop_*`, id)
            }
            break
        case prefix+'givelimit':
            if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *'+prefix+'givelimit* @tagmember jumlah', id)
            if (mentionedJidList.length !== 1) return nao.reply(from, 'Maaf, hanya bisa memberikan limit ke 1 user', id)
            if (mentionedJidList[0] === '12348880375@c.us') return nao.reply(from, 'Kamu tidak bisa memberikan limit ke Bot', id)
            if(args[2].includes('-')) return nao.reply(from, 'Tidak boleh ada tanda -', id)
            if(args[2] == '1') return nao.reply(from, 'Minimal 2', id)
            const amountLimit = Math.floor(args[2])
            const senderLmit = limitCount-getLimit(sender.id)
            if(senderLmit > amountLimit) {
                const kanggip = mentionedJidList[0]
                await limitMin(sender.id, amountLimit)
                await limitGive(kanggip, amountLimit)
                nao.sendTextWithMentions(from, `Succes give limit to @${kanggip.replace('@c.us','')}\nLimit: -${amountLimit}`)
            } else {
                nao.reply(from, '*GAGAL!*\nLimit kamu tidak mencukupi\nLimit kamu: '+senderLmit+'\nLimit yang dibagikan: '+amountLimit, id)
            }
            break
        /*case prefix+'test775':
            if(!isOwner) return
            if (getLimit(sender.id).includes('-')) {
                var senderLimitt = getLimit(sender.id).replace('-', '')
            } else {
                var senderLimitt = getLimit(sender.id)
            }
            nao.reply(from, `${getLimit(sender.id)}`, id)
            break*/
        case prefix+'eval':
        case prefix+'ev':
            if (!isOwner) return await nao.reply(from, 'Owner Only', id)
            if (!q) return await nao.reply(from, 'Format salah', id)
            try {
                let evaled = await eval(q)
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                await nao.sendText(from, evaled)
            } catch (err) {
                console.error(err)
                await nao.reply(from, `Error!\n${err}`, id)
            }
            break
        case prefix+'restart':
            if (!isOwner) return await nao.reply(from, `You don't have enough level access`, id)
            //nao.reply(from, 'ERROR!', id)
            await nao.sendText(from, '*[WARN]* Restarting ...')
            /*const namagruprestart = 'Sayu Bot [Status Restart]'
            const groupofficialrestart = '6281225297663-1611500565@g.us'
            const groupofficialrestartid = '6281225297663-1611500565@g.us'
            let halamanofficialrestart = global.page ? global.page : await nao.getPage()
            await halamanofficialrestart.evaluate((groupofficialrestart, subject) =>
            Store.WapQuery.changeSubject(groupofficialrestart, subject),groupofficialrestartid, `${namagruprestart}`)*/
            const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
                break
        /*case prefix+'restart': // WORK IF YOU RUN USING PM2
            if(isOwner){
                nao.sendText(from, '*[WARN]* Restarting ...')
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/group/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/bot/msgLimit.json', JSON.stringify(obj));
                //fs.writeFileSync('./lib/database/bot/banned.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/group/Simsimi.json', JSON.stringify(obj));
                //fs.writeFileSync('./lib/database/group/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            } else {
                nao.sendText(from, `You don't have enough level access`)
            }
            break*/
        case prefix+'shutdown':
            if(!isOwner) return nao.reply(from, `Perintah ini hanya bisa di gunakan oleh Dwi!`, id)
            /*const namagrupshutdown = 'Sayu Bot [Status Offline]'
            const groupofficial = '6281225297663-1611500565@g.us'
            const groupofficialid = '6281225297663-1611500565@g.us'
            let halamanofficial = global.page ? global.page : await nao.getPage()
            await halamanofficial.evaluate((groupofficial, subject) =>
            Store.WapQuery.changeSubject(groupofficial, subject),groupofficialid, `${namagrupshutdown}`)*/
            await nao.sendText(from, 'Sayonara')
            nao.kill()
            break
        case prefix+'addadmin':
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Dwi!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                adminNumber.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/bot/admin.json', JSON.stringify(adminNumber))
                nao.reply(from, 'Success Menambahkan Admin Bot!', id)
                }
            break
        case prefix+'addprem':
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Dwi!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                premium.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/user/premium.json', JSON.stringify(premium))
                await addNameTag_tag(mentionedJidList[i], '👑Premium👑')
                nao.reply(from, 'Success Menambahkan User Premium!', id)
                }
            break
        case prefix+'addprem_group':
            if(!isOwner) return nao.reply(from, 'Akses ditolak!!', id)
            const groupMekPremium = await nao.getGroupMembers(groupId)
            for (let i = 0; i < groupMekPremium.length; i++) {
                const pisahminus = groupMekPremium[i].id.trim().split('-')
                premium.push(pisahminus[0])
                fs.writeFileSync('./lib/database/user/premium.json', JSON.stringify(premium))
            }
            await sleep(2000)
            nao.reply(from, 'Succes!', id)
            break
        case prefix+'delprem_group':
            if(!isOwner) return nao.reply(from, 'Akses ditolak!!', id)
            const groupMekPremiumDelete = await nao.getGroupMembers(groupId)
            for (let i = 0; i < groupMekPremiumDelete.length; i++) {
                const pisahminuss = groupMekPremiumDelete[i].id.trim().split('-')
                premium.splice(pisahminuss[0], 1)
                fs.writeFileSync('./lib/database/user/premium.json', JSON.stringify(premium))
            }
            await sleep(2000)
            nao.reply(from, 'Succes!', id)
            break
        case prefix+'deladmin':
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Dwi!', id)
                let inq = adminNumber.indexOf(mentionedJidList[0])
                adminNumber.splice(inq, 1)
                fs.writeFileSync('./lib/database/bot/admin.json', JSON.stringify(adminNumber))
                nao.reply(from, 'Success Menghapus Admin Bot!', id)
            break
        case prefix+'delprem':
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Dwi!', id)
                let upre = premium.indexOf(mentionedJidList[0])
                premium.splice(upre, 1)
                fs.writeFileSync('./lib/database/user/premium.json', JSON.stringify(premium))
                nao.reply(from, 'Success Menghapus User Premium!', id)
            break
        case prefix+'delpremqo':
            if (!isOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Dwi!', id)
            var qmidqp = quotedMsgObj.sender.id
                premium.splice(qmidqp, 1)
                fs.writeFileSync('./lib/database/user/premium.json', JSON.stringify(premium))
                nao.reply(from, 'Success Menghapus User Premium!', id)
            break
        case prefix+'block':
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Dwi!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (mentionedJidList[0]) {
                    var block = mentionedJidList[i]
                } else {
                    var block = quotedMsgObj.sender.id
                }
                await nao.contactBlock(block).then((a)=>{
                    console.log(a)
                    nao.reply(from, `Success block ${args[1]}!`, id)
                })
            }
            break
        case prefix+'unblock':
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh Dwi!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await nao.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    nao.reply(from, `Success unblok ${args[1]}!`, id)
                })
            } 
            break
        case prefix+'setname':
            if (!isOwner) return nao.reply(from, `Perintah ini hanya bisa di gunakan oleh Dwi!`, id)
                const setnem = body.slice(9)
                await nao.setMyName(setnem)
                nao.sendTextWithMentions(from, `Makasih Nama Barunya @${sender.id.replace('@c.us','')}`)
            break
        case prefix+'setstatus':
            if (!isOwner) return nao.reply(from, `Perintah ini hanya bisa di gunakan oleh Dwi!`, id)
                const setstat = body.slice(11)
                await nao.setMyStatus(setstat)
                nao.sendTextWithMentions(from, `Makasih Status Barunya @${sender.id.replace('@c.us','')}`)
            break
        case prefix+'setprofilepic':
            if (!isOwner) return nao.reply(from, `Perintah ini hanya bisa di gunakan oleh Dwi!`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await nao.setProfilePic(imageBase64)
                //nao.sendTextWithMentions(`Makasih @${sender.id.replace('@c.us','')} Foto Profilenya`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await nao.setProfilePic(imageBase64)
                //nao.sendTextWithMentions(from, `Makasih @${sender.id.replace('@c.us','')} Foto Profilenya`)
            } else {
                nao.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan !setprofilepic`, id)
            }
            break
        case prefix+'getpic':
            if (!isGroupMsg) return nao.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            const texnugm = body.slice(8)
            const getnomber =  await nao.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await nao.getProfilePicFromServer(useriq)

                    nao.sendFileFromUrl(from, jnck, `awok.jpg`)
                } catch {
                    nao.reply(from, `Tidak Ada Foto Profile!`, id)
                }
            break
        case prefix+'darkmode':
            await nao.darkMode(true)
            nao.reply(from, 'Succes, mengubah tema menjadi dark mode', id)
            break
        case prefix+'ban':
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin Bot!', id)
            if(args[1] == 'temp' || args[1] == 'time') {
                const banTimeCount = args[2]
                if (mentionedJidList[0]) {
                    var mengbanTemp = mentionedJidList[0]
                    var mengbanNama = mentionedJidList[0]
                } else {
                    var mengbanTemp = quotedMsgObj.sender.id
                    var mengbanNama = quotedMsgObj.sender.pushname
                }
                await setTempBan(mengbanTemp, banTimeCount)
                banned.push(mengbanTemp)
                fs.writeFileSync('./lib/database/bot/banned.json', JSON.stringify(banned))
                const parsedBanTime = banTimeCount
                nao.reply(from, `Succes Ban\n\nNama: ${mengbanNama}\nDurasi: ${parsedBanTime}`, id)
            } else {
                for (let i = 0; i < mentionedJidList.length; i++) {
                    if ((adminNumber).includes(mentionedJidList[i])) return nao.reply(from,`Maaf ${pushname}, Kamu tidak bisa banned Admin Bot!`, id)
                    if (mentionedJidList[0]) {
                        var mengban = mentionedJidList[i]
                    } else {
                        var mengban = quotedMsgObj.sender.id
                    }
                    banned.push(mengban)
                    fs.writeFileSync('./lib/database/bot/banned.json', JSON.stringify(banned))
                    nao.reply(from, `Succes ban ${mengban}`,id)
                }
            }
            break
        case prefix+'unban':
            if (!isAdmin) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin Bot!', id)
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./lib/database/bot/banned.json', JSON.stringify(banned))
                nao.reply(from, 'Unbanned User!', id)
            break
        case prefix+'listgroup':
                nao.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*Ini daftar group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n━━━━━━━━━━━━━━━━━\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                nao.reply(from, gc, id)
            })
            break
        case prefix+'listbanned':
            let bened = `Ini orang yang kena banned\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `➤ ${i.replace(/@c.us/g,'')}\n`
            }
            await nao.reply(from, bened, id)
            break
        case prefix+'listblock':
            let hih = `Ini orang yang kena block\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➤ @${i.replace(/@c.us/g,'')}\n`
            }
            await nao.sendTextWithMentions(from, hih, id)
            break
        case prefix+'ping':
            await nao.sendText(from, `Pong!!!!\nSpeed: ${processTime(t, moment())} _Second_\nLebih lengkapnya di ${prefix}botstat`)
            break
        case prefix+'botstat':
            const format = sizeFormatter({
                std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
                decimalPlaces: 2,
                keepTrailingZeroes: false,
                render: (literal, symbol) => `${literal} ${symbol}B`,
            })
            const loadedMsg = await nao.getAmountOfLoadedMessages()
            const chatIds = await nao.getAllChatIds()
            const groups = await nao.getAllGroups()
            const groupsIn = groups.filter(x => x.groupMetadata.participants.map(x => [botNumber, '6282351884519@c.us'].includes(x.id._serialized)).includes(true))
            const me = await nao.getMe()
            const battery = await nao.getBatteryLevel()
            const isCharging = await nao.getIsPlugged()
            const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
                cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, { length }) => {
                last.total += cpu.total
                last.speed += cpu.speed / length
                last.times.user += cpu.times.user
                last.times.nice += cpu.times.nice
                last.times.sys += cpu.times.sys
                last.times.idle += cpu.times.idle
                last.times.irq += cpu.times.irq
                return last
            }, {
                speed: 0,
                total: 0,
                times: {
                    user: 0,
                    nice: 0,
                    sys: 0,
                    idle: 0,
                    irq: 0
                }
            })
            const speed = moment() / 1000 - t
            nao.sendText(from, `
Merespon dalam ${speed} detik

💬 Status :
- *${loadedMsg}* Loaded Messages
- *${groups.length}* Group Chats
- *${groupsIn.length}* Groups Joined
- *${groups.length - groupsIn.length}* Groups Left
- *${chatIds.length - groups.length}* Personal Chats
- *${chatIds.length - groups.length - groupsIn.length}* Personal Chats Active
- *${chatIds.length}* Total Chats
- *${chatIds.length - groupsIn.length}* Total Chats Active

📱 *Phone Info* :
${monospace(`
🔋 Battery : ${battery}% ${isCharging ? '🔌 Charging...' : '⚡ Discharging'}
${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}
`.trim())}

💻 *Server Info* :
RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}

_NodeJS Memory Usage_
${monospace(Object.keys(used).map(key => `${key} : ${format(used[key])}`).join('\n'))}

_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}
`.trim())
            break
        case prefix+'setgroupname':
            if (!isGroupMsg) return nao.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return nao.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return nao.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagrup = body.slice(14)
            let sebelum = chat.groupMetadata.formattedName
            let halaman = global.page ? global.page : await nao.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            nao.sendTextWithMentions(from, `Nama group telah diubah oleh admin @${sender.id.replace('@c.us','')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
            break
        case prefix+'setgroupicon':
            if (!isGroupMsg) return nao.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return nao.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return nao.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await nao.setGroupIcon(from, imageBase64)
                nao.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await nao.setGroupIcon(from, imageBase64)
                nao.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else {
                nao.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan ${prefix}setgroupicon`, id)
            }
            break
        case prefix+'bugreport':
            if (args.length === 1) return nao.reply(from, '[❗] Kirim perintah *'+prefix+'bugreport [teks]*\ncontoh : *'+prefix+'bugreport Permisi Owner, Ada bug pada command '+prefix+'otakudesu, Tolong diperbaiki*')
            const bug = body.slice(11)
            if(!bug) return
            if(isGroupMsg){
                nao.sendText('6281358181668@c.us', `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
                nao.reply(from, 'Masalah telah di laporkan ke Owner, laporan palsu/main2 tidak akan ditanggapi.' ,id)
            }else{
                nao.sendText('6281358181668@c.us', `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
                nao.reply(from, 'Masalah telah di laporkan ke Owner, laporan palsu/main2 tidak akan ditanggapi.', id)
            }
            break
        case prefix+'set_bot':
            if (!isOwner) return nao.reply(from, 'Anda Saha?', id)
            if (args.length === 1) return nao.reply(from, 'Ha apa??', id)
            if(args[1] == 'cmd' || args[1] == 'command' || args[1] == 'comand') {
                if(args.length === 2) return nao.reply(from, 'Format Salah\nContoh: Baca di script nao baris 6462 :V\n\nMamles nulis', id)
                if (args[2] == 'enable') {
                    if (args[3].includes('!')) {
                        var cmdenab = args[3].replace('!', '')
                    } else {
                        var cmdenab = args[3]
                    }
                    if(!_setBotCMD.includes(cmdenab)) return nao.reply(from, 'Command tersebut tidak dinonaktifkan atau Command tersebut tidak ada', id)
                    await _setBotCMD.splice(cmdenab, 1)
                    fs.writeFileSync('./lib/database/bot/setbot/cmd.json', JSON.stringify(_setBotCMD))
                    nao.reply(from, 'Succes', id)
                } else if (args[2] == 'disable'){
                    if (args[3].includes('!')) {
                        var cmdedis = args[3].replace('!', '')
                    } else {
                        var cmdedis = args[3]
                    }
                    if(_setBotCMD.includes(cmdedis)) return nao.reply(from, 'Command tersebut sudah dinonaktifkan sebelumnya', id)
                    await _setBotCMD.push(cmdedis)
                    fs.writeFileSync('./lib/database/bot/setbot/cmd.json', JSON.stringify(_setBotCMD))
                    nao.reply(from, 'Succes', id)
                }
            } else if(args[1] == 'hits') {
                if(args[2] == 'reset') {
                    const getHitsBefore = await getHitsCount('today', hitsCount)
                    const ResetHitsCount = (_dir) => {
                        let position = false
                        Object.keys(_dir).forEach((i) => {
                            if (_dir[i].id === 'today') {
                                position = i
                            }
                        })
                        if (position !== false) {
                            console.log('Reset Hits')
                            _dir[position].hits = 0
                            fs.writeFileSync('./lib/database/bot/hits.json', JSON.stringify(_dir))
                        }
                    }
                    ResetHitsCount(hitsCount)
                    nao.reply(from, `Succes\n\nBefore: ${getHitsBefore}\nAfter: ${numberWithCommas(getHitsCount('today', hitsCount))}`, id)    
                } else {
                    nao.reply(from, 'Baca di skrip nao baris 6612 :V\n\nMamles nulis')
                }
            } else {
                return nao.reply(from, 'Format Salah\nContoh: Baca di script nao baris 6458 :V\n\nMamles nulis', id)
            }
            break
        case prefix+'set_user':
            if (args.length === 1) return nao.reply(from, setuser(prefix), id)
            if(args[1] == 'menu') nao.reply(from, setuser(prefix), id)
            if(args[1] == 'notice') {
                if(args.length === 2) {
                    return nao.reply(from, 'Isi dengan benar!\n*Contoh: '+prefix+'set_user notice blabalabaklab')
                } else if(args.length >= 2) {
                    var remindnya = body.slice(17)
                }
                if(remindnya.length > 50) return nao.reply(from, 'Notice tidak boleh melebihi 50 kata', id)
                if (getRemind(sender.id) === undefined) {
                    await addRemind(sender.id, time, remindnya)
                } else {
                    await replaceRemindTime(sender.id, time)
                    replaceRemind(sender.id, remindnya)
                }
                nao.reply(from, 'Set user notice *Succes*', id)
            } else if(args[1] == 'nama') {
                if(args.length === 2) {
                    return nao.reply(from, 'Isi dengan benar!\n*Contoh: '+prefix+'set_user nama Dwi rizqi')
                } else if(args.length >= 2) {
                    var namanya = body.slice(15)
                }
                if(namanya.length > 30) return nao.reply(from, 'Nama tidak boleh melebihi 30 kata', id)
                if (getNama(sender.id) === undefined) {
                    await addNama(sender.id, namanya)
                } else {
                    replaceNama(sender.id, namanya)
                }
                nao.reply(from, 'Set user name *Succes*', id)
            } else if(args[1] == 'hidepp') {
                if (args[2] == 'enable') {
                    if (isHideppOn) return await nao.reply(from, '*「 HIDEPP 」*\nSudah diaktifkan', id)
                    _hidepp.push(sender.id)
                    fs.writeFileSync('./lib/database/user/hidepp.json', JSON.stringify(_hidepp))
                    await nao.reply(from, 'Fitur HidePp berhasil diaktifkan', id)
                } else if (args[2] == 'disable') {
                    _hidepp.splice(sender.id, 1)
                    fs.writeFileSync('./lib/database/user/hidepp.json', JSON.stringify(_hidepp))
                    await nao.reply(from, 'Fitur HidePp berhasil di nonaktifkan', id)
                } else {
                    await nao.reply(from, 'Pilih enable atau disable!', id)
                }
            } else if(args[1] == 'gender') {
                if(args[2] == 'cwk') return nao.reply(from, 'LAVVAK???', id)
                if(args.length === 2) {
                    return nao.reply(from, 'Isi dengan benar!\n*Contoh: '+prefix+'set_user gender cewe/cowo', id)
                } else if(args[2].match("laki2") || args[2].match("laki-laki") || args[2].match("cowo") || args[2].match("cwok") || args[2].match("cwo")) {
                    var gendernya = 'Laki-Laki'
                } else if(args[2].match("perempuan") || args[2].match("cewe") || args[2].match("cwek") || args[2].match("cw") || args[2].match("cwe")) {
                    var gendernya = 'Perempuan'
                } else {
                    return nao.reply(from, 'Yang bener!\n*List Keyword: laki2, laki-laki, cowo, cwok, cwo, perempuan, cewe, cwek, cw, cwe*', id)
                }
                if (getGen(sender.id) === undefined) {
                    await addGen(sender.id, gendernya)
                } else {
                    await replaceGen(sender.id, gendernya)
                }
                nao.reply(from, 'Set user Gender *Succes*', id)
            } else if(args[1] == 'ig') {
                if(args.length === 2) {
                    return nao.reply(from, 'Isi dengan benar!\n*Contoh: '+prefix+'set_user ig dwirizqi.h')
                }
                const cekig = await axios.get('https://api.vhtear.com/igprofile?query=' + args[2] + '&apikey=' + vhtearkey)
                if(cekig.data.result === null) {
                    return nao.reply(from, 'Username tidak ditemukan\nSilahkan cek username ig kamu', id)
                } else {
                    var ignya = args[2]
                }
                if (getIg(sender.id) === undefined) {
                    await addIg(sender.id, ignya)
                } else {
                    replaceIg(sender.id, ignya)
                }
                nao.reply(from, 'Set user IG *Succes*', id)
            } else if(args[1] == 'unlisted') {
                if(!isAdmin) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin Bot!', id)
                //if (mentionedJidList.length === 0) return nao.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *'+prefix+'set_user* unlisted @tagmember', id)
                if(mentionedJidList[0]) {
                    var bangunban = mentionedJidList[0]
                } else if(args[2] == 'me') {
                    var bangunban = sender.id
                }
                await _cmd.splice(getCmdPosition(bangunban), 1)
                fs.writeFileSync('./lib/database/user/cmd.json', JSON.stringify(_cmd))
                nao.contactUnblock(bangunban)
                nao.sendTextWithMentions(from, `Success unblok @${bangunban.replace('@c.us','')}! & Unlisted set to 0`, id)
            } else if(args[1] == 'limit') {
                if(!isOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin Bot!', id)
                if (!quotedMsg) return nao.reply(from, 'Untuk menggunakan command ini, reply pesannya', id)
                let qmidll = quotedMsgObj.sender.id
                if(args[2] == 'reset') {
                    await limit.splice(getLimitPosition(qmidll), 1)
                    fs.writeFileSync('./lib/database/user/limit.json', JSON.stringify(limit))
                    nao.sendTextWithMentions(from, `Success Reset Limit @${qmidll.replace('@c.us','')}!`, id)
                }
            } else if(args[1] == 'level') {
                if(!isOwner) return nao.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin Bot!', id)
                if (!quotedMsg) return nao.reply(from, 'Untuk menggunakan command ini, reply pesannya', id)
                let qmidl = quotedMsgObj.sender.id
                if(args[2] == 'reset') {
                    await _level.splice(getLevelPosition(qmidl), 1)
                    fs.writeFileSync('./lib/database/user/level.json', JSON.stringify(_level))
                    nao.sendTextWithMentions(from, `Success Reset level @${qmidl.replace('@c.us','')}!`, id)
                } else if(args[2] == 'min') { 
                    const currentLevel = getLevelingLevel(qmidl)
                    const checkId = getLevelingId(qmidl)
                    const checkBg = getBg(qmidl)
                    if (currentLevel === undefined && checkId === undefined) await addLevelingId(qmidl)
                    if (checkBg === undefined) addBg(qmidl)
                    const amountLvl = Math.floor(args[3])
                    const amountXp = Math.floor(args[4])
                    await MinLevelingXp(qmidl, amountXp)
                    await MinLevelingLevel(qmidl, amountLvl)
                    nao.sendTextWithMentions(from, `Success Min Level @${qmidl.replace('@c.us','')}!\n\nUpdated!\nXp: ${numberWithCommas(getLevelingXp(qmidl))}\nLevel: ${getLevelingLevel(qmidl)}`)
                } else if(args[2] == 'add') {
                    const currentLevel = getLevelingLevel(qmidl)
                    const checkId = getLevelingId(qmidl)
                    const checkBg = getBg(qmidl)
                    if (currentLevel === undefined && checkId === undefined) await addLevelingId(qmidl)
                    if (checkBg === undefined) addBg(qmidl)
                    //const amountLvl = args[3]
                    //const amountXp = args[4]
                    const amountXp = Math.floor(args[4])
                    const amountLvl = Math.floor(args[3])
                    await addLevelingXp(qmidl, amountXp)
                    await addLevelingLevel(qmidl, amountLvl)
                    nao.sendTextWithMentions(from, `Success Add Level @${qmidl.replace('@c.us','')}!\n\nUpdated!\nXp: ${numberWithCommas(getLevelingXp(qmidl))}\nLevel: ${getLevelingLevel(qmidl)}`)
                }
            } else {
                nao.reply(from, 'Format Salah, Silahkan ketik '+prefix+'set_user', id)
            }
            break
        case prefix+'profile':
        case prefix+'me':
            if (isBlocked) return false
            if (isGroupMsg) {
                if (!quotedMsg) {
                var block = blockNumber.includes(author)
                //var bend = banned.includes(author)
                if(!isHideppOn) {
                    var pic = await nao.getProfilePicFromServer(author)
                } else {
                    var pic = errorImg
                }
                var namae = pushname
                var sts = await nao.getStatus(author)
                var xpnyaa = getLevelingLevel(author)
                var adm = isGroupAdmins
                var ig = getIg(sender.id)
                if (getIg(sender.id) === undefined) {
                    var ig = 'Untuk setIG ketik '+prefix+'set_user ig username mu'
                } 
                if (getGen(sender.id) === undefined) {
                    var gender = 'Untuk setGender ketik '+prefix+'set_user gender cowo/cewe'
                    var genemo = '❔'
                } else if (getGen(sender.id) === 'Laki-Laki') {
                    var gender = 'Laki-Laki'
                    var genemo = '♂️'
                } else if (getGen(sender.id) === 'Perempuan') {
                    var gender = 'Perempuan'
                    var genemo = '♀️'
                }
                /*var notice = getRemind(sender.id)
                if (getRemind(sender.id) === undefined) {
                    var notice = 'Nothing'
                }
                var noticetime = getRemindTime(sender.id)
                if (getRemindTime(sender.id) === undefined) {
                    var noticetime = '-'
                }*/
                var cmdmsgs = getCmdmsg(sender.id)
                if (getCmdmsg(sender.id) === undefined) {
                    var cmdmsgs = '-'
                }
                const { status } = sts
                var cmdjum = getCmdjum(sender.id)
                if (getCmdjum(sender.id) === undefined) {
                    var cmdjum = '-'
                }
                if (pic == undefined) {
                    var pfp = errorImg 
                } else {
                    var pfp = pic
                } 
                /*if(sender.id == '6281358181668@c.us') {
                    //var userau = '👨‍👩‍👧Dwi Rizqi👨‍👩‍👧'
                    var roleid = '👑Premium👑'
                } else if(sender.id == '62895603517616@c.us') {
                    var userau = '🤝Partner🤝'
                } else if(sender.id == '628998016099@c.us') {
                    var userau = '🤝Partner🤝'
                } else if(sender.id == '6281341827661@c.us') {
                    var userau = '🤵Administrator🤵'
                } else if(sender.id == '6285348000200@c.us') {
                    var userau = '⚜️LORD⚜️'
                } else if(sender.id == '6289684286953@c.us') {
                    var userau = '☠️GHOST☠️'
                } else if(sender.id == '6283150156494@c.us') {
                    var userau = '🔥LORT🔥'
                } else if(sender.id == '6281336820099@c.us') {
                    var userau = '👥Owner Best Friend👥'
                } else if (isPrem) {
                    var userau = '👑Premium👑'
                } else {
                    var userau = '💰Free💰'
                }*/
                const nameTag_profile = getNameTag(sender.id).select
                var userau = nameTag_profile
                if (nameTag_profile == '') var userau = `Ketik ${prefix}nametag`
                await nao.sendFileFromUrl(from, pfp, 'pfp.jpg', `🎓 *Nama 🎓: ${namae}*

🌱 *User Info 🌱: ${status}*

👾 *Level 👾: ${xpnyaa}*

💫 *User 💫: ${userau}*

${genemo} *Gender* ${genemo}: ${gender}

📷 *Instagram 📷: @${ig}*

👤 *Admin Group 👤: ${adm}*

🚫 *Block 🚫: ${block}*

↯ Command yang tidak ada ↯: ${cmdmsgs}

↯ Command yang tidak ada ↯: ${cmdjum}
`)
             } else if (quotedMsg) {
             var qmid = quotedMsgObj.sender.id
             const isHideppOnQo = _hidepp.includes(qmid)
             var block = blockNumber.includes(qmid)
             if(!isHideppOnQo) {
                var pic = await nao.getProfilePicFromServer(qmid)
            } else {
                var pic = errorImg
            }
             var namae = quotedMsgObj.sender.pushname
             var xpnyaa = getLevelingLevel(qmid)
             var sts = await nao.getStatus(qmid)
             var adm = groupAdmins.includes(qmid)
             var igqo = getIg(qmid)
            if (getIg(qmid) === undefined) {
                var igqo = 'Untuk setIG ketik '+prefix+'set_user ig username mu'
            } 
            if (getGen(qmid) === undefined) {
                var genderqo = 'Untuk setGender ketik '+prefix+'set_user gender cowo/cewe'
                var genemoqo = '❔'
            } else if (getGen(qmid) === 'Laki-Laki'){
                var genderqo = 'Laki-Laki'
                var genemoqo = '♂️'
            } else if (getGen(qmid) === 'Perempuan') {
                var genderqo = 'Perempuan'
                var genemoqo = '♀️'
            }
             var cmdmsgqo = getCmdmsg(qmid)
             if (getCmdmsg(qmid) === undefined) {
                var cmdmsgqo = '-'
            }
             var cmdjumqo = getCmdjum(qmid)
             if (getCmdjum(qmid) === undefined) {
                var cmdjumqo = '-'
            }
             var adminqo = groupAdmins.includes(qmid)
             /*const ispremqo = premium.includes(qmid)
             const isOwnerqo = ownerNumber.includes(qmid)*/
             /*var noticeqo = getRemind(qmid)
             if (getRemind(qmid) === undefined) {
                var noticeqo = 'Nothing'
            }
            var noticeqotime = getRemindTime(qmid)
            if (getRemindTime(qmid) === undefined) {
                var noticeqotime = '-'
            }*/
             const { status } = sts
              if (pic == undefined) {
              var pfp = errorImg 
              } else {
              var pfp = pic
              } 
              /*if(qmid == '6281358181668@c.us') {
                //var userau = '👨‍👩‍👧Dwi Rizqi👨‍👩‍👧'
                var roleid = '👑Premium👑'
                } else if(sender.id == '62895603517616@c.us') {
                    var userau = '🤝Partner🤝'
                } else if(sender.id == '628998016099@c.us') {
                    var userau = '🤝Partner🤝'
                } else if(qmid == '6281341827661@c.us') {
                    var userau = '🤵Administrator🤵'
                } else if(qmid == '6285348000200@c.us') {
                    var userau = '⚜️LORD⚜️'
                } else if(qmid == '6289684286953@c.us') {
                    var userau = '☠️GHOST☠️'
                } else if(qmid == '6283150156494@c.us') {
                    var userau = '🔥LORT🔥'
                } else if(qmid == '6281336820099@c.us') {
                    var userau = '👥Owner Best Friend👥'
                } else if (ispremqo) {
                    var userau = '👑Premium👑'
                } else {
                    var userau = '💰Free💰'
                }*/
                if(qmid == '6282351884519@c.us') {
                    var nameTag_profile = '👾 BOT 👾'
                } else {
                    var nameTag_profile = getNameTag(qmid).select
                }
                var userau = nameTag_profile
                if (nameTag_profile == '') var userau = `Ketik ${prefix}nametag`
            if(qmid == '6282351884519@c.us') {
                var block = 'Bot mana bisa keban :v'
                var namae = 'Nao Tomori'
                var xpnyaa = 'Bot mana punya XP :v'
                var igqo = '-'
                var userau = '👾 BOT 👾'
                var genemoqo = '♀️'
                var genderqo = 'Perempuan'
            }
              await nao.sendFileFromUrl(from, pfp, 'pfp.jpg', `🎓 *Nama 🎓: ${namae}*

🌱 *User Info 🌱: ${status}*
              
👾 *Level 👾: ${xpnyaa}*
              
💫 *User 💫: ${userau}*

${genemoqo} *Gender* ${genemoqo}: ${genderqo}

📷 *Instagram 📷: @${igqo}*
              
👤 *Admin Group 👤: ${adminqo}*
              
🚫 *Block 🚫: ${block}*
              
↯ Command yang tidak ada ↯: ${cmdmsgqo}
              
↯ Command yang tidak ada ↯: ${cmdjumqo}
`)
            }
        }
    
            break
        case prefix+'nametag':
            const nameTag_command = getNameTag(sender.id).tag
            const nameTag_command_filter = nameTag_command.trim().split(',')
            let nom_nametag = 0
            if (args.length === 1) {
                let nametag_headline = `Berikut adalah NameTag mu\nTotal : ${nameTag_command_filter.length}\n`
                for (let i of nameTag_command_filter) {
                    nom_nametag++
                    nametag_headline += `${nom_nametag}. ${i}\n`
                }
                let nametag_bawah = `Custom NameTag : ${prefix}nametag custom <terserah>\n\nUntuk memilih NameTag, Ketik _${prefix}nametag <nomer>_\nContoh: ${prefix}nametag 1`
                await nao.reply(from, `${nametag_headline} ${nametag_bawah}`, id)
            } else if(args[1] == 'custom') {
                if(!isPrem) return nao.reply(from, 'Fitur ini Bersifat Premium!', id)
                if (body.slice(16).length > 21) return nao.reply(from, 'Maksimal 20 huruf', id)
                await replaceNameTag(sender.id, body.slice(16))
                nao.reply(from, `Succes\nNametag : ${getNameTag(sender.id).select}`, id)
            } else if(args.length === 2) {
                try {
                    const nameTag_number_Filter = Math.floor(args[1]) - 1
                    const nameTag_replace_Filter = nameTag_command_filter[nameTag_number_Filter]
                    console.log(nameTag_replace_Filter)
                    console.log(sender.id)
                    if(nameTag_replace_Filter == undefined) return nao.reply(from, `Tidak ditemukan Tag dengan nomer ${args[1]}\nSilahkan ketik ${prefix}nametag`, id)
                    await replaceNameTag(sender.id, nameTag_replace_Filter)
                    nao.reply(from, `Succes\nNametag : ${getNameTag(sender.id).select}`, id)
                } catch (error) {
                    nao.sendText('6281358181668@c.us', 'Nametag Error: '+err)
                    nao.reply(from, `Tidak ditemukan Tag dengan nomer ${args[1]}\nSilahkan ketik ${prefix}nametag`, id)
                    console.log(error)
                }
            } else {
                return nao.reply(from, `Tidak ditemukan Tag dengan nomer ${args[1]}\nSilahkan ketik ${prefix}nametag`, id)
            }
            break
        // LIST MENU
        case prefix+'nao':
            await nao.sendImage(from, './media/img/nao.png')
            break
        case prefix+'menu':
        case prefix+'help':
            const levelny = getLevelingLevel(sender.id)
            nao.sendImage(from, './media/helpwall.png', '', help(pushname, roleid, levelny, prefix))
            //nao.sendText(from, commandd(prefix))
            break
        case prefix+'shop':
            if (getMoney(sender.id) === undefined) await setMoney(sender.id)
            const xpnya = numberWithCommas(getLevelingXp(sender.id))
            nao.sendText(from, shopmenu(xpnya, numberWithCommas(getMoney(sender.id)), prefix))
            break
        case prefix+'command':
        case prefix+'comand':
            const rankxpnycmd = _level
            await rankxpnycmd.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            const rankUserCmd = Math.floor(getLevelPosition(sender.id)) + 1
            const userLevelCmd = getLevelingLevel(sender.id)
            const userXpCmd = getLevelingXp(sender.id)
            const speedcmd = moment() / 1000 - t
            const formatcmd = sizeFormatter({
                std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
                decimalPlaces: 2,
                keepTrailingZeroes: false,
                render: (literal, symbol) => `${literal} ${symbol}B`,
            })
            const ramusage = `${formatcmd(os.totalmem() - os.freemem())} / ${formatcmd(os.totalmem())}`
            const hitstoday = numberWithCommas(getHitsCount('today', hitsCount))
            const hitstotal = numberWithCommas(getHitsCount('total', hitsCount))
            nao.sendImage(from,  './media/helpwall2.jpg', '', commandd(prefix, pushname, userLevelCmd, userXpCmd, rankUserCmd, sender.id, speedcmd, ramusage, hitstoday, hitstotal))
            break
        case prefix+'premium':
            if(!isPrem) return nao.reply(from, nopremu(prefix), id)
            nao.reply(from, premu(prefix), id)
            break
        case prefix+'pruser':
        case prefix+'premiumuser':
            let usprem = ''
            for (let premus of premium) {
                usprem += `➤ @${premus.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await nao.sendTextWithMentions(from, usprem)
            break
        case prefix+'premiumenu':
        case prefix+'premiummenu':
            nao.sendText(from, premcmd(prefix))
            break
        case prefix+'naogroup':
            nao.reply(from, `*--->Official Group<---*\n*Forum:* https://chat.whatsapp.com/GBffrSsrZz0LZQdxTdiofM\n\n*Anime:* https://chat.whatsapp.com/CglFvyHjBR88g92r1XHQzQ\nOwner nya baik ko, tenang join aja`, id)
            break
        case prefix+'creatormenu':
            nao.sendText(from, creatormenu(prefix))
            break
        case prefix+'groupmenu':
            nao.sendText(from, groupcmd(prefix))
            break
        case prefix+'mediamenu':
            nao.sendText(from, mediacmd(prefix))
            break
        case prefix+'animemenu':
            nao.sendText(from, animecmd(prefix))
            break
        case prefix+'adminmenu':
            if (!isGroupAdmins) return nao.reply(from, 'Perintah ini hanya untuk Admin Group', id)
            nao.sendText(from, admingroupmenu(prefix))
            break
        case prefix+'ownermenu':
            if (!isOwner) return
            nao.sendText(from, ownercmd(prefix))
            break
        case prefix+'praymenu':
            nao.reply(from, praycmd(prefix), id)
            break
        case prefix+'nsfwmenu':
            if (!isGroupMsg) return nao.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return nao.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            nao.sendText(from, nsfwcmd(prefix))
            break
        case prefix+'levelmenu':
            const rankxpnycmdlevel = _level
            await rankxpnycmdlevel.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            const rankUserCmdlevel = Math.floor(getLevelPosition(sender.id)) + 1
            const userLevelCmdlevel = getLevelingLevel(sender.id)
            const userXpCmdlevel = numberWithCommas(getLevelingXp(sender.id))
            nao.sendText(from, levelmenu(prefix, pushname, userLevelCmdlevel, userXpCmdlevel, rankUserCmdlevel))
            break
        case prefix+'intro':
            nao.sendTextWithMentions(from, 'Halo @'+sender.id.replace('@c.us', '')+'\nSelamat Datang,'+ `Silahkan intro dulu\n\n 🎌 ᵃⁿʸ'ⓜⓔ ᴥ アニメ 🎌\n୨━━━━━━━◈━━━━━━━୧\n 『⚜️Formulir Intro⚜️』\n୨━━━━━━━◈━━━━━━━୧`+'\n> ```Nama``` :\n> ```Umur``` :\n> ```Gender``` :\n> ```Askot``` :\n─────────────────\nAnime Favorit :\nWaifu/Husbu :\n─────────────────\nPatuhi Rules Group\nKalo gak *KICK!*', id)
            break
        case prefix+'nuklir':
            nao.sendText(from, `Code Nuklear [Doujin Hentai Genre NTR] (Netorare)\n\nEasy Mode :\n• https://nhentai.net/g/316755/\n• https://nhentai.net/g/316596/\n• https://nhentai.net/g/311850/\n• https://nhentai.net/g/315578/\n• https://nhentai.net/g/315488/\n• https://nhentai.net/g/315406/\n• https://nhentai.net/g/315344/\n• https://nhentai.net/g/315323/\n• https://nhentai.net/g/315136/\n• https://nhentai.net/g/315099/\n\nMedium Mode :\n• https://nhentai.net/g/316867/\n• https://nhentai.net/g/316869/\n• https://nhentai.net/g/316785/\n• https://nhentai.net/g/316763/51/\n• https://nhentai.net/g/316445/\n• https://nhentai.net/g/316250/\n• https://nhentai.net/g/311283/\n• https://nhentai.net/g/265671/\n• https://nhentai.net/g/312127/\n• https://nhentai.net/g/311560/\n\nHard Mode :\n• https://nhentai.net/g/316820/\n• https://nhentai.net/g/316481/\n• https://nhentai.net/g/316430/\n• https://nhentai.net/g/276347/\n• https://nhentai.net/g/196329/\n• https://nhentai.net/g/304543/\n• https://nhentai.net/g/295295/\n• https://nhentai.net/g/311262/\n• https://nhentai.net/g/311882/\n• https://nhentai.net/g/312180/\n\nNote : Easy mode = Sange, Biasa Aja, Mental Lemah :v\n==============================\nMedium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu\n==============================\nHard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang\", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja\n==============================\n\n\n\nSilahkan Slurrr\n😎😎😎\n\ncode\n\nfree codes\n\n CODE UNLEASED \n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 \n‌88323 272117 170213 256613\n‌258382 224942\n\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/gBRING FORTH THY HOLY CODES!!!\n\nJust wanna share some of my stocks...\n......\n167466 165684 254048 175015 174016 142825 129128 171417 129128 95809 239567 247021 46579 123580 171417 173543 197422 187835 217832 206573 169546 193107 190805 220309 211112 132768 97945 164783 206446 251608 90182 256018 138470 110826 175494 134764 145647 212562 179166 214784 176977 191434 191434 239536 236342 227702 204425 205079 85333 254935 232837 232385 232341 254087 50535 235202 94159 52365 255034 153045 159457 173235 96270 196020 191774 230332 95298 89514 73649 203027 217404 65573 255457 199874 233133 205367 233693 50046 234191 209455 206366 253799 39249 172197 243552 223998221050 217456 225019 234165 258245 247696 258212 258465 86493 258133 244327 260640 261171 244996 202634 165950 220967 120977 204746 142850 99439 232439 246032 200948 265804 25913 262861 196077\n155489 257528 267270 177044 267502 184840\n144714 228575 268002 267980 227439 267980\n268015 89502 228575 220893 160609 261107 110747 235532 248196 228948 259361 235032 139512 257528 260369 261650 234174 116174 239732 213835 146913 216227 182290 117013 259600 139512 258479 173101 235532 258488 264551 263661 242668 154884 150096 265842 259137 781573 234734 244436 265841 265837 255337 110955 265842 266301 928040 122557 135420 209519 265756 136489 242517 266965 134035 266613 183469 244996 255662 267352 208797 267270 267043 213560 261868 267352 186938 267369 263516 266942 111292 233513 262069 172807 263960 184840 266495 252548 267617 193770 2217119Before silencing myself for a few days because of my hate posts I will bring thy holy codes!\n\n312167  \n314836 \n234366 \n266942\n298288\n250647 \n268293\n314536\n314565\n114977 \n302610 \n314902 \n261648\n121910\n23469\n308986\n305564\n305909\n260217\n307239 \n242530\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/g/135193/ - It's my win!\n/g/161488/ - Shota Teitoku t\n\nNuclear Code (Very Secret) \nHere you go 271048 111984 153098 255495 262340 228865 258133 173023 291208 267035 202748 164846 133435 Good one 292009 76924 196235 74948 243536 51624 157373 154089 245473 257867 239159 239820  254903  124919 63207 100287 222359 154951 28061 67226 28359 125838 42751 86322 93125 260151 49189 28018 242166 98771 259880 38827 81971 164946 252067 118261 141699 103454 102317 78392 52038 92888 146170 140437 76281 56047 257486 121132 12709 187334 232255 232255 76273 131406 173289 55907 135440 178640 48680 247587 70178 39487 84663 213693 121009 249935 189774 186729 117046 164345 202735 162075 51212  218436 145303 205437 223438 146105 23933 38886 73936 237026 205427 104036 248318 146843 121136 114634 168501 116602 229151 45689 237889 117435 242163 142422 27027 25940 61748 153284 236393 230775 16835 254152 132572 132572 205856 87639 175124 267949 104619  144726 97984 114619 247970 248800 95558 37030 43621 238547 236283 136018 163398 92050 96999 137191 74648 70475 247229 168175 234921 88347 117957 35962 136088 98879 259201 87152 181235 42912 201358 114790 38691 236481 200631 257164 267987 147751 77146 183191 159852 224514 32380 208152 123768 199489 62529 122161 90791 73206 152299 90641 105671 268803 72737 118565 128142 182543 259739 162377 92414 108371 200629 158150 72345 9138 114118 5944 78100 222995 138839 8189 165888 102016 196044 208863 134460 86152 15752 142440 36590 71710 248618 186139 63675 10002 210268 241043 170027 220041 193448 213624 42460 241296 93008 72953 60624 35634 43525 183414 84531 80199 221306 225945 9037 56185 13176 166411 185184 11350 78525 180027 164869 43742 84686 166817 15543 208626 34270 116759 212084 156750 243973 3341 85848 71207 147591 253076 28 87114 204403 252971 173645 162780 25809 11484 222071 152809 106661 102222 154215 246366 17830 118581 68777 8861 91321 84274 232846 247295 113306 159042 121173 130 13042 13401  17214 11310 18147 18222 21560 10247 11518 23677 13605 3494 14936 98092 5905 11311 10392 10371 0302 21290 5161 39695 23571 17504 11269 18276 18101 0317 0228 17694 4473 22224 22200 19452 21589 67893 5569 13918 8958 12137  17166 13851 4458 17149 14471 6706 13850 12224 0929 14991 7382 15857 67893 14218 36477 5870 17553 67803 5870 5454 16102 15217 22801 17138 21001 17388 7446 23638 18222 6719 14331 15021 23845 3168 23552 22096 21604  22464 20855 4377 23610 18140 22260 5905 13347 20420 39689 13732 20667 6929 5275 18507 52262 1340 22049 13339 11265 22295 10439 14814 6936 52262 11267 21100 21272 9340 9559 23464 15874 18502 18500 15857  98092 16127 13486 9350 9220 76036 14219 5144 2831 17920 11347 17142 11264  15099 9110 10482 97556 3569 3670 243896 226387 82506 134764 220958 188337 142825 137838 247696 134442 191227 243896 250431 150180 68609 118174 194036 251338 248406 240302 128602 140791 197729 197782 236277 226181 236713 197353 205995 191390 117424 24909 20558 88336 235157 236910 239393 242683 250684 211759 250575 196880 194265 248717 225022 250287 139721 250035 148726 235905 156153 248717 100531 213586 242517 218308 242478 206905 213211 242357 191773 162662 209519 195287 223960 232398 150416 237635 228032 240545 238549 91568 243104 197422 228080 237326 222855 227463 241970 233736 110903 192317 235537 230439 240296 241467 222410 196557 115500 232110 97067 233773 234546 243304 246796 246403 185406 153841 147103 240560 147184 203402 155366 114750 245493 248487 215243 135032 233370 244691 76666 249743 252782 265803 211869 241777 247129 147001 245258 166001 149245 123442 258741 256917 257125 257123 257136 257085 128936 245413 193031 256896 222957 225553 224600 177301 144965 229822 237468 242739 191773 162662 209519 195287 223960 232398 242580 242276 241880 190332 228922 74396 218511 139512 241657 241654 241665 246622 239691 239944 226738 228952 237635 240354 201129 226503 14920 158558 240072 128502 233379 147184 147395 160011 147308 157642 179800 179801 240560 143349 206734 63386 230184 236525 215971 207718 238577 150134 242169 150933 105582 243252 245682 200424 112940 118282 173023 336104 111986 190050 198432 241677 243773 215078 180029 177013 158902 191227 196348 194965\n\nAnother \"Nuclear Code\"\n*Loli*\n207405    270424   270975   257888\n118840    247134   193759   176367\n155415    246232   198315   122697\n*Happy Mother's Day* 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah\n\n*Random*\n 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554\n\n*yg suka onee san*\n189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144121 166315 197350 2611 19157 247791 239595 50074 1235 135474 258965 262816 195747 242247 252913 149760 139983 114692 151132 152089 144481 201031 169585  198203 240330 236896 88670 254499 169585 196783 194443 59284 249265 62287 166985\n\n308960 308812 308520 308356 308117 307853 306798 306696 306552 306112 306104 305792  305639 305614 305490 304935 304913 304639\nUncencored+full color :3\n\n229144 253687 238577 236509 254351 265855 239842 219847 \n227675 220985 233245 266177\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n\n298877 full colour 700-an halaman\n\n321027 Kanojo\n321087 Kanojo\n\n*Shoujo kyouiku*\n.\nhttp://www89.zippyshare.com/v/oJ6wXSzu/file.html\n.\nhttp://www10.zippyshare.com/v/ASG16PkP/file.html\n.\n*Shoujo kyouiku RE*\n.\nhttp://www22.zippyshare.com/v/f3WTq2fj/file.html\n.\nhttp://www22.zippyshare.com/v/f3WTq2fj/file.html\n.\n*Enku shoujo*\n.\nhttp://www2.zippyshare.com/v/GbTIGqYI/file.html\n.\n*HHH triple ecchi*\n.\nhttp://www5.zippyshare.com/v/buKvs9Ct/file.html\n.\nhttp://www88.zippyshare.com/v/oBwwM1hM/file.html\n.\nhttp://www76.zippyshare.com/v/jH9ctIkJ/file.html\n.\nhttp://www103.zippyshare.com/v/ge60YHFW/file.html\n.\n*Kowaremono: risa plus the animation*\n.\nhttp://www4.zippyshare.com/v/mSoPqwHh/file.html\n.\n*Hatsu inu the animation*\n.\nhttp://www101.zippyshare.com/v/cJcrGGjU/file.html\n.\nhttp://www36.zippyshare.com/v/ggBO7FHh/file.html\n.\nhttp://www98.zippyshare.com/v/BvpxDNSh/file.html\n.\nhttp://www92.zippyshare.com/v/eGqmU339/file.html\n.\n*Spesial bacth overflow*\n.\nhttps://acefile.co/f/18843033\n.\n(edisi males rangkai)\n\n193748\n\nSotsugyou\n.\n.\nhttp://www45.zippyshare.com/v/FGtJoLc8/file.html\n.\nhttp://www77.zippyshare.com/v/zmP3nhNi/file.html\n.\nShihai no kyoudan\n.\n.\nhttp://www35.zippyshare.com/v/sZS1gcQx/file.html\n.\nYue ni hitazuma wa netorareta\n.\n.\nhttp://www96.zippyshare.com/v/558blBRS/file.html\n.\nhttp://www61.zippyshare.com/v/7qwo3s0X/file.html\n.\nShiku x kanojo\n.\n.\nhttp://www114.zippyshare.com/v/iBaDg2wT/file.html\n.\nhttp://www4.zippyshare.com/v/1hsppXvM/file.html\n.\nToriko no kusarii\n.\n.\nhttp://www10.zippyshare.com/v/vorpPeiS/file.html\n.\nhttp://www92.zippyshare.com/v/C3CLUMsO/file.html\n.\nOnii-chan asa made\n.\n.\nhttp://www49.zippyshare.com/v/9UdBpcXn/file.html\n.\n//www96.zippyshare.com/v/QR4Ik7KD/file.html\n\n293777\n\n313479 (Sugoi Dekai)\nSabar loading!!\n\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 25661 3\n‌258382 224942.  17098kode nuklir :V\n\nCode Nuklear [Doujin Hentai Genre NTR] (Netorare)\n\nEasy Mode :\n• https://nhentai.net/g/316755/\n• https://nhentai.net/g/316596/\n• https://nhentai.net/g/311850/\n• https://nhentai.net/g/315578/\n• https://nhentai.net/g/315488/\n• https://nhentai.net/g/315406/\n• https://nhentai.net/g/315344/\n• https://nhentai.net/g/315323/\n• https://nhentai.net/g/315136/\n• https://nhentai.net/g/315099/\n\nMedium Mode :\n• https://nhentai.net/g/316867/\n• https://nhentai.net/g/316869/\n• https://nhentai.net/g/316785/\n• https://nhentai.net/g/316763/51/\n• https://nhentai.net/g/316445/\n• https://nhentai.net/g/316250/\n• https://nhentai.net/g/311283/\n• https://nhentai.net/g/265671/\n• https://nhentai.net/g/312127/\n• https://nhentai.net/g/311560/\n\nHard Mode :\n• https://nhentai.net/g/316820/\n• https://nhentai.net/g/316481/\n• https://nhentai.net/g/316430/\n• https://nhentai.net/g/276347/\n• https://nhentai.net/g/196329/\n• https://nhentai.net/g/304543/\n• https://nhentai.net/g/295295/\n• https://nhentai.net/g/311262/\n• https://nhentai.net/g/311882/\n• https://nhentai.net/g/312180/\n\nNote : Easy mode = Sange, Biasa Aja, Mental Lemah :v\n==============================\nMedium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu\n==============================\nHard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang\", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja\n==============================\n\n\n\nSilahkan Slurrr\n😎😎😎\n\ncode\n\nfree codes\n\n CODE UNLEASED \n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 \n‌88323 272117 170213 256613\n‌258382 224942\n\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/gBRING FORTH THY HOLY CODES!!!\n\nJust wanna share some of my stocks...\n......\n167466 165684 254048 175015 174016 142825 129128 171417 129128 95809 239567 247021 46579 123580 171417 173543 197422 187835 217832 206573 169546 193107 190805 220309 211112 132768 97945 164783 206446 251608 90182 256018 138470 110826 175494 134764 145647 212562 179166 214784 176977 191434 191434 239536 236342 227702 204425 205079 85333 254935 232837 232385 232341 254087 50535 235202 94159 52365 255034 153045 159457 173235 96270 196020 191774 230332 95298 89514 73649 203027 217404 65573 255457 199874 233133 205367 233693 50046 234191 209455 206366 253799 39249 172197 243552 223998221050 217456 225019 234165 258245 247696 258212 258465 86493 258133 244327 260640 261171 244996 202634 165950 220967 120977 204746 142850 99439 232439 246032 200948 265804 25913 262861 196077\n155489 257528 267270 177044 267502 184840\n144714 228575 268002 267980 227439 267980\n268015 89502 228575 220893 160609 261107 110747 235532 248196 228948 259361 235032 139512 257528 260369 261650 234174 116174 239732 213835 146913 216227 182290 117013 259600 139512 258479 173101 235532 258488 264551 263661 242668 154884 150096 265842 259137 781573 234734 244436 265841 265837 255337 110955 265842 266301 928040 122557 135420 209519 265756 136489 242517 266965 134035 266613 183469 244996 255662 267352 208797 267270 267043 213560 261868 267352 186938 267369 263516 266942 111292 233513 262069 172807 263960 184840 266495 252548 267617 193770 2217119Before silencing myself for a few days because of my hate posts I will bring thy holy codes!\n\n312167  \n314836 \n234366 \n266942\n298288\n250647 \n268293\n314536\n314565\n114977 \n302610 \n314902 \n261648\n121910\n23469\n308986\n305564\n305909\n260217\n307239 \n242530\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/g/135193/ - It's my win!\n/g/161488/ - Shota Teitoku t\n\nNuclear Code (Very Secret) \nHere you go 271048 111984 153098 255495 262340 228865 258133 173023 291208 267035 202748 164846 133435 Good one 292009 76924 196235 74948 243536 51624 157373 154089 245473 257867 239159 239820  254903  124919 63207 100287 222359 154951 28061 67226 28359 125838 42751 86322 93125 260151 49189 28018 242166 98771 259880 38827 81971 164946 252067 118261 141699 103454 102317 78392 52038 92888 146170 140437 76281 56047 257486 121132 12709 187334 232255 232255 76273 131406 173289 55907 135440 178640 48680 247587 70178 39487 84663 213693 121009 249935 189774 186729 117046 164345 202735 162075 51212  218436 145303 205437 223438 146105 23933 38886 73936 237026 205427 104036 248318 146843 121136 114634 168501 116602 229151 45689 237889 117435 242163 142422 27027 25940 61748 153284 236393 230775 16835 254152 132572 132572 205856 87639 175124 267949 104619  144726 97984 114619 247970 248800 95558 37030 43621 238547 236283 136018 163398 92050 96999 137191 74648 70475 247229 168175 234921 88347 117957 35962 136088 98879 259201 87152 181235 42912 201358 114790 38691 236481 200631 257164 267987 147751 77146 183191 159852 224514 32380 208152 123768 199489 62529 122161 90791 73206 152299 90641 105671 268803 72737 118565 128142 182543 259739 162377 92414 108371 200629 158150 72345 9138 114118 5944 78100 222995 138839 8189 165888 102016 196044 208863 134460 86152 15752 142440 36590 71710 248618 186139 63675 10002 210268 241043 170027 220041 193448 213624 42460 241296 93008 72953 60624 35634 43525 183414 84531 80199 221306 225945 9037 56185 13176 166411 185184 11350 78525 180027 164869 43742 84686 166817 15543 208626 34270 116759 212084 156750 243973 3341 85848 71207 147591 253076 28 87114 204403 252971 173645 162780 25809 11484 222071 152809 106661 102222 154215 246366 17830 118581 68777 8861 91321 84274 232846 247295 113306 159042 121173 130 13042 13401  17214 11310 18147 18222 21560 10247 11518 23677 13605 3494 14936 98092 5905 11311 10392 10371 0302 21290 5161 39695 23571 17504 11269 18276 18101 0317 0228 17694 4473 22224 22200 19452 21589 67893 5569 13918 8958 12137  17166 13851 4458 17149 14471 6706 13850 12224 0929 14991 7382 15857 67893 14218 36477 5870 17553 67803 5870 5454 16102 15217 22801 17138 21001 17388 7446 23638 18222 6719 14331 15021 23845 3168 23552 22096 21604  22464 20855 4377 23610 18140 22260 5905 13347 20420 39689 13732 20667 6929 5275 18507 52262 1340 22049 13339 11265 22295 10439 14814 6936 52262 11267 21100 21272 9340 9559 23464 15874 18502 18500 15857  98092 16127 13486 9350 9220 76036 14219 5144 2831 17920 11347 17142 11264  15099 9110 10482 97556 3569 3670 243896 226387 82506 134764 220958 188337 142825 137838 247696 134442 191227 243896 250431 150180 68609 118174 194036 251338 248406 240302 128602 140791 197729 197782 236277 226181 236713 197353 205995 191390 117424 24909 20558 88336 235157 236910 239393 242683 250684 211759 250575 196880 194265 248717 225022 250287 139721 250035 148726 235905 156153 248717 100531 213586 242517 218308 242478 206905 213211 242357 191773 162662 209519 195287 223960 232398 150416 237635 228032 240545 238549 91568 243104 197422 228080 237326 222855 227463 241970 233736 110903 192317 235537 230439 240296 241467 222410 196557 115500 232110 97067 233773 234546 243304 246796 246403 185406 153841 147103 240560 147184 203402 155366 114750 245493 248487 215243 135032 233370 244691 76666 249743 252782 265803 211869 241777 247129 147001 245258 166001 149245 123442 258741 256917 257125 257123 257136 257085 128936 245413 193031 256896 222957 225553 224600 177301 144965 229822 237468 242739 191773 162662 209519 195287 223960 232398 242580 242276 241880 190332 228922 74396 218511 139512 241657 241654 241665 246622 239691 239944 226738 228952 237635 240354 201129 226503 14920 158558 240072 128502 233379 147184 147395 160011 147308 157642 179800 179801 240560 143349 206734 63386 230184 236525 215971 207718 238577 150134 242169 150933 105582 243252 245682 200424 112940 118282 173023 336104 111986 190050 198432 241677 243773 215078 180029 177013 158902 191227 196348 194965\n\nAnother \"Nuclear Code\"\n*Loli*\n207405    270424   270975   257888\n118840    247134   193759   176367\n155415    246232   198315   122697\n*Happy Mother's Day* 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah\n\n*Random*\n 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554\n\n*yg suka onee san*\n189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144121 166315 197350 2611 19157 247791 239595 50074 1235 135474 258965 262816 195747 242247 252913 149760 139983 114692 151132 152089 144481 201031 169585  198203 240330 236896 88670 254499 169585 196783 194443 59284 249265 62287 166985\n\n308960 308812 308520 308356 308117 307853 306798 306696 306552 306112 306104 305792  305639 305614 305490 304935 304913 304639\nUncencored+full color :3\n\n229144 253687 238577 236509 254351 265855 239842 219847 \n227675 220985 233245 266177\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n\n298877 full colour 700-an halaman\n\n321027 Kanojo\n321087 Kanojo\n\n*Shoujo kyouiku*\n.\nhttp://www89.zippyshare.com/v/oJ6wXSzu/file.html\n.\nhttp://www10.zippyshare.com/v/ASG16PkP/file.html\n.\n*Shoujo kyouiku RE*\n.\nhttp://www22.zippyshare.com/v/f3WTq2fj/file.html\n.\nhttp://www22.zippyshare.com/v/f3WTq2fj/file.html\n.\n*Enku shoujo*\n.\nhttp://www2.zippyshare.com/v/GbTIGqYI/file.html\n.\n*HHH triple ecchi*\n.\nhttp://www5.zippyshare.com/v/buKvs9Ct/file.html\n.\nhttp://www88.zippyshare.com/v/oBwwM1hM/file.html\n.\nhttp://www76.zippyshare.com/v/jH9ctIkJ/file.html\n.\nhttp://www103.zippyshare.com/v/ge60YHFW/file.html\n.\n*Kowaremono: risa plus the animation*\n.\nhttp://www4.zippyshare.com/v/mSoPqwHh/file.html\n.\n*Hatsu inu the animation*\n.\nhttp://www101.zippyshare.com/v/cJcrGGjU/file.html\n.\nhttp://www36.zippyshare.com/v/ggBO7FHh/file.html\n.\nhttp://www98.zippyshare.com/v/BvpxDNSh/file.html\n.\nhttp://www92.zippyshare.com/v/eGqmU339/file.html\n.\n*Spesial bacth overflow*\n.\nhttps://acefile.co/f/18843033\n.\n(edisi males rangkai)\n\n193748\n\nSotsugyou\n.\n.\nhttp://www45.zippyshare.com/v/FGtJoLc8/file.html\n.\nhttp://www77.zippyshare.com/v/zmP3nhNi/file.html\n.\nShihai no kyoudan\n.\n.\nhttp://www35.zippyshare.com/v/sZS1gcQx/file.html\n.\nYue ni hitazuma wa netorareta\n.\n.\nhttp://www96.zippyshare.com/v/558blBRS/file.html\n.\nhttp://www61.zippyshare.com/v/7qwo3s0X/file.html\n.\nShiku x kanojo\n.\n.\nhttp://www114.zippyshare.com/v/iBaDg2wT/file.html\n.\nhttp://www4.zippyshare.com/v/1hsppXvM/file.html\n.\nToriko no kusarii\n.\n.\nhttp://www10.zippyshare.com/v/vorpPeiS/file.html\n.\nhttp://www92.zippyshare.com/v/C3CLUMsO/file.html\n.\nOnii-chan asa made\n.\n.\nhttp://www49.zippyshare.com/v/9UdBpcXn/file.html\n.\n//www96.zippyshare.com/v/QR4Ik7KD/file.html\n\n293777\n\n313479 (Sugoi Dekai)\nSabar loading!!\n\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 25661 3\n‌258382 224942.  17098kode nuklir :V\n\nCode Nuklear [Doujin Hentai Genre NTR] (Netorare)\n\nEasy Mode :\n• https://nhentai.net/g/316755/\n• https://nhentai.net/g/316596/\n• https://nhentai.net/g/311850/\n• https://nhentai.net/g/315578/\n• https://nhentai.net/g/315488/\n• https://nhentai.net/g/315406/\n• https://nhentai.net/g/315344/\n• https://nhentai.net/g/315323/\n• https://nhentai.net/g/315136/\n• https://nhentai.net/g/315099/\n\nMedium Mode :\n• https://nhentai.net/g/316867/\n• https://nhentai.net/g/316869/\n• https://nhentai.net/g/316785/\n• https://nhentai.net/g/316763/51/\n• https://nhentai.net/g/316445/\n• https://nhentai.net/g/316250/\n• https://nhentai.net/g/311283/\n• https://nhentai.net/g/265671/\n• https://nhentai.net/g/312127/\n• https://nhentai.net/g/311560/\n\nHard Mode :\n• https://nhentai.net/g/316820/\n• https://nhentai.net/g/316481/\n• https://nhentai.net/g/316430/\n• https://nhentai.net/g/276347/\n• https://nhentai.net/g/196329/\n• https://nhentai.net/g/304543/\n• https://nhentai.net/g/295295/\n• https://nhentai.net/g/311262/\n• https://nhentai.net/g/311882/\n• https://nhentai.net/g/312180/\n\nNote : Easy mode = Sange, Biasa Aja, Mental Lemah :v\n==============================\nMedium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu\n==============================\nHard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang\", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja\n==============================\n\n\n\nSilahkan Slurrr\n😎😎😎\n\ncode\n\nfree codes\n\n CODE UNLEASED \n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 \n‌88323 272117 170213 256613\n‌258382 224942\n\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/gBRING FORTH THY HOLY CODES!!!\n\nJust wanna share some of my stocks...\n......\n167466 165684 254048 175015 174016 142825 129128 171417 129128 95809 239567 247021 46579 123580 171417 173543 197422 187835 217832 206573 169546 193107 190805 220309 211112 132768 97945 164783 206446 251608 90182 256018 138470 110826 175494 134764 145647 212562 179166 214784 176977 191434 191434 239536 236342 227702 204425 205079 85333 254935 232837 232385 232341 254087 50535 235202 94159 52365 255034 153045 159457 173235 96270 196020 191774 230332 95298 89514 73649 203027 217404 65573 255457 199874 233133 205367 233693 50046 234191 209455 206366 253799 39249 172197 243552 223998221050 217456 225019 234165 258245 247696 258212 258465 86493 258133 244327 260640 261171 244996 202634 165950 220967 120977 204746 142850 99439 232439 246032 200948 265804 25913 262861 196077\n155489 257528 267270 177044 267502 184840\n144714 228575 268002 267980 227439 267980\n268015 89502 228575 220893 160609 261107 110747 235532 248196 228948 259361 235032 139512 257528 260369 261650 234174 116174 239732 213835 146913 216227 182290 117013 259600 139512 258479 173101 235532 258488 264551 263661 242668 154884 150096 265842 259137 781573 234734 244436 265841 265837 255337 110955 265842 266301 928040 122557 135420 209519 265756 136489 242517 266965 134035 266613 183469 244996 255662 267352 208797 267270 267043 213560 261868 267352 186938 267369 263516 266942 111292 233513 262069 172807 263960 184840 266495 252548 267617 193770 2217119Before silencing myself for a few days because of my hate posts I will bring thy holy codes!\n\n312167  \n314836 \n234366 \n266942\n298288\n250647 \n268293\n314536\n314565\n114977 \n302610 \n314902 \n261648\n121910\n23469\n308986\n305564\n305909\n260217\n307239 \n242530\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/g/135193/ - It's my win!\n/g/161488/ - Shota Teitoku t\n\nNuclear Code (Very Secret) \nHere you go 271048 111984 153098 255495 262340 228865 258133 173023 291208 267035 202748 164846 133435 Good one 292009 76924 196235 74948 243536 51624 157373 154089 245473 257867 239159 239820  254903  124919 63207 100287 222359 154951 28061 67226 28359 125838 42751 86322 93125 260151 49189 28018 242166 98771 259880 38827 81971 164946 252067 118261 141699 103454 102317 78392 52038 92888 146170 140437 76281 56047 257486 121132 12709 187334 232255 232255 76273 131406 173289 55907 135440 178640 48680 247587 70178 39487 84663 213693 121009 249935 189774 186729 117046 164345 202735 162075 51212  218436 145303 205437 223438 146105 23933 38886 73936 237026 205427 104036 248318 146843 121136 114634 168501 116602 229151 45689 237889 117435 242163 142422 27027 25940 61748 153284 236393 230775 16835 254152 132572 132572 205856 87639 175124 267949 104619  144726 97984 114619 247970 248800 95558 37030 43621 238547 236283 136018 163398 92050 96999 137191 74648 70475 247229 168175 234921 88347 117957 35962 136088 98879 259201 87152 181235 42912 201358 114790 38691 236481 200631 257164 267987 147751 77146 183191 159852 224514 32380 208152 123768 199489 62529 122161 90791 73206 152299 90641 105671 268803 72737 118565 128142 182543 259739 162377 92414 108371 200629 158150 72345 9138 114118 5944 78100 222995 138839 8189 165888 102016 196044 208863 134460 86152 15752 142440 36590 71710 248618 186139 63675 10002 210268 241043 170027 220041 193448 213624 42460 241296 93008 72953 60624 35634 43525 183414 84531 80199 221306 225945 9037 56185 13176 166411 185184 11350 78525 180027 164869 43742 84686 166817 15543 208626 34270 116759 212084 156750 243973 3341 85848 71207 147591 253076 28 87114 204403 252971 173645 162780 25809 11484 222071 152809 106661 102222 154215 246366 17830 118581 68777 8861 91321 84274 232846 247295 113306 159042 121173 130 13042 13401  17214 11310 18147 18222 21560 10247 11518 23677 13605 3494 14936 98092 5905 11311 10392 10371 0302 21290 5161 39695 23571 17504 11269 18276 18101 0317 0228 17694 4473 22224 22200 19452 21589 67893 5569 13918 8958 12137  17166 13851 4458 17149 14471 6706 13850 12224 0929 14991 7382 15857 67893 14218 36477 5870 17553 67803 5870 5454 16102 15217 22801 17138 21001 17388 7446 23638 18222 6719 14331 15021 23845 3168 23552 22096 21604  22464 20855 4377 23610 18140 22260 5905 13347 20420 39689 13732 20667 6929 5275 18507 52262 1340 22049 13339 11265 22295 10439 14814 6936 52262 11267 21100 21272 9340 9559 23464 15874 18502 18500 15857  98092 16127 13486 9350 9220 76036 14219 5144 2831 17920 11347 17142 11264  15099 9110 10482 97556 3569 3670 243896 226387 82506 134764 220958 188337 142825 137838 247696 134442 191227 243896 250431 150180 68609 118174 194036 251338 248406 240302 128602 140791 197729 197782 236277 226181 236713 197353 205995 191390 117424 24909 20558 88336 235157 236910 239393 242683 250684 211759 250575 196880 194265 248717 225022 250287 139721 250035 148726 235905 156153 248717 100531 213586 242517 218308 242478 206905 213211 242357 191773 162662 209519 195287 223960 232398 150416 237635 228032 240545 238549 91568 243104 197422 228080 237326 222855 227463 241970 233736 110903 192317 235537 230439 240296 241467 222410 196557 115500 232110 97067 233773 234546 243304 246796 246403 185406 153841 147103 240560 147184 203402 155366 114750 245493 248487 215243 135032 233370 244691 76666 249743 252782 265803 211869 241777 247129 147001 245258 166001 149245 123442 258741 256917 257125 257123 257136 257085 128936 245413 193031 256896 222957 225553 224600 177301 144965 229822 237468 242739 191773 162662 209519 195287 223960 232398 242580 242276 241880 190332 228922 74396 218511 139512 241657 241654 241665 246622 239691 239944 226738 228952 237635 240354 201129 226503 14920 158558 240072 128502 233379 147184 147395 160011 147308 157642 179800 179801 240560 143349 206734 63386 230184 236525 215971 207718 238577 150134 242169 150933 105582 243252 245682 200424 112940 118282 173023 336104 111986 190050 198432 241677 243773 215078 180029 177013 158902 191227 196348 194965\n\nAnother \"Nuclear Code\"\n*Loli*\n207405    270424   270975   257888\n118840    247134   193759   176367\n155415    246232   198315   122697\n*Happy Mother's Day* 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah\n\n*Random*\n 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554\n\n*yg suka onee san*\n189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144121 166315 197350 2611 19157 247791 239595 50074 1235 135474 258965 262816 195747 242247 252913 149760 139983 114692 151132 152089 144481 201031 169585  198203 240330 236896 88670 254499 169585 196783 194443 59284 249265 62287 166985\n\n308960 308812 308520 308356 308117 307853 306798 306696 306552 306112 306104 305792  305639 305614 305490 304935 304913 304639\nUncencored+full color :3\n\n229144 253687 238577 236509 254351 265855 239842 219847 \n227675 220985 233245 266177\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n\n298877 full colour 700-an halaman\n\n321027 Kanojo\n321087 Kanojo\n\n*Shoujo kyouiku*\n.\nhttp://www89.zippyshare.com/v/oJ6wXSzu/file.html\n.\nhttp://www10.zippyshare.com/v/ASG16PkP/file.html\n.\n*Shoujo kyouiku RE*\n.\nhttp://www22.zippyshare.com/v/f3WTq2fj/file.html\n.\nhttp://www22.zippyshare.com/v/f3WTq2fj/file.html\n.\n*Enku shoujo*\n.\nhttp://www2.zippyshare.com/v/GbTIGqYI/file.html\n.\n*HHH triple ecchi*\n.\nhttp://www5.zippyshare.com/v/buKvs9Ct/file.html\n.\nhttp://www88.zippyshare.com/v/oBwwM1hM/file.html\n.\nhttp://www76.zippyshare.com/v/jH9ctIkJ/file.html\n.\nhttp://www103.zippyshare.com/v/ge60YHFW/file.html\n.\n*Kowaremono: risa plus the animation*\n.\nhttp://www4.zippyshare.com/v/mSoPqwHh/file.html\n.\n*Hatsu inu the animation*\n.\nhttp://www101.zippyshare.com/v/cJcrGGjU/file.html\n.\nhttp://www36.zippyshare.com/v/ggBO7FHh/file.html\n.\nhttp://www98.zippyshare.com/v/BvpxDNSh/file.html\n.\nhttp://www92.zippyshare.com/v/eGqmU339/file.html\n.\n*Spesial bacth overflow*\n.\nhttps://acefile.co/f/18843033\n.\n(edisi males rangkai)\n\n193748\n\nSotsugyou\n.\n.\nhttp://www45.zippyshare.com/v/FGtJoLc8/file.html\n.\nhttp://www77.zippyshare.com/v/zmP3nhNi/file.html\n.\nShihai no kyoudan\n.\n.\nhttp://www35.zippyshare.com/v/sZS1gcQx/file.html\n.\nYue ni hitazuma wa netorareta\n.\n.\nhttp://www96.zippyshare.com/v/558blBRS/file.html\n.\nhttp://www61.zippyshare.com/v/7qwo3s0X/file.html\n.\nShiku x kanojo\n.\n.\nhttp://www114.zippyshare.com/v/iBaDg2wT/file.html\n.\nhttp://www4.zippyshare.com/v/1hsppXvM/file.html\n.\nToriko no kusarii\n.\n.\nhttp://www10.zippyshare.com/v/vorpPeiS/file.html\n.\nhttp://www92.zippyshare.com/v/C3CLUMsO/file.html\n.\nOnii-chan asa made\n.\n.\nhttp://www49.zippyshare.com/v/9UdBpcXn/file.html\n.\n//www96.zippyshare.com/v/QR4Ik7KD/file.html\n\n293777\n\n313479 (Sugoi Dekai)\nSabar loading!!\n\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942BUAT YG PAHAM AJA!!\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 ‌88323 272117 170213 256613\n‌258382 224942.  17098`)
            nao.sendText(from, `Zero two/hard code\n260606\n280662\n235158\n231099\n233888\n\nShinobu/hard code\n334746\n332854\n332532\n327002\n322136\n\nRem/hard code\n290065\n289276\n286493\n276518\n\nMaou gakuen\n325735\n\nAkame ga kill\n236243\n137716\n\nKaguya sama\n316733\n73291\n\nViolet evergarden\n275550\n\nKurumi\n312396\n309957\n303072\n308852\n283652\n\nTonikaku Kawai\n334370\n\nMajo no tabitabi\n331399\n\ndeath note\n\n\n● CODE NUKLIR ●\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624\n ‌229144 253687 238577 236509\n  ‌227675 229085 233245 266177\n   254351 265855 239842 219847\n    239749 230566 253104 230185\n     251974 253091 251489 238030\n      260614 245023 232887 233547\n       262158 262870 239312 255129\n        244530 246963 256050 215459\n         243725 233770 250704 261819\n          261830 215658 256404 260028\n           261789 241254 268580 262407\n            262252 201814 250193 236036\n             262889 243933 245697 239750\n              128983 95364 223815 225080\n               110332 225767 97247 231139\n                266116 217037 160657 182439\n                 205089 176495 199121 199425\n                  184068 186615 224644 129479\n                   251524 153374 146499 258212\n                    163532 255244 269825 235914\n                     247103 138365 124624 219718\n                      168941 265918 205995 191390\n                       ‌225496 259137 231681 161688\n                        ‌199613 259260 260433 235532\n                         ‌88323 272117 170213 256613\n                          ‌258382 224942\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n  ● Milf ●\n  165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah\n  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n      ● Random ●\n      257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554\n      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n           ● yang suka onee san ●\n           189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144121 166315 197350 2611 19157 247791 239595 50074 1235 135474 258965 262816 195747 242247 252913 149760 139983 114692 151132 152089 144481 201031 169585 198203 240330 236896 88670 254499 169585 196783 194443 59284 249265 62287\n           𝙔𝙪𝙣𝙤 \n           278217\n           262352\n           252286\n           148783\n           138888\n           130340\n           ________\n           𝙏𝙖𝙢𝙖𝙞𝙣\n           327328\n           320732\n           291201\n           291200\n           289510\n           ________\n           𝙍𝙪𝙠𝙖 \n           337371\n           336063\n           335182\n           334946\n           322921\n           --------------\n𝙏𝙨𝙪𝙠𝙖𝙨𝙖\n334544\n---------------\n𝙍𝙞𝙣 𝙏𝙖𝙝𝙨𝙤𝙠𝙖\n335817\n333071\n332157\n331680\n330032\n326372\n322820\n320660\n319529\n317228\n-------------\n𝙎𝙖𝙠𝙪𝙧𝙖 \n323024\n323224\n323455\n321925\n310013\n309406\n------------\n𝘾𝙝𝙞𝙯𝙪𝙧𝙪\n329224\n328367\n328105\n327042\n327838\n320815\n-----------\n𝙔𝙪𝙢𝙚𝙠𝙤\n334730\n329961\n322686\n317540\n318937\n296892\n268251\n261713\n260560\n243790\n232551\n-----------\n𝙎𝙝𝙞𝙣𝙤𝙗𝙪\n232551\n332854\n332533\n332532\n330085\n327052\n327003\n321530\n324080\n322920\n--------------\nTokyo ghoul\n160661\n270035\n135043\n139399\n157353\n197957\n\n-Shokungeki no souma\n-257179\n-Darling in the franxx\n-246401\n-231576\n-131609\n-275232\n-259828\n-One punch man\n-154770\n-283850\n-307553\n-291816\n-155172\n-one piece\n-294563\n-43442\n-37659\n-33421\n-24124\n-Bnha\n-285981\n-235899\n-253119\n-182528\n-184185\n-251394\n-272745\n-Hdxd\n-102460\n-Fairy tail\n-183525\n-162783\n-151224\n-121468\n-Yuru camp\n-228355\n-228546\n-152035\n-Doraemon\n-246296\n-256075\n-313456\n-112158\n-Jojo\n-136251\n-184919\n-177517\n-97067\n-Saiki kusuo\n-233974\n-254233\n-254234\n-192310\n-Akame ga kill\n-132906\n-236243\n-211580\n-166126\n-Mob psycho\n-310832\n-205723\n-260776\n-213594\n-Boku no pico\n-36994\n-15679\n-10882\n-Tenjina senpai\n-174630\n-174906\n-256092\n-199515\n-Mirai nikki\n-252286\n-287029\n-86991\n-751077\n-SAO\n-311558\n-310748\n-308504\n-302201\n-Nisekoi\n-105945\n-106048\n-110094\n-171165\n-120759\n-122837\n-128773\n-243469\n-Angel beats\n-284268\n-50536\n-77713\n-51134\n-Naruto\n-131226\n-173418\n-177338\n-60425\n-Dragon ball\n-116728\n-155481\n-184365\n-260477\n-SNK\n-101796\n-87836\n-88147\n-92674\n-Bleach\n-110099\n-182544\n-201394\n-235378\n-Date a life\n-104721\n-107357\n-160556\n-97703\n-Umaru chan\n-163831\n-216099\n-296994\n-219699\n-Gotoubun\n-292537\n-278525\n-302668\n-287963\n-306088\n-Konosuba\n-311853\n-309120\n-266448\n-243845\n-Maid dragon\n-188469\n-197423\n-195873\n-197380\n-Ansatsu kyoushitsu\n-205286\n-123161\n-110254\n-122047\n-KNY\n-314581\n-311929\n-307499\n-304192\n-303682\n-310502\n-High School of the dead\n-57121\n-66800\n-49894\n-49745\n-Kimi no nawa\n-248306\n-219530\n-216942\n-189105\n-haikyuu\n-271127\n-226210\n-176144\n-166286\n-re:zero\n-233370\n-133344\n-232976\n-183001\n-290065\n-245855\n-251283\n-Kill la kill\n-164043\n-167021\n-290418\n-305710\n-turren toppa gurren langgan\n-210326\n-208605\n-304785\n-34619\n-Sekirei\n-134448\n-152191\n-174437\n-156549\n-yahari ore no kanojo\n-288563\n-303471\n-307974\n-311423\n-𝙕𝙚𝙧𝙤 𝙩𝙬𝙤\n-250091\n-246409\n-245956\n-244794\n-280662\n-283509\n-308637\n-𝙈𝙞𝙠𝙪\n-298570\n-322686\n-318370\n-311007\n-317987\n-308707\n-315303\n-311070\n-313679\n-305756\n-310723\n-𝙉𝙚𝙯𝙚𝙠𝙤 \n-297031\n-282970\n-288414\n-306854\n-𝙍𝙚𝙢\n-233344\n-253442\n-172852\n-192327\n-288873\n-300508\n-312354\n-314259\n-𝘼𝙦𝙪𝙖 \n-244327\n-209519\n-166174\n-191773\n-𝙈𝙞𝙜𝙪𝙢𝙞\n-309662\n-107353\n-283652\n-294127\n-________\n-259433\n-267858\n-318337\n-301125\n-___________\n-268281155850 5647 297974 139577 298547 149809 118282 236157 290886 109745 177503 102659 303655 182843 173808 265918 212548 303893 304307278832 210510 77054 275485 249743 280509 269673 103269 241790 255308 281709 211648 278153 269542 151436 109851 273447 60449 147746 195117 271062 179267 25586989514152067281135276528171091177013 255662 204958 250647 222798 250647 260605 114750 139732 222855 261174 206409 226861 245503 264298 179305 220901 92807 86879 148080 223146 223147 227020 243520 201704199827 271048 67462 255744 245737 170727 253993 272768 272298 151165 246448 182290 268793 179687 175852 187343 245131 234167 266987 123361 272129 277677 268920 129281 217727 218398 178468 277324 155365 274917 239463 245135 280297 253993 261063 267300 228708 112597 286003 209775 221287 285588 285627 285396 129071 16316 285275 116513 214054 182674 284566 178968 62287 284935 284907 263066 260217 240543 233321 245341 218162 218148 203367 233878 245942 246144 242056 255772 253992 283737 280890\n\n\n● CODE NUKLIR ●\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 \n‌88323 272117 170213 256613\n‌258382 224942\n\nCode nuklir:\n\n*Loli*\n*207405    270424   270975   257888\n*118840    247134   193759   176367\n*155415    246232   198315   122697\n**Happy Mother's Day* 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536\n\n*Random*\n* 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554\n*onee san*\n*189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144`)
            nao.sendText(from, `KODE NUKLIR\n\n\ndaichi x suga \n271811 271289 271122 271120 271039 200674\nlevi x ereh\n268656,32485, 310255, 294610, 274881, 273534, , 268656, 254943\n\nHinata harem :\n297598 304246 297599 297557 305441 297562 297561 297559 297556 297553 296822 296813 296810 296522 294089\n274753 271119 \n\n307898 161739 130505 180624 264128 152324 271123 183716 130818\n\nTokyo ghoul\n165820 165325 164330 169738\nYakuLev\n176089, 176059, 170180, 168735.\nMikaYuu\n225827 215998 188187 182822 151435 166467 150809 15075\n\nattack on titan:\n– 268590\n– 271984\n– 296546\n– 308751\n– 315429\n\nKode nuklir yaoi:\n— Kuroken\n161325 158714 149795 139068 134292 129887 84088 84087 154795 151130 149795 143097 120887 58714 149795\n\n320768\n234741\n130905\n502616\n459730\n\nhttps://nhentai.net/g/330527/\nhttps://nhentai.net/g/314781/\nhttps://nhentai.net/g/279489/\n\nSebastian x ciel:\n331908 326673 326576 324294 323220 309504 269091 252456 252455 248919 248841 248755\n\nKagehina:224674 224675 33223 327420 327420 327423 327416\naot:268590 271984 296546 308751 315429 94864 144421 92674 87836 254943\n\nKagehina:224674 224675 33223 327420 327420 327423 327416\naot:268590 271984 296546 308751 315429 94864 144421 92674 87836 254943\n\n273719 316945 142314 139209 126290 274788 330975 81652 304307 289857 178983\n\n292746 272083 224883 224675 133706 133686 224674 274762 336997 327423 327420 284411 133705 96376 96053  285694 - kagehina\n\nErina (shokugeki no soma)\n~183270\n~172228\n~190509\n\nAlice (shokugeki no soma) \n~180663\n~203497\n~237556\n\nMegumi (shokugeki no soma)\n~117327\n~147676\n~166412\n\nAqua\n~173911\n~218917\n~195287\n~316277\n~306950\n~323026\n\nUzaki-chan\n~297346\n~276023\n~304002\n\nAsuna Yuuki \n~319893\n~316198\n~322874\n\nHinata Hyuga\n~316242\n~318326\n~306672\n~310481\n\nRem \n~314259\n~312354\n~300508\n~288873\n~189632\n~289276\n~178283\n\nMitsuha Miyamizu\n~256038\n~185333\n~191532\n~186151\n\nEromanga Sensei\n~240912\n~239436\n~193941\n\nKamado Nezuko\n~319115\n~306954\n~283001\n\nKanroji (love pillar)\n~310502\n~321881\n~303578\n\nFujiwara Chika\n~276478\n~267858\n~270370\n~278513(photo only)\n\nKaguya Shinomiya\n~270251\n~267979\n~265175\n\nsilent voice (dont remember her name sorry)\n~215660 \n\nZero Two (sorry i forgot , there's to many of them)\n~260606\n~308637\n~254496\n\ng/193876/ - Razoku no Yoru\n\n/g/193984/ - Houkago Rendezvous\n\n/g/76119/ - Broadcast Girlfriend\n\n/g/192874/ - Koyomi Fechi\n\n/g/107180/ - Harem Bukai no Boku\n\n/g/110900/ - Kiniro\n\n/g/135193/ - It's my win!\n\n/g/161488/ - Shota Teitoku to Nyuukyo Time\n\n/g/65433/ - Jirettai no Yo!\n\n/g/182327/ - Sakeno Seiton\n/g/78651/ - Harem Time\n/g/190230/ - Boku no Bimama\n/g/191880/ - Sanae Hamaru\n/g/180600/ - Sakaki-san Satisfaction\n/g/105465/ - Sakaki-san Franchise\n/g/173023/ - Tiny Evil\n/g/191049/ - Kono Suba 1\n/g/191851/ - Kono Suba 2\n/g/167112/ - i'll be your cat\n/g/177754/ - Sloppy Sister\n/g/187016/ - Nanyou no Vacances Sakusen\n/g/165961/ - Love-ridden\n/g/165962/ - Pandemonium\n/g/97879/ - Natsuyasumi\n/g/74500/ - Nee-chan no yobanaide\n/g/133435/ - Spirited Girl\n/g/152075/ - Trick And Treat\n/g/174888/ - Razoku No Yoru\n/g/93354/ - Melty Play\n/g/74076/ - BAD COMMUNICATION\n/g/122948/ - PLAY BACK\n/g/104346/ - Funky Glamourous\n/g/91773/ - Good Times!!\n/g/78226/ - Practice Game\n/g/76482/ - JOINT\n/g/68508/ - Kimi ga iru nara\n/g/61224/ - Way back to the future\n/g/60473/ - Hoshi ni negai o\n/g/58469/ - Splash\n/g/56295/ - Heat Island\n/g/53905/ - I Beg You\n/g/42383/ - Rumors\n/g/187611/ - My Dear Maid\n/g/190846/ - Tsukimi Dango\n/g/158050/ - Muchimuchi\n/g/83269/ - Only a taste for Onee-Chan\n/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku\n/g/178941/ - Kodomo-Sensei\n/g/100401/ - Sister paradise\n\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 \n‌88323 272117 170213 256613\n‌258382 224942\n\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/g/135193/ - It's my win!\n/g/161488/ - Shota Teitoku to Nyuukyo Time\n/g/65433/ - Jirettai no Yo!\n/g/182327/ - Sakeno Seiton\n/g/78651/ - Harem Time\n/g/190230/ - Boku no Bimama\n/g/191880/ - Sanae Hamaru\n/g/180600/ - Sakaki-san Satisfaction\n/g/105465/ - Sakaki-san Franchise\n/g/173023/ - Tiny Evil\n/g/191049/ - Kono Suba 1\n/g/191851/ - Kono Suba 2\n/g/167112/ - i'll be your cat\n/g/177754/ - Sloppy Sister\n/g/187016/ - Nanyou no Vacances Sakusen\n/g/165961/ - Love-ridden\n/g/165962/ - Pandemonium\n/g/97879/ - Natsuyasumi\n/g/74500/ - Nee-chan no yobanaide\n/g/133435/ - Spirited Girl\n/g/152075/ - Trick And Treat\n/g/174888/ - Razoku No Yoru\n/g/93354/ - Melty Play\n/g/74076/ - BAD COMMUNICATION\n/g/122948/ - PLAY BACK\n/g/104346/ - Funky Glamourous\n/g/91773/ - Good Times!!\n/g/78226/ - Practice Game\n/g/76482/ - JOINT\n/g/68508/ - Kimi ga iru nara\n/g/61224/ - Way back to the future\n/g/60473/ - Hoshi ni negai o\n/g/58469/ - Splash\n/g/56295/ - Heat Island\n/g/53905/ - I Beg You\n/g/42383/ - Rumors\n/g/187611/ - My Dear Maid\n/g/190846/ - Tsukimi Dango\n/g/158050/ - Muchimuchi\n/g/83269/ - Only a taste for Onee-Chan\n/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku\n/g/178941/ - Kodomo-Sensei\n/g/100401/ - Sister paradise\n/g/35240/ - Eiken Lovers\n/g/77415/ - Koinaka\n/g/190900/ - Grazero Fantasy\n/g/161819/ - Night Of Incest\n/g/151132/ - Pet Na Ane No Shitsukekata\n/g/147585/ - Anetsun Summer!\n/g/136908/ - Man x Koi\n/g/112907/ - Imouto x Swimming!\n/g/125392/ - Joubutsu!\n/g/174463/ - Hotizuma Miyuki-San\n/g/159290/ - Mister Mistake\n/g/137953/ - Hotondo Byouki\n/g/114053/ - Unknown Title \n/g/78818/ - Furofuro!\n/g/15055/ - Demodori Mama\n/g/39876/ - Cherry Break\n/g/191427/ - Doutei Danshi Kousei Iinkai\n/g/192695/ - Costte Asobo.\n/g/192330/ - Level 1\n/g/191320/ - Kimi Ni Nara Dekiru\n/g/164434/ - MIDNIGHT PRINCESS\n/g/76813/ - Superior Cake\n/g/148669/ - Ohime-sama Gokko\n/g/144806/ - Youkai Watching\n/g/163698/ - Escalation\n/g/158559/ - Jiyuu de Kimama na Ore no Imouto\n/g/182210/ - Hatsujou Days\n/g/131428/ - Having Fun With The One That I Love\n/g/112853/ - Boku to Oneesan no Naisho\n/g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1\n/g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2\n/g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3\n/g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4\n\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532\n‌88323 272117 170213 256613\n‌258382 224942\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n● Milf ●\n165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,19055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n● Random ●\n257892 226942 236297 216039 221711 245304 166174 175220\n\n107817 MASTURBATION MAID\n181008 MATING ONI DAUGTHER\n183714 MATING ONI MOTHER\n230041 MICRO BIKINI LOLI\n114883 OREIMO COLORED\n146595 YOU DAMN COWARD\n197074 RECO SEKU\n245855 ONI REM BOOK\n51332 JURI GAME\n251067 LOLI ONSEN\n127894 AIKATSU SUMMER IDOL\n118282 YUKINYA! \n94579 ANO NATSU OKINAWA\n123554 TEISOU KANNEN ZERO\n206250 NAKED SWIMMING CLASS\n258972 NAKED SWIMMING CLASS 2\n75165 GIRLS IN THE FRAME\n85289 CAST AOI\n217410 SEIKATSU SHUUKAN\n102839 THE LIGHT OF TSUKIMI MANOR \n123450 THE SEX LIFE OF TACHIBANAS\n228433 SAEKANO MEGURI\n254730 NAKED RANDOSERU MEET-UP\n200855 I SAVED AN ELF LOLI\n225792 I SAVED AN ELF LOLI 2\n194036 PLAYING SHOP\n79081 AZUSA ATTACK 1\n79181 AZUSA ATTACK 2\n107668 AZUSA ATTACK 3\n245000 AZUSA ATTACK 4\n234741 TANAKA'S SISTER'S SECRET \n256161 SCHOOLGIRLS' BREAST EXPOSED\n254838 GUILD GIRL AND GOBLIN SLAYER\n258741 ARCHWIZARD EXPLOSION MAGIC\n175399 GIVING SOMETHING TO MEGUMIN\n214111 MC GAKUEN\n127981 MY NEIGHBOR RINA\n73758 KURONEKO YUKATA\n62886 KURONEKO COSPLAY\n110648 BATTLE OF KURONEKO\n256857 GIRLFRIEND, BOYFRIEND, MANAGER \n262664 GIRLFRIEND, BOYFRIEND, MANAGER 2\n178983 WE FUCKED LIKE RABBITS\n264018 YET INNOCENT MAIDEN\n168120 SHORT PANTS AND OTHERS\n112373 POPULARITY OF SHORT PANTS\n201031 TRAUMEREI\n150933 HELLO LOLITA! \n233766 HELPFUL MOTHER\n207964 BROTHER SISTER MAKE PROPER LOVE\n142825 A CERTAIN VILLAGE CUSTOM\n182290 HERO, DEMON QUEEN AND HER ELF\n225904 BOOBS AS REWARD \n Your welcome\n\n177013\n192503\n221793\n236739\n238212\n98872\n211955\n215600\n4299\n\nLevi x Eren\n113999\n115176\n171898\n172193 \n\n246422\n238357\n234344\n234343\n234342\n234341\n108534 \n116042 \n247998 \n161595 \n116042 \n108534 \n108836 \n247998 \n1611595 \n136640 \n129367 \n108285 \n106001 \n99497 \n95549 \n95551 \n106578 (ErwinLevi)  \n\nKuroo x Tsuki\n152148 \n151272 \n153909 \n302818 \n218563 \n178137 \n175937 \n218562 \n195777 \n183950 \n176020 \n175291 \n171342 \n\nKageyama x hinata\n274661 \n284411 \n285694 \n292746 \n287892 \n316473 \n327420 \n327418 \n327417 \n327416 \n327415 \n327414 \n323519 \n316473 \n305446 \n292746 \n285694 \n284411 \n274661 \n274659 \n333669 \n275085 \n251023 \n251016 \n148726 \n333680 \n327423\n\n\nDaisuga\n271811 \n271286 \n\nIwaoi\n327578 \n153136 \n\nKuroken\n161325\n84088 \n\n4some(kuroo kenma akaashi bokuto)\n151448 \n\nLevi x eren\n32485,\n310255\n294610\n274881\n273534\n269851\n268656\n254943\n248084\n247632\n238357\n234344\n244183\n219038\n218264\n\n\nDaichi x suga\n271811 \n271289 \n271122 \n271120 \n271039 \n200674 \n\nRandom? \n\n229144 \n253687 \n238577 \n236509\n227675 \n229085 \n233245 \n266177\n254351 \n265855 \n239842 \n219847\n239749 \n230566 \n253104 \n230185\n251974 \n253091 \n251489 \n\nlevi x eren\n32485\n310255\n294610\n274881\n273534\n269851\n268656\n254943\n248084\n247632\n238357\n234344\n244183\n219038\n218264\ndaichi x suga\n271811\n271289\n271122\n271120\n271039\n200674 \n\n04106 \n302337 \n302336 \n302299 \n298513 \n308231 \n308352 \n308338 \n308461 \n165820 \n165325 \n164330 \n169738 \n\nLevi x Eren\n113999\n115176\n171898\n172193 \n\n-UshiOi\n237020\n214644\n175779\n175341\n163924\n158247\n149548 \n\n-TakeUkai\n279058\n279056\n278982\n278980\n157134\n149029\n146455\n137074\n137075 \n\n-BokuAka\n237090\n182354\n178138\n176030\n175937\n175947\n175868\n175323\n175432\n175277\n172508\n163922\n163057\n161327\n158239\n160701\n159164\n158721\n158717 \n\n-IwaOi\n327578\n327331\n308339\n271119\n244087\n218564\n237020\n235171\n184659\n183519\n183448\n183032\n182329\n182344\n182311\n175994\n175779\n175488\n176041\n163410 \n\n-KageHina\n133302\n148726\n224883\n327423\n327418\n305446\n327420\n327414\n327416\n327417\n324715\n323519\n316473\n333680\n287892\n274762\n274661\n274659\n274616\n275085 \n\n-KuroKen\n161325\n158714\n151448\n149795\n139068\n134292\n129887\n129881\n112292\n149795\n84088\n84087\n154795\n151130\n143097\n120887 \n\n-AsaNoya\n275730\n274872\n274754\n274434\n271124\n184005\n176150\n178193\n139225 \n\n-OiKage\n274750\n254932\n254931\n254930\n254928\n157918\n137077\n254927\n237263\n135956\n195844\n162041\n162041\n161326\n130252\n160665\n129321\n129322\n128471\n128708\n\n\n274750\n254932\n254931\n254930\n254928\n137077\n157918\n254927\n237263\n135956\n195844\n162041\n161326\n130252\n160665\n207706 \n239849 \n309415 \n\n89609 \n329503 \n257001 \n182132 \n327652 \n317063 \n310868 \n276794 \n302249 \n294167 \n332982 \n332438 \n332079 \n331787 \n333223 \n333385 \n333260 \n302818 \n193665 \n257001 \n184559 \n\n331672 \n331684 \n327423 \n305446 \n2718111 \n271286 \n329642\n234261 \n331416 \n314397 \n325041 \n\n327228 \n321936 \n327331 \n316473 \n274661 \n308352 \n308338 \n308461 \n218302 \n217639 \n207705 \n205268 \n147078 \n140418 \n124905 \n127097 \n110245 \n191561 \n174886 \n206769 \n260791 \n\nerwinxlevi\n108534 \n116042 \n247998 \n161595 \n\n#Ereri#\n108534 \n108836 \n247998 \n1611595 \n136640 \n129367 \n108285 \n99497 \n106578\n95549 \n116042 \n108534 \n\n(luffy x zoro)\n276625\n218785\n195483\n175760\n152716\n137939\n133447\n53932 \n\n(levi x eren)\n268655\n268654\n248084\n247777\n247626\n246422\n238357\n234344\n234343\n234342\n234341\n234340\n234340\n234339\n324853\n324397\n311089\n310971\n294610\n211177\n213903\n274881\n274878\n274780\n271722\n269855\n269850\n269847\n269844\n269845\n269843\n269846\n310255\n273552\n172193\n234338\n234323\n229579\n225407\n219038\n218264\n218263\n216277\n216269\n216266\n215959\n215956\n215445\n215444\n215443\n269849\n269848\n268656 \n\nbokuaka\n176030\n175937\n175868\n175323\n175432\n163057\n161327\n160701\n158239\n182354\n178138\n175277\n175208\n16305 \n\niwaoi\n327578\n327331\n271119\n244087\n237020\n235171\n184659\n183519\n183448\n183032\n182329\n182344\n182311\n175994\n175779\n153136 \n\n207405 \n270424 \n270975 \n257888 \n118840 \n247134 \n193759 \n176367 \n155415 \n246232 \n198315 \n122697 \n308637 \n289060 \n286129 \n281415 \n280662 \n275327 \n260111 \n260088 (yaoi) \n\n(oikage)\n274750\n254932\n254931\n254930\n254928\n157918\n137077\n254927\n237263\n135956\n195844\n162041\n162041\n161326\n130252\n160665\n129321\n129322\n128471\n128708 \n\nkarma x nagisa\n309415\n239849\n207706\n191120\n179335\n150256, 141717, 218080, 150257 \n\n(tododeku)\n308352\n30KODE NUKLIR\n\n\ndaichi x suga \n271811 271289 271122 271120 271039 200674\nlevi x ereh\n268656,32485, 310255, 294610, 274881, 273534, , 268656, 254943\n\nHinata harem :\n297598 304246 297599 297557 305441 297562 297561 297559 297556 297553 296822 296813 296810 296522 294089\n274753 271119 \n\n307898 161739 130505 180624 264128 152324 271123 183716 130818\n\nTokyo ghoul\n165820 165325 164330 169738\nYakuLev\n176089, 176059, 170180, 168735.\nMikaYuu\n225827 215998 188187 182822 151435 166467 150809 15075\n\nattack on titan:\n– 268590\n– 271984\n– 296546\n– 308751\n– 315429\n\nKode nuklir yaoi:\n— Kuroken\n161325 158714 149795 139068 134292 129887 84088 84087 154795 151130 149795 143097 120887 58714 149795\n\n320768\n234741\n130905\n502616\n459730\n\nhttps://nhentai.net/g/330527/\nhttps://nhentai.net/g/314781/\nhttps://nhentai.net/g/279489/\n\nSebastian x ciel:\n331908 326673 326576 324294 323220 309504 269091 252456 252455 248919 248841 248755\n\nKagehina:224674 224675 33223 327420 327420 327423 327416\naot:268590 271984 296546 308751 315429 94864 144421 92674 87836 254943\n\nKagehina:224674 224675 33223 327420 327420 327423 327416\naot:268590 271984 296546 308751 315429 94864 144421 92674 87836 254943\n\n273719 316945 142314 139209 126290 274788 330975 81652 304307 289857 178983\n\n292746 272083 224883 224675 133706 133686 224674 274762 336997 327423 327420 284411 133705 96376 96053  285694 - kagehina\n\nErina (shokugeki no soma)\n~183270\n~172228\n~190509\n\nAlice (shokugeki no soma) \n~180663\n~203497\n~237556\n\nMegumi (shokugeki no soma)\n~117327\n~147676\n~166412\n\nAqua\n~173911\n~218917\n~195287\n~316277\n~306950\n~323026\n\nUzaki-chan\n~297346\n~276023\n~304002\n\nAsuna Yuuki \n~319893\n~316198\n~322874\n\nHinata Hyuga\n~316242\n~318326\n~306672\n~310481\n\nRem \n~314259\n~312354\n~300508\n~288873\n~189632\n~289276\n~178283\n\nMitsuha Miyamizu\n~256038\n~185333\n~191532\n~186151\n\nEromanga Sensei\n~240912\n~239436\n~193941\n\nKamado Nezuko\n~319115\n~306954\n~283001\n\nKanroji (love pillar)\n~310502\n~321881\n~303578\n\nFujiwara Chika\n~276478\n~267858\n~270370\n~278513(photo only)\n\nKaguya Shinomiya\n~270251\n~267979\n~265175\n\nsilent voice (dont remember her name sorry)\n~215660 \n\nZero Two (sorry i forgot , there's to many of them)\n~260606\n~308637\n~254496\n\ng/193876/ - Razoku no Yoru\n\n/g/193984/ - Houkago Rendezvous\n\n/g/76119/ - Broadcast Girlfriend\n\n/g/192874/ - Koyomi Fechi\n\n/g/107180/ - Harem Bukai no Boku\n\n/g/110900/ - Kiniro\n\n/g/135193/ - It's my win!\n\n/g/161488/ - Shota Teitoku to Nyuukyo Time\n\n/g/65433/ - Jirettai no Yo!\n\n/g/182327/ - Sakeno Seiton\n/g/78651/ - Harem Time\n/g/190230/ - Boku no Bimama\n/g/191880/ - Sanae Hamaru\n/g/180600/ - Sakaki-san Satisfaction\n/g/105465/ - Sakaki-san Franchise\n/g/173023/ - Tiny Evil\n/g/191049/ - Kono Suba 1\n/g/191851/ - Kono Suba 2\n/g/167112/ - i'll be your cat\n/g/177754/ - Sloppy Sister\n/g/187016/ - Nanyou no Vacances Sakusen\n/g/165961/ - Love-ridden\n/g/165962/ - Pandemonium\n/g/97879/ - Natsuyasumi\n/g/74500/ - Nee-chan no yobanaide\n/g/133435/ - Spirited Girl\n/g/152075/ - Trick And Treat\n/g/174888/ - Razoku No Yoru\n/g/93354/ - Melty Play\n/g/74076/ - BAD COMMUNICATION\n/g/122948/ - PLAY BACK\n/g/104346/ - Funky Glamourous\n/g/91773/ - Good Times!!\n/g/78226/ - Practice Game\n/g/76482/ - JOINT\n/g/68508/ - Kimi ga iru nara\n/g/61224/ - Way back to the future\n/g/60473/ - Hoshi ni negai o\n/g/58469/ - Splash\n/g/56295/ - Heat Island\n/g/53905/ - I Beg You\n/g/42383/ - Rumors\n/g/187611/ - My Dear Maid\n/g/190846/ - Tsukimi Dango\n/g/158050/ - Muchimuchi\n/g/83269/ - Only a taste for Onee-Chan\n/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku\n/g/178941/ - Kodomo-Sensei\n/g/100401/ - Sister paradise\n\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 \n‌88323 272117 170213 256613\n‌258382 224942\n\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/g/135193/ - It's my win!\n/g/161488/ - Shota Teitoku to Nyuukyo Time\n/g/65433/ - Jirettai no Yo!\n/g/182327/ - Sakeno Seiton\n/g/78651/ - Harem Time\n/g/190230/ - Boku no Bimama\n/g/191880/ - Sanae Hamaru\n/g/180600/ - Sakaki-san Satisfaction\n/g/105465/ - Sakaki-san Franchise\n/g/173023/ - Tiny Evil\n/g/191049/ - Kono Suba 1\n/g/191851/ - Kono Suba 2\n/g/167112/ - i'll be your cat\n/g/177754/ - Sloppy Sister\n/g/187016/ - Nanyou no Vacances Sakusen\n/g/165961/ - Love-ridden\n/g/165962/ - Pandemonium\n/g/97879/ - Natsuyasumi\n/g/74500/ - Nee-chan no yobanaide\n/g/133435/ - Spirited Girl\n/g/152075/ - Trick And Treat\n/g/174888/ - Razoku No Yoru\n/g/93354/ - Melty Play\n/g/74076/ - BAD COMMUNICATION\n/g/122948/ - PLAY BACK\n/g/104346/ - Funky Glamourous\n/g/91773/ - Good Times!!\n/g/78226/ - Practice Game\n/g/76482/ - JOINT\n/g/68508/ - Kimi ga iru nara\n/g/61224/ - Way back to the future\n/g/60473/ - Hoshi ni negai o\n/g/58469/ - Splash\n/g/56295/ - Heat Island\n/g/53905/ - I Beg You\n/g/42383/ - Rumors\n/g/187611/ - My Dear Maid\n/g/190846/ - Tsukimi Dango\n/g/158050/ - Muchimuchi\n/g/83269/ - Only a taste for Onee-Chan\n/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku\n/g/178941/ - Kodomo-Sensei\n/g/100401/ - Sister paradise\n/g/35240/ - Eiken Lovers\n/g/77415/ - Koinaka\n/g/190900/ - Grazero Fantasy\n/g/161819/ - Night Of Incest\n/g/151132/ - Pet Na Ane No Shitsukekata\n/g/147585/ - Anetsun Summer!\n/g/136908/ - Man x Koi\n/g/112907/ - Imouto x Swimming!\n/g/125392/ - Joubutsu!\n/g/174463/ - Hotizuma Miyuki-San\n/g/159290/ - Mister Mistake\n/g/137953/ - Hotondo Byouki\n/g/114053/ - Unknown Title \n/g/78818/ - Furofuro!\n/g/15055/ - Demodori Mama\n/g/39876/ - Cherry Break\n/g/191427/ - Doutei Danshi Kousei Iinkai\n/g/192695/ - Costte Asobo.\n/g/192330/ - Level 1\n/g/191320/ - Kimi Ni Nara Dekiru\n/g/164434/ - MIDNIGHT PRINCESS\n/g/76813/ - Superior Cake\n/g/148669/ - Ohime-sama Gokko\n/g/144806/ - Youkai Watching\n/g/163698/ - Escalation\n/g/158559/ - Jiyuu de Kimama na Ore no Imouto\n/g/182210/ - Hatsujou Days\n/g/131428/ - Having Fun With The One That I Love\n/g/112853/ - Boku to Oneesan no Naisho\n/g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1\n/g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2\n/g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3\n/g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4\n\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532\n‌88323 272117 170213 256613\n‌258382 224942\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n● Milf ●\n165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,19055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n● Random ●\n257892 226942 236297 216039 221711 245304 166174 175220\n\n107817 MASTURBATION MAID\n181008 MATING ONI DAUGTHER\n183714 MATING ONI MOTHER\n230041 MICRO BIKINI LOLI\n114883 OREIMO COLORED\n146595 YOU DAMN COWARD\n197074 RECO SEKU\n245855 ONI REM BOOK\n51332 JURI GAME\n251067 LOLI ONSEN\n127894 AIKATSU SUMMER IDOL\n118282 YUKINYA! \n94579 ANO NATSU OKINAWA\n123554 TEISOU KANNEN ZERO\n206250 NAKED SWIMMING CLASS\n258972 NAKED SWIMMING CLASS 2\n75165 GIRLS IN THE FRAME\n85289 CAST AOI\n217410 SEIKATSU SHUUKAN\n102839 THE LIGHT OF TSUKIMI MANOR \n123450 THE SEX LIFE OF TACHIBANAS\n228433 SAEKANO MEGURI\n254730 NAKED RANDOSERU MEET-UP\n200855 I SAVED AN ELF LOLI\n225792 I SAVED AN ELF LOLI 2\n194036 PLAYING SHOP\n79081 AZUSA ATTACK 1\n79181 AZUSA ATTACK 2\n107668 AZUSA ATTACK 3\n245000 AZUSA ATTACK 4\n234741 TANAKA'S SISTER'S SECRET \n256161 SCHOOLGIRLS' BREAST EXPOSED\n254838 GUILD GIRL AND GOBLIN SLAYER\n258741 ARCHWIZARD EXPLOSION MAGIC\n175399 GIVING SOMETHING TO MEGUMIN\n214111 MC GAKUEN\n127981 MY NEIGHBOR RINA\n73758 KURONEKO YUKATA\n62886 KURONEKO COSPLAY\n110648 BATTLE OF KURONEKO\n256857 GIRLFRIEND, BOYFRIEND, MANAGER \n262664 GIRLFRIEND, BOYFRIEND, MANAGER 2\n178983 WE FUCKED LIKE RABBITS\n264018 YET INNOCENT MAIDEN\n168120 SHORT PANTS AND OTHERS\n112373 POPULARITY OF SHORT PANTS\n201031 TRAUMEREI\n150933 HELLO LOLITA! \n233766 HELPFUL MOTHER\n207964 BROTHER SISTER MAKE PROPER LOVE\n142825 A CERTAIN VILLAGE CUSTOM\n182290 HERO, DEMON QUEEN AND HER ELF\n225904 BOOBS AS REWARD \n Your welcome\n\n177013\n192503\n221793\n236739\n238212\n98872\n211955\n215600\n4299\n\nLevi x Eren\n113999\n115176\n171898\n172193 \n\n246422\n238357\n234344\n234343\n234342\n234341\n108534 \n116042 \n247998 \n161595 \n116042 \n108534 \n108836 \n247998 \n1611595 \n136640 \n129367 \n108285 \n106001 \n99497 \n95549 \n95551 \n106578 (ErwinLevi)  \n\nKuroo x Tsuki\n152148 \n151272 \n153909 \n302818 \n218563 \n178137 \n175937 \n218562 \n195777 \n183950 \n176020 \n175291 \n171342 \n\nKageyama x hinata\n274661 \n284411 \n285694 \n292746 \n287892 \n316473 \n327420 \n327418 \n327417 \n327416 \n327415 \n327414 \n323519 \n316473 \n305446 \n292746 \n285694 \n284411 \n274661 \n274659 \n333669 \n275085 \n251023 \n251016 \n148726 \n333680 \n327423\n\n\nDaisuga\n271811 \n271286 \n\nIwaoi\n327578 \n153136 \n\nKuroken\n161325\n84088 \n\n4some(kuroo kenma akaashi bokuto)\n151448 \n\nLevi x eren\n32485,\n310255\n294610\n274881\n273534\n269851\n268656\n254943\n248084\n247632\n238357\n234344\n244183\n219038\n218264\n\n\nDaichi x suga\n271811 \n271289 \n271122 \n271120 \n271039 \n200674 \n\nRandom? \n\n229144 \n253687 \n238577 \n236509\n227675 \n229085 \n233245 \n266177\n254351 \n265855 \n239842 \n219847\n239749 \n230566 \n253104 \n230185\n251974 \n253091 \n251489 \n\nlevi x eren\n32485\n310255\n294610\n274881\n273534\n269851\n268656\n254943\n248084\n247632\n238357\n234344\n244183\n219038\n218264\ndaichi x suga\n271811\n271289\n271122\n271120\n271039\n200674 \n\n04106 \n302337 \n302336 \n302299 \n298513 \n308231 \n308352 \n308338 \n308461 \n165820 \n165325 \n164330 \n169738 \n\nLevi x Eren\n113999\n115176\n171898\n172193 \n\n-UshiOi\n237020\n214644\n175779\n175341\n163924\n158247\n149548 \n\n-TakeUkai\n279058\n279056\n278982\n278980\n157134\n149029\n146455\n137074\n137075 \n\n-BokuAka\n237090\n182354\n178138\n176030\n175937\n175947\n175868\n175323\n175432\n175277\n172508\n163922\n163057\n161327\n158239\n160701\n159164\n158721\n158717 \n\n-IwaOi\n327578\n327331\n308339\n271119\n244087\n218564\n237020\n235171\n184659\n183519\n183448\n183032\n182329\n182344\n182311\n175994\n175779\n175488\n176041\n163410 \n\n-KageHina\n133302\n148726\n224883\n327423\n327418\n305446\n327420\n327414\n327416\n327417\n324715\n323519\n316473\n333680\n287892\n274762\n274661\n274659\n274616\n275085 \n\n-KuroKen\n161325\n158714\n151448\n149795\n139068\n134292\n129887\n129881\n112292\n149795\n84088\n84087\n154795\n151130\n143097\n120887 \n\n-AsaNoya\n275730\n274872\n274754\n274434\n271124\n184005\n176150\n178193\n139225 \n\n-OiKage\n274750\n254932\n254931\n254930\n254928\n157918\n137077\n254927\n237263\n135956\n195844\n162041\n162041\n161326\n130252\n160665\n129321\n129322\n128471\n128708\n\n\n274750\n254932\n254931\n254930\n254928\n137077\n157918\n254927\n237263\n135956\n195844\n162041\n161326\n130252\n160665\n207706 \n239849 \n309415 \n\n89609 \n329503 \n257001 \n182132 \n327652 \n317063 \n310868 \n276794 \n302249 \n294167 \n332982 \n332438 \n332079 \n331787 \n333223 \n333385 \n333260 \n302818 \n193665 \n257001 \n184559 \n\n331672 \n331684 \n327423 \n305446 \n2718111 \n271286 \n329642\n234261 \n331416 \n314397 \n325041 \n\n327228 \n321936 \n327331 \n316473 \n274661 \n308352 \n308338 \n308461 \n218302 \n217639 \n207705 \n205268 \n147078 \n140418 \n124905 \n127097 \n110245 \n191561 \n174886 \n206769 \n260791 \n\nerwinxlevi\n108534 \n116042 \n247998 \n161595 \n\n#Ereri#\n108534 \n108836 \n247998 \n1611595 \n136640 \n129367 \n108285 \n99497 \n106578\n95549 \n116042 \n108534 \n\n(luffy x zoro)\n276625\n218785\n195483\n175760\n152716\n137939\n133447\n53932 \n\n(levi x eren)\n268655\n268654\n248084\n247777\n247626\n246422\n238357\n234344\n234343\n234342\n234341\n234340\n234340\n234339\n324853\n324397\n311089\n310971\n294610\n211177\n213903\n274881\n274878\n274780\n271722\n269855\n269850\n269847\n269844\n269845\n269843\n269846\n310255\n273552\n172193\n234338\n234323\n229579\n225407\n219038\n218264\n218263\n216277\n216269\n216266\n215959\n215956\n215445\n215444\n215443\n269849\n269848\n268656 \n\nbokuaka\n176030\n175937\n175868\n175323\n175432\n163057\n161327\n160701\n158239\n182354\n178138\n175277\n175208\n16305 \n\niwaoi\n327578\n327331\n271119\n244087\n237020\n235171\n184659\n183519\n183448\n183032\n182329\n182344\n182311\n175994\n175779\n153136 \n\n207405 \n270424 \n270975 \n257888 \n118840 \n247134 \n193759 \n176367 \n155415 \n246232 \n198315 \n122697 \n308637 \n289060 \n286129 \n281415 \n280662 \n275327 \n260111 \n260088 (yaoi) \n\n(oikage)\n274750\n254932\n254931\n254930\n254928\n157918\n137077\n254927\n237263\n135956\n195844\n162041\n162041\n161326\n130252\n160665\n129321\n129322\n128471\n128708 \n\nkarma x nagisa\n309415\n239849\n207706\n191120\n179335\n150256, 141717, 218080, 150257 \n\n(tododeku)\n308352\n30`)
            nao.sendText(from, `*Loli*\n207405    270424   270975   257888\n118840    247134   193759   176367\n155415    246232   198315   122697\n*Happy Mother's Day* 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah\n\n*Random*\n 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554\n\n*yg suka onee san*\n189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144121 166315 197350 2611 19157 247791 239595 50074 1235 135474 258965 262816 195747 242247 252913 149760 139983 114692 151132 152089 144481 201031 169585 198203 240330 236896 88670 254499 169585 196783 194443 59284 249265 62287 166985\n\n\n\n*BERBAGI ITU INDAH*\n[22/12 20.23] Galang: Doujindesu.pw\nTsumino.com\nNhentai.com\nErolord.com\nHbrowse.com\nMelonbooks.com\nHentaifox.com\n1piecehentai.com\n2th.me\n69ani.me\naerisdies.com\nallhentai.ru\nanimefootfetish.blogspot.ca\nanimehentaimangas.com\nanimephile.com\natsuifeet.blogspot.nl\nbrasilhentai.com\nclickhentai.org\ncodegeassxxx.com\ncolorhentaimangas.com\ncomicsfromhell.org\ncomixhere.ru\ndeliciousdoujinshi.com\ndochentai.com\ndojin2.com\ndoujin-moe.us\ndoujin-th.com\ndoujindaily.com\ndoujinland.com\ndoujinlife.com\ndoujinloverandgiver.tumblr.com\ndoujinpage.com\ndoujinreader.com\ndoujinroom.com\ndoujins.org\ndoujinshihentai.com\ndoujinx.net\ne-hentai.org\necchitail.blogspot.com\nero-senin.pl\nerolord.com\neshentaionline.com\nexhentai.org\nfakku.net\nff10hentai.com\nff12hentai.com\nff7hentai.com\nfinalxxxfantasy.com\nfuraffinity.net\nfutahentai.com\nfutanarisplash.com\ng.e-hentai.org\ng6hentai.com\ngurrenhentai.com\nhakihome.com\nhbrowse.com\nhcomicbook.com\nhdarkzone.com\nhentai-id.tv\nhentai-ita.com\nhentai-manga.net\nhentai.ms\nhentai.pink\nhentai.tl\nhentai2read.com\nhentai4.me\nhentai4doujin.com\nhentai4manga.com\nhentai4u.org\nhentai666.com\nhentaibeast.com\nhentaibox.fr\nhentaibunny.com\nhentaibusty.com\nhentaichan.ru\nhentaifamed.com\nhentaifield.com\nhentaifr.net\nhentaifromhell.org\nhentaigamecg.com\nhentaigratuit.org\n[22/12 20.23] Galang: NekoPoi\n\nhttps://www61.zippyshare.com/v/iX3aUuzg/file.html\n\nName: [NekoPoi]_Rape_Gouhouka_-_01_[360P]_[nekopoi.care].mp4. Size: 26.59 MB Uploaded: 15-09-2018 21:32. AddThis Sharing Buttons. Share to ...\n\nNekoPoi\n\nhttps://www84.zippyshare.com/v/OO5rdoHK/file.html\n\nName: [NekoPoi]_Kami-machi_Sana-chan_The_Animation_-_01_[360P]_[nekopoi.care].mp4. Size: 49.63 MB Uploaded: 23-02-2019 20:34. AddThis Sharing ...\n\n[NekoPo]_Kimi_Omou_Koi_-_01_[480P]_[nekopoi.care]\n\nhttps://www4.zippyshare.com/v/yU8UMi4U/file.html\n\nDec 21, 2018 ... You have requested the file: Name: [NekoPo]_Kimi_Omou_Koi_-_01_[480P]_[ nekopoi.care]_0.mp4. Size: 50.26 MB Uploaded: 21-12-2018 18: ...\n\nNekoPoi\n\nhttps://www37.zippyshare.com/v/unm0ciHJ/file.html\n\nName: [NekoPoi]_FOW-013_First_Assembly_[360P][nekopoi.care].mp4. Size: 59.28 MB Uploaded: 05-11-2018 13:28. AddThis Sharing Buttons. Share to ...\n\n[NekoPoi]_GSXXoTD_-_01_[360P]_[nekopoi.care ... - Zippyshare.com\n\nhttps://www1.zippyshare.com/v/ueg6Tt8l/file.html\n\nName: [NekoPoi]_GSXXoTD_-_01_[360P]_[nekopoi.care].zip. Size: 55.43 MB Uploaded: 13-06-2019 13:44. Last download: 29-09-2019 22:39. AddThis Sharing ...\n\nShoujo_Kyouiku_02[480P][nekopoi.care].\n\nhttps://www66.zippyshare.com/v/nyaoaNZ6/file.html\n\nApr 1, 2019 ... The media could not be loaded, either because the server or network failed or because the format is not supported. Foreground.\n\n[nekopoi.care].\n\nhttps://www67.zippyshare.com/v/5K413qJw/file.html\n\nMay 22, 2019 ... Name: [NekoPoi]_Araiya-san__Ore_to_Aitsu_ga_Onnayu_de__-_08_[480P]_[ nekopoi.care].mp4. Size: 17.99 MB Uploaded: 22-05-2019 22: ...\n\n[480P]_[nekopoi.care].mp4\n\nhttps://www40.zippyshare.com/v/Rm8Q5FAb/file.html\n\nDec 25, 2018 ... The media could not be loaded, either because the server or network failed or because the format is not supported. Foreground.\n\n[360P]_[nekopoi.care].\n\nhttps://www23.zippyshare.com/v/NGGKwMYg/file.html\n\nMar 16, 2019 ... The media could not be loaded, either because the server or network failed or because the format is not supported. Foreground.\n\n[NekoPoi]_Sakuramiya_Shimai_no_Netorare_Kiroku_-_01_[480P]\n\nhttps://www58.zippyshare.com/v/6oowFahp/file.html\n\nName: [NekoPoi]_Sakuramiya_Shimai_no_Netorare_Kiroku_-_01_[480P]_[nekopoi.care].mp4. Size: 53.73 MB Uploaded: 24-06-2019 06:45. AddThis Sharing ...\n[22/12 20.23] Galang: ● CODE NUKLIR ●\n‌229144 253687 238577 236509\n‌227675 229085 233245 266177\n254351 265855 239842 219847\n239749 230566 253104 230185\n251974 253091 251489 238030\n260614 245023 232887 233547\n262158 262870 239312 255129\n244530 246963 256050 215459\n243725 233770 250704 261819\n261830 215658 256404 260028\n261789 241254 268580 262407\n262252 201814 250193 236036\n262889 243933 245697 239750\n128983 95364 223815 225080\n110332 225767 97247 231139\n266116 217037 160657 182439\n205089 176495 199121 199425\n184068 186615 224644 129479\n251524 153374 146499 258212\n163532 255244 269825 235914\n247103 138365 124624 219718\n168941 265918 205995 191390\n‌225496 259137 231681 161688\n‌199613 259260 260433 235532 \n‌88323 272117 170213 256613\n‌258382 224942\n\n/g/181556/ - Fudeoro Sisters\n/g/152456/ - Mou Teitoku No Soba \n/g/167936/ - Inma Mo Mikata\n/g/139048/ - shojo soushitsu\n/g/185592/ - Gensoukyou Rakuenka Keikaku 11\n/g/191427/ - Kousei Iinkai\n/g/175015/ - Sister Breeder\n/g/142825/ - A Certain Village\n/g/182290/ - A hero taken prisoner\n/g/192845/ - Toaru Natsu\n/g/192849/ - Toaru Fuyu\n/g/183099/ - Adolescent calculation\n/g/192143/ - Blonde no koigokoro\n/g/142825/ - Toaru mura no Fudeoroshi Jijou\n/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!\n/g/158404/ - Kusogaki\n/g/136026/ - Megaflower x flower\n/g/188918/ Kodomo no Ecchi\n/g/193876/ - Razoku no Yoru\n/g/193984/ - Houkago Rendezvous\n/g/76119/ - Broadcast Girlfriend\n/g/192874/ - Koyomi Fechi\n/g/107180/ - Harem Bukai no Boku\n/g/110900/ - Kiniro\n/g/135193/ - It's my win!\n/g/161488/ - Shota Teitoku to Nyuukyo Time\n/g/65433/ - Jirettai no Yo!\n/g/182327/ - Sakeno Seiton\n/g/78651/ -  Harem Time\n/g/190230/ - Boku no Bimama\n/g/191880/ - Sanae Hamaru\n/g/180600/ - Sakaki-san Satisfaction\n/g/105465/ - Sakaki-san Franchise\n/g/173023/ - Tiny Evil\n/g/191049/ - Kono Suba 1\n/g/191851/ - Kono Suba 2\n/g/167112/ - i'll be your cat\n/g/177754/ - Sloppy Sister\n/g/187016/ - Nanyou no Vacances Sakusen\n/g/165961/ - Love-ridden\n/g/165962/ - Pandemonium\n/g/97879/  - Natsuyasumi\n/g/74500/ - Nee-chan no yobanaide\n/g/133435/ - Spirited Girl\n/g/152075/ - Trick And Treat\n/g/174888/ - Razoku No Yoru\n/g/93354/ - Melty Play\n/g/74076/ - BAD COMMUNICATION\n/g/122948/ - PLAY BACK\n/g/104346/ - Funky Glamourous\n/g/91773/ - Good Times!!\n/g/78226/ - Practice Game\n/g/76482/ - JOINT\n/g/68508/ -  Kimi ga iru nara\n/g/61224/ - Way back to the future\n/g/60473/ - Hoshi ni negai o\n/g/58469/ - Splash\n/g/56295/ - Heat Island\n/g/53905/ - I Beg You\n/g/42383/ - Rumors\n/g/187611/ - My Dear Maid\n/g/190846/ - Tsukimi Dango\n/g/158050/ - Muchimuchi\n/g/83269/ - Only a taste for Onee-Chan\n/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku\n/g/178941/ - Kodomo-Sensei\n/g/100401/ - Sister paradise\n/g/35240/ - Eiken Lovers\n/g/77415/ - Koinaka\n/g/190900/ - Grazero Fantasy\n/g/161819/ - Night Of Incest\n/g/151132/ - Pet Na Ane No Shitsukekata\n/g/147585/ - Anetsun Summer!\n/g/136908/ - Man x Koi\n/g/112907/ - Imouto x Swimming!\n/g/125392/ - Joubutsu!\n/g/174463/ - Hotizuma Miyuki-San\n/g/159290/ - Mister Mistake\n/g/137953/ - Hotondo Byouki\n /g/114053/ - Unknown Title \n /g/78818/ - Furofuro!\n /g/15055/ - Demodori Mama\n /g/39876/ - Cherry Break\n /g/191427/ - Doutei Danshi Kousei Iinkai\n /g/192695/ - Costte Asobo.\n /g/192330/ - Level 1\n /g/191320/ - Kimi Ni Nara Dekiru\n /g/164434/ - MIDNIGHT PRINCESS\n /g/76813/ - Superior Cake\n /g/148669/ - Ohime-sama Gokko\n /g/144806/ - Youkai Watching\n /g/163698/ - Escalation\n /g/158559/ - Jiyuu de Kimama na Ore no Imouto\n /g/182210/ - Hatsujou Days\n /g/131428/ - Having Fun With The One That I Love\n /g/112853/ - Boku to Oneesan no Naisho\n /g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1\n /g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2\n /g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3\n /g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4\n \n ‌229144 253687 238577 236509\n ‌227675 229085 233245 266177\n 254351 265855 239842 219847\n 239749 230566 253104 230185\n 251974 253091 251489 238030\n 260614 245023 232887 233547\n 262158 262870 239312 255129\n 244530 246963 256050 215459\n 243725 233770 250704 261819\n 261830 215658 256404 260028\n 261789 241254 268580 262407\n 262252 201814 250193 236036\n 262889 243933 245697 239750\n 128983 95364 223815 225080\n 110332 225767 97247 231139\n 266116 217037 160657 182439\n 205089 176495 199121 199425\n 184068 186615 224644 129479\n 251524 153374 146499 258212\n 163532 255244 269825 235914\n 247103 138365 124624 219718\n 168941 265918 205995 191390\n ‌225496 259137 231681 161688\n ‌199613 259260 260433 235532\n ‌88323 272117 170213 256613\n ‌258382 224942 281261\n\n━`)
            break
            // INFORMATION
        case prefix+'donate':
	    case prefix+'donasi':
            nao.sendText(from, sumbang)
            break
        case prefix+'readme':
            nao.reply(from, readme(prefix), id)
            break
        case prefix+'info':
            const speedcmdinfo = moment() / 1000 - t
            const formatcmdinfo = sizeFormatter({
                std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
                decimalPlaces: 2,
                keepTrailingZeroes: false,
                render: (literal, symbol) => `${literal} ${symbol}B`,
            })
            const ramusageinfo = `${formatcmdinfo(os.totalmem() - os.freemem())} / ${formatcmdinfo(os.totalmem())}`
            nao.sendText(from, info(ramusageinfo, speedcmdinfo))
            break
        case prefix+'bahasa':
            nao.reply(from, bahasalist, id)
            break
// By Gimenz
        case prefix+'wame':
            if(args.length >= 2) {
                const kata2 = body.slice(6)
                await nao.reply(from, `*${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}?text=${kata2.replace(' ', '%20')}*\n\n*Atau*\n\n*api.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}&text=${kata2.replace(' ', '%20')}*`, id)
            } else if (args.length == 1) {
                await nao.reply(from, `*${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}*\n\n*Atau*\n\n*api.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}*`, id)
            }
            break
// By Gimenz
        case prefix+'snk':
            nao.reply(from, snk, id)
            break
        //Test command
        case prefix+'test3581':
            if(!isOwner) return
            if(args[1] < 3) {
                nao.reply(from, '1', id)
            } else if(args[1] > 4) {
                nao.reply(from, '2', id)
            } else if(args[1] > 2) {
                nao.reply(from, '3', id)
            }
            break
        /*case prefix+'test7514':
            const test7514f = levelExports.getLevelingXpExport(sender.id)
            nao.reply(from, `xp: ${levelExports.getLevelingXpExport(sender.id)}`, id)
            break*/
        case prefix+'test67658':
            if(body.includes('halo')) {
                nao.reply(from, 'y', id)
            } else {
                nao.reply(from, 'no', id)
            }
            break
        case prefix+'test9789':
            nao.reply(from, `${getLevelAntiSpamCount(sender.id)}`, id)
            if(isSpamLevel) {
                nao.reply(from, 'Spam : True', id)
            } else if(!isSpamLevel) {
                nao.reply(from, 'Spam : False', id)
            }
            break
        case prefix+'databaseuser':
            nao.reply(from, `Jumlah User: ${_userRegister.length}`, id)
            //const userDatabasev = JSON.parse(fs.readFileSync('./lib/database/bot/userDatabase.txt'))
            //const userReg_ = fs.readFileSync('./lib/database/user/userreg.json')
            //await fs.writeFileSync('./lib/database/bot/userDatabase.txt'), JSON.stringify(userReg_)
            //await userDatabasev.push(userReg_)
            await fs.unlinkSync('./lib/database/bot/userDatabase.txt')
            fs.copyFileSync('./lib/database/user/userreg.json', './lib/database/bot/userDatabase.txt')
            nao.sendFile(from, './lib/database/bot/userDatabase.txt', 'userDatabase.txt', '', id)
            break
        default:
            //if (!isGroupMsg) return nao.reply(from, 'Jika Ingin Menggunakan Bot Harap Masuk Ke Dalam Grup Saya, Link Ada Di Bio atau Bisa Mengetik '+prefix+'Sayagroup!\nAtau Invite Saya Di Group Kamu\nDengan Cara *'+prefix+'join*', id)
            if (command.startsWith(prefix)) {
                nao.reply(from, `Maaf ${pushname}, Command *${args[0]}* Tidak Terdaftar Di Dalam *${prefix}help*\n_Hindari command yang tidak ada, atau kamu akan terkena *BANNED*_`, id)
                const cmdan = args[0]
                await addCmd(sender.id, time, cmdan)
                if(iscmdabai) await CmdAddJum(serial)
            }
            nao.sendSeen(from) 
	    //nao.deleteChat(from)
            }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //nao.kill().then(a => console.log(a))
    }
}