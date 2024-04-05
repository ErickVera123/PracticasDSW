function operacionesMatematicas(operacion, a, b) {
    switch (operacion) {
        case 'sumar' :
            return a + b;
        case 'restar' :
            return a - b;
        case 'multiplicar' :
            return a * b;
        case 'dividir' :
            if (b !== 0) {
                return a / b;
            } else {
                return "No se puede dividir por 0";
            }
        case 'residuo' :
            return a % b;
        default :
        return 0;
    }
}
//captura de las variables 
var operacion = prompt("Ingrese nombre de operacion:");
var a = parseInt(prompt("Ingrese valor de a:"));
var b = parseInt(prompt("Ingrese valor de b:"));

//imprime resultado
alert(operacionesMatematicas(operacion, a, b));