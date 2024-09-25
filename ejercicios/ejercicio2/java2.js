function calcularPromedio() {
    // Obtener las notas ingresadas
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;

    // Calcular el promedio 
    var promedio = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30);

    // Mostrar el resultado según el promedio
    if (promedio < 3.95) {
        alert("El promedio es: " + promedio + ". El alumno ha reprobado.");
    } else if (promedio >= 3.95 && promedio < 4.95) {
        alert("El promedio es: " + promedio + ". El alumno va a examen.");
    } else {
        alert("El promedio es: " + promedio + ". El alumno se exime.");
    }
}
