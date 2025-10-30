import helper from "./helper.js"

function ViewComponent(parent) {
    return {
        root: null,
        parent: parent,
        inputNumber: null,
        render() {
            this.renderHeader()
            this.renderForm()
            this.renderResult()
        },
        /**
         * CABEÇALHO DA PAGINA
         */
        renderHeader() {
            this.root = document.getElementById('view_component')
            if (!this.root) this.root = helper.el('header', this.parent, null, {
                'id': 'view_component'
            })
            else this.root.innerHTML = ''
            const h1 = helper.el('h1', this.root, "Calculadora de Tabuada", {}, {
                fontWeight: 'normal',
                fontSize: '20px',
                textAlign: 'center',
                padding: '1em',
                marginTop: '1px',
                borderBottom: '1px solid #999'
            });
        },
        /**
         * FORMULÁRIO PARA ENTRADA DO NÚMERO
         */
        renderForm() {
            const control = helper.el('div', this.root, null,
                { 'id': 'control' },
                { backgroundColor: '#F5F5F5' }
            )
            // 
            const form = helper.el('form', control, null, {}, {
                padding: '1em 0.5em'
            })
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
            }, { width: '40px' })
            // 
            this.inputNumber.addEventListener('change', (e) => {
                // garantir valor entre 1 e 10
                e.target.value = Math.min(Math.max(e.target.value, 1), 10)
                this.renderResult()
            })
        },
        /**
         * RESULTADO DA TABUADA
         */
        renderResult() {
            let t = this, div = document.querySelector('#view_component-renderResult')
            if (!div) {
                div = helper.el('main', this.parent, null,
                    { 'id': 'view_component-renderResult' },
                    { display: 'flex' }
                )
            }
            else div.innerHTML = ''
            /**
             * OPÇÕES DE TABUADA
             */
            function Left(_parent) {
                const ul = helper.el('ul', _parent, null, {},
                    { listStyle: 'none' }
                )
                // 
                for (let x = 1; x < 11; x++) {
                    let li = helper.el('li', ul, `Tabuado do ${x}`, {},
                        { padding: '0.5em' }
                    )
                    if (x == parseInt(t.inputNumber.value)) li.classList.add('itemSelected')
                    else li.classList.add('item')
                    li.addEventListener('click', () => {
                        t.inputNumber.value = x
                        t.renderResult()
                    })
                }
            }
            /**
             * OPERAÇÕES
             */
            function Center(_parent) {
                const ul = helper.el('ul', _parent, null, {},
                    { listStyle: 'none' }
                )
                for (let x = 1; x < 11; x++) {
                    let li = helper.el('li', ul, `${t.inputNumber.value} x ${x}`, {},
                        {
                            padding: '0.5em',
                            borderLeft: '1px solid #DDD'
                        }
                    )
                    // 
                    li.classList.add('item2')
                }
            }
            /**
             * RESULTADO DAS OPERAÇÕES
             */
            function Right(_parent) {
                const ul = helper.el('ul', _parent, null, {},
                    { listStyle: 'none' }
                )
                for (let x = 1; x < 11; x++) {
                    let li = helper.el('li', ul, `${t.inputNumber.value * x}`, {},
                        {
                            padding: '0.5em',
                            borderLeft: '1px solid #DDD'
                        }
                    )
                    li.classList.add('item2')
                }
            }

            const left = helper.el('div', div, null, {},
                { flex: '1' }
            )
            Left(left)

            const center = helper.el('div', div, null, {},
                {
                    flex: '1',
                    textAlign: 'center',
                }
            )
            Center(center)

            const right = helper.el('div', div, null, {},
                {
                    flex: '1',
                    textAlign: 'center',
                }
            )
            Right(right)
        }
    }
}

export default ViewComponent