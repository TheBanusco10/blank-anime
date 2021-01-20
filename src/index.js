// window.onload = () => {

//     cargarVersionApp();

//     let botonBuscar = document.getElementById('buscarBoton');
//     let inputBuscar = document.getElementById('buscarAnimaMangaInput');
//     let opcionBusqueda = document.getElementById('busquedaOpcion');

//     const sectionAnimesDetemporada = document.getElementById('sectionAnimesDeTemporada');
//     const sectionResultadoBusqueda = document.getElementById('sectionResultadosBusqueda');

//     sectionResultadoBusqueda.style.display = 'none';

//     if (new URLSearchParams(window.location.search).has('query') && new URLSearchParams(window.location.search).has('type')) {
        
//         let query = new URLSearchParams(window.location.search).get('query');
//         let type = new URLSearchParams(window.location.search).get('type');

//         inputBuscar.value = query;
        
//         buscar(type, query)
//             .then(resultado => {
//                 sectionAnimesDetemporada.style.display = 'none';

//                 sectionResultadoBusqueda.style.display = '';

//                 mostrarResultadosBusquedaControlador(resultado, query, type);
//             });
//     }else {

//         getAnimeTemporada();
 
    
//         botonBuscar.addEventListener('click', () => {
    
//             let anime = inputBuscar.value;
    
//             let opcionSeleccionada = opcionBusqueda.value;
    
//             buscar(opcionSeleccionada, anime)
//                 .then(resultado => {
//                     sectionAnimesDetemporada.style.display = 'none';
    
//                     sectionResultadoBusqueda.style.display = '';
    
//                     let query = anime;
    
//                     mostrarResultadosBusquedaControlador(resultado, query, opcionSeleccionada);
//                 });
    
            
    
    
//         });
//     }
    

// }