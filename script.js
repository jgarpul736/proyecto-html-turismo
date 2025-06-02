const swiper = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  

  /* Mapa */
  // Coordenadas de Granada (centrado)
const granadaCoords = [37.1765, -3.5979];

// Inicializar mapa
const map = L.map('map').setView(granadaCoords, 14);

// Añadir mapa base
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Estilo personalizado de icono
const customIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
});

// Lugares turísticos
const lugares = [
  {
    nombre: "La Alhambra",
    coords: [37.1761, -3.5881],
    descripcion: "La joya de Granada. Antigua ciudad palatina andalusí con palacios, jardines y fortaleza nazarí.",
  },
  {
    nombre: "Mirador de San Nicolás",
    coords: [37.1810, -3.5921],
    descripcion: "Famoso por ofrecer las mejores vistas de la Alhambra y Sierra Nevada. Ideal para el atardecer.",
  },
  {
    nombre: "Generalife",
    coords: [37.1775, -3.5818],
    descripcion: "Palacio de verano de los reyes nazaríes con jardines exuberantes y arquitectura relajante.",
  },
  {
    nombre: "Capilla Real de Granada",
    coords: [37.1768, -3.5995],
    descripcion: "Mausoleo de los Reyes Católicos. Gótico impresionante en el corazón de la ciudad.",
  },
  {
    nombre: "Albaicín",
    coords: [37.1802, -3.5945],
    descripcion: "Barrio morisco con callejuelas empedradas, casas blancas y una historia fascinante. Ideal para perderse.",
  },
];


// Añadir marcadores al mapa
lugares.forEach(lugar => {
  L.marker(lugar.coords, { icon: customIcon })
    .addTo(map)
    .bindPopup(`<strong>${lugar.nombre}</strong><br>${lugar.descripcion}`);
});



/** A aprte */
let navigation = document.querySelector(".navigation");
let close = document.querySelector(".close");
navigation.onclick = function () {
  navigation.classList.add("active");
};
close.onclick = function () {
  navigation.classList.remove("active");
};