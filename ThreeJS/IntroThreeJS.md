# Introduction à ThreeJS

Sert à ajouter de la 3D sur un site

## Pour commencer

ThreeJS est une bibliothèque JavaScript paru dans sa 1re version en 2010 qui va nous permettre de placer une zone dans laquelle on va pouvoir manipuler des objets en 3 dimensions. Basé sur WebGL, cette librairie permet de créer des sites interactifs, créatifs et expérimentaux et même des environnements en 3d ou des jeux vidéos.

Pour bien commencer, on aura besoin de créer une page HTML dans laquelle on va inclure le CDN qui va contenir tous les composants de cette bibliothèque. Il nous faudra également un nouveau script
pour commencer le développement.

---

## La scène

C'est ici que tout nos éléments vont apparaître. On y placera une caméra qui sera notre point de vue et que l'on pourra contrôler par le code en changeant sa position, sa distance d'affichage ou encore sa taille.

Il nous faudra également un moteur de rendu pour aplliquer cela sur un canvas qui est cette fameuse zone HTML.

## Les meshs

Les meshs sont les différents objets que l'on placera sur la scène. Chacun pourra être repositionné, redimensionné ou encore texturé en utilisant des matériaux ou autres textures.

Cependant si vous avez un élément plus difficile à modéliser tel qu'un personnage ou un animal, il vaudrait mieux le créer sur un logiciel externe tel que Blender, l'exporter dans un certain format avec les propriétés de votre choix et ensuite l'importer sur ThreeJS qui va le considérer comme un objet à part entière.

## Interactions

Les éléments natifs d'une page permettent de rajouter l'aspect contrôle, c'est-à-dire que la souris peut par exemple contrôler le déplacement ou la rotation de la caméra. De même les touches du clavier peuvent être utilisées comme des entrées pour permettre le déplacement des objets sur la scène courante. On a donc ici la possibilité de créer des jeux en 3D. En activant l'option VR, notre site devient une réelle expérience immersive de réalité virtuelle.

## La physique

Toujours dans le côté immersion et réalisme, on peut utiliser des librairies comme `cannon.js` qui permettent de créer un monde virtuel où l'on peut appliquer de vrais phénomènes physiques comme la gravité ou encore les collisions. Côté animation en 2D, on retrouve par exemple ``matter.js` qui contient tout un panel d'outils pour des comportements de frictions, collisions ou encore d'autres évènements divers et variés.

## Les shaders

Le réalisme d'un environnement en 3D se définit par ce qui le compose. Le shader est un programme informatique qui va imiter des phénomènes naturels comme l'absorption ou la diffusion de lumière ou les ombres; tout un pannel d'outils mathématiques qui permettent d'avoir le plus de réalisme possible.
