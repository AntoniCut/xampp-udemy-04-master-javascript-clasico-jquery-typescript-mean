/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /03-eventos/  ---------------------------------------------------
    ----------  /eventos.js  ----------------------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  eventos.js  -----');


    /*
        -----------------------------------------------
        ----------  1. Mouseover y Mouseout  ----------
        -----------------------------------------------
    */

    //  -----  referencias al HTML  -----
    const $caja1 = $('#caja1');
    const texto1 = $caja1.text();


    //  -----  evento 'mouseover'  -----
    $caja1.on('mouseover', function () {

        const $this = $(this);

        $this
            .css({
                color: 'white',
                backgroundColor: 'red'
            })
            .text(texto1 + ' - evento mouseover')
    });


    //  -----  evento 'mouseout'  -----
    $caja1.on('mouseout', function () {

        const $this = $(this);

        $this
            .css({
                color: 'black',
                backgroundColor: 'yellow'
            })
            .text(texto1 + ' - evento mouseout')
    });


    /*
        --------------------------------
        ----------  2. Hover  ----------
        --------------------------------
    */

    //  -----  referencias al HTML  -----

    const $caja2 = $('#caja2');
    const texto2 = $caja2.text();


    //  -----  evento 'hover'  -----
    $caja2.hover(

        function () {

            const $this = $(this);

            $this
                .css({
                    color: 'white',
                    backgroundColor: 'red'
                })
                .text(texto2 + ' - evento over')
        },

        function () {

            const $this = $(this);

            $this
                .css({
                    color: 'black',
                    backgroundColor: 'yellow'
                })
                .text(texto2 + ' - evento out')
        }
    );


    /*
        ----------------------------------------------
        ----------  3. Click y Doble Click  ----------
        ----------------------------------------------
    */

    //  -----  referencias al HTML  -----
    const $caja3 = $('#caja3');
    const texto3 = $caja3.text();

    
    //  -----  evento 'click'  -----
    $caja3.on('click', function () {

        const $this = $(this);

        $this
            .css({
                color: 'white',
                backgroundColor: 'red'
            })
            .text(texto3 + ' - evento click')
    });

    
    //  -----  evento 'dblclick'  -----
    $caja3.on('dblclick', function () {

        const $this = $(this);

        $this
            .css({
                color: 'black',
                backgroundColor: 'yellow'
            })
            .text(texto3 + ' - evento dobleclick')
    });



    /*
        ---------------------------------------
        ----------  4. Blur y Focus  ----------
        ---------------------------------------
    */

    //  -----  referencias al HTML  -----
    const $nombre1 = $('#nombre1');
    const $datos1 = $('#datos1');


    //  -----  evento 'focus'  -----
    $nombre1.focus(function () {
        
        const $this = $(this);

        $this.css("border", "10px solid red");
    });
   

    //  -----  evento 'blur'  -----
    $nombre1.blur(function () {
        
        const $this = $(this);
        $this.css("border", "10px solid #ccc");
        
        $datos1
            .text($(this).val())
            .show();
    });



     /*
        ----------------------------------------------
        ----------  5. Mousedown y MouseUp  ----------
        ----------------------------------------------
    */

    //  -----  referencias al HTML  -----
    const $nombre2 = $('#nombre2');
    
    //  -----  evento 'mousedown'  -----
    $nombre2.on('mousedown', function () {
        
        const $this = $(this);
        $this.css("border-color", "green");
    });
   

    //  -----  evento 'mouseup'  -----
     $nombre2.on('mouseup', function () {
        
        const $this = $(this);
        $this.css("border-color", "gray");
    });

    
    /*
        ------------------------------------
        ----------  6. Mousemove  ----------
        ------------------------------------
    */

    //  -----  referencias al HTML  -----
    const $btnActive = $('#btnActive');
    const $document = $(document);
    const $sigueme = $('#sigueme');
        
    $btnActive.on('click', function() {

        $document.on('mousemove', function(event) {

            console.log('x:', event.clientX, ' - y:', event.clientY);

            //  -----  Subir scroll hacia arriba del todo y ocultar cursor  -----
            $('html, body')
                .scrollTop(0)
                .css('cursor', 'none');

            $sigueme.css({
                left: event.clientX,
                top: event.clientY
            });

        });
    });


})(jQuery);



