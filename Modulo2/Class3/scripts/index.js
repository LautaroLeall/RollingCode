// Numero es par o impar
const num = parseInt(prompt("Dime un numero"));
console.log("El tipo de dato ingresado es " + (typeof num));
if (num % 2 === 0) {
    console.log(num + " es par");
} else {
    console.log(num + " es impar");
}

// Estacion del Año
// Con el .toUpperCase() se convierte el string a MAYUSCULAS para que sea mas facil de comparar
const estacion = prompt("Dime tu estacion favorita").toUpperCase();
if (estacion === "VERANO") {
    console.log("La estacion es Verano");
} else if (estacion === "INVIERNO") {
    console.log("La estacion es Invierno");
} else if (estacion === "PRIMERAVERA") {
    console.log("La estacion es Primavera");
} else if (estacion === "OTOÑO") {
    console.log("La estacion es Otoño");
} else {
    console.log("NO ingresaste una estacion valida");
}

// Condicionales Múltiples SWITCH
// Ejemplo Anterior pero con switch
const estacion2 = prompt("Dime tu estacion favorita").toUpperCase();
switch (estacion2) {
    case "VERANO":
        console.log("La estacion es Verano");
        break;
    case "INVIERNO":
        console.log("La estacion es Invierno");
        break;
    case "PRIMERAVERA":
        console.log("La estacion es Primavera");
        break;
    case "OTOÑO":
        console.log("La estacion es Otoño");
        break;
    default:
        console.log("NO ingresaste una estacion valida");
}

// Pide un numero del 1-7 e identifica el numero con los dias de la semana
const dia = parseInt(prompt("Dime un numero del 1-7"));
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Ingresaste un numero invalido");
}

// Selecionar una operacion matematica (+ - * /)
// Luego pedir dos numeros y realizar la operacion
const operacion = prompt("Selecciona una Operacion Matematica (+ - * /)");
const num1 = parseInt(prompt("Dime un Numero"));
const num2 = parseInt(prompt("Dime otro Numero"));
switch (operacion) {
    case "+":
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case "-":
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case "*":
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    case "/":
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
    default:
        console.log("Ingresaste una Operacion INVALIDA");
}

// ESTRUCTURAS DE REPETICION - BUCLES
// While 
// Primero ve la condicion y despues hace
// Se repita 10 veces Hola Mundo 
let i = 0;
document.write("Aqui comienza el bucle");
while (i < 10) {
    document.write("Hola Mundo");
    document.write("<br>");
    i++;
}
document.write("Aqui termina el bucle");

// Do While
// Primero hace y despues ve la condicion por ende se realiza una vez si o si
// La variable j arranca en 11 y se repite 1 vez solamente Hola Mundo
let j = 11;
document.write("Aqui comienza el bucle");
document.write("<br>");
do {
    document.write("Hola Mundo");
    document.write("<br>");
    j++;
} while (j < 10);
document.write("Aqui termina el bucle");

// Cuente del 1-10 y muestre los numeros
let k = 1;
document.write("Aqui comienza el bucle");
document.write("<br>");
while (k <= 10) {
    document.write(k);
    document.write("<br>");
    k++;
}
document.write("Aqui termina el bucle");
document.write("<br>");

// Adivinar un numero secreto
let secreto = Math.random();
secreto = (secreto * 10);
secreto = (Math.round(secreto)); // numero aleatorio entre 0 y 10
let intentos = 0;
let number;
do {
    number = parseInt(prompt("Adivina el numero secreto (0-10)"));
    intentos++;
} while (number !== secreto);
// Cuando la condicion del while sea false sale del bucle
// Y cuando la condicion del while sea true se ejecuta de nuevo el bucle
document.write("Lo lograste el numero secreto era " + secreto);
document.write("<br>");
document.write("Intentos: " + intentos); 
