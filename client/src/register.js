// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ
import "./style.css";

const $form = document.getElementById("register-form");


$form.addEventListener("submit", async (e) => {
    // Evitar que el formulario recargue la página
    e.preventDefault();

    // Crear un objeto FormData con los datos del formulario
    const formData = new FormData($form);

    // Convertir los datos del formulario a un objeto JSON
    const entries = Object.fromEntries(formData.entries());

    // Enviar los datos al servidor
    try {
        const response = await fetch("http://localhost:4321/auth/sign-up", {
            credentials:"include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entries),
        });

        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }


        const result = await response.json();
        console.log("Registro exitoso:", result);
        e.preventDefault();
    } catch (error) {
        console.error("Error:", error);
    }
});
