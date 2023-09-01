// Obtenemos todos los elementos con la clase "submenu-trigger"
const submenuTriggers = document.querySelectorAll(".submenu-trigger");

// Iteramos sobre los elementos y agregamos un evento de clic a cada uno
submenuTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        // Obtenemos el submenú asociado al disparador actual
        const submenuContent = trigger.querySelector(".submenu-content");

        // Comprobamos si el submenú está visible
        const isVisible = getComputedStyle(submenuContent).display === "block";

        // Mostramos u ocultamos el submenú según su estado actual
        if (isVisible) {
            submenuContent.style.display = "none";
        } else {
            submenuContent.style.display = "block";
        }
    });
});
