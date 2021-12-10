
const vehicule = function (couleur ,roues ,marque ) {
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;

    this.demarrer = function (){
        console.log("la voiture est en route");
    }
    this.arreter = function (){
        console.log("la voiture est a l'arrêt");
    }
}
vehicule.prototype.machin = function () {
    console.log("la voiture de couleur " + this.couleur + " de marque " + this.marque + "est elle a bien c'est "
        + this.roues + " roues.");
}
let engin = new vehicule('rouge' ,'4' ,'ford');

console.log(engin.machin());
engin.demarrer();
engin.arreter();

//velo
let velo = function (couleur ,roues ,marque,rayonRoues ,typePeinture ) {
    vehicule.call(this, couleur ,roues ,marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;
    this.monter = function () {
        console.log("le suis monter sur le vélo.");
    }
}

velo.prototype = Object.create(vehicule.prototype);
velo.prototype.constructor = velo;

let bike = new velo('vert' , '2' , 'bitwin' , '22pouces' , 'mate')


console.log(bike.machin());
bike.monter();
console.log(bike);
//voiture
let voiture = function (couleur ,roues ,marque,assurances , proprietaire ) {
    vehicule.call(this, couleur ,roues ,marque);
    this.assurances = assurances;
    this.proprietaire = proprietaire;
    this.laver = function () {
        console.log("la voiture et bonne a laver");
    }
}

voiture.prototype = Object.create(vehicule.prototype);
voiture.prototype.constructor = voiture;

let car = new voiture('bleu' , '4' , 'citroen' , 'jantes alu' , 'sombre');

car.laver();
console.log(car);
console.log(car.machin());