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

function getValue() {
  var input = document.getElementById("in").value;

  var a = performance.now();
  document.getElementById("sol1").innerHTML = fibo(input);
  var b = performance.now();

  document.getElementById("sol2").innerHTML = fibo2(input);
  var c = performance.now();

  document.getElementById("sol3").innerHTML = fibo3(input);
  var d = performance.now();

  document.getElementById("tps1").innerHTML = b - a;
  document.getElementById("tps2").innerHTML = c - b;
  document.getElementById("tps3").innerHTML = d - c;
}

btn1.addEventListener("click", () => {
  console.log("click");
  answer.classList.add("show-answer");
});
