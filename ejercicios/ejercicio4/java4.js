function calcularPagoEmpleados() {
    // Tarifas por turno
    var tarifaDiurna = 12000;
    var tarifaNocturna = 16000;
    var tarifaDomingoDiurna = tarifaDiurna + 2000;
    var tarifaDomingoNocturna = tarifaNocturna + 3000;

    // empleados
    var empleados = [
        {
            nombre: "Empleado 1",
            turnos: [
                { dia: "Lunes", tipo: "nocturno" },
                { dia: "Martes", tipo: "nocturno" },
                { dia: "Miércoles", tipo: "nocturno" },
                { dia: "Jueves", tipo: "diurno" },
                { dia: "Viernes", tipo: "diurno" }
            ]
        },
        {
            nombre: "Empleado 2",
            turnos: [
                { dia: "Martes", tipo: "nocturno" },
                { dia: "Miércoles", tipo: "nocturno" },
                { dia: "Jueves", tipo: "nocturno" },
                { dia: "Domingo", tipo: "diurno" }
            ]
        },
        {
            nombre: "Empleado 3",
            turnos: [
                { dia: "Miércoles", tipo: "diurno" },
                { dia: "Jueves", tipo: "diurno" },
                { dia: "Viernes", tipo: "diurno" },
                { dia: "Sábado", tipo: "nocturno" },
                { dia: "Domingo", tipo: "nocturno" }
            ]
        }
    ];

    // Calcular el pago 
    empleados.forEach(function(empleado) {
        var pagoSemanal = 0;

        empleado.turnos.forEach(function(turno) {
            var pagoDiario = 0;

            if (turno.tipo === "diurno") {
                pagoDiario = (turno.dia === "Domingo") ? tarifaDomingoDiurna * 10 : tarifaDiurna * 10;
            } else if (turno.tipo === "nocturno") {
                pagoDiario = (turno.dia === "Domingo") ? tarifaDomingoNocturna * 10 : tarifaNocturna * 10;
            }

            // Agregar pago diario 
            pagoSemanal += pagoDiario;

            // Guardar el pago diario 
            turno.pago = pagoDiario;
        });

        // Guardar el pago semanal total
        empleado.pagoSemanal = pagoSemanal;
    });

    // Mostrar el resultado en la página
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    empleados.forEach(function(empleado) {
        resultado.innerHTML += `<h3>${empleado.nombre}</h3>`;
        empleado.turnos.forEach(function(turno) {
            resultado.innerHTML += `<p>${turno.dia} (${turno.tipo}): CLP ${turno.pago}</p>`;
        });
        resultado.innerHTML += `<strong>Total semanal: CLP ${empleado.pagoSemanal}</strong><hr>`;
    });
}
