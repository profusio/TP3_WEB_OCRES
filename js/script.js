
// Fonction appelée lors du click du bouton
function start(city) {

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
  /*
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })*/


    .getThreeDayForecast()

    .then(function(response) {

      const data = response.data;
      
      var main=new Array(4);
      var description=new Array(4);
      var icone=new Array(4);
      var temps=new Array(4);

      main[0]=data.list[0].weather[0].main;
      description[0]= data.list[0].weather[0].description;
      temps[0] = data.list[0].temp.day;
      icone[0] = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      console.log(main[0]);
      
      main[1]=data.list[1].weather[0].main;
      description[1]= data.list[1].weather[0].description;
      temps[1] = data.list[1].temp.day;
      icone[1] = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      
      main[2]=data.list[2].weather[0].main;
      description[2]= data.list[2].weather[0].description;
      temps[2] = data.list[2].temp.day;
      icone[2] = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      main[3]=data.list[3].weather[0].main;
      description[3]= data.list[3].weather[0].description;
      temps[3] = data.list[3].temp.day;
      icone[3] = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);
      
      document.getElementById('today-forecast-main').innerHTML = main[0];
      document.getElementById('today-forecast-more-info').innerHTML = description[0];
      document.getElementById('icon-weather-container').innerHTML = icone[0];
      document.getElementById('today-forecast-temp').innerHTML = `${temps[0]}°C`;

      document.getElementById('tomorrow-forecast-main').innerHTML = main[1];
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description[1];
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icone[1];
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temps[1]}°C`;

      document.getElementById('after-tomorrow-forecast-main').innerHTML = main[2];
      document.getElementById('after-tomorrow-forecast-more-info').innerHTML = description[2];
      document.getElementById('after-tomorrow-icon-weather-container').innerHTML = icone[2];
      document.getElementById('after-tomorrow-forecast-temp').innerHTML = `${temps[2]}°C`;

      document.getElementById('after-after-tomorrow-forecast-main').innerHTML = main[3];
      document.getElementById('after-after-tomorrow-forecast-more-info').innerHTML = description[3];
      document.getElementById('after-after-tomorrow-icon-weather-container').innerHTML = icone[3];
      document.getElementById('after-after-tomorrow-forecast-temp').innerHTML = `${temps[3]}°C`;

    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function Refresh() {

var city = document.getElementById("city-input").value;
start(city);

}
