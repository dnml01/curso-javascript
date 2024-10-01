// Clase para gestionar el procesamiento de texto
class ProcesadorTexto {
    constructor(texto) {
        this.texto = texto;
    }

    // Función para contar el número de caracteres
    contarCaracteres() {
        return this.texto.length;
    }
}

// Función para solicitar al usuario que ingrese una palabra u oración
function solicitarTexto() {
    let texto = prompt("Ingresa una palabra u oración:");
    let procesador = new ProcesadorTexto(texto);
    let numeroCaracteres = procesador.contarCaracteres();

    // Mostrar el resultado usando alert
    alert(`La oración ingresada es: "${texto}" y tiene ${numeroCaracteres} caracteres.`);
}

// Llamar a la función para solicitar el texto
solicitarTexto();
