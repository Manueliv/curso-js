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