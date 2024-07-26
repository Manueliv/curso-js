//1. Escribe un comentario de una línea 
// Hola este es un comentario de un sola línea :)

//2. Escribe un comentario de varias líneas
/**Hola este es un cometario de muchas lineas
 * y es util cuando necesitamos comentar una parte del código para hacer
 * pruebas o escribir la lógica de una gran porción de código
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let variable_string = "Este es una variable que contine una cadena de texto"
let variable_numero = 5
let undefineValor 
let myBoolean = true
let nullValor = null
let symbol = Symbol("mysymbol")
let myBigin = BigInt("12242543646547")
let myBigin2 = 1224254364654767888n

// 4. Imprime por consola el valor de todas las variables
console.log(variable_string)
console.log(variable_numero)
console.log(undefineValor)
console.log(myBoolean)
console.log(nullValor)
console.log(symbol)
console.log(myBigin)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof variable_string)
console.log(typeof variable_numero)
console.log(typeof undefineValor)
console.log(typeof myBoolean)
console.log(typeof nullValor)
console.log(typeof symbol)
console.log(typeof myBigin)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
variable_string = "Texto modificado de la primera variable que es una cadena de texto o string"
variable_numero = 10
myBoolean = false
symbol = ("mySymbol2")
myBigin = (12242543646)

console.log(variable_string)
console.log(variable_numero)
console.log(myBoolean)
console.log(symbol)
console.log(myBigin)


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
variable_string = Number(7)
variable_numero = String("ahora esta variable es un string y antes era number")
undefineValor = Boolean(true)
myBoolean = undefined
symbol = String("Symbol convertido a string")
myBigin = Number(1424)

console.log(variable_numero)
console.log(variable_string)
console.log(undefineValor)
console.log(myBoolean)
console.log(symbol)
console.log(myBigin)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const c_variable_string = "Este es una variable que contine una cadena de texto creada con const"
const c_variable_numero = 5
//const c_undefineValor 
const c_myBoolean = true
const c_nullValor = null
const c_symbol = Symbol("mysymbol")
const c_myBigin2 = 1224254364654767888n

console.log(c_variable_string)
console.log(c_variable_numero)
//console.log(c_undefineValor)
console.log(c_myBoolean)
console.log(c_symbol)
console.log(c_myBigin2)

// 9. A continuación, modifica los valores de las constantes 
//c_variable_string = "Intento de modificar la variaable creada con const"
//c_variable_numero = 8
//c_myBoolean = false
//c_symbol = ("otro symbol")
//c_myBigin2 = 1223344n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser

console.log(5 < 10 || 15 < 20)
