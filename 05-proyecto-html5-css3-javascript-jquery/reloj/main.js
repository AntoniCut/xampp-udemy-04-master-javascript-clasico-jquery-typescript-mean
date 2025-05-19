/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /05-proyecto-html5-css3-javascript-jquery/  ---------------------
    ----------  /reloj/  --------------------------------------------------------
    ----------  /main.js  -------------------------------------------------------
    -----------------------------------------------------------------------------
*/


import { cdnJQuery_3_1_1 } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery/cdn/cdn-jquery-3.1.1.js";
import { loadJQueryByCdnOLocal } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";
import { bxSlider } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/plugins/bxslider-4-4.2.17/dist/jquery.bxslider-module.min.js";


//  -----  carga de jQuery  -----
const cdnJQuery = cdnJQuery_3_1_1;
const localJQuery = "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery/local/jquery-3.1.1.min.js";


//  -----  urls de los scripts a cargar  -----
const scriptsUrls = [
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/slider.js',
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/reloj.js',
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/selector-theme.js',
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/scroll.js',
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/login.js'
];


//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery...");
console.log('\n');


loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);

        //  -----  cargamos plugins bxSlider convertido a module  -----
        bxSlider($);                                                

        //  -----  cargamos el resto de scripts  -----
        scriptsUrls.forEach(scriptUrl => loadScript(scriptUrl));
        
    })

    .catch(err => console.error("Error al cargar jQuery:", err));



//  ----------------------------------------------------------------------------------------
//  ----------  Función que carga el script del proyecto de la lógica con jQuery  ----------
//  ---------------------------------------------------------------------------------------- 

function loadScript(scriptUrl) {

    $.ajax({

        url: scriptUrl,
        type: 'HEAD',

        success: function () {

            $.getScript(scriptUrl)
                .done(() => console.log(`Cargado: ${scriptUrl}`))
                .fail((jqxhr, settings, exception) => console.error(`Error en ${scriptUrl}:`, exception));
        },

        error: function () {
            console.warn(`No existe el script: ${scriptUrl}`);
        }

    });

}
