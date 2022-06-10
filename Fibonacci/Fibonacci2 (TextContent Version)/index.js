// Constantes
const btn1 = document.getElementById("btn1");
const answer = document.getElementById("answer");

//Variables
var stockFibo = [0, 1];

//Programme principal : Fibonnaci d'au moins 3 manières différentes
//Fonction prenant un entier n et qui renvoie le n ième terme de la suite

//Manière itérative
function fibo(n) {
  var fibonacci = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci[n];
}

//Manière itérative améliorée
function fibo2(n) {
  if (stockFibo.length > n) {
    return stockFibo[n];
  } else {
    for (var i = stockFibo.length; i <= n; i++) {
      stockFibo[i] = stockFibo[i - 2] + stockFibo[i - 1];
    }
    return stockFibo[n];
  }
}

//Manière récursive
function fibo3(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibo3(n - 1) + fibo3(n - 2);
}

//Fonction qui s'occupe de l'affichage
function addTextNode(fonc, id) {
  //Variables
  let p = document.getElementById(id);
  let n = document.getElementById("in").value;
  let tps1, tps2;

  //Clear des enfants
  for (let index = 0; index < p.children.length; index++) {
    console.log("je suis dans la boucle");
    console.log(children[index]);
    p.removeChild(children[index]);
  }

  //Calcul d'exécution de la fonction
  tps1 = performance.now();
  p.appendChild(document.createTextNode(fonc(n)));
  tps2 = performance.now();

  //Affichage du calcul
  p.appendChild(
    document.createTextNode(" trouvé en " + (tps2 - tps1) + "ms.\r")
  );
}

function getValue() {}

btn1.addEventListener("click", () => {
  answer.classList.add("show-answer");
  const fibo1 = document.getElementById("fibo1");
  const fibo2 = document.getElementById("fibo2");
  const fibo3 = document.getElementById("fibo3");

  const perf1 = document.getElementById("perf1");
  const perf2 = document.getElementById("perf2");
  const perf3 = document.getElementById("perf3");
  const n = document.getElementById("in").value;

  var tps1 = performance.now();
  fibo1.textContent = fibo(n);
  var tps2 = performance.now();

  fibo2.textContent = fibo2(n);
  var tps3 = performance.now();

  fibo3.textContent = fibo3(n);
  var tps4 = performance.now();

  perf1.textContent = tps2 - tps1;
  perf2.textContent = tps3 - tps2;
  perf3.textContent = tps4 - tps3;
});

//évitez innerHTML -> préférez document.createTextNode, zlzmznt.appendChild
