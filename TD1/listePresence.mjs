function listePresenceCSV(etudiants, intitule, separateur) {
    let res = intitule + '\n';
    // for (let e of etudiants) {
    //     res += e._id + separateur + e._prenom + separateur + e._nom + '\n';
    // }
    return intitule + '\n' + etudiants.map(e => e._id + separateur + e._prenom + separateur + e._nom).join('\n');
}


export { listePresenceCSV };