/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/18-ejercicio-05-bloque-1.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  18-ejercicio-05-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 5  --------------------------------------------------

    //  Mostrar todos los numeros divisores de un numero introducidos por teclado.

    //  -----------------------------------------------------------------------------


    let numero = parseInt(prompt("Introduce numero 1", 0));

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Ejercicio 5  --  Bloque 1  ----- <br><br>`;
    label.innerHTML += `Los divisores del numero ${numero} son . . .`;
    results.innerHTML = '';

    for (let i = 2; i <= numero; i++) {

        if (numero % i == 0) {
            console.log(i);
            results.innerHTML += `${i} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;
        }

    }

})();
