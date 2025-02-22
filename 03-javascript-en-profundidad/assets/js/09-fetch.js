//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/09-fetch.js  --------------------------------------
//  --------------------------------------------------------------------------



window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  09-fetch.js  -----  Cargado!!!!!  ----------');
    console.log('\n');

    //  -----  Referencias al HTML  -----
    let divUsuariosPlaceHolder = document.querySelector('#usuariosPlaceholder');
    let divUsuariosReqRes = document.querySelector('#usuariosReqRes');
    let loading1 = document.querySelector('.loading1');
    let loading2 = document.querySelector('.loading2');

    //  -----  Fetch API  -----
    let urlPlaceholder = 'https://jsonplaceholder.typicode.com/users';
    let urlReqRes = 'https://reqres.in/api/users';


    //  --------------------------------------------------------------
    //  ----------  peticion asincrona url jsonplaceholder  ----------
    //  --------------------------------------------------------------
    function fetchJsonPlaceholder( url ) {

        let usuarios = [];

        fetch(url)
        
        .then(response => response.json())
        
        .then(users => {
        
            usuarios = users;
            console.log('usuarios Placeholder', usuarios);

            usuarios.map( (user, index) => {
                let  registro = document.createElement('h4');
                registro.innerHTML = (index + 1) + " - " + user.name + " " + user.username;
                divUsuariosPlaceHolder.appendChild(registro);
                loading1.style.display = 'none';
            })
        })
        
        .catch(error => {
            console.error(error);
        });

    }


    //  -----------------------------------------------------
    //  ----------  peticion asincrona url reqres  ----------
    //  -----------------------------------------------------
    function fetchReqRes( url ) {

        let usuarios = [];

        fetch(url)
        
        .then(response => response.json())
        
        .then(users => {
        
            usuarios = users.data;
            console.log('usuarios ReqRes', usuarios);

            usuarios.map( (user, index) => {
                let  registro = document.createElement('h4');
                registro.innerHTML = (index + 1) + " - " + user.first_name + " " + user.last_name;
                divUsuariosReqRes.appendChild(registro);
                loading2.style.display = 'none';
            })
        })
        
        .catch(error => {
            console.error(error);
        });

    }


    //  -----  realizar peticiones asincronas  -----
    
    setTimeout(() => {
        fetchJsonPlaceholder(urlPlaceholder);    
    }, 3000);


    setTimeout(() => {
       fetchReqRes(urlReqRes);
    }, 3000);
    
    
});
