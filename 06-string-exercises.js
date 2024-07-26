// 1. Concatena dos cadenas de texto
let primerCadena = ("practiquemos Javascript ")
let segundaCadena = ("con el buen Brais Moure")
console.log( primerCadena + segundaCadena)
// 2. Muestra la longitud de una cadena de texto
let cadenaTexto = ("Hola esta es una cadena de texto")
let longitudCadena = (cadenaTexto.length) 
console.log(longitudCadena)

// 3. Muestra el primer y último carácter de un string
console.log(cadenaTexto[0] )
console.log(cadenaTexto[31])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadenaTexto.toUpperCase())
console.log(cadenaTexto.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let textoVa = `Hola esta
es una cadena 
de texto en 
varias 
líneas`
console.log(textoVa)

// 6. Interpola el valor de una variable en un string
let MyVariable = 24
console.log(`El cumpleaños de Reina es el  ${MyVariable} de agosto` )

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let stringR = "Este es un texto al que le vamos a reemplazar los espacios por guines"
console.log(stringR.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let bocina = "Tengo una bocina en casa que es de color azul"
console.log(bocina.includes("azul"))

// 9. Comprueba si dos strings son iguales
let string1 = "Esta es una cadena de texto para comprobar si es igual a otra"
let string2 = "Esta es una cadena de texto para comprobar si es igual a otro"
console.log (string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log("comprobación de longitud de dos string")
console.log (string1.length == string2.length)