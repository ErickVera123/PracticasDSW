// EJERCICIO 1

var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Visualizar el arreglo
document.getElementById("resultados").innerHTML = "Días de la semana: " + diasSemana.join(", ");

// Agregar un día al final del arreglo usando push()
diasSemana.push("Domingo");
document.getElementById("resultados").innerHTML += "<br>Agregando un nuevo día al final del arreglo: " + "Domingo";

// Eliminar el primer día del arreglo usando shift()
var primerDiaEliminado = diasSemana.shift();
document.getElementById("resultados").innerHTML += "<br>Eliminando el primer día del arreglo: " + primerDiaEliminado;

// Arreglo actualizado
document.getElementById("resultados").innerHTML += "<br>Arreglo actualizado: " + diasSemana.join(", ");

// EJERCICIO 2

// Iniciar variables
var suma = 0;
var numero = 1;

// Mientras el número sea menor o igual a 5, suma el número y luego incrementa el número
while (numero <= 5) {
    suma += numero; // Sumar el número actual a la suma total
    numero++;       // Incrementar el número para pasar al siguiente
}

// Mostrar el resultado de la suma
document.getElementById("resultados2").innerHTML = "La suma de los números del 1 al 5 es: " + suma;

// EJERCICIO 3

// Inicializar variables
var factorial = 1;
var numero = 5;

// Calcular el factorial utilizando un bucle do while
do {
    factorial *= numero; // Multiplicar el factorial actual por el número
    numero--;            // Decrementar el número para calcular el factorial del siguiente número
} while (numero > 0);    // Repetir hasta que el número sea 0

// Mostrar el resultado del factorial
document.getElementById("resultados3").innerHTML = "El factorial del número 5 es: " + factorial;

// EJERCICIO 4

// Variable para almacenar el mensaje
var mensaje = "";

// Bucle for para mostrar "Hola" siete veces
for (var i = 1; i <= 8; i++) {
    // Verificar si es el cuarto saludo
    if (i === 4) {
        mensaje += "Soy el 4to<br>"; // Agregar mensaje especial
    } else if (i === 8) {
        mensaje += "Acabamos de saludar"; // Agregar mensaje especial
    } else {
        // Mostrar el mensaje "Hola" en cualquier otro caso
        mensaje += "Hola<br>";
    }
}

// Mostrar el resultado 
document.getElementById("resultados4").innerHTML = mensaje;

// EJERCICIO 5

// Arreglo con los primeros 11 meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

// Ejemplo utilizando for-in
var mensajeForIn = "";
for (var index in meses) {
    mensajeForIn += meses[index] + "<br>";
}
document.getElementById("resultados5ForIn").innerHTML = mensajeForIn;

// Ejemplo utilizando forEach
var mensajeForEach = "";
meses.forEach(function(mes) {
    mensajeForEach += mes + "<br>";
});
document.getElementById("resultados5ForEach").innerHTML = mensajeForEach;

// Ejemplo utilizando for-of
var mensajeForOf = "";
for (var mes of meses) {
    mensajeForOf += mes + "<br>";
}
document.getElementById("resultados5ForOf").innerHTML = mensajeForOf;

// EJERCICIO 6

// Arreglo con los primeros 11 meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

// Agregar diciembre fuera del arreglo
var diciembre = "Diciembre";

// Mostrar todos los meses, incluido diciembre, omitiendo julio
var resultado = "";
for (var mes of meses) {
    if (mes !== "Julio") {
        resultado += mes + "<br>";
    }
}
resultado += diciembre + "<br>";

document.getElementById("resultados6").innerHTML = resultado;