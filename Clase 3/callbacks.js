
// let reloj = () => {
//     let fecha = new Date();
//     console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
// }

// setInterval(reloj, 1000);//1 seg


// miFuncion2();
// miFuncion1();

// function miFuncion1(){
//     console.log('función 1');
// }

// function miFuncion2(){
//     console.log('función 2');
// }



// Función de tipo callback
// let imp = function imprimir(mensaje){
//     console.log(mensaje);
// }

// function sumar(op1, op2, funcionCallback){
//     let res = op1 + op2;
//     funcionCallback(`Resultado: ${res}`);
// }

// sumar(5,3, imp);

// Llamadas asíncronas con uso setTimeout
// function miFuncionCallback(){
//     console.log('saludo asíncrono después de 3 seg');
// }

// setTimeout(miFuncionCallback, 3000);//después de 3 seg

// setTimeout( function(){ console.log('saludo asíncrono 2')}, 4000);

// setTimeout( () => console.log('saludo asíncrono 3'), 1000);



// Callback anidados


const lugaresVisitados = []

function irDePaseo() {

    setTimeout(function () {
        lugaresVisitados.push('Salta');
        console.log(lugaresVisitados.toString());
        setTimeout(function () {
            lugaresVisitados.push('Jujuy');
            console.log(lugaresVisitados.toString());
            setTimeout(function () {
                lugaresVisitados.push('Cordoba');
                console.log(lugaresVisitados.toString());
                setTimeout(function () {
                    lugaresVisitados.push('Tierra del fuego');
                    console.log(lugaresVisitados.toString());
                    setTimeout(function () {
                        lugaresVisitados.push('Tierra del fuego');
                        console.log(lugaresVisitados.toString());
                    }, 6000)
                }, 5000);
            }, 4000);
        }, 3000);
    }, 1000);
}

irDePaseo();
console.log(lugaresVisitados.toString());