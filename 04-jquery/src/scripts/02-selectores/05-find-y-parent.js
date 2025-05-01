/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-selectores/  ------------------------------------------------
    ----------  /05-find-y-parent.js  -------------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  05-find-y-parent.js  -----');

    //  -----  referencias al HTML  -----
    const $rojo = $('.rojo');
    const $amarillo = $('.amarillo');
    const $verde = $('.verde');
    const $azul = $('.azul');

    const $btnMarginSup = $('#btnMarginSup');
    const $btnChangeBackground = $('#btnChangeBackground');
    const $btnGetTitle = $('#btnGetTitle');

    const $parrafosEnlaces = $('p, a');
    const $caja = $('#caja');



    $rojo
        .css("background", "red")
        .css("color", "white")

    $amarillo
        .css("background", "yellow")
        .css("color", "green")

    $verde
        .css("background", "green")
        .css("color", "white");

    $azul
        .css("background", "blue")
        .css("color", "white")


    $btnMarginSup.on('click', function () {

        $parrafosEnlaces.addClass('border-superior');
    });


    $btnChangeBackground.on('click', function () {

        const busqueda = $('#elemento2').parent().parent().find('#elemento2.resaltado').css('background-color', 'black');
        console.log(busqueda);

    });


    $btnGetTitle.on('click', function () {
        
        const $resaltado = $('#caja .resaltado').eq(0);
        const $contenedorComun = $resaltado.parents('.find-y-parent__top');
        const titleEnlace = $contenedorComun.find('[title="Google"]').text();
    
        console.log(titleEnlace);
    
        if (titleEnlace)
            $caja.append(`<p>${titleEnlace}</p>`);
        
    });


})(jQuery);
