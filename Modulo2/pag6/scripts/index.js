// Desarrollar un script que pida al usuario elegir una opcion (piedra, papel, tijera)
// Tiene q calcular automaticamente una opcion para la calculadora
// Comparar dos Valores
// Definir un ganador

// Elegir una Opcion "USUARIO"
const opciones = ["piedra ", "papel", "tijera"];
alert ("Bienvenido al Juego de 🪨 📜 ✂️");
let usuario = () => {
    const opcionUser = prompt("Elige una Opcion 🪨 📜 ✂️​").toLowerCase();
    if (opciones.includes(opcionUser)){
        // .includes devuelve true si el array contiene el valor, false si no
        // evalua si la opcion elegida esta dentro de la lista de opciones (dentro del array)
        return opcionUser;
    }else {
        alert("Opcion Incorrecta 😭, Inténtalo de Nuevo 😎");
        usuario();
    }
};
usuario();

// Elegir una Opcion "COMPUTADORA"

//OPCION PARA HACERLO + CORTO
// const opcionComputer = () => {
//     const indice = Math.floor(Math.random() * 3);
//     return opciones[indice];
// }
// alert(`La Computadora eligio ${opcionComputer()}`);

// OPCION PARA HACERLO + LARGO
let opcionComputer = Math.floor(Math.random() * 3);
switch (opcionComputer) {
    case 0:
        alert("La Computadora eligio piedra 🪨");
        opcionComputer = "piedra"
        break;
    case 1:
        alert("La Computadora eligio papel 📜");
        opcionComputer = "papel"
        break;
    case 2:
        alert("La Computadora eligio tijera ✂️");
        opcionComputer = "tijera"
        break;
}

// Comparar dos Valores
let ganador = () => {
    if (opcionComputer === opcionUser) {
        console.log("Empate 😐");
    }else if (opcionComputer !== opcionUser) {
        switch (opcionComputer) {
            case 0:
                console.log("El ganador es la 🪨 piedra");
                break;
            case 1:
                console.log("El ganador es el 📜 papel");
                break;
            case 2:
                console.log("El ganador es el ✂️ tijera");
                break;
        }
    }
}
ganador();

// ME QUEDE EN 
// 1 HORA
// 37 MIN
// 08 SEG
