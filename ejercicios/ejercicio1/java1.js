function verificarParImpar() {
    // número ingresado por el usuario
    let numero = document.getElementById("numero").value;

    //  par o impar
    if (numero % 2 === 0) {
        alert("Es par.");
    } else {
        alert("Es impar.");   
} 
}
