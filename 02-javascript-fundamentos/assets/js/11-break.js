/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/11-break.js  --------------------------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  11-break  -----  Cargado!!!!!  ----------');
console.log('\n');


//  ******  Break  ******

var year = 2018;

while(year != 1991) {
      
      console.log("Estamos en el año: " + year);

      if(year == 2000) break;
      
      year--;
}
