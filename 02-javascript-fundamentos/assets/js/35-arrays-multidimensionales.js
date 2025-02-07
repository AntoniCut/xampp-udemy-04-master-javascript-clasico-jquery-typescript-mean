/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/35-arrays-multidimensionales.js  ------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  35-arrays-multidimensionales.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Arrays Multidimensionales  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Arrays Multidimensionales  ----- <br><br>`;
    results.innerHTML = '';


    let categorias = ["Accion", "Terror", "Comedia"];
    let peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];
    let cine = [categorias, peliculas];


    console.log("Array categorias: " + categorias);
    results.innerHTML += `Array categorias: ${categorias} <br>`;

    console.log("Array peliculas: " + peliculas);
    results.innerHTML += `Array peliculas: ${peliculas} <br>`;

    console.log(cine[0][1]);
    console.log(cine[1][2]);

    results.innerHTML += `<br><br> cine[0][1]: ${cine[0][1]}`;
    results.innerHTML += `<br><br> cine[1][2]: ${cine[1][2]}`;

})();
