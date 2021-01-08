window.onload = () => {

    getAnimeTemporada(6);
}


function animesDeTemporadaControlador(animes) {

    document.getElementById('animesDeTemporada').innerHTML = animesDeTemporadaVista(animes);

}

