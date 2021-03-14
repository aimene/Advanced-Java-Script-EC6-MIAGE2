import fs from 'fs';
import { promises as fsPromises } from 'fs';
import { BaseDonneesFleurs } from './BDFleursCB.mjs';
import * as path from 'path';

class BaseDonneesFleursMap {

    constructor(fileName) {
        this._fileName = fileName;

        const data = fs.readFileSync(this._fileName);
        const fleurs = JSON.parse(data);

        this._NomSingMap = new Map(fleurs.map(f => [f.nom, f.signification]));
        let sing = fleurs.map(f => f.signification).filter((v, i, a) => a.indexOf(v) === i).join().split(",").filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        this._SingNomMap = new Map(sing.map(s => [s, fleurs.filter(f => f.signification.includes(s)).map(f => f.nom)]));
        //console.log(this._NomSingMap);
    }

    significationsDeLaFleurV2(nomFleur) {
        const signification = this._NomSingMap.get(nomFleur);
        console.log("fleurs : " + signification);
        if (signification === undefined)
            throw new Error('Value not found');
        else
            return signification;
    }

    fleursAyantLaSignificationV2(signification) {

        const fleurs = this._SingNomMap.get(signification);
        if (fleurs === undefined)
            return new Error("value not found");
        else
            return Array.from(fleurs);
    }

}

export { BaseDonneesFleursMap };