/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /menu-display.js  -----------------------------------------------
    -----------------------------------------------------------------------------
*/



(function ($) {


    console.log('\n')
    console.warn('-----  menu-display.js  -----');

    const $navbarList = $('.navbar__list');
    $navbarList.hide();


    //  -----  Toggle del menú al hacer click en el título  -----
    $(document).on('click', '.navbar__title', function (e) {
        e.stopPropagation();            //  -----  Evita que el documento también lo capture  -----
        $navbarList.slideToggle();
    });


    //  -----  Cerrar si se hace click fuera del menú  -----
    $(document).on('click', function () {
        $navbarList.slideUp();
    });


})(jQuery);

