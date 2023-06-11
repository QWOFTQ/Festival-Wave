const apiKey = 'c5dbdfd4545623c7d0ab0fd0856e5feb'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block'
    document.querySelector('.weather').style.display = 'none'
  } else {
    var data = await response.json()

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + 'm/s'

    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'img/weather/clouds.png'
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'img/weather/clear.png'
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'img/weather/rain.png'
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'img/weather/drizzle.png'
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'img/weather/mist.png'
    }

    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value)
})
