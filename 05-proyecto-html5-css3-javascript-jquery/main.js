/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /05-proyecto-html5-css3-javascript-jquery/  ---------------------
    ----------  /main.js  -------------------------------------------------------
    -----------------------------------------------------------------------------
*/


import { cdnJQuery_3_1_1 } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery/cdn/cdn-jquery-3.1.1.js";
import { loadJQueryByCdnOLocal } from "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";


const cdnJQuery = cdnJQuery_3_1_1;
const localJQuery = "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery/local/jquery-3.1.1.min.js";

const bxSlider = "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/plugins/bxslider-4-4.2.17/dist/jquery.bxslider.min.js";
const scriptUrl = "/04-master-javascript-clasico-jquery-typescript-mean/05-proyecto-html5-css3-javascript-jquery/src/scripts/01-inicio.js";


//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);

        //  -----  cargamos el plugins para el slider  -----
        loadScript(bxSlider);

        //  -----  cargamos el script principal del proyecto  -----
        loadScript(scriptUrl);

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
