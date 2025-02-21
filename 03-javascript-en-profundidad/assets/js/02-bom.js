/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /03-javascript-en-profundidad/  ------------------------------  */
/*  ----------  /assets/js/02-bom.js  ----------------------------------------  */
/*  --------------------------------------------------------------------------  */


(function () {


    'use strict';

    console.clear();
    console.warn('----------  01-dom.js  -----  Cargado!!!!!  ----------');
    console.log('\n');


    //  --------------------------------------------------------------------
    //  ----------  Introducción al BOM  -  Browser Object Model  ----------
    //  --------------------------------------------------------------------

    function getBom() {
        console.log('Anchura Ventana', window.innerWidth)       //  saca la anchura de la ventana.
        console.log('Altura Ventana', window.innerHeight);      //  saca la altura de la ventana.
        console.log('Anchura Pantalla', screen.width);          //  saca la anchura de la pantalla.
        console.log('Anchura Pantalla', screen.height);         //  saca la altura de la pantalla.
        console.log('Objeto Location', window.location);        //  saca el objeto location.
        console.log('URL', window.location.href);               //  saca la URL.
    }

    function redirect(url) {
        window.location.href = url;
    }

    function abrirVentana(url) {
        window.open(url, "", "width=400, height=300");
    }

    getBom();

    setTimeout(() => {
        abrirVentana('https://www.google.com');
    }, 3000);

    setTimeout(() => {
        redirect('https://udemy-astro.antonydev.tech');
    }, 3000);

    
})();
