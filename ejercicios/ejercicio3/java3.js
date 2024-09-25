function calcularSumatoria() {
    var suma = 0;  // Inicializar la variable para almacenar la sumatoria
    var valor1 = 500;  // Primer valor de la secuencia
    var valor2 = 456;  // Segundo valor de la secuencia

    // Bucle para realizar la sumatoria
    while (valor1 <= 800) {
        suma += valor1;  // Sumar el primer valor
        suma += valor2;  // Sumar el segundo valor

        // Incrementar y alternar los valores
        valor1 += 10;  // El primer valor se incrementa en 10
        valor2 -= 2;   // El segundo valor disminuye en 2
    }

    // Mostrar el resultado final
    document.getElementById("resultado").innerText = "El resultado de la sumatoria es: " + suma;
}
