/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /03-eventos/  ---------------------------------------------------
    ----------  /02-hover.js  ---------------------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  02-hover.js  -----');

    //  -----  referencias al HTML  -----

    const $caja = $('#caja');
    const texto = $caja.text();

    $caja.hover(

        function () {

            const $this = $(this);

            $this
                .css({
                    color: 'white',
                    backgroundColor: 'red'
                })
                .text(texto + ' - evento mouseover')
        },

        function () {

            const $this = $(this);

            $this
                .css({
                    color: 'black',
                    backgroundColor: 'yellow'
                })
                .text(texto + ' - evento mouseout')
        }
    );



})(jQuery);
