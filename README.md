# Aplicación Meteorológica

## Descripción

Esta aplicación meteorológica te permite obtener información sobre el clima actual de cualquier ciudad del mundo. La aplicación muestra la temperatura, la descripción del clima, la humedad y la velocidad del viento, así como un icono que representa las condiciones meteorológicas actuales.

## Tecnologías Utilizadas

- **HTML**: Para estructurar el contenido de la página.
- **CSS**: Para el diseño y la apariencia de la aplicación.
- **JavaScript**: Para la funcionalidad dinámica y el consumo de la API.
- **Font Awesome**: Para los iconos utilizados en la aplicación.
- **OpenWeatherMap API**: Para obtener los datos meteorológicos en tiempo real.

## Estructura del Proyecto

- `index.html`: Archivo HTML que contiene la estructura de la aplicación.
- `estilo.css`: Archivo CSS que define el estilo y diseño de la aplicación.
- `index.js`: Archivo JavaScript que maneja la lógica de la aplicación y el consumo de la API.
- `img/`: Carpeta que contiene las imágenes para los diferentes estados del clima.
- `img/404.png`: Imagen mostrada cuando la ubicación no es válida.

## Uso

1. Clona el repositorio o descarga los archivos del proyecto.
2. Asegúrate de tener una conexión a Internet para consumir la API.
3. Abre el archivo `index.html` en tu navegador.

## Cómo Funciona

1. **Búsqueda de Ciudad**:
   - Ingresa el nombre de la ciudad en el campo de búsqueda y presiona el botón de búsqueda.
   - La aplicación envía una solicitud a la API de OpenWeatherMap para obtener la información meteorológica de la ciudad ingresada.

2. **Muestra de Resultados**:
   - Si la ciudad es válida, se muestran el clima actual, la temperatura, la descripción, la humedad y la velocidad del viento.
   - Si la ciudad no es válida, se muestra una imagen y un mensaje de error.

## API Utilizada

- **OpenWeatherMap API**: [https://openweathermap.org/api](https://openweathermap.org/api)
  - **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
  - **Parámetros**:
    - `q`: Nombre de la ciudad.
    - `units`: Unidades de temperatura (`metric` para grados Celsius).
    - `appid`: Tu clave API (reemplaza `'b992c3fe25c539c46e5c1baff6194f68'` con tu propia clave).
    - `lang`: Idioma de la descripción (`es` para español).

## Ejemplo de Uso

```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ciudad&units=metric&appid=TuApiKey&lang=es`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });