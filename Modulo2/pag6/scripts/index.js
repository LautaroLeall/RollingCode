// POO (Programacion Orientada a Objetos)

// Creando un objeto
const persona = {
    nombre: "Lautaro",
    apellido: "Leal Del Prete",
    edad: 20,
    pais: "Argentina",
    email: "lautaroleal4@gmail.com",
    password: "12345",
}

// Obtener datos de un objeto (dos maneras)
// 1.
alert(`El nombre del usuario es ${persona.nombre}`)
// 2.
alert(`El apellido del usuario es ${persona["apellido"]}`);

// Modificar datos de un objeto
// Agregar propiedad 
persona.membresia = true;
// Modificar valor
persona.membresia = false;
// Eliminar propiedad
delete persona.membresia;

console.log(persona)

// Recorriendo un objeto (dos maneras)
// 1.
for (const key in persona){
    if (persona.hasOwnProperty(key)){
        // hasOwnProperty → devuelve un valor booleano que indica si el objeto tiene la propiedad especificada como propio 
        console.log(persona[key]);
    }
}
// 2.
