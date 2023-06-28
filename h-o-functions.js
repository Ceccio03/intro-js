console.log('order');

// HIGH ORDER FUNCTIONS-----------------------------------
// MAP
function addOneToArray(arrayOfNumbers) {
    let tempArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        const newElement = element + 1;
        
        tempArray.push(newElement);
    }
    return tempArray;
}
console.log(addOneToArray([3, 7, 0]));

function divideByTwoArray(arrayOfNumbers) {
    let tempArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        const newElement = element / 2;
        
        tempArray.push(newElement);
    }
    return tempArray;
}
console.log(divideByTwoArray([3, 7, 0]));

function map(array, transFunc) {
    let tempArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = transFunc(element);
        
        tempArray.push(newElement);
    }
    return tempArray;
}

function addOne(element) {
    const newElement = element + 1;

    return newElement;
}
console.log(map([7, 10, 34], addOne));