import "./style.css";
import * as THREE from "three";
import { GUI } from "dat.gui";

var start;
var between;
var clock = new THREE.Clock();
var delta = 0;
var pressed = false;
var calculateDamping = false;

//Loading
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load("/textures/texture.png");

// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const sphereGeometry = new THREE.SphereBufferGeometry(0.5, 64, 64);

// Materials

const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.2;
material.normalMap = normalTexture;
material.color = new THREE.Color(0x292929);

// Mesh
const sphere = new THREE.Mesh(sphereGeometry, material);
scene.add(sphere);

// Lights

function addPointLight(name, color, x, y, z) {
  var actualPointLight = new THREE.PointLight(color, 2);

  actualPointLight.position.set(x, y, z);
  actualPointLight.intensity = 3;

  //Add the point light at the scene
  scene.add(actualPointLight);

  createFolderVariables(name, actualPointLight, color);
}

//Function to vary differents variables
function createFolderVariables(name, actualPointLight, color) {
  //Set all the variables on a folder where we can variate the values
  const light = gui.addFolder(name);

  light.add(actualPointLight.position, "x").min(-10).max(10).step(0.01);
  light.add(actualPointLight.position, "y").min(-6).max(6).step(0.01);
  light.add(actualPointLight.position, "z").min(-3).max(3).step(0.01);
  light.add(actualPointLight, "intensity").min(0).max(5).step(0.01);

  //Allows to change color on the site
  const lightColor = {
    color: color,
  };

  light.addColor(lightColor, "color").onChange(() => {
    actualPointLight.color.set(lightColor.color);
  });

  //Show where comes from the light
  // const pointLightHelper = new THREE.PointLightHelper(actualPointLight, 1);
  // scene.add(pointLightHelper);
}

addPointLight("PointLight 1", 0xffffff, 2, 3, 4);
addPointLight("PointLight 2", 0xffdf, 1.5, 1, -2);
addPointLight("PointLight 3", 0xff0000, -1.5, 1, 3);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth / 1.2,
  height: window.innerHeight / 1.2,
};

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width / 1.2, sizes.height / 1.2);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

var targetRotationX = 0;
var targetRotationY = 0;

canvas.addEventListener("mousedown", (e) => {
  delta = clock.getDelta();
  pressed = true;
  calculateDamping = false;
  start = new Point2D(e.pageX, e.pageY);
  between = start;

  //start.show2("Souris appuyé");
});

canvas.addEventListener("mousemove", (e) => {
  moveSphere(e);
});

canvas.addEventListener("mouseup", (e) => {
  delta = clock.getDelta();
  pressed = false;
  calculateDamping = true;
});

function moveSphere(e) {
  //If the user had ever click on the canvas
  if (pressed == true) {
    var point = new Point2D(e.pageX, e.pageY);

    //The rotation speed factor
    var factor = 10 / canvas.height;
    var dx = factor * (point.x - between.x);
    var dy = factor * (point.y - between.y);

    sphere.rotation.x += dy;
    sphere.rotation.y += dx;
    //////
    targetRotationX = (point.x - start.x) * 0.02;
    targetRotationY = (point.y - start.y) * 0.02;
    ////////
    between = point;
  }
}

function activateDamping() {
  if (calculateDamping) {
    //horizontal rotation
    sphere.rotation.y += (targetRotationX - sphere.rotation.y) * 0.1;
    //vertical rotation
    sphere.rotation.x += (targetRotationY - sphere.rotation.x) * 0.05;
  }
}

/**
 * Animate
 */

const animate = () => {
  // Call tick again on the next frame
  window.requestAnimationFrame(animate);

  activateDamping();
  // Render
  renderer.render(scene, camera);
};

animate();
//Good example of damping : https://threejs.org/examples/#misc_controls_arcball

class Point2D {
  constructor(x, y) {
    this.x = x - window.innerWidth / 4;
    this.y = y - window.innerHeight / 4;
  }

  show() {
    return "(" + this.x + ", " + this.y + ")";
  }

  show2(text) {
    console.log(text);
    console.log("(" + this.x + ", " + this.y + ")");
  }

  static distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  static speedClick(a, b) {
    return this.distance(a, b) / delta;
  }
}
