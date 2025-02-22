//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/07-localstorage.js  -------------------------------
//  --------------------------------------------------------------------------



window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  07-localstorage.js  -----  Cargado!!!!!  ----------');
    console.log('\n');


    //  -----  Referencias al HTML  -----
    let peliculas = document.querySelector("#peliculas");
    let datos = document.querySelector("#datos");
    let eliminar = document.querySelector("#eliminar");


    //  -----  Comprobar Disponibilidad del localStorage  -----
    if (typeof (Storage) !== 'undefined') 
        console.log("localStorage Disponible");
    else 
        console.log("Inconpatible localStorage");

    
    //  -----  Guardar datos en el localStorage  -----
    localStorage.setItem("titulo", "curso de JavaScript Clásico");


    //  -----  Recuperar datos en el localStorage  -----
    let titulo = localStorage.getItem("titulo");
    console.log(titulo);


    //  -----  Mostrar datos en el HTML  -----
    peliculas.innerHTML += titulo;

    
    //  -----  Guardar Objetos  -----
    let usuario = {
        nombre: "Victor Robles",
        email: "victor@victor.com",
        web: "victorroblesweb.es"
    };


    //  -----  Convertimos el objeto JSON a String para guardarlo en el LocalStorage  -----
    //  -----  con el metodo 'JSON.stringify'  --------------------------------------------
    localStorage.setItem("usuario", JSON.stringify(usuario));


    //  -----  Recuperar objeto. Con 'JSON.parse'  ----------------------------- 
    //  -----  Convierto el JSON String en un objeto de JavaScript usable  -----
    let userJs = JSON.parse(localStorage.getItem("usuario"));
    console.log('\nuserJs', userJs);


    //  -----  Mostrar datos en el HTML  -----
    datos.append(userJs.nombre + " - " + userJs.email + " - " + userJs.web);


    //  -----  Borrar los datos del localStorage  -----
    eliminar.addEventListener('click', () => {
        localStorage.removeItem("usuario");
        //localStorage.clear();
        datos.innerHTML = "Datos eliminados";
    });
    

});
