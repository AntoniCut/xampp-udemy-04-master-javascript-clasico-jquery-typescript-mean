/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /05-proyecto-html5-css3-javascript-jquery/  ---------------------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /login.js  ------------------------------------------------------
    -----------------------------------------------------------------------------
*/



(function ($) {

    console.log('\n');
    console.warn('-----  login.js (sin recarga) -----');
    console.log('\n');


    //  -----  referencias al HTML  -----
    const $login = $('#login');
    const $loginForm = $('#login form');
    const $formName = $("#formName");
    const $aboutDescription = $('.about__description');


    //  -----  Función para mostrar mensaje de bienvenida  -----
    function mostrarBienvenida(nombre) {
        
        $aboutDescription.html(`
            <br>
            <strong>Bienvenido, ${nombre}</strong>
            <br><br>
            <a href='#' id='logout'>Cerrar Sesión</a>
        `);

        $login.hide();

        //  -----  Botón de logout dinámico  -----
        $('#logout').on('click', function (e) {
            
            e.preventDefault();
            
            localStorage.removeItem('formName');
            $aboutDescription.html(''); // Limpia el mensaje
            $login.show(); // Vuelve a mostrar el formulario

        });
    }

    //  -----  Al cargar la página: si ya hay un nombre guardado, mostrar bienvenida  -----
    const getName = localStorage.getItem("formName");
    
    if (getName) 
        mostrarBienvenida(getName);
    
    //  -----  Al enviar el formulario  -----
    $loginForm.on('submit', function (e) {
        
        e.preventDefault();

        const name = $formName.val().trim();
        
        if (name) {
            localStorage.setItem("formName", name);
            mostrarBienvenida(name);
        }
    });


})(jQuery);
