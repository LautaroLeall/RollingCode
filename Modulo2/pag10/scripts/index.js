
// EVENTOS 
// Evento Tradicional
const saludar = () => {
    alert("Bienvenido a mi pagina");
};

// Evento Avanzado
const myButton = document.getElementById("btn");
myButton.addEventListener("click", saludar);
// addEventListener(eventName, function)
// eventName: El nombre del evento
// function: La funcion que se ejecutara cuando el evento ocurra (la funcion debe estar definida antes o funcion declarativa)

// FORMULARIO 
// Objeto de Formulario (Usuario)
// Clase Constructora
const User = function (name, lastName, email, userName, password) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.userName = userName;
    this.password = password;
};
// Obtener los datos del formulario
// Evento Tradicional
let nombre;
let apellido;
let email;
let userName;
let password;
let repeatPassword;

const handleName = (event) => {
    if (event.target.value.length < 3 || event.target.value.length > 15) {
        event.target.value = "";
        alert("El nombre debe tener al menos 3 caracteres");
    } else {
        nombre = event.target.value;
    }
}

const handleLastName = (event) => {
    if (event.target.value.length < 3 || event.target.value.length > 20) {
        event.target.value = "";
        alert("El apellido debe tener al menos 3 caracteres");
    } else {
        apellido = event.target.value;
    }
}

const handleEmail = (event) => {
    if (event.target.value.length < 6 || !event.target.value.includes("@")) {
        event.target.value = "";
        alert("Ingresa un email valido (>= 6 caracteres y @)");
    } else {
        email = event.target.value;
    }
}

const handleUserName = (event) => {
    if (event.target.value.length < 5 || event.target.value.length > 20) {
        event.target.value = "";
        alert("El nombre de usuario debe tener al menos 5 caracteres");
    } else {
        userName = event.target.value;
    }
}

const handlePassword = (event) => {
    const contieneNumero = /\d/.test(event.target.value); // Verifica si contiene al menos un dígito en el value
    // \d en una expresión regular detecta cualquier número del 0 al 9.
    // test(value) devuelve true si encuentra al menos un número.
    // !contieneNumero para rechazar contraseñas sin números.
    if (event.target.value.length < 8 || !contieneNumero) {
        event.target.value = "";
        alert("La contraseña debe tener al menos 8 caracteres y al menos un número");
    } else {
        password = event.target.value;
    }
}

const handleRepeatPassword = (event) => {
    if (event.target.value !== password) {
        alert("Las contraseñas no coinciden");
    } else {
        repeatPassword = event.target.value;
    }
}

const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que se envie el formulario (se recarga la página)
    console.log("Formulario enviado");
    const usuario = new User (nombre, apellido, email, userName, password); // Usuario creado
    localStorage.setItem("usuario", JSON.stringify(usuario)); // Almacenar usuario en localStorage
    // setItem(key, value) almacena la cadena de texto en localStorage
    // "usuario" es el nombre del objeto que se almacena en localStorage
    // JSON.stringify(usuario) convierte el objeto en una cadena de texto
}