import data from "../data.js";
export var Attribute;
(function (Attribute) {
    Attribute["nameuser"] = "nameuser";
    Attribute["imageprofile"] = "imageprofile";
})(Attribute || (Attribute = {}));
class MyHistorias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { nameuser: null, imageprofile: null };
        return Object.keys(variab);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        const a = data.map((profile) => `
        <section>
        <img class="fotoPerfilHistorias" src="${profile.imageprofile}"/>
        <h1 class="nombreUsuarioHistorias">${profile.nameuser}</h1>
        </section>
        `);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/historias/style.css">
                <section class="rectHistorias">
                    <img class="flecha" src="./assets/Post/Users/flecha.png"/>
                    ${a.join("")}
                </section>
        `;
        }
    }
}
customElements.define("my-historias", MyHistorias);
export default MyHistorias;
