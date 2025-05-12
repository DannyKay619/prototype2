const productos = [];

const categorias = [
  { 
    nombre: "Tobilleras",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NI5HiAi5ToMS1WJKt_a.jpg",
    enlace: "tobilleras.html"
  },
  { 
    nombre: "Topos",
    imagen: "https://lujoyas.com.co/wp-content/uploads/2023/03/image23-7-Editado.png", // imagen representativa
    enlace: "topos.html"
  },
  { 
    nombre: "Candongas",
    imagen: "https://cdnx.jumpseller.com/iconic/image/58650531/thumb/719/719?1735335522", // imagen representativa
    enlace: "candongas.html"
  },
  { 
    nombre: "Cadenillas",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8cUeMXAlIAiqfKYH9x9vF_1NF_7FnjJv0Bg_oPM5nD6xXPyF_Bd9NzqNA5-heRSrqMo&usqp=CAU", // imagen representativa
    enlace: "cadenillas.html"
  },
  { 
    nombre: "Dijes",
    imagen: "https://esmeraldascolombia.com/cdn/shop/files/dije-jade.jpg?v=1729261064&width=1024", // imagen representativa
    enlace: "dijes.html"
  },
  { 
    nombre: "Camandulas",
    imagen: "https://cdnx.jumpseller.com/iconic/image/39587923/thumb/719/719?1694448963", // imagen representativa
    enlace: "camandulas.html"
  },
  { 
    nombre: "Pulseras",
    imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTETPShMDknvqxHqPLoY-gnIbhGAv_wBbkAycRBrTfjyboKhHChXSzY-tOnADzE5PwVWGHQ5t1wNuQDO6-8RNoatdfZIlBk3JlJNbI1eQFSijLOy8ubEubD4F8", // imagen representativa
    enlace: "pulseras.html"
  },
  { 
    nombre: "Aretes",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NviBd3YuqFlvQZ_Sxz9.jpg", // imagen representativa
    enlace: "aretes.html"
  },
  { 
    nombre: "Anillos",
    imagen: "https://cdn.quicksell.co/-MXrobxuYrIonL9U2XZ7/products/-NvwRM0bCYjEBshdxrp5.jpg", // imagen representativa
    enlace: "anillos.html"
  },
  { 
    nombre: "Cadenas",
    imagen: "https://static.wixstatic.com/media/302ef5_82789a0bc5c8486f99b74192be04190b~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/302ef5_82789a0bc5c8486f99b74192be04190b~mv2.jpg", // imagen representativa
    enlace: "cadenas.html"
  },
  { 
    nombre: "Relojes",
    imagen: "https://panamericana.vtexassets.com/arquivos/ids/444239/reloj-analogo-pulso-metalico-plateado-tablero-negro-3-7701016199797.jpg?v=637916722607600000", // imagen representativa
    enlace: "relojes.html"
  },
  { 
    nombre: "Manillas de balineria",
    imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-iF51X26HZ3YgXBG-OVXOUjUKg1YU6gxiuIvmablEqR-uCaj6aPzg9QZ1GysSMaCxWxB43QM_161-JKrDA8vkhF3D3PB9lGDp6RCi5YYWnLZ_uOM_PiDaHQ", // imagen representativa
    enlace: "manillas.html"
  }
];

const contenedor = document.getElementById("catalogo-amplio");

categorias.forEach((categoria) => {
  const card = document.createElement("div");
  card.classList.add("producto");

  card.innerHTML = `
  <img src="${categoria.imagen}" alt="${categoria.nombre}" />
  <div class="producto-info">
    <h3>${categoria.nombre}</h3>
    <a class="boton" href="${categoria.enlace}">Quiero ver!</a>
    </div>
  `;
  contenedor.appendChild(card);
});