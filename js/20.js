const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

/**
 * ? || Or
 * ? && And
 */

if (saldo > pagar || tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No puedes pagar");
}
