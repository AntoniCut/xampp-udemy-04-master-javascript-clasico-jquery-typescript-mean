/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /04-jquery/  ----------------------------------------------------
    ----------  /src/plugins/  --------------------------------------------------
    ----------  /themes-jquery-ui/  ---------------------------------------------
    ----------  /themes-jquery-ui.js  -------------------------------------------
    -----------------------------------------------------------------------------
*/



(function ($) {
    

    console.log('\n');
    console.warn('-----  themes-jquery-ui.js  -----');
    console.log('\n');


    const $theme = $('#theme');
    const $navbarThemesUI = $('#navbarThemesUI');
    //const $themesTitle = $('#themesTitle');
    const $linksThemesContainer = $('#linksThemesContainer');

    const path = '/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery-ui/themes';

    $navbarThemesUI.draggable();
    $navbarThemesUI.tooltip();

    $linksThemesContainer.hide();


    //  -----  Toggle del menú al hacer click en el título  -----
    $(document).on('click', '#themesTitle', function (e) {
        e.stopPropagation();            //  -----  Evita que el documento también lo capture  -----
        $linksThemesContainer.slideToggle();
    });


    //  -----  Cerrar si se hace click fuera del menú  -----
    $(document).on('click', function () {
        
        $linksThemesContainer.slideUp();
        
    });


    function disabledActive() {
        $("#linksThemesContainer > a").removeClass('active');
    }


    $linksThemesContainer.on("click", "a", function (e) {
        
        e.preventDefault();

        const themeName = $(this).data("theme");
        if (!themeName) return;

        $theme.attr("href", `${path}/${themeName}/jquery-ui.min.css`);
        disabledActive();
        $(this).addClass("active");

        e.stopPropagation();

    });

})(jQuery);
