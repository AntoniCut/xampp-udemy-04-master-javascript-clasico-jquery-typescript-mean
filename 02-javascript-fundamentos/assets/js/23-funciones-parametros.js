/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/23-funciones-parametros.js  -----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  23-funciones-parametros.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Funciones con parametros  ******

    //  Una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Funciones con Parametros  ----- <br><br>`;

    //  -----  Defino la Funcion  -----
    function calculadora(numero1, numero2) {

        console.log("Suma de " + numero1 + " + " + numero2 + " es " + (numero1 + numero2));
        results.innerHTML += `Suma de ${numero1} + ${numero2} es ${numero1 + numero2} <br>`;

        console.log("Resta de " + numero1 + " - " + numero2 + " es " + (numero1 - numero2));
        results.innerHTML += `Resta de ${numero1} - ${numero2} es ${numero1 - numero2} <br>`;
        
        console.log("Multiplicacion de " + numero1 + " x " + numero2 + " es " + (numero1 * numero2));
        results.innerHTML += `Multiplicación de ${numero1} X ${numero2} es ${numero1 * numero2} <br>`;

        console.log("Division de " + numero1 + " / " + numero2 + " es " + (numero1 / numero2));
        results.innerHTML += `División de ${numero1} / ${numero2} es ${numero1 / numero2} <br>`;

    }

    for (var i = 1; i <= 5; i++) {

        //  -----  Introducimos valores por teclado  -----
        let numero1 = parseInt(prompt("Introduce un numero:", 0));
        let numero2 = parseInt(prompt("Introduce un numero:", 0));

        console.log(i + "ª Iteracion ");
        results.innerHTML += `<br>${i}ª iteracion <br><br>`;

        //  -----invoco a la función  -----
        calculadora(numero1, numero2);

    }

})();
