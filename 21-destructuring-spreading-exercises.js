
// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, "palabra", 3, 4]

let [element1, element2] = myArray
console.log(element1, element2)


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [myValue1 = 0, myValue2 = 0, myValue3 = 0, myValue4 = 0, myValue5 = 5] = myArray //El valor predeterminado en este caso  5
console.log(myValue1)                                                                //es el número que se pone despúes del =
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {          //Este es un objeto
    name: "Manuel",
    age: 36,
    alias: "Manueliv"
}

let { name, age, alias } = person
console.log(name, age + " Estas son las dos propiedades extraidas del objeto")

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { alias: nuevoNombre, name: nuevoNombre2} = person
console.log(nuevoNombre + " Nuevo nombre de varible")
console.log(nuevoNombre2 + " Nuevo nombre de varible 2")


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación