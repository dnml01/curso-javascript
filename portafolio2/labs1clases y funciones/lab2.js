// Clase para la validación de contraseñas
class ValidadorContrasena {
    constructor(password) {
        this.password = password;
        this.longitudMinima = 8;
        this.regexMayuscula = /[A-Z]/;
        this.regexNumero = /[0-9]/;
        this.regexEspecial = /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/;
    }

    // Función para verificar si cumple la longitud mínima
    validarLongitud() {
        return this.password.length >= this.longitudMinima;
    }

    // Función para verificar si tiene al menos una letra mayúscula
    validarMayuscula() {
        return this.regexMayuscula.test(this.password);
    }

    // Función para verificar si tiene al menos un número
    validarNumero() {
        return this.regexNumero.test(this.password);
    }

    // Función para verificar si tiene al menos un carácter especial
    validarCaracterEspecial() {
        return this.regexEspecial.test(this.password);
    }

    // Función principal para realizar todas las validaciones
    validarContrasena() {
        let esValida = true;

        if (!this.validarLongitud()) {
            console.log("Debe tener al menos 8 caracteres.");
            esValida = false;
        }

        if (!this.validarMayuscula()) {
            console.log("Debe contener al menos una letra mayúscula.");
            esValida = false;
        }

        if (!this.validarNumero()) {
            console.log("Debe contener al menos un número.");
            esValida = false;
        }

        if (!this.validarCaracterEspecial()) {
            console.log("Debe contener al menos un carácter especial.");
            esValida = false;
        }

        return esValida;
    }
}

// Función para solicitar y validar la contraseña del usuario
function solicitarContrasena() {
    let password = prompt("Ingresa una contraseña:");
    let validador = new ValidadorContrasena(password);

    if (validador.validarContrasena()) {
        alert("¡La contraseña es válida!");
    } else {
        alert("La contraseña no cumple con uno o más requisitos. Revisa la consola para más detalles");
    }
}

// Llamar a la función para solicitar la contraseña
solicitarContrasena();
