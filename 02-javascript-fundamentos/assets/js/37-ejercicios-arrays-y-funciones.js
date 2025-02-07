/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/37-ejercicios-arrays-y-funciones.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  37-ejercicios-arrays-y-funciones  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio Arrays y Funciones  ------------------------------------------------------

    //  1.  Porgrama que pida 6 numeros por pantalla y los meta en un array.
    //  2.  Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola.
    //  3.  Ordenarlo y mostrarlo.
    //  4.  Invertir su orden y mostrarlo.
    //  5.  Mostrar cuantos elementos tiene el array.
    //  6.  Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.

    //  -------------------------------------------------------------------------------------------------

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Ejercicio Utilizando Arrays y Funciones  ----- <br><br>`;
    results.innerHTML = '';


    //  -----  Definimos la funcion que nos muestra el array para cada ejercicio  -----
    function mostrarArray(elementos, textoCustom = "") {
        results.innerHTML += `<br><br> -----  Contenido del Array ${textoCustom}  ----- <br>`;
        elementos.forEach((elemento, indice) => {
            results.innerHTML += `<br> ${elemento} - posicion ${indice}`;
        });
    }



    //  *****  1.  Porgrama que pida 6 numeros por pantalla y los meta en un array.  *****

    //  let numeros = new Array(6);
    let numeros = [];

    //  -----  pedir los numeros al usuario  -----
    for (let i = 0; i <= 5; i++) {
        //numeros[i] = parseInt(prompt("Introduce numero " + (i+1), 0));
        numeros.push(parseInt(prompt("Introduce numero " + (i + 1), 0)));
    }


    //  *****  2.  Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola.  *****

    //  -----  Mostrar el array por la consola  -----
    console.log("numeros: ", numeros);

    //  -----  Mostrar el array en el cuerpo de la página  -----
    mostrarArray(numeros);


    //  *****  3.  Ordenarlo numericamente y mostrarlo.  *****
    numeros.sort(function (a, b) { return a - b });    //  sort.  Con esta funcion callbacks lo ordena numericamente.
    console.log("numeros ordenados numericamente: ", numeros);
    mostrarArray(numeros, "Ordenado");


    //  *****  4.  Invertir su orden y mostrarlo.  *****
    numeros.reverse();
    console.log("numeros ordenados inversamente: ", numeros);
    mostrarArray(numeros, "Revertido");


    //  *****  5.  Mostrar cuantos elementos tiene el array.  *****
    console.log("\nNº de elementos del array: ", numeros.length);
    results.innerHTML += `<br> <br> -----  El array tiene ${numeros.length} elementos  ----- <br>`;


    //  *****  6.  Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.  *****
    let busqueda = parseInt(prompt("Busca un numero", 0));
    let posicion = numeros.findIndex(numero => numero == busqueda);    //  findIndex.  Se utiliza con una funcion de callbacks.

    if (posicion && posicion != -1) 
        results.innerHTML += `-----  ¡ Encontrado ! - Posicion de la Busqueda ${posicion}  -----`;
    else 
        results.innerHTML += '-----  ¡ No Encontrado !  -----';
           

})();
