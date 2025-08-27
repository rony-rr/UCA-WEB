// script.js

// inicializador de contenido JS hasta tener cargado el DOM
document.addEventListener("DOMContentLoaded", () => {
  const elementP = document.querySelector("p#texto__variable");
  const loadingElement = document.querySelector("p#texto__carga");

  // función de cambio de texto desde un API externa
  // usamos una función asincronica
  async function chargeText() {
    loadingElement.style.display = "block";

    // Acá el Fetch API devuelve un objeto Promise
    await fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          changeTextP(`Nombre: ${datos.name}`);
          loadingElement.style.display = "none";
        }, 1000);
      });
  }

  // uso mediante la ejecución de async/await
  async function chargeTextAwait() {
    // Dado que Fetch devuelve un objeto Promise,
    // esto significa que también puede usar la sintaxis async/await
    // para reemplazar los métodos .then() y .catch()
    // otra forma de escrkibirlo seía mediante un cambio de manejo
    loadingElement.style.display = "block";
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const jsonRes = await respuesta.json();
    setTimeout(() => {
      changeTextP(`Email: ${jsonRes.email}`);
      loadingElement.style.display = "none";
    }, 1000);
  }

  function changeTextP(name) {
    elementP.textContent = name;
  }

  document.querySelector(".wrapButtons button:nth-child(1)").onclick =
    chargeText;
  document.querySelector(".wrapButtons button:nth-child(2)").onclick =
    chargeTextAwait;
});
