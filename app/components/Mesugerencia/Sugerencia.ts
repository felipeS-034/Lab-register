class MySugerencia extends HTMLElement {
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/Mesugerencia/style.css"
            <section>
                <div class="cuadradoPrincipal">
                    <img class="userimg" src="./assets/Post/Users/user.png"></img>
                    <h1 class="user">andres_santacruz03</h1>
                    <h1 class="infouser">Andrés Felipe Santacruz Zamora</h1>
                    <h1 class="cambio">Cambiar</h1>
                    <h1 class="massuges">Sugerencias para ti</h1>
                    <h1 class="todo">Ver todo</h1>
                </div>
            </section>
            `;
        }
    }
}

customElements.define("my-sugerencia", MySugerencia);
export default MySugerencia;