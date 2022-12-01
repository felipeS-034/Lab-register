export var Attribute;
(function (Attribute) {
    Attribute["imageprofile"] = "imageprofile";
    Attribute["nameuser"] = "nameuser";
    Attribute["location"] = "location";
    Attribute["imagecontent"] = "imagecontent";
    Attribute["likes"] = "likes";
    Attribute["comentuser1"] = "comentuser1";
    Attribute["comentuser2"] = "comentuser2";
    Attribute["viewcoments"] = "viewcoments";
    Attribute["fecha"] = "fecha";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            imageprofile: null,
            nameuser: null,
            location: null,
            imagecontent: null,
            likes: null,
            comentuser1: null,
            comentuser2: null,
            viewcoments: null,
            fecha: null,
        };
        return Object.keys(attrs);
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
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Profile/style.css"
            <section>
                <div class="cartapost">
                    <image class="points"src="./assets/Post/botones/3points.png" alt="Boton opciones"></image>
                    <image class="Corazon" src="./assets/Post/botones/like.png" alt="Boton like"></image>
                    <image class="compartir" src="./assets/Post/botones/Share.png" alt="Boton compartir"></image>
                    <image class="coment" src="./assets/Post/botones/Comments.png" alt="Boton comentario"></image>
                    <image class="guardar" src="./assets/Post/botones/Save.png" alt="Boton guardar post"></image>
                    <image class="cont" src="./assets/Post/botones/contenido.jpg" alt="Botones deslizar"></image>

                    <img class="perfil"src="${this.imageprofile}" alt="Foto perfil usuario"></img>
                    <h1 class="nameuser">${this.nameuser}</h1>
                    <h1 class="location ">${this.location}</h1>
                    <image class="contenido"src="${this.imagecontent}" alt="Imagen de contenido"></image>
                    <h1 class="like"><b>${this.likes} Likes</b></h1>
                    <h1 class="comentuser"><b>${this.comentuser1}</b> ${this.comentuser2}</h1>
                    <h1 class="views">${this.viewcoments}</h1>
                    <h1 class="day">${this.fecha}</h1>
              </div>
          </section>
            `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
