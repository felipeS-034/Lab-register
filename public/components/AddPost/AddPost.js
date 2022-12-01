//import { addPost } from "../../services/db.js";
export class AddPost extends HTMLElement {
    constructor() {
        super();
        this.nameuser = "";
        this.imagecontent = "";
        this.comentuser2 = "";
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b, _c;
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
        const usernameInput = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#username');
        const imageInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#image');
        const commentInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#comment');
        usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.nameuser = value;
        });
        imageInput === null || imageInput === void 0 ? void 0 : imageInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.imagecontent = value;
        });
        commentInput === null || commentInput === void 0 ? void 0 : commentInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.comentuser2 = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
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
        `;
    }
}
customElements.define("app-add-post", AddPost);
