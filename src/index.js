window.onload = () => {

    let botonBuscar = document.getElementById('buscarBoton');
    let inputBuscar = document.getElementById('buscarJugadorInput');

    getAnimeTemporada();
 
    
    botonBuscar.addEventListener('click', () => {

        let anime = inputBuscar.value;

        buscar('manga', anime);


    });

}