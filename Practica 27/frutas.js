
// Arreglo de las imágenes de las frutas
let frutas = ["sandia.svg", "naranja.svg", "pera.svg", "melon.svg", "manzana.svg", "guayaba.svg", "fresa.svg", "kiwi.svg", "limon.svg", "uva.svg"];

// Arreglo que guarda las respuestas correctas para cada fruta
let correctaFrutas = [2,3,1,0,2,0,1,3,2,1];

// Arreglo que guarda las opciones para cada fruta
let opcionesFrutas = [];

// Se agregan las opciones para cada fruta al arreglo opciones
opcionesFrutas.push(["Melon", "Pera", "Sandia", "Kiwi"]); // Opciones para la primera fruta
opcionesFrutas.push(["Uva", "Kiwi", "Fresa", "Naranja"]); // Opciones para la segunda fruta
opcionesFrutas.push(["Naranja", "Pera", "Manzana", "Melon"]); // Opciones para la tercera fruta
opcionesFrutas.push(["Melon", "Sandia", "Guayaba", "Fresa"]); // Opciones para la cuarta fruta
opcionesFrutas.push(["Kiwi", "Guayaba", "Manzana", "Limon"]); // Opciones para la quinta fruta
opcionesFrutas.push(["Guayaba", "Melon", "Sandia", "Uva"]); // Opciones para la sexta fruta
opcionesFrutas.push(["Uva", "Fresa", "Kiwi", "Manzana"]); // Opciones para la séptima fruta
opcionesFrutas.push(["Guayaba", "Limon", "Pera", "Kiwi"]); // Opciones para la octava fruta
opcionesFrutas.push(["Melon", "Sandia", "Limon", "Pera"]); // Opciones para la novena fruta
opcionesFrutas.push(["Manzana", "Uva", "Guayaba", "Fresa"]); // Opciones para la decima fruta

// Variable para controlar la posición actual en el juego de frutas
let posActualFrutas = 0;

// Variable para contar la cantidad de respuestas correctas de frutas
let cantidadAcertadasFrutas = 0;

// Función para comenzar el juego de frutas
function comenzarJuegoFrutas(){
    // Reiniciar variables del juego de frutas
    posActualFrutas = 0;
    cantidadAcertadasFrutas = 0;

    // Ocultar pantalla inicial y pantalla final, mostrar pantalla de juego de frutas
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego1").style.display = "block";

    // Cargar la primera fruta
    cargarFruta();
}

// Función para cargar una nueva fruta
function cargarFruta(){
    // Verificar si se han mostrado todas las frutas
    if(frutas.length <= posActualFrutas){
        terminarJuegoFrutas(); // Si se han mostrado todas, terminar el juego de frutas
    }
    else{
        limpiarOpcionesFrutas(); // Limpiar opciones anteriores
        document.getElementById("imgfruta").src = "img/" + frutas[posActualFrutas]; // Mostrar la imagen de la fruta
        // Mostrar las opciones con los nombres de las frutas
        for(let i = 0; i < 4; i++) {
            document.getElementById("n" + i + "f").innerHTML = opcionesFrutas[posActualFrutas][i];
        }
    }
}

// Función para limpiar las opciones antes de mostrar una nueva fruta
function limpiarOpcionesFrutas(){
    // Iterar sobre las opciones y limpiar estilos
    for(let i = 0; i < 4; i++){
        document.getElementById("n" + i + "f").className = "nombre"; // Limpiar clases de nombre
        document.getElementById("l" + i + "f").className = "letra"; // Limpiar clases de letra
    }
}

// Función para comprobar la respuesta seleccionada por el usuario en el juego de frutas
function comprobarRespuestaFrutas(opElegida){
    // Verificar si la respuesta elegida es correcta
    if(opElegida == correctaFrutas[posActualFrutas]){
        // Si es correcta, aplicar estilos de respuesta acertada y aumentar contador de respuestas correctas
        document.getElementById("n" + opElegida + "f").className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida + "f").className = "letra letraAcertada";
        cantidadAcertadasFrutas++;
    } else {
        // Si es incorrecta, aplicar estilos de respuesta incorrecta, mostrar la respuesta correcta y mantener contador de respuestas correctas
        document.getElementById("n" + opElegida + "f").className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida + "f").className = "letra letraNoAcertada";
        document.getElementById("n" + correctaFrutas[posActualFrutas] + "f").className = "nombre nombreAcertada";
        document.getElementById("l" + correctaFrutas[posActualFrutas] + "f").className = "letra letraAcertada";
    }
    posActualFrutas++; // Ir a la siguiente fruta
    setTimeout(cargarFruta, 1000); // Esperar un segundo y cargar la siguiente fruta
}

// Función para terminar el juego de frutas y mostrar los resultados
function terminarJuegoFrutas(){
    // Ocultar pantalla de juego de frutas y mostrar pantalla final
    document.getElementById("pantalla-juego1").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    // Mostrar cantidad de respuestas correctas e incorrectas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadasFrutas;
    document.getElementById("numIncorrectas").innerHTML = frutas.length - cantidadAcertadasFrutas;
}

// Función para volver al inicio del juego de frutas
function volverAlInicioFrutas(){
    // Ocultar pantalla final y mostrar
    document.getElementById("pantalla-final").style.display = "none"; // Ocultar pantalla final
    document.getElementById("pantalla-inicial").style.display = "block"; // Mostrar pantalla inicial
    document.getElementById("pantalla-juego1").style.display = "none"; // Ocultar pantalla de juego de frutas
}