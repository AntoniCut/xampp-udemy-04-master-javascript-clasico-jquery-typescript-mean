/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /01-jquery/  ----------------------------------------------------
    ----------  /04-efectos-animaciones-y-mas.js  -------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {


    /*
        --------------------------------------
        ---------- 1. DOM y Textos  ----------
        --------------------------------------
    */

    console.log('\n')
    console.warn('-----  04-efectos-animaciones-y-mas.js  -----');

    //  -----  referencias al HTML  -----
    const $enlaces = $('.enlace');

    const $inputLink1 = $('#inputLink1');
    const $btnAddLink1 = $('#btnAddLink1');
    const $menu1 = $('#menu1');

    const $inputLink2 = $('#inputLink2');
    const $btnAddLink2 = $('#btnAddLink2');
    const $menu2 = $('#menu2');


    //  -----  añadimos los enlaces del html  -----
    function reloadLinks() {

        $enlaces.each(function () {

            $elem = $(this);
            console.log($elem.attr('href'));

            const href = $elem.attr('href');

            $elem
                .text(href)
                .attr('target', '_blank');

        });
    }


    //  -----  click botón para Añadir con Append  -----
    $btnAddLink1.on('click', function () {

        const link = $inputLink1.val().trim();

        if (link) {

            $menu1.append(`
                
                <li>
                    <a class="enlace" href="${link}">${link} </a>
                </li>
            `);

            $inputLink1.val('');
            reloadLinks();

        } else
            alert('Añade un enlace');

    });


    //  -----  click botón para Añadir con Prepend  -----
    $btnAddLink2.on('click', function () {

        const link = $inputLink2.val().trim();

        if (link) {

            $menu2.prepend(`
                
                <li>
                    <a class="enlace" href="${link}">${link} </a>
                </li>
            `);

            $inputLink2.val('');
            reloadLinks();

        } else
            alert('Añade un enlace');

    });


    //  -----  al cargar el documento  -----
    $btnAddLink1.removeAttr('disabled');
    $btnAddLink2.removeAttr('disabled');
    reloadLinks();


    /*
        ---------------------------------
        ---------- 2. Efectos  ----------
        ---------------------------------
    */

    //  -----  Referencias al HTML  -----

    //  -----  caja a animar  -----
    const $caja1 = $('#caja1');

    //  -----  Botones de efectos  -----

    const $btnShow = $("#btnShow");
    const $btnHide = $("#btnHide");
    const $btnToggle = $("#btnToggle");

    const $btnFadeIn = $("#btnFadeIn");
    const $btnFadeOut = $("#btnFadeOut");
    const $btnFadeToggle = $("#btnFadeToggle");

    const $btnFadeTo1 = $("#btnFadeTo1");
    const $btnFadeTo2 = $("#btnFadeTo2");
    const $btnFadeTo3 = $("#btnFadeTo3");

    const $btnSlideDown = $("#btnSlideDown");
    const $btnSlideUp = $("#btnSlideUp");
    const $btnSlideToggle = $("#btnSlideToggle");

    //  -----  Estado inicial  -----
    $btnShow.hide();
    $btnFadeIn.hide();
    $btnSlideDown.hide();
    $btnFadeTo3.hide();


    //  -----  Función común para actualizar los botones según visibilidad  -----
    function actualizarBotones() {

        const visible = $caja1.is(':visible');

        //  -----  show / hide  -----
        $btnShow.toggle(!visible);
        $btnHide.toggle(visible);

        // -----  fade  -----
        $btnFadeIn.toggle(!visible);
        $btnFadeOut.toggle(visible);

        //  -----  slide  -----
        $btnSlideDown.toggle(!visible);
        $btnSlideUp.toggle(visible);

        //  -----  toggle siempre visible  -----
        $btnToggle.show();
        $btnFadeToggle.show();
        $btnSlideToggle.show();

    }


    //  -----  Efectos  -----

    // ----- SHOW -----
    $btnShow.on('click', function () {
        $caja1.show(3000, actualizarBotones);
    });

    // ----- HIDE -----
    $btnHide.on('click', function () {
        $caja1.hide(3000, actualizarBotones);
    });

    // ----- TOGGLE -----
    $btnToggle.on('click', function () {
        $caja1.toggle(3000, actualizarBotones);
    });

    // ----- FADE IN -----
    $btnFadeIn.on('click', function () {
        $caja1.fadeIn(3000, actualizarBotones);
    });

    // ----- FADE OUT -----
    $btnFadeOut.on('click', function () {
        $caja1.fadeOut(3000, actualizarBotones);
    });

    // ----- FADE TOGGLE -----
    $btnFadeToggle.on('click', function () {
        $caja1.fadeToggle(3000, actualizarBotones);
    });

    // ----- FADE TO (opacidad) -----
    $btnFadeTo1.on('click', function () {
        $caja1.fadeTo(3000, 0.3);
        $btnFadeTo1.hide();
        $btnFadeTo2.show();
        $btnFadeTo3.show();
    });

    $btnFadeTo2.on('click', function () {
        $caja1.fadeTo(3000, 0.7);
        $btnFadeTo2.hide();
        $btnFadeTo1.show();
        $btnFadeTo3.show();
    });

    $btnFadeTo3.on('click', function () {
        $caja1.fadeTo(3000, 1);
        $btnFadeTo3.hide();
        $btnFadeTo1.show();
        $btnFadeTo2.show();
    });

    // ----- SLIDE DOWN -----
    $btnSlideDown.on('click', function () {
        $caja1.slideDown(3000, actualizarBotones);
    });

    // ----- SLIDE UP -----
    $btnSlideUp.on('click', function () {
        $caja1.slideUp(3000, actualizarBotones);
    });

    // ----- SLIDE TOGGLE -----
    $btnSlideToggle.on('click', function () {
        $caja1.slideToggle(3000, actualizarBotones);
    });



    /*
       ----------------------------------------------------
       ---------- 3. Animaciones Personalizadas  ----------
       ----------------------------------------------------
   */

    //  -----  Referencias al HTML  -----

    const $caja2 = $('#caja2');
    const $btnAnimame = $('#btnAnimame');

    $btnAnimame.on('click', function () {

        $caja2
        
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                fontFamily: 'Tahoma',
                height: '110px'
            }, 'slow')

        
            .animate({
                borderRadius: '900px',
                lineHeight: '110px',
                marginTop: '120px'
            }, 'slow')

            .animate({
                borderRadius: '0px',
                marginLeft: '-420px'
            }, 'slow')

            .animate({
                borderRadius: '0px',
                marginTop: '20px',
                height: '50px',
                lineHeight: '50px',
                fontFamily: 'Verdana',
                fontSize: '19px'
            }, 'slow',
                function() {        //  Callback de función
                    alert('Animación Terminada!!!');
                })



    });



})(jQuery);



