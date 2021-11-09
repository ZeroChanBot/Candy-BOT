const fs = require('fs-extra')
const canvas = require('canvacord')
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = welcome = async (yui, event) => {
    const _welcome = JSON.parse(fs.readFileSync('./lib/database/group/welcome.json'))
    const isWelcome = _welcome.includes(event.chat)
    console.log(event.chat)
    try {
        if (event.action == 'add' && isWelcome) {
            const gChat = await yui.getChatById(event.chat)
            const pChat = await yui.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await yui.getProfilePicFromServer(event.who)
            //
            const errorImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
            if (pepe === undefined) {
                var pepep = errorImg
            } else {
                var pepep = pepe
            }
            const userId = event.who.substring(5, 9)
            var totalMem = groupMetadata.participants.length
            const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
            const rank = new canvas.Welcomer()
                .setUsername(`@${event.who.replace('@c.us', '')}`)
                .setDiscriminator(userId)
                .setMemberCount(totalMem)
                .setGuildName(name)
                .setAvatar(pepep)
                .setColor("border", randomHex)
                .setColor("username-box", randomHex)
                .setColor("discriminator-box", randomHex)
                .setColor("message-box", randomHex)
                .setColor("title", randomHex)
                .setColor("avatar", randomHex)
            rank.build()
                .then(async (buffer) => {
                    canvas.write(buffer, `${userId}.png`)
                    await sleep(5000)
                    await yui.sendFile(event.chat, `${userId}.png`, `${userId}.png`, '')
                        .then(() => fs.unlinkSync(`${userId}.png`))
                })
            //End
            const introbang = '62813901380138-1602649004@g.us'
            if(introbang.includes(event.chat)) {
                yui.sendTextWithMentions(event.chat, 'Halo @'+event.who.replace('@c.us', '')+'\nSelamat Datang,'+ `Silahkan intro dulu\n\n 🎌 ᵃⁿʸ'ⓜⓔ ᴥ アニメ 🎌\n୨━━━━━━━◈━━━━━━━୧\n 『⚜️Formulir Intro⚜️』\n୨━━━━━━━◈━━━━━━━୧`+'\n> ```Nama``` :\n> ```Umur``` :\n> ```Gender``` :\n> ```Askot``` :\n─────────────────\nAnime Favorit :\nWaifu/Husbu :\n─────────────────\nPatuhi Rules Group\nKalo gak *KICK!*')
            }
            const _rules = JSON.parse(fs.readFileSync('./lib/database/group/rules.json'))
            const addrules = (GrupId) => {
                const obj = { id: GrupId, rules: 'Rules: Invalid, untuk setrules ketik !setrules rulesnya' }
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
            const getRulesId = (GrupId) => {
                let position = false
                Object.keys(_rules).forEach((i) => {
                    if (_rules[i].id === GrupId) {
                        position = i
                    }
                })
                if (position !== false) {
                    return _rules[position].id
                }
            }
            const geRulesnya = getrules(event.chat)
            if (geRulesnya === undefined) await addrules(event.chat)
            const rulesbang = getRulesId(event.chat)
            if(isWelcome && rulesbang.includes(event.chat)) {
                yui.sendText(event.chat, geRulesnya)
            }
            /*const capt = `Halo @${event.who.replace('@c.us', '')} 👋\nSelamat datang di *Grup ${name}*\n═══════════════════\nSelamat bergabung dan juga semoga betah disini.\n═══════════════════\n`
            if (pepe == '' || pepe == undefined) {
                await yui.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                await yui.sendFileFromUrl(event.chat, pepe, 'profile.jpg')
                yui.sendTextWithMentions(event.chat, capt)
            }*/
        }
    } catch (err) {
        console.log(err)
    }
}
