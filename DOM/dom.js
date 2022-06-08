/*
"Le DOM (Document Object Model) est une inteface de programmation qui permet à des scripts 
d'examiner et de modifier le contenu du navigateur web. Par le DOM, la composition d'un document HTML
est représentée sous forme d'un jeu d'objets - lesquels peuvent représenter une fenêtre, une phrase 
ou un style, par exemple - reliés selon une structure en arbre" (MDN) 
*/

// SELECTEURS
//querySelector est une méthode

//document.querySelector("h4").style.background = "yellow";

/*
const question = document.querySelector("h4");
console.log(question);
question.style.background = "yellow";
*/

/////////////////////////// CLICK EVENT ///////////////////////////////////
//Avec la méthode querySelector, on peut pointer une classe avec un point devant
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2"); //getElementById + performant que querySelector
const answer = document.querySelector("p"); // à éviter s'il y a plusieurs p dans le code; mieux vaut donner un id

//console.log(questionContainer);
questionContainer.style.borderRadius = "150px";

//La méthode addEventListener se prépare à gérer un évenement sur une balise donnée
questionContainer.addEventListener("click", () => {
  //console.log("Click !");
  //questionContainer.style.background = "red";
  questionContainer.classList.toggle("question-clicked");
  //add -> ajouter la classe    remove -> retire la classe    toggle -> enlève si présent et inversement
});

//Si on veut que plusieurs styles se mettent lors d'un click,
//mieux vaut créer un nouvelle classe dans le css et ajouter celle-ci
//lors d'un click -> classe question-clicked

//////////BUTTONS
btn1.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "green";
});

btn2.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "red";
});

//ORDRE DE PRIORITé ->  <div>  >  #id > .class > baliseHTML

/////////////////////////////// MOUSE EVENTS /////////////////////////////////////
const mousemove = document.querySelector(".mousemove");
console.log(mousemove);

window;
addEventListener("mousemove", () => {
  console.log();
});
