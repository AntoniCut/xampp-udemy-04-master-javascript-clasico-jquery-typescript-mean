/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /04-jquery/  ----------------------------------------------------
    ----------  /01-jquery/  ----------------------------------------------------
    ----------  /03-jquery-eventos/  --------------------------------------------
    ----------  /main.js  -------------------------------------------------------
    -----------------------------------------------------------------------------
*/


import { cdnJQuery_3_3_1 } from "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery/cdn/cdn-jquery-3.3.1.js";
import { loadJQueryByCdnOLocal } from "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";
import { loadComponentsLayout } from "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/scripts/load-components-layout.js";

//  -----  carga de jQuery  -----
const cdnJQuery = cdnJQuery_3_3_1;
const localJQuery = "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/libs/jquery/local/jquery-3.3.1.min.js";


//  -----  funcionalidades del menú y definir el tilulo del header, url script del proyecto  -----
const menuDisplay = "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/scripts/menu-display.js";
const headerTitle = '3. Eventos en jQuery <br> Aprendiendo jQuery';
const scriptUrl = "/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/scripts/01-jquery/03-jquery-eventos.js";


//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);

        //  -----  cargamos funcionalidades del menu, componentes del layout y script del proyecto  -----
        loadScript(menuDisplay);
        loadComponentsLayout(headerTitle);
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
