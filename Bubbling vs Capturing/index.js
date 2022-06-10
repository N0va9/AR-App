/*

Lorsque vous travaillez avec des événements en JavaScript, vous avez la 
possibilité d'utiliser «bullage» ou «capture» pour définir l'ordre dans lequel 
les gestionnaires d'événements se déclenchent. Dans la plupart des cas, le 
bullage est la valeur par défaut.

En règle générale, vous n'avez pas à vous soucier de la capture, sauf si vous 
avez besoin d'un contrôle ultime sur vos gestionnaires d'événements. Ce concept 
n'est pertinent que si vous avez un élément parent et un élément enfant qui ont 
tous deux des écouteurs d'événements.

Lors de l'utilisation de «bullage», les événements sont déclenchés en commençant 
par l'élément enfant, puis remontent jusqu'au parent.

En revanche, «capturer» signifie que les événements sont d'abord déclenchés par 
le parent, puis par l'élément enfant.



Mettre le troisième élémént de addEventListener à true signifie 
qu'on utilise la capture (par défaut il est à faux -> bullage)

*/

// Constantes
const a = document.getElementById("A");
const b = document.getElementById("B");
const c = document.getElementById("C");
const btn1 = document.getElementById("btn1");

//Fonction d'affichage
function display(id, mode) {
  if (mode == "in") {
    return "-> Traversing " + id;
  }
  if (mode == "out") {
    return "-> Going back up " + id;
  }
  return "-> Button clicked!";
}

//Programme principal

//Button
btn1.addEventListener("click", () => {
  console.log(display(btn1.id, null));
});

//A Event
a.addEventListener(
  "click",
  () => {
    console.log(display(a.id, "in"));
  },
  true
);

a.addEventListener("click", () => {
  console.log(display(a.id, "out"));
});

//B Event
b.addEventListener(
  "click",
  () => {
    console.log(display(b.id, "in"));
  },
  true
);

b.addEventListener("click", () => {
  console.log(display(b.id, "out"));
});

//C Event
c.addEventListener(
  "click",
  () => {
    console.log(display(c.id, "in"));
  },
  true
);

c.addEventListener("click", () => {
  console.log(display(c.id, "out"));
});
