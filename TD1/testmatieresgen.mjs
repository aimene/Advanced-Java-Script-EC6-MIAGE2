import { GenerateurEtudiants } from './etudiantsgen.mjs';

function afficheJSONEtudiantsGeneres(version, debut, fin) {

    let gen = new GenerateurEtudiants('NOM', 'PRENOM', 'ID');
    console.log('[');
    console.log([...gen.genere(debut, fin)].map(etudiant => JSON.stringify(etudiant)).join());
    console.log(']');
}

// console.log('process.argv[3]  ' + process.argv[4]);

//afficheJSONEtudiantsGeneres(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[4]));
afficheJSONEtudiantsGeneres("1", 2, 100);