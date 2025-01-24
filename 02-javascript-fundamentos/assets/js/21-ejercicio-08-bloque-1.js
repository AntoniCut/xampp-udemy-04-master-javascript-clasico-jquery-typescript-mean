/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/21-ejercicio-08-bloque-1.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  21-ejercicio-08-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 8  -------------------------------------------

    //  Calculadora.
    //   -  Pida 2 numeros por pantalla.
    //   -  Si metemos uno mal que nos los vuelva  a pedir.
    //   -  En el cuerpo de la pagina, en una alerta y por la consola el 
    //      resultado de sumar, restar, multiplicar y dividir esas 2 cifras.

    //  ---------------------------------------------------------------------

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Ejercicio 8  --  Bloque 1  ----- <br><br>`;

    let numero1 = parseInt(prompt("Introduce número 1:", 0));
    let numero2 = parseInt(prompt("Introduce número 2:", 0));

    while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
        numero1 = parseInt(prompt("Introduce numero 1:", 0));
        numero2 = parseInt(prompt("Introduce numero 2:", 0));
    }

    let resultado = "La suma es: " + (numero1 + numero2) + " <br> "
        + "La resta es: " + (numero1 - numero2) + " <br> "
        + "La multiplicacion es: " + (numero1 * numero2) + " <br> "
        + "La division es: " + (numero1 / numero2) + " <br> ";

    let resultadoCMD = "La suma es: " + (numero1 + numero2) + " \n "
        + "La resta es: " + (numero1 - numero2) + " \n "
        + "La multiplicacion es: " + (numero1 * numero2) + " \n "
        + "La division es: " + (numero1 / numero2) + " \n ";

    console.log(resultadoCMD);
    results.innerHTML += `${resultado}`;
    alert(resultadoCMD);

})();
