/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/06-condicionales.js  ------------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';


console.clear();
console.warn('----------  06-condicionales  -----  Cargado!!!!!  ----------');
console.log('\n');


//  ******  Condicionales  ******  Condicional IF  *****

//  Si A es (igual, mayor, menor, distinto, etc) a B entonces haz algo.

var edad1 = 5;
var edad2 = 12;

if (edad1 > edad2) {
    console.log("edad1 es mayor que edad2");
} else {
    console.log("edad1 es menor que edad2");
}


//  *****  Operadores Relacionales  *****
/*
    Mayor:          >
    Menor:          <
    Mayor o Igual:  >=
    Menor o Igual:  <=
    Igual:          ==
    Distinto:       !=
*/

var edad = 50;
var nombre = 'David Suarez';
console.log('Nombre: ', nombre, ' - Edad: ', edad)

if (edad >= 18) {

    console.log(nombre + " Tiene " + edad + " años, es mayor de edad");

    if (edad <= 33) {
        console.log('Todavia eres millenial');
    }
    else if (edad >= 70) {
        console.log('Eres anciano');
    }
    else {
        console.log('Ya no eres millenial');
    }
}

else {
    console.log(nombre + " Tiene " + edad + " años, es menor de edad");
}


//  *****  Operadores Lógicos  *****
/*
    AND(Y):     &&
    OR(O):      ||
    Negacion:   |
*/

console.log('\n');

//  -----  Negacion  -----
var year = 2028;
if (year != 2016) {
    console.log("El año " + year + " no es igual a 2016");
}

else {
    console.log("El año " + year + " es igual a 2016");
}

//  -----  AND  -----
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
}
else {
    console.log("Estamos en la era post moderna");
}

//  -----  OR  -----
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
}
else {
    console.log("Año no registrado");
}


//  ******  Condicional Switch  ******

//  Si A es (igual, mayor, menor, distinto, etc) a B entonces haz algo.

var edad = 40;
var imprime = "";

switch (edad) {
      case 18:
            imprime = "Acabas de cumplir la mayoria de edad";
            break;
      case 25:
            imprime = "Ya eres un adulto";
            break;
      case 40:
            imprime = "Crisis de los cuarenta";
            break;
      case 75:
            imprime = "Eres un anciano";
            break;
      default:
            imprime = "Tu edad es neutra";
            break;
}

console.log('', edad, ' - ', imprime);


