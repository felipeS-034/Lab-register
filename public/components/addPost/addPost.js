/*import { addPost } from "../../services/db.js";

export class CrearPosts extends HTMLElement {
    
    nameuser = "";
    image = "";
    comment = "";
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", async () => {
            if(this.nameuser && this.image && this.comment) {
                const dataPost = {
                    nameuser: this.nameuser,
                    image: this.image,
                    comment: this.comment
                }
                
                try {
                    await addPost(dataPost);
                    alert("Post creado");

                    const event: CustomEvent = new CustomEvent("crearpost-fullfilled", {
                        composed: true
                    });

                    this.dispatchEvent(event);
                } catch (error) {
                    console.error(error);
                    alert("An error occurred while creating the post");
                }
            } else {
                alert("Missing fields");
            }
        });

        const nameuserInput = this.shadowRoot?.querySelector('#nameuser');
        const imageInput = this.shadowRoot?.querySelector('#image');
        const comentarioInput = this.shadowRoot?.querySelector('#comment');
        
        nameuserInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.nameuser = value;
        });

        imageInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.image = value;
        });

        comentarioInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.image = value;
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/formulario/stylesLogin.css">
            <article class="input">
                <input id="username" type="text" placeholder="nameuser">

                <input id="publicacion" type="text" placeholder="imagen/imagen">
                <input id="comentario" type="text" placeholder="comentario">
                <button id="crear" type="submit">Crear</button>
            </article>
        `;
        }
        
    }
}

customElements.define("crear-posts", CrearPosts);*/ 
