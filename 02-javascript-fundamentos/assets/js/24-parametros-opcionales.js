/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/24-parametros-opcionales.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  24-parametros-opcionales.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Parametros Opcionales  ******

    //  Una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Parametros Opcionales  ----- <br><br>`;
    results.innerHTML = '';


    //  -----  Introducimos valores por teclado.
    let numero1 = parseInt(prompt("Introduce un numero:", 0));
    let numero2 = parseInt(prompt("Introduce un numero:", 0));

    //  -----  Defino la Funcion  -----
    function calculadora(numero1, numero2, mostrar = false) {

        if (mostrar === false) {

            console.log("Suma de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2));
            console.log("Resta de " + numero1 + " - " + numero2 + " es " + (numero1 - numero2));
            console.log("Multiplicacion de " + numero1 + " x " + numero2 + " es " + (numero1 * numero2));
            console.log("Division de " + numero1 + " / " + numero2 + " es " + (numero1 / numero2));
            

        }

        else {
          
            results.innerHTML += `Suma de ${numero1} + ${numero2} es ${numero1 + numero2} <br>`;
            results.innerHTML += `Resta de ${numero1} - ${numero2} es ${numero1 - numero2} <br>`;
            results.innerHTML += `Multiplicación de ${numero1} X ${numero2} es ${numero1 * numero2} <br>`;
            results.innerHTML += `División de ${numero1} / ${numero2} es ${numero1 / numero2} <br>`;
        }

    }


    //  -----  invocamos a la función  -----
    calculadora(numero1, numero2);
    calculadora(numero1, numero2, true);


})();
