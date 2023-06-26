console.log('oggettiiiii!');

const studente = {nome: 'Damiano', anno: 1993, sposato: false};

console.log(studente);
console.log(studente.nome);
console.log(studente['anno']);

studente.indirizzo = 'taggia';
console.log(studente);
console.log(studente.conto);
console.log(Object.keys(studente)); // tutte le etichette
console.log(Object.values(studente));   // tutti i valori

for (const key in studente) {
    const value = studente[key];

    console.log(key, value);
}

// for (let i = 0; i < Object.keys(studente).length; i++) {
//     const key = Object.keys(studente)[i];
//     const value = studente[key];
// }

const studente2 = {
    name: 'Manuela',
    yob: 1988,
    isMarried: false,
    address: 'Genova',
    marks: [8, 9, 7, 8, 10],
    dog: {
        name: 'Nala',
        breed: 'lupo cecoslovacco', 
        yob: 2017
    }
};
console.log(studente2);

function calculateAge(student) {
    const actualYear = new Date().getFullYear();
    const age = actualYear - student.yob;

    return age;
}
console.log(calculateAge(studente2));

const studente3 = {
    name: 'Cesare',
    yob: 2003,
    isMarried: false,
    address: 'Genova',
    marks: [9, 9, 7, 8, 6],
    dog: {
        name: 'Luna',
        breed: 'bull terrier', 
        yob: 2016
    }
};
console.log(calculateAge(studente3));