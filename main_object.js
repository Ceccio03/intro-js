console.log('oggettiiiii!');

const studente = {nome: 'Damiano', anno: 1993, sposato: false};

console.log(studente);
console.log(studente.nome);
console.log(studente['anno']);

studente.indirizzo = 'taggia';
console.log(studente);
console.log(studente.conto);
console.log(Object.keys(studente));
console.log(Object.values(studente));