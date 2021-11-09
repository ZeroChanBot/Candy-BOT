const fs = require('fs-extra')

const setRpgUserStat = (userId, _dir) => {
    const obj = { id: userId, level: 1, xp: 0, coin: 0, /*hero: ""*/ head: "", chest: "", sword: "", shield: "", shoes: "" }
    _dir.push(obj)
    fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
}
//LEVEL
const addLevel = (userId, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].level += 1
        fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
    }
}

const getLevel = (userId, _dir) => {
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
//XP
const addXp = (userId, amount, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].xp += amount
        fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
    }
}

const getXp = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].xp
    }
}
//COIN
const addCoin = (userId, amount, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].coin += amount
        fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
    }
}

const minCoin = (userId, amount, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].coin -= amount
        fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
    }
}

const getCoin = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].coin
    }
}
//HERO & HERO HAVE
const addHero = (userId, heroadd, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].hero += ','+heroadd
        fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
    }
}

const getHero = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].hero
    }
}

const addHeroHave = (userId, herohadd, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].heroh += ','+herohadd
        fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
    }
}

const getHeroHave = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].heroh
    }
}
//STAMINA //Close
/*const addStamina = (userId, amount, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].stamina += amount
        fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
    }
}

const minStamina = (userId, amount, _dir) => {
    let position = false
        Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _dir[position].stamina -= amount
        fs.writeFileSync('./lib/database/rpg/user/userstat.json', JSON.stringify(_dir))
    }
}

const getStamina = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].stamina
    }
}*/
//DATABASE HERO
const addHeroSAO = (id, nama, hp, atk, langka, _dir) => {
    const obj = { id: id, img: 0, nama: nama, hp: hp, atk: atk, langka: langka }
    _dir.push(obj)
    fs.writeFileSync('./lib/database/rpg/herostat/SAO/stat.json', JSON.stringify(_dir))
}

const addHeroMaGakuin = (id, nama, hp, atk, _dir) => {
    const obj = { id: id, img: 0, nama: nama, hp: hp, atk: atk }
    _dir.push(obj)
    fs.writeFileSync('./lib/database/rpg/herostat/MaouGakuin/stat.json', JSON.stringify(_dir))
}

const getHeroImg = (kid, _dir) => {
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

const getHeroNama = (kid, _dir) => {
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

const getHeroHp = (kid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === kid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].hp
    }
}

const getHeroAtk = (kid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === kid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].atk
    }
}
module.exports = {
    setRpgUserStat,
    addLevel,
    getLevel,
    addXp,
    getXp,
    addCoin,
    minCoin,
    getCoin,
    addHero,
    getHero,
    addHeroHave,
    getHeroHave,
    addStamina,
    minStamina,
    getStamina,
    addHeroSAO,
    addHeroMaGakuin,
    getHeroImg,
    getHeroNama,
    getHeroHp,
    getHeroAtk
}