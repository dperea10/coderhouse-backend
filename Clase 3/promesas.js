const XMLHttpRequest = require('xhr2');
// Promesas
// let miPromesa = new Promise((resolver, rechazar) => {
//     let expresion = true;
//     if(expresion)
//         resolver('Resolvió correcto');
//     else
//         rechazar('Se produjo un error');    
// });

// //miPromesa.then( valor => console.log(valor), error => console.log(error));
// miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));

// Promesas Set timeOut
// let miPromesa = new Promise((resolver, rechazar) => {
//     let expresion = true;
//     if(expresion)
//         resolver('Resolvió correcto');
//     else
//         rechazar('Se produjo un error');    
// });

// //miPromesa.then( valor => console.log(valor), error => console.log(error));
// //miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));

// let promesa = new Promise((resolver) => {
//     console.log('inicio promesa');
//     setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
//     console.log('fin promesa');
// });

// promesa.then(valor => console.log(valor));


// Promesas Async
// let miPromesa = new Promise((resolver, rechazar) => {
//     let expresion = true;
//     if(expresion)
//         resolver('Resolvió correcto');
//     else
//         rechazar('Se produjo un error');    
// });

// miPromesa.then(valor => console.log(valor), error => console.log(error));

// miPromesa
//   .then(  valor => console.log(valor))
//   .catch( error =>console.log(error));

// let promesa = new Promise((resolver) => {
//     //console.log('inicio promesa');
//     setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
//     //console.log('fin promesa');
// });

// //promesa.then(valor => console.log(valor));

// //async indica que una función regresa una promesa
// async function miFuncionConPromesa(){
//     return 'saludos con promesa y async';
// }

// miFuncionConPromesa().then(valor => console.log(valor));


// EJEMPLO VIVO
// Promise.resolve(20)
// .then( x => x + 1 )
// .then( x => x * 2 )
// .then( x => {
//     if(x==22) throw 'Error'
//     else return 80
// })
// .then( x => 30 )
// .then( x => x / 2 )
// .then( console.log('N') )
// .catch( console.log('Error') )

// Ejemplo PROMESAS consultando una API

const getPosts = () => {
    return new Promise((resolve, reject)=> { //Se puede reducir usando una arrow function
        let req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

        req.onload = () => {
          if (req.status == 200) {
            resolve(JSON.parse(req.response));
          }
          else {
            reject('Error consultando la data');
          }
        };

        req.send();
    })
}

let promises =[ 
    getPosts()
  ];

Promise.all(promises).then(results => {
    console.log(results)
})
.catch(error => console.log(error))


