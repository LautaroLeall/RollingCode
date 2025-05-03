const container = document.getElementById('container');

const myProducts = [
    {
        id: 1,
        nombre: "Auriculares Inalambricos Gtheos",
        precio: 500,
        stock: 8,
        descripcion: "2.4 Ghz Para Pc, Ps4, Ps5",
        img: "./assets/auricular.png"
    },
    {
        id: 2,
        nombre: "Mouse Recargable Slim Inalámbrico",
        precio: 1000,
        stock: 3,
        descripcion: "2.4ghz Wireless Mac Pc Lin",
        img: "./assets/mouse.png"
    },
    {
        id: 3,
        nombre: "Kit Teclado + Mouse Inalambrico Noga",
        precio: 2500,
        stock: 16,
        descripcion: "S5700 Pc Notebook Usb Verde",
        img: "./assets/teclado.png"
    },
    {
        id: 4,
        nombre: "Kit Teclado + Mouse Inalambrico Noga",
        precio: 120,
        stock: 8,
        descripcion: "S5700 Pc Notebook Usb Verde",
        img: "./assets/teclado.png"
    },
    {
        id: 5,
        nombre: "Kit Teclado + Mouse Inalambrico Noga",
        precio: 500,
        stock: 6,
        descripcion: "S5700 Pc Notebook Usb Verde",
        img: "./assets/teclado.png"
    },
    {
        id: 6,
        nombre: "Kit Teclado + Mouse Inalambrico Noga",
        precio: 365,
        stock: 1,
        descripcion: "S5700 Pc Notebook Usb Verde",
        img: "./assets/teclado.png"
    },
]

myProducts.map((product) => {
    container.innerHTML +=
    `
        <div class="card mt-3 mb-4" style="width: 20rem; height: 28rem;">
            <img src="${product.img}" class="card-img-top h-50" alt="Imagen del Producto">
            <div class="card-body">
                <h5 class="card-title text-primary text-center">${product.nombre}</h5>
                <p class="card-text text-secondary text-center">${product.descripcion}</p>
                <div class="d-flex justify-content-around">
                    <p class="card-text text-success">$${product.precio}</p>
                    <p class="card-text text-danger">${product.stock} Disponible</p>
                </div>
                <a href="#" class="btn btn-outline-primary w-100">Comprar</a>
            </div>
        </div>
    `
})