// Array de planes
const planes = [
    {
        nombre: "Restaurante Italiano Bella Italia",
        imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d3/62/37/vive-un-viaje-mediterraneo.jpg?w=600&h=-1&s=1",
        ubicacion: "Centro de la ciudad",
        descripcion: "Disfruta de auténtica comida italiana.",
        categoria: "Italiana",
        rangoPrecios: { minimo: "35.000", maximo: "138.400" }
    },
    {
        nombre: "Concierto de Rock Legends",
        imagen: "https://www.radioacktiva.com/wp-content/uploads/2024/01/rock-10124.jpg",
        ubicacion: "Parque principal Facatativa",
        descripcion: "Los mejores éxitos del rock en vivo.",
        categoria: "Rock",
        rangoPrecios: { minimo: "GRATIS", maximo: "GRATIS" }
    },
    {
        nombre: "Torneo de Fútbol Amateur",
        imagen: "https://i.ytimg.com/vi/qAyZR8fdg20/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWibr-P8oYtjzK6ALySI8KrGA1lA",
        ubicacion: "Cancha sintetica del Nova Plaza",
        descripcion: "Un torneo para los amantes del fútbol.",
        categoria: "Fútbol",
        rangoPrecios: { minimo: "50.000", maximo: "70.000" }
    },
    {
        nombre: "Sushi Bar Nippon",
        imagen: "https://nipponsushi.com.my/wp-content/uploads/2020/10/RBT01733-1024x683.jpg",
        ubicacion: "Zona Gourmet",
        descripcion: "Experiencia única de sushi y comida oriental.",
        categoria: "Oriental",
        rangoPrecios: { minimo: "25.000", maximo: "60.000" }
    },
    {
        nombre: "Concierto de Jazz Nocturno",
        imagen: "https://img.freepik.com/fotos-premium/ensemble-tocando-concierto-nocturno-escenario-musica-jazz_35691-45572.jpg",
        ubicacion: "Jazz Club Faca",
        descripcion: "Sumérgete en la magia del jazz.",
        categoria: "Jazz",
        rangoPrecios: { minimo: "30.000", maximo: "80.000" }
    },
    {
        nombre: "Partido de Baloncesto Profesional",
        imagen: "https://eldeportivo.com.co/wp-content/uploads/2022/09/Baloncesto-colombiano.jpg",
        ubicacion: "Arena Deportiva",
        descripcion: "Vive la emoción del baloncesto.",
        categoria: "Baloncesto",
        rangoPrecios: { minimo: "50.000", maximo: "70.000" }
    },
    {
        nombre: "El Gran Garibaldi",
        imagen: "https://content.app-sources.com/s/46533473521419823/uploads/Images/PORTADA_1-2105981.png?format=webp",
        ubicacion: " Cl. 8 # 4-88, Facatativá, Cundinamarca",
        descripcion: "La mejor experiencia mexicana con musica y shows en vivo",
        categoria: "Mexicana",
        rangoPrecios: { minimo: "17.500", maximo: "68.000" }
    }
];

// Obtener los datos del usuario desde localStorage (usando la Key 'userData')
const userData = JSON.parse(localStorage.getItem("userData")) || {};
const { comida, musica, deportes } = userData.gustos || {};

// Función para filtrar los planes según los gustos del usuario
function filtrarPlanes() {
    return planes.filter(plan =>
        plan.categoria.includes(comida) ||
        plan.categoria.includes(musica) ||
        plan.categoria.includes(deportes)
    ).slice(0, 3); // Mostrar solo 3 planes
}

// Función para mostrar los planes en el DOM
function mostrarPlanes() {
    const plansContainer = document.getElementById("plans-container");
    const planesFiltrados = filtrarPlanes();

    plansContainer.innerHTML = ""; // Limpiar el contenedor

    planesFiltrados.forEach((plan, index) => {
        const planCard = `
                    <div class="col">
                        <div class="card shadow-sm">
                        
                                <!-- Imagen -->
                                
                                    <img src="${plan.imagen}"
                                        alt="${plan.nombre}" class="bd-placeholder-img img-fluid rounded-start"
                                        width="100%" height="100%">
                            

                                <!-- Cuerpo de la tarjeta -->
                            
                                    <div class="card-body">
                                        <h1 class="card-text">${plan.nombre}</h1>
                                        <p class="card-text">${plan.descripcion}</p>
                                        <p class="text-muted">Ubicación: ${plan.ubicacion}</p>
                                        <p class="text-muted">Rango de Precios: $${plan.rangoPrecios.minimo} - $${plan.rangoPrecios.maximo}</p>
                                        <a href="#" class="btn btn-primary" onclick="verDetalles(${index})">Más Info &gt;</a>
                                    </div>
                            
                        </div>
                    </div>
        `;

        plansContainer.innerHTML += planCard;
    });
}
// Redirigir al usuario a la página de detalles con el plan seleccionado
function verDetalles(index) {
    const planSeleccionado = filtrarPlanes()[index]; // Usar el plan filtrado según el índice
    localStorage.setItem("planSeleccionado", JSON.stringify(planSeleccionado));
    window.location.href = "detalle.html";
}

// Llamar a la función para mostrar los planes al cargar la página
mostrarPlanes();
