import { BaseDonneesFleurs, creerBaseFleurs } from './BDFleursCB.mjs';


let BDF = new BaseDonneesFleurs('flowers.json');


// Test  node --experimental-modules testBDFleursCB.mjs


// BDF.significationsDeLaFleur('acsosnit', (err, data) => {
//     console.log('_____________________1________________________\n');
//     console.log('TEST : significationsDeLaFleur \n ');
//     console.log('error : ' + err + '\n');
//     console.log('data : ' + data + '\n');
// })

// Promesse version

// BDF.significationsDeLaFleurV2('amarante').then((fleurs, err = '') => {
//     console.log('_____________________2________________________\n');
//     console.log('TEST : significationsDeLaFleurV2 \n ');
//     console.log('data : ' + fleurs + '\n')
// }, (err = '') => {
//     console.log('_____________________2________________________\n');
//     console.log('TEST : significationsDeLaFleurV2 \n ');
//     console.log('error : ' + err + '\n');
// });

// BDF.fleursAyantLaSignification('fidélité', (err = '', fleurs = []) => {
//     console.log('_____________________3________________________\n');
//     console.log('TEST : fleursAyantLaSignification \n ');
//     console.log('error : ' + err + '\n');
//     console.log('data : ' + fleurs + '\n');
// })


// Promesse version

// creerBaseFleurs('flowers.json').then(BDFStatic => BDFStatic.fleursAyantLaSignification('fidélité', (err = '', fleurs = []) => {
//     console.log('_____________________4________________________\n');
//     console.log('TEST : creerBaseFleurs \n ');
//     console.log('data : ' + fleurs + '\n');
//     console.log('error : ' + err + '\n');
// }));

// p.then(onFulfilled) = p.then(onFulfilled, null)

// creerBaseFleurs('flowers.json').then(BDFStatic => BDFStatic.fleursAyantLaSignificationV2('fidélité').then((fleurs = []) => {
//     console.log('_____________________5________________________\n');
//     console.log('TEST : creerBaseFleurs \n ');
//     console.log('data : ' + fleurs + '\n');
// }, (err = '') => {
//     console.log('_____________________5________________________\n');
//     console.log('TEST : creerBaseFleurs \n ');
//     console.log('error : ' + err + '\n');
// }));

// p.catch(onRejected) = p.then(null, onRejected)

// creerBaseFleurs('flowers.json').then(BDFStatic => BDFStatic.fleursAyantLaSignificationV2('fidélité').then((fleurs = []) => {
//     console.log('_____________________5________________________\n');
//     console.log('TEST : creerBaseFleurs \n ');
//     console.log('data : ' + fleurs + '\n');
// }).catch((err = '') => {
//     console.log('_____________________5________________________\n');
//     console.log('TEST : creerBaseFleurs \n ');
//     console.log('error : ' + err + '\n');
// }));