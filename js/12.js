// TODO: RECORRIDO ARRAYS CON FOR
const tecnologias = ["HTML", "CSS", "Javascript", "React.js", "NodeJS"];

// ? FOR SIMPLE
// for (let index = 0; index < tecnologias.length; index++) {
//   console.log(tecnologias[index]);
// }
// console.table(tecnologias);

// ? FOR EACH
const arrayForEach = tecnologias.forEach((tech) => {
  console.log(tech);
});

// ? MAP
const arrayMap = tecnologias.map((tech) => {
  if (tech !== "NodeJS") return "Nest.js";
});

console.log(arrayForEach);
console.log(arrayMap);

// ? FOR .... OF
for (const tech of tecnologias) {
  console.log(tech);
}
