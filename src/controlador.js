function animesDeTemporadaControlador(animes, paginacion) {

    document.getElementById('animesDeTemporada').innerHTML = animesDeTemporadaVista(animes, paginacion);
    document.getElementById('paginacion').innerHTML = paginacionVista(paginacion);
}

function mostrarAnimeOMangaControlador(informacion, tipo) {

    if (tipo === 'anime') {
        document.getElementById('info').innerHTML = mostrarAnimeVista(informacion);
            
        // TODO Si es una búsqueda, cambiar el parámetro por la query
        document.getElementById('volver').innerHTML = `<a href="index.html?pagina=${paginacion.paginaActual}" class="button" target="_self">Volver</a>`;
    
    }else {

        document.getElementById('info').innerHTML = mostrarMangaVista(informacion);

    }

    
}

// TODO Cambiar url de paginación y hacerlo más dinámico

function mostrarResultadosBusquedaControlador(resultados, query, opcionSeleccionada) {

    switch (opcionSeleccionada) {
        case 'anime':
            document.getElementById('resultadoBusqueda').innerHTML = animesDeTemporadaVista(resultados, paginacion, true, query);
            break;

        case 'manga':
            document.getElementById('resultadoBusqueda').innerHTML = mangasResultadosVista(resultados, query);
            break;

    }

}

