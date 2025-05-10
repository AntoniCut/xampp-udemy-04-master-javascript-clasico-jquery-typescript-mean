/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-jquery-ui/  -------------------------------------------------
    ----------  /03-jquery-ui-animaciones-y-efectos.js  -------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  02-jquery-ui-animaciones-y-efectos.js  -----');


    /*
        ------------------------------------------------
        ----------  1. Animaciones y Efectos  ----------
        ------------------------------------------------
    */


    const $btnAplicarEfecto = $('#btnAplicarEfecto');
    const $effectSelect = $('#effectSelect');
    const $easingSelect = $('#easingSelect');
    const $cajaEfectos = $('#cajaEfectos');


    //  -------------------------------
    //  ----------  Efectos  ----------
    //  -------------------------------

    //  ----------  Effect  -----------------------------------------------------------------
    //  -----       Highlight    Bounce     Shake   Scale   Explode     fade    drop    -----
    //  -----       Puff         Pulsate    Slide   Blind   Clip        Fold    -------------
    //  -------------------------------------------------------------------------------------

    //  ----------  Easing  -------------------------------------------------------------------------------------------------
    //  -----  linear           swing            easeInQuad          easeOutQuad     easeInOutQuad                      -----
    //  -----  easeInCubic      easeOutCubic     easeInOutCubic      easeInQuart     easeOutQuart      easeInOutQuart   -----  
    //  -----  easeInSine       easeOutSine      easeInOutSine       easeInExpo      easeOutExpo       easeInOutExpo    -----
    //  -----  easeInQuint      easeOutQuint     easeInOutQuint      easeInCirc      easeOutCirc       easeInOutCirc    -----
    //  -----  easeInElastic    easeOutElastic   easeInOutElastic    easeInBack      easeOutBack       easeInOutBack    -----
    //  -----  easeInBounce     easeInOutBounce  easeOutBounce                                                          -----                                                                                  -----
    //-----------------------------------------------------------------------------------------------------------------------

    $btnAplicarEfecto.on('click', function () {

        const $effect = $effectSelect.val();
        const $easing = $easingSelect.val();
        const texto = `${$effect} <br> ${$easing}`;
        
        $cajaEfectos.html(texto);
                
        if ($effect === 'scale') {
            
            $cajaEfectos.effect(
                'scale', 
                {
                    percent: 150,        // Escala al 150% (puede ser 50, 200, etc.)
                    duration: 2000,
                    easing: $easing,
                    
                    complete: function () {
                        
                        $cajaEfectos.css({
                            width: '25rem',
                            marginTop: '5.5rem',
                            marginRight: '2rem'
                        });
                    }
                }
            );
            
        } else {
            
            $cajaEfectos.effect(
                $effect, 
                {
                    duration: 2000,
                    easing: $easing
                }
            );

        }

    });


})(jQuery);
