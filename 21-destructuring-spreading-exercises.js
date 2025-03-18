
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

let person3  = {
    name: "Manuel",
    age: 36,
    alias: "Manueliv",
    walk: function () {
        console.log("La persona camina")
    }, 
    job: {
        name: "Programador",
        exp: 10, 
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
}

let {job: {exp: expe}, job: {name: jobName} } = person3
console.log(expe + " Esta es una propiedad obtenida de un objeto anidado")
console.log(jobName  + " Esta es una propiedad obtenida de un objeto anidado")
person3.job.work()

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray2 = [5, 6, "otro valor ", 7]

let myArrayCombinado = [...myArray, ...myArray2]
console.log(myArrayCombinado)


// 7. Usa propagación para crear una copia de un array

let myArrayCopia = [...myArrayCombinado]
console.log(myArrayCopia)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objec2 = {   //Creación del segundo objeto para combinar con el primero 
    lastName: "Solorzano",
    height: 1.72,
    salary: 1000
}

let objecsCombine =  {...person, ...objec2} //Usando propagación para combinar objeto(person) con objrto(object2)
console.log(objecsCombine)

// 9. Usa propagación para crear una copia de un objeto
let objecsCopi = {...objecsCombine}
console.log(objecsCombine)


// 10. Combina desestructuración y propagación

let objec4 = {} = objecsCombine
let nuevoValoresObjeto = {...objecsCombine, newValue: "Nuevo valor"}
console.log(nuevoValoresObjeto)
