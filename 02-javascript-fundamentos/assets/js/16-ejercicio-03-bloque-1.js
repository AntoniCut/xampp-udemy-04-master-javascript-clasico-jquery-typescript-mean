/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/16-ejercicio-03-bloque-1.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  16-ejercicio-03-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 3  --------------------------------------------------

    //  Hacer un programa que muestre todos los numeros entre dos numeros introducidos
    //  por el usuario. 

    //  -----------------------------------------------------------------------------
       

    let numero1 = parseInt(prompt("Introduce numero 1", 0));
    let numero2 = parseInt(prompt("Introduce numero 2", 0));

    const label = document.querySelector('.main__label');
    const results = document.querySelector('.main__results');
    
        
    label.innerHTML = `de ${numero1} a ${numero2} estan estos numeros . . .`;
    
    if (numero1 < numero2) {

        for (let i = numero1; i <= numero2; i++) {
                console.log(i);
                results.innerHTML += `${i} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;
        }
    }

    else if (numero1 > numero2) {

        for (let i = numero1; i >= numero2; i--) {
                console.log(i);
                results.innerHTML += `${i} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;
        }
    }

    else {
        console.log("Los numeros son iguales");
        alert("Los numeros son iguales");
    }
    
})();
