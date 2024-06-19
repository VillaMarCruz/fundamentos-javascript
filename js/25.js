// TODO: FETCH API con Promises

const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
