// VARIABLES

// var: se utilizaban antes de los ECM6, nos permite inicializar una variable sin asignarle inicialmente un valor, son variables de ambito global
var nombre = "Sergio";
nombre = "Laura";
// con var puedo declarar una variable con un valor y despues puedo CAMBIAR el valor de la variable (modifica el valor de la variable)

// let: es la nueva forma de declarar variables, son de ambito local y tambien nos permite inicializar una variable sin asignarle inicialmente un valor.
let apellido;
apellido = "Leal";
apellido = "Garcia";
// con let puedo declarar una variable con un valor y despues puedo CAMBIAR el valor de la variable (dentro del ambito local)

// const: constante de solo lectura, son variables de ambito local
const dni = 45440756;
// no se puede cambiar el valor de una constante

// OPERADORES

// Operacdores asignacion
const direccion = "Don Bosco 3172";

// Operadores aritmeticos
//Suma
let suma = 5 + 2;
console.log("El resultado de la suma de 5 y 2 es igual a " + suma);
//Resta
let resta = 5 - 2;
console.log("El resultado de la resta de 5 y 2 es igual a " + resta);
//Multiplicacion
let multiplicacion = 5 * 2;
console.log("El resultado de la multiplicacion de 5 y 2 es igual a " + multiplicacion);
//Division
let division = 10 / 5;
console.log("El resultado de la division de 10 y 5 es igual a " + division);
//Modulo
let resto = 5 % 2;
console.log("El resultado del resto de 5 y 2 es igual a " + resto);

// Operadores unitarios
//Incremento
let incremento = 5;
incremento++;
console.log("El incremento de 5 es igual a " + incremento);
//Decremento
let decremento = 5;
decremento--;
console.log("El decremento de 5 es igual a " + decremento);
//Negacion
let a = true;
let b = !a;
console.log("El valor de b es igual a " + b);

// Operadores condicionales
// Operadores relacionales
// Mayor que
let mayor = 12 > 18;
console.log("El numero 12 es mayor que 18 " + mayor);
// Menor que
let menor = 5 < 18;
console.log("Es menor de edad " + menor);
// Mayor o igual que
let mayorDeEdad = 12 >= 18;
console.log("Es mayor de edad " + mayorDeEdad);
// Menor o igual que
let menorIgual = 15 <= 4;
console.log("El numero 15 es menor o igual que 4 " + menorIgual);
// Igual que
let igual = 5 == 2;
console.log("El numero 5 es igual que 2 " + igual);
// Distinto que
let distinto = 5 != 2;
console.log("El numero 5 es distinto que 2 " + distinto);
