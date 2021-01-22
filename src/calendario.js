window.onload = () => {

    let dias = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ]

    let contenido = document.querySelector('#calendarioContenido');

    getCalendario('monday')
        .then( data => {

            dias.forEach(element => {

                contenido.innerHTML += `<h4>${element}</h4>`;

                calendarioControlador(data[element]);
                
            });

            // console.log(data.monday);

        });

}