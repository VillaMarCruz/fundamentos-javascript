// TODO: Objetos - Unir dos o mas objetos

const producto = {
  nombre: "Biocros",
  price: 33.5,
  status: false,
};

const cliente = {
  nombre: "Marlon",
  premium: true,
  direccion: {
    calle: "Calle Filomeno",
  },
};

// const carrito = {
//   cantidad: 1,
//   ...producto, // spread operator
// };

// console.log(carrito);

// const nuevoObjeto = {
//   ...producto,
//   ...cliente,
// };

// console.log(nuevoObjeto);

const nuevoObjeto2 = Object.assign(producto, cliente);

console.log(nuevoObjeto2);
