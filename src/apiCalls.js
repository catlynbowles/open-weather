export const fetchData = () => {
  return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London,England,GB&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Error')
      }
    })
}