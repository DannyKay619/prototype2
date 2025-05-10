document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Producto de ejemplo", descripcion: "Descripción del producto.", imagen: "../img/ejemplo.jpg", precio: "100.000" }
  ];
  const contenedor = document.getElementById("catalogo-pulseras");
  productos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("producto");
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <div class="producto-info">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <strong>$${p.precio}</strong><br>
        <a class="boton" href="https://wa.me/573126238557?text=Hola,%20me%20interesa%20${encodeURIComponent(p.nombre)}" target="_blank">Comprar</a>
      </div>`;
    contenedor.appendChild(card);
  });
});
