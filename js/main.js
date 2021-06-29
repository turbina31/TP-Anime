// Chequeo si el browser puede usar Service Worker
window.addEventListener("load", () => {
  // Chequeo si el browser puede usar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js')
      .then(reg => {
        console.log("Service worker esta listo!");
      });
}
else {
  console.log("Service worker no soportado.");
}

let main = document.querySelector('section-notification');
  
// Event Listener para Offline/ Online Status
window.addEventListener('offline', event => {
  main.style.display = 'block';
});

window.addEventListener('online', event => {
  main.style.diplay = 'block';
});

// A veces este evento falla, ojo!
// Sirve para saber si el navegador esta offline, cuando entramos offline. 
// Es decir, no se disparo los eventos de arriba aun, y necesito conocer el estado.
// if (!navigator.onLine) {

if (!navigator.onLine) {
  main.style.display = 'block';
}
});
