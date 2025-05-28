// FORMULARIO 
// Objeto de Formulario (Usuario)
// Clase Constructora
class User {
    constructor(name, lastName, email, userName, password) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
};

const user = new User();

const hadleChange = (event) => {
    user[event.target.id] = event.target.value; // Asignar/Capturar el valor al objeto
    // user[event.target.id] accedemos al objeto user y buscamos su id
    // Es decir si el id es name, asignar el valor al name (nombre)
    // Si no existe el id, crea un atributo con el id y asigna el valor

    // EXPRECION REGULAR PARA VALIDAR EL FORMULARIO / INPUTS
    const regexNames = /^[A-Za-z\s]{3,15}$/;
    // Valida nombres que:
        // Solo tengan letras (mayúsculas o minúsculas) y espacios.
        // Tengan entre 3 y 15 caracteres.
    const regexEmail = /^[\w]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
    // Valida emails con el formato:
        // Letras, números o guiones bajos, opcionalmente separados por puntos.
        // Seguido de @ y un dominio con puntos.
        // Termina en una extensión de 2 a 4 letras minúsculas (ej: .com, .net).
    const regexUserName = /^[A-Za-z0-9_-]{5,20}$/;
    // Valida nombres de usuario con el formato:
        // Letras, números o guiones bajos, opcionalmente separados por guiones.
        // Tienen entre 5 y 20 caracteres.
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,25}$/;
    // Valida contraseñas con el formato:
        // (?=.*[a-z]) → al menos una letra minúscula.
        // (?=.*[A-Z]) → al menos una letra mayúscula.
        // (?=.*\d) → al menos un número.
        // (?=.*[^A-Za-z0-9]) → al menos un carácter especial.
        // .{8,25} → longitud entre 8 y 25 caracteres.
    switch (event.target.id) {
        case "name":
            if (regexNames.test(event.target.value)) {
                // .test(value) devuelve true si el valor coincide con la expresión regular
                user.name = event.target.value.toUpperCase();
            } else {
                // Si no coincide con la expresión regular
                alert("El nombre debe contener entre 3 y 15 caracteres, y solo letras");
            }
            break;
        case "lastName":
            if (regexNames.test(event.target.value)) {
                user.lastName = event.target.value.toUpperCase();
            } else {
                alert("El apellido debe contener entre 3 y 15 caracteres, y solo letras");
            }
            break;
        case "email":
            if (regexEmail.test(event.target.value)) {
                user.email = event.target.value.toLowerCase();
            } else {
                alert("El email debe ser valido (ej: nombre@dominio.com)");
            }
            break;
        case "userName":
            if (regexUserName.test(event.target.value)) {
                user.userName = event.target.value;
            } else {
                alert("El nombre de usuario debe tener entre 5 y 20 caracteres, letras, números o guiones");
            }
            break;
        case "password":
            if (regexPassword.test(event.target.value)) {
                user.password = event.target.value;
            } else {
                alert("La contraseña debe contener una letra mayúscula, una letra minúscula, un número y una carácter especial (minimo 8 caracteres)");
            }
            break;
        case "repeatPassword":
            if (user.password !== event.target.value) {
                alert("Las contraseñas no coinciden");
            }
            break;
    }
}

const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que se envie el formulario (se recargue la página)

    const userSerializado = JSON.stringify(user); // Convierte el objeto en una cadena de texto (JSON)
    console.log(userSerializado); // Imprime la cadena de texto
    const userReconstruido = JSON.parse(userSerializado); // Convierte la cadena de texto en un objeto JS
    console.log(userReconstruido); // Imprime el objeto

    localStorage.setItem("Usuarios", userSerializado); // Almacena el objeto en el navegador (se guarda siempre)
    sessionStorage.setItem("Usuarios", userSerializado); // Almacena el objeto en la sesión (se borra al cerrar la página)
}

// Funciona con LocalStorage y SessionStorage
// localStorage.clear(); // Borra los datos de localStorage (todos los datos)
// localStorage.setItem("clave", valor); // Almacena el objeto en el navegador (se guarda siempre)
// localStorage.getItem("clave"); // Devuelve el objeto almacenado en localStorage
// localStorage.lenght; // Devuelve la cantidad de objetos almacenados en localStorage
// localStorage.removeItem("clave"); // Borra el objeto almacenado en localStorage (solo un objeto)