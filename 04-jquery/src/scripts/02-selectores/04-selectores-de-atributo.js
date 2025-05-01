/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-selectores/  ------------------------------------------------
    ----------  /04-selectores-de-atributo.js  ----------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  04-selectores-de-atributo.js  -----');

    //  -----  referencias al HTML  -----
    const $enlaceGoogle = $('[title="Google"]');
    const $enlaceFacebook = $('[title="Facebook"]');
    const $btnAtributos = $('#btnAtributos');
    
    
    $btnAtributos.on('click', function() {

        $enlaceGoogle.css({
            background: '#ccc',
            padding: '2rem'
        });
    
        $enlaceFacebook.css({
            background: 'blue',
            padding: '2rem'
        });

    });
    

})(jQuery);
