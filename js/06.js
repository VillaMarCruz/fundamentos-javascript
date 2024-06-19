// TODO: Objetos - Destructuring de dos o mas objetos

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

const { nombre } = producto;
const {
  nombre: nombreCliente,
  direccion: { calle },
} = cliente;

console.log(nombre);
console.log(nombreCliente);
console.log(calle);
