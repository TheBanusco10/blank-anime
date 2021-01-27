window.onload = () => {

    cargarVersionApp();

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