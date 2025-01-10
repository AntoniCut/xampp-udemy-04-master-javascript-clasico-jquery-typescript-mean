/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/05-tipos-de-datos.js  -----------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';


console.clear();
console.warn('----------  05-tipos-de-datos  -----  Cargado!!!!!  ----------');
console.log('\n');


//  ******  Operadores  ******
var numero1 = 7;
var numero2 = 12;

alert("Tenemos los siguientes numeros: " + numero1 + " y " + numero2);
var operacion1 = numero1 + numero2;
var operacion2 = numero1 - numero2;
var operacion3 = numero1 * numero2;
var operacion4 = numero1 / numero2;
var operacion5 = numero1 % numero2;

alert("\nEl resultado de las operacion son: "
    + "\n suma = " + operacion1 
    + "\n resta = " + operacion2
    + "\n multiplicacion = " + operacion3 
    + "\n division = " + operacion4
    + "\n y resto = " + operacion5);


//  ******  Tipos de datos  ******

console.warn('-----  tipos de datos  -----')
var numero_entero = 48;                     //  number
var cadena_texto = "Hola 'que' tal";        //  string
var verdadero_o_falso = true;               //  boolean

var numero_falso = "33";                    //  string
console.log(Number(numero_falso) + 7);      //  number
console.log(String(numero_entero) + 7);     //  string

console.warn('-----  typeof  -----')
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);

//  funciones de conversion - parseInt y parseFloat -
console.log(cadena_texto, verdadero_o_falso);
//console.log(verdadero_o_falso);