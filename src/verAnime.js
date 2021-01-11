
// Tomamos el nombre del anime de la url y cambiamos el título de la página
let animeTexto = new URLSearchParams(window.location.search).get('anime');
document.title = animeTexto;

    // Si hay parámetro continuamos
    if (animeTexto){
        
        getAnime(animeTexto)
            .then(data => {

                // Si hay comillas simples en el nombre las cambiamos por comillas dobles para comparar con los demás animes
                let regex = /'/g;
                animeTexto = animeTexto.replace(regex, '"');

                // Devolvemos el anime que coincide con el pedido por el usuario
                let resultado = data.results.filter(element => element.title === animeTexto);

                // Petición a la API para conseguir la información completa del anime.
                // Si trabajamos con resultado directamente, la información es parcial.
                fetch(`${API_BASE}anime/${resultado[0].mal_id}`)
                    .then(response => {
                        mostrarCarga();

                        return response.json();
                    })
                    .then(data => {
                        
                        ocultarCarga();
                        mostrarAnimeControlador(data);
                    })

                
            });

    }else
        document.write('Error');
