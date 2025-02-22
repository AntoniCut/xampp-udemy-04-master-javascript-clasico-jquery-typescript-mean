//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/14-funciones-matematicas.js  ----------------------
//  --------------------------------------------------------------------------


window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  14-funciones-matemáticas.js  -----  Cargado!!!!!  ----------');
    console.log('\n');

    //  -----  referencias al HTML  -----
    let btnAleatorio = document.querySelector('#btnAleatorio');
    let mostrarNumAleatorio = document.querySelector('#mostrarNumAleatorio');


    btnAleatorio.addEventListener('click', () => {

        //  -----  Funciones Matemáticas  -----
        let aleatorio = Math.random() * 100;
        console.log(aleatorio);

        //  -----  convertimos en un entero  -----
        console.log(Math.ceil(aleatorio));

        mostrarNumAleatorio.innerHTML = `
            Aleatorio: ${aleatorio} <br><br>
            ceil: ${Math.ceil(aleatorio)} <br><br>
            Piso: ${Math.floor(aleatorio)} <br><br>
            Redondeado: ${Math.round(aleatorio)} <br><br>
        `

    });

});
