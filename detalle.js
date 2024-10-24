// Obtener el plan seleccionado desde localStorage
const planSeleccionado = JSON.parse(localStorage.getItem("planSeleccionado"));
const btnPlan = document.getElementById("btn-plan");

// Obtener la lista de planes a realizar desde localStorage o inicializarla
let planesARealizar = JSON.parse(localStorage.getItem("planesARealizar")) || [];
let planesRealizados = JSON.parse(localStorage.getItem("planesRealizados")) || [];

// Mostrar la información del plan en el DOM
function mostrarDetalles() {
    if (planSeleccionado) {
        document.getElementById("plan-imagen").src = planSeleccionado.imagen;
        document.getElementById("plan-nombre").textContent = planSeleccionado.nombre;
        document.getElementById("plan-descripcion").textContent = planSeleccionado.descripcion;
        document.getElementById("plan-ubicacion").textContent = `Ubicación: ${planSeleccionado.ubicacion}`;
        document.getElementById("plan-precio").textContent = 
            `Rango de Precios: $${planSeleccionado.rangoPrecios.minimo} - $${planSeleccionado.rangoPrecios.maximo}`;

        actualizarBoton();
    }
}

// Función para actualizar el estado del botón según si el plan ya está en la lista
function actualizarBoton() {
    const planYaSeleccionado = planesARealizar.some(
        plan => plan.nombre === planSeleccionado.nombre
    );

    btnPlan.textContent = planYaSeleccionado ? "Finalizar Plan" : "Realizar Plan";

    btnPlan.onclick = () => {
        if (planYaSeleccionado) {
            // Mover el plan de 'planesARealizar' a 'planesRealizados'
            planesARealizar = planesARealizar.filter(
                plan => plan.nombre !== planSeleccionado.nombre
            );
            planesRealizados.push(planSeleccionado);
            localStorage.setItem("planesRealizados", JSON.stringify(planesRealizados));
        } else {
            // Agregar el plan a 'planesARealizar'
            planesARealizar.push(planSeleccionado);
        }

        localStorage.setItem("planesARealizar", JSON.stringify(planesARealizar));
        actualizarBoton();
    };
}




// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", mostrarDetalles);
