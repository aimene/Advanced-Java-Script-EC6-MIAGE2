import { readFileSync } from 'fs';
import { listePresenceCSV } from './listePresence.mjs';

const nomFichier = './file.json';
let contenuFichier = readFileSync(nomFichier, 'utf8');

let db = {
    version: 0,
    etudiants: JSON.parse(contenuFichier)
};

console.log(listePresenceCSV(db.etudiants, 'intitule', '|'));