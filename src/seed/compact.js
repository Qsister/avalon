
require('./lang.fix')
var avalon = require('./core')
var browser = require('./browser')

avalon.mix(avalon, browser)

require('./lang.compact')
require('./lang.share')
require('./config')

module.exports = avalon