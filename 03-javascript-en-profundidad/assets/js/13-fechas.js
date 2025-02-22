//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/13-fechas.js  -------------------------------------
//  --------------------------------------------------------------------------


window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  13-fechas.js  -----  Cargado!!!!!  ----------');
    console.log('\n');

    //  -----  referencias al HTML  -----
    let mostrarFechas = document.getElementById('mostrarFechas');

    //  -----  Funciones de Fechas  -----
    let fecha = new Date();

    let year = fecha.getFullYear();
    let mes = fecha.getMonth();
    let dia = fecha.getDate();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    let textoHora = `
        El año es: ${year} <br>
        El mes es: ${mes+1} <br>
        El dia es ${dia} <br>
        La hora es ${hora} <br>
        Los minutos son ${minutos} <br>
        Los segundos son ${segundos} <br>
    `;

    mostrarFechas.innerHTML += textoHora;
    
    console.log('\n', textoHora);



});
