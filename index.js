const contenedor = document.querySelector('.contenedor');
const buscar = document.querySelector('.cuadro-busqueda button');
const cuadroMeteorologico = document.querySelector('.cuadro-meteorologico');
const detallesMeteorologicos = document.querySelector('.detalles-meteorologicos');
const noEncontrado = document.querySelector('.no-encontrado');

buscar.addEventListener('click', () => {

    const APIKey = 'b992c3fe25c539c46e5c1baff6194f68'; // Reemplaza con tu API Key
    const ciudad = document.querySelector('.cuadro-busqueda input').value;

    if (ciudad === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${APIKey}&lang=es`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                contenedor.style.height = '400px';
                cuadroMeteorologico.style.display = 'none';
                detallesMeteorologicos.style.display = 'none';
                noEncontrado.style.display = 'block';
                noEncontrado.classList.add('fadeIn');
                return;
            }

            if (!json.weather || !json.weather[0]) {
                console.log('Error: No se encontraron datos meteorológicos para la ciudad ingresada.');
                return;
            }

            noEncontrado.style.display = 'none';
            noEncontrado.classList.remove('fadeIn');

            const imagen = document.querySelector('.cuadro-meteorologico img');
            const temperatura = document.querySelector('.cuadro-meteorologico .temperatura');
            const descripcion = document.querySelector('.cuadro-meteorologico .descripcion');
            const humedad = document.querySelector('.detalles-meteorologicos .humedad span');
            const viento = document.querySelector('.detalles-meteorologicos .viento span');

            switch (json.weather[0].main) {
                case 'Clear':
                    imagen.src = 'img/clear.png';
                    break;

                case 'Rain':
                    imagen.src = 'img/rain.png';
                    break;

                case 'Snow':
                    imagen.src = 'img/snow.png';
                    break;

                case 'Clouds':
                    imagen.src = 'img/cloud.png';
                    break;

                case 'Haze':
                    imagen.src = 'img/mist.png';
                    break;

                default:
                    imagen.src = '';
            }

            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            descripcion.innerHTML = `${json.weather[0].description}`;
            humedad.innerHTML = `${json.main.humidity}%`;
            viento.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            cuadroMeteorologico.style.display = '';
            detallesMeteorologicos.style.display = '';
            cuadroMeteorologico.classList.add('fadeIn');
            detallesMeteorologicos.classList.add('fadeIn');
            contenedor.style.height = '590px';

        })
        .catch(error => {
            console.log('Error al consumir la API:', error);
        });

});
