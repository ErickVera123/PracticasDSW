//Se crea funciom
function paroimpar(numero) {

    if (numero % 2 === 0) {
        alert ("El numero ingresado es par");
    } else {
        alert ("El numero ingresado es impar");
    }

}
//captura de la variable numero
var numero = parseInt(prompt("Ingrese un numero:"));

//imprime resultado
alert(paroimpar(numero));
