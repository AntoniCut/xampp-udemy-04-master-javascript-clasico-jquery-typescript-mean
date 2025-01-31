/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/30-funciones-manejo-textos.js  --------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  30-funciones-manejo-textos.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Funciones para Manejar Textos  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Funciones para el Manejo de Textos  ----- <br><br>`;
    results.innerHTML = '';

    let numero = 444;
    let texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
    let texto2 = "es muy buen curso";

    let dato;

    //  -----  Convierte un entero a String  -----
    dato = numero.toString();
    console.log(dato);
    console.log(typeof dato);
    results.innerHTML += `${dato} <br>`;


    //  -----  Convierte la Cadena a Mayusculas  -----
    dato = texto1.toUpperCase();
    console.log(dato);
    results.innerHTML += `${dato} <br>`;


    //  -----  Convierte la Cadena a Minusculas  -----
    dato = texto1.toLowerCase();
    console.log(dato);
    results.innerHTML += `${dato} <br>`;


    //  -----  Calcular Longitud de un String, array, etc  -----
    let nombre = "Antonio";
    console.log(nombre.length);
    results.innerHTML += `${nombre.length} <br>`;

    let nombreArr = ["hola", "Antonio"];
    console.log(nombreArr.length);
    results.innerHTML += `${nombreArr.length} <br>`;

    //  -----  Concatenar String  -----
    let textoTotal = texto1 + " " + texto2;
    
    console.log(textoTotal);
    results.innerHTML += `${textoTotal} <br>`;

    textoTotal = texto1.concat(" " + texto2);

    console.log(textoTotal);
    results.innerHTML += `${textoTotal} <br>`;


})();
