import data from "../data.js";

export enum Attribute {
    nameuser = "nameuser",
    imageprofile = "imageprofile"
}

class MyHistorias extends HTMLElement {

    nameuser?: string;
    imageprofile?: string;
    
    static get observedAttributes() {
        const variab: Record<Attribute, null> = { nameuser: null, imageprofile:null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string, newValue: string) {
        switch (propName) {
        default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }

    render() {
        const a = data.map((profile)=> `
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