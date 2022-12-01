//import { addPost } from "../../services/db.js";

export class  AddPost extends HTMLElement{
    nameuser = "";
    imagecontent = "";
    comentuser2 = "";

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        /*const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", async ()=>{
            
            if(this.nameuser && this.imagecontent && this.comentuser2) {
                const postData = {
                    username: this.nameuser,
                    image: this.imagecontent,
                    comment: this.comentuser2
                }
                try {
                    await addPost(postData);
                    alert("Se añadio un nuevo post");

                    const event: CustomEvent = 
                    new CustomEvent("form-fullfilled",{composed: true});

                    this.dispatchEvent(event);
                } catch (error) {
                    console.error(error);
                    alert("Ocurrio un error al añadir un nuevo post ");
                }
            } else {
                alert("Missing fields");
            }
        });*/

        const usernameInput = this.shadowRoot?.querySelector('#username');
        const imageInput = this.shadowRoot?.querySelector('#image');
        const commentInput = this.shadowRoot?.querySelector('#comment');
        
        usernameInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.nameuser = value;
        });

        imageInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.imagecontent = value;
        });

        commentInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.comentuser2 = value;
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>
        <link rel="stylesheet" href="./components/Form/style.css">
            <div class="input">
                <input class="input__field" type="text" placeholder="Username" id="username"/>
            </div>
           
            <div class="input">
                <input class="input__field" type="text" placeholder="Image" id="image"/>
            </div>

            <div class="input">
                <input class="input__field" type="text" placeholder="Comment" id="comment"/>
            </div>
            
            <button type="submit">Create post</button>
            
        </section>
        `
    }
}

customElements.define("app-add-post", AddPost);