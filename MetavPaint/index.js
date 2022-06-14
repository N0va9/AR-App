///////////////////////// CONSTANTS / VARIABLES //////////////////////////
const mousemove = document.querySelector(".mousemove");
const canvas = document.getElementById("canvas");
const colorSelector = document.getElementById("colorSelector");
const more = document.getElementById("+");
const less = document.getElementById("-");

const width = document.getElementById("width");
const divColor = document.getElementById("color");
const save = document.getElementById("save");

const ctx = canvas.getContext("2d"); //Context for the canvas for 2 dimensional operations

let paint = false; //False to indicates if we drawing or not
let color = "black";
let actualWidth = 10;
let widthMenu = window.innerWidth * 0.1;

//////////////////////// FUNCTIONS ////////////////////////////////////
//Resizes the canvas to the available size of the window
function resize() {
  ctx.canvas.width = window.innerWidth - widthMenu;
  ctx.canvas.height = window.innerHeight;
}

function fillCircle(x, y, rad, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, 2 * Math.PI);
  ctx.fill();
}

function sketch(x, y) {
  if (paint) {
    fillCircle(x, y, actualWidth, color);
  }
}

///////////////////////// MAIN ///////////////////////////////////////////////

window.addEventListener("mousedown", () => {
  paint = true;
  //mémoriser le dernier point -> changement de coordonnées
});

window.addEventListener("mouseup", () => {
  paint = false;
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  // console.log(e.pageX, e.pageY);
  sketch(e.pageX - widthMenu, e.pageY);
});

window.addEventListener("resize", () => {
  resize();
});

/////////////////////// MENU BUTTONS ///////////////////////////////////////
//To change the width of circle
width.addEventListener("click", () => {
  more.toggleAttribute("hidden");
  less.toggleAttribute("hidden");
});

more.addEventListener("click", () => {
  actualWidth++;
  mousemove.style.height = actualWidth * 2 + "px";
  mousemove.style.width = actualWidth * 2 + "px";
});

less.addEventListener("click", () => {
  if (actualWidth > 11) {
    actualWidth--;
    mousemove.style.height = actualWidth * 2 + "px";
    mousemove.style.width = actualWidth * 2 + "px";
  }
});

//To change color
divColor.addEventListener("click", () => {
  colorSelector.toggleAttribute("hidden");
});

colorSelector.addEventListener(
  "input",
  (event) => {
    color = event.target.value;
  },
  false
);

//To save the canvas as png
save.addEventListener("click", () => {
  const a = document.createElement("a");

  document.body.appendChild(a);
  a.href = canvas.toDataURL("image/png");
  a.download = "image.png";
  a.click();
  document.body.removeChild(a);
});

///////////////////////////////////////////////////////////////////////////

resize();

/* 
Un classique outil de dessin 
- Choix de l'épaisseur du trait 
- Choix de la couleur
- Possibilité de sauvegarder l'oeuvre au format png en laissant l'utilisateur 
choisir le nom du fichier

Taux de rafraichissement 
*/
