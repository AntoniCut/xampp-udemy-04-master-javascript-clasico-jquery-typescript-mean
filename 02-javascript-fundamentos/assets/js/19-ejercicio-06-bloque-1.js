/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/19-ejercicio-06-bloque-1.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  19-ejercicio-06-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 6  --------------------------------------------------------------

    //  - Hacer un programa que nos diga si un numero introducido por teclado es par o impar.
    //    1. Ventana prompt.
    //    2. Si no es valido que nos pida el numero.

    //  ----------------------------------------------------------------------------------------

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Ejercicio 6  --  Bloque 1  ----- <br><br>`;
    results.innerHTML = '';

    let numero = parseInt(prompt("Introduce un numero:", 0));

    while (isNaN(numero)) numero = parseInt(prompt("Introduce un numero:", 0));

    if (numero % 2 == 0) {
        alert("El numero " + numero + " es par");
        console.log("El numero " + numero + " es par");
        results.innerHTML = `El numero ${numero} es par`;
    }

    else {
        alert("El numero " + numero + " es impar");
        console.log("El numero " + numero + " es impar");
        results.innerHTML = `El numero ${numero} es impar`;
    }

})();
