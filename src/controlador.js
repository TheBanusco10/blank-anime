function animesDeTemporadaControlador(animes, paginacion) {

    document.getElementById('animesDeTemporada').innerHTML = animesDeTemporadaVista(animes, paginacion);
    document.getElementById('paginacion').innerHTML = paginacionVista(paginacion);
}

function mostrarAnimeControlador(anime) {

    document.getElementById('info').innerHTML = mostrarAnimeVista(anime);
            
    document.getElementById('volver').innerHTML = `<a href="index.html?pagina=${paginacion.paginaActual}" class="button" target="_self">Volver</a>`;

}

