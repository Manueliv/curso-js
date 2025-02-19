// set 

//Declaración

let mySet = new Set ()
console.log(mySet)

// Inicialización

mySet = new Set (["Manuel", "Solorzano", "Manudev", 36, "manueliv2008@gmail.com"])
console.log(mySet)

//Métodos comunes 

// add y delete 

mySet.add("https://manu.dev") //Para agregar elmento al set
console.log(mySet)

console.log(mySet.delete("https://manu.dev")) // para eliminar de un set, ademas hay que tomar en cuenta que 
//que si encuentra el elemento lo borra y devuelve un true, o false en caso que no lo encuentre


console.log(mySet.delete(4))// en este caso devolveria un false, poque ese elemento no se encuentra en el set 
// podriamos utilizarlo en un if para realizar ciertas acciones, depende del resultado  

// has
// con el has podemos encontrar un elemento, si se encuentra devuelve un true si no un false 
console.log(mySet.has("Manuel"))
console.log(mySet.has("Brais"))

//size 
console.log(mySet.size) // con esto obtenemos el numero de elementos del set 

// covertir un set en un array 

let myArray = Array.from(mySet)
console.log(myArray)

// convertir un arrar a un set
mySet = new Set(myArray)
console.log(mySet)

// un set no adminte udplicados 
// si agregamos un mismo valor solo se agragara uno y ninguno si ya existe  
mySet.add("manueliv2008@gmail.com")
mySet.add("manueliv2008@gmail.com")
mySet.add("manueliv2008@gmail.com")
// pero cuando cambien aunque sea en un caracater ya es uo diferente y si se guardara
mySet.add("manueliv2008@gmail.com")
mySet.add("manueliv2008@gmail.com")
mySet.add("Manueliv2008@gmail.com")//Este si lo guardara poque tinen la m mayuscula por lo tanto es diferente 