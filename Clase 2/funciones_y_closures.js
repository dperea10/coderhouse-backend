// // Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: 
// // “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.

// // function mostrarLista(lista) {
// //     if (lista.length > 0) {
// //         console.log(lista)
// //     } else {
// //         console.log('lista vacía')
// //     }
// //   }
  
// //   mostrarLista([1, 2, 3])
// //   mostrarLista([])


// // Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.

//   // (function (lista) {
//   //   if (lista.length > 0) {
//   //       console.log(lista)
//   //   } else {
//   //       console.log('lista vacía')
//   //   }
//   // })([1,2,3,4,5,6,6,])

// // Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. 
// // Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

// crearMultiplicador()

//   const variable = function crearMultiplicador(num1) {
//     return function (num2) {
//       return num1 * num2
//     }
//   }
  

//   const duplicar = crearMultiplicador(2)
  
//   console.log(duplicar(3))
//   // console.log(duplicar(4))
  
//   const triplicar = crearMultiplicador(3)
  
//   console.log(triplicar(3))
//   console.log(triplicar(4))



// // // FUNCIONES ANÓNIMAS
// let prueba = (function (nombre) {
//   if (nombre.length > 0) {
//       console.log(nombre)
//   } else {
//       console.log('Sin Nombre')
//   }
// })

// prueba('Die≠go')

// const sumarNumero = (a,b) => a + b
// console.log(sumarNumero(2, 4)


// // SCOPE
// // const usuario = 'Pedro'
// // function mostrarNombre() {

// //   console.log(usuario)

// //     if (usuario === 'Pedro') {
// //         console.log(usuario)
// //     } else {
// //         console.log('No es Pedro')
// //     }
// //   }
// //   console.log(usuario)
// //   mostrarNombre()


// // CLOSURE
// function crearGritarNombre() {
//   const signosDeExclamacion = '!!!sfsdfs'

//   return function () {
//       console.log(`${nombre}${signosDeExclamacion}`)
//   }
// }

// const gritarCH = crearGritarNombre('coderhouse')

// gritarCH()

// // CLOSURE OTRO EJEMPLO
// // function sumar(x) {
// //     return function(y) {
// //       console.log(x,y)
// //       return x + y;
// //     };
// //   }
  
// //   let numero1 = sumar(5);
// //   let numero2 = sumar(10);
  
// //   console.log(numero1(41));  // muestra 7
// //   console.log(numero2(3)); // muestra 13



// // Template String

// const nombre = 'Coder House'
function crearGritarNombre(nombre) {
  const signosDeExclamacion = '!!!'
  const parrafoLargo = "`'``'`"
  return function () {
      console.log(parrafoLargo)
      console.log(`${nombre}${signosDeExclamacion}`)
  }
}
// crearGritarNombre()('Diego')
const gritarCH = crearGritarNombre('coderhouse')

gritarCH()





// // "Función IIFE"
// // (function () {
// //     var funcionIIFE = "Función IIFE";

// //     // Esto imprime "Función IIFE"
// //     console.log(funcionIIFE);
// // })();

// // ReferenceError: funcionIIFE is not defined
// // console.log(funcionIIFE);


