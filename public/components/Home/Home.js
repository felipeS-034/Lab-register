export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section>
        <!--<image class="pantalla" src="./assets/instagram.png"></image>-->
        <my-encabezado></my-encabezado>
        <my-sugerencia></my-sugerencia>
        </section>
        `;
    }
}
customElements.define("app-home", Home);
