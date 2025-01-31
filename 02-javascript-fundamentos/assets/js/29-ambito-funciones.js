/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/29-ambito-funciones.js  ---------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  29-ambito-funciones.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Ambito de las Funciones  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Ambito de las Funciones  ----- <br><br>`;
    results.innerHTML = '';

    function holaMundo(texto) {
        let hola_mundo = "Texto dentro de funcion";
        console.log(texto);
        console.log(typeof numero.toString());   //  "toString()" convierte un numero a un string.
        console.log(hola_mundo);
        results.innerHTML += `${texto} <br> ${numero.toString()} <br> ${hola_mundo} <br>`;

    }

    let numero = 12;
    let texto = "Hola mundo, soy una variable global";

    holaMundo(texto);


    //console.log(hola_mundo);


})();
