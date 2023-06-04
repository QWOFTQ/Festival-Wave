fetch('https://goweather.herokuapp.com/weather/Seoul')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('temperature').innerHTML = data['temperature']
  })

fetch('https://goweather.herokuapp.com/weather/Chungcheongnam-do')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('temp1').innerHTML = data['temperature']
  })

fetch('https://goweather.herokuapp.com/weather/Jeju')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('temp2').innerHTML = data['temperature']
  })
