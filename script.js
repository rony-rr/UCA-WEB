// script.js

// inicializador de contenido JS hasta tener cargado el DOM
document.addEventListener("DOMContentLoaded", async () => {
  const arrMenus = [];

  const CreateMenus = () => {
    let content = `
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    `;

    for (let i = 0; i < 50; i++) {
      let obj = {
        id: i + 1,
        content,
      };

      arrMenus.push(obj);
    }
  };

  CreateMenus();

  const AddMenus = () => {
    let menus = "";
    arrMenus.forEach((el, i) => {
      const menu = `
        <div class="menu">
          <h4 id"title_menu_${el.id}" class="title_menu">Menu: ${el.id}</h4>
          <p class="menu_content">${el.content}</p>
        </div>
      `;

      menus = `${menus}${menu}`;
    });

    document.getElementById("content").innerHTML = menus;
  };

  AddMenus();

  // const arrTpmPosts = [];

  // const recoverPosts = () => {
  //   const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

  //   for(let i=0; i < 50; i++) {
  //     let obj = {
  //       id: i + 1,
  //       content
  //     };

  //     arrTpmPosts.push(obj);
  //   }
  // };

  // recoverPosts();

  // const FnAddPost = () => {
  //   let posts = '';
  //   arrTpmPosts.forEach((el, i) => {
  //     const post = `
  //       <div class="post">
  //         <h4 id"title_promo_${el.id}" class="title_promo">Promocion: ${el.id}</h4>
  //         <p class="promo_content">${el.content}</p>
  //       </div>
  //     `;

  //     posts = `${posts}${post}`;
  //   });

  //   document.getElementById("content").innerHTML = posts;

  //   console.log({posts});
  // };

  // FnAddPost();

  // const post = '<div class="post"></div>';
  // document.getElementById("content").innerHTML = post;

  // const arrTmp = [1, 2]
  // arrTmp.push(3);

  // const FnAddPost = async () => {

  //   arrTmp.push(100);
  //   arrTmp.push({
  //     id: 1,
  //     nombre: "Rony"
  //   });
  //   arrTmp.push("Todos 10");
  //   console.log(arrTmp);
  // };

  // await FnAddPost();

  // const elementP = document.querySelector("p#texto__variable");
  // const loadingElement = document.querySelector("p#texto__carga");

  // función de cambio de texto desde un API externa
  // usamos una función asincronica
  // async function chargeText() {
  //   loadingElement.style.display = "block";

  //   // Acá el Fetch API devuelve un objeto Promise
  //   await fetch("https://jsonplaceholder.typicode.com/users/1")
  //     .then((respuesta) => respuesta.json())
  //     .then((datos) => {
  //       setTimeout(() => {
  //         changeTextP(`Nombre: ${datos.name}`);
  //         loadingElement.style.display = "none";
  //       }, 1000);
  //     });
  // }

  // uso mediante la ejecución de async/await
  // async function chargeTextAwait() {
  //   // Dado que Fetch devuelve un objeto Promise,
  //   // esto significa que también puede usar la sintaxis async/await
  //   // para reemplazar los métodos .then() y .catch()
  //   // otra forma de escrkibirlo seía mediante un cambio de manejo
  //   loadingElement.style.display = "block";
  //   const respuesta = await fetch(
  //     "https://jsonplaceholder.typicode.com/users/2"
  //   );
  //   const jsonRes = await respuesta.json();
  //   setTimeout(() => {
  //     changeTextP(`Email: ${jsonRes.email}`);
  //     loadingElement.style.display = "none";
  //   }, 1000);
  // }

  // function changeTextP(name) {
  //   elementP.textContent = name;
  // }

  // document.querySelector(".wrapButtons button:nth-child(1)").onclick =
  //   chargeText;
  // document.querySelector(".wrapButtons button:nth-child(2)").onclick =
  //   chargeTextAwait;
});
