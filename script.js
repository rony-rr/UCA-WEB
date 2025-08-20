// script.js

document.addEventListener("DOMContentLoaded", () => {
  const elementH3 = document.querySelector("#content > h3");
  const elementWrap = document.querySelector("#wrap");

  function changeColorh3() {
    elementH3.style.color = "white";
  }

  function wrapChangeColor() {
    elementWrap.style.backgroundColor = "#F6339A";
  }

  function redirect() {
    window.location.assign("https://www.w3schools.com/tags/default.asp");
  }

  function changeTexth3() {
    elementH3.innerHTML = "Nuevo Título";
  }

  setTimeout(() => {
    elementH3.innerHTML = "Cambio automático del texto";
  }, 5000);

  // 👇 asocia los botones aquí mejor que con "onclick" en HTML
  document.querySelector(".wrapButtons button:nth-child(1)").onclick =
    wrapChangeColor;
  document.querySelector(".wrapButtons button:nth-child(2)").onclick = redirect;
  document.querySelector(".wrapButtons button:nth-child(3)").onclick =
    changeTexth3;
  document.querySelector(".wrapButtons button:nth-child(4)").onclick =
    changeColorh3;
});
