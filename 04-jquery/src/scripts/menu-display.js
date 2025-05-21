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


// (function ($) {

//     console.log('\n');
//     console.warn('-----  menu-display.js  -----');

//     const $navbarList = $('.navbar__list');
//     $navbarList.hide();

//     // if (window.innerWidth <= 710) {
//     //     $navbarList.css('flex-direction', 'column').hide();
//     // }

//     $(document).off('click', '.navbar__title');

//     $(document).on('click', '.navbar__title', function () {
        
//         if (window.innerWidth <= 710) {
            
//             // Asegura que ya tenga columna ANTES de hacer toggle
//             $navbarList.css('flex-direction', 'column');
//             $navbarList.stop(true, true).slideToggle();
//         }
//     });

// })(jQuery);









