const error = document.querySelector("#text-error");
const email = document.querySelector("#txtEmail");
const password = document.querySelector("#txtPassword");
const btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", () => {
  login(); // Llamada a formSubmit
  console.log("console.log");
});

const errorLogin = () => {
  error.innerHTML = "Correo electrónico o contraseña equivocada.";
  error.classList.remove("text-muted");
  error.classList.add("text-danger");

  email.value = "";
  password.value = "";
  email.focus();
};

const login = async () => {
  const axios = require("axios");
  console.log("lof", login);

  const data = { nombre: email.value, clave: password.value };
  console.log("dataaa", data);
  try {
    const response = await axios.post(
      "https://pedidosventas.materialessoto.com/login",
      data
    );
    console.log("res", response);
    if (response.data.success) {
      console.log("Inicio de sesión exitoso");
      // Realiza acciones adicionales después de un inicio de sesión exitoso
    } else {
      errorLogin();
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    errorLogin();
  }
};
