const auth = true;

const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

// auth ?
//   console.log("Usuario autenticado")
//   : console.log("No autenticado, ir al Login");

saldo > pagar
  ? console.log("Si puedes pagar")
  : tarjeta
  ? console.log("Puedes pagar con tarjeta")
  : console.log("No puedes pagar");
