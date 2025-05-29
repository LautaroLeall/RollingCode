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

const submitBtn = document.getElementById("submit");
const user = new User();

// EXPRECION REGULAR PARA VALIDAR EL FORMULARIO / INPUTS
const regexNames = /^[A-Za-z\s]{3,15}$/;
const regexEmail = /^[\w]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
const regexUserName = /^[A-Za-z0-9_-]{5,20}$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,25}$/;

const validateSubmit = () => {
    const isNameValid = regexNames.test(user.name); // Validamos el nombre
    const isLastNameValid = regexNames.test(user.lastName); // Validamos el apellido
    const isEmailValid = regexEmail.test(user.email); // Validamos el email
    const isUserNameValid = regexUserName.test(user.userName); // Validamos el nombre de usuario
    const isPasswordValid = regexPassword.test(user.password); // Validamos la contraseña
    const isRepeatPasswordValid = regexPassword.test(user.repeatPassword) // Validamos la repetición de la contraseña

    const validations = isNameValid && isLastNameValid && isEmailValid && isUserNameValid && isPasswordValid && isRepeatPasswordValid;
    return validations;
}

const hadleChange = (event) => {
    switch (event.target.id) {
        case "name":
            if (!regexNames.test(event.target.value)) {
                // Si no coincide con la expresión regular
                alert("El nombre debe contener entre 3 y 15 caracteres, y solo letras");
                user.name = "";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid rgb(76, 26, 26)";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                // .test(value) devuelve true si el valor coincide con la expresión regular
                user.name = event.target.value.toUpperCase();
                // Restablecer estilos si el valor es válido
                event.target.style.border = "1px solid #ccc"; // o el valor por defecto que uses
                event.target.style.boxShadow = "none";
            }
            break;
        case "lastName":
            if (!regexNames.test(event.target.value)) {
                alert("El apellido debe contener entre 3 y 15 caracteres, y solo letras");
                user.lastName = "";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.lastName = event.target.value.toUpperCase();
            }
            break;
        case "email":
            if (!regexEmail.test(event.target.value)) {
                alert("El email debe ser valido (ej: nombre@dominio.com)");
                user.email = "";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.email = event.target.value.toLowerCase();
            }
            break;
        case "userName":
            if (!regexUserName.test(event.target.value)) {
                alert("El nombre de usuario debe tener entre 5 y 20 caracteres, letras, números o guiones");
                user.userName = "";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.userName = event.target.value;
            }
            break;
        case "password":
            if (!regexPassword.test(event.target.value)) {
                alert("La contraseña debe contener una letra mayúscula, una letra minúscula, un número y una carácter especial (minimo 8 caracteres)");
                user.password = "";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.password = event.target.value;
            }
            break;
        case "repeatPassword":
            if (user.password !== event.target.value) {
                alert("Las contraseñas no coinciden");
                user.repeatPassword = "";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.repeatPassword = event.target.value;
            }
            break;
    }

    const validation = validateSubmit();
    if (validation) {
        // Si todos los campos son válidos, se elimina el atributo disabled
        submitBtn.removeAttribute('disabled'); // removeAttribute(name) elimina el atributo
    } else {
        // Si hay campos inválidos, se deshabilita el botón de enviar
        submitBtn.setAttribute('disabled', 'true'); // setAttribute(name, value)
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    const saveUser = JSON.parse(localStorage.getItem("Usuarios"));
    // consultamos si en el local storage existe el usuario
    if (saveUser) {
        // si existe, lo actualizamos (guardamos el objeto en el local storage)
        saveUser.push(user); // agregamos el usuario al array
        const userSerializado = JSON.stringify(saveUser); // convertimos el array a string
        localStorage.setItem("Usuarios", userSerializado); // guardamos el usuario en el local storage

        console.log(userSerializado)
    }
    else {
        // si no existe, lo creamos (guardamos el objeto en el local storage)
        let Usuarios = []; // creamos un array vacio
        Usuarios.push(user); // agregamos el usuario al array
        const userSerializado = JSON.stringify(Usuarios); // convertimos el array a string
        localStorage.setItem("Usuarios", userSerializado); // guardamos el string en el local storage

        console.log(userSerializado)
    }
}
