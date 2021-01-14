
// Tomamos el nombre del anime de la url y cambiamos el título de la página
// TODO Si hay manga y anime en la URL mostrar error
let urlParams = new URLSearchParams(window.location.search);
let animeTexto = urlParams.get('anime') || urlParams.get('manga');
document.title = animeTexto;

    // Si se encuentran los dos parámetros hay error.
    if (urlParams.has('anime') && urlParams.has('manga')){

        document.write('Error');

        
        
    }else {

        let tipo = urlParams.has('anime') ? 'anime' : 'manga';

        getInformacion(animeTexto, tipo)
            .then(data => {

                // Si hay comillas simples en el nombre las cambiamos por comillas dobles para comparar con los demás animes
                let regex = /'/g;
                animeTexto = animeTexto.replace(regex, '"');

                // Devolvemos el anime que coincide con el pedido por el usuario
                let resultado = data.results.find(element => element.title === animeTexto);

                // Petición a la API para conseguir la información completa del anime.
                // Si trabajamos con resultado directamente, la información es parcial.
                fetch(`${API_BASE}${tipo}/${resultado.mal_id}`)
                    .then(response => {
                        mostrarCarga();

                        return response.json();
                    })
                    .then(data => {
                        
                        ocultarCarga();

                        console.log(data);
                        
                        mostrarAnimeOMangaControlador(data, tipo, animeTexto);
                        
                    })

                
            });

    }
