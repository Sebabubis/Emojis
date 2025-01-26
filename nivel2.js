"use strict";

//tendré los emojis aquí por comodidad por si borro en las pruebas
// ["👻", "👹", "👽", "🙈", "🤩", "🥶", "🤪", "💩", "🫠","🤡","💀","🐶"];

//creamos el array con emojis

let myArray2 = [
  "👻",
  "👹",
  "👽",
  "🙈",
  "🤩",
  "🥶",
  "🤪",
  "💩",
  "🫠",
  "🤡",
  "💀",
  "🐶",
];

let myCopy2 = [...myArray2, ...myArray2];
//console.log(myArray);
//crear un nuevo array con un map que recorre los emojis

//declaramos variables:
//seleccionamos el main del HTML
const main = document.querySelector("main");
const button = document.querySelector("button");
//para el contador, selecciono el h2

const contador = document.querySelector("h2");

let carta1;
let carta2;
let intentos;
let paresRevelados;
let bloqueo = false;
button.addEventListener("click", start);
function init() {
  carta1 = null;
  carta2 = null;
  intentos = 0;
  paresRevelados = 0;
  main.innerHTML = "";
  contador.innerHTML = "";
  bloqueo = false;
}
function start() {
  init();
  myCopy2.sort(() => Math.random() - 0.5);

  const myCards2 = myCopy2.map((emoji) => {
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
  main.append(...myCards2);
  console.log(main);
  //seleccionamos todas las cartas del HTML
  const cards = document.querySelectorAll(".card");
  //Declaramos la funcion para darle la vuelta a las cartas

  let reveal = (e) => {
    if (bloqueo) return;
    const currentCard = e.currentTarget;

    currentCard.classList.add("flipped");

    if (!carta1) {
      carta1 = currentCard;
      return;
    }

    //he hecho para que no pueda clicar siempre la misma carta, pero me da un error en la consola. Pero el juego sigue funcionando.
    if (currentCard !== carta1) {
      carta2 = currentCard;
      bloqueo = true;
    }
    // }
    //console.log(carta1.textContent === carta2.textContent);

    if (carta1.textContent === carta2.textContent) {
      carta1 = null;
      carta2 = null;

      paresRevelados++;
      bloqueo = false;

      console.log("has acertado");
    } else {
      setTimeout(() => {
        carta1.classList.remove("flipped");
        carta2.classList.remove("flipped");
        carta1 = null;
        carta2 = null;
        bloqueo = false;
      }, 1000);
    }

    intentos++;
    console.log(intentos);
    if (intentos < 2) {
      contador.innerHTML = `LLevas ${intentos} intento`;
    } else {
      contador.innerHTML = `LLevas ${intentos} intentos `;
    }

    if (paresRevelados === myArray2.length) {
      setTimeout(() => {
        alert(`¡Has terminado! tu resultado final es:  ${intentos} intentos.`);
        start();
      }, 500);
    }
  };

  for (const card of cards) {
    card.addEventListener("click", reveal);
  }
}
start();
