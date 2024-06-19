// TODO: Optional chaining ' ? '
const alumno = {
  nombre: "Marlon",
  clase: "Programación I",
  aprobado: true,
  examenes: {
    examen1: 90,
  },
};

console.log(alumno.examenes?.examen1);

console.log("Despues de ALUMNO");

// TODO: Nullish coalescing operator (??)
const pagina = 10 ?? 1;
console.log(pagina);
