// TODO: Arrays Methods

const tecnologias = ["HTML", "CSS", "Javascript", "React.js", "NodeJS"];
const numeros = [10, 20, 30];

// ? FILTER
// const nuevoArray = tecnologias.filter((tech) => tech !== "HTML");
// const resultado = numeros.filter((numero) => numero !== 10);
// console.table(nuevoArray);
// ? INCLUDES
// const resultado = tecnologias.includes("CSS");
// ? SOME - Devuelve si al menos uno cumple con la condición
// const resultado = numeros.some((numero) => numero > 15);
// if (resultado) {
//   console.log("Si hay elementos");
// } else {
//   console.log("No hay elementos");
// }
// ? FIND - Devuelve el primer elemto que cumple una condicion
// const resultado = numeros.find((numero) => numero > 15);
// ? EVERY - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every((numero) => numero > 5);

// Reduce - Retorna un acumulado del total
const resultado = numeros.reduce((total, numero) => total + numero, 0);

console.table(resultado);
