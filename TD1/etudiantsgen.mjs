import { etudiantAPartirNomPrenom } from './etudiants.mjs'

class GenerateurEtudiants {

    constructor(nom, prenom, id) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
    }

    *
    genere(debut, fin) {
        for (let i = debut; i < fin; ++i) {
            yield etudiantAPartirNomPrenom(this._id + i, this._nom + i, this._prenom + i)
        }
    }

}

export { GenerateurEtudiants }