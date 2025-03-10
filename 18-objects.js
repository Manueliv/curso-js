// obejetos 
//sintaxis

let person = {
    name: "Manuel",
    age: 36,
    alias: "ManuelDev"
}

//acceso a propiedades 

// Notación punto
console.log(person.name)

//Notación de corchetes 
console.log(person["name"])

//modificación de propiedades 

person.name = "Manuel Solorzano"
console.log(person.name)

console.log(typeof person.age)
person.age = "36"
console.log(person.age)
console.log(typeof person.age)

// Eliminazión de propiedades 
delete person.age

console.log(person)

//nueva propiedad 

person.email = "manueliv2008@gmail.com"
person["age"] = 36

console.log(person)

//Métodos y funciones 

let person2 = {
    name: "Manuel",
    age: 36,
    alias: "ManuelDev",
    walk: function () {
        console.log("La persona camina")
    }
}
person2.walk()

//Anidación de objetos

let person3 = {
    name: "Manuel",
    age: 36,
    alias: "ManuelDev",
    walk: function () {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 5,
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
}
console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos 

let person4 = {
    name: "Manuel Solorzano",
    alias: "ManuelDev",
    email: "manueliv2008@gmail.com",
    age:36
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

//Iteración

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

//Funciones como objetos

function Person(name, age) { //Deberia ser una clase 
this.name = name
this.age = age
}

let person5 = new Person("Manuel, 36")
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)
