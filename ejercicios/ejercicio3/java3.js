function calcularSumatoria() {
    var suma = 0;  
    var valor1 = 500;  
    var valor2 = 456;  

    // Bucle 
    while (valor1 <= 800) {
        suma += valor1;  
        suma += valor2;  

        // Incrementar y alternar 
        valor1 += 10;  
        valor2 -= 2;   
    }

    // Mostrar el resultado final
    document.getElementById("resultado").innerText = "El resultado de la sumatoria es: " + suma;
}
