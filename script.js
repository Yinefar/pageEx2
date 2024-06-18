const texto = "Why do you must to go to  Peru?";
const elemento = document.getElementById("question");
let indice = 0;

function escribirTexto() {
    if (indice < texto.length) {
        elemento.innerHTML += texto.charAt(indice);
        indice++;
        setTimeout(escribirTexto, 150); 
    } else {
        setTimeout(() => {
            elemento.innerHTML = "";
            indice = 0;
            escribirTexto();
        }, 1500); 
    }
}
escribirTexto();
