// Definir un arreglo vacío para almacenar los días de la semana
let diasSemana = [];

// Capturar los días de la semana en el arreglo
function capturarDias() {
    // Solicitar al usuario que ingrese los días de la semana uno por uno
    for (let i = 0; i < 7; i++) {
        let dia = prompt("Ingrese el día de la semana:");
        // Agregar el día al arreglo
        diasSemana.push(dia);
    }
}

// Función para mostrar los días capturados en un alert
function mostrarDias() {
    // Mostrar los días de la semana en un alert
    alert("Los días de la semana son: " + diasSemana.join(", "));
}

// Llamar a la función para capturar los días
capturarDias();

// Llamar a la función para mostrar los días capturados
mostrarDias();