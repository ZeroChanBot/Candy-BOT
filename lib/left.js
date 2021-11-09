const fs = require('fs-extra')
const canvas = require('canvacord')
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = left = async (yui, event) => {
    const _leave = JSON.parse(fs.readFileSync('./lib/database/group/leave.json'))
    const isLeaveOn = _leave.includes(event.chat)
    console.log(event.action)
    try {
        if (event.action == 'remove' && isLeaveOn) {
            const gChat = await yui.getChatById(event.chat)
            const pChat = await yui.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await yui.getProfilePicFromServer(event.who)
            const errorImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
            if (pepe === undefined) {
                var pepep = errorImg
            } else {
                var pepep = pepe
            }
            const userId = event.who.substring(5, 9)
            var totalMem = groupMetadata.participants.length
            const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
            const rank = new canvas.Leaver()
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
            //
            rank.build()
                .then(async (buffer) => {
                    canvas.write(buffer, `${userId}.png`)
                    await sleep(5000)
                    yui.sendFile(event.chat, `${userId}.png`, `${userId}.png`, '')
                        .then(() => fs.unlinkSync(`${userId}.png`))
                })
            /*const capt = `Sayonaraaa @${event.who.replace('@c.us', '')} 👋\n\nOh ya gw titip martabak, sambal nya agak banyakan`
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
