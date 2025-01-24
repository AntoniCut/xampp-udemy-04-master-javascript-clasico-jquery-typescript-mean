/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/17-ejercicio-04-bloque-1.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  17-ejercicio-04-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 4  --------------------------------------------------

    //  Mostrar todos los numeros impares entre 2 numeros introducidos por teclado.

    //  -----------------------------------------------------------------------------


    let numero1 = parseInt(prompt("Introduce numero 1", 0));
    let numero2 = parseInt(prompt("Introduce numero 2", 0));

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Ejercicio 4  --  Bloque 1  ----- <br><br>`;
    label.innerHTML += `Numeros Impares entre ${numero1} y ${numero2} son . . .`;

    if (numero1 < numero2) {

        for (let i = numero1; i <= numero2; i++) {

            if (i % 2 != 0) {
                console.log(i);
                results.innerHTML += `${i} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;
            }
        }
    }

    else if (numero1 > numero2) {

        for (let i = numero1; i >= numero2; i--) {

            if (i % 2 != 0) {
                console.log(i);
                results.innerHTML += `${i} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;
            }
        }
    }

    else {
        console.log("Los numeros son iguales");
        alert("Los numeros son iguales");
    }


})();
