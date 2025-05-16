/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /05-proyecto-html5-css3-javascript-jquery/  ---------------------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /01-inicio.js  --------------------------------------------------
    -----------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('-----  01-inicio.js  -----');
    console.log('\n');


    /*  
        ----------------------------------------
        ----------  plugins bxSlider  ----------
        ----------------------------------------
    */

    const $galeria = $('.galeria');

    $galeria.bxSlider({
        //mode: 'horizontal',
        //mode: 'vertical',
        mode: 'fade',
        caption: true,
        slideWidth: 1230,
        responsice: true,
        pager: true
    });


    /*
        -----------------------------
        ----------  posts  ----------
        -----------------------------
    */

    const $posts = $('#posts');
    const arrPosts = [];
    const day = moment().date();
    const month = moment().format("MMM");
    const year = moment().format("YYYY");


    const posts = [

        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + day + ' de ' + month + ' del ' + year,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        },

        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + day + ' de ' + month + ' del ' + year,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        },

        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + day + ' de ' + month + ' del ' + year,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        },

        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + day + ' de ' + month + ' del ' + year,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        },

        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + day + ' de ' + month + ' del ' + year,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos ullam ex aliquam ipsa tempore sapiente, rerum magnam officia totam, autem illo!. Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum ad et eveniet explicabo dignissimos fugit laudantium iure eos.'
        }
    ]

    console.log('posts =>', posts);
    
    posts.forEach((item, index) => {

        const post = `
            <article class="content__post">
                <h2 class='post__title'> ${item.title} </h2>
                <span class='post__date'> ${item.date} </span>
                <p class='post__description'> ${item.content} </p>
                <a class='post__more' href="#"> Leer más &nbsp; > </a>
            </article>
        `;

        arrPosts.push(post);

        console.log('post =>', post);

    });

    $posts.append(arrPosts);

    
})(jQuery);



