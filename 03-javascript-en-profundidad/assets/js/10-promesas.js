//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/10-promesas.js  -----------------------------------
//  --------------------------------------------------------------------------


window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  10-promesas.js  -----  Cargado!!!!!  ----------');
    console.log('\n');

    //  -----  Referencias al HTML  -----
    let divUsuariosReqRes = document.querySelector('#usuariosReqRes');
    let divUsuarioJanet = document.querySelector('#usuarioJanet');

    let loading1 = document.querySelector('.loading1');
    let loading2 = document.querySelector('.loading2');

    //  -----  Fetch API  -----
    let urlReqRes = 'https://reqres.in/api/users';
    let urlReqResUser2 = 'https://reqres.in/api/users/2';


    //  ---------------------------------------------------
    //  ----------  Llamada a la Petición Fetch  ----------
    //  ---------------------------------------------------
    
    //  -----  Utilizamos setTimeout para retardar la petición y ver el cargando...  -----
    setTimeout(() => {
    
        getUsuarios()

        .then(response => response.json())
        .then(users => {

            users.data;
            console.log('usuarios ReqRes', users.data);

            listadoUsuarios(users.data);

            //  -----  petición a la siguiente promesa  -----
            return getUsuarioJanet();
        })

        .then(response => response.json())
        .then(janet => {
            console.log('usuario Janet', janet.data);
            mostrarUsuarioJanet(janet.data);
        })

        .catch(error => {
            console.error(error);
        });


    }, 3000);


    //  -----  Realiza la Petición Fetch  -----
    function getUsuarios() {
        return fetch(urlReqRes);
    }


    //  -----  Realiza la Petición Fetch para el usuario Janet  -----
    function getUsuarioJanet() {
        return fetch(urlReqResUser2);
    }



    //  -----  Listado de usuarios ReqRes  -----
    function listadoUsuarios(usuarios) {

        usuarios.map((user, index) => {
            let registro = document.createElement('h4');
            registro.innerHTML = (index + 1) + " - " + user.first_name + " " + user.last_name;
            divUsuariosReqRes.appendChild(registro);
            loading1.style.display = 'none';
        })
    }


    //  -----  Listado del usuario Janet  -----
    function mostrarUsuarioJanet(user) {

        let registro = document.createElement('h4');
        let avatar = document.createElement('img');
        
        avatar.src = user.avatar;
        avatar.width = '100';
        avatar.height = '100';
        
        registro.innerHTML = user.id + " - " + user.first_name + " " + user.last_name;
        divUsuarioJanet.appendChild(registro);
        divUsuarioJanet.appendChild(avatar);
        loading2.style.display = 'none';

    }


});
