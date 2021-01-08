const API_BASE = 'https://api.jikan.moe/v3/';

function getApp() {

    return document.getElementById('app');

}

async function getAnime(anime) {

    let response = await fetch(`${API_BASE}search/anime?q=${anime}`);
    let data = await response.json();

    return data;

}

function getAnimeTemporada(numAnimes) {

    fetch(`${API_BASE}season`)
        .then (response => {
            return response.json();
        })
        .then (data => {
            let animes = [];
            for (let index = 0; index < numAnimes; index++) {
                const element = data.anime[index];
                animes.push(element);
            }

            animesDeTemporadaControlador(animes);

        });

}

function mostrarCarga() {

    document.getElementById('imagenCargar').style.display = '';


}

function ocultarCarga() {

    document.getElementById('imagenCargar').style.display = 'none';

}