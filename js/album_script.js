"USE STRICT"

let lista = ["1989", "Red", "Evermore", "Fearless", "Folklore", "Tortured", "Speak-Now", "Reputation", "TS", "Lover", "Midnights", "T2"];

document.addEventListener("DOMContentLoaded", function() {
  let ul = document.querySelector("#lista_album");
  let ul2 = document.querySelector("#lista_album2");
  for (let i=0; i < 5; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = lista[i];
    a.href = `./${lista[i].replace(/\s+/g, '_')}.html`; // Reemplaza espacios por guión bajo si es necesario
    li.appendChild(a);
    ul.appendChild(li);
  };
  for (let i=5; i < lista.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = lista[i];
    a.href = `./${lista[i].replace(/\s+/g, '_')}.html`;
    li.appendChild(a);
    ul2.appendChild(li);
  };
});