// 1. Crea un función que utilice error correctamente

function funcError() {
    console.error("Este es un mensaje utilizando console.error")
}
funcError()

// 2. Crea una función que utilice warn correctamente

function funcWarn() {
    console.warn("Mensaje tulizando console.warn")
}
funcWarn()

// 3. Crea una función que utilice info correctamente

function funcInfo() {
    console.info("Mensaje utilizando console.info en una función")
}
funcInfo()

// 4. Utiliza table

let pcs = [
    {name: "Pc escritorio", procesador: "g730"},
    {name: "Laptop hp", procesador: "i3500"},
]
 
console.table(pcs)

// 5. Utiliza group

console.group("Usuario:")
console.log("Nombre: Manuel")
console.log("Edad: 36")
console.groupEnd()

// 6. Utiliza time

console.time("Tiempo de ejecución 1")

 for (let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución 1")

// 7. Valida con assert si un número es positivo

let num = -17
console.assert(num >= 1, "El número ingresado debe ser positivo.")

// 8. Utiliza count

console.count("tarea")
console.count("tarea")
console.count("tarea")
console.countReset("tarea")
console.count("tarea")


// 9. Utiliza trace

function funci1() {
    funci2()
}

function funci2() {
console.trace("seguimiento de la función")
}

funci1()

// 10. Utiliza clear

// console.clear()