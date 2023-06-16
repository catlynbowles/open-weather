export const getCityCoordinate = (city, state) => {
  return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => returnResponse(response))
}

export const getLocalWeather = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => returnResponse(response))
}

export const getCityList = () => {
  fetch("http://localhost:3001/states")
    .then(data => data.json())
    .then(it => console.log(it))
  // var req = unirest(
  //   "GET",
  //   "https://www.universal-tutorial.com/api/states/United States"
  // );

  // req.headers({
  //   Accept: "application/json",
  //   "api-token":
  //     "Y5oEJTdQnnhJ6XExLYM8Nv11nTzt1jbFuX5bFZ-TOjUunVxVtuIqZpRAIxv-9EVQn48",
  //   "user-email": "catlynbowles@gmail.com",
  // });
}

const returnResponse = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error()
  }
}


