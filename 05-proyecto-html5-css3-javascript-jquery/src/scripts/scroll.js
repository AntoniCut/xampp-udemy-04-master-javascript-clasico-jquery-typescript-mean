/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /05-proyecto-html5-css3-javascript-jquery/  ---------------------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /scroll.js  -----------------------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('-----  scroll.js  -----');
    console.log('\n');

    const $htmlBody = $('html, body');
    const $subir = $('#subir');

    $subir.on('click', function (e) {

        e.preventDefault();

        $htmlBody.animate({
            scrollTop: 0
        }, 1000);
        
    });


})(jQuery);
