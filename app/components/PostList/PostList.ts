/*export interface InfoPostNuevos {
    nameuser: string;
    img: string;
    commnet: string;
}

class ListaPostsNuevos extends HTMLElement {

    posts: InfoPostNuevos[] = [];

    nameuser?: string;
    img?: string;
    commnet?: string;

    static get observedAttributes() {
        const variab: Record<newPost, null> = { nameuser: null, img: null, commnet: null };
        return Object.keys(variab);
    }

    attributeChangedCallback(propName: any, oldValue: string, newValue: string) {
        switch (propName) {
        default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <h1 id="nombreUsuario">${this.nameuser}</h1>
                <img id="publicacion" src="${this.img}"/>
                <p id="miComentario1">${this.commnet}</p>
            `;
        }
    }
}

customElements.define("lista-posts-nuevos", ListaPostsNuevos);
export default ListaPostsNuevos;*/