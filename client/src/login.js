import "./style.css";

// Obtener el formulario de inicio de sesión
const $form = document.getElementById("login-form");

// Añadir un evento de submit al formulario
$form.addEventListener("submit", async (e) => {
  // Evitar que el formulario recargue la página
  e.preventDefault();

  // Crear un objeto FormData con los datos del formulario
  const formData = new FormData($form);

  // Convertir el objeto FormData a un objeto plano
  const entries = Object.fromEntries(formData.entries());

  // Realizar una solicitud POST a la API de inicio de sesión
  try {
    const response = await fetch("http://localhost:4321/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entries),
    });

    if (response.ok) {
      // Redirigir al usuario a la página principal
      e.preventDefault();
      const data = await response.json();
      console.log(data);
      window.location.href = "/";
    } else {
      // Mostrar un mensaje de error al usuario
      const errorData = await response.json();
      console.error("Error de inicio de sesión:", errorData);
      alert("Error de inicio de sesión: " + errorData.message);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    alert("Error en la solicitud: " + error.message);
  }
});