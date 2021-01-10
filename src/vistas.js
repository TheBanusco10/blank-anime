
// TODO límite de palabras en la sinopsis de los animes. (Se desborda de normal)
function animesDeTemporadaVista(animes, pagActual) {
    
    let contenido = '';

    animes.forEach(element => {

        let puntuacion = element.score ? element.score.toFixed(1) : 'N/A';
        let episodios =  element.episodes ? `${element.episodes} episodios` : 'N / A';

        // Cambiamos las posibles comillas dobles en el título de un anime a unas simples para evitar
        // errores en la etiqueta "a" de html
        let regex = /"/g;
        element.title = element.title.replace(regex, "'");

        contenido +=  `
    
            <div class="card">
                <div class="image">
                    <img src="${element.image_url}" alt="${element.title}">
                    <p class="puntuacion">${puntuacion}</p>
                </div>
                <p class="titulo"><a href="view.html?anime=${element.title}&pagina=${pagActual}" target="_self">${element.title}</a></p>
                <p class="sinopsis">${element.synopsis.substring(0, 40)}</p>
                <p class="episodios">${episodios}</p>
            </div>

            `;
    
    
    });

    return contenido;

}

function paginacionVista(pagAnterior, pagActual, pagSiguiente, pagFinal) {

    let contenido = '';

    if (pagActual == 1) {
        contenido = `
            <p>
                <a href="index.html?pagina=${pagActual}" target="_self">${pagActual}</a> | 
                <a href="index.html?pagina=${pagSiguiente}" target="_self">${pagSiguiente}</a> ...
                <a href="index.html?pagina=${pagFinal}" target="_self">${pagFinal}</a>
            </p>
        `;

    }else if (pagActual == pagFinal) {
        contenido = `
            <p>
                <a href="index.html?pagina=1" target="_self">1</a> ...
                <a href="index.html?pagina=${pagAnterior}" target="_self">${pagAnterior}</a> | 
                <a href="index.html?pagina=${pagActual}" target="_self">${pagActual}</a>
            </p>
        `;
    }else {
        contenido = `
            <p>
                <a href="index.html?pagina=1" target="_self">1</a> ...
                <a href="index.html?pagina=${pagAnterior}" target="_self">${pagAnterior}</a> | 
                <a href="index.html?pagina=${pagActual}" target="_self">${pagActual}</a> | 
                <a href="index.html?pagina=${pagSiguiente}" target="_self">${pagSiguiente}</a> ...
                <a href="index.html?pagina=${pagFinal}" target="_self">${pagFinal}</a>
            </p>
        `;
    }

    return contenido;

}

function mostrarAnimeVista(anime) {
    console.log(anime);
    let {image_url, title, synopsis, type, score, airing, rating} = anime;

    airing = airing ? 'En emisión' : 'Finalizado';
    synopsis = synopsis ? synopsis : 'No hay una descripción disponible en estos momentos.';

    // TODO Mostrar género también
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
        </div>
    
    
    `; 



}