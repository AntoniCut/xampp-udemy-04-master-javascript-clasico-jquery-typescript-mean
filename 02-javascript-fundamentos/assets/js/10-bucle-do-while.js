/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/10-do-bucle-while.js  -----------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  10-bucle-do-while  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Bucle Do WHILE  ******

    //  Bucle es una estructura de control que se repite varias veces.

    let year = 30;

    do {

        alert("Solo cuando year sea mayor que 25, ahora tienes " + year + " años");
        year--;

    } while (year > 25);

})();

