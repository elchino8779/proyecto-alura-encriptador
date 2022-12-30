// Variables

let insertarTexto = document.getElementById("area-de-texto");

let botonEncriptar = document.getElementById("encriptar");

let botonDesencriptar = document.getElementById("desencriptar");

let displayFree = document.getElementById("display-free");

let displayNone = document.getElementById("display-none");

let resultadoTexto = document.getElementById("resultado-texto");

let botonCopiar = document.getElementById("copiar");

let botonBorrar = document.getElementById("borrar");

let textoBotonCopiar = document.getElementById("texto-boton-copiar");

let cartel = document.querySelector(".cartel");

let leyendaCartel = document.querySelector(".leyenda-cartel");


// Funciones

function encriptar() {
    let resultado = "";
    let valor = insertarTexto.value;
    let concidencia = false;
    let letraActual = 0;
    let letraMayuscula = 1;

    if (valor != undefined) {

        for (let i = 0; i < valor.length; i++) {

            if ((valor[i] != " ") && (valor[i] != "!")) {
                letraActual = valor[i];
                letraMayuscula = valor[i].toUpperCase();
            }

            if ((letraActual === letraMayuscula) || (letraActual === "á") || (letraActual === "é") || (letraActual === "í") || (letraActual === "ó") || (letraActual === "ú") || (letraActual === "Á") || (letraActual === "É") || (letraActual === "Í") || (letraActual === "Ó") || (letraActual === "Ú")) {
                concidencia = true;
                leyendaCartel.innerText = `No estan permitidas las letras mayúsculas, tampoco los acentos. Caracter encontrado "${valor[i]}"`;
                break;
            }
        };

        if (concidencia == true) {
            cartel.style.zIndex = "1";
            cartel.style.opacity = "1";
            setTimeout(() => {
                cartel.style.zIndex = "0";
                cartel.style.opacity = "0";
            }, 5000);
        }
        else {

            for (let i = 0; i < valor.length; i++) {
                if (valor[i] == "a") {
                    resultado = resultado + "ai"
                }
                else if (valor[i] == "e") {
                    resultado = resultado + "enter";
                }
                else if (valor[i] == "i") {
                    resultado = resultado + "imes";
                }
                else if (valor[i] == "o") {
                    resultado = resultado + "ober";
                }
                else if (valor[i] == "u") {
                    resultado = resultado + "ufat";
                }
                else {
                    resultado = resultado + valor[i];
                }
            }

        }

    }

    if (resultado != "") {
        resultadoTexto.innerText = resultado;
        displayFree.style.display = "none";
        displayNone.style.display = "flex";
        botonCopiar.style.background = "#ffffff"
        botonCopiar.style.color = "#0A3871"
        textoBotonCopiar.innerText = "Copiar";
    }
    else {
        displayFree.style.display = "flex";
        displayNone.style.display = "none";
    }

};

function desencriptar() {

    let resultado = "";
    let valor = insertarTexto.value;
    let concidencia = false;
    let letraActual = 0;
    let letraMayuscula = 1;

    if (valor != undefined) {

        for (let i = 0; i < valor.length; i++) {

            if ((valor[i] != " ") && (valor[i] != "!")) {
                letraActual = valor[i];
                letraMayuscula = valor[i].toUpperCase();
            }

            if ((letraActual === letraMayuscula) || (letraActual === "á") || (letraActual === "é") || (letraActual === "í") || (letraActual === "ó") || (letraActual === "ú") || (letraActual === "Á") || (letraActual === "É") || (letraActual === "Í") || (letraActual === "Ó") || (letraActual === "Ú")) {
                concidencia = true;
                leyendaCartel.innerText = `No estan permitidas las letras mayúsculas, tampoco los acentos. Caracter encontrado "${valor[i]}"`;
                break;
            }
        };

        if (concidencia == true) {
            cartel.style.zIndex = "1";
            cartel.style.opacity = "1";
            setTimeout(() => {
                cartel.style.zIndex = "0";
                cartel.style.opacity = "0";
            }, 5000);
        }
        else {

            resultado = valor.replaceAll("ai", "a");
            resultado = resultado.replaceAll("enter", "e");
            resultado = resultado.replaceAll("imes", "i");
            resultado = resultado.replaceAll("ober", "o");
            resultado = resultado.replaceAll("ufat", "u");

        }
    }

    if (resultado != "") {
        resultadoTexto.innerText = resultado;
        displayFree.style.display = "none";
        displayNone.style.display = "flex";
        botonCopiar.style.background = "#ffffff"
        botonCopiar.style.color = "#0A3871"
        textoBotonCopiar.innerText = "Copiar";
    }
    else {
        displayFree.style.display = "flex";
        displayNone.style.display = "none";
    }

}

function copiar() {

    let copiar = resultadoTexto.innerText;

    navigator.clipboard.writeText(copiar);

    textoBotonCopiar.innerText = "Texto copiado";

    botonCopiar.style.background = "#0A3871";

    botonCopiar.style.color = "#D8DFE8"

}

function borrar() {
    insertarTexto.value = "";
}



//Principal

botonEncriptar.addEventListener("click", encriptar);

botonDesencriptar.addEventListener("click", desencriptar);

botonCopiar.addEventListener("click", copiar);

botonBorrar.addEventListener("click", borrar);

