// Excepciones personalizadas
class ErrorDeValidacion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorDeValidacion";
  }
}

class ErrorDeEdad extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorDeEdad";
  }
}

document.getElementById("miFormulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir envío real del formulario

  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);

  try {
    // Validar nombre
    if (nombre === "") {
      throw new ErrorDeValidacion("El nombre no puede estar vacío.");
    }

    // Validar edad
    if (isNaN(edad)) {
      throw new ErrorDeEdad("La edad debe ser un número.");
    } else if (edad < 0 || edad > 120) {
      throw new ErrorDeEdad("La edad debe estar entre 0 y 120.");
    }

    // Si todo está bien
    alert("Formulario enviado correctamente.");
  } catch (error) {
    if (error instanceof ErrorDeValidacion) {
      alert("⚠️ Validación: " + error.message);
    } else if (error instanceof ErrorDeEdad) {
      alert("🎂 Edad inválida: " + error.message);
    } else {
      alert("❌ Error desconocido: " + error.message);
    }
  }
});
