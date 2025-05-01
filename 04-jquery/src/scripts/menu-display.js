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

    $(document).off('click', '.navbar__title');

    $(document).on('click', '.navbar__title', function () {
        $navbarList.slideToggle();
    });



})(jQuery);



