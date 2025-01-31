/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/22-funciones.js  ----------------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  22-funciones.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Funciones  ******

    //  Una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Funciones  ----- <br><br>`;
    results.innerHTML = '';

    //  -----  Defino la Funcion  -----
    function calculadora() {

        let resultado = "Hola, ¡ Soy la Calculadora !";
        return resultado;

    }

    //  -----  Invoco a la funcion en el console.log()  -----
    console.log(calculadora());
    alert(calculadora());
    results.innerHTML += `${calculadora()}`;

})();
