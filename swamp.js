console.clear();
// hauteur et largeur de la fenêtre
let wiw = window.innerWidth;
let wih = window.innerHeight;
let MaScène = new THREE.Scene();
let Macamera = new THREE.PerspectiveCamera(75, wiw/wih, 0.1, 1000) // j'ai mis au piff
//let moteurRendu = new THREE.WebGLRenderer({antialias : true});
//moteurRendu.setSize(wiw,wih);       
//document.body.appendChild(moteurRendu.domElement)
//let couleurSelectionnee='#4CC3D9';


