/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /05-proyecto-html5-css3-javascript-jquery/  ---------------------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /selector-theme.js  ---------------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('-----  selector-theme.js  -----');
    console.log('\n');

    const theme = $('#theme');
    const $toGreen = $('#toGreen');
    const $toRed = $('#toRed');
    const $toBlue = $('#toBlue');


    //  -----  Cargar tema guardado en localStorage  -----
    const savedTheme = localStorage.getItem('selectedTheme');
    
    if (savedTheme) 
        theme.attr('href', savedTheme);


    //  -----  eventos click botones selector de temas  -----
    $toGreen.on('click', function () {
        const greenPath = '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/styles/themes/green.css';
        theme.attr('href', greenPath);
        localStorage.setItem('selectedTheme', greenPath);
    });

    $toRed.on('click', function () {
        const redPath = '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/styles/themes/red.css';
        theme.attr('href', redPath);
        localStorage.setItem('selectedTheme', redPath);
    });

    $toBlue.on('click', function () {
        const bluePath = '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/styles/themes/blue.css';
        theme.attr('href', bluePath);
        localStorage.setItem('selectedTheme', bluePath);
    });
    

})(jQuery);



