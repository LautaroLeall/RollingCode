// POO (Programacion Orientada a Objetos)

// CREANDO OBJETO
const usuario = {
    nombre: "Lautaro",
    apellido: "Leal Del Prete",
    edad: 20,
    pais: "Argentina",
    email: "lautaroleal4@gmail.com",
    password: "12345",
}

// OBTENER DATOS DE UN OBJETO (dos maneras)
// 1.
alert(`El nombre del usuario es ${usuario.nombre}`)
// 2.
alert(`El apellido del usuario es ${usuario["apellido"]}`);

// MODIFICAR DATOS DE UN OBJETO
// Agregar propiedad 
usuario.membresia = true;
// Modificar valor
usuario.membresia = false;
// Eliminar propiedad
delete usuario.membresia;

// RECORRIENDO DATOS DE UN OBJETO (dos maneras)
// 1.
for (const key in usuario) {
    if (usuario.hasOwnProperty(key)) {
        // hasOwnProperty → devuelve un valor booleano que indica si el objeto tiene la propiedad especificada como propio 
        console.log(usuario[key]);
    }
}
// 2.
const keys = Object.keys(usuario);
console.log(keys);
// Nos devuelve un array con los nombres de las propiedades del objeto
keys.map((key) => {
    console.log(usuario[key]);
    // Nos devuelve el valor de la propiedad
})

const products = [
    {
        id: 1,
        name: "Leche",
        price: 120,
        categories: ["familiar", "comida"]
    },
    {
        id: 2,
        name: "Arroz",
        price: 80,
        categories: ["familiar", "comida"]
    },
    {
        id: 3,
        name: "Lavadora",
        price: 7800
        , categories: ["electrodomestico"]
    }
];
// ACCEDER A LOS DATOS DE UN ARRAY
products.map((product) => {
    console.log(`Id del producto es ${product.id}`);
    console.log(`Nombre del producto es ${product.name}`);
    console.log(`Precio del producto es ${product.price}`);
    console.log(`Categorias del producto: ${product.categories.join(" - ")}`);
    // .join() → devuelve un string con los elementos separados por un delimitador
    // Todo esto nos devuelve los valores de la propiedades
})

// Acceder a los datos de un array (mas facil + mas eficiente "a la hora de agregar o eliminar elementos")
products.map((product) => {
    const keys = Object.keys(product);
    // Object.keys → devuelve un array con los nombres de las propiedades del objeto
    keys.forEach((key) => {
        // forEach → ejecuta una instruccion para cada elemento del array
        console.log(`${key}: ${(product[key])}`);
    })
})

// CREACCION DE OBJETOS
// 1. Notacion Literal
const auto1 = {
    marca: "fiat",
    modelo: "bravo",
    color: "verde",
    año: 2008,
}
console.log(auto1);

// 2. Funcion Constructor
// Esta funcion para diferencias con las demas funciones las nombramos inicialmente con MAYÚSCULA
function Auto(marca, modelo, color, año) {
    this.marca = marca; // marca es el parametro de la funcion constructor
    this.modelo = modelo;
    this.color = color;
    this.año = año;
    // El this nos permite acceder a las propiedades del objeto
}
const auto2 = new Auto("fiat", "bravo", "verde", 2008);
// new → crea un nuevo objeto
console.log(auto2);

// // 3. Constructor Object()
// crea un objeto vacio
const auto3 = new Object();
auto3.marca = "fiat";
auto3.modelo = "bravo";
auto3.color = "verde";
auto3.año = 2008;
// console.log(auto3);

// 4. Object.create()
// crea un objeto vacio
const auto4 = Object.create(auto3);
console.log(auto4.marca) // imprime fiat
// nos trae el valor del objeto auto3 y lo copia en el objeto auto4
auto4.precio = 45000;
console.log(auto4); // imprime { precio: 45000 }

// 5. Comprando Objetos
const mascota1 = {
    nombre: "Firulais",
    color: "negro",
    raza: "salchicha",
}
const mascota2 = {
    nombre: "Firulais",
    color: "negro",
    raza: "salchicha",
}
// comparo los objetos
console.log(mascota1 === mascota2); // imprime false

const mascota3 = mascota1;
console.log(mascota3 === mascota1); // imprime true
console.log(mascota3); // imprime un objeto (mismo al mascota1)

// ELEMENTOS DE LA POO
// - CLASES
class Persona {
    constructor(nombre, apellido, edad, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pais = pais;
    }
    // MÉTODOS
    comer(){
        alert(`${this.nombre} esta comiendo`);
    }
}
console.log(Persona);

// Se crea un objeto de la clase Persona
const persona1 = new Persona("Lautaro", "Leal Del Prete", 20, "Argentina");
console.log(persona1);
persona1.comer();
// para que se ejecuten los metodos deben finalizar con ();

const persona2 = new Persona("Gonzalo", "Martinez", 20, "Argentina");
console.log(persona2);
persona2.comer();

console.log(`Los dos objetos son iguales? ${persona1 === persona2}`); // imprime false