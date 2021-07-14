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
});

function hasNetwork(online) {
  let alert = document.querySelector('.alert')
  const txt1 = document.querySelector(".txt1");
  const txt2 = document.querySelector(".txt2");

  if (online) {
    txt2.classList.remove("offline");
    alert.style.backgroundColor = 'yellowgreen'
    txt2.style.diplay = 'none';
    txt2.textContent = '';
    txt1.classList.add("online");
    txt1.innerText = "Online";
//location.href = '../index.html';
  } else {
    alert.style.backgroundColor = 'salmon'
    txt1.classList.remove("online");
    txt1.style.diplay = 'none';
    txt1.textContent = '';
    txt2.classList.add("offline");
    txt2.innerText = "Offline";
location.href = 'offline/offline.html';
  }
}

window.addEventListener("load", () => {
  hasNetwork(navigator.onLine);

  window.addEventListener("online", () => {
    hasNetwork(true);
  });

  window.addEventListener("offline", () => {
    hasNetwork(false);
  });
});
