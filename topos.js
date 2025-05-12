const productosTopos = [
  
{
  nombre: "Topo circon colores",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWsljOzmqld39ih6.jpg",
  precio: "70.000"
},
{
  nombre: "Topo circon cuadrado",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWw4hfH5vsyGuHRP.jpg",
  precio: "70.000"
},
{
  nombre: "Topo espiral circon",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-CYegSeT4PJKZJHh43.jpg",
  precio: "70.000"
},
{
  nombre: "Topo corazon tallado",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWtbY4Po0hr8vUCH.jpg",
  precio: "70.000"
},
{
  nombre: "Topo rosa",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWsIHrrTYJgqMv1Z.jpg",
  precio: "70.000"
},
{
  nombre: "Topo aro doble bola circon",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWy3iVHkirJziU3i.jpg",
  precio: "65.000"
},
{
  nombre: "Topo corona rolex medalla",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-CYefLyAaP89sLRWrH.jpg",
  precio: "65.00"
},
{
  nombre: "Topo guadalupe medalla",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-CYeh3z8nkEE_FW0L7.jpg",
  precio: "70.000"
},
{
  nombre: "Topo flor hojitas circon",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWvFpWNmaeJ-0CGH.jpg",
  precio: "70.000"
},
{
  nombre: "Topo mariquita circon",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWr-zDFM6tyYvEFV.jpg",
  precio: "70.000"
},
{
  nombre: "Topo ala",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-CYeiY8KUfxmqcR9va.jpg",
  precio: "70.000"
},
{
  nombre: "Topo milagrosa medalla",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-CYeiDn958sdZOZGqO.jpg",
  precio: "70.000"
},
{
  nombre: "Topo flor",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWs8tJuXKJzLkKLg.jpg",
  precio: "70.000"
},
{
  nombre: "Topo corona rolex medalla",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-CYefLyAaP89sLRWrH.jpg",
  precio: "70.000"
},
{
  nombre: "Topo oso",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWt2yzQk281_2NQM.jpg",
  precio: "70.000"
},
{
  nombre: "Topo corazon llave",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-O-CYefgvV4fJNSnbdEN.jpg",
  precio: "70.000"
},
{
  nombre: "Topo jirafa circon",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWxhOjZuL1x8ceM3.jpg",
  precio: "70.000"
},
{
  nombre: "Topo media perla mediana",
  descripcion: "",
  imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NoIAWwdvy74aW0vAXqU.jpg",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},
{
  nombre: "T",
  descripcion: "",
  imagen: "",
  precio: "70.000"
},

];
  const contenedor = document.getElementById("catalogo-topos");
  
  productosTopos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("producto");
  
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <div class="producto-info">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <a class="boton" href="https://wa.me/573126238557?text=Hola,%20me%20interesa%20${encodeURIComponent(p.nombre)}" target="_blank">Comprar</a>
      </div>
    `;
  
    contenedor.appendChild(card);
  });
  