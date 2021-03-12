export class Etudiant {

    constructor(id, nom, prenom) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
    }
}

function etudiantVide() {
    return new Etudiant("", "", "");
}

function etudiantAPartirNomPrenom(id, nom, prenom) {
    return new Etudiant(id, nom, prenom);
}

function etudiantAPartirNom(id, nom) {
    return new Etudiant(nom, nom, id);
}

export { etudiantVide, etudiantAPartirNomPrenom, etudiantAPartirNom }