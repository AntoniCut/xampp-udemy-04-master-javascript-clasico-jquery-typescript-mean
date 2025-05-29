/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /04-jquery/  ----------------------------------------------------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /load-components-layout.js  -------------------------------------
    -----------------------------------------------------------------------------
*/




export const loadComponentsLayout = (titleHeader) => {


    (function ($) {

        console.log('\n')
        console.warn('-----  load-components-layouts.js  -----');

        const $layoutHeader = $('#layoutHeader');
        const $layoutNavbar = $('#layoutNavbar');
        const $layoutThemesUI = $('#layoutThemesUI');
        const $layoutFooter = $('#layoutFooter');


        $layoutHeader.load(

            '/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/components-layout/layout-header.html',

            function () {

                const $headerTitle = $('.header__title');
                $headerTitle.html(`${titleHeader}`);

            }
        )

        $layoutNavbar.load('/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/components-layout/layout-navbar.html');

        $layoutThemesUI.load('/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/plugins/themes-jquery-ui/themes-jquery-ui.html');
        
        $layoutFooter.load('/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/components-layout/layout-footer.html');



    })(jQuery);

}
