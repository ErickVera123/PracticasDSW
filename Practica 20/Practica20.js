// Inicializar las variables
let num1 = 5;
let num2 = 8;

// Variable para almacenar el resultado
let mensaje = "";

// Comprobar si num1 es menor o igual que num2
if (num1 <= num2) {
    mensaje += "num1 no es mayor que num2<br>";

    // Comprobar si num2 es positivo
    if (num2 > 0) {
        mensaje += "num2 es positivo<br>";

        // Incrementar num1 y comprobar si sigue siendo menor que num2
        if (++num1 < num2) {
            mensaje += "Incrementar uno en num1, no lo hace mayor que num2<br>";
        }
    }
}

// Mostrar el resultado en el HTML
document.getElementById("resultado").innerHTML = mensaje;