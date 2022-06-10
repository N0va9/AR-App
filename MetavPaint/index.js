///////////////////////// CONSTANTS / VARIABLES //////////////////////////
const mousemove = document.querySelector(".mousemove");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); //Context for the canvas for 2 dimensional operations

let paint = false; //False to indicates if we drawing or not

//////////////////////// FUNCTIONS ////////////////////////////////////
//Resizes the canvas to the available size of the window
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function sketch(x, y) {
  if (paint) {
    ctx.fillStyle = "purple";
    ctx.fillRect(x, y, 50, 50);
  }
}

///////////////////////// MAIN ///////////////////////////////////////////////

window.addEventListener("mousedown", () => {
  paint = true;
  sketch(e.pageX, e.pageY);
});

window.addEventListener("mouseup", () => {
  paint = false;
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  sketch(e.pageX, e.pageY);
});

window.addEventListener("resize", () => {
  resize();
});

resize();

/* 
Un classique outil de dessin 
- Choix de l'épaisseur du trait 
- Choix de la couleur
- Possibilité de sauvegarder l'oeuvre au format png en laissant l'utilisateur 
choisir le nom du fichier
*/
