export enum Sugerencias {
    "perfil" = "perfil",
    "user" = "user",
    "infouser" = "infouser",
}

class MySugerencias extends HTMLElement{
    perfil? : string;
    user? : string;
    infouser? : string;

    static get observedAttributes(){
        const attrs: Record<Sugerencias,null> = {
            perfil : null,
            user : null,
            infouser : null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Sugerencias, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            switch (propName) {
            
                default:
                    this[propName] = newValue;
                    break;
            }

            this.render();
    }

    render(){
        
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Sugerencias/style.css"
            <section>
            <image class="perfil" src="${this.perfil}" alt="Foto de perfil sugerencias"></image>
                <h1 class="user">${this.user}</h1>
                <h1 class="infouser">${this.infouser}</h1>
                <h1 class="cambio">Seguir</h1>
            </section>
            `;
        }
    }

}

customElements.define("my-sugerencias", MySugerencias);
export default MySugerencias;