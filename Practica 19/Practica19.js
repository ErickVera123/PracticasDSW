
// Array proporcionado
var valores = [true, 10, false, "codigo", "herramientas", 7];

// Determinar cuál de los dos elementos de texto es mayor
var texto1 = valores[3];
var texto2 = valores[4];
var mayor = texto1.length > texto2.length ? texto1 : texto2;
document.getElementById("mayorTexto").textContent = "El texto mayor es: " + mayor;

// Utilizando únicamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
var resultadoTrue = valores[0] || valores[2];
var resultadoFalse = valores[0] && valores[2];
document.getElementById("resultadoTrue").textContent = "Operador para obtener true: " + resultadoTrue;
document.getElementById("resultadoFalse").textContent = "Operador para obtener false: " + resultadoFalse;

// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
var numero1 = valores[1];
var numero2 = valores[5];
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

// Mostrar los resultados en el HTML
document.getElementById("suma").textContent = "Suma: " + suma;
document.getElementById("resta").textContent = "Resta: " + resta;
document.getElementById("multiplicacion").textContent = "Multiplicación: " + multiplicacion;
document.getElementById("division").textContent = "División: " + division;
document.getElementById("modulo").textContent = "Módulo: " + modulo;