/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/34-arrays-basicos.js  -----------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  34-arrays-basicos.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Arrays Básicos  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Arrays Básicos  ----- <br><br>`;
    results.innerHTML = '';


    //  -----  Variable  -----
    var nombre = "Victor Robles";

    //  Array   -         0                1                   2          3    4.
    var nombres = ["Victor Robles", "Antonio Cutillas", "Manolo Garcia", 52, true];

    //  -----  Array con Objeto  -----
    var lenguajes = new Array("PHP", "JS", "GO", "Java", "C#", "Pascal");


    console.log(nombres);
    console.log(lenguajes);
    results.innerHTML += `${nombres} <br> ${lenguajes} <br> <br>`;

    
    //  -----  recorro el array nombres y hago un console.log  -----
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
        results.innerHTML += `${nombres[i]} <br>`;
    }

    results.innerHTML += '<br> <br>';

    //  -----  recorro el array lenguajes y hago un console.log  -----
    for (let i = 0; i < lenguajes.length; i++) {
        console.log(lenguajes[i]);
        results.innerHTML += `${lenguajes[i]} <br>`;
    }

    results.innerHTML += '<br> <br>';


    
    let elemento = parseInt(prompt("Que elemento del array quieres?", 0));
    if (elemento >= nombres.length) {
        alert("Introduce el numero Correcto menor que " + nombres.length);
    }
    else {
        alert("El usuario seleccionado es: " + nombres[elemento]);
        results.innerHTML += `El usuario seleccionado es: ${nombres[elemento]} <br>`;
    }


    //  -----  Recorrer arrays con el bucle For  -----
    results.innerHTML += `<br><br><br> ----- Lenguajes de programacion con bucle For ----- <br> <br>`;
    for (let i = 0; i < lenguajes.length; i++) {
        results.innerHTML += `${lenguajes[i]} <br>`;
    }
    
    //  -----  Recorrer arrays con el bucle ForEach  -----
    results.innerHTML += ` <br><br><br> ----- Lenguajes de programacion con bucle ForEach ----- <br> <br>`;
    lenguajes.forEach((elemento, indice, dato) => {
        results.innerHTML += `indice: ${indice} - elemento: ${elemento} - dato - ${dato} <br>`;
    });
    

})();
