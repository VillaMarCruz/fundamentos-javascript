// TODO: Eventos del DOM
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion  a");
// heading.addEventListener("mouseenter", () => {
//   heading.textContent = "Nuevo Heading";
// });

// heading.addEventListener("mouseleave", () => {
//   heading.textContent = "Saliendo...";
// });

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.textContent = "Le diste click";
  });
});
