// Funciones en Javascript

// FUNCIONES DECLARATIVAS
// sin retortno || sin parametros
function saludar() {
    let msje = "Hola Mundo";
    alert(msje);
    // Bloque de codigo
    // Se ejecuta cuando se llama a la funcion
}
saludar(); // Llamada a la funcion

// con retorno || con parametros
function suma(a, b) {
    return a + b;
}
console.log(suma(10, 10)); // esto imprimirá 20 en la consola

// FUNCIONES ANONIMAS
// Declaración de una Función Anónima
// asignación a una variable
const resta = function (a, b) {
    return a - b;
}
// USO de la Función Anónima
const resultado = resta(50, 25);
console.log(resultado) // esto imprimirá 25 en la consola

// FUNCIONES FLECHA o ARROW FUNCTIONS
//  para multiplicar dos num
const mult = (a, b) => a * b;
// Uso de la Funcion Flecha
const res = mult(3, 5);
console.log(res) // esto imprimirá 15 en la consola

// para saludar a alguien
const saludar2 = nombre => alert(`Hola ${nombre}`);
// En consola escribir saludar2("El Nombre del Usuario") y vera el resultado

// FUNCIONES CALLBACKS O DEVOLUCION DE LLAMADAS
// Es una función que se pasa como argumento a otra función
// la funcion que esta dentro de una funcion se llama FUNCION DE ORDEN DE SUPERIOR 

const mascotas = ["perro", "gato", "conejo", "tortuga", "perro", "tortuga"];
mascotas.map((mascota) => {
    // .map accede a cada elemento (mascota) y realizar una determinada accion
    // en este caso imprimimos cada elemento de la lista en la consola
    console.log(mascota);
})

const perro = mascotas.filter((mascota) => {
    // .filter "filtro" muestra todos los elementos que cumplan con la condicion
    // en este caso imprimimos cada elemento que sea perro
    return mascota === "perro";
})
console.log(perro);

const tortuga = mascotas.find((mascota) => {
    // .find "busca" unicamente muestra el primer elemento que cumpla con la condicion 
    // en este caso imprimimos el primer elemento que sea tortuga
    return mascota === "tortuga";
})
console.log(tortuga);
