console.log('functions');

// function square(specialNumber) {
//     const result = specialNumber * specialNumber;
    
//     return result;
// }

// function logUppercase(stringToLog) {
//     const uppercaseString = stringToLog.toUpperCase();

//     console.log(uppercaseString);
// }

// function gentleAllert() {
//     alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare');
// }

// function logMultipleTimes(stringToLog, times) {
//     for (let i = 0; i < times; i++) {
//         console.log(stringToLog);
//     }
// }

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function pow(base, exponent) {
//     const result = base ** exponent;

//     return result;
// }

// function lastCharUppercase(selectedString) {
//     const char = selectedString[selectedString.length - 1];
//     const charUpperCase = char.toUpperCase();

//     return charUpperCase;
// }

// const pippo = square(16);
// console.log(pippo);

// logUppercase('viva le funzioni');

// gentleAllert();

// logMultipleTimes('pizza', 100);

// const pluto = isEven(27);
// console.log(pluto);

// const paperino = pow(2, 10);
// console.log(paperino);

// const gastone = lastCharUppercase('genova');
// console.log(gastone);

// SINTASSI ALTERNATIVE-------------------------------------------------------------
// function square(number) {
//     // const result = number * number;
//     // return result;
//     const result = number * number;

//     return result;
//     // return number * number
// }

// console.log(square(3));


// const square2 = function(number) {
//     const result = number * number;

//     return result;
// }   // anonimous function

// console.log(square2(10));


// const square3 = (number) => {
//     const result = number * number;

//     return result;
// }   // lambda function (arrow function)

// console.log(square2(4));


// const square4 = number => number * number;
// const pow = (base, exponent) => base ** exponent;

// console.log(square4(8));
// console.log(pow(4, 3));

// PARAMETRI-----------------------------------------------------------------------
// function logParameters(parameter1, parameter2) {
//     console.log('paramtero 1', parameter1);
//     console.log('parametro 2', parameter2);
// }

// logParameters('pippo', 5);
// logParameters(27);
// logParameters();


// function pow(base, exponent) {
//     if (base === undefined) {
//         return "che cavolo stai facendo?!?!"
//     }
//     if (exponent !== undefined) {
//         const result = base ** exponent;

//         return result;
//     } else {
//         const result2 = base ** 2;

//         return result2;
//     }
// }

// const pippo = pow(4, 4);
// console.log(pippo);

// const pluto = pow(4);
// console.log(pluto);

// const paperino = pow();
// console.log(paperino);

// VALORI DI DEFALUT----------------------------------------------------------------
// function pow(params) {
//     const result = base ** exponent;

//     return result;
// }

// console.log(pow(5, 3));
// console.log(pow(5));

// const startingString = '11';
// const startingNumber = parseInt(startingString, 16);

// console.log(startingString, typeof startingString);
// console.log(startingNumber, typeof startingNumber);


// 1) Definire una funzione 'pow' che non faccia uso dell'operatore '**' ne della libreria Math
function pow(base, exponent) {
    let pippo = base;
    for (let i = 1; i < exponent; i++) {
        base *= pippo;
    }  
    return base; 
}
console.log(pow(5, 4));

// 2) Definire una funzione 'correctCase' che prende in input una stringa e la restituisce trasformando la prima lettera in maiuscolo
// 'la casa blu' => 'La casa blu'
function correctCase(params) {
    
}

// 3) Definire una funzione 'min' che dati due numeri restituisca il minore
function min(params) {
    
}

// 4) Definire una funzione 'clamp' che prende come parametri tre numeri: valore, massimo e minimo
// Se valore è minore di minimo, restituisce minimo
// Se valore è maggiore di massimo, restituisce massimo
// Altrimenti restituisce valore
function clamp(valore, massimo, minimo) {
    
}

// 5) Definire una funzione chessboard che prende come parametro 'size' e stampa la scacchiera
function chessboard(params) {
    
}

// 6) Definire una funzione 'ellipse' che prende come parametro una stringa
// Se la stringa è minore di 20 caratteri la ritorna non modificata
// Altrimenti la taglia a 20 caratteri e aggiunge 3 puntini
// 'ciao mamma!' => 'ciao mamma!'
// 'nel mezzo del cammin di nostra vita' => 'nel mezzo del cammin...'
function ellipse(params) {
    
}

// 7) Definire una funzione reverseString che data una stringa la restituisca al contrario
// 'casa rosa' => 'asor asac'
function reverseString(params) {
    
}