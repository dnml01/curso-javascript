function verificarContrasena() {
    // Obtener la contraseña 
    var contrasena = document.getElementById("contrasena").value;
    
    // Inicializar mensaje de error
    var mensaje = "";

    //  8 caracteres
    if (contrasena.length < 8) {
        mensaje += "Debe tener al menos 8 caracteres. ";
    }

    // letra mayúscula
    if (!/[A-Z]/.test(contrasena)) {
        mensaje += "Debe contener al menos una letra mayúscula. ";
    }

    // número
    if (!/[0-9]/.test(contrasena)) {
        mensaje += "Debe contener al menos un número. ";
    }

    // carácter especial
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(contrasena)) {
        mensaje += "Debe contener al menos un carácter especial. ";
    }

    // mensaje de error o éxito
    if (mensaje === "") {
        mensaje = "Contraseña válida.";
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerText = mensaje;
}
