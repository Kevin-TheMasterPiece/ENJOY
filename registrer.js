document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    let selectedOptions = { comida: "", musica: "", deportes: "" };

    document.querySelectorAll(".btn-option").forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            selectedOptions[category] = button.dataset.value;

            // Desactivar otros botones de la misma categoría
            document.querySelectorAll(`.btn-option[data-category="${category}"]`)
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const fullname = document.getElementById("fullname").value;
        const password = document.getElementById("password").value;

        const userData = {
            email,
            fullname,
            password,
            gustos: selectedOptions
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "home.html";
    });
});
