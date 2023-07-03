// TYPEOF
// const pippo = 12;
// const pluto = 'ciao mondo';
// const paperino = true;
// const qui = undefined;
// const quo = null;
// const qua = NaN;
// const clarabella = {
//     name: 'isabella',
//     yob: 1996
// };
// const orazio = ['ciao', 'hello'];

// console.log(typeof pippo);
// console.log(typeof pluto);
// console.log(typeof paperino);
// console.log(typeof qui);
// console.log(typeof quo);
// console.log(typeof qua);
// console.log(qua === NaN);
// console.log(isNaN(qua));
// console.log(typeof clarabella);
// console.log(typeof orazio);

// function range(start, end, step = 1, reversed = false) {
//     const tempArray = [];

//     if (reversed) {
    
//         if (start < end) {
//             return tempArray;
//         }

//         for (let i = start; i >= end; i -= step) {
//             tempArray.push(i);
//         }
//         return tempArray;
//     } else {
//         if (end < start) {
//             return tempArray;
//         }
//         for (let i = start; i <= end; i += step) {
//             tempArray.push(i);
//         }
//     }
//     return tempArray;
// }
// console.log(range(-5, 50));
// console.log(range(0, 100, 2));
// console.log(range(-5, 50));

// function sum(numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(range(0, 10)));

let testArray = ['qui', 'quo', 'qua'];

function reverseArray(arr) {
    const tempArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];

        tempArray.push(element);
    }
    return tempArray;
}

const newArray = reverseArray(testArray);
console.log(newArray);
console.log(testArray);

function reverseArrayInPlace(arr) {
    const cloneArray = [...arr];
    const j = 0;

    for (let i = cloneArray.length - 1; i >= 0; i--) {
        const element = cloneArray[i];

        arr[j] === element;

        j++;
    }
}
console.log(reverseArrayInPlace);