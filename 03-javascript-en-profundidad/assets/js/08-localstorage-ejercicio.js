//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/08-localstorage-ejercicio.js  ---------------------
//  --------------------------------------------------------------------------



window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  08-localstorage-ejercicio.js  -----  Cargado!!!!!  ----------');
    console.log('\n');


    //  -----  Referencias al HTML  -----
    let formAdd = document.querySelector("#formAddPeliculas");
    let inputAdd = document.querySelector("#addPeliculas");
    
    let formBorrar = document.querySelector("#formBorrarPeliculas");
    let inputBorrar = document.querySelector("#borrarPeliculas");
    let ul = document.querySelector("#peliculasList");
    
    mostrarPeliculas();
    
    //let peliculas = document.querySelector("#peliculas");
    //let datos = document.querySelector("#datos");
    //let eliminar = document.querySelector("#eliminar");


    //  -----  Añadir Peliculas  ----- 
    formAdd.addEventListener('submit', () => {

        //  -----  Añadimos elementos en el localStorage  -----
        let peliculaValue= inputAdd.value;
        
        if (peliculaValue.length >= 1) {

            localStorage.setItem(peliculaValue, peliculaValue);  //  Añadimos en el localStorage.
            mostrarPeliculas();
        }
            

    });


    //  -----  Borrar Peliculas  -----
    formBorrar.addEventListener('submit', () => {

        //  -----  Añadimos elementos en el localStorage  -----
        
        let peliculaValue = inputBorrar.value;
        
        if (peliculaValue.length >= 1) {

            localStorage.removeItem(peliculaValue);  //  eliminamos en el localStorage.
            mostrarPeliculas();
        }
            
        
    });


    //  -----  función que lista las peliculas del localStorage  -----
    function mostrarPeliculas() {

        //  -----  vaciamos la lista  -----
        ul.innerHTML = '';
        
        //  -----  Recorrer los elementos del localStorage y mostrar en el DOM  -----
        
        for (let indice in localStorage) {
            
            console.log('localStorage', localStorage[indice]);

            if (typeof localStorage[indice] === 'string') {

                //  -----  Creamos elementos en el DOM  -----
                let li = document.createElement("li");
                li.append(localStorage[indice]);
                ul.append(li);
            }
        }
    }

});
