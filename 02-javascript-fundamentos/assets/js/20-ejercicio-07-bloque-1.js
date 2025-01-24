/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/20-ejercicio-07-bloque-1.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  20-ejercicio-07-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 7  ----------------------------------

    //  Tabla de multiplicar de un numero introducido por pantalla.

    //  -----------------------------------------------------------

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    let numero = parseInt(prompt("Introduce un numero:", 0));

    label.innerHTML = `Tabla de multiplicar del numero ${numero}`;

    for (let i = 1; i <= 10; i++) {
        results.innerHTML += `${numero} X ${i} =  ${numero * i} <br>`;
    }

    
    //  -----  Todas las tablas de multiplicar del 1 al 10  -----
    let c = 1;
    //label.innerHTML += `Todas las Tabla de multiplicar del ${c} al 10`;
    
    for (c = 1; c <= 10; c++) {

        results.innerHTML += `<br>Tabla de multiplicar del ${c} <br>`;
        
        for (let i = 1; i <= 10; i++) {
            results.innerHTML += `${c} X ${i} = ${c * i} <br>`;
        }
        results.innerHTML += `<br><br>`;

    }


})();
