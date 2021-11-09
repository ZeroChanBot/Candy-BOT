const _colors = require('colors'),
    _$ = require('cheerio'),
    _url = require('url'),
    _axios = require('axios'),
    _math = require('mathjs')

const GetLink = async (u) => {
    console.log('⏳  ' + _colors.yellow(`Get Page From : ${u}`))
    const zippy = await _axios({ method: 'GET', url: u }).then(res => res.data).catch(err => false)
    console.log('✅  ' + _colors.green('Done'))
    const $ = _$.load(zippy)
    if (!$('#dlbutton').length) {
        return { error: true, message: $('#lrbox>div').first().text().trim() }
    }
    console.log('⏳  ' + _colors.yellow('Fetch Link Download...'))
    const url = _url.parse($('.flagen').attr('href'), true)
    const urlori = _url.parse(u)
    const key = url.query['key']
    let time;
    let dlurl;
    try {
        time = /var b = ([0-9]+);$/gm.exec($('#dlbutton').next().html())[1]
        dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (2 + 2 * 2 + parseInt(time)) + '3/DOWNLOAD'
    } catch (error) {
        time = _math.evaluate(/ \+ \((.*)\) \+ /gm.exec($('#dlbutton').next().html())[1])
        dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (time) + '/DOWNLOAD'
    }
    console.log('✅  ' + _colors.green('Done'))
    return { error: false, url: dlurl }
}

exports.GetLink = GetLink;