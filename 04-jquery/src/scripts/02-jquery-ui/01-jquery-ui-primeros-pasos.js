/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-jquery-ui/  -------------------------------------------------
    ----------  /01-jquery-ui-primeros-pasos.js  --------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  01-jquery-ui-primeros-pasos.js  -----');
    
    alert('jQuery UI - Primeros Pasos');

    const $caja = $('#caja');

    $caja.draggable({
        containment: "parent"
    });
    

})(jQuery);



