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
        <link rel="stylesheet" href=" ./components/Home/style.css"
        <article>
        <image class="pantalla" src="./assets/instagram.png"></image>


        </article>
        `;
    }
}
customElements.define("app-home", Home);
