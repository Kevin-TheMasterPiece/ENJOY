// Cargar datos del usuario desde localStorage
document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const planesPendientes = JSON.parse(localStorage.getItem("planesARealizar")) || [];
    const planesRealizados = JSON.parse(localStorage.getItem("planesRealizados")) || [];

    // Mostrar datos del usuario
    document.getElementById("userName").textContent = userData.fullname || "Usuario no registrado";
    document.getElementById("userGustos").textContent = `Tus gustos: ${userData.gustos ? Object.values(userData.gustos).join(", ") : "N/A"
        }`;

    mostrarPlanes("plansList", planesPendientes);
    mostrarPlanes("completedPlansList", planesRealizados);

    // Cargar foto si existe en localStorage
    const fotoGuardada = localStorage.getItem("userPhoto");
    if (fotoGuardada) {
        document.getElementById("profilePic").src = fotoGuardada;
    }
});

// Función para mostrar los planes en un contenedor específico
function mostrarPlanes(containerId, planes) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Limpiar contenido previo

    if (planes.length === 0) {
        container.innerHTML = "<p>No hay planes disponibles.</p>";
        return;
    }

    planes.forEach(plan => {
        const planCard = `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${plan.nombre}</h5>
            <p class="card-text">${plan.descripcion}</p>
            <p class="text-muted">Ubicación: ${plan.ubicacion}</p>
          </div>
        </div>
      `;
        container.innerHTML += planCard;
    });
}


// Subir foto y guardarla en localStorage
const uploadPhoto = document.getElementById("uploadPhoto");
uploadPhoto.addEventListener("change", (event) => {
    const reader = new FileReader();
    reader.onload = function (e) {
        const profilePic = document.getElementById("profilePic");
        profilePic.src = e.target.result;
        localStorage.setItem("userPhoto", e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
});
