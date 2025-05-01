/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-selectores/  ------------------------------------------------
    ----------  /03-selectores-de-etiqueta.js  ----------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  03-selector-de-etiqueta.js  -----');

    //  -----  referencias al HTML  -----
    const $rojo = $('.rojo');
    const $amarillo = $('.amarillo');
    const $verde = $('.verde');
    const $zebra = $('.zebra');
    const $parrafos = $('p');

       
    $rojo
        .css("background", "red")
        .css("color", "white")
        .addClass('zebra-border')

    $amarillo
        .css("background", "yellow")
        .css("color", "green")
        .addClass('grande')

    $verde
        .css("background", "green")
        .css("color", "white")
        .addClass('zebra-border')

    $zebra
        .css("border", "5px solid red")
        .css("background", "black")
        .css("color", "white")
        .addClass('grande')
        
    $parrafos
        .css('cursor', 'pointer')
    

    //  -----  Guardar el texto base sin clases adicionales  -----
    $parrafos.each(function () {
        
        const $this = $(this);
        
        const texto = $this.text()
            .replace(' - con clase zebra-border', '')
            .replace(' - con clase grande', '')
            .trim()

        $this.data('originalText', texto);
    });


    $parrafos.on('click', function () {
        
        const $this = $(this);
        const baseText = $this.data('originalText');

        //  -----  Alternar clases  -----
        const tieneZebra = $this.hasClass('zebra-border');
        const tieneGrande = $this.hasClass('grande');

        if (tieneZebra) {
            $this.removeClass('zebra-border').addClass('grande');
        } else {
            $this.addClass('zebra-border').removeClass('grande');
        }

        //  -----  Construir texto actualizado  -----
        let nuevoTexto = baseText;
        if ($this.hasClass('zebra-border')) {
            nuevoTexto += ' - con clase zebra-border';
        }
        if ($this.hasClass('grande')) {
            nuevoTexto += ' - con clase grande';
        }

        $this.text(nuevoTexto);

    });


})(jQuery);
