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
function addTextNode(text, fonc, id) {
  //Variables
  var newtext = document.createTextNode(text);
  var p = document.getElementById(id);
  var n = document.getElementById("in").value;
  var tps1, tps2;

  //Affichage

  p.appendChild(newtext);

  //Calcul d'exécution de la fonction
  tps1 = performance.now();
  p.appendChild(document.createTextNode(fonc(n)));
  tps2 = performance.now();

  //Affichage du calcul
  p.appendChild(
    document.createTextNode(" trouvé en " + (tps2 - tps1) + "ms.\r")
  );
}

function getValue() {
  addTextNode("Fibo itératif :", fibo, "sol1");
  addTextNode("Fibo itératif amélioré :", fibo2, "sol2");
  addTextNode("Fibo récursif :", fibo3, "sol3");
}

btn1.addEventListener("click", () => {
  answer.classList.add("show-answer");
});

//évitez innerHTML -> préférez document.createTextNode, zlzmznt.appendChild
