// Operadores Condicionales
// Operadores Logicos
// AND &&
// Es TRUE si ambos son true, en los demas casos es FALSE
let a = 3 < 5; // true
let b = 5 > 3; // true
console.log("a =  3 < 5 lo cual es true");
console.log("b =  5 < 3 lo cual es true");
console.log(a && b); // true

console.log("!a =  3 < 5 lo cual es false");
console.log("!b =  5 < 3 lo cual es false");
console.log(!a && !b); // false

// OR ||
// Es FALSE si ambos son false, en los demas casos es TRUE
let c = 3 < 5; // true
let d = 5 > 3; // true
console.log("c =  3 < 5 lo cual es true");
console.log("d =  5 < 3 lo cual es true");
console.log(c || d); // true

console.log("!c =  3 < 5 lo cual es false");
console.log("!d =  5 < 3 lo cual es false");
console.log(!c || !d); // false

// METODOS
alert("Hola Mundo");
// Abre una ventanita de alerta en la pantalla

document.write("Documen Write hecho desde JS");
// Escribe un mensaje en la pantalla del navegador

const apellido = "Leal";
console.log(apellido.length); // 4
// La cantidad de caracteres que tiene un string

console.log(apellido.toUpperCase()); // LEAL
// Convierte el string a mayusculas

console.log(apellido.toLowerCase()); // leal
// Convierte el string a minusculas

console.log(apellido.slice(0, 2)); // Lea
// Toma una parte del string

console.log(apellido.charAt(2)); // a
// Toma un caracter del string

let str = "Hola Mundo";
console.log(str.indexOf("Mundo")); // 5
// Devuelve la posicion del string (en que indice arranca el string)

console.log(typeof 10); // number
console.log(typeof str); // string
// typeof → devuelve el tipo de un objeto

const strInt = "10";
const numInt = parseInt(strInt); // 10
console.log(typeof strInt); // string
console.log(typeof numInt); // number    
// pareInt → convierte un numero de tipo texto a tipo number (devuelve un numero entero)

const edad = prompt("Dime tu edad");
console.log(typeof edad);
console.log(edad);
// prompt → muestra un mensaje en pantalla y espera por una respuesta

const num = 9.7;
const rounded = Math.round(num); // 10
const floored = Math.floor(num); // 9
console.log(rounded); // 10
console.log(floored); // 9
// Math.round → redondea un numero hacia arriba (>= 0.5)
// Math.floor → redondea un numero hacia abajo (devuelve el enero)

console.log(isNaN("Hola Mundo")); // true
console.log(isNaN(10)); // false
// isNaN (Not a Number) → evaluia si el valor recibe como parametro NO ES UN NUMERO

const strNum = "22";
const toNum = Number(strNum); // 22
// Number → convierte un valor de tipo string a number

const randomNum = Math.random();
console.log(randomNum);
// Math.random → devuelve un numero aleatorio entre 0 y 1 (numero con decimal)

const randomNum1 = Math.random();
console.log(randomNum1 * 10); // numero aleatorio entre 0 y 10
console.log(Math.round(randomNum1 * 10)); // numero aleatorio entre 0 y 10 (numero entero)

// Condicional IF
let aux = 10;
if (aux > 5) {
    console.log(aux + " es mayor que 5");
}
// if → ejecuta una instruccion si la condicion es verdadera

const age = prompt("Dime tu edad");
const money = prompt("Dime tu dinero");
if (age >= 18 && money >= 5000) {
    console.log("Puedes pasar al baile");
}
// Funcion para saber si es mayor de edad y cuenta con dinero para pagar la entrada al baile (ambas condiciones deben ser verdaderas para que se cumpla la instruccion)

const edad1 = prompt("Dime tu edad");
if (edad1 < 18 || edad1 >= 65) {
    console.log("Perteneces a la clase de personas de riesgo");
}
// Funcion para saber si es menor de edad o mayor de 65 años (para ver si pertenece a la clase de riesgo) (al cumplir una condicion, se ejecuta la instruccion)

// CONDICIONAL IF ELSE
if (age >= 18 && money >= 5000) {
    console.log("Puedes pasar al baile");
} else {
    console.log("No puedes pasar al baile");
}
// Se ejecuta la instruccion que se encuentra en el else si la condicion anterior no es verdadera

if (edad1 < 18 || edad1 >= 65) {
    console.log("Perteneces a la clase de personas de riesgo");
} else {
    console.log("No perteneces a la clase de personas de riesgo");
}
// Al tener entre 18 y 65 años, se ejecuta la instruccion que se encuentra en el else

//CONDICIONALES MULTIPLES O ANIDADOS
let number = prompt("Dime un numero");
if (number < 10) {
    console.log( number +" Es menor a 10");
} else {
    if (number > 10) {
        console.log( number +" Es mayor a 10");
    } else {
        console.log( number +" Es igual a 10");
    }
}

//CONDICIONALES MULTIPLES "con else if"
let n = prompt("Dime un numero");
if (n < 10) {
    console.log(n +" Es menor a 10");
} else if (n > 10){
    console.log(n +" Es mayor a 10");
} else {
    console.log(n +" Es igual a 10");
}