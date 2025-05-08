/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /04-jquery/  ----------------------------------------------------
    ----------  /02-jquery-ui/  -------------------------------------------------
    ----------  /01-jquery-ui-primeros-pasos/  ----------------------------------
    ----------  /main.js  -------------------------------------------------------
    -----------------------------------------------------------------------------
*/


import { cdnJQuery_3_3_1 } from "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery/cdn/cdn-jquery-3.3.1.js";
import { loadJQueryByCdnOLocal } from "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";

import { cdnJQueryUI_1_12_1 } from "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery-ui/cdn/cdn-jquery-ui-1.12.1.js";
import { loadJQueryUIByCdnOLocal } from "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery-ui/load/load-jquery-ui-by-cdn-local.js";


const cdnJQuery = cdnJQuery_3_3_1;
const localJQuery = "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery/local/jquery-3.3.1.min.js";

const cdnJQueryUI = cdnJQueryUI_1_12_1;
const localJQueryUI = "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery-ui/local/jquery-ui-1.12.1.min.js";

const scriptUrl = "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/scripts/02-jquery-ui/01-jquery-ui-primeros-pasos.js";


//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery y jQueryUI...");
console.log('\n')

loadJQueryByCdnOLocal( cdnJQuery, localJQuery )

    .then( $ => {
        
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);
        
        //  -----  cargamos jQueryUI  -----
        loadJQueryUIByCdnOLocal( cdnJQueryUI, localJQueryUI )
            
            .then( $ => {
            
                if (!$.ui) { 
                    console.log('\n');
                    throw new Error("jQuery UI no se cargó correctamente.");
                }
                
                console.warn("jQuery UI cargado correctamente - Version:", $.ui.version);
                    
                //  -----  cargamos el script principal del proyecto  -----
                loadScript(scriptUrl)
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
