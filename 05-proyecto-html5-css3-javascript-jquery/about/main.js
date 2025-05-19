/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /05-proyecto-html5-css3-javascript-jquery/  ---------------------
    ----------  /about/  --------------------------------------------------------
    ----------  /main.js  -------------------------------------------------------
    -----------------------------------------------------------------------------
*/


//  -----  import libs jQuery  -----
import { cdnJQuery_3_1_1 } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery/cdn/cdn-jquery-3.1.1.js";
import { loadJQueryByCdnOLocal } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";

//  -----  import libs jQueryUI  -----
import { cdnJQueryUI_1_14_1 } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery-ui/cdn/cdn-jquery-ui-1.14.1.js";
import { loadJQueryUIByCdnOLocal } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery-ui/load/load-jquery-ui-by-cdn-local.js";

//  -----  import plugin bxSlider  -----
import { bxSlider } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/plugins/bxslider-4-4.2.17/dist/jquery.bxslider-module.min.js";


const cdnJQuery = cdnJQuery_3_1_1;
const localJQuery = "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery/local/jquery-3.3.1.min.js";

const cdnJQueryUI = cdnJQueryUI_1_14_1;
const localJQueryUI = "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery-ui/local/jquery-ui-1.14.1.min.js";


//  -----  urls de los scripts a cargar  -----
const scriptsUrls = [
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/slider.js',
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/about.js',
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/selector-theme.js',
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/scroll.js',
    '/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/login.js'
];


//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery y jQueryUI...");
console.log('\n')

loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);

        //  -----  cargamos jQueryUI  -----
        loadJQueryUIByCdnOLocal(cdnJQueryUI, localJQueryUI)

            .then($ => {

                if (!$.ui) {
                    console.log('\n');
                    throw new Error("jQuery UI no se cargó correctamente.");
                }

                console.warn("jQuery UI cargado correctamente - Version:", $.ui.version);

                //  -----  cargamos plugins bxSlider convertido a module  -----
                bxSlider($);

                //  -----  cargamos el resto de scripts  -----
                scriptsUrls.forEach(scriptUrl => loadScript(scriptUrl));
            })

    })

    .catch(err => console.error("Error al cargar jQuery o jQuery UI:", err));



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
