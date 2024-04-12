// Función principal que se ejecuta al presionar el botón de cálculo de promedio
function calcularPromedio() {
    // Arreglo para almacenar las notas ingresadas por el usuario
    const notas = [];
    
    // Iterar sobre las 8 asignaturas
    for (let i = 1; i <= 8; i++) {
        // Obtener el elemento de input correspondiente a la asignatura actual
        const input = document.getElementById("asignatura" + i);
        
        // Obtener el valor numérico ingresado por el usuario
        const nota = parseFloat(input.value);
        
        // Verificar si la nota es un número válido
        if (isNaN(nota)) {
            alert("Ingrese una nota válida para la Asignatura " + i);
            input.focus(); // Colocar el foco en el campo de texto que falta llenar
            return; // Salir de la función si la nota no es válida
        }
        
        // Agregar la nota al arreglo de notas
        notas.push(nota);
    }

    // Calcular el promedio de las notas
    const promedio = calcularPromedioNotas(notas);

    // Generar el mensaje de acuerdo al promedio obtenido
    const mensaje = generarMensajePromedio(promedio);
    
    // Mostrar el mensaje de promedio en un cuadro de alerta
    alert(mensaje);
}

// Función para calcular el promedio de un arreglo de notas
function calcularPromedioNotas(notas) {
    let total = 0;
    // Sumar todas las notas
    for (let nota of notas) {
        total += nota;
    }
    // Calcular el promedio
    return total / notas.length;
}

// Función para generar el mensaje de acuerdo al promedio obtenido
function generarMensajePromedio(promedio) {
    let mensaje = "El promedio final es " + promedio.toFixed(2) + ". ";
    // Determinar si el promedio excede o no el límite para el examen ordinario
    if (promedio >= 85) {
        mensaje += "Está exento de ordinario.";
    } else {
        mensaje += "Debe presentar examen ordinario.";
    }
    return mensaje;
}