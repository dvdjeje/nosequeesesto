const imagenes = [
  "https://estaticos-cdn.elperiodico.com/clip/bdbf5dde-0d7f-4f7b-99ba-2255654192b4_alta-libre-aspect-ratio_default_0.jpg",
  "https://th.bing.com/th/id/R.ecfe3fd6b5f685327ba43ae47776b17f?rik=YATSDjeB9SAdEQ&pid=ImgRaw&r=0",
  "https://www.scifinow.co.uk/wp-content/uploads/2019/01/maxresdefault-1.jpg",
  ""
];

const titulos = [
  "La Monja",
  "Demogorgon",
  "Chucky",
  "Ghostface"
];

const frases = [
  "Estás jodid@.",
  "Esta criatura del Upside Down es alta, pálida y tiene garras que pueden despedazarte. Su debilidad es el fuego.",
  "El muñeco infernal de la cultura pop. No debería ser un problema si eres astut@.",
  "Un asesino empedernido en acabarte"


];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();