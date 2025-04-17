// REPASO 

// Objeto de manera NOTACION LITERAL
const persona = {
    nombre: "Lautaro",
    apellido: "Leal Del Prete",
    edad: 20,
    pais: "Argentina",
    email: "lautaroleal4@gmail.com",
    password: "12345",
}

// DATOS | VALORES
// Agregar
persona.mayorEdad = true;
// Modificar
persona.nombre = "Gonzalo";
// Eliminar
delete persona.password;
// Mostrar
console.log(persona);

// RECORRIENDO DATOS
const keys = Object.keys(persona);
// Object.keys → devuelve un array con los nombres de las PROPIEDADES del objeto (Las CARACTERISTICAS)
// Es decir en este caso los nombres de las propiedades del objeto persona
document.write(`${keys}<br>`);

// ACCEDER A LOS DATOS
keys.map((key) => {
    // imprime el valor de la propiedad por cada key
    document.write(`${key}: ${persona[key]}<br>`);
})

