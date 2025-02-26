// funciones 

// simple

function myFunc(){
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++){
    myFunc()
}

// con parámetros 

function myFuncWithParams(name){
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Manuel")
myFuncWithParams("ManuDev")

//Funciones anónimas 

const myFunc2 = function (name){
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Manuel Solo")

//Arrow functios 

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Manuel Solo")
myFunc4("Manu Sol")

//Parámetros 

function sum(a, b){
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0){
    console.log(a * b)
}

// por defecto 

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 0)

//Retorno de valores

function mult(a, b){
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern(){
    console.log("Función externa")
    function intern(){
        console.log("Función interna")
    }
    intern()
}

extern()
//intern() Error: fuera de scope

// Funciones de orden superio

function applyFunc(func, param){
    func(param)
}
applyFunc(myFunc4, "Función de orden superior")

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set (["Manuel", "Solorzano", "Manudev", 36, "manueliv2008@gmail.com"])

myMap = new Map([
    ["name", "Manuel"],
    ["email", "manueliv2008@gmail.com"],
    ["age", 36]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))