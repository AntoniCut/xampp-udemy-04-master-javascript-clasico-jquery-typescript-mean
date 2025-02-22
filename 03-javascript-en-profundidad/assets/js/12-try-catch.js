//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/12-try-catch.js  ----------------------------------
//  --------------------------------------------------------------------------


window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  12-try-catch.js  -----  Cargado!!!!!  ----------');
    console.log('\n');

    try {
        
        let year = 2019;
        alert(year);

        let vector = new Array(99999999);
        console.log(vector);
        
        console.log(decodeURIComponent("https://antonydev.es/pruebas"));

    } catch(error) {
        console.error(error);
        alert("¡Ha ocurrido un error en el código!");
    }


    

});
