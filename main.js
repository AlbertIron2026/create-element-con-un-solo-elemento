const contenedor = document.getElementById("container");



const urlPerso4 = "https://rickandmortyapi.com/api/character/4";

fetch(urlPerso4)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.name); //muestra TODOS los datos
    // algunos de los datos, los queremos poner en una tajeta nueva que no existe
    // crear: la tarjeta, y un elemento para cada dato => appendChild a la tarjeta
    // 1- crear div tarjeta (createElement("div"))
    // 2- añadir estilo a esa tarjeta creada (tarjeta.classList.add("card"))
    // 3- crear elemento img  (createElement("img"))
    // 4- crear elemento p (createElement("p"))
    // 5- añadir la imagen y el parrafo a la tarjeta (appendChild())

    // PASO A PASO (step by step)
    // 1- crear div tarjeta 
    let tarjeta = document.createElement("div");

    // 2- añadir estilo a esa tarjeta creada 
    tarjeta.classList.add("card"); //nombre de la clase en CSS

    // 3- crear elemento img
    let imagen = document.createElement("img");

    // 4- crear elemento p:
    let parrafo = document.createElement("p");

    // Hasta aqui hemos creado los elementos, pero no les hemos dado contenido ni los hemos relacionado
    // contenidos: buscarlos en la API
    // A- ponemos contenido a la imagen mediante su src
    imagen.src = data.image; // lee la direccion de la imagen de la api
    //y la asigna a ese elemento HTML imagen

    // B- leer el nombre de la API y ponerlo en el párrafo mediante innerText o textContext (o innerHTML)
    parrafo.innerText = data.name;

    // esta imagen y parrafo hay que añadirlos al div con appendChild()
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(parrafo);

    // pero aún no se ven, hay que relacionarlo con algún elemento que sí exista previamente, o en su defecto, con el body del HTML
    contenedor.appendChild(tarjeta);

  })
  .catch((err) => {
    console.error("Error:", err);
  });
