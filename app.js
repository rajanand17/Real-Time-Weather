async function getWeather() {
  console.log('getWeather called');
  const city = document.getElementById('cityInput').value;
  if (!city) {
    document.getElementById('weatherResult').innerText = 'Please enter a city name.';
    return;
  }
  document.getElementById('weatherResult').innerText = 'Loading...';
  try {
    // Replace YOUR_API_KEY with a valid OpenWeatherMap API key
    const apiKey = '41686a70d632a28f536272e092c3a7cc';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    document.getElementById('weatherResult').innerHTML =
      '<strong>' + data.name + ', ' + data.sys.country + '</strong><br>' +
      'Temperature: ' + data.main.temp + '°C<br>' +
      'Weather: ' + data.weather[0].description + '<br>' +
      'Humidity: ' + data.main.humidity + '%<br>' +
      'Wind: ' + data.wind.speed + ' m/s';
  } catch (error) {
    document.getElementById('weatherResult').innerText = 'Error: ' + error.message;
  }
}
