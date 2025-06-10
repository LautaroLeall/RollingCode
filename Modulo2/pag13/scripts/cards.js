// CARDS

// Accedemos al elemento que contiene el contenido de las Cards
const cards = document.getElementById("cards");

// Creamos un array con los datos de las cartas
const myProducts = [
    {
        id: 1,
        nombre: "Auriculares Inalambricos Gtheos",
        precio: 500,
        stock: 8,
        descripcion: "2.4 Ghz Para Pc, Ps4, Ps5",
        img: "../assets/auricular.png"
    },
    {
        id: 2,
        nombre: "Mouse Recargable Slim Inalámbrico",
        precio: 1000,
        stock: 3,
        descripcion: "2.4ghz Wireless Mac Pc Lin",
        img: "../assets/mouseInalambrico.png"
    },
    {
        id: 3,
        nombre: "Kit Teclado + Mouse Inalambrico Noga",
        precio: 2500,
        stock: 16,
        descripcion: "S5700 Pc Notebook Usb Verde",
        img: "../assets/kitInalambrico.png"
    },
    {
        id: 4,
        nombre: "Kit Teclado + Mouse Inalambrico Noga",
        precio: 120,
        stock: 8,
        descripcion: "S5700 Pc Notebook Usb Verde",
        img: "../assets/kitInalambrico.png"
    },
    {
        id: 5,
        nombre: "Kit Teclado + Mouse Inalambrico Noga",
        precio: 500,
        stock: 6,
        descripcion: "S5700 Pc Notebook Usb Verde",
        img: "../assets/kitInalambrico.png"
    },
    {
        id: 6,
        nombre: "Kit Teclado + Mouse Inalambrico Noga",
        precio: 365,
        stock: 1,
        descripcion: "S5700 Pc Notebook Usb Verde",
        img: "../assets/kitInalambrico.png"
    },
]

// Incrementamos un navbar de bootstrap a nuestro documento
myProducts.map((product) => {
    cards.innerHTML += `
        <div class="card p-2" style="width: 20rem;">
            <img src="${product.img}" class="card-img-top h-50" alt="Imagen del Producto">
            <div class="card-body">
                <h6 class="card-title">${product.nombre}</h6>
                <p class="card-text">${product.descripcion}</p>
                <div class="d-flex justify-content-between">
                    <p class="card-text text-success">$${product.precio}</p>
                    <p class="card-text text-danger">${product.stock} Disponible
                </div>
                <a href="#" class="btn btn-outline-secondary w-100">Comprar</a>
            </div>
        </div>
    `;
});