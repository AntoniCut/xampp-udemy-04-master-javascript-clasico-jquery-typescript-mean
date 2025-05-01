/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-selectores/  ------------------------------------------------
    ----------  /02-selectores-de-clase.js  -------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  02-selector-de-clase.js  -----');

    //  -----  referencias al HTML  -----
    const $rojo = $('.rojo');
    const $amarillo = $('.amarillo');
    const $verde = $('.verde');
    const $zebra = $('.zebra');

    
    $rojo
        .css("background", "red")
        .css("color", "white")

    $amarillo
        .css("background", "yellow")
        .css("color", "green")

    $verde
        .css("background", "green")
        .css("color", "white");

    $zebra
        .css("border", "5px solid red")
        .css("background", "black")
        .css("color", "white")
        
        .on('click', function() {
            
            const color = $(this).css('color');
            console.log(color)
            
            if(color === 'rgb(255, 255, 255)') {
                $(this)
                    .text('Soy un parrafo de color Naranja')
                    .css("color", "orange")
                    .addClass('zebra-class')
                }
            
            if(color === 'rgb(255, 165, 0)') {
                $(this)
                    .text('Soy un párrafo de color Blanco')
                    .css("color", "white")
                    .removeClass('zebra-class')
                }
        })
       

})(jQuery);



