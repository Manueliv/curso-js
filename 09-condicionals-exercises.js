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
let mes = "julio"

if (mes === "marzo" || mes ==="abril" || mes === "mayo"  ){
    console.log("Es primavera")
}else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    console.log("Es verano")
}else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    console.log("Es otoño")
}else if (mes === "diciembre" || mes === "enero" || mes ==="febreo") {
    console.log("Es invierno")
} else ("Mes no válido")

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === "enero"){
console.log("tiene 32 días ")
}else if (mes === "febrero"){
    console.log("Tiene 28 días")
}else if (mes === "marzo") {
    console.log("tiene 31 días")
}else if (mes === "abril") {
    console.log("Tiene 30 días")
}else if (mes === "mayo") {
    console.log("tiene 31 días")
}else if  (mes === "junio") {
    console.log("tiene 31 dias")
}else if (mes === "julio") {
    console.log("Tiene 31 días")
}else if (mes === "agosto") {
    console.log("tiene 32 días")
}else if (mes === "septiembre") {
    console.log("tiene 31 días")
}else if (mes === "octubre") {
    console.log("tiene 31 días")
}else if (mes === "noviembre") {
    console.log("Tiene 30 días")
}else (console.log("tiene 31 días"))
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7