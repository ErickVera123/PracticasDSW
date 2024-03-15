function realizarOperaciones() {
    // Datos predefinidos
    const num1 = 7;
    const num2 = 14;

    // Realizar operaciones
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    const division = num1 / num2;

    // Mostrar resultados en un alert
    alert("El resultado de la suma es: " + suma +
          "\nEl resultado de la resta es: " + resta +
          "\nEl resultado de la multiplicación es: " + multiplicacion +
          "\nEl resultado de la división es: " + division);
}

document.getElementById("operacionesForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtener los valores de los números ingresados por el usuario
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Realizar operaciones
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    
    // Verificar si el divisor no es cero antes de realizar la división
    const division = num2 !== 0 ? num1 / num2 : "Indefinido";

    // Mostrar resultados en un alert
    alert("El resultado de la suma es: " + suma +
          "\nEl resultado de la resta es: " + resta +
          "\nEl resultado de la multiplicación es: " + multiplicacion +
          "\nEl resultado de la división es: " + division);
});