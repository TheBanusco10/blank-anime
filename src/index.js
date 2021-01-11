window.onload = () => {

    let botonBuscar = document.getElementById('buscarBoton');
    let inputBuscar = document.getElementById('buscarJugadorInput');

    getAnimeTemporada();
 
    
    botonBuscar.addEventListener('click', () => {

        let anime = inputBuscar.value;

        // TODO buscar anime o manga
        buscar('anime', anime)
            .then(resultado => {
                document.getElementById('sectionAnimesDeTemporada').style.display = 'none';

                // TODO Crear vista para los resultados (Quitar parámetro pagina de la url y añadir la query)
                document.getElementById('resultadoBusqueda').innerHTML = animesDeTemporadaVista(resultado, paginacion);
            });

        


    });

}