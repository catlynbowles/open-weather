export const getCityCoordinate = (city, state) => {
  return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => returnResponse(response))
}

export const getLocalWeather = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => returnResponse(response))
}

const returnResponse = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error()
  }
}
