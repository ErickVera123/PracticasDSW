function validarFormulario() {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const edad = document.getElementById("edad");
  const tel = document.getElementById("tel");
  const comentarios = document.querySelector("textarea[name='name']");

  const expRegLetras = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!nombre.value) {
      alert("El campo de nombre es obligatorio.");
      nombre.focus();
      return false;
  }
  if (!expRegLetras.test(nombre.value)) {
      alert("El nombre solo puede contener letras y espacios.");
      nombre.focus();
      return false;
  }

  if (!apellido.value) {
      alert("El campo de apellido es obligatorio.");
      apellido.focus();
      return false;
  }
  if (!expRegLetras.test(apellido.value)) {
      alert("El apellido solo puede contener letras y espacios.");
      apellido.focus();
      return false;
  }

  const edadNumerica = parseInt(edad.value);
  if (isNaN(edadNumerica) || edadNumerica < 18 || edadNumerica > 60) {
      alert("La edad debe estar entre 18 y 60 años.");
      edad.focus();
      return false;
  }

  if (tel.value.length !== 10 || isNaN(tel.value)) {
      alert("El número de teléfono debe tener 10 dígitos.");
      tel.focus();
      return false;
  }

  if (!comentarios.value) {
      alert("El campo de comentarios es obligatorio.");
      comentarios.focus();
      return false;
  }

  if (camisa.value === "SI" && !talla.value) {
      alert("Seleccione una talla de camisa.");
      talla.focus();
      return false;
  }

  return true;
}

// Función para mostrar/ocultar el campo de talla según la selección de camisa
function toggleTalla() {
  const camisa = document.getElementById("camisa").value;
  const tallaRow = document.getElementById("tallaRow");

  if (camisa === "SI") {
      tallaRow.style.display = "table-row"; // Mostrar la fila de talla
  } else {
      tallaRow.style.display = "none"; // Ocultar la fila de talla
      document.getElementById("talla").value = "NINGUNA"; // Valor por defecto
  }
}

// Asociar el evento 'submit' para validar el formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
  if (!validarFormulario()) {
      event.preventDefault(); // Evitar el envío si no pasa la validación
  }
});

// Asociar el cambio del campo de camisa para mostrar/ocultar el campo de talla
document.getElementById("camisa").addEventListener("change", toggleTalla);

// Ejecutar el cambio de talla al cargar la página para asegurar el estado correcto
toggleTalla();