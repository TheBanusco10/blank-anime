const animeTexto = new URLSearchParams(window.location.search).get('anime');
document.title = animeTexto;

    if (animeTexto){
        
        getAnime(animeTexto)
            .then(data => {
                let resultado = data.results.filter(element => element.title === animeTexto);

                // Petición a la API para conseguir la información completa del anime.
                // Si trabajamos con resultado directamente, la información es parcial.
                fetch(`${API_BASE}anime/${resultado[0].mal_id}`)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        mostrarAnimeControlador(data, paginaSiguiente);
                    })

                
            });

    }else
        document.write('Error');
