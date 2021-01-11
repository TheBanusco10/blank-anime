const API_BASE = 'https://api.jikan.moe/v3/';
const MAX_ANIMES = 8;

// Paginación de ánimes de temporada
let paginacion = {
    paginaAnterior: null,
    paginaSiguiente: null,
    paginaActual : new URLSearchParams(window.location.search).get('pagina'),
    numPaginas: null,
    principio: null,
    final: null
}
// let paginaAnterior;
// let paginaSiguiente;
// let paginaActual = new URLSearchParams(window.location.search).get('pagina');
// let numPaginas;
// let principio;
// let final;


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

            paginar(animes, data, paginacion);

            // numPaginas = Math.ceil(data.anime.length / MAX_ANIMES);

            // paginaActual = new URLSearchParams(window.location.search).get('pagina');

            // if (!paginaActual) paginaActual = 1;
            // paginaActual = parseInt(paginaActual);

            // paginaAnterior = paginaActual - 1;
            // paginaSiguiente = paginaActual + 1;

            // principio = (paginaActual - 1) * MAX_ANIMES;
            // final = principio + MAX_ANIMES;

            // if (final > data.anime.length)
            //     final = principio + 1;


            // for (principio = (paginaActual - 1) * MAX_ANIMES; principio < final; principio++) {
            //     let element = data.anime[principio];

            //     animes.push(element);
            // }

            // animesDeTemporadaControlador(animes, paginaAnterior, paginaActual, paginaSiguiente, numPaginas);
            animesDeTemporadaControlador(animes, paginacion);

        });

}

// TODO Implementar paginación
/**
 * 
 * @param {String} tipo Anime o manga
 * @param {String} texto Anime o manga a buscar
 */
async function buscar(tipo, texto) {

    let response = await fetch(`${API_BASE}search/${tipo}?q=${texto}`);
    let data = await response.json();

    let resultado = data.results.filter(element => element.title.toLowerCase().includes(texto.toLowerCase()));

    console.log(data);
    console.log(resultado);


}

function paginar(animes, data, paginacion) {

    paginacion.numPaginas = Math.ceil(data.anime.length / MAX_ANIMES);

    paginacion.paginaActual = new URLSearchParams(window.location.search).get('pagina');

    if (!paginacion.paginaActual) paginacion.paginaActual = 1;
    paginacion.paginaActual = parseInt(paginacion.paginaActual);

    paginacion.paginaAnterior = paginacion.paginaActual - 1;
    paginacion.paginaSiguiente = paginacion.paginaActual + 1;

    paginacion.principio = (paginacion.paginaActual - 1) * MAX_ANIMES;
    paginacion.final = paginacion.principio + MAX_ANIMES;

    if (paginacion.final > data.anime.length)
        paginacion.final = paginacion.principio + 1;


    for (paginacion.principio = (paginacion.paginaActual - 1) * MAX_ANIMES; paginacion.principio < paginacion.final; paginacion.principio++) {
        let element = data.anime[paginacion.principio];

        animes.push(element);
    }

}

function mostrarCarga() {

    document.getElementById('imagenCargar').style.display = '';


}

function ocultarCarga() {

    document.getElementById('imagenCargar').style.display = 'none';

}