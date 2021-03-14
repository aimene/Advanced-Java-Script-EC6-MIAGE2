import { BaseDonneesFleurs, creerBaseFleurs, creerBaseFleursV2, creerBaseFleursV3 } from './BDFleursCB.mjs';
import { BaseDonneesFleursMap } from './BDFleursMAP.mjs';


let BDF = new BaseDonneesFleurs('flowers.json');
let BDFs = new BaseDonneesFleursMap('flowers.json');

// console.log(BDFs.significationsDeLaFleurV2('achillée'));
console.log(BDFs.fleursAyantLaSignificationV2('confiance'));

// Test  node --experimental-modules testBDFleursCB.mjs


// BDF.significationsDeLaFleur('acsosnit', (err, data) => {
//     console.log('_____________________1________________________\n');
//     console.log('TEST : significationsDeLaFleur \n ');
//     console.log('error : ' + err + '\n');
//     console.log('data : ' + data + '\n');
// })

// BDF.fleursAyantLaSignification('fidélité', (err = '', fleurs = []) => {
//     console.log('_____________________3________________________\n');
//     console.log('TEST : fleursAyantLaSignification \n ');
//     console.log('error : ' + err + '\n');
//     console.log('data : ' + fleurs + '\n');
// })

// creerBaseFleurs('flowers.json', (err = '', bd) => {
//     console.log('_____________________3________________________\n');
//     console.log('TEST : creerBaseFleurs \n ');
//     console.log('error : ' + err + '\n');
//     console.log('data : ' + bd.significationsDeLaFleur('amaryllis', (err = '', fleurs = []) => {
//         console.log('_____________________3________________________\n');
//         console.log('TEST : significationsDeLaFleur \n ');
//         console.log('error : ' + err + '\n');
//         console.log('data : ' + fleurs + '\n');
//     }) + '\n');
// })

// Promesse version

// BDF.significationsDeLaFleurV2('bleduet')
//     .then(
//         (fleurs) => {
//             console.log('_____________________2________________________\n');
//             console.log('TEST : significationsDeLaFleurV2 \n ');
//             console.log('data : ' + fleurs + '\n')
//         }, (err = '') => {
//             console.log('_____________________2________________________\n');
//             console.log('TEST : significationsDeLaFleurV2 \n ');
//             console.log('error : ' + err + '\n');
//         });

// creerBaseFleurs('flowers.json').then(BDFStatic => BDFStatic.fleursAyantLaSignification('fidélité', (err = '', fleurs = []) => {
//     console.log('_____________________4________________________\n');
//     console.log('TEST : creerBaseFleurs \n ');
//     console.log('data : ' + fleurs + '\n');
//     console.log('error : ' + err + '\n');
// }));

// p.then(onFulfilled) = p.then(onFulfilled, null)

// creerBaseFleursV2('flowers.json').then(BDFStatic => BDFStatic.fleursAyantLaSignificationV2('fidélité').then((fleurs = []) => {
//     console.log('_____________________5________________________\n');
//     console.log('TEST : creerBaseFleursV2 \n ');
//     console.log('data : ' + fleurs + '\n');
// }, (err = '') => {
//     console.log('_____________________5________________________\n');
//     console.log('TEST : creerBaseFleursV2 \n ');
//     console.log('error : ' + err + '\n');
// }));

// p.catch(onRejected) = p.then(null, onRejected)

// creerBaseFleursV2('flowers.json').then(BDFStatic => BDFStatic.fleursAyantLaSignificationV2('fidélité').then((fleurs = []) => {
//     console.log('_____________________5________________________\n');
//     console.log('TEST : creerBaseFleursV2 fleursAyantLaSignificationV2 \n ');
//     console.log('data : ' + fleurs + '\n');
// }).catch((err = '') => {
//     console.log('_____________________5________________________\n');
//     console.log('TEST : creerBaseFleursV2 fleursAyantLaSignificationV2 \n ');
//     console.log('error : ' + err + '\n');
// }));

// async function test() {
//     const bd = await creerBaseFleursV3('flowers.json');

// bd.significationsDeLaFleur('amaryllis', (err = '', fleurs = []) => {
//     console.log('_____________________3________________________\n');
//     console.log('TEST : significationsDeLaFleur \n ');
//     console.log('error : ' + err + '\n');
//     console.log('data : ' + fleurs + '\n');
// });

//     console.log(await bd.fleursAyantLaSignificationV3('confiance'));
// }
// test();