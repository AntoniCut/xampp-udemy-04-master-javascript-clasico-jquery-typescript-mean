/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/12-ventanas.js  --------------------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  12-ventanas  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Ventanas  ******

    //  -----  Alertas  -----
    alert("Esta es mi alerta");
    alert("Este es mi texto");

    //  -----  Alertas de Confirmacion  -----
    let mi_resultado = confirm("¿ Estas seguro de querer continuar ?");
    console.log(mi_resultado);

    //  -----  Alerta de Ingreso de Datos  -----
    mi_resultado = prompt("¿ Que edad tienes ?", 18);
    console.log(mi_resultado);

})();


