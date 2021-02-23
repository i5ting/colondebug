const Debug = require('debug')

module.exports = function (key) {
    var operation = key.split(':').pop()
    var debug = Debug(key)

    if (Object.keys(console).includes(operation)) {
        debug = console[operation]
    }

    return debug
}