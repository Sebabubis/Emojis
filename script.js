"use strict";

//creamos el array con emojis
let myArray = ["👻", "👹", "👽"];
console.log(myArray);
//crear un nuevo array con un map que recorre los emojis
const myCards = myArray.map((emoji) => {
  console.log(emoji);
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
console.log(myCards);

//seleccionamos el body del HTML
const body = document.querySelector("body");
console.log(body);

//añadimos al body solo el contenido del array de cartas
body.append(...myCards);

//seleccionamos todas las cartas del HTML
const cards = document.querySelectorAll(".card");

//Declaramos la funcion para darle la vuelta a las cartas
const reveal = (e) => {
  //selecciona a la carta que le dimos click (evento click)
  const currentCard = e.currentTarget;
  console.log(currentCard);

  //aquí añadimos la clase flipped a la carta
  //y esto es lo que hace que se de realmente la vuelta
  currentCard.classList.add("flipped");
  //ejecuta algo al cabo de un segundo a la currentCard
  /*setTimeout(() => { 
//le quita la clase, poniendola de nuevo boca abajo
    currentCard.classList.remove("flipped");
  }, 1000);*/
};

for (const card of cards) {
  card.addEventListener("click", reveal);
}
