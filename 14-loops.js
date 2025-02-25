// Loops o bucles 

//for 

for (let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)//usamos la interpolacion para agregar mas datos a mostrar en en console.log con el sigo $
}

const numbers = [1, "segundo", 3, 4, 5, 6, 7, 8]
for (let i= 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)//con este código recorremos cada elemento de la constante numbers que en ralidad es un arrar
}

// while

let i = 0
while (i < 5){ //con while aqui indicamos que se debe repetir el siguiente código mietras i sea menor a 5 
    console.log(`Hola ${i}`)//en el console.log ponemos un hola mas el valor de i en cada pasada que comienza valiendo 0
        i++// con esto vamos sumando 1 a i 
    }

    // bucle infinito (mucho cuidado de no hacerlo), verificar en el bucle seal falso en algun momento 
    //while(true){
    // //}

    //do while

    i = 6 
    do {
        console.log(`hola  ${i}`)// se repite hasta que el valor de i sea el de la variable indicada anteriormente
        i++
    } while (i < 5) //con esto se salta cuando vale este numero indicado en el while

    // for of 

    myArray = [1, 2, 3, 4]

    mySet = new Set (["Manuel", "Solorzano", "Manudev", 36, "manueliv2008@gmail.com"])
    console.log(mySet)

    myMap = new Map([
        ["name", "Manuel"],
        ["email", "manueliv2008@gmail.com"],
        ["age", 36]
    ])

    myString = "¡Hola, JavaScript "

    for (let value of myArray){
        console.log(value)
    }

    for (let value of mySet){
        console.log(value)
    }

    for (let value of myMap){
        console.log(value)
    }

    for (let value of myString){
        console.log(value)
    }

    //break y continue

    for (let i = 0; i < 10; i++){
        if (i ==5){
            continue // con esto indicamos que este valor o lo teme en cuenta y siga con los demas
        } else if(i == 8){
            break // con esta palabra indicamos que cuando llegue al valor indicado se detenga y no lo imprima 
        }
        console.log(`Hola ${i}`)
    }