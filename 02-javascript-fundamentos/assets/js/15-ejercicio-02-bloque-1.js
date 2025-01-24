/*  --------------------------------------------------------------------------  */
/*  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  */
/*  ----------  /02-javascript-fundamentos/  ---------------------------------  */
/*  ----------  /assets/js/15-ejercicio-02-bloque-1.js  ----------------------  */
/*  --------------------------------------------------------------------------  */


'use strict';

console.clear();
console.warn('----------  15-ejercicio-02-bloque-1  -----  Cargado!!!!!  ----------');
console.log('\n');


(function () {

    //  ----------  Ejercicio 2  ----------------------------------------------------
    
    //  Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
    //  hasta introducir un numero negativo y ahi mostrar el resultado.
    
    //  -----------------------------------------------------------------------------

    const label = document.querySelector('.main__label');
    label.innerHTML = `-----  Ejercicio 2  --  Bloque 1  ----- <br><br>`;

    let numero;
    let suma = 0;
    let contador = 0;
    let media = 0;
    
    do {

        numero = parseInt(prompt("Introduce un numero hasta que introduzcas un numero negativo", 0));

        if (isNaN(numero)) numero = 0;
        else if (numero >= 0) {
            suma += numero;
            contador++;
        }

        console.log("numero = ", numero, " suma = ", suma, " contador = ", contador);

    } while (numero > -1);

    media = suma / contador;
    console.log("Suma = ", suma, " Media = ", media);

    alert("La suma de los numeros introducidos es " + suma + " y la media es " + media);

})();
