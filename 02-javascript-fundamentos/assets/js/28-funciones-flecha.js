/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/28-funciones-flecha.js  ---------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  28-funciones-flecha.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Funciones Flecha  ******
    //  Se le quita la palabra function y se pone una flecha.

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Funciones Anónimas y Callbacks  ----- <br><br>`;
    results.innerHTML = '';

    
    let pelicula = (nombre) => {
        return "La pelicula es: " + nombre;
    }

    console.log(pelicula("El señor de los anillos"));
    
    
    //  Una funcion "Callbacks" es una funcion anonima que se le pasa
    //  como parametro otra funcion.

    let sumame = (numero1, numero2, sumaYmuestra, sumaPorDos) => {

        let sumar = numero1 + numero2;

        sumaYmuestra(sumar);
        sumaPorDos(sumar);

        return sumar;
    }


    sumame(
        5, 
        7, 
        dato => {
            console.log("La suma es:", dato);
            results.innerHTML += `La suma es: ${dato} <br>`;
        },

        dato => {
            console.log("La suma por dos es: ", (dato * 2));
            results.innerHTML += `La suma por dos es: ${dato * 2} <br>`;
        }
    );

})();
