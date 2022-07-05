import "./style.css";
import * as THREE from "three";
import { GUI } from "dat.gui";

class Point {
  constructor(x, y, bool) {
    this.x = x - window.innerWidth / 4;
    this.y = y - window.innerHeight / 4;
    this.bool = bool;
  }

  show() {
    if (this.bool) {
      console.log("Souris appuyé");
    } else {
      console.log("Souris relaché");
    }

    console.log("(" + this.x + ", " + this.y + ")");
  }

  static distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
}

let start;
let end;

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
  width: window.innerWidth / 2,
  height: window.innerHeight / 2,
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

/**
 * Animate
 */

const animate = () => {
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(animate);
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width / 2, sizes.height / 2);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function move(point1, point2) {
  if (point1 != undefined) {
    if (point2 != undefined) {
      const a = new THREE.Vector2(point2.x - point1.x, point2.y - point1.y);

      //Turn depends of the points values
      // sphere.rotation.x += ;
      // sphere.rotation.y += ;
      // sphere.position.z += ;
    }
  }
}

canvas.addEventListener("mousedown", (e) => {
  start = new Point(e.pageX, e.pageY, true);
  start.show();
});

canvas.addEventListener("mouseup", (e) => {
  end = new Point(e.pageX, e.pageY, false);
  end.show();

  move(start, end);
});

animate();
//Good example of damping : https://threejs.org/examples/#misc_controls_arcball
