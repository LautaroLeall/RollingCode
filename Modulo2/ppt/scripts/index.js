// Desarrollar un script que pida al usuario elegir una opcion (piedra, papel, tijera)
// Tiene q calcular automaticamente una opcion para la calculadora
// Comparar dos Valores
// Definir un ganador

// Elegir una Opcion "USUARIO"
const opciones = ["piedra", "papel", "tijera"];
alert("Bienvenido al Juego de 🪨 📜 ✂️");
const usuario = () => {
    const opcionUser = prompt("Elige una Opcion 🪨 📜 ✂️​").toLowerCase();
    if (opciones.includes(opcionUser)) {
        // .includes devuelve true si el array contiene el valor, false si no
        // evalua si la opcion elegida esta dentro de la lista de opciones (dentro del array)
        return opcionUser;
    } else {
        alert("Opcion Incorrecta 😭, Inténtalo de Nuevo 😎");
        usuario();
    }
};

// Elegir una Opcion "COMPUTADORA"
// OPCION PARA HACERLO + LARGO
const opcionComputer = () => {
    const computer = Math.floor(Math.random() * 3);
    switch (computer) {
        case 0:
            alert("La Computadora eligio piedra 🪨");
            return "piedra";
        case 1:
            alert("La Computadora eligio papel 📜");
            return "papel";
        case 2:
            alert("La Computadora eligio tijera ✂️");
            return "tijera";
    }
}
//OPCION PARA HACERLO + CORTO
// const opcionComputer = () => {
//     const indice = Math.floor(Math.random() * 3);
//     return opciones[indice];
// }
// alert(`La Computadora eligio ${opcionComputer()}`);

// Comparar dos Valores (definir ganador)
const determinarGanador = (usuario, opcionComputer) => {
    if (usuario == opcionComputer) {
        return "Empate 😐";
    } else if ((usuario === "piedra" && opcionComputer === "tijera")
        ||
        (usuario === "papel" && opcionComputer === "piedra")
        ||
        (usuario === "tijera" && opcionComputer === "papel")) {
        return "Ganador: Usuario 😎";
    } else {
        return "Ganador: Computadora 😭";
    }
}

const iniciarJuego = () => {
    const seleccionUsuario = usuario();
    const seleccionComputer = opcionComputer();
    const resultado = determinarGanador(seleccionUsuario, seleccionComputer);
    alert(resultado);
}
iniciarJuego();
