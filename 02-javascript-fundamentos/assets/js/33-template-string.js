/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/33-template-string.js  ----------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  33-template-string.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Template String  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Template String  ----- <br><br>`;
    results.innerHTML = '';


    let nombre = prompt("Mete tu nombre: ");
    let apellidos = prompt("Mete tus apellidos: ");

    let texto = " Mi nombre es: " + nombre + " Mis apellidos son: " + apellidos;

    results.innerHTML += texto;
    

    let plantilla = `
        <h1> Hola que tal </h1> <br>
        <h3> mi nombre es: ${nombre} </h3> <br>
        <h3> mis apellidos son ${apellidos} </h3> <br>
    `;

    results.innerHTML += plantilla;


})();
