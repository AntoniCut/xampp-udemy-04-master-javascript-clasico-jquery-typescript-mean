/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /03-eventos/  ---------------------------------------------------
    ----------  /03-click-y-dobleclick.js  --------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  03-click-y-dobleclick.js  -----');

    
    //  -----  referencias al HTML  -----
    const $caja = $('#caja');
    const texto = $caja.text();

    $caja.on('click', function () {

        const $this = $(this);

        $this
            .css({
                color: 'white',
                backgroundColor: 'red'
            })
            .text(texto + ' - evento click')

    });


    $caja.on('dblclick', function () {

        const $this = $(this);

        $this
            .css({
                color: 'black',
                backgroundColor: 'yellow'
            })
            .text(texto + ' - evento dobleclick')

    });

})(jQuery);



