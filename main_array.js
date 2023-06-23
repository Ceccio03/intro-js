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
const paperino = [2, 5, -4, 2000, 7, 34];

function multiplyArrayBy2(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const newElement = element * 2;

        newArray.push(newElement);
    }
    return newArray;
}
console.log('multiply by 2', multiplyArrayBy2(paperino));

function divideArrayBy2ifEven(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        let newElement;

        if (element % 2 === 0) {
            newElement = element / 2;
        } else {
            newElement = element;
        }

        newArray.push(newElement);
    }
    return newArray;
}
console.log('divide by 2 if even', divideArrayBy2ifEven(paperino));

const paperone = ['qui', 'quo', 'qua'];

function upperCaseAll(selectedArray) {
    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const newElement = element.toUpperCase();

        newArray.push(newElement);
    }
    return newArray;
}
console.log(upperCaseAll(paperone));