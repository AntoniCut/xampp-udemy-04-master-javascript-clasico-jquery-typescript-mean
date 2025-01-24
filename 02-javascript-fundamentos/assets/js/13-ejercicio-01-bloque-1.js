/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/13-ejercicio-01-bloque-1.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  13-ejercicio-01-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 1  --------------------------

    //  Porgrama que pida 2 numeros y que nos diga cual es
    //  el mayor, el menor, y si son iguales.

    //  ---------------------------------------------------

    const label = document.querySelector('.main__label');
    label.innerHTML = `-----  Ejercicio 1  --  Bloque 1  ----- <br><br>`;

    let numero1 = parseInt(prompt("Introduce el primer numero", 0));
    let numero2 = parseInt(prompt("Introduce el segundo numero", 0));

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
