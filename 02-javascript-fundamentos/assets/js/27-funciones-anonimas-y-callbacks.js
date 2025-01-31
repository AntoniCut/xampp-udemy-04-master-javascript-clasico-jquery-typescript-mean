/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/27-funciones-anonimas-y-callbacks.js  -------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  27-funciones-anonimas-y-callbacks.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Funciones Anónimas y Callbacks  ******
    //  Es una funcion que no tiene nombre.

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Funciones Anónimas y Callbacks  ----- <br><br>`;
    results.innerHTML = '';

    
    let pelicula = function (nombre) {
        return "La pelicula es: " + nombre;
    }

    console.log(pelicula("El señor de los anillos"));
    
    
    //  Una funcion "Callbacks" es una funcion anonima que se le pasa
    //  como parametro otra funcion.

    function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {

        let sumar = numero1 + numero2;

        sumaYmuestra(sumar);
        sumaPorDos(sumar);

        return sumar;

    }

    sumame(
        5, 
        7, 
        function (dato) {
            console.log("La suma es:", dato);
            results.innerHTML += `La suma es: ${dato} <br>`;
        },
        function (dato) {
            console.log("La suma por dos es: ", (dato * 2));
            results.innerHTML += `La suma por dos es: ${dato * 2} <br>`;
        }
    );

})();
