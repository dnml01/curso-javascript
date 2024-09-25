function contarVocales() {
     // Obtener el texto ingresado en minúsculas
    var cadena = document.getElementById("cadena").value.toLowerCase(); 
    // Objeto para contar las vocales
    var vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };  

    // Recorrer cada carácter de la cadena
    for (var i = 0; i < cadena.length; i++) {
        var letra = cadena[i];

        // Verificar si la letra es una vocal y contarla
        if (letra === 'a') {
            vocales.a++;
        } else if (letra === 'e') {
            vocales.e++;
        } else if (letra === 'i') {
            vocales.i++;
        } else if (letra === 'o') {
            vocales.o++;
        } else if (letra === 'u') {
            vocales.u++;
        }
    }

    // Mostrar el resultado en la página
    var resultado = `
        <p>Vocal 'a': ${vocales.a}</p>
        <p>Vocal 'e': ${vocales.e}</p>
        <p>Vocal 'i': ${vocales.i}</p>
        <p>Vocal 'o': ${vocales.o}</p>
        <p>Vocal 'u': ${vocales.u}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;  // Mostrar el conteo en el HTML
}
