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
myp.setAttribute("class", "creando-clase-DOM"); // .setAttribute es donde pongo las propiedades de atributo del elemento
myp.innerText = "Soy un Nodo HTML creado desde JS con DOM";
myp.style.border = "2px solid blue"; // .style; es donde pongo las propiedades de estilo del elemento
myp.style.color = "red";
myp.style.fontSize = "22px";
myp.style.backgroundColor = "yellow";
myp.style.width = "500px";
myp.style.textAlign = "center";
document.body.appendChild(myp);
console.log(myp);
// <p style="border: 2px dotted blue; color: red; font-size: 22px; background-color: yellow; width: 300px; text-align: center;">Fui creado desde JS con DOM</p>

// Clonar NODOS HTML con DOM
const titleMain = document.getElementById('title-main');
// sin su contenido
const clone = titleMain.cloneNode(false);
console.log(clone);
// con su contenido
const clone2 = titleMain.cloneNode(true);
console.log(clone2);

// Espicificar donde agregar los nodos HTML con DOM 
document.body.insertBefore(
    document.createTextNode("Hola Mundo soy un firstChild del body realizado con DOM"),
    document.body.firstChild // al inicio del body
);

// Eliminar NODOS HTML con DOM
const text = document.getElementsByClassName('removed-p')[0];
text.parentNode.removeChild(text); // Elimina el nodo
console.log(text); // elemento eliminado

// Reemplazar NODOS HTML con DOM
const replaced = document.getElementsByClassName('replaced-p')[0];
const nuevoParrafo = document.createElement('p');
nuevoParrafo.setAttribute('class', 'parrafo-reemplazado-DOM');
nuevoParrafo.innerText = 'Este es el nuevo texto que reemplaza al anterior.';
replaced.parentNode.replaceChild(nuevoParrafo, replaced); // Reemplaza el nodo
console.log(replaced); // elemento reemplazado
console.log(nuevoParrafo); // nuevo elemento

// EVENTOS HTML con DOM
const modoOscuro = () => {
    document.body.style.backgroundColor = 'rgb(15, 15, 15)';
    document.body.style.color = 'hsl(0, 0.00%, 100.00%)';
    const botones = document.getElementsByTagName('button');
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = 'hsl(0, 1.30%, 30.20%)';
    }
}

const modoClaro = () => {
    document.body.style.backgroundColor = 'hsl(0, 0.00%, 100.00%)';
    document.body.style.color = 'rgb(15, 15, 15)';
    const botones = document.getElementsByTagName('button');
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = 'hsl(0, 0.00%, 100.00%)';
    }
}

const saludar = () => {
    const nombre = prompt('Cual es tu nombre?');
    const mostrar =  nombre.toLocaleUpperCase();
    alert(`HOLA ${mostrar}`);
}

const neon = document.createElement('p');
neon.innerText = 'Este texto debe tener un EFECTO NEON';
neon.style.fontSize = '30px';
neon.style.color = 'rgb(0, 0, 0)';
neon.style.textShadow = '-2px 2px 14px rgba(255,0,0,1)';
document.body.appendChild(neon);
let colorActual = 'rojo';
setInterval(() => {
    if (colorActual == 'rojo') {
        neon.style.textShadow = '-2px 2px 14px rgba(0,255,116,1)';
        colorActual = 'verde';
    } else if (colorActual == 'verde') {
        neon.style.textShadow = '-2px 2px 14px rgba(255,0,0,1)';
        colorActual = 'rojo';
    }
}, 1500);
