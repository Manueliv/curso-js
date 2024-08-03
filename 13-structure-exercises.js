// 1. Crea un array que almacene cinco animales
let myArray = ["Leon", "jirafa", "Perro", "Gato", "pato"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Conejo")
myArray.push("zorro")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
let mySet = new Set(["Harry Potter", "Lord of the rings", "Sleepy Hollow", "Drácula", "Frankestain"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("The miserables")
mySet.add("Drácula")
console.log(mySet)

// 6. Elimina uno concreto a tu elección
console.log(mySet.delete("Frankestain"))
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(myMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
let comprobación 
comprobación = myMap.has(5)
if (comprobación == true){
    console.log(myMap.get(5))
}else {
    console.log("Ese valor no existe")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("claveArray", meses = [myMap.get(6), myMap.get(7), myMap.get(8)])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array2 = [1, "tigre", 5]
console.log(array2)
set2 = new Set(array2)
console.log(set2)

map2 = new Map([
    ["nombreSet", set2]
])
console.log(map2)