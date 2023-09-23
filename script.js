const apiDatos = "productos.json";
const divmostrar = document.querySelector("#info-producto");

const getDatos = async () => {
  const resultado = await fetch(apiDatos);
  const datos = await resultado.json();
  return datos;
};

const mostrarProductos = async () => {
  const datos = await getDatos();

  let mostrarDatos = datos
    .map((object) => {
      const { codigo, descripcion, imagen, detalle, precio, calificacion } =
        object;
      return `
        <div class="container">
        <h1> ${codigo}</h1>
        </div>
        <div class="container">
        <h2> ${descripcion}</p>
        </div>
        <button> Info </button>
        `;
    })
    .join("");

  divmostrar.innerHTML = mostrarDatos;
};
mostrarProductos();
