//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/03-eventos.js  ------------------------------------
//  --------------------------------------------------------------------------


//  -----  evento 'load'  -----
//  -----  espera a que cargue todo el contenido de la página  -----

window.addEventListener('load', () => {

 
    'use strict';

    console.clear();
    console.warn('----------  01-dom.js  -----  Cargado!!!!!  ----------');
    console.log('\n');


    //  -----------------------------------------
    //  ----------  Eventos del Ratón  ----------
    //  -----------------------------------------

    //  -----  Referencias de HTML  -----
    let boton = document.querySelector("#boton");
    var input = document.querySelector("#campoNombre");
    

    //  -----  Funciones  -----
    function cambiarColor() {

        console.log("me has dado click");
        let bg = boton.style.background;

        if (bg == "green")
            boton.style.background = "red";

        else
            boton.style.background = "green";
        
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        console.log(bg);

    }


    //  -----  ejecutar Eventos dentro de JS - addEvenListener  -----  
    
    // -----  evento 'click'  -----
    boton.addEventListener('click', function () {
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });
    
    //  -----  evento 'mouseover'  -----
    boton.addEventListener('mouseover', function () {
        this.style.background = "yellow";
        this.style.color = "black";
    });

    //  -----  evento 'mouseout'  -----
    boton.addEventListener('mouseout', function () {
        this.style.background = "green";
        this.style.color = "white";
    });


    //  -----  evento 'focus'  -----
    input.addEventListener('focus', function () {
        console.log("focus - Estas dentro del input");
        this.style.border = "4px solid blue";
    });

    //  -----  evento 'blur'  -----
    input.addEventListener('blur', function () {
        console.log("blur - Estas fuera del input");
        this.style.border = "4px solid red";
    });


    //  -------------------------------------------
    //  ----------  Eventos del Teclado  ----------
    //  -------------------------------------------

    //  -----  evento 'keydown'  -----
    //  -----  Pulsar una tecla  -----
    input.addEventListener('keydown', function (event) {
        console.log("keydown - Pulsando la tecla", String.fromCharCode(event.keyCode));        //  fromCharCode()  captura la tecla del teclado que pulsamos.
    });

    //  -----  evento 'keypress'  ----- 
    //  -----  dejo de pulsar una tecla  -----
    input.addEventListener('keypress', function (event) {
        console.log("keypress - Tecla presionada", String.fromCharCode(event.keyCode));        //  fromCharCode()  captura la tecla del teclado que pulsamos.
    });

    //  -----  evento 'keyup'  -----
    //  -----  cuando levanto el dedo de la tecla  -----
    input.addEventListener('keyup', function (event) {
        console.log("keyup - Levanto el dedo de la tecla", String.fromCharCode(event.keyCode));        //  fromCharCode()  captura la tecla del teclado que pulsamos.
    });


});  
