/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-jquery-ui/  -------------------------------------------------
    ----------  /04-plugins-y-widgets.js  ---------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  04-plugins-y-widgets.js  -----');


    /*
        -----------------------------------
        ----------  1. Tooltips  ----------
        -----------------------------------
    */

    $(document).tooltip();



    /*
        ---------------------------------------------
        ----------  2. Cuadros de Dialogo  ----------
        ---------------------------------------------
    */

    const $lanzarPopup = $('#lanzarPopup');
    const $popup = $('#popup');
    const $textPopup = $('.text-popup');

    $lanzarPopup.on('click', function () {
        
        $textPopup.css('font-size', '1.6rem');
        $popup.dialog();
    });


    /*
        -------------------------------------
        ----------  3. Calendario  ----------
        -------------------------------------
    */

    const $calendario = $('#calendario');

    $calendario.datepicker();


    /*
        -------------------------------
        ----------  4. Tabs  ----------
        -------------------------------
    */

    const $pestanas = $('#pestanas');
    
    $pestanas.tabs();

    //const $btnAplicarEfecto = $('#btnAplicarEfecto');




})(jQuery);
