/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/32-funciones-de-reemplazo.js  ---------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  32-funciones-de-reemplazo.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Funciones de Reemplazo  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Funciones para el Manejo de Reemplazo de Textos  ----- <br><br>`;
    results.innerHTML = '';


    let texto1 = "   Bienvenido al curso de JavaScript el curso de Victor Robles   ";
    let texto2 = "es muy buen curso";
    let busqueda;

    busqueda = texto1.replace("JavaScript", "Symfony");     //  Reemplaza un texto por otro.
    console.log("replace: " + busqueda);
    results.innerHTML += `replace: ${busqueda} <br>`;


    busqueda = texto1.slice(14, 22);     //  corta el texto a partir del caracter 14 al 22.
    console.log("slice: " + busqueda);
    results.innerHTML += `slice: ${busqueda} <br>`;

    busqueda = texto1.split(" ");     //  Recorta las palabras y las mete en un array separadas por un espacio.
    console.log("split: " + busqueda);
    results.innerHTML += `split: ${busqueda} <br>`;

    busqueda = texto1.trim();     //  Recorta los espacios por delante y por detras del string.
    console.log("trim: " + busqueda);
    results.innerHTML += `trim: ${busqueda} <br>`;


})();
