import helper from "./helper.js"

function HeaderComponent(parent) {
    return {
        root: null,
        parent: parent,
        inputNumber: null,
        render() {
            this.root = document.getElementById('view_component')
            if (!this.root) this.root = helper.el('header', this.parent, null, {
                'id': 'view_component'
            })
            else this.root.innerHTML = ''
            /**
             * CABEÇALHO DA PAGINA
             */
            const h1 = helper.el('h1', this.root, "Calculadora de Tabuada");
            h1.style.fontWeight = 'normal'
            h1.style.fontSize = '20px'
            h1.style.textAlign = 'center'
            h1.style.padding = '1em'
            h1.style.marginTop = '1px'
            h1.style.borderBottom = '1px solid #999'
            /**
             * FORMULÁRIO PARA ENTRADA DO NÚMERO
             */
            const control = helper.el('div', this.root, null, {
                'id': 'control'
            })
            control.style.backgroundColor = '#F5F5F5'
            const form = helper.el('form', control, null)
            form.style.padding = '1em 0.5em'
            const labelNumber = helper.el('label', form, 'Tabuada desejada:', {
                'for': 'number'
            })
            /**
             * INPUT NÚMERO
             */
            labelNumber.style.paddingRight = '0.5em'
            this.inputNumber = helper.el('input', form, null, {
                id: 'number',
                name: 'number',
                type: 'number',
                value: '1',
                min: '1',
                max: '10'
            })
            this.inputNumber.style.width = '40px'
            this.inputNumber.addEventListener('change', (e) => {
                this.renderResult()
            })
            /**
             * RESULTAO
             */
            this.renderResult()
        },
        renderResult() {
            /**
             * VERIFICA ELEMENTO PRINCIPAL DESTE TRECHO
             */
            let div = document.querySelector('#view_component-renderResult')
            if (!div) {
                div = helper.el('main', this.parent, null, {
                    'id': 'view_component-renderResult'
                })
                div.style.display = 'flex'
            }
            else div.innerHTML = ''
            let t = this
            /**
             * LISTA DAS TABUAIS DISPONÍVEIS
             */
            function Left(_parent) {
                const ul = helper.el('ul', _parent)
                ul.style.listStyle = 'none'
                for (let x = 1; x < 11; x++) {
                    let li = helper.el('li', ul, `Tabuado do ${x}`)
                    if (x == parseInt(t.inputNumber.value)) li.classList.add('itemSelected')
                    else li.classList.add('item')
                    li.style.padding = '0.5em'
                    li.addEventListener('click', () => {
                        t.inputNumber.value = x
                        t.renderResult()
                    })
                }
            }
            /**
             * LISTA DE OPERAÇÕES
             */
            function Center(_parent) {
                const ul = helper.el('ul', _parent)
                ul.style.listStyle = 'none'
                for (let x = 1; x < 11; x++) {
                    let li = helper.el('li', ul, `${t.inputNumber.value} x ${x}`)
                    li.classList.add('item2')
                    li.style.padding = '0.5em'
                    li.style.borderLeft = '1px solid #DDD'
                }
            }
            /**
             * LISTA DE RESULTADO DAS OPERAÇÕES
             */
            function Right(_parent) {
                const ul = helper.el('ul', _parent)
                ul.style.listStyle = 'none'
                for (let x = 1; x < 11; x++) {
                    let li = helper.el('li', ul, `${t.inputNumber.value * x}`)
                    li.classList.add('item2')
                    li.style.padding = '0.5em'
                    li.style.borderLeft = '1px solid #DDD'
                }
            }

            const left = helper.el('div', div)
            left.style.flex = '1'
            Left(left)

            const center = helper.el('div', div)
            center.style.flex = '1'
            center.style.textAlign = 'center'
            Center(center)

            const right = helper.el('div', div)
            right.style.flex = '1'
            right.style.textAlign = 'center'
            Right(right)
        }
    }
}

export default HeaderComponent