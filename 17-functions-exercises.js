// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b ) {
    console.log(a + b)
}
suma(3, 4)
 
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const myArray = [3, 5, 7, 1, 25, 40, 8, 3, 50]

function numMayor() {
    let result = 0
    for (let i = 0; i < myArray.length; i++) {
        let numero = myArray[i]
        if (i == 0) {
            result = numero
        } else {
            if(numero > result) {
                result = numero
            }
        }
    }
    return result
   }
console.log(numMayor())
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado