import helper from "./helper.js"
import ViewComponent from "./view_component.js"

export default {
    root: null,
    parent: null,
    render() {
        ViewComponent(this.root).render()
    },
    run() {
        window.addEventListener('load', () => {
            this.parent = document.querySelector('body')
            this.root = helper.el('div', this.parent, null,
                { 'id': 'app' },
                {
                    maxWidth: '500px',
                    margin: '0 auto',
                    border: '1px solid #DDD',
                })
            // 
            this.render()
        })
    }
}