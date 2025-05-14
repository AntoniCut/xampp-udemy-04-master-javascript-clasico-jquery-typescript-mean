/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /01-jquery/  ----------------------------------------------------
    ----------  /01-jquery-primeros-pasos.js  -----------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  01-jquery-primeros-pasos.js  -----');
    alert('Aprendiendo jQuery del Master de JavaScript Clásico');

    const $title = $(".primeros-pasos__title");

    $title.html(`
        Aprendiendo jQuery - Primeros Pasos 
        <br> <br> - ¿ Que es jQuery y para qué sirve ?
        <br> - Integrar jQuery
        <br> - Diferencias versiones jQuery 1, 2 y 3
    `);

})(jQuery);



