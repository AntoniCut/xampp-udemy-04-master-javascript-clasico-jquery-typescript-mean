/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /03-javascript-en-profundidad/  ------------------------------  */
/*  ----------  /assets/js/01-dom.js  ----------------------------------------  */
/*  --------------------------------------------------------------------------  */


(function () {


    'use strict';

    console.clear();
    console.warn('----------  01-dom.js  -----  Cargado!!!!!  ----------');
    console.log('\n');


    //  ---------------------------------------------------------------------
    //  ----------  Introducción al DOM  -  Document Object Model  ----------
    //  ---------------------------------------------------------------------

    //  -----  Seleccionar un elemento por el ID  -----
    let caja1 = document.getElementById("miCaja1");

    //  -----  para escribir en el DOM  -----
    caja1.innerHTML = "¡Texto en la caja 1 desde JS!";

    //  -----  Cambiar las propiedades del DOM con reglas de CSS  -----
    caja1.style.background = "red";
    caja1.style.padding = "20px";
    caja1.style.color = "white";
    caja1.className = "hola1 hola2";

    function cambiaColor(color) {
        caja1.style.background = color;
    }

    cambiaColor("green");


    //  -----  Seleccionar un elemento por Selector  -----
    let caja2 = document.querySelector("#miCaja2");

    //  -----  para escribir en el DOM  -----
    caja2.innerHTML = "¡Texto en la caja 2 desde JS!";

    //  -----  Cambiar las propiedades del DOM con reglas de CSS  -----
    caja2.style.background = "blue";
    caja2.style.padding = "20px";
    caja2.style.color = "white";
    caja2.className = "hola3 hola4";


    //  -----------------------------------------------------------------
    //  ----------  Seleccionar y Modificar Elementos del DOM  ----------
    //  -----------------------------------------------------------------

    let todosLosDivs = document.getElementsByTagName('div');
    console.log('\ntodosLosDivs', todosLosDivs);

    let contenidoEnTexto = todosLosDivs[2].textContent;        //  saco el contenido de la posicion 2 y lo guarda en la variable.
    console.log('\ncontenidoEnTexto', contenidoEnTexto);

    contenidoEnTexto = todosLosDivs[2];
    contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";     //  Cambiamos el contenido.
    contenidoEnTexto.style.background = "red";
    console.log('\ncontenidoEnTexto', contenidoEnTexto);

    
    //  -----  Recorremos todos los divs con un bucle 'for in'  -----
    //  -----  Y Creamos elementos en el DOM  -----------------------

    let seccion = document.querySelector("#miSeccion");

    console.log('\nrecorremos todos los divs .....');
    for (let valor in todosLosDivs) {
        
        console.log(todosLosDivs[valor]);

        if(typeof todosLosDivs[valor].textContent === 'string') {
            let parrafo = document.createElement("p");                                  //  creamos un parrafo.
            let texto = document.createTextNode(todosLosDivs[valor].textContent);       //  creamos un texto.
            parrafo.appendChild(texto);                                                 //  añadimos texto al parrafo.
            seccion.appendChild(parrafo);
        }
        
    }
    
    let hr = document.createElement("hr");
    seccion.append(hr);


    //  -----  Seleccionar elementos por 'clase', 'id', querySelector, querySelectorAll  -----

    let divAmarillo = document.getElementsByClassName('amarillo');
    let divsVerdes = document.getElementsByClassName('verde');

    console.log('\ndivAmarillo', divAmarillo);
    console.log('\ndivsVerdes', divsVerdes);
    
    for( let index = 0; index < divAmarillo.length; index++) {
        divAmarillo[index].style.background = "yellow";
    }
    
    for( let index = 0; index < divsVerdes.length; index++) {
        divsVerdes[index].style.background = "green";
    }

    let id = document.querySelector("#encabezado");
    let claseAmarillo = document.querySelector(".amarillo");
    let claseVerde = document.querySelectorAll(".verde");
    
    console.log('\nid', id);
    console.log('\nclaseAmarillo', claseAmarillo);
    console.log('\nclaseVerde', claseVerde);
    

})();
