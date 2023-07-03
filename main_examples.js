// TYPEOF
const pippo = 12;
const pluto = 'ciao mondo';
const paperino = true;
const qui = undefined;
const quo = null;
const qua = NaN;
const clarabella = {
    name: 'isabella',
    yob: 1996
};
const orazio = ['ciao', 'hello'];

console.log(typeof pippo);
console.log(typeof pluto);
console.log(typeof paperino);
console.log(typeof qui);
console.log(typeof quo);
console.log(typeof qua);
console.log(qua === NaN);
console.log(isNaN(qua));
console.log(typeof clarabella);
console.log(typeof orazio);

function range(start, end, step = 1, reversed = false) {
    const tempArray = [];

    if (reversed) {
    
        if (start < end) {
            return tempArray;
        }

        for (let i = start; i >= end; i -= step) {
            tempArray.push(i);
        }
        return tempArray;
    } else {
        if (end < start) {
            return tempArray;
        }
        for (let i = start; i <= end; i += step) {
            tempArray.push(i);
        }
    }
    return tempArray;
}
console.log(range(-5, 50));
console.log(range(0, 100, 2));
console.log(range(-5, 50));