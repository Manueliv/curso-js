// Destructuring and spreading = Destructuración y propagación 

let myArray = [1, 2, 3, 4] //Este es un array 


let person = {          //Este es un objeto
    name: "Manuel",
    age: 36,
    alias: "Manueliv"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

//Destructuración 

//Sintaxis con arrarys

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//Sintaxis con valores predeterminados 

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

//Ignorar elementos array 

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

//Sintaxis con objetos

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

//Sintaxis obejetos con valores predeterminados 

let { name2, age2, alias2, email = "email@email" } = person
console.log(name2) //No existe
console.log(age2) //No existe
console.log(alias2) //No existe
console.log(email)

//Sintaxis objetos con nuevos nombres de variables 

let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objecs anidados

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

let {name: name4, job: {name: jobName} } = person3
console.log(name4)
console.log(jobName)

//Propagación = Spreading (...) notación tres puntos

//Sintaxis arrays

let myArray2 = [...myArray, 5, 6] // es como toma un array y agregar mas valores
console.log(myArray2)

//Copia  de arrays

let myArray3 = [...myArray]
console.log(myArray3)

//Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

//Sintaxis objecs

let person4 = {...person, email: "manueliv2008@gmail.com"}
console.log(person4)

//Copia de objetos

let person5 = { ...person}
console.log(person5)