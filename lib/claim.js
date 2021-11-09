const fs = require('fs-extra')
const toMs = require('ms')

const addTimeGroup = (groupId, kid, auth, time, _dir) => {
    const obj = { id: groupId, kid: kid, auth: auth, time: Date.now() + toMs(time), claimed: 0 }
    _dir.push(obj)
    fs.writeFileSync('./lib/database/claim/time.json', JSON.stringify(_dir))
}

const addTimeJum = (groupId, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].claimed += 1
        fs.writeFileSync('./lib/database/claim/hero.json', JSON.stringify(_dir))
    }
}

const getTimeJum = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].claimed
    }
}

const getTimeId = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].kid
    }
}

const getTimeSerial = (groupId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].auth
    }
}

const getTimePosition = (groupId, _dir) => {
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

const getTimeGroup = (groupid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === groupid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

const claimCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].time) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Time Out: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./lib/database/claim/time.json', JSON.stringify(_dir))
        }
    }, 1000)
}

//END
const addKarakter = (id, img, nama, _dir) => {
    const obj = { id: id, img: img, nama: nama }
    _dir.push(obj)
    fs.writeFileSync('./lib/database/claim/karakter.json', JSON.stringify(_dir))
}

const getKarakter = (kid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === kid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].img
    }
}

const getKarakterId = (kid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === kid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

const getKarakterNama = (kid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === kid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].nama
    }
}

//USER

const addHero = (userId, kid, nama, _dir) => {
    const obj = { id: userId, kid: kid, nama: nama, jumlah: 1}
    _dir.push(obj)
    fs.writeFileSync('./lib/database/claim/hero.json', JSON.stringify(_dir))
}

const getHero = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].kid
    }
}

const getHeroJum = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].jumlah
    }
}


const addKid = (userId, kid, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].kid += ', '+kid
        fs.writeFileSync('./lib/database/claim/hero.json', JSON.stringify(_dir))
    }
}

const addNama = (userId, nama, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].nama += ', '+nama
        fs.writeFileSync('./lib/database/claim/hero.json', JSON.stringify(_dir))
    }
}

module.exports = {
    addTimeGroup,
    addTimeJum,
    getTimeJum,
    getTimeSerial,
    getTimePosition,
    getTimeGroup,
    getTimeId,
    claimCheck,
    addKarakter,
    getKarakter,
    getKarakterId,
    getKarakterNama,
    addHero,
    getHero,
    getHeroJum,
    addKid,
    addNama
}