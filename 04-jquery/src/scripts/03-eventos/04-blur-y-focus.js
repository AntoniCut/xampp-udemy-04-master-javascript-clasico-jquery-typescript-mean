/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /03-eventos/  ---------------------------------------------------
    ----------  /04-blur-y-focus.js  --------------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  04-blur-y-focus.js  -----');

    //  -----  referencias al HTML  -----


    const $nombre = $('#nombre');
    const $datos = $('#datos');

    $nombre.focus(function () {
        
        const $this = $(this);

        $this.css("border", "10px solid red");

    });
   

    $nombre.blur(function () {
        
        const $this = $(this);
        $this.css("border", "10px solid #ccc");
        
        $datos
            .text($(this).val())
            .show();
    });

})(jQuery);



