function verificarContrasena() {
    // Obtener la contraseña ingresada
    var contrasena = document.getElementById("contrasena").value;
    
    // Inicializar mensaje de error
    var mensaje = "";

    // Verificar si tiene al menos 8 caracteres
    if (contrasena.length < 8) {
        mensaje += "Debe tener al menos 8 caracteres. ";
    }

    // Verificar si contiene al menos una letra mayúscula
    if (!/[A-Z]/.test(contrasena)) {
        mensaje += "Debe contener al menos una letra mayúscula. ";
    }

    // Verificar si contiene al menos un número
    if (!/[0-9]/.test(contrasena)) {
        mensaje += "Debe contener al menos un número. ";
    }

    // Verificar si contiene al menos un carácter especial
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(contrasena)) {
        mensaje += "Debe contener al menos un carácter especial. ";
    }

    // Mostrar mensaje de error o éxito
    if (mensaje === "") {
        mensaje = "Contraseña válida.";
    }

    // Mostrar el resultado en el navegador
    document.getElementById("resultado").innerText = mensaje;
}
