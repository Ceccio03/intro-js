console.log('array');

// ARRAY------------------------------------------------------------
const pippo = ['pane', 'pasta', 'latte', 'caffè'];

// console.log(pippo);
// console.log(pippo.length);

// AGGIUNGERE E TOGLIERE ELEMENTI-----------------------------------
// pippo.push('acqua');    // aggiungere in coda
// pippo.unshift('biscotti');  // aggiungere in testa

// const elementCode = pippo.pop(); // togliere in coda

// console.log(elementCode);

// const elementoTesta = pippo.shift();    // togliere in testa

// console.log(elementoTesta);
// console.log(pippo);

// CICLI ED ARRAY----------------------------------------------------
// const pluto = [1, 2, 23, -4, 345, 0];

// console.log(pluto[0]);
// console.log(pluto[2]);
// console.log(pluto[pluto.length - 1]);

// for (let i = 0; i < pluto.length; i++) {
//     const element = pluto[i];
//     console.log(element);
// }

// for (const element of pluto) {
//     console.log(element);
// }

// let i = 0;

// while (i < pluto.length) {
//     const element = pluto[i];
//     console.log(element);
//     i++;
// }

// for (let i = pluto.length - 1; i >= 0; i--) {
//     const element = pluto[i];
//     console.log(element);
// }

// TRASFORMAZION DI ARRAY-------------------------------------------
// MAPPING
// const paperino = [2, 5, -4, 2000, 7, 34];

// function multiplyArrayBy2(selectedArray) {
//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
//         const newElement = element * 2;

//         newArray.push(newElement);
//     }
//     return newArray;
// }
// console.log('multiply by 2', multiplyArrayBy2(paperino));

// function divideArrayBy2ifEven(selectedArray) {
//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
//         let newElement;

//         if (element % 2 === 0) {
//             newElement = element / 2;
//         } else {
//             newElement = element;
//         }

//         newArray.push(newElement);
//     }
//     return newArray;
// }
// console.log('divide by 2 if even', divideArrayBy2ifEven(paperino));

// const paperone = ['qui', 'quo', 'qua'];

// function upperCaseAll(selectedArray) {
//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
//         const newElement = element.toUpperCase();

//         newArray.push(newElement);
//     }
//     return newArray;
// }
// console.log(upperCaseAll(paperone));

// FILTERING
// const paperoga = [3, 5, 6, 9, 8, 111, -3, -8, 0];

// function removeEven(selectedArray) {
//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
        
//         if (element % 2 !== 0) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// console.log('remove even', removeEven(paperoga));

// function removeNegative(selectedArray) {
//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
        
//         if (element >= 0) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// console.log('remove negative', removeNegative(paperoga));

// FUNCTION COMPOSITION
// const qui = [3, 5, 6, 9, 8, 111, -3, -8, 0, 20, -10000];

// function removeNegativeAndMultiplyBy2(selectedArray) {
//     // const arrayWithoutNegative = removeNegative(selectedArray);
//     // const arrayMultiplied = multiplyArrayBy2(arrayWithoutNegative);

//     // return arrayMultiplied;
//     return multiplyArrayBy2(removeNegative(selectedArray));
// }
// console.log(removeNegativeAndMultiplyBy2(qui));

// ESERCIZI-------------------------------------------------------------------------
const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// 1) Mapping function che prende in input un array di numeri e restituisce un array con tutti i numeri diminuiti di uno
function removeOne(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const newElement = element - 1;

        newArray.push(newElement);
    }
    return newArray;
}
console.log(removeOne(numbersArray));

// 2) Mapping function che prende in input un array di numeri e restituisce un array con il valore assoluto dei numeri
function absolute(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const newElement = Math.abs(element);

        newArray.push(newElement);
    }
    return newArray;
}
console.log(absolute(numbersArray));

// 3) Mapping function che prende in input un array di numeri e restituisce un array di stringhe con scritto 'PARI' se il numero corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari
function pariDispari(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const newElement = element % 2 === 0 ? 'PARI' : 'DISPARI';

        newArray.push(newElement);
    }
    return newArray;
}
console.log(pariDispari(numbersArray));

// 4) Mapping function che prende in input un array di stringhe e le restituisce tutte minuscole
function allLowerCare(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const newElement = element.toLowerCase();

        newArray.push(newElement);
    }
    return newArray;
}
console.log(allLowerCare(stringsArray));

// 5) Mapping function che prende in input un array di stringhe e restituisce un array di numeri con le lunghezze delle stringhe
function stringsLength(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const newElement = element.length;

        newArray.push(newElement);
    }
    return newArray;
}
console.log(stringsLength(stringsArray));

// 6) Mapping function che prende in input un array di stringhe e restituisce le stringhe in formato camelCase
function toFirstCase(selectedWord) {
    const firstChar = selectedWord[0];
    const firstCharUpper = firstChar.toUpperCase();
    const restOfTheString = selectedWord.slice(1);

    return firstCharUpper + restOfTheString;
}

function toCamelCase(selectedString) {
    const lowerString = selectedString.toLowerCase();
    const wordsArray = lowerString.split(' ');

    if (wordsArray.length === 1) {
        return lowerString;
    }

    let camelString = '';

    for (let i = 0; i < wordsArray.length; i++) {
        const element = wordsArray[i];
        
        if (i === 0) {
            camelString += element;
        } else {
            camelString += toFirstCase(element);
        }
    }
    return camelString;
}

function toCamelCaseAll(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const newElement = toCamelCase(element);

        newArray.push(newElement);
    }
    return newArray;
}
console.log(toCamelCaseAll(stringsArray));

// 7) Mapping function che prende in input un array di stringhe e restituisce solo quelle più lunghe di tre caratteri
function moreThan3(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        
        if (element.length > 3) {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(moreThan3(stringsArray));

// 8) Mapping function che prende in input un array di stringhe e restituisce solo quelle che contengono la lettera 'p'
function pLetter(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        
        if (element.includes('p') || element.includes('P')) {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(pLetter(stringsArray));

// 9) Mapping function che prende in input un array di numeri e restituisce i positivi divisibili per 3
function divisibleBy3(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        
        if (element > 0 && element % 3 === 0) {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(divisibleBy3(numbersArray));

console.log(stringsArray.indexOf('Osvaldo'));