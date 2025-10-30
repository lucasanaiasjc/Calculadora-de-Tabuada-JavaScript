export default {
    el(type, parent = null, text = null, attr = {}, style = {}) {
        const e = document.createElement(type)
        if (parent) parent.append(e)
        if (text !== null) e.textContent = text
        if (style) Object.keys(style).forEach(key => {
            if (typeof e.style[key] !== 'undefined') {
                e.style[key] = style[key]
            }
        })
        Object.keys(attr).forEach(key => {
            e.setAttribute(key, attr[key])
        })
        return e
    }
}
