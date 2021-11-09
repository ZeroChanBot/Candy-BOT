const fs = require('fs-extra')
const lemvel = JSON.parse(fs.readFileSync('./lib/database/user/level.json'))

const getLevelingXpExport = (userId) => {
    let position = null
    Object.keys(lemvel).forEach((i) => {
        if (lemvel[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return lemvel[position].xp
    }
}

module.exports = {
    getLevelingXpExport
}