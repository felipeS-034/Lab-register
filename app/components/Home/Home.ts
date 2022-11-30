import data from "../data.js";
import dataSugerencias from "../dataSugerencias.js";

export class Home extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render() {


        const compts1 = dataSugerencias.map(({ perfil, user, infouser }) => `<section>
        <my-sugerencias
        perfil="${perfil}"
        user="${user}"
        infouser="${infouser}"
        ></my-sugerencias>
        </section>
    `)
        
        
        const compts = data.map(({imageprofile, nameuser, location, imagecontent, likes, comentuser1, comentuser2, viewcoments, fecha, phtoprofile, username}) => ` <section>
            <my-profile
            nameuser="${nameuser}"
            imageprofile="${imageprofile}"
            location="${location}"
            imagecontent="${imagecontent}"
            likes="${likes}"
            comentuser1="${comentuser1}"
            comentuser2="${comentuser2}"
            viewcoments="${viewcoments}"
            fecha="${fecha}"
            phtoprofile="${phtoprofile}"
            username="${username}"
            ></my-profile>
            </section>
        `)

        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `<section>
        <my-encabezado></my-encabezado>
        <my-sugerencia></my-sugerencia>
        <my-historias></my-historias>
        ${compts1.join("")}
        ${compts.join("")}
        </section>
        `;

    }
}

customElements.define("app-home", Home);