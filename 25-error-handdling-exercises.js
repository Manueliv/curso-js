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


// 5. Lanza una excepción personalizada

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10