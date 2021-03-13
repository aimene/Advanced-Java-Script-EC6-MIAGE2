import fs from 'fs';
import { promises as fsPromises } from 'fs';
class BaseDonneesFleurs {

    constructor(fileName) {
        this._fileName = fileName;
    }

    significationsDeLaFleur(nomFleur, cb) {
        fs.readFile(this._fileName, 'utf-8', (err, data) => {
            if (err) {
                cb(err);
            } else {
                const fleurs = JSON.parse(data);
                const fleur = fleurs.find(f => f.nom === nomFleur);
                if (fleur === undefined)
                    cb(new Error("value not found"));
                else
                    cb(null, fleur.signification);
            }
        })
    }

    significationsDeLaFleurV2(nomFleur) {
        return fsPromises.readFile(this._fileName, 'utf-8')
            .then(data => JSON.parse(data))
            .then(fleurs => {
                const fleur = fleurs.find(f => f.nom === nomFleur);
                if (fleur === undefined)
                    throw new Error('Value not found');
                else
                    return fleur.signification;
            })
    }

    fleursAyantLaSignification(signification, cb) {
        fs.readFile(this._fileName, 'utf-8', (err, data) => {
            if (err) {
                cb(err);
            } else {
                const fleurs = JSON.parse(data);
                const fleurss = fleurs.filter(f => f.signification.includes(signification));
                if (fleurss === undefined)
                    cb(new Error("value not found"));
                else
                    cb(null, Array.from(fleurss.map(f => f.nom)));
            }
        })
    }

}

function creerBaseFleurs(nomFichier, cb) {

}


export { BaseDonneesFleurs, creerBaseFleurs };