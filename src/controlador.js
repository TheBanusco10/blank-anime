function animesDeTemporadaControlador(animes, paginacion) {

    document.getElementById('animesDeTemporada').innerHTML = animesDeTemporadaVista(animes, paginacion);
    document.getElementById('paginacion').innerHTML = paginacionVista(paginacion);
}

function mostrarAnimeControlador(anime) {

    document.getElementById('info').innerHTML = mostrarAnimeVista(anime);
            
    document.getElementById('volver').innerHTML = `<a href="index.html?pagina=${paginacion.paginaActual}" class="button" target="_self">Volver</a>`;

}

// TODO Cambiar url de paginación y hacerlo más dinámico

function mostrarResultadosBusquedaControlador(resultados) {

    let animes = [];

    paginar(animes, resultados, paginacion);
    document.getElementById('resultadoBusqueda').innerHTML = animesDeTemporadaVista(animes, paginacion);
    document.getElementById('paginacionResultados').innerHTML = paginacionVista(paginacion);

}

