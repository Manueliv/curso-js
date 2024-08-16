let array1 = [23, 14 , 51, 47, 55, 10, 11]
let array2 = [ 40, 57, 47, 11, 3, 55, 8,]
let nuevoArray = []


function comunes() {
    for (i = 0; i < array1.length; i++)
        
        if (array1[3] == array2[i]) {
            nuevoArray.push(array2[i])     
        }return nuevoArray

       
}
console.log(comunes())