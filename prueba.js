let array1 = [23, 14 , 51, 47, 55, 10, 11]
let array2 = [ 40, 57, 47, 11, 3, 55, 8,]

function comunes(array1, array2) {
    let nuevoArray = []
    for (i = 0; i < array1.length; i++){
        if (array2.indexOf(array1[i]) !==-1 && nuevoArray.indexOf(array1[1])) {
            nuevoArray.push(array1[i])     
        }
    }
    return nuevoArray
}
let resultado = comunes(array1, array2)
console.log(resultado)


// prueba para modificar este ejercicio, haciendo que indique el orden de los nombres
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Reina", "Gemma", "Liv", "Nicolle", "Arwen", "Kate" ]
let orden = ["primer ", "segundo ", "tercer ", "cuarto ", "quinto ", "Sexto "]

for (let i = 0; i < nombres.length; i++) {
    console.log(orden[i] +"nombre: " + nombres[i])
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números menores a 10
let arrayNum = [14, 25, 3, 8, 5, 7, 19, 10, 15, 27 ]
let newArray = []

for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] < 10 || arrayNum[i] > 25 ){ //menores a 10 y mayores a 25 con el or (||)
        newArray.push(arrayNum[i])
    }
}
console.log(newArray)