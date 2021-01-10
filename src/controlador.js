function animesDeTemporadaControlador(animes, pagAnterior, pagActual, pagSiguiente, pagFinal) {

    document.getElementById('animesDeTemporada').innerHTML = animesDeTemporadaVista(animes, pagActual);
    document.getElementById('paginacion').innerHTML = paginacionVista(pagAnterior, pagActual, pagSiguiente, pagFinal);
}

function mostrarAnimeControlador(anime) {

    document.getElementById('info').innerHTML = mostrarAnimeVista(anime);
            
    document.getElementById('volver').innerHTML = `<a href="index.html?pagina=${paginaActual}" class="button" target="_self">Volver</a>`;

}

