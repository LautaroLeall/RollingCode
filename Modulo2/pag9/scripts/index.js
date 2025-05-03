// Seleccionar Elementos HTML con DOM
const tag = document.getElementsByTagName('p');
console.log(tag[1]); // tag[1] es el segundo elemento <p>

console.log(tag[1].textContent); // .textContent es el texto del elemento <p>

console.log(tag[1].tagName); // .tagName es el nombre del elemento <p>

// Utilizando Query Selector
const querySelector = document.querySelector('#title'); // accede al primer elemento con el id "title"
console.log(querySelector); // querySelector es el elemento <h1>

// Acceder a todos los Elementos con el  Query Selector
const querySelectorAll = document.querySelectorAll('.container-p'); // accede a todos los elementos con la clase "container-p"
console.log(querySelectorAll); // querySelectorAll es un Array con todos los elementos <h1>

// Agregar NODOS HTML con DOM
let myp = document.createElement("p"); // le puedo dar cualquier etiqueta HTML que quiera
// crea un nuevo elemento <p>
myp.setAttribute("class", "creando-clase-DOM"); // setAttribute es donde pongo las propiedades de atributo del elemento
myp.innerText = "Fui creado desde JS con DOM";
myp.style; // .style es donde pongo las propiedades de estilo del elemento
myp.style.border = "2px solid blue";
myp.style.color = "red";
myp.style.fontSize = "22px";
myp.style.backgroundColor = "yellow";
myp.style.width = "300px";
myp.style.textAlign = "center";
document.body.appendChild(myp);
console.log(myp);
// <p style="border: 2px dotted blue; color: red; font-size: 22px; background-color: yellow; width: 300px; text-align: center;">Fui creado desde JS con DOM</p>

// Clonar NODOS HTML con DOM
// sin su contenido
const titleMain = document.getElementById('title-main');
const clone = titleMain.cloneNode(false);
console.log(clone);
// con su contenido
const clone2 = titleMain.cloneNode(true);
console.log(clone2);

// Espicificar donde agregar los nodos HTML con DOM
document.body.insertBefore(
    document.createTextNode("Hola Mundo soy un firstChild del body realizado con DOM"),
    document.body.firstChild		
)

// Eliminar NODOS HTML con DOM
const text = document.getElementsByClassName('removed-p')[0];
const remove = text.remove();
// document.body.removeChild(); NO ME FUNCIONA ESTA FUNCION QUE SE VE EN ROLLING CODE

// Remplazar NODOS HTML con DOM
const replaced = document.getElementsByClassName('replaced-p')[0];
replaced.innerText = "Acabo de reemplazar el texto desde JS con DOM";
// document.body.replace(); NO ME FUNCIONA ESTA FUNCION QUE SE VE EN ROLLING CODE

// EVENTOS HTML con DOM
// 1 : 10 : 02
