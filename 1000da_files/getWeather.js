// v3.1.0
//Docs at http://simpleweatherjs.com
// var $ = jQuery.noConflict(true);

$(document).ready(function() {
  getWeather();
  setInterval(getWeather, 1000 * 20); //SET WEATHER UPDATE INTERVAL
});
function getWeather(){

  $.simpleWeather({
    location: '98109',
    woeid: '',
    unit: 'f',
    success: function(weather) {
		console.log(weather);
      html = '<h2><ul><li class="symbol"><img src="weather/ico/'+weather.code+'.PNG" height="75"/></li><li><h3><span class="currently">'+weather.currently+'</span></h3></li><li class="temp"><strong>'+weather.high+'&deg;</strong> / '+weather.low+'&deg;</li></ul></h2>';
      // html += '<li class="currently">'+weather.currently+'</li>';
      // html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather-data").html(html);
      var forecastHtml = '<ul class="forecast">';
      for(var i=0;i<3;i++) {
        forecastHtml += '<li>'+'<p class="forecast-day">'+moment(weather.forecast[i].date).format('ddd')+'</p>'+'<p class="forecast-symbol">'+'<i class="weather icon-'+weather.forecast[i].code+'"></i>'+'</p></li>';
      }
      forecastHtml += '</ul>';
      //$("#weather-data").append(forecastHtml); //COMMENT THIS OUT TO DISABLE MULTI-DAY FORECAST
    },
    error: function(error) {
      getWeather();
      //$("#weather-data").html('<p>'+error+'</p>');
    }
  });
}