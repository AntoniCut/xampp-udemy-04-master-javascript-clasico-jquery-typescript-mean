/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /03-eventos/  ---------------------------------------------------
    ----------  /01-mouseover-mouseout.js  --------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  01-mouseover-mouseout.js  -----');

    //  -----  referencias al HTML  -----
    const $caja = $('#caja');
    const texto = $caja.text();

    $caja.on('mouseover', function () {

        const $this = $(this);

        $this
            .css({
                color: 'white',
                backgroundColor: 'red'
            })
            .text(texto + ' - evento mouseover')

    });


    $caja.on('mouseout', function () {

        const $this = $(this);

        $this
            .css({
                color: 'black',
                backgroundColor: 'yellow'
            })
            .text(texto + ' - evento mouseout')

    });

})(jQuery);



