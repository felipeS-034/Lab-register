class MyEncabezado extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const createPostButton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#create-post");
        createPostButton === null || createPostButton === void 0 ? void 0 : createPostButton.addEventListener('click', () => {
            console.log('From Menu');
            const event = new CustomEvent("to-create-post", { composed: true });
            this.dispatchEvent(event);
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href=" ./components/Encabezado/style.css"
            <section>
            <div class= "rectanguloup">
                <image class="logoig" src="./assets/Encabezado/Instagram.png"></image>
                <image class="explore" src="./assets//Encabezado/Explore.png"></image>
                <image class="Home" src="./assets/Encabezado/Home.png"></image>
                <image class="Like" src="./assets/Encabezado/Like.png"></image>
                <image class="Mensaje" src="./assets/Encabezado/Mensajes.png"></image>
                <image class="Newpost" src="./assets/Encabezado/New.png"></image>
                <image class="User" src="./assets/Encabezado/user.png"></image>
                <image class="search" src="./assets/Encabezado/Search.png"></image>
                </div>

            </section>
            `;
        }
    }
}
customElements.define("my-encabezado", MyEncabezado);
export default MyEncabezado;
