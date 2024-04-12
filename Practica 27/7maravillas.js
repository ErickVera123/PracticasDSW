
// Arreglo de las imágenes de las maravillas del mundo
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];

// Arreglo que guarda las respuestas correctas para cada maravilla
let correcta = [1,0,2,1,2,0,1];

// Arreglo que guarda las opciones para cada maravilla
let opciones = [];

// Se agregan las opciones para cada maravilla al arreglo opciones
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]); // Opciones para la primera maravilla
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]); // Opciones para la segunda maravilla
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]); // Opciones para la tercera maravilla
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]); // Opciones para la cuarta maravilla
opciones.push(["Chichen Itza", "Muralla China", "Taj Mahal"]); // Opciones para la quinta maravilla
opciones.push(["Taj Mahal", "Cristo Redentor", "Chichen Itza"]); // Opciones para la sexta maravilla
opciones.push(["Coliseo", "Petra", "Muralla China"]); // Opciones para la séptima maravilla

// Variables globales para controlar el juego
let indicePregunta = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// Función para iniciar el juego
function comenzarJuego() {
    // Oculta la pantalla inicial
    document.getElementById("pantalla-inicial").style.display = "none";
    // Muestra la pantalla de juego
    document.getElementById("pantalla-juego").style.display = "block";
    // Muestra la primera pregunta
    mostrarPregunta();
}

// Función para mostrar una pregunta
function mostrarPregunta() {
    // Si se han mostrado todas las preguntas, muestra la pantalla final
    if (indicePregunta >= maravillas.length) {
        mostrarResultadoFinal();
        return;
    }

    // Obtiene la imagen de la maravilla correspondiente y la muestra
    let imgMaravilla = document.getElementById("imgMaravilla");
    imgMaravilla.src = "img/" + maravillas[indicePregunta];
    imgMaravilla.alt = "Imagen de la maravilla del mundo";

    // Obtiene las opciones correspondientes y las muestra
    for (let i = 0; i < 3; i++) {
        let letra = document.getElementById("l" + i);
        let nombre = document.getElementById("n" + i);
        nombre.textContent = opciones[indicePregunta][i];
    }
}

// Función para comprobar la respuesta seleccionada por el usuario
function comprobarRespuesta(opcionSeleccionada) {
    // Si la opción seleccionada es la respuesta correcta, incrementa el contador de respuestas correctas
    if (opcionSeleccionada === correcta[indicePregunta]) {
        respuestasCorrectas++;
    } else {
        // Si la opción seleccionada no es la respuesta correcta, incrementa el contador de respuestas incorrectas
        respuestasIncorrectas++;
    }

    // Incrementa el índice de la pregunta actual
    indicePregunta++;

    // Muestra la siguiente pregunta
    mostrarPregunta();
}

// Función para mostrar el resultado final del juego
function mostrarResultadoFinal() {
    // Oculta la pantalla de juego
    document.getElementById("pantalla-juego").style.display = "none";
    // Muestra la pantalla final
    document.getElementById("pantalla-final").style.display = "block";

    // Muestra el número de respuestas correctas e incorrectas
    document.getElementById("numCorrectas").textContent = respuestasCorrectas;
    document.getElementById("numIncorrectas").textContent = respuestasIncorrectas;
}

// Función para volver al inicio y reiniciar el juego
function volverAlInicio() {
    // Reinicia las variables del juego
    indicePregunta = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;

    // Oculta la pantalla final
    document.getElementById("pantalla-final").style.display = "none";
    // Muestra la pantalla inicial
    document.getElementById("pantalla-inicial").style.display = "block";
}