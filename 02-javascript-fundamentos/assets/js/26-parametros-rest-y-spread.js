/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/26-parametros-rest-y-spread.js  -------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  26-parametros-rest-y-spread.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Parametros Rest y Spread  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Parametros Rest y Spread  ----- <br><br>`;
    results.innerHTML = '';

    //  -----  Parametros Rest  -----
    function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
        console.log("Fruta 1: ", fruta1);
        console.log("Fruta 2: ", fruta2);
        console.log(resto_de_frutas);
        results.innerHTML += `Fruta 1: ${fruta1} <br> Fruta 2: ${fruta2} <br> Resto de frutas: ${resto_de_frutas} <br><br>`;
    }

    listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");


    //  -----  Parametros Spread  -----
    let frutas = ["Naranja", "Manzana"];

    listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");

})();
