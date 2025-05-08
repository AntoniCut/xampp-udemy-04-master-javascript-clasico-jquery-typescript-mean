/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /01-jquery/  ----------------------------------------------------
    ----------  /05-jquery-peticiones-ajax.js  ----------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {


    console.log('\n')
    console.warn('-----  05-jquery-peticiones-ajax.js  -----');


    /*
        -------------------------------------
        ---------- 1. Método LOAD  ----------
        -------------------------------------
    */

    //  -----  referencias al HTML  -----
    const $btnLoad = $('#btnLoad');
    const $datosLoad = $('#datosLoad');
    const urlLoad = '/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/services/home-jquery.html';

    $btnLoad.on('click', function () {

        $datosLoad.load(urlLoad);

    })


    /*
       ------------------------------------
       ---------- 2. Método GET  ----------
       ------------------------------------
   */

    const $btnGet = $('#btnGet');
    const $datosGet = $('#datosGet');
    const urlPlaceholderGet = 'https://jsonplaceholder.typicode.com/users';

    $datosGet.hide();

    $btnGet.on('click', function () {

        $datosGet.show();

        $.get(urlPlaceholderGet, function (response) {

            console.log('response Get:', response);

            const arrUsers = [];

            response.forEach(user => {
                arrUsers.push(`
                    <article class="info-user"> 
                        <p class="user-field">ID: ${user.id}</p>
                        <p class="user-field">Name: ${user.name}</p>
                        <p class="user-field">Username: ${user.username}</p> 
                        <p class="user-field">Email: ${user.email}</p>
                        <p class="user-field">Phone: ${user.phone}</p>
                        <p class="user-field">Website: ${user.website}</p>
                    </article>
                `);
            });

            $datosGet.append(arrUsers.join(''));

        });

    });



    /*
        -------------------------------------
        ---------- 3. Método POST  ----------
        -------------------------------------
    */

    const $formPost = $('#formularioPost');
    const $datosPost = $('#datosPost');

    $datosPost.hide();

    $formPost.on('submit', function (e) {

        e.preventDefault();

        $datosPost.show();

        const newUser = {
            name: $('input[name="name"]').val(),
            username: $('input[name="username"]').val(),
            email: $('input[name="email"]').val(),
            phone: $('input[name="phone"]').val(),
            website: $('input[name="website"]').val()
        };

        $.post($formPost.attr('action'), newUser, function (response) {

            console.log('response Post:', response);

            const html = `
                    <article class="info-user"> 
                        <p class="user-field">ID: ${response.id}</p>
                        <p class="user-field">Name: ${response.name}</p>
                        <p class="user-field">Username: ${response.username}</p> 
                        <p class="user-field">Email: ${response.email}</p>
                        <p class="user-field">Phone: ${response.phone}</p>
                        <p class="user-field">Website: ${response.website}</p>
                    </article>
                `;

            $datosPost.append(html);

        }).done(function () {
            alert('Usuario añadido correctamente!!!');
        });

    });



    /*
       -------------------------------------
       ---------- 4. Método AJAX  ----------
       -------------------------------------
   */

    const $formAjax = $('#formularioAjax');
    const $datosAjax = $('#datosAjax');

    $datosAjax.hide();

    $formAjax.on('submit', function (e) {

        e.preventDefault();

        $datosAjax.show();

        const newUser = {
            name: $('input[name="name"]').val(),
            username: $('input[name="username"]').val(),
            email: $('input[name="email"]').val(),
            phone: $('input[name="phone"]').val(),
            website: $('input[name="website"]').val()
        };


        $.ajax({
            
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            url: $formAjax.attr("action"),
            data: JSON.stringify(newUser), // ✅ aquí serializamos el objeto

            
            beforeSend: function () {
                console.log("Enviando usuario");
            },
                        
            success: function (response) {
                
                alert('Petición realizada correctamente!!!')
                console.log('response => ', response);

                const html = `
                    <article class="info-user"> 
                        <p class="user-field">ID: ${response.id}</p>
                        <p class="user-field">Name: ${response.name}</p>
                        <p class="user-field">Username: ${response.username}</p> 
                        <p class="user-field">Email: ${response.email}</p>
                        <p class="user-field">Phone: ${response.phone}</p>
                        <p class="user-field">Website: ${response.website}</p>
                    </article>
                `;

                $datosAjax.append(html);

            },

            error: function () {
                
                alert("A ocurrido un error!!!");
                console.log("A ocurrido un error!!!");

            },

            timeout: 3000

        });
      

    });


})(jQuery);



