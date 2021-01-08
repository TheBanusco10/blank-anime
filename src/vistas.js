function animesDeTemporadaVista(animes) {
    
    let contenido = '';

    animes.forEach(element => {

        let puntuacion = element.score ? element.score.toFixed(1) : '?';
        let episodios =  element.episodes ? element.episodes : 'Desconocidos'

        contenido +=  `
    
            <div class="card">
                <div class="image">
                    <img src="${element.image_url}" alt="${element.title}">
                    <p class="puntuacion">${puntuacion}</p>
                </div>
                <p class="titulo"><a href="${element.url}" target="_blank">${element.title}</a></p>
                <p class="sinopsis">${element.synopsis}</p>
                <p class="episodios">${episodios} episodios</p>
            </div>

            `;
    
    
    });

    return contenido;

    

}