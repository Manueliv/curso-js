// 1. Crea un objeto con 3 propiedades
let actriz = {
    name: "Liv",
    age: 47,
    personaje: "Arwen"
}
// 2. Accede y muestra su valor
console.log(actriz)

// 3. Agrega una nueva propiedad
actriz.lastname = "Tyler"
console.log(actriz)

// 4. Elimina una de las 3 primeras propiedades
delete actriz.age
console.log(actriz)

// 5. Agrega una función e invócala
let actriz2 = {
    name: "Liv",
    personaje: "Arwen",
    walk: function () {
        console.log("La actriz camina")
    }
}
actriz2.walk()

// 6. Itera las propiedades del objeto
for (let key in actriz2) {
    console.log(key + ": " + actriz2[key])
}
// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales