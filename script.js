const productos = [
    {
    nombre: "Anillo Crystal Box ",
    descripcion: "Ajustable",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OKlMoJ9FUgikaQ3pIKj.jpg",
    precio: "100.000"
  },
     {
    nombre: "Anillo tifany liso",
    descripcion: "Ajustable",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-OKlM7Qhd5oJRtj2n0TQ.jpg",
    precio: "100.000"
  },
    {
    nombre: "Tobillera Serpiente",
    descripcion: "Diseño clásico 25cm.",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O39p9ku2kJLhS-UO5Bs.jpg",
    precio: "100.000"
  },
    {
    nombre: "Argolla lucky clover",
    descripcion: "Consultar tallas",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-MWztwcQiyda4bM1OD.jpg",
    precio: "190.000"
  },
    { 
    nombre: "Topo caballo",
    descripcion: "Figura de caballito",
    precio: "35.000",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NviBd3YuqFlvQZ_Sxz9.jpg", // imagen representativa
    enlace: "aretes.html"
  },
    {
        nombre: "Arete pavo real",
        precio: "65.000",
        descripcion: "Color verde elegante",
        imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-N7Ymnzb_GEdH44ClwJP.jpg"
    }
];

const catalogo = document.getElementById("catalogo");
const modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");
document.body.appendChild(modal);

productos.forEach((p, i) => {
    const producto = document.createElement("div");
    producto.classList.add("producto");
    producto.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" />
        <div class="producto-info">
            <h3>${p.nombre}</h3>
            <button class="boton" data-index="${i}">Ver mas</button>
        </div>
    `;
    catalogo.appendChild(producto);
});

document.querySelectorAll(".boton").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const p = productos[index];
        modal.innerHTML = `
            <div class="modal-content">
                <span class="cerrar">&times;</span>
                <img src="${p.imagen}" alt="${p.nombre}" />
                <h2>${p.nombre}</h2>
                <p>${p.descripcion}</p>
                <strong>Precio: ${p.precio}</strong>
                <br><br>
                <a class="boton" href="https://wa.me/573126238557?text=Hola%2c%20me%20interesa%20${encodeURIComponent(p.nombre)}" target="_blank">Comprar por WhatsApp</a>
            </div>
        `;
        modal.style.display = "flex";
        document.querySelector(".cerrar").onclick = () => {
            modal.style.display = "none";
        };
    });
});