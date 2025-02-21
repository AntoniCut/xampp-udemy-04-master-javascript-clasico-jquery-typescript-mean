//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/04-temporizadores.js  -----------------------------
//  --------------------------------------------------------------------------




window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  04-temporizadores.js  -----  Cargado!!!!!  ----------');
    console.log('\n');


    //  -----  variables Globales  -----
    let isActive = true;

    //  -----  Referencias de HTML  -----
    let start = document.querySelector("#start");
    let stop = document.querySelector("#stop");
    let encabezado = document.querySelector("#encabezado");
    let miCaja = document.querySelector("#miCaja");


    //  -----------------------------------
    //  ----------  setInterval  ----------
    //  -----------------------------------
 
    function intervalo() {

        let tiempo = setInterval(function () {
            
            console.log("setInterval ejecutado");

            if (encabezado.style.fontSize == "50px")
                encabezado.style.fontSize = "30px";

            else
                encabezado.style.fontSize = "50px";
            
        }, 1000);

        return tiempo;
    }

    let tiempo = intervalo();

        
    start.addEventListener("click", function () {
        intervalo();
        if(isActive) return;
        alert("Has Iniciado el intervalo en bucle");
    });

    
    stop.addEventListener("click", function () {
        clearInterval(tiempo);
        isActive = false;
        //alert("Has Parado el intervalo en bucle");
    });


    //  ----------------------------------
    //  ----------  setTimeout  ----------
    //  ----------------------------------

    setTimeout(function () {
        miCaja.style.display = "none";
    }, 3000);


});  
