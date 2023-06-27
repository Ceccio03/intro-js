console.log('looooog');

// SCOPE--------------------------------------------------------

// scope globale è dichiarato fuori da qualsiasi graffa
// const pippo = 10;   // scope globale

// if (pippo < 20) {
//     pippo = pippo + 3;

//     let pluto = 4;
// }

// pluto = pluto + 1;

// console.log(pippo);
// console.log(pluto);

// SCOPE NESTATI---------------------------------------------
// const i = 'sono la i più antica';

// function createEvenArray(max) {
//     const tempArray = [];
//     const i = 40;

//     for (let i = 0; i < max; i++) {
//         if (i % 2 === 0) {
//             tempArray.push(i);
//         }
//     }
//     return tempArray;
// }
// console.log(createEvenArray(100));

// for (let i = 0; i < 10; i++) {
//     for (let i = 0; i < 20; i++) {
//         for (let i = 0; i < 30; i++) {
//             console.log(i);
//         }
//     }
    
// }