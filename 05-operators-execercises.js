// 1. Crea una variable para cada operación aritmética
let suma = 2 + 3
let resta = 5 - 2
let multiplicacion = 3 * 3
let divición = 15 / 3
let módulo = 17 % 2
let exponente = 2 ** 2

 console.log(suma)
 console.log(resta)
 console.log(multiplicacion)
 console.log(divición)
 console.log(módulo)
 console.log(exponente)

let incremento = suma++
resta--
 console.log(suma)
 console.log(resta)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma_sing = suma += 2
let resta_saing = resta -= 1
let multi_asing = multiplicacion *= 2
let divi_asing = divición /= 3
let modulo_asing = módulo %= 2
let expo_asing = exponente **= 2

console.log(suma_sing)
console.log(resta_saing)
console.log(multi_asing)
console.log(divi_asing)
console.log(modulo_asing)
console.log(expo_asing)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(5 > 3)
console.log(10 >= 10)
console.log(12 == "12")
console.log(5 != 8)
console.log(30 === 30)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 != 5)
console.log(10 > 12)
console.log(20 === "20")
console.log(8 == 9)
console.log (9 < 4)

// 5. Utiliza el operador lógico and
console.log ( 25 > 3 && 40 != 20)

// 6. Utiliza el operador lógico or
console.log(25 != 25 || 30 == "30")

// 7. Combina ambos operadores lógicos
console.log(24 < 20 && 5 > 8 || 20 =="20" )

// 8. Añade alguna negación
console.log(24 < 20 && 5 > 8 || 20 !="20" )

// 9. Utiliza el operador ternario
const isGood = true
isGood ? console.log("Si es bueno") : console.log("No es bueno")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let edad = 35
let isOK = true
let num = edad ++
let resultado = edad > 35 && isOK != false
resultado == true + console.log( "Aprobado")