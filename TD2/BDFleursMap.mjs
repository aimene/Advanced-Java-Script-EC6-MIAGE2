import fs from 'fs';
import { promises as fsPromises } from 'fs';
import { BaseDonneesFleurs } from './BDFleursCB.mjs';
import * as path from 'path';

class BaseDonneesFleursMap {

    constructor(fileName) {
        this._fileName = fileName;
        fsPromises.readFile(this._fileName, 'utf-8')
            .then(data => JSON.parse(data))
            .then(fleurs => {

                this._NomSingMap = new Map(fleurs.map(f => [f.nom, f.signification]));
                let sing = fleurs.map(f => f.signification).filter((v, i, a) => a.indexOf(v) === i).join().split(",").filter((value, index, self) => {
                    return self.indexOf(value) === index;
                });
                this._SingNomMap = new Map(sing.map(s => [s, fleurs.filter(f => f.signification.includes(s)).map(f => f.nom)]));
                console.log(this._SingNomMap);
            }).catch(err => console.log(err));

    }

}

export { BaseDonneesFleursMap };