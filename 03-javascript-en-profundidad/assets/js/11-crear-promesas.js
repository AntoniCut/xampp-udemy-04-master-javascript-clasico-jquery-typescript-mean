//  --------------------------------------------------------------------------
//  ----------  /master-javascript-clasico-jquery-typescript-mean/  ----------
//  ----------  /03-javascript-en-profundidad/  ------------------------------
//  ----------  /assets/js/11-crear-promesas.js  -----------------------------
//  --------------------------------------------------------------------------


window.addEventListener('load', () => {


    'use strict';

    console.clear();
    console.warn('----------  11-crear-promesas.js  -----  Cargado!!!!!  ----------');
    console.log('\n');

    //  -----  Referencias al HTML  -----
    let divUsuariosReqRes = document.querySelector('#usuariosReqRes');
    let divUsuarioJanet = document.querySelector('#usuarioJanet');
    let divInfoProfesor = document.querySelector('#infoProfesor');

    let loading1 = document.querySelector('.loading1');
    let loading2 = document.querySelector('.loading2');
    let loading3 = document.querySelector('.loading3');

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

                //  -----  otra petición a la siguiente promesa  -----
                return getInfo();
            })

            
            .then(data => {
                let profesor = JSON.parse(data); 
                console.log('profesor', profesor);
                mostrarInfoProfesor(profesor);
            })
            

            .catch(error => {
                console.error(error);
                alert('Error en las Peticiones Fetch');
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


    //  -----  Creacion de una Promesa  -----
    function getInfo() {

        let profesor = {
            nombre: 'Antonio',
            apellidos: 'Cutillas',
            url: 'https://antonydev.es/pruebas'
        };

        return new Promise((resolve, reject) => {

            let profesorString = "";
            profesorString = JSON.stringify(profesor);

            if (typeof profesorString !== 'string' || profesorString === "")
                return reject('Error: profesorString no es una cadena válida');

            return resolve(profesorString);
        });
    }



    //  -----------------------------------------
    //  -----  Listado de Datos en el HTML  -----
    //  -----------------------------------------

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


    //  -----  Listado de usuarios ReqRes  -----
    function mostrarInfoProfesor(profesor) {

        let registro = document.createElement('h4');
        registro.innerHTML = profesor.nombre + " " + profesor.apellidos + " - " + profesor.url;
        divInfoProfesor.appendChild(registro);
        loading3.style.display = 'none';
    }



});
