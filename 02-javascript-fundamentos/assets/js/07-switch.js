/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/07-switch.js  -------------------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';


console.clear();
console.warn('----------  07-switch  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ******  Condicional Switch  ******

    //  Si A es (igual, mayor, menor, distinto, etc) a B entonces haz algo.

    let edad4 = 40;
    let imprime2 = "";

    switch (edad4) {
        case 18:
            imprime2 = "Acabas de cumplir la mayoria de edad";
            break;
        case 25:
            imprime2 = "Ya eres un adulto";
            break;
        case 40:
            imprime2 = "Crisis de los cuarenta";
            break;
        case 75:
            imprime2 = "Eres un anciano";
            break;
        default:
            imprime2 = "Tu edad es neutra";
            break;
    }

    console.log('Edad: ', edad4, ' - ', imprime2);

})();

