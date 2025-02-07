/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/36-arrays-operaciones.js  -------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  36-arrays-operaciones.js  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Arrays Operaciones  ******

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');

    label.innerHTML = `-----  Arrays Operaciones  ----- <br><br>`;
    results.innerHTML = '';


    //  -----  Operaciones con Arrays  -----

    let categorias = ["Accion", "Terror", "Comedia"];
    let peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];
    console.log("\nCategorias: ", categorias);
    console.log("Peliculas: ", peliculas);
    
    let cine = [categorias, peliculas];
    console.log("\nCine: ", cine);
    console.log(cine[0][1]);
    console.log(cine[1][2]);
   
    
    //  -----  Añadimos un elemento al array  -----
    peliculas.push("Batman");       
    console.log("\n Añadimos Batman a Peliculas: ", peliculas);
    
    let elemento = "";
    do {
        if (elemento != "ACABAR") {
            elemento = prompt("Introduce tu pelicula, 'ACABAR' para salir");
            peliculas.push(elemento);
        }
    } while (elemento != "ACABAR");

    
    //  -----  elimina el ultimo elemento del array  -----
    peliculas.pop();        

    console.log("Peliculas: ", peliculas);

    
    //  -----  Buscar elementos en un Array  -----
    let indice = peliculas.indexOf('Gran torino');      //  Busca en el array el elemento 'Gran torino'.
    if (indice > -1) peliculas.splice(indice, 1);       //  elimina el elemento indice solo 1 vez.
    console.log("\nindice: " + indice);
    console.log("Peliculas: ", peliculas);


    //  -----  Convertir un array a string  -----
    let peliculasString = peliculas.join();       //  convierte un array a string. hay que guardarlo en una variable.
    console.log("\nConvertir un array a string => ", peliculasString);


    //  -----  Convertir un string a array  -----
    let cadena = "texto1, texto2, texto3";
    let cadenaArray = cadena.split(", ");      //  Convierte un string en un array.
    console.log("\nConvertir un string a array => ", cadenaArray);

    
    //  -----  Ordenacion de Arrays  -----
    console.log("\n Ordenar peliculas: " + peliculas);

    peliculas.sort();       //  Ordena el array alfabeticamente.
    console.log("Array de peliculas ordenado: " + peliculas);

    peliculas.reverse();        //  Ordena el array en orden inverso.
    console.log("Array de peliculas ordenado inversamente: " + peliculas);

    
    //  -----  Recorrer un array, metodo "foreach"  -----
    results.innerHTML += '<br> -----  recorrer con for each  ----- <br>';
    peliculas.forEach((elemento, indice) => {
        results.innerHTML += `<br> ${indice} - ${elemento}`;
    });
    

    //  -----  Recorrer un array, metodo "for in"  -----
    results.innerHTML += '<br> -----  recorrer con for in  ----- <br>';
    for (let indice in peliculas) {
        results.innerHTML += `<br> ${indice} - ${peliculas[indice]}`;
    }
    

    //  -----  Buscar en un array  -----
    let busqueda = '';
    busqueda = peliculas.find(function (peliculas) {
        return peliculas == "La vida es bella";
    });
    console.log("\nBuscar La vida es bella: ", busqueda);

    //  -----  Busqueda en un array reduciendo la funcion de callbacks  -----
    busqueda = peliculas.find(pelicula => pelicula == "La vida es bella");
    console.log("\nBuscar La vida es bella: ", busqueda);

    //  -----  Busqueda en un array reduciendo la funcion de callbacks y nos muestra el indice de la busqueda  -----
    busqueda = peliculas.findIndex(pelicula => pelicula == "La vida es bella");
    console.log("\nindice de 'La vida es bella: '", busqueda);


    //  -----  Busqueda con some. comprueba si hay valores mayores o iguales a otro. devuelve true o false  -----
    let precios = [10, 20, 50, 80, 12];
    console.log("\nprecios: ", precios);

    busqueda = precios.some(precios => precios >= "90");      //  Comprobar si hay valores mayores o iguales a 20.
    console.log("\nBusqueda de Precios Mayores o igual a 90: ", busqueda);
    


})();
