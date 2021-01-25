window.onload = () => {

    // let dias = [
    //     'monday',
    //     'tuesday',
    //     'wednesday',
    //     'thursday',
    //     'friday',
    //     'saturday',
    //     'sunday'
    // ]

    let dias = {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo'
    }

    let diasIngles = Object.keys(dias);

    let contenido = document.querySelector('#calendarioContenido');

    // diasIngles.forEach(element => {
    //     console.log(element, dias[element]);
    // });

    getCalendario('monday')
        .then( data => {

            diasIngles.forEach(element => {

                contenido.innerHTML += `
                
                    <h4>${dias[element]}</h4>
                    
                    <div class="separadorContenedor">
                        <div class="separador"></div>
                    </div>
                
                `;

                calendarioControlador(data[element]);
                
            });

            ocultarCarga();

            // console.log(data.monday);

        });

}