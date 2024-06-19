// TODO: Objetos - Manipulación

const producto = {
  nombre: "Biocros",
  price: 33.5,
  status: false,
};

// ? No modificar el objeto
Object.freeze(producto);

// ? Permite modificar propiedades existentes, pero no añadir y eliminar
Object.seal(producto);

// ? Reescribir un valor
producto.status = true;

// ? Sino existe, lo va a añadir
producto.imagen = "imagen.jpg";

// ? Eliminar propiedad
delete producto.price;

console.log(producto);
