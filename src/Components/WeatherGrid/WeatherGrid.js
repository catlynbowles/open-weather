import { useEffect, useState } from "react"
import { getLocalWeather } from "../../apiCalls"
import WeatherCard from "../WeatherCard/WeatherCard"

const WeatherGrid = ({cityCoordinates}) => {
  const [cityDetails, setCityDetails] = useState([])

  useEffect(() => {
    Promise.all(cityCoordinates.map(city => getLocalWeather(city.lat.toFixed(2), city.lon.toFixed(2))))
      .then(data => setCityDetails(data))
      console.log('itran')
  }, [cityCoordinates])

  const generateWeatherCards = (weatherStatistics) => {
    return weatherStatistics.map(city => {
      return (
        <WeatherCard 
          id={city.id}
          key={city.id}
          name={`${city.name}`}
          temp={city.main.temp}
          icon={city.weather[0].icon}
        />
      )
    })
  }

  return (
    <div>{cityDetails.length ? generateWeatherCards(cityDetails) : null}</div>
  )
}

export default WeatherGrid