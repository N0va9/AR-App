// Constantes / Variables

/*
This fait référence à l'objet sur lequel s'exécute une fonction 
A la base, this c'est window! On peut vérifier en tapant this dans 
la console, window est renvoyé.
*/

//Test1
/*
let user = {
  prenom: "John",
  sayHi() {
    console.log(`Hello ${this.prenom}`);
  },
};

let newFunc = user.sayHi.bind(user);
newFunc();
// console.log(newFunc);

const btn = document.getElementById("btn");
btn.addEventListener("click", user.sayHi.bind(user));
*/

//Test2
/*
const eleve = {
  nom: "Guyollot",
  prenom: "Alan",
  show: function () {
    console.log(this);
    console.log("Nom: ", this.nom, " Prenom: ", this.prenom);
  },
};

eleve.show();
*/

//Test 3 avec bind
const eleve2 = {
  nom: "Guyollot",
  prenom: "Alan",
};

const show = function () {
  console.log(this);
  console.log("Nom: ", this.nom, " Prenom: ", this.prenom);
}.bind(eleve2);

show();

/* Une méthode d'un objet, this représente l'objet 

Une fonction exécutée avec le mot-clé new renvoie this,
this est l'objet que la fonction est en train de créer.

En conséquence, on peut faire référence à cet objet avec le mot-clé
this au sein de la définition de la fonction qui l'a construit.

Tant qu'il n'y a pas de mot-clé new, this fait référence à l'objet 
sur lequel s'exécute une fonction, quand il y a le mot clé new this
représente l'objet créé par la fonction constructeur faisant office 
de classe.

*/

function Animal(nom, sexe, age) {
  this.nom = nom;
  this.sexe = sexe;
  this.age = age;
  this.photo = this.nom + ".jpg";

  this.show = function () {
    console.log(this);
    var s = this.sexe === "F" ? "Femelle" : "Mâle";
    return (
      s + " - " + this.nom + " - " + this.age + " ans" + " - " + this.photo
    );
  };
}

const pinguin = new Animal("Costard", "M", 5);
console.log(pinguin.show());
