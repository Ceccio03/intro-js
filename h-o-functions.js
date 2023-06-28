console.log('order');

// HIGH ORDER FUNCTIONS-----------------------------------
// MAP
// function addOneToArray(arrayOfNumbers) {
//     let tempArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
//         const newElement = element + 1;
        
//         tempArray.push(newElement);
//     }
//     return tempArray;
// }
// console.log(addOneToArray([3, 7, 0]));

// function divideByTwoArray(arrayOfNumbers) {
//     let tempArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
//         const newElement = element / 2;
        
//         tempArray.push(newElement);
//     }
//     return tempArray;
// }
// console.log(divideByTwoArray([3, 7, 0]));

// function map(array, transFunc) {
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const newElement = transFunc(element);
        
//         tempArray.push(newElement);
//     }
//     return tempArray;
// }

// function addOne(element) {
//     const newElement = element + 1;

//     return newElement;
// }

// function divideByTwo(element) {
//     const newElement = element / 2;

//     return newElement;
// }
// console.log(map([7, 10, 34], addOne));
// console.log(map([7, 10, 34], divideByTwo));


// const testArray = [12, 34, 5, 0, -23];

// function multiplyBy2(element) {
//     const newElement = element * 2;

//     return newElement;
// }
// console.log(testArray.map(multiplyBy2));
// console.log(testArray.map((element) => element * 2));


// const testArray2 = ['CIAO', 'qui', 'sticazzi', 'il sole splende vincitore'];

// function getStringLength(element) {
//     const length = element.length;

//     return length;
// }
// console.log(testArray2.map((element) => element.length));
// console.log(testArray2.map(getStringLength));

// function multiplyByIndex(element, i, originalArray) {
//     const newElement = element * i;

//     return newElement;
// }
// console.log(testArray.map(multiplyByIndex));
// console.log(testArray.map((e, i) => e * i));

// function removeNegative(array) {
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (element >= 0) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }
// console.log(removeNegative([0, 3, 5, -2, -5, 8]));

// function filter(array, filterFunc) {
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (filterFunc(element)) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// function isPositive(element) {
//     if (element >= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(filter([0, 3, 5, -2, -5, 8], isPositive));


// const testArray3 = [3, 5, 4, 8, 20, 21];

// function isEven(element) {
//     if (element % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(testArray3.filter(isEven));
// console.log(testArray3.filter(element => element % 2 === 0));

// function isIndexEven(element, index, originalArray) {
//     if (index % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(testArray3.filter(isIndexEven));
// console.log(testArray3.filter((element, index) => index % 2 === 0));

function sumAll(array) {
    let accumulator = 0;

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        
        accumulator += current;
    }
    return accumulator;
}
console.log(sumAll([23, 4, 4, 6, 3]));

function reduce(array, reduceFunc, startingValue) {
    let accumulator = startingValue;

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        
        accumulator = reduceFunc(accumulator, current);
    }
    return accumulator;
}

function sum(accumulator, current) {
    const newAccumulator = accumulator + current;

    return newAccumulator;
}
console.log(reduce([23, 4, 4, 6, 3], sum, 0));


const testArray4 = [4, 3, 2, 1];

function multiply(acc, curr) {
    // const newAcc = acc * curr;

    // return newAcc;
    return acc * curr;
}
console.log(testArray4.reduce(multiply, 1));
console.log(testArray4.reduce((acc, curr) => acc * curr, 1));


const multiplyLambda = (acc, curr) => {
    const newAcc = acc * curr;

    return newAcc;
}

const multiplyLambda2 = (acc, curr) => acc * curr;

console.log(testArray4.reduce((acc, curr) => {
    const newAcc = acc * curr;

    return newAcc;
}, 1));