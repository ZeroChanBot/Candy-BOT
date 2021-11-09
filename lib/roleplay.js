//USER DATA
const addUserData = (userId, work, rumah, ) => {
    const obj = { id: userId, pekerjaan: work, rumah: rumah}
    _dir.push(obj)
    fs.writeFileSync('./lib/database/claim/time.json', JSON.stringify(_dir))
}