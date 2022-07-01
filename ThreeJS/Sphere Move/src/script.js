import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";

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

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// let animations = gui.addFolder("Animations");
// animations.add(controls, "enableAnimations").name("Enable animations");
// animations.add(controls, "dampingFactor", 0, 100, 1).name("Damping");
// animations.add(controls, "wMax", 0, 100, 1).name("Angular speed");

/**
 * Animate
 */

const animate = () => {
  // Update Orbital Controls
  controls.update();

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

animate();

//Good example of damping : https://threejs.org/examples/#misc_controls_arcball
