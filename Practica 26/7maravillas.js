
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
opciones.push(["Chichen Itza", "Petra", "Muralla China"]); // Opciones para la quinta maravilla
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]); // Opciones para la sexta maravilla
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]); // Opciones para la séptima maravilla

// Variable para controlar la posición actual en el juego
let posActual = 0;

// Variable para contar la cantidad de respuestas correctas
let cantidadAcertadas = 0;

// Función para comenzar el juego
function comenzarJuego(){
    // Reiniciar variables del juego
    posActual = 0;
    cantidadAcertadas = 0;

    // Ocultar pantalla inicial y pantalla final, mostrar pantalla de juego
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";

    // Cargar la primera maravilla
    cargarMaravilla();
}

// Función para cargar una nueva maravilla
function cargarMaravilla(){
    // Verificar si se han mostrado todas las maravillas
    if(maravillas.length <= posActual){
        terminarJuego(); // Si se han mostrado todas, terminar el juego
    }
    else{
        limpiarOpciones(); // Limpiar opciones anteriores
        document.getElementById("imgMaravilla").src = "/" + maravillas[posActual]; // Mostrar la imagen de la maravilla
        document.getElementById("n0").innerHTML = opciones[posActual][0]; // Mostrar opción A
        document.getElementById("n1").innerHTML = opciones[posActual][1]; // Mostrar opción B
        document.getElementById("n2").innerHTML = opciones[posActual][2]; // Mostrar opción C
    }
}

// Función para limpiar las opciones antes de mostrar una nueva maravilla
function limpiarOpciones(){
    // Iterar sobre las opciones y limpiar estilos
    for(let i = 0; i < 3; i++){
        document.getElementById("n" + i).className = "nombre"; // Limpiar clases de nombre
        document.getElementById("l" + i).className = "letra"; // Limpiar clases de letra
    }
}

// Función para comprobar la respuesta seleccionada por el usuario
function comprobarRespuesta(opElegida){
    // Verificar si la respuesta elegida es correcta
    if(opElegida == correcta[posActual]){
        // Si es correcta, aplicar estilos de respuesta acertada y aumentar contador de respuestas correctas
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        // Si es incorrecta, aplicar estilos de respuesta incorrecta, mostrar la respuesta correcta y mantener contador de respuestas correctas
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++; // Ir a la siguiente maravilla
    setTimeout(cargarMaravilla, 1000); // Esperar un segundo y cargar la siguiente maravilla
}

// Función para terminar el juego y mostrar los resultados
function terminarJuego(){
    // Ocultar pantalla de juego y mostrar pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    // Mostrar cantidad de respuestas correctas e incorrectas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

// Función para volver al inicio del juego
function volverAlInicio(){
    // Ocultar pantalla final y mostrar
    document.getElementById("pantalla-final").style.display = "none"; // Ocultar pantalla final
    document.getElementById("pantalla-inicial").style.display = "block"; // Mostrar pantalla inicial
    document.getElementById("pantalla-juego").style.display = "none"; // Ocultar pantalla de juego
}