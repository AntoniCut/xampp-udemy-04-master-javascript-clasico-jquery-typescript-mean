//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/06-json-objetos-js.js  ----------------------------
//  --------------------------------------------------------------------------



window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  06-json-objetos-js  -----  Cargado!!!!!  ----------');
    console.log('\n');


    //  -----  Objeto JSON  -----
    let pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'Estados Unidos'
    };

    pelicula.year = 2021;
    console.log('\npelicula', pelicula);
    console.log('pelicula.titulo', pelicula.titulo);
    console.log('pelicula.year', pelicula.year);
    console.log('pelicula.pais', pelicula.pais);

    let peliculas = [
        { titulo: "La verdad duele", year: 2016, pais: "Francia" },
        pelicula
    ]

    console.log('\npeliculas', peliculas);

    let renderPeliculas = document.querySelector("#renderPeliculas");

    for (var index in peliculas) {

        let p = document.createElement("p");        //  creamos un elemento 'p'.
        p.append(peliculas[index].titulo + " - " + peliculas[index].year + " - " + peliculas[index].pais);
        renderPeliculas.append(p);
    }


});
