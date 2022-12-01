import { queryUser } from "../../services/db.js";

export class Login extends HTMLElement{

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

            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    console.log(this);

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
        <link rel="stylesheet" href=" ./components/Login/style.css"
        <section>
        <div class="contenedor">
            <image class="logo" src="./assets/logo.png" alt="Logo instagram"></image>
        </div>
        <div class="contenedor2">
            <p class="info">¿No tienes una cuenta? <font color="blue">Registrate</font></p>
            <p class="descarga">Descarga la app</p>
            <image class="descargaApp" src="./assets/linkdescarga.png" alt="Icono para descargar la aplicación"></image>
        </div>

        <div class="contenedor3">
        <image class="opciones" src="./assets/Fb.png" alt="Boton inicia con Facebook"></image>
        <h1 class="forget">¿Se te olvidó tu contraseña?</h1>
        <hr class="linea">
        <h1 class="texto">O</h1>
        <hr class="linea2">
            
        </div>
        <app-form></app-form>
        </section>
        `
    }
}

customElements.define("app-login",Login);