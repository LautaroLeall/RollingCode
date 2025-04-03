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
document.write("Documen Write hecho desde JS");