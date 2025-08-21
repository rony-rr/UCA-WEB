// script.js

document.addEventListener("DOMContentLoaded", () => {
  const elementP = document.querySelector("#content > p");
  const elementWrap = document.querySelector("#content > #wrap__imgs");

  function changeTextP() {
    elementP.innerHTML = "Esta funcion se ejecuto.";
  }

  function wrapImgsChangeOrder() {
    elementWrap.style.flexDirection = "column";
  }
  
  document.querySelector(".wrapButtons button:nth-child(1)").onclick =
    changeTextP;
  document.querySelector(".wrapButtons button:nth-child(2)").onclick = wrapImgsChangeOrder;
});
