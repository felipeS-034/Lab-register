class MySugerencia extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/Mesugerencia/style.css"
            <section>
                <div class="cuadradoPrincipal">
                    <img class="userimg" src="./assets/Post/Users/user.png" alt="Imagen de tu usuario"></img>
                    <h1 class="user">andres_santacruz03</h1>
                    <p class="infouser">Andrés Felipe Santacruz Zamora</p>
                    <p class="cambio">Cambiar</p>
                    <p class="massuges">Sugerencias para ti</p>
                    <p class="todo">Ver todo</p>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-sugerencia", MySugerencia);
export default MySugerencia;
