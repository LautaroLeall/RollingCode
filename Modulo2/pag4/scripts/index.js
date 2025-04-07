// Adivinar un numero secreto
// Y dar pista si el numero ingresado es mayor o menor al num secreto
let secreto = Math.random();
secreto = (secreto * 10);
secreto = (Math.round(secreto)); // numero aleatorio entre 0 y 10
let intentos = 0;
let number;
do {
    number = parseInt(prompt("Adivina el numero secreto (0-10)"));
    intentos++;
    if (secreto > number) {
        alert("El numero ingresado es menor que el numero secreto");
    } else if (secreto < number) {
        alert("El numero ingresado es mayor que el numero secreto");
    }
} while (number !== secreto);
// Cuando la condicion del while sea false sale del bucle
// Y cuando la condicion del while sea true se ejecuta de nuevo el bucle
document.write("Lo lograste el numero secreto era " + secreto);
document.write("<br>");
document.write("Intentos: " + intentos);

// Solicitar contraseña y continue pidiendo hasta que se ingrese la correcta
const passwordTrue = "NOLASABES";
let passwords;
let attempts = 0;
do {
    passwords = prompt("Ingresa la contraseña (solo mayusculas)");
    attempts++;
} while (passwords !== passwordTrue);
document.write("Correcto la contraseña era " + passwordTrue);
document.write("<br>");
document.write("Intentos: " + attempts);

// For
// Calcule la suma de los 10 primeros num naturales
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("La suma de los 10 primeros numeros naturales es " + sum);

// ARRAYS | Arreglos
const array = [1, "Pedro", true, false, "Gonzalo"];
console.log(array[1] + " Es el primer elemento con indice 0");

console.log(array[3] + " Es el tercer elemento con indice 0");

console.log("Cantidad de elementos del array " + array.length); // 5

for (let i = 0; i < array.length; i++) {
    console.log(array[i]) // Se mostraran todos los elementos del array
}

// Agregar elementos al final del array
array.push("Lautaro");
array.push(11);
// [1, "Pedro", true, false, "Gonzalo" "Lautaro", 11]

// Reemplazar elementos del array
array[1] = "Juan";
array[0] = 10;
// [10, "Juan", true, false, "Gonzalo" "Lautaro", 11]

// Eliminar ultimo elemento del array
array.pop();
// [10, "Juan", true, false, "Gonzalo" "Lautaro"]

// Agregar un elemento en una determinada posicion
array.splice(1, 0, true)
// [10, true ,"Juan", true, false, "Gonzalo" "Lautaro"]

// Eliminar un elemento del array
array.splice(3, 1);
// [10, true ,"Juan", false, "Gonzalo" "Lautaro"]

// Eliminar un elemento del array y reemplazarlo por otro
array.splice(0, 1, 7);
// [7, true ,"Juan", false, "Gonzalo" "Lautaro"]

document.write("El array completo es " + array + "<br>");
// El array completo quedaria
// [7, true, "Juan", false, "Gonzalo", "Lautaro"]

// Eliminar todos los elementos del array
array.splice(0);
document.write("El array completo es " + array);
// El array completo quedaria vacio

// ME QUEDE EN LA HORA 1
// MINUTO 35