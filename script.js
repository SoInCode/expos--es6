/**
 * OBJET SIMPLIFIE
 * -------------------------------------------------------
 */

// exemple avec 1 params
let nom = "franck";
const objet = {nom};
console.log(objet);

function afficherNom({nom2, prenom}) {
    console.log(prenom + " " + nom2);
}

// exemple avec 2 params
let prenom = "Frank";
let nom2 = "Herbert";
const Personnage = {prenom, nom2};
console.log(Personnage);
afficherNom({nom2, prenom});

/**
 * AFFECTATION DESTRUCTUREE
 * -------------------------------------------------------
 */
// Version JSON Object
const httpOptions = {timeout: 2000, key1: "maclé", isCache: true};

const {timeout: httpTimeout, isCache: httpCache} = httpOptions;
console.log(httpTimeout, httpCache);

// Version Tableau
const httpOptions2 = [2000, true];
const [httpTimeout2, httpCache2] = httpOptions2;
console.log(httpTimeout2, httpCache2);

// Example Meteo
var name = toulouse.city_info.name;
var date = toulouse.current_condition.date;

// vs ES6
const {city_info: {name: maVille},current_condition:{date: maDate}} = toulouse;

console.log(name, date);
console.log(maVille, maDate);

// Paramètres optionnels et valeur par défaut
function getBooks(size, page = 3) {
    console.log(size, page);
}

getBooks(10)

const httpOptions3 = {timeout: 1000};
const {timeout, isCache = true} = httpOptions3;
console.log(timeout, isCache);