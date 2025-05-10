/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /02-jquery-ui/  -------------------------------------------------
    ----------  /02-jquery-ui-interacciones.js  ---------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  02-jquery-ui-interacciones.js  -----');


    /*
        ------------------------------------
        ----------  1. Draggable  ----------
        ------------------------------------
    */

    const $draggableElementos = $('.draggable__elemento');

    $draggableElementos.draggable({
        containment: "parent"
    });


    /*
        ------------------------------------
        ----------  2. Resizable  ----------
        ------------------------------------
    */

    const $resizableElementos = $('.resizable__elemento');

    $resizableElementos.resizable();


    /*
        -------------------------------------
        ----------  3. Selectable  ----------
        -------------------------------------
    */

    const $listaSeleccionable = $('.lista-seleccionable');

    $listaSeleccionable.selectable();


    /*
        ------------------------------------
        ----------  4. Sorteable  ----------
        ------------------------------------
    */

    const $listaSorteable = $('.lista-sorteable');

    $listaSorteable.sortable({

        update: function (event, ui) {
            console.log("Ha cambiado la lista...");
        }

    });


    /*
        ------------------------------------
        ----------  5. Droppable  ----------
        ------------------------------------
    */

    const $elementoMovido = $('#elementoMovido');
    const $area = $('#area');

    $elementoMovido.draggable();
    
    $area.droppable({
        
        drop: function () {
            console.log("Has soltado algo dentro de el area.");
            $area.text('Elemento Movible dentro del area');
        },

        out: function () {
            console.log("Has sacado el elemento del área.");
            $area.text('Elemento Movible fuera del área');
        }
    });



})(jQuery);



