// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myVariable = 3

if (myVariable == 3){
    console.log("Manuel")
}else {
    console.log("Otro nombre")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Olivia23"
let pass = "Wildd3"

if (user == "Olivia23" && pass == "Wildd3") {
    console.log("Usuario y contraceña válido")
} else if (user != "Olivia23") {
    console.log ("Usuario  incorrecto")
} else  {
    console.log("contraceña incorrecta")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -3

if (numero > 0 ) {
    console.log("Es un número positivo")
} else if (numero != 0) {
    console.log("Es un número negativo")
} else {
    console.log("Es Cero")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 19

if (edad < 18 && edad >= 1 ) {
    console.log("Aun no puede votar, le faltan ", + 18 - edad + " años")
}else if (edad >= 18) {
    console.log("Usted puede votar")
}else {
    console.log("Debe ingresar una edad válida")
} 

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let a
let b  
let c = edad >= 18 
c ? console.log(a = "Es adulto") : console.log(b = "Menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7