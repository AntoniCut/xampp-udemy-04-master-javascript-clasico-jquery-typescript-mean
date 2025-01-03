/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/02-variables.js  ----------------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';


console.clear();
console.warn('----------  02-variables.js  -----  Cargado!!!!!  ----------');
console.log('\n');


//  Declaramos variables.
var pais = "España";
var continente ="Europa";
var antiguedad = 2019;

let prueba = "hola";
alert(prueba);

pais = "Mexico";
continente = "Latinoamerica";

var pais_y_continente = pais + " " + continente;


//  Mostrar por Consola.
console.log(pais, continente, antiguedad);
console.log(pais_y_continente);

//  Mostrar una Alerta.
alert(pais_y_continente);