// map

let myMap = new Map()// crear un map

console.log(myMap)

//Inicialización

myMap = new Map([
    ["name", "Manuel"],
    ["email", "manueliv2008@gmail.com"],
    ["age", 36]
])
console.log(myMap)

//Métodos

// set:  para agregar o actualizar elementos si es que ya existen
// como en este caso se con set se agrega mas pares al pam, solo se hace con el nombre mas los pares a agregar
myMap.set("alias", "manueliv") //agrega este para de clave y valor
myMap.set("name", "manuel solorzano") //en este caso actualiza, ya que la clave name ya existe

console.log(myMap)

//get: para recuperar el valor para ello utilizar la clave asociada
//como ahora se obtiene un valor asociado a una clave, entonces si necesitamos utilizar un console.log para visualizar el resusltado
console.log(myMap.get("name"))
console.log(myMap.get("surname")) //como esta clave no exixte devolvera undefined, pero para eso es mejor el uso de has

// has: utilizado con un console.log devuelve true o false si es que exixte o no ese valor
//adicionalmente lo podemos utlizar con un if, para bien ejecutar cierto código que queramos  

console.log(myMap.has("surname")) //devolvera false, porque esa clave no existe
console.log(myMap.has("age"))// devolvera true porque esa clave si existe 

//delete: con este elimina un elemento, utilizamos la clave asociada para especificar cual 
myMap.delete("email")

console.log(myMap)

//kesy values y antries
console.log(myMap.keys())// muestra solo las claves del map
console.log(myMap.values())//values mustra solo los valores
console.log(myMap.entries()) // muestra todas las claves y valores, osea todos los pares


//propieda size: nos dice cual es el tamaño del map mediante un numero
console.log(myMap.size)



//Clear Elimna todos los elementos del map

myMap.clear()

console.log(myMap)