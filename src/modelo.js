const API_BASE = 'https://api.jikan.moe/v3/';
const MAX_ANIMES = 8;
const APP_VERSION = 'Beta 0.21v';

// Paginación de ánimes de temporada
let paginacion = {
    paginaAnterior: null,
    paginaSiguiente: null,
    paginaActual : new URLSearchParams(window.location.search).get('pagina'),
    numPaginas: null,
    principio: null,
    final: null
}


// Funciones estructura general HTML

function cargarVersionApp() {

    document.getElementById('versionApp').innerHTML = APP_VERSION;

}

// Funciones generales

/**
 * @description Función para buscar información de un anime
 * @param {String} busqueda Anime o manga a buscar
 * @param {String} tipo anime o manga
 * @returns {Promise}
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
            mostrarCarga();
            return response.json();
        })
        .then (data => {
            let animes = [];

            console.log(data);

            ocultarCarga();
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

function mostrarCarga() {

    document.getElementById('imagenCargar').style.display = '';


}

function ocultarCarga() {

    document.getElementById('imagenCargar').style.display = 'none';

}

/**
 * @description Formatea la fecha en formato 'es'
 * @param {String} fecha Fecha a formatear
 * @returns {String} string de fecha con formato 'es'. Si la fecha es inválida, devuelve el parámetro pasado a la función
 */
function formatearFecha(fecha) {

    let fechaFormateada = '';

    if (isNaN(Date.parse(fecha)))
        return fecha;

    let fechaObjeto = new Date(fecha);

    // Añadimos 0 a la izquierda si es necesario en el día y mes
    let dia = fechaObjeto.getDate() < 10 ? `0${fechaObjeto.getDate()}` : fechaObjeto.getDate();
    let mes = fechaObjeto.getMonth() < 10 ? `0${fechaObjeto.getMonth() + 1}` : fechaObjeto.getMonth() + 1;

    fechaFormateada = `${dia}-${mes}-${fechaObjeto.getFullYear()}`;
    

    return fechaFormateada;

}

/**
 * @description Formatea string con el día de emisión que proviene de la API
 * @param {String} broadcast cadena de texto para formatear (Sundays at 23:00 (JST))
 * @returns {String} String con la fecha formateada
 */
function formatearDiaEmision(broadcast) {

    let array = broadcast.split(' ');
    let dias = {

        Monday: 'Lunes',
        Tuesdays: 'Martes',
        Wednesday: 'Miércoles',
        Thursdays: 'Jueves',
        Fridays: 'Viernes',
        Saturdays: 'Sábados',
        Sundays: 'Domingos'

    }

    console.log(array);

    return `${dias[array[0]]} a las ${array[2]} ${array[3]}`;

}

/**
 * 
 * @param {String} titulo título a formatear
 * @param {String} origen RegExp a buscar
 * @param {String} final string por el que se reemplaza
 * @returns {String} título formateado
 */
function formatearTitulo(titulo, origen, final) {
    let regex = new RegExp(`${origen}`, 'g')
    return titulo.replace(regex, `${final}`);
}

function mostrarPagError(error) {

    window.location = `errorPage.html?error=${error}`;

}

/**
 * @description Devuelve el calendario de emisión del día pasado por parámetro
 * @param {String} dia Día de la semana para buscar EN INGLÉS
 * @returns {Promise} promise
 */
async function getCalendario(dia) {

    let response = await fetch(`${API_BASE}schedule/${dia}`);

    return await response.json();

}