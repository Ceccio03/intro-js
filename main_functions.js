console.log('functions');

function square(specialNumber) {
    const result = specialNumber * specialNumber;
    
    return result;
}

function logUppercase(stringToLog) {
    const uppercaseString = stringToLog.toUpperCase();

    console.log(uppercaseString);
}

function gentleAllert() {
    alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare');
}

function logMultipleTimes(stringToLog, times) {
    for (let i = 0; i < times; i++) {
        console.log(stringToLog);
    }
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function pow(base, exponent) {
    const result = base ** exponent;

    return result;
}

function lastCharUppercase(selectedString) {
    const char = selectedString[selectedString.length - 1];
    const charUpperCase = char.toUpperCase();

    return charUpperCase;
}

const pippo = square(16);
console.log(pippo);

logUppercase('viva le funzioni');

gentleAllert();

logMultipleTimes('pizza', 100);

const pluto = isEven(27);
console.log(pluto);

const paperino = pow(2, 10);
console.log(paperino);

const gastone = lastCharUppercase('genova');
console.log(gastone);