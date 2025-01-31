/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/25-funciones-dentro-de-otras.js  ------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  25-funciones-dentro-de-otras.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Funciones dentro de otras  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Funciones Dentro de Otras  ----- <br><br>`;
    results.innerHTML = '';

    //  Introducimos valores por teclado.
    let numero1 = parseInt(prompt("Introduce un numero:", 0));
    let numero2 = parseInt(prompt("Introduce un numero:", 0));


    function porConsola(numero1, numero2) {
        console.log("Suma de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2));
        console.log("Resta de " + numero1 + " - " + numero2 + " es " + (numero1 - numero2));
        console.log("Multiplicacion de " + numero1 + " x " + numero2 + " es " + (numero1 * numero2));
        console.log("Division de " + numero1 + " / " + numero2 + " es " + (numero1 / numero2));
    }


    function porPantalla(numero1, numero2) {
        results.innerHTML += `Suma de ${numero1} + ${numero2} es ${numero1 + numero2} <br>`;
        results.innerHTML += `Resta de ${numero1} - ${numero2} es ${numero1 - numero2} <br>`;
        results.innerHTML += `Multiplicación de ${numero1} X ${numero2} es ${numero1 * numero2} <br>`;
        results.innerHTML += `División de ${numero1} / ${numero2} es ${numero1 / numero2} <br>`;
    }


    function calculadora(numero1, numero2, mostrar = false) {

        if (mostrar == false) porConsola(numero1, numero2);
        else porPantalla(numero1, numero2);

        return true;
    }

   
    calculadora(numero1, numero2);
    calculadora(numero1, numero2, true);

})();
