// FOOTER

// Accedemos al elemento que contiene el contenido del footer
const footer = document.getElementById("footer");

// Incrementamos un footer a nuestro documento
footer.innerHTML += `
    <div class="container-fluid mb-4">
        <div class="row">
            <div class="d-flex justify-content-end">
                <p class="text-muted">Copyright © 2025 Lautaro Leal</p>
            </div>
            <div class="d-flex justify-content-evenly">
                <div class="d-flex gap-5">
                    <a href="https://www.instagram.com/lautaro_leall/" class="btn btn-outline-danger">Instagram</a>
                    <a href="https://github.com/LautaroLeall" class="btn btn-outline-dark">GitHub</a>
                    <a href="https://www.linkedin.com/in/lauldp/" class="btn btn-outline-primary">Linkedin</a>
                </div>
            </div>
        </div>
    </div>
`;