// NAVBAR

// Accedemos al elemento que contiene el contenido de la navBar
const navBar = document.getElementById("navContainer");

// Variables para definir las rutas de nuestra pagina <a> </a>
let urlHome;
let urlRegister;
let urlLogin;

// Condicional para asignar las rutas de nuestra pagina <a> </a>
if (window.location.href == 'http://127.0.0.1:5500/Modulo2/pag13/index.html') {
    urlHome = 'index.html';
    urlRegister = './pages/register.html';
    urlLogin = './pages/login.html';
} else {
    urlHome = '../index.html';
    urlRegister = '../pages/register.html';
    urlLogin = '../pages/login.html';
}

// Accedemos al AUTH USER del localStorage (usuarios registrados)
const authUser = JSON.parse(localStorage.getItem('authUser'));

// Incrementamos un navbar de bootstrap a nuestro documento
navBar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand disabled text-secondary fw-bold" href="#">2do Proyecto</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-2" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link active fw-bold" aria-current="page" href="${urlHome}">Inicio</a>
                    </li>
                    <div class="d-flex gap-2">
                        <li class="nav-item">
                            <a class="nav-link active text-success fw-medium" id="loginLink" aria-current="page" href="${urlLogin}">Iniciar Sesion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-success fw-medium" id="registerLink" aria-current="page" href="${urlRegister}">Registrarse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-danger fw-medium" id="logoutLink" aria-current="page" href="#" onclick="logOut()">Cerrar Sesion</a>
                        </li>
                    </div>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
`;

const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const logoutLink = document.getElementById("logoutLink");

// Funcion para Cerrar Sesion
const logOut = () => {
    // Eliminamos el AUTH USER del localStorage
    localStorage.removeItem('authUser');
    window.location.href = "./pages/login.html";
}

// Condicional para mostrar los botones según el estado de autenticación
if (authUser) {
    // Usuario autenticado
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutLink.style.display = "flex";
} else {
    // Usuario no autenticado
    loginLink.style.display = "flex";
    registerLink.style.display = "flex";
    logoutLink.style.display = "none";
}
