/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/03-let-y-var.js  ----------------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';


console.clear();
console.warn('----------  03-let-y-var.js  -----  Cargado!!!!!  ----------');
console.log('\n');


//  ******  let y var  ******

alert("Prueba con VAR");

//  Prueba con var
var numero = 40;
console.log(numero);    //  valor 40

if(true) {
    var numero = 50;
    console.log(numero);    //  valor 50
}

console.log(numero);    //  valor 50


//  Prueba con let.
alert("Prueba con LET");
var texto = "Curso JS victorroblesweb.es";
console.log(texto); //  valor "JS"

if(true) {
    let texto = "Curso Laravel 5 victorroblesweb.es";
    console.log(texto); //  valor Laravel 5
}

console.log(texto);   //  valor "JS"
