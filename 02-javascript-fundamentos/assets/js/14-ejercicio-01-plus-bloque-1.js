/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/14-ejercicio-01-plus-bloque-1.js  ----------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  14-ejercicio-01-plus-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 1 Plus  ---------------------------------------

    //  Porgrama que pida 2 numeros y que nos diga cual es
    //  el mayor, el menor, y si son iguales.
    //  Plus: Si los numeros no son un numero o son menores o iguales a 0,
    //  nos los vuelva a pedir.

    //  --------------------------------------------------------------------

    let numero1 = parseInt(prompt("Introduce el primer numero", 0));
    let numero2 = parseInt(prompt("Introduce el segundo numero", 0));

    while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
        numero1 = parseInt(prompt("Introduce el primer numero", 0));
        numero2 = parseInt(prompt("Introduce el segundo numero", 0));
    }

    console.log(numero1, numero2);

    if (numero1 > numero2) {
        console.log("Primer numero " + numero1 + " es mayor que el segundo numero " + numero2);
        alert("Primer numero " + numero1 + " es mayor que el segundo numero " + numero2);
    }

    else if (numero1 < numero2) {
        console.log("Primer numero " + numero1 + " es menor que el segundo numero " + numero2);
        alert("Primer numero " + numero1 + " es menor que el segundo numero " + numero2);
    }

    else {
        console.log("Primer numero " + numero1 + " es igual que el segundo numero " + numero2);
        alert("Primer numero " + numero1 + " es igual que el segundo numero " + numero2);
    }


})();
