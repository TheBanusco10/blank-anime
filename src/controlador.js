function animesDeTemporadaControlador(animes, paginacion) {

    document.getElementById('animesDeTemporada').innerHTML = animesDeTemporadaVista(animes, paginacion);
    document.getElementById('paginacion').innerHTML = paginacionVista(paginacion);
}

function mostrarAnimeOMangaControlador(informacion, tipo) {

    let info = document.getElementById('info');
    
    if (tipo === 'anime') {
        info.innerHTML = mostrarAnimeVista(informacion);

        // paginacion.paginaActual = paginacion.paginaActual ? paginacion.paginaActual : 1;
        // document.getElementById('volver').innerHTML = `<a href="index.html?pagina=${paginacion.paginaActual}" class="button" target="_self">Volver</a>`;
    
    }else {

        info.innerHTML = mostrarMangaVista(informacion);

    }

    
}

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

