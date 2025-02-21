//  --------------------------------------------------------------------------  
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------  
//  ----------  /03-javascript-en-profundidadfundamentos/  -------------------  
//  ----------  /main.js  ----------------------------------------------------  
//  --------------------------------------------------------------------------  



// Maneja los enlaces para cargar tanto scripts como secciones HTML
document.querySelectorAll('a[data-html][data-script]').forEach((enlace) => {

    enlace.addEventListener('click', (e) => {

        e.preventDefault();

        // Obtiene las rutas del archivo HTML y del script
        const htmlSrc = enlace.getAttribute('data-html');
        const scriptSrc = enlace.getAttribute('data-script');
        const contenedorHTML = enlace.getAttribute('data-container'); // contenedor para insertar el HTML

        // Cargar el archivo HTML en el contenedor
        fetch(htmlSrc)
            .then(response => response.text())
            .then(html => {
                // Inserta el HTML cargado en el contenedor especificado
                const contenedor = document.querySelector(contenedorHTML);
                if (contenedor) {
                    contenedor.innerHTML = html;
                } else {
                    console.error(`Contenedor ${contenedorHTML} no encontrado.`);
                }
            })
            .catch(error => {
                console.error('Error al cargar el HTML:', error);
            });

        // Eliminar el script previo si existe
        const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
        if (existingScript) {
            existingScript.remove();
        }

        // Cargar el archivo de script asociado
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;

        script.onload = () => console.log(`Script ${scriptSrc} cargado correctamente.`);
        script.onerror = () => console.error(`Error al cargar el script ${scriptSrc}.`);

        document.body.appendChild(script);
    });
});



// Maneja los enlaces para cargar tanto scripts como secciones HTML
// document.querySelectorAll('a[data-html][data-script]').forEach((enlace) => {

//     enlace.addEventListener('click', (e) => {

//         e.preventDefault();

//         // Obtiene las rutas del archivo HTML y del script
//         const htmlSrc = enlace.getAttribute('data-html');
//         const scriptSrc = enlace.getAttribute('data-script');
//         const contenedorHTML = enlace.getAttribute('data-container'); // contenedor para insertar el HTML

//         // Cargar el archivo HTML en el contenedor
//         fetch(htmlSrc)
//             .then(response => response.text())
//             .then(html => {
//                 // Inserta el HTML cargado en el contenedor especificado
//                 const contenedor = document.querySelector(contenedorHTML);
//                 if (contenedor) {
//                     contenedor.innerHTML = html;
//                 } else {
//                     console.error(`Contenedor ${contenedorHTML} no encontrado.`);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error al cargar el HTML:', error);
//             });

//         // Cargar el archivo de script asociado
//         const script = document.createElement('script');
//         script.src = scriptSrc;
//         script.async = true;

//         script.onload = () => console.log(`Script ${scriptSrc} cargado correctamente.`);
//         script.onerror = () => console.error(`Error al cargar el script ${scriptSrc}.`);

//         document.body.appendChild(script);
//     });
// });
