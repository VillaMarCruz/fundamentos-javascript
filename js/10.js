const tecnologias = ["HTML", "CSS", "Javascript", "React.js", "NodeJS"];

// const tecnologias2 = tecnologias.filter((tech) => {
//   if (tech !== "HTML") {
//     return tech;
//   }
// });

const tecnologias2 = tecnologias.map((tech) => {
  if (tech === "NodeJS") return "Nest.js";
});
console.table(tecnologias);
console.table(tecnologias2);

//tecnologias.push("Nest.js");
// const nuevoArreglo = [...tecnologias, "Nest.js"];
// console.table(tecnologias);
// console.table(nuevoArreglo);
