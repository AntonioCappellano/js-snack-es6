// creo un array di squadre di calcio

const squadreDiCalcio = [
  { nome: "squadra1", puntiFatti: 0, falliSubiti: 0 },
  { nome: "squadra2", puntiFatti: 0, falliSubiti: 0 },
  { nome: "squadra3", puntiFatti: 0, falliSubiti: 0 },
  { nome: "squadra4", puntiFatti: 0, falliSubiti: 0 },
  { nome: "squadra5", puntiFatti: 0, falliSubiti: 0 },
];

// ciclo per numeri random

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// console.log(generateRandomNumber(0, 10));

// genero numeri random al posto degli 0

for (let squadra of squadreDiCalcio) {
  squadra.puntiFatti = generateRandomNumber(0, 10);
  squadra.falliSubiti = generateRandomNumber(0, 10);
}
// console.table(squadreDiCalcio);

// creo un nuovo array solo con nomi e falli subiti

let senzaPunti = [];

for (let squadra of squadreDiCalcio) {
  senzaPunti.push({
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti,
  });
}

console.log("array con le squadre di calcio:");
console.table(squadreDiCalcio);
console.log("array senza i punti fatti:");
console.table(senzaPunti);
