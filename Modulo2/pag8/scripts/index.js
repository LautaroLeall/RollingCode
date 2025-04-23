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

// clase no terminada 
// 1:00:52