/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/31-funciones-manejo-busquedas.js  -----------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  31-funciones-manejo-busquedas.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Funciones para Manejar Busquedas  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Funciones para el Manejo de Busquedas  ----- <br><br>`;
    results.innerHTML = '';


    let numero = 444;
    let texto1 = "Bienvenido al curso de JavaScript el curso de Victor Robles";
    let texto2 = "es muy buen curso";
    let busqueda;

    busqueda = texto1.indexOf("curso");
    console.log("indexOf: " + busqueda);
    results.innerHTML += `indexOf: ${busqueda} <br>`;

    busqueda = texto1.lastIndexOf("curso");
    console.log("lastIndexOf: " + busqueda);
    results.innerHTML += `lastIndexOf: ${busqueda} <br>`;

    busqueda = texto1.search("curso");
    console.log("search: " + busqueda);
    results.innerHTML += `search: ${busqueda} <br>`;

    busqueda = texto1.match("curso");       //  devuelve un array.
    console.log("match: " + busqueda);
    results.innerHTML += `match: ${busqueda} <br>`;

    busqueda = texto1.substr(14, 5);       //  saca los caracteres del 14 al 18.
    console.log("substr: " + busqueda);
    results.innerHTML += `substr: ${busqueda} <br>`;

    busqueda = texto1.charAt(18);       //  devuelve la posicion 18.
    console.log("charAt: " + busqueda);
    results.innerHTML += `charAt: ${busqueda} <br>`;

    busqueda = texto1.startsWith("Bien");       //  Busca un texto al inicio del string. Devuelve true o false.
    console.log("startsWith: " + busqueda);
    results.innerHTML += `startsWitch: ${busqueda} <br>`;

    busqueda = texto1.includes("JavaScript");       //  Busca una palabra en el string. Devuelve true o false.
    console.log("includes: " + busqueda);
    results.innerHTML += `includes: ${busqueda} <br>`;


})();
