import { readFileSync } from 'fs';
import { ScolariteBD } from './ScolariteBD.mjs';

const nomFichier = './file.json';
let contenuFichier = readFileSync(nomFichier, 'utf8');

let db = {
    version: 0,
    etudiants: JSON.parse(contenuFichier)
};
let SscolariteBD = new ScolariteBD(db);

SscolariteBD.ajouteEtudiants([{ _id: 'aa99', _nom: 'aa99', _prenom: 'aa99' }, { _id: 'aa100', _nom: 'aa99', _prenom: 'aa99' }]);

//console.log(SscolariteBD.etudiants());
//console.log(SscolariteBD.etudiant('aa99'));
console.log(SscolariteBD.etudiantsVerifiant(e => e._nom.includes("9")));