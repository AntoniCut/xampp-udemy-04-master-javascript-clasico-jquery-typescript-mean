/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-selectores/  ------------------------------------------------
    ----------  /01-selector-de-id.js  ------------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  01-selector-de-id.js  -----');

    //  -----  referencias al HTML  -----
    const $rojo = $('#rojo');
    const $amarillo = $('#amarillo');
    const $verde = $('#verde');

    $rojo
        .css('color', 'white')
        .css('background', 'red')

    $amarillo
        .css('color', 'green')
        .css('background', 'yellow')

    $verde
        .css('color', 'white')
        .css('background', 'green')

})(jQuery);



