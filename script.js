"use strict";

//tendré los emojis aquí por comodidad por si borro en las pruebas
// ["👻", "👹", "👽", "🙈", "🤩", "🥶", "🤪", "💩"];

//creamos el array con emojis

let myArray = ["👻", "👹", "👽", "🙈", "🤩", "🥶", "🤪", "💩"];

let myCopy = [...myArray, ...myArray];
//console.log(myArray);
//crear un nuevo array con un map que recorre los emojis

//declaramos variables:
//seleccionamos el main del HTML
const main = document.querySelector("main");

//para el contador, selecciono el h2

const contador = document.querySelector("h2");

let carta1;
let carta2;
let intentos;
let paresRevelados;

function init() {
  carta1 = null;
  carta2 = null;
  intentos = 0;
  paresRevelados = 0;
  main.innerHTML = "";
  contador.innerHTML = "";
}
function start() {
  init();
  myCopy.sort(() => Math.random() - 0.5);

  const myCards = myCopy.map((emoji) => {
    //creamos un elemento de tipo "section"
    const section = document.createElement("section");
    //añadimos la clase "card"
    section.classList.add("card");
    //añadimos el contenido a la carta
    section.innerHTML = `<div class="content">
  <div class="front">❔</div>
  <div class="back">${emoji}</div>
  </div>`;
    //con el return devolvemos la section
    return section;
    console.log(section);
  });
  //console.log(myCards);

  //console.log(contador.textContent);

  //añadimos al main solo el contenido del array de cartas
  main.append(...myCards);
  console.log(main);
  //seleccionamos todas las cartas del HTML
  const cards = document.querySelectorAll(".card");
  //Declaramos la funcion para darle la vuelta a las cartas

  let reveal = (e) => {
    const currentCard = e.currentTarget;

    currentCard.classList.add("flipped");

    if (!carta1) {
      carta1 = currentCard;
      return;
    }
    // if (currentCard !== carta1 && currentCard !== carta2) {
    carta2 = currentCard;
    // }
    //console.log(carta1.textContent === carta2.textContent);

    if (carta1.textContent === carta2.textContent) {
      carta1 = null;
      carta2 = null;

      paresRevelados++;

      console.log("has acertado");
    } else {
      setTimeout(() => {
        carta1.classList.remove("flipped");
        carta2.classList.remove("flipped");
        carta1 = null;
        carta2 = null;
      }, 1000);
    }

    intentos++;
    console.log(intentos);
    contador.innerHTML = `LLevas ${intentos} intentos`;

    if (paresRevelados === myArray.length) {
      setTimeout(() => {
        alert(`Has terminado, el resultado final:  ${intentos} intentos.`);
        start();
      }, 500);
    }
  };

  for (const card of cards) {
    card.addEventListener("click", reveal);
  }
}
start();
