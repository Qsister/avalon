
function VComment(text) {
    if (typeof text === 'string') {
        this.type = '#comment'
        this.nodeValue = text
        this.skipContent = true
    } else {
        for (var i in text) {
            this[i] = text[i]
        }
    }
}
VComment.prototype = {
    constructor: VComment,
    clone: function () {
        return new VComment(this)
    },
    toDOM: function () {
        return document.createComment(this.nodeValue)
    },
    toHTML: function () {
        return '<!--' + this.nodeValue + '-->'
    }
}

module.exports = VComment