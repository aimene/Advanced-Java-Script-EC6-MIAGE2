import fs from 'fs';
import { promises as fsPromises } from 'fs';
import * as path from 'path';
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

    fleursAyantLaSignificationV2(signification) {
        return fsPromises.readFile(this._fileName, 'utf-8')
            .then(data => JSON.parse(data))
            .then(fleurs => {
                const fleurss = fleurs.filter(f => f.signification.includes(signification));
                if (fleurss === undefined)
                    return new Error("value not found");
                else
                    return Array.from(fleurss.map(f => f.nom));
            });
    }
}


function creerBaseFleurs(nomFichier, cb) {
    if (path.extname(nomFichier) !== '.json')
        nomFichier += '.json';

    fs.access(nomFichier, fs.constants.R_OK, (err, data) => {
        if (err) {
            cb(err);
        } else {
            cb(null, new BaseDonneesFleurs(nomFichier));
        }
    })



}

function creerBaseFleursV2(nomFichier) {
    if (path.extname(nomFichier) !== '.json')
        nomFichier += '.json';

    return fsPromises.access(nomFichier, fs.constants.R_OK)
        .then(() => new BaseDonneesFleurs(nomFichier));
}


export { BaseDonneesFleurs, creerBaseFleurs, creerBaseFleursV2 };