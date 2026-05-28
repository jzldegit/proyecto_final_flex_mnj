let btnEnviar = document.querySelector("#btnEnviar");
let campoNombre = document.querySelector("#nombre");
let campoEmail = document.querySelector("#email");
let campoMensaje = document.querySelector("#mensaje");
let charNum = document.querySelector("#charNum");
let success = document.querySelector("#success");
let error = document.querySelector("#error");

btnEnviar.addEventListener("click", enviar);
campoMensaje.addEventListener("input", contar);

function enviar() {
    let nombre = campoNombre.value;
    let email = campoEmail.value;
    let mensaje = campoMensaje.value;

    if (nombre == "" || email == "" || mensaje == "") {
        error.textContent = "Por favor, rellena todos los campos obligatorios.";
        return;
    }

    error.textContent = "";
    success.classList.replace("d-none", "d-block");
}

function contar() {
    let total = campoMensaje.value.length;
    charNum.textContent = total;
}