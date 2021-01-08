const animeTexto = new URLSearchParams(window.location.search).get('anime');
document.title = animeTexto;

    if (animeTexto){
        
        getAnime(animeTexto)
            .then(data => {
                let resultado = data.results.filter(element => element.title === animeTexto);

                console.log(resultado);
                mostrarAnimeControlador(resultado[0]);
            });

    }else
        document.write('Error');
