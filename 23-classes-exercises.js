// 1. Crea una clase que reciba dos propiedades

class Automovil {
    static color =  "Celeste"
    constructor(marca, modelo,) {
        this.marca = marca
        this.modelo = modelo
        }

        }


// 2. Añade un método a la clase que utilice las propiedades

class Automovil2 {
    constructor(marca, modelo,) {
        this.marca = marca
        this.modelo = modelo
        }

        caminar () {
            console.log(`El vehiculo ${this.marca} ${this.modelo}  camina`)
        }
}


// 3. Muestra los valores de las propiedades e invoca a la función

let carro = new Automovil2("Kia", "Rio")
carro.caminar()

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

console.log(Automovil.color)

// 6. Crea una clase que haga uso de herencia
  
  class Carro extends Automovil {
  
    motor() {
      console.log("1.6 cc!")
    }
  
    run() {
      console.log("El carro camina")
    }
  }

  let myKia = new Carro("Kia", "Rio")
  myKia.motor()
  myKia.run()
  

// 7. Crea una clase que haga uso de getters y setters

class  GetUser {
  #name
  #alias
  #id
constructor(name, alias, id){
  this.#name = name
  this.#alias = alias
  this.#id = id
}
get alias() {
  return this.#alias
}

get id() {
  return this.#id
}

set id(id){
  this.#id = id
  }
}

user = new GetUser("Manuel", "Manueliv", "Manu23")

console.log(user)
console.log(user.alias)
console.log(user.id)

user.id = "Manueliv25"
console.log(user.id)

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 