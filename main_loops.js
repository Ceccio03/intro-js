console.log('looooooops');

// CICLO WHILE----------------------------------------------------------------------------
// let indice = 0;

// while (indice < 10) {
//     console.log('sono un\'istruzione che deve essere ripetuta');

    // indice = indice + 1;

    // indice += 1;

    // indice++;
// }

// let indice = 0;

// while (indice < 100) {
//     if (indice % 2 === 0) {
//         console.log(indice);
//     }

//     // indice = indice + 1;
//     indice++;
// }

// while (true) {
//     const input = prompt('scrivi una frase o scrivi FINE per terminare');

//     if (input === 'FINE') {
//         alert('programma terminato');
//         break;
//     } else {
//         // alert('la lunghezza della frase inserita è ' + input.length + ' caratteri');
//         alert(`la lunghezza della frase inserita è ${input.length} caratteri`);
//     }
// }

// CICLO DO WHILE---------------------------------------------------------------------------
// let indice = 10;

// do {
//     console.log('sono un\'istruzione che deve essere ripetuta');
//     indice++;
// } while (indice < 10);

// CICLO FOR---------------------------------------------------------------------------------
// for (let index = 0; index < 10; index++) {
//     console.log('sono un\'istruzione che deve essere ripetuta');
    
// }

// for (let index = 0; index < 100; index += 2) {
//     console.log('sono un numero pari e sono: ' + index);
// }

// for (let index = 0; index < 10; index++) {
//     if (index < 50) {
//         console.log(risultato);
//     } else {
//         console.log(risultato2);
//     }
// }

// for (let index = 100; index >= 0; index--) {
//     console.log(index);
// }

// for (let index = 100; index >= 0; index--) {
//     if (index % 2 === 0) {
//         console.log('pari', index);
//     } else {
//         console.log('dispari', index);
//     }
// }

// const paperone = prompt('scrivi una frase');

// for (let index = 0; index < 16; index++) {
//     const char = paperone[index];
    
//     console.log(char);
// }

// ESERCIZIO 1
// let string = '#'

// for (let index = 0; index < 7; index++) {
//     console.log(string);
//     string = string + '#';
// }

// let string2 = '#';

// while (string2.length < 8) {
//     console.log(string2);
//     string2 = string2 + '#';
// }

// ESERCIZIO 2
// for (let index = 1; index <= 100; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (index % 3 === 0) {
//         console.log('Fizz');
//     } else if (index % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(index);
//     }
// }

// CICLI NESTATI-----------------------------------------------------------------------------
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log('riga: ' + i + ', colonna: ' + j);
//     }
// }

// ESERCIZIO 3 EASY
// let chessboard = '';

// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         chessboard += ' # # # #\n';
//     } else {
//         chessboard += '# # # # \n';
//     }
// }

// console.log(chessboard);