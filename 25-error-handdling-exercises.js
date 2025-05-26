// 1. Captura una excepción utilizando try-catch

//Produce una excepción
let myObject 

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
    
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error2:", error.message)
}finally {
    console.log("Este código se ejecuta siempre") //El código del fina se ejecuta siempre 
}

// de chat gpt
function dividir(a, b) {
  try {
    // Intentamos hacer la división
    let resultado = a / b;
    if (b === 0) {
      throw new Error("No se puede dividir entre cero.");
    }
    console.log("Resultado bien:", resultado);
  } catch (error) {
    // Capturamos cualquier error que ocurra
    console.error("Ocurrió un error:", error.message);
  } finally {
    // Este bloque siempre se ejecuta, ocurra o no un error
    console.log("Operación de división finalizada.");
  }
}

// Ejemplos
dividir(10, 2);  // Resultado: 5
dividir(10, 0); 

// 3. Lanza una excepción genérica


function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma numeros enteres")
    }
    if (a == 0 || b == 0){
        throw new SumZeroIntegerError("Se esta intentado sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    //console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    //console.log(sumIntegers(5, "10"))
    console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}



// 4. Crea una excepción personalizada


class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a 
        this.b = b
    }
    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

//de chatgot
// Definimos una clase de error personalizada
class MiErrorPersonalizado extends Error {
  constructor(mensaje) {
    super(mensaje); // Llama al constructor de Error
    this.name = "MiErrorPersonalizado"; // Nombre personalizado para la excepción
  }
}

// 5. Lanza una excepción personalizada 

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}

//de chatgpt
// Función que lanza un error personalizado
function hacerAlgoPeligroso(valor) {
  if (valor < 0) {
    throw new MiErrorPersonalizado("El valor no puede ser negativo.");
  }
  console.log("Valor aceptado:", valor);
}

// Uso del try-catch con excepción personalizada
try {
  hacerAlgoPeligroso(-5);
} catch (error) {
  if (error instanceof MiErrorPersonalizado) {
    console.error("Error personalizado capturado:", error.message);
  } else {
    console.error("Otro tipo de error:", error);
  }
}

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

//catgpt
// Excepciones personalizadas
class ErrorDeRed extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorDeRed";
  }
}

class ErrorDeValidacion extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorDeValidacion";
  }
}

// Función que puede lanzar distintos tipos de errores
function ejecutarOperacion(tipo) {
  if (tipo === "red") {
    throw new ErrorDeRed("Fallo de conexión con el servidor.");
  } else if (tipo === "validacion") {
    throw new ErrorDeValidacion("Datos inválidos proporcionados.");
  } else if (tipo === "otro") {
    throw new Error("Un error genérico ocurrió.");
  } else {
    console.log("Operación ejecutada correctamente.");
  }
}

// Captura de múltiples tipos de error
try {
  ejecutarOperacion("validacion");
} catch (error) {
  if (error instanceof ErrorDeRed) {
    console.error("🛜 Error de red:", error.message);
  } else if (error instanceof ErrorDeValidacion) {
    console.error("📝 Error de validación:", error.message);
  } else {
    console.error("❌ Error desconocido:", error.message);
  }
}

// Salida esperada (si se lanza el de validación): 📝 Error de validación: Datos inválidos proporcionados.


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10