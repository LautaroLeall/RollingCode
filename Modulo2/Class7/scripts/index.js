// REPASO 

// Objeto de manera NOTACION LITERAL
const usuario = {
    nombre: "Lautaro",
    apellido: "Leal Del Prete",
    edad: 19,
    pais: "Argentina",
    email: "lautaroleal4@gmail.com",
    password: "12345",
};

// DATOS | VALORES
// Agregar
usuario.mayorEdad = true;
// Modificar
usuario.edad = "20";
// Eliminar
delete usuario.pais;
// Mostrar
console.log(usuario);

// RECORRIENDO DATOS
const keys = Object.keys(usuario);
// Object.keys → devuelve un array con los nombres de las PROPIEDADES del objeto (Las CARACTERISTICAS)
// Es decir en este caso los nombres de las propiedades del objeto usuario
document.write(`Array con los nombres de las propiedades del objeto usuario (creado con Object.keys): ${keys}<br>`);

// ACCEDER A LOS DATOS
keys.map((key) => {
    // .map → ejecuta una funcion para cada elemento del array
    document.write(`<br>${key}: ${usuario[key]}<br>`);
    // ${key} es el nombre de la propiedad
    // ${usuario[key]} es el valor de la propiedad
})

// CLASE CONSTRUCTORA
class Persona {
    //Clase CONSTRUCTORA para crear objetos
    constructor(nombre, apellido, edad, pais, gmail, contraseña) {
        this.name = nombre;
        this.lastName = apellido;
        this.age = edad;
        this.country = pais;
        this.email = gmail;
        this.password = contraseña;
    }
}
//Crear objeto con CONSTRUCTOR
const persona1 = new Persona("Gonzalo", "Martinez", "21", "Argentina", "gonzalo@gmail.com", "Test123");
console.log(persona1);

const persona2 = new Persona("Benjamin", "Zelaya", "19", "Argentina", "benjamin@gmail.com", "BetoCrack");
console.log(persona2);

// SETTER Y GETTER (son funciones)
// set = setea un valor (modificar)
// get = devuelve un valor (obtener)
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    set actualizarPrecio(precio) {
        this.precio = precio;
    }
    get precioFormateado() {
        return this.precio.toFixed(2);
        // .toFixed(2) → Arregla el decimal (con dos decimales)
    }
}
const producto1 = new Producto("Jugo de Naranja", 17);
console.log(producto1);
// Usando set 
producto1.actualizarPrecio = 23;
// Usando get
console.log(`Precio actualizado: $${producto1.precioFormateado}`);
// Objeto actualizado
console.log(producto1);

// OTRO EJEMPLO
class Rectangle {
    constructor(height = 0, width = 0) {
        this._height = height;
        this._width = width;
    }
    // nueva altura
    set changeHeight(height) {
        this._height = height;
    }
    // nuevo ancho 
    set changeWidth(width) {
        this._width = width;
    }
    // area del rectangulo
    get area() {
        return this._height * this._width;
        // area = altura * ancho
        // funcion con retorno (devuelve un valor)
        // los getter siempre devuelven un valor (siempre tienen retorno)
    }
}
let rectangulo = new Rectangle();
rectangulo.changeHeight = 10;
rectangulo.changeWidth = 20
rectangulo.area;
console.log(rectangulo);