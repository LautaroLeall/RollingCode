// Objetos que podemos acceder mediante al BOM
// WINDOW
// window seria el objeto

// window.navigator
// Acceder a los datos del navegador (todos los datos que nos devuelve el navegador)
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.plataform);
console.log(window.navigator.languaje);
console.log(window.navigator.onLine);

// window.location
// Acceder a los datos de la pagina
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.pathname);

// window.history
// Acceder a los datos de la historia de la pagina
console.log(window.history.length);
// Se puede activar desde la conosola de la pagina (F12)
    // window.history.back() → vuelve a la pagina anterior
    // window.history.forward() → vuelve a la pagina siguiente

// window.frames
// Acceder a los frames de la pagina
console.log(window.frames);

// window.screen
// Acceder a los datos de la pantalla
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen.colorDepth);
console.log(window.screen.orientation);

// Funciones para Manejar el Tiempo con BOM

//setIterval
// recibe una funcion CALLBACK y un tiempo en milisegundos
const interval = setInterval(() => {
    console.log("Hola soy un SetInterval");
}, 2000)
// se ejecuta cada 2 segundos (se ejecuta 7 veces hasta utilizar el clearInterval)

//setTimeout
// recibe una funcion CALLBACK y un tiempo en milisegundos (se ejecuta solo una vez)
setTimeout(() => {
    console.log("Hola soy un SetTimeout>");
}, 5000)
// se ejecuta despues de 5 segundos / despues de ejecutarse dos veces el SetInterval

//clearInterval
// recibe un intervalo que se ha creado con setInterval
setTimeout(() => {
    console.log("Aca cortamos el SetInterval");
    clearInterval(interval);
}, 14000)
// se ejecuta despues de 14 segundos y corta el SetInterval

// DOM
// DOM es un lenguaje de programacion que nos permite manipular el HTML
// DOCUMENT
// document seria el objeto

// Acceder a los elementos del DOM
document.body.innerText += "Hola Mundo soy un innerText";
document.body.innerHTML += "<h1>Hola Mundo soy un innerHTML</h1>";
// con el inerHTML podemos insertar HTML (insertar nuevos nodos, nuevos elementos HTML)

// Seleccionando Elementos del DOM
const elemento = document.getElementsByTagName('h1');
console.log(elemento);

const elementos = document.getElementsByTagName('p');
console.log(elementos);
// con el getElementByTagName podemos seleccionar un elemento por su tag (NOS DEVUELVE UN ARRARY DE ELEMENTOS)

const clase = document.getElementsByClassName('title-main');
console.log(clase);
// con el getElementByClassName podemos seleccionar un elemento por su clase (NOS DEVUELVE UN ARRARY DE ELEMENTOS)

const id = document.getElementById('black-text');
console.log(id);
// con el getElementById podemos seleccionar un elemento por su id (NOS DEVUELVE EL ELEMENTO UNICO CON TODA SU INFORMACION)

