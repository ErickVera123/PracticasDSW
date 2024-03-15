document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    var peso = parseFloat(document.getElementById("peso").value);
    var opcion = parseInt(document.getElementById("planeta").value);

    // Declaración de variables con var
    var peso_tierra = 9.8;
    var peso_marte = 3.7;
    var peso_jupiter = 24.8;
    var resultado;

    // Realizar cálculos según la opción seleccionada
    if (opcion === 1) {
        resultado = peso * peso_marte / peso_tierra;
        document.getElementById("resultado").textContent = "Su peso en Marte es: " + resultado.toFixed(2);
    } else if (opcion === 2) {
        resultado = peso * peso_jupiter / peso_tierra;
        document.getElementById("resultado").textContent = "Su peso en Júpiter es: " + resultado.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "No existe esa opción";
    }
});