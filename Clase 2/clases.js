// En este ejercicio construiremos una herramienta que permita que diferentes personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, 
// al mismo tiempo que nos brinde una contabilidad general del total contado. Para ello:
// 1)    Definir la clase Contador.
// 2)    Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.
// 3)    Cada instancia inicia su cuenta individual en cero.
// 4)    La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado por sus instancias, el cual también inicia en cero.
// 5)    Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
// 6)    Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
// 7)    Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
// 8)    Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general


class Contador {

    static cuentaGlobal = 0
  
    constructor(personaResponsable) {
      this.personaResponsable = personaResponsable
      this.cuentaIndividual = 0
    }
  
    obtenerResponsable() {
      return this.personaResponsable
    }
  
    obtenerCuentaIndividual() {
      return this.cuentaIndividual
    }
  
    obtenerCuentaGlobal() {
      return Contador.cuentaGlobal
    }
  
    contar() {
      this.cuentaIndividual++
      Contador.cuentaGlobal++
    }
  }
  
  const personaResponsable_uno = new Contador('personaResponsable_uno')
  const personaResponsable_dos = new Contador('personaResponsable_dos')
  
  personaResponsable_uno.contar()
  personaResponsable_uno.contar()
  
  personaResponsable_dos.contar()
  personaResponsable_dos.contar()
  personaResponsable_dos.contar()
  
  console.log(`personaResponsable_uno individual: ${personaResponsable_uno.obtenerCuentaIndividual()}`)
  console.log(`personaResponsable_uno global: ${personaResponsable_uno.obtenerCuentaGlobal()}`)
  
  console.log(`personaResponsable_dos individual: ${personaResponsable_dos.obtenerCuentaIndividual()}`)
  console.log(`personaResponsable_dos global: ${personaResponsable_dos.obtenerCuentaGlobal()}`)




  //CLASES

// class Cliente {
//     constructor (nombre, fecha, direccion) {
//             this.nombre = nombre;
//             this.fechaNacimiento = fecha;
//             this.direccion = direccion;
//        }
// }


// class Persona {
  
//   constructor(nombre, edad, fecha) {
//       this.nombre = nombre
//       this.edad = edad
//       this.fecha = fecha
//   }

//   static saludoCorto = 'hola'

//   saludoCompleto() {
//       console.log(`buenaaass, soy ${this.nombre}`)
//   }

//   saludoEstatico() {
//       console.log(Persona.saludoCorto)
//   }
// }


// const persona = new Persona('Diego', 15, 2021)

// persona.saludoCompleto()
// persona.saludoEstatico()

// console.log(persona)