export default {
    el(type, parent = null, text = null, attr = {}) {
        const e = document.createElement(type)
        if (text !== null) e.textContent = text
        if (parent) parent.append(e)
        Object.keys(attr).forEach(key => {
            e.setAttribute(key, attr[key])
        })
        return e
    }
}
