import HeaderComponent from "./view_component.js"
import helper from "./helper.js"

export default {
    root: null,
    parent: null,
    render() {
        HeaderComponent(this.root).render()
    },
    run() {
        window.addEventListener('load', () => {
            this.parent = document.querySelector('body')
            this.root = helper.el('div', this.parent, null, {
                'id': 'app'
            })
            this.root.style.maxWidth = '500px'
            this.root.style.margin = '0 auto'
            this.root.style.border = '1px solid #DDD'
            // 
            this.render()
        })
    }
}