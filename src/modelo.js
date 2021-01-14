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

// Sistema búsqueda
let buscarMostrado = false;


/**
 * @description Función para buscar información de un anime
 * @param {String} busqueda Anime o manga a buscar
 * @param {String} tipo anime o manga
 * @return {Promise}
 */
async function getInformacion(busqueda, tipo) {

    let response = await fetch(`${API_BASE}search/${tipo}?q=${busqueda}`);
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

            paginar(animes, data.anime, paginacion);
            animesDeTemporadaControlador(animes, paginacion);

        });

}

/**
 * 
 * @param {String} tipo Anime o manga
 * @param {String} texto Anime o manga a buscar
 */
async function buscar(tipo, texto) {

    let response = await fetch(`${API_BASE}search/${tipo}?q=${texto}`);
    let data = await response.json();

    let resultado = data.results.filter(element => element.title.toLowerCase().includes(texto.toLowerCase()));

    return resultado;


}

function paginar(animes, data, paginacion) {

    paginacion.numPaginas = Math.ceil(data.length / MAX_ANIMES);

    paginacion.paginaActual = new URLSearchParams(window.location.search).get('pagina');

    if (!paginacion.paginaActual) paginacion.paginaActual = 1;
    paginacion.paginaActual = parseInt(paginacion.paginaActual);

    paginacion.paginaAnterior = paginacion.paginaActual - 1;
    paginacion.paginaSiguiente = paginacion.paginaActual + 1;

    paginacion.principio = (paginacion.paginaActual - 1) * MAX_ANIMES;
    paginacion.final = paginacion.principio + MAX_ANIMES;

    if (paginacion.final > data.length)
        paginacion.final = paginacion.principio + 1;


    for (paginacion.principio = (paginacion.paginaActual - 1) * MAX_ANIMES; paginacion.principio < paginacion.final; paginacion.principio++) {
        let element = data[paginacion.principio];

        animes.push(element);
    }

}

/**
 * 
 * @param {String} s String a acortar
 * @param {Integer} n Número de palabras a acortar
 */
function acortarString(s, n){
    var cut= s.indexOf(' ', n);
    if(cut== -1) return s;
    return s.substring(0, cut) + ' ...';
}

/**
 * @description Muestra u oculta el menú de búsqueda
 */
function mostrarBuscar() {

    if(!buscarMostrado) {

        document.getElementById('pagTitulo').style.display = 'none';
        document.getElementById('buscar').style.display = 'inline';
        document.getElementsByClassName('headerContenedor')[0]
    
    }else {

        document.getElementById('pagTitulo').style.display = '';
        document.getElementById('buscar').style.display = 'none';
    
    }

    buscarMostrado = !buscarMostrado;

    
}

function mostrarCarga() {

    document.getElementById('imagenCargar').style.display = '';


}

function ocultarCarga() {

    document.getElementById('imagenCargar').style.display = 'none';

}