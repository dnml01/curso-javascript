function contarCaracteres() {
    // Obtener el valor 
    var oracion = document.getElementById("oracion").value;

    // Contar los caracteres
    var numeroDeCaracteres = oracion.length;

    // Mostrar el número de caracteres
    document.getElementById("resultado").innerText = "Tiene " + numeroDeCaracteres + " caracteres.";
}
