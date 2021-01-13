window.onload = () => {

    let botonBuscar = document.getElementById('buscarBoton');
    let inputBuscar = document.getElementById('buscarJugadorInput');

    const sectionAnimesDetemporada = document.getElementById('sectionAnimesDeTemporada');
    const sectionResultadoBusqueda = document.getElementById('sectionResultadosBusqueda');

    sectionResultadoBusqueda.style.display = 'none';


    getAnimeTemporada();
 
    
    botonBuscar.addEventListener('click', () => {

        let anime = inputBuscar.value;

        // TODO buscar anime o manga
        buscar('anime', anime)
            .then(resultado => {
                sectionAnimesDetemporada.style.display = 'none';

                // TODO Crear vista para los resultados (Quitar parámetro pagina de la url y añadir la query)
                sectionResultadoBusqueda.style.display = '';

                mostrarResultadosBusquedaControlador(resultado, anime);
            });

        


    });

}