// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++){
    console.log(i)

}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let total = 0
for (let i = 1;  i <= 100; i++) {
    total+= i
}

console.log(`la suma de los números del 1 al 100 es : ${total}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let i = 2
while (i <= 50) {
    console.log( i )
    i += 2
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Reina", "Gemma", "Liv", "Nicolle", "Arwen", "Kate" ]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "Esta es una cadena de texto, para utilizar para contar el número de vocales"
let vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú" ]
let numeroVocales = 0

for (let i of cadena.toLocaleLowerCase()) {
    if (vocales.includes(i)){
      numeroVocales = numeroVocales + 1
    }
}
console.log(`El numero de vocales:  ${numeroVocales}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arraynumeros = [2, 5, 4, 3,2]
let multiplicar = 1

for (let t = 0;  t <arraynumeros.length; t++) {
    multiplicar = multiplicar * arraynumeros[t]
    }
    console.log(multiplicar)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let tabla = 5

for (i = 1; i< 11; i++) {
    console.log( "5 x " + i + " = " + tabla * i )
}

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10