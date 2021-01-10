const API_BASE = 'https://api.jikan.moe/v3/';
const MAX_ANIMES = 8;

// Paginación de ánimes de temporada
let paginaAnterior;
let paginaSiguiente;
let paginaActual = new URLSearchParams(window.location.search).get('pagina');
let principio;
let final;

/**
 * @description Función para buscar información de un anime
 * @param {String} anime Anime a buscar
 * @return {Promise}
 */
async function getAnime(anime) {

    let response = await fetch(`${API_BASE}search/anime?q=${anime}`);
    let data = await response.json();

    return data;

}

/**
 * @description Función para mostrar los animes de temporada
 */
function getAnimeTemporada() {

    fetch(`${API_BASE}season`)
        .then (response => {
            return response.json();
        })
        .then (data => {
            let animes = [];

            paginaActual = new URLSearchParams(window.location.search).get('pagina');
            if (!paginaActual) paginaActual = 1;
            paginaActual = parseInt(paginaActual);

            paginaAnterior = paginaActual - 1;
            paginaSiguiente = paginaActual + 1;

            principio = (paginaActual - 1) * MAX_ANIMES;
            final = principio + MAX_ANIMES;

            if (final > data.anime.length)
                final = principio + 1;


            for (principio = (paginaActual - 1) * MAX_ANIMES; principio < final; principio++) {
                let element = data.anime[principio];

                animes.push(element);
            }

            animesDeTemporadaControlador(animes, paginaAnterior, paginaActual, paginaSiguiente, numPaginas);

        });

}

function mostrarCarga() {

    document.getElementById('imagenCargar').style.display = '';


}

function ocultarCarga() {

    document.getElementById('imagenCargar').style.display = 'none';

}