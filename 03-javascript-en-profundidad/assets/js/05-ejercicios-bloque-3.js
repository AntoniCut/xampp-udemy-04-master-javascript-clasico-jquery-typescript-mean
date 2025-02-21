//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/05-ejercicios-bloque-3.js  ------------------------
//  --------------------------------------------------------------------------



window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  05-ejercicios-bloque-3  -----  Cargado!!!!!  ----------');
    console.log('\n');


    //  -----  Referencias al HTML  -----
    
    let formulario = document.querySelector("#formulario");
    let boxDashed = document.querySelector(".dashed");

    let errorNombre = document.querySelector("#errorNombre");
    let errorApellidos = document.querySelector("#errorApellidos");
    let errorEdad = document.querySelector("#errorEdad");

    let pNombre = document.querySelector("#pNombre span");
    let pApellidos = document.querySelector("#pApellidos span");
    let pEdad = document.querySelector("#pEdad span");


    boxDashed.style.display = "none";


    //  -----  Funcion para validar el formulario  -----
    function validarFormulario(nombre, apellidos, edad) {

        if (nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre)) {
            console.log(typeof nombre);
            errorNombre.innerHTML = "El nombre no es valido";
             
            return false;
        } else {
            errorNombre.style.display = "none";
        }


        if (apellidos.trim() == null || apellidos.trim().length == 0 || !isNaN(apellidos)) {
            errorApellidos.innerHTML = "Los apellidos no son validos";
            return false;
        } else {
            errorApellidos.style.display = "none";
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {
            errorEdad.innerHTML = "La edad no es valida";
            return false;
        } else {
            errorEdad.style.display = "none";
        }

        return true;
    }


    //  -----  Evento submit  -----
    formulario.addEventListener('submit', function () {

        console.log("Evento submit capturado");

        //  -----  con value sacamos el valor del contenido del formulario  -----
        let nombre = document.querySelector("#nombre").value;
        let apellidos = document.querySelector("#apellidos").value;
        let edad = parseInt(document.querySelector("#edad").value);

        validarFormulario(nombre, apellidos, edad);

        if(!validarFormulario(nombre, apellidos, edad))
            boxDashed.style.display = "none";
        else
            boxDashed.style.display = "block";
       
        //  -----  añadimos en esas etiquetas lo que hemos recogido del formulario  -----
        pNombre.innerHTML = nombre;
        pApellidos.innerHTML = apellidos;
        pEdad.innerHTML = edad;

    });

});
