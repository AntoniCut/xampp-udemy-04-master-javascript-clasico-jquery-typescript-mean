//  --------------------------------------------------------------------------  
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  
//  ----------  /02-javascript-fundamentos/  ---------------------------------  
//  ----------  /main.js  ----------------------------------------------------  
//  --------------------------------------------------------------------------  


//  ----------  Maneja los enlaces para cargar scripts  ----------
document.querySelectorAll('a[data-script]').forEach((enlace) => {

    enlace.addEventListener('click', (e) => {

        e.preventDefault();

        const scriptSrc = enlace.getAttribute('data-script');
        const script = document.createElement('script');

        script.src = scriptSrc;
        script.async = true;

        script.onload = () => console.log(`\n\nScript ${scriptSrc} cargado correctamente.`);
        script.onerror = () => console.error(`\nError al cargar el script ${scriptSrc}.`);

        document.body.appendChild(script);
    });
});
