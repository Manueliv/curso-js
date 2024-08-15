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
let cadena = "Esta es una cadena de texto, para utilizar para contar el número de vocales"
let vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú" ]
let numeroVocales = 0

function vocalNum() {
    for (let i of cadena.toLocaleLowerCase()) {
        if (vocales.includes(i)){
          numeroVocales = numeroVocales + 1
        }
    }
    return numeroVocales
}

let num = vocalNum()
console.log(`El numero de vocales del estring es: ${num} , obtenido usando una función` )

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let peliculas = ["star wars", "samson y dalyla", "sleepey hollow", "the lord of the rings"]

function convertirAMayus (peliculas) {
    for (i = 0; i < peliculas.length; i++) {
        peliculas[i] = peliculas[i].toUpperCase()
    }
    return peliculas
}
peliculas = convertirAMayus(peliculas)
console.log(peliculas)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
    
  }
   console.log(esPrimo(4))
  

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1 = [23, 14 , 51, 47, 55, 10, 11]
let array2 = [ 40, 57, 47, 11, 3, 55, 8, 13]
let nuevoArray = []
function comunes() {
    for (i = 0; i < array1.length; i++)
        if (array1[0] == array2[i]) {
            nuevoArray.push(array2[i])
        } else if (array1[1] == array2[i]) {
            nuevoArray.push(array2[i])
            } else if (array1[2] == array2[i] ) {
                nuevoArray.push(array2[i])
        } else if (array1[3] == array2[i]){
            nuevoArray.push(array2[i])
        }else if (array1[4] == array2[i]){
            nuevoArray.push(array2[i])
        } else if (array1[5] == array2[i]){
            nuevoArray.push(array2[i])
        } else if (array1[6] == array2[i]){
            nuevoArray.push(array2[i])
        }
        return nuevoArray

       
}
console.log(comunes())
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado