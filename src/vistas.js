/**
 * 
 * @param {Array} animes Animes para mostrar
 * @param {Paginacion} paginacion 
 * @param {Boolean} busqueda True si estamos buscando anime o manga
 * @param {String} query Anime o manga buscado
 */
function animesDeTemporadaVista(animes, paginacion, busqueda, query) {
    
    let contenido = '';

    let urlHaciaVista = '';

    animes.forEach(element => {

        let puntuacion = element.score ? element.score.toFixed(1) : 'N/A';
        let episodios =  element.episodes ? `${element.episodes} episodios` : 'N / A';

        if (busqueda) {
            urlHaciaVista = `view.html?anime=${element.title}&query=${query}`;
        }else {
            urlHaciaVista = `view.html?anime=${element.title}&pagina=${paginacion.paginaActual}`;
        }

        // Cambiamos las posibles comillas dobles en el título de un anime a unas simples para evitar
        // errores en la etiqueta "a" de html
        let regex = /"/g;
        element.title = element.title.replace(regex, "'");

        contenido +=  `
    
            <div class="card">
                <div class="image">
                    <a href="${urlHaciaVista}" target="_self">
                        <img src="${element.image_url}" alt="${element.title}">
                    </a>
                    <p class="puntuacion">${puntuacion}</p>
                </div>
                <p class="titulo"><a href="${urlHaciaVista}" target="_self">${acortarString(element.title, 40)}</a></p>
                <p class="sinopsis">${acortarString(element.synopsis, 100)}</p>
                <p class="episodios">${episodios}</p>
            </div>

            `;
    
    
    });

    return contenido;

}

function paginacionVista(paginacion) {

    let contenido = '';

    if (paginacion.paginaActual == 1) {
        contenido = `
            <p>
                <a href="index.html?pagina=${paginacion.paginaActual}" target="_self">${paginacion.paginaActual}</a> | 
                <a href="index.html?pagina=${paginacion.paginaSiguiente}" target="_self">${paginacion.paginaSiguiente}</a> ...
                <a href="index.html?pagina=${paginacion.paginaFinal}" target="_self">${paginacion.numPaginas}</a>
            </p>
        `;
    }else if (paginacion.paginaActual == paginacion.numPaginas) {
        contenido = `
            <p>
                <a href="index.html?pagina=1" target="_self">1</a> ...
                <a href="index.html?pagina=${paginacion.paginaAnterior}" target="_self">${paginacion.paginaAnterior}</a> | 
                <a href="index.html?pagina=${paginacion.paginaActual}" target="_self">${paginacion.paginaActual}</a>
            </p>
        `;
    }else {
        contenido = `
            <p>
                <a href="index.html?pagina=1" target="_self">1</a> ...
                <a href="index.html?pagina=${paginacion.paginaAnterior}" target="_self">${paginacion.paginaAnterior}</a> | 
                <a href="index.html?pagina=${paginacion.paginaActual}" target="_self">${paginacion.paginaActual}</a> | 
                <a href="index.html?pagina=${paginacion.paginaSiguiente}" target="_self">${paginacion.paginaSiguiente}</a> ...
                <a href="index.html?pagina=${paginacion.numPaginas}" target="_self">${paginacion.numPaginas}</a>
            </p>
        `;
    }

    return contenido;

}

function mostrarAnimeVista(anime) {
    
    let {image_url, title, synopsis, type, score, airing, rating, genres} = anime;

    let genresHTML = '';
    genres.forEach(element => {
        genresHTML += `
        
            <p class="four columns">${element.name}</p>

        `;
    });

    airing = airing ? 'En emisión' : 'Finalizado';
    synopsis = synopsis ? synopsis : 'No hay una descripción disponible en estos momentos.';

    return `

        <div class="four columns">
            <img src="${image_url}" alt="${title}">
                <div class="subImagen">
                    <p>${type}</p>
                    <p>${score}</p>
                </div>
                <p class="text-bold">${rating}</p> 
                <p class="text-bold">${airing}</p>
        </div>
        <div class="eight columns">
            <p class="titulo">${title}</p>
            <p class="sinopsis">${synopsis}</p>
            <div class="row">

                <div class="twuelve columns generos">

                    ${genresHTML}
                
                </div>

            </div>
        </div>
    
    
    `; 



}