import { addUser } from "../../services/db.js";

export class Register extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            addUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("Welcome",{
                        composed: true
                    })

                    this.dispatchEvent(event);
                }else{
                    alert("Las credenciales no coinciden");
                }
            })
        })
    }
      

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href=" ./components/Register/style.css"
        <section>
        <div class="contenedor">
            <image class="logo" src="./assets/logo.png" alt="Logo instagram"></image>
            <p class="textregister">Sing up to see photos and videos from your friends</p>
            <image class="opciones" src="./assets/botonfb.png" alt="Boton inicia con Facebook"></image>
            <h1 class="forget">¿Se te olvidó tu contraseña?</h1>
            <hr class="linea">
            <h1 class="texto">OR</h1>
            <hr class="linea2">
                
            </div>
           
            </div>


            </div>
        <div class="contenedor2">
            <h1 class="info">¿No tienes una cuenta? <font color="blue">Registrate</font></h1>
            <h1 class="descarga">Descarga la app</h1>
            <image class="descargaApp" src="./assets/linkdescarga.png" alt="Boton descargar aplicacion"></image>
        </div>

        <image class="mockup" src="./assets/telefono.png" alt="Imagen de instagrm en celular"></image>

        <app-form></app-form>
        </section>











        <!--<image class="mockup" src="./assets/telefono.png"></image>-->
        `
        
    }
}

customElements.define("app-register",Register);