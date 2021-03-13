import { BaseDonneesFleurs } from './BDFleursCB.mjs';


let BDF = new BaseDonneesFleurs('flowers.json');


// Test  node --experimental-modules testBDFleursCB.mjs


// BDF.significationsDeLaFleur('acsosnit', (err, data) => {
//     console.log('_____________________1________________________\n');
//     console.log('TEST : significationsDeLaFleur \n ');
//     console.log('error : ' + err + '\n');
//     console.log('data : ' + data + '\n');
// })

BDF.significationsDeLaFleurV2('amarante').then((fleurs, err = '') => {
    console.log('_____________________2________________________\n');
    console.log('TEST : significationsDeLaFleurV2 \n ');
    console.log('data : ' + fleurs + '\n')
}, (err = '') => {
    console.log('_____________________2________________________\n');
    console.log('TEST : significationsDeLaFleurV2 \n ');
    console.log('error : ' + err + '\n');
});

// BDF.fleursAyantLaSignification('fidélité', (err = '', fleurs = []) => {
//     console.log('_____________________3________________________\n');
//     console.log('TEST : fleursAyantLaSignification \n ');
//     console.log('error : ' + err + '\n');
//     console.log('data : ' + fleurs + '\n');
// })