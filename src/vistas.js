function animesDeTemporadaVista(animes) {
    
    let contenido = '';

    animes.forEach(element => {

        let puntuacion = element.score ? element.score.toFixed(1) : 'N/A';
        let episodios =  element.episodes ? `${element.episodes} episodios` : 'N / A'

        contenido +=  `
    
            <div class="card">
                <div class="image">
                    <img src="${element.image_url}" alt="${element.title}">
                    <p class="puntuacion">${puntuacion}</p>
                </div>
                <p class="titulo"><a href="view.html?anime=${element.title}" target="_self">${element.title}</a></p>
                <p class="sinopsis">${element.synopsis}</p>
                <p class="episodios">${episodios}</p>
            </div>

            `;
    
    
    });

    return contenido;

}

function mostrarAnimeVista(anime) {
    
    let {image_url, title, synopsis, type, score, airing, rated} = anime;

    airing = airing ? 'En emisión' : 'Finalizado';

    // TODO Mostrar género también
    return `

        <div class="four columns">
            <img src="${image_url}" alt="${title}">
                <div class="subImagen">
                    <p>${type}</p>
                    <p>${score}</p>
                    <p><a href="https://myanimelist.net/info.php?go=mpaa" target="_blank">${rated}</a></p> 
                    <p>${airing}</p>
                </div>
            </div>
            <div class="eight columns">
                <p class="titulo">${title}</p>
                <p class="sinopsis">${synopsis}</p>
        </div>
    
    
    `; 



}