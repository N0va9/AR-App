//Déclaration des const puis des let

let chiffre = 47;

let phrase = `La solution est ${chiffre}`;

console.log(phrase);

/////////////////////////// DATA TYPES ////////////////////////////////////

let string = "Je suis une chaine";
let number = 2;
let boolean = true;
let array = ["je", "suis", 24, false];

let object = {
    // Index: value
    prenom: "audrey",
    age: 34,
    ville: "Bordeaux",
};

//typeof -> donne type d'une variable

//JS ne fait pas la distinction entre les 2 (le tableau et l'objet)
console.log(typeof array); // -> object
console.log(typeof object); // -> object

///////////////// 2 OTHERS TYPES ////////////////

let arbre; // = undefined
console.log(arbre); //-> undefined
console.log(typeof arbre); // -> undefined

let plante = null;
console.log(plante); // -> null
console.log(plante); // -> object

/////////////////////////////// OPERATORS /////////////////////////////////
let operators = ["/", "*", "-", "+", "**"];

//Incrémentation
let cpt = 0;
cpt++;
console.log(cpt);

//Opérateurs d'affectations
let cpt2 = 0;
cpt2 += 5;
/*
-=
*=
/=
*/
console.log(cpt2);

//////////////////////////////// CONTROL STRUCTURES ////////////////////////////////////
let x = 2;
let y = 6;

if (x < y) {
    console.log(`${x} est inférieur à ${y}`);
} else {
    console.log("y est inférieur à x");
}

//On teste si le type et la valeur sont égales
if (x === y) {
    //l'inverse c'est !==
    console.log("True!");
} else {
    console.log("false");
}

//On teste si les valeurs sont égales
if (x == y) {
    //l'inverse !=
    console.log("True!");
} else {
    console.log("false");
}

if (x == 5) console.log("x est égal à 5");

// On peut ajouter le (ou ||) et le (et &&) dans les conditions

//Ternaire
x == y ? console.log("True!") : console.log("False");

//////////////////////////// FUNCTIONS //////////////////////////////////////////////////////

function doAnything() {
    console.log("Work in progress...");
}

//doAnything();

const doAnotherThing = (tache) => {
    console.log("Je fais : " + tache);
};
doAnotherThing("des révisions");
doAnotherThing("de la programmation");

function calc(x, y) {
    return x + y;
}

//Une fonction peut se jouer toute seule (en anonyme ou pas)
(function () /*maFonction*/ {
    console.log("Je me joue toute seule");
})();

//Autre façon de l'écrire en fléché
(() => {
    console.log("Je me joue aussi toute seule");
})();
