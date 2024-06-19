// TODO: Async await

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

const consultarAPI = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Hubo un error");
    }
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI();
